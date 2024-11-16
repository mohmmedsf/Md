import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  User,
  Settings,
  LogOut,
  Truck,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'لوحة التحكم' },
    { path: '/dashboard/shipments', icon: Package, label: 'الشحنات' },
    { path: '/dashboard/new-shipment', icon: PlusCircle, label: 'شحنة جديدة' },
    { path: '/dashboard/profile', icon: User, label: 'الملف الشخصي' },
    { path: '/dashboard/settings', icon: Settings, label: 'الإعدادات' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col w-64 bg-white border-l border-secondary-200">
      <div className="flex items-center justify-center h-16 border-b border-secondary-200">
        <Truck className="h-8 w-8 text-primary-600 ml-2" />
        <span className="text-2xl font-bold text-primary-600 font-heading">شحن</span>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                isActive(item.path) ? 'nav-link-active' : 'nav-link-inactive'
              }`}
            >
              <item.icon className="h-5 w-5 ml-3" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-secondary-200">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
          >
            <LogOut className="h-5 w-5 ml-3" />
            تسجيل الخروج
          </button>
        </div>
      </div>
    </div>
  );
}