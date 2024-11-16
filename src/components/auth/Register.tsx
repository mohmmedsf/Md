import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Building2, Truck } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

type UserType = 'customer' | 'courier' | 'company';

export default function Register() {
  const [userType, setUserType] = useState<UserType>('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({ ...formData, type: userType });
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">إنشاء حساب جديد</h2>
          <p className="text-gray-600">اختر نوع الحساب وأدخل بياناتك</p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setUserType('customer')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              userType === 'customer'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <User className="h-5 w-5 mr-2" />
            عميل
          </button>
          <button
            onClick={() => setUserType('courier')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              userType === 'courier'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Truck className="h-5 w-5 mr-2" />
            مندوب
          </button>
          <button
            onClick={() => setUserType('company')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              userType === 'company'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Building2 className="h-5 w-5 mr-2" />
            شركة
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {userType === 'company' ? 'اسم الشركة' : 'الاسم الكامل'}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              كلمة المرور
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            إنشاء الحساب
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          لديك حساب بالفعل؟{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}