import React from 'react';
import { useContent } from '../context/ContentContext';
import EventCard from '../components/UI/EventCard';

const Events: React.FC = () => {
  const { content } = useContent();

  const currentDate = new Date();
  const upcomingEvents = content.events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = content.events.filter(event => new Date(event.date) < currentDate);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Join us for engaging activities, workshops, and social gatherings designed to bring our community together.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don't miss these exciting upcoming activities!</p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No upcoming events scheduled at this time.</p>
              <p className="text-gray-500 mt-2">Check back soon for new activities!</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
              <p className="text-lg text-gray-600">Take a look at some of our recent activities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="opacity-75 hover:opacity-100 transition-opacity">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            All of our events are open to seniors in the community. Come join us for friendship, fun, and meaningful connections!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="tel:555-123-4567"
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call to Register
            </a>
            <a
              href="mailto:info@seniorbuddies.org"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-800 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;