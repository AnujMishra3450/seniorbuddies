import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, Star } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
  const { content } = useContent();

  const features = [
    {
      icon: Heart,
      title: "Meaningful Connections",
      description: "Build lasting friendships and support networks within our caring community."
    },
    {
      icon: Users,
      title: "Social Activities",
      description: "Join group activities, workshops, and events designed for seniors to enjoy together."
    },
    {
      icon: Calendar,
      title: "Regular Programs",
      description: "Participate in our weekly and monthly programs that keep you engaged and active."
    },
    {
      icon: Star,
      title: "Supportive Environment",
      description: "Experience a welcoming space where every member is valued and supported."
    }
  ];

  const upcomingEvents = content.events.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 font-medium mb-6">
              {content.hero.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              {content.hero.description}
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                to="/events"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                View Upcoming Events
              </Link>
              <Link
                to="/about"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors shadow-md"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {content.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Discover the many ways we support our senior community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us for these exciting upcoming activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {event.image && (
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards building meaningful connections and enjoying enriching activities with fellow seniors.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="tel:555-123-4567"
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call Us Today
            </a>
            <a
              href="mailto:info@seniorbuddies.org"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-800 transition-colors"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;