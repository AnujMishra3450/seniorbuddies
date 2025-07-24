import React from 'react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
  showActions?: boolean;
  onEdit?: (member: TeamMember) => void;
  onDelete?: (id: string) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, showActions, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {member.image && (
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-700 leading-relaxed">{member.bio}</p>

        {showActions && (
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => onEdit?.(member)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete?.(member.id)}
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

export default TeamMemberCard;