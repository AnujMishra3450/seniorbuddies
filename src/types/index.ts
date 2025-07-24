export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  mission: string;
  aboutUs: string;
  teamMembers: TeamMember[];
  events: Event[];
}