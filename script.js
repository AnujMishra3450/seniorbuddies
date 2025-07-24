// Site data
let siteData = {
    hero: {
        title: "Senior Buddies",
        subtitle: "Building Connections, Creating Community",
        description: "Bringing seniors together through meaningful activities, friendships, and support. Join our vibrant community where every connection matters."
    },
    mission: "Our mission is to combat social isolation among seniors by creating opportunities for meaningful connections, engaging activities, and mutual support within our community.",
    aboutUs: "Senior Buddies was founded with a simple yet powerful vision: no senior should feel alone or disconnected from their community. We organize regular social events, educational workshops, recreational activities, and volunteer opportunities that bring seniors together in a warm, welcoming environment. Our programs are designed to foster new friendships, maintain active lifestyles, and provide ongoing support for our members' physical, mental, and social well-being.",
    teamMembers: [
        {
            id: "1",
            name: "Margaret Chen",
            role: "Executive Director",
            bio: "Margaret has over 20 years of experience in senior services and community organizing. She founded Senior Buddies in 2019 with a passion for creating inclusive spaces for older adults.",
            image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: "2",
            name: "Robert Williams",
            role: "Program Coordinator",
            bio: "Robert brings enthusiasm and creativity to our programming. As a retired teacher, he specializes in educational workshops and intergenerational activities.",
            image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: "3",
            name: "Dorothy Martinez",
            role: "Community Outreach",
            bio: "Dorothy connects with local businesses and organizations to expand our network of support and opportunities for our members.",
            image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
    ],
    events: [
        {
            id: "1",
            title: "Morning Coffee & Conversation",
            date: "2025-01-15",
            time: "9:00 AM",
            location: "Community Center - Main Hall",
            description: "Join us for our weekly coffee meetup where friendships bloom over fresh coffee and engaging conversations. All are welcome!",
            image: "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: "2",
            title: "Senior Fitness & Wellness Workshop",
            date: "2025-01-18",
            time: "2:00 PM",
            location: "Recreation Center",
            description: "Learn gentle exercises and wellness tips designed specifically for seniors. Led by certified fitness instructors with experience in senior health.",
            image: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: "3",
            title: "Arts & Crafts Circle",
            date: "2025-01-22",
            time: "1:00 PM",
            location: "Community Center - Art Room",
            description: "Express your creativity in our monthly arts and crafts session. All materials provided, and beginners are always welcome!",
            image: "https://images.pexels.com/photos/6263119/pexels-photo-6263119.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: "4",
            title: "Technology Help Session",
            date: "2025-01-25",
            time: "10:00 AM",
            location: "Library - Computer Lab",
            description: "Get help with smartphones, tablets, and computers from our friendly volunteers. Bring your devices and questions!",
            image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]
};

// State management
let isAdmin = false;
let editingEventId = null;
let editingMemberId = null;

// Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the correct nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes(pageId) || 
            (pageId === 'home' && link.textContent.toLowerCase() === 'home')) {
            link.classList.add('active');
        }
    });
    
    // Load page-specific content
    if (pageId === 'events') {
        loadEvents();
    } else if (pageId === 'about') {
        loadTeamMembers();
    } else if (pageId === 'home') {
        loadHomeEvents();
    } else if (pageId === 'admin') {
        loadAdminContent();
    }
    
    // Add fade-in animation
    document.getElementById(pageId).classList.add('fade-in');
    setTimeout(() => {
        document.getElementById(pageId).classList.remove('fade-in');
    }, 500);
}

// Admin functionality
function toggleAdmin() {
    isAdmin = !isAdmin;
    const adminToggle = document.getElementById('adminToggle');
    const adminLink = document.getElementById('adminLink');
    
    if (isAdmin) {
        adminToggle.classList.add('text-blue-800', 'bg-blue-50');
        adminToggle.classList.remove('text-gray-600');
        adminLink.classList.remove('hidden');
    } else {
        adminToggle.classList.remove('text-blue-800', 'bg-blue-50');
        adminToggle.classList.add('text-gray-600');
        adminLink.classList.add('hidden');
    }
    
    // Update admin page visibility
    if (document.getElementById('admin').classList.contains('active')) {
        loadAdminContent();
    }
}

function loadAdminContent() {
    const adminAccessDenied = document.getElementById('adminAccessDenied');
    const adminContent = document.getElementById('adminContent');
    
    if (isAdmin) {
        adminAccessDenied.classList.add('hidden');
        adminContent.classList.remove('hidden');
        loadAdminForms();
        loadAdminEvents();
        loadAdminTeam();
    } else {
        adminAccessDenied.classList.remove('hidden');
        adminContent.classList.add('hidden');
    }
}

