import React, { useState } from 'react';
import { Bell, Lock, Globe, Moon, Sun } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    theme: 'light',
    language: 'ar',
  });

  const handleNotificationChange = (type: string) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [type]: !settings.notifications[type as keyof typeof settings.notifications],
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">الإعدادات</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Bell className="h-5 w-5 ml-2 text-gray-500" />
            إعدادات الإشعارات
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">إشعارات البريد الإلكتروني</p>
                <p className="text-sm text-gray-500">
                  استلام تحديثات الشحنات عبر البريد الإلكتروني
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={() => handleNotificationChange('email')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">إشعارات الجوال</p>
                <p className="text-sm text-gray-500">
                  استلام إشعارات فورية على الجوال
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={() => handleNotificationChange('push')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">الرسائل النصية</p>
                <p className="text-sm text-gray-500">
                  استلام تحديثات عبر الرسائل النصية
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={() => handleNotificationChange('sms')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Lock className="h-5 w-5 ml-2 text-gray-500" />
            الأمان
          </h2>
          <div className="space-y-4">
            <button className="w-full text-right px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              تغيير كلمة المرور
            </button>
            <button className="w-full text-right px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              تفعيل المصادقة الثنائية
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Globe className="h-5 w-5 ml-2 text-gray-500" />
            التفضيلات
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">المظهر</p>
                <p className="text-sm text-gray-500">اختر مظهر التطبيق</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSettings({ ...settings, theme: 'light' })}
                  className={`p-2 rounded-lg ${
                    settings.theme === 'light'
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  <Sun className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setSettings({ ...settings, theme: 'dark' })}
                  className={`p-2 rounded-lg ${
                    settings.theme === 'dark'
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  <Moon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">اللغة</p>
                <p className="text-sm text-gray-500">اختر لغة التطبيق</p>
              </div>
              <select
                value={settings.language}
                onChange={(e) =>
                  setSettings({ ...settings, language: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}