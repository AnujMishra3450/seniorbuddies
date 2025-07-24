import { SiteContent } from '../types';

export const defaultSiteContent: SiteContent = {
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