function loadAdminForms() {
    // Load hero form
    document.getElementById('editHeroTitle').value = siteData.hero.title;
    document.getElementById('editHeroSubtitle').value = siteData.hero.subtitle;
    document.getElementById('editHeroDescription').value = siteData.hero.description;
    
    // Load content forms
    document.getElementById('editMission').value = siteData.mission;
    document.getElementById('editAboutUs').value = siteData.aboutUs;
}

// Admin tab switching
function switchAdminTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Show selected tab content
    document.getElementById(`admin-${tabId}`).classList.remove('hidden');
    
    // Update tab buttons
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('border-blue-500', 'text-blue-600');
        tab.classList.add('border-transparent', 'text-gray-500');
    });
    
    // Activate selected tab
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    activeTab.classList.add('border-blue-500', 'text-blue-600');
    activeTab.classList.remove('border-transparent', 'text-gray-500');
}

// Content management
function saveHeroContent() {
    siteData.hero.title = document.getElementById('editHeroTitle').value;
    siteData.hero.subtitle = document.getElementById('editHeroSubtitle').value;
    siteData.hero.description = document.getElementById('editHeroDescription').value;
    
    // Update the display
    document.getElementById('heroTitle').textContent = siteData.hero.title;
    document.getElementById('heroSubtitle').textContent = siteData.hero.subtitle;
    document.getElementById('heroDescription').textContent = siteData.hero.description;
    
    alert('Hero section updated successfully!');
}

function saveContent() {
    siteData.mission = document.getElementById('editMission').value;
    siteData.aboutUs = document.getElementById('editAboutUs').value;
    
    // Update the display
    document.getElementById('missionText').textContent = siteData.mission;
    document.getElementById('aboutUsText').textContent = siteData.aboutUs;
    document.getElementById('aboutMissionText').textContent = siteData.mission;
    
    alert('Content updated successfully!');
}

