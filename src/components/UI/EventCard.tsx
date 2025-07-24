import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  showActions?: boolean;
  onEdit?: (event: Event) => void;
  onDelete?: (id: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, showActions, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {event.image && (
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-green-600" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-red-600" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">{event.description}</p>

        {showActions && (
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => onEdit?.(event)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete?.(event.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;