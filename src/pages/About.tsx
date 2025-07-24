import React from 'react';
import { useContent } from '../context/ContentContext';
import TeamMemberCard from '../components/UI/TeamMemberCard';

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Senior Buddies</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Learn more about our organization, our mission, and the dedicated team that makes it all possible.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">{content.aboutUs}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">{content.mission}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A community where every senior feels valued, connected, and supported, with access to meaningful relationships and enriching experiences that enhance their quality of life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Respect and dignity for all members</li>
                <li>• Inclusive and welcoming environment</li>
                <li>• Community support and mutual aid</li>
                <li>• Active and healthy aging</li>
                <li>• Lifelong learning and growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team works tirelessly to create meaningful experiences and foster connections within our senior community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl">Making a difference in our community, one connection at a time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-lg">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-lg">Years Serving</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;