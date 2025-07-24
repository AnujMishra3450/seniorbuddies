import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Event, TeamMember } from '../types';
import EventCard from '../components/UI/EventCard';
import TeamMemberCard from '../components/UI/TeamMemberCard';
import { Plus, Save } from 'lucide-react';

const Admin: React.FC = () => {
  const { content, updateContent, isAdmin } = useContent();
  const [activeTab, setActiveTab] = useState<'hero' | 'events' | 'team' | 'content'>('hero');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showMemberForm, setShowMemberForm] = useState(false);

  // Form states
  const [heroForm, setHeroForm] = useState(content.hero);
  const [missionForm, setMissionForm] = useState(content.mission);
  const [aboutForm, setAboutForm] = useState(content.aboutUs);
  const [eventForm, setEventForm] = useState<Partial<Event>>({});
  const [memberForm, setMemberForm] = useState<Partial<TeamMember>>({});

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-4">You need admin access to view this page.</p>
          <p className="text-sm text-gray-500">Click the settings icon in the header to enable admin mode.</p>
        </div>
      </div>
    );
  }

  const handleSaveHero = () => {
    updateContent({ hero: heroForm });
    alert('Hero section updated successfully!');
  };

  const handleSaveContent = () => {
    updateContent({ mission: missionForm, aboutUs: aboutForm });
    alert('Content updated successfully!');
  };

  const handleSaveEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.time || !eventForm.location) {
      alert('Please fill in all required fields');
      return;
    }

    const newEvent: Event = {
      id: editingEvent?.id || Date.now().toString(),
      title: eventForm.title!,
      date: eventForm.date!,
      time: eventForm.time!,
      location: eventForm.location!,
      description: eventForm.description || '',
      image: eventForm.image
    };

    let updatedEvents;
    if (editingEvent) {
      updatedEvents = content.events.map(e => e.id === editingEvent.id ? newEvent : e);
    } else {
      updatedEvents = [...content.events, newEvent];
    }

    updateContent({ events: updatedEvents });
    setEventForm({});
    setEditingEvent(null);
    setShowEventForm(false);
    alert('Event saved successfully!');
  };

  const handleDeleteEvent = (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      const updatedEvents = content.events.filter(e => e.id !== id);
      updateContent({ events: updatedEvents });
      alert('Event deleted successfully!');
    }
  };

  const handleSaveMember = () => {
    if (!memberForm.name || !memberForm.role || !memberForm.bio) {
      alert('Please fill in all required fields');
      return;
    }

    const newMember: TeamMember = {
      id: editingMember?.id || Date.now().toString(),
      name: memberForm.name!,
      role: memberForm.role!,
      bio: memberForm.bio!,
      image: memberForm.image
    };

    let updatedMembers;
    if (editingMember) {
      updatedMembers = content.teamMembers.map(m => m.id === editingMember.id ? newMember : m);
    } else {
      updatedMembers = [...content.teamMembers, newMember];
    }

    updateContent({ teamMembers: updatedMembers });
    setMemberForm({});
    setEditingMember(null);
    setShowMemberForm(false);
    alert('Team member saved successfully!');
  };

  const handleDeleteMember = (id: string) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      const updatedMembers = content.teamMembers.filter(m => m.id !== id);
      updateContent({ teamMembers: updatedMembers });
      alert('Team member deleted successfully!');
    }
  };

  const tabs = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'content', label: 'Content' },
    { id: 'events', label: 'Events' },
    { id: 'team', label: 'Team' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage your website content and settings</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Hero Section Tab */}
        {activeTab === 'hero' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Hero Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={heroForm.title}
                  onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={heroForm.subtitle}
                  onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={heroForm.description}
                  onChange={(e) => setHeroForm({ ...heroForm, description: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleSaveHero}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Content</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                <textarea
                  value={missionForm}
                  onChange={(e) => setMissionForm(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">About Us</label>
                <textarea
                  value={aboutForm}
                  onChange={(e) => setAboutForm(e.target.value)}
                  rows={6}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleSaveContent}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Events</h2>
              <button
                onClick={() => {
                  setShowEventForm(true);
                  setEditingEvent(null);
                  setEventForm({});
                }}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Event</span>
              </button>
            </div>

            {(showEventForm || editingEvent) && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  {editingEvent ? 'Edit Event' : 'Add New Event'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={eventForm.title || ''}
                      onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                    <input
                      type="date"
                      value={eventForm.date || ''}
                      onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
                    <input
                      type="text"
                      value={eventForm.time || ''}
                      onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                      placeholder="e.g., 2:00 PM"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                    <input
                      type="text"
                      value={eventForm.location || ''}
                      onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={eventForm.image || ''}
                      onChange={(e) => setEventForm({ ...eventForm, image: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={eventForm.description || ''}
                      onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                      rows={3}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={handleSaveEvent}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Save Event
                  </button>
                  <button
                    onClick={() => {
                      setShowEventForm(false);
                      setEditingEvent(null);
                      setEventForm({});
                    }}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  showActions={true}
                  onEdit={(event) => {
                    setEditingEvent(event);
                    setEventForm(event);
                    setShowEventForm(true);
                  }}
                  onDelete={handleDeleteEvent}
                />
              ))}
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Team</h2>
              <button
                onClick={() => {
                  setShowMemberForm(true);
                  setEditingMember(null);
                  setMemberForm({});
                }}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Member</span>
              </button>
            </div>

            {(showMemberForm || editingMember) && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  {editingMember ? 'Edit Team Member' : 'Add New Team Member'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      value={memberForm.name || ''}
                      onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                    <input
                      type="text"
                      value={memberForm.role || ''}
                      onChange={(e) => setMemberForm({ ...memberForm, role: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={memberForm.image || ''}
                      onChange={(e) => setMemberForm({ ...memberForm, image: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio *</label>
                    <textarea
                      value={memberForm.bio || ''}
                      onChange={(e) => setMemberForm({ ...memberForm, bio: e.target.value })}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={handleSaveMember}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Save Member
                  </button>
                  <button
                    onClick={() => {
                      setShowMemberForm(false);
                      setEditingMember(null);
                      setMemberForm({});
                    }}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  showActions={true}
                  onEdit={(member) => {
                    setEditingMember(member);
                    setMemberForm(member);
                    setShowMemberForm(true);
                  }}
                  onDelete={handleDeleteMember}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;