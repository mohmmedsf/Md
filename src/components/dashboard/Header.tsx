import React from 'react';
import { Bell, Search, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-secondary-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="relative max-w-md w-full">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-secondary-400" />
              </span>
              <input
                type="text"
                placeholder="البحث..."
                className="input-primary pr-10"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-secondary-400 hover:text-secondary-500 transition-colors duration-200">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            <div className="relative">
              <button className="flex items-center space-x-3 focus:outline-none group">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-primary-100"
                    src={`https://ui-avatars.com/api/?name=${user?.name}&background=0ea5e9&color=fff`}
                    alt={user?.name}
                  />
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary-900">{user?.name}</p>
                    <p className="text-xs text-secondary-500">{user?.email}</p>
                  </div>
                  <ChevronDown className="h-5 w-5 text-secondary-400 group-hover:text-secondary-500" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}