// Event management
function loadEvents() {
    const upcomingEventsGrid = document.getElementById('upcomingEventsGrid');
    const currentDate = new Date();
    const upcomingEvents = siteData.events.filter(event => new Date(event.date) >= currentDate);
    
    if (upcomingEvents.length === 0) {
        upcomingEventsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-lg text-gray-600">No upcoming events scheduled at this time.</p>
                <p class="text-gray-500 mt-2">Check back soon for new activities!</p>
            </div>
        `;
        return;
    }
    
    upcomingEventsGrid.innerHTML = upcomingEvents.map(event => createEventCard(event)).join('');
}

function loadHomeEvents() {
    const homeEventsGrid = document.getElementById('homeEventsGrid');
    const currentDate = new Date();
    const upcomingEvents = siteData.events.filter(event => new Date(event.date) >= currentDate).slice(0, 3);
    
    homeEventsGrid.innerHTML = upcomingEvents.map(event => createEventCard(event)).join('');
}

function createEventCard(event, showActions = false) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };
    
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            ${event.image ? `<img src="${event.image}" alt="${event.title}" class="w-full h-48 object-cover">` : ''}
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">${event.title}</h3>
                <div class="space-y-2 mb-4">
                    <div class="flex items-center text-gray-600">
                        <i data-lucide="calendar" class="h-4 w-4 mr-2 text-blue-600"></i>
                        <span class="text-sm">${formatDate(event.date)}</span>
                    </div>
                    <div class="flex items-center text-gray-600">
                        <i data-lucide="clock" class="h-4 w-4 mr-2 text-green-600"></i>
                        <span class="text-sm">${event.time}</span>
                    </div>
                    <div class="flex items-center text-gray-600">
                        <i data-lucide="map-pin" class="h-4 w-4 mr-2 text-red-600"></i>
                        <span class="text-sm">${event.location}</span>
                    </div>
                </div>
                <p class="text-gray-700 leading-relaxed">${event.description}</p>
                ${showActions ? `
                    <div class="mt-4 flex space-x-2">
                        <button onclick="editEvent('${event.id}')" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                            Edit
                        </button>
                        <button onclick="deleteEvent('${event.id}')" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm">
                            Delete
                        </button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function loadAdminEvents() {
    const adminEventsGrid = document.getElementById('adminEventsGrid');
    adminEventsGrid.innerHTML = siteData.events.map(event => createEventCard(event, true)).join('');
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

function showAddEventForm() {
    document.getElementById('eventForm').classList.remove('hidden');
    editingEventId = null;
    clearEventForm();
}

function clearEventForm() {
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventTime').value = '';
    document.getElementById('eventLocation').value = '';
    document.getElementById('eventImage').value = '';
    document.getElementById('eventDescription').value = '';
}

function editEvent(eventId) {
    const event = siteData.events.find(e => e.id === eventId);
    if (!event) return;
    
    editingEventId = eventId;
    document.getElementById('eventForm').classList.remove('hidden');
    
    document.getElementById('eventTitle').value = event.title;
    document.getElementById('eventDate').value = event.date;
    document.getElementById('eventTime').value = event.time;
    document.getElementById('eventLocation').value = event.location;
    document.getElementById('eventImage').value = event.image || '';
    document.getElementById('eventDescription').value = event.description;
    
    document.querySelector('#eventForm h3').textContent = 'Edit Event';
}

function saveEvent() {
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const location = document.getElementById('eventLocation').value;
    const image = document.getElementById('eventImage').value;
    const description = document.getElementById('eventDescription').value;
    
    if (!title || !date || !time || !location) {
        alert('Please fill in all required fields');
        return;
    }
    
    const eventData = {
        id: editingEventId || Date.now().toString(),
        title,
        date,
        time,
        location,
        description,
        image
    };
    
    if (editingEventId) {
        const index = siteData.events.findIndex(e => e.id === editingEventId);
        siteData.events[index] = eventData;
    } else {
        siteData.events.push(eventData);
    }
    
    cancelEventForm();
    loadAdminEvents();
    alert('Event saved successfully!');
}

function deleteEvent(eventId) {
    if (confirm('Are you sure you want to delete this event?')) {
        siteData.events = siteData.events.filter(e => e.id !== eventId);
        loadAdminEvents();
        alert('Event deleted successfully!');
    }
}

function cancelEventForm() {
    document.getElementById('eventForm').classList.add('hidden');
    editingEventId = null;
    clearEventForm();
    document.querySelector('#eventForm h3').textContent = 'Add New Event';
}

// Team management
function loadTeamMembers() {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = siteData.teamMembers.map(member => createTeamMemberCard(member)).join('');
}

function createTeamMemberCard(member, showActions = false) {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            ${member.image ? `<img src="${member.image}" alt="${member.name}" class="w-full h-64 object-cover">` : ''}
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-1">${member.name}</h3>
                <p class="text-blue-600 font-medium mb-3">${member.role}</p>
                <p class="text-gray-700 leading-relaxed">${member.bio}</p>
                ${showActions ? `
                    <div class="mt-4 flex space-x-2">
                        <button onclick="editMember('${member.id}')" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                            Edit
                        </button>
                        <button onclick="deleteMember('${member.id}')" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm">
                            Delete
                        </button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function loadAdminTeam() {
    const adminTeamGrid = document.getElementById('adminTeamGrid');
    adminTeamGrid.innerHTML = siteData.teamMembers.map(member => createTeamMemberCard(member, true)).join('');
}

function showAddMemberForm() {
    document.getElementById('memberForm').classList.remove('hidden');
    editingMemberId = null;
    clearMemberForm();
}

function clearMemberForm() {
    document.getElementById('memberName').value = '';
    document.getElementById('memberRole').value = '';
    document.getElementById('memberImage').value = '';
    document.getElementById('memberBio').value = '';
}

function editMember(memberId) {
    const member = siteData.teamMembers.find(m => m.id === memberId);
    if (!member) return;
    
    editingMemberId = memberId;
    document.getElementById('memberForm').classList.remove('hidden');
    
    document.getElementById('memberName').value = member.name;
    document.getElementById('memberRole').value = member.role;
    document.getElementById('memberImage').value = member.image || '';
    document.getElementById('memberBio').value = member.bio;
    
    document.querySelector('#memberForm h3').textContent = 'Edit Team Member';
}

function saveMember() {
    const name = document.getElementById('memberName').value;
    const role = document.getElementById('memberRole').value;
    const image = document.getElementById('memberImage').value;
    const bio = document.getElementById('memberBio').value;
    
    if (!name || !role || !bio) {
        alert('Please fill in all required fields');
        return;
    }
    
    const memberData = {
        id: editingMemberId || Date.now().toString(),
        name,
        role,
        bio,
        image
    };
    
    if (editingMemberId) {
        const index = siteData.teamMembers.findIndex(m => m.id === editingMemberId);
        siteData.teamMembers[index] = memberData;
    } else {
        siteData.teamMembers.push(memberData);
    }
    
    cancelMemberForm();
    loadAdminTeam();
    loadTeamMembers(); // Update the about page as well
    alert('Team member saved successfully!');
}

function deleteMember(memberId) {
    if (confirm('Are you sure you want to delete this team member?')) {
        siteData.teamMembers = siteData.teamMembers.filter(m => m.id !== memberId);
        loadAdminTeam();
        loadTeamMembers(); // Update the about page as well
        alert('Team member deleted successfully!');
    }
}

function cancelMemberForm() {
    document.getElementById('memberForm').classList.add('hidden');
    editingMemberId = null;
    clearMemberForm();
    document.querySelector('#memberForm h3').textContent = 'Add New Team Member';
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up admin toggle
    document.getElementById('adminToggle').addEventListener('click', toggleAdmin);
    
    // Set up admin tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchAdminTab(this.dataset.tab);
        });
    });
    
    // Load initial content
    loadHomeEvents();
    
    // Initialize Lucide icons
    lucide.createIcons();
});