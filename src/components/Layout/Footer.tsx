import React from 'react';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Senior Buddies</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building connections and creating community for seniors through meaningful activities and support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@seniorbuddies.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">123 Community Street, Your City, ST 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">About Us</a>
              <a href="/events" className="block text-gray-300 hover:text-blue-400 transition-colors">Upcoming Events</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Volunteer</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Donate</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Senior Buddies. All rights reserved. | Building community, one connection at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;