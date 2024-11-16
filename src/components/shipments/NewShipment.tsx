import React, { useState } from 'react';
import { Package, MapPin, Weight, DollarSign } from 'lucide-react';

export default function NewShipment() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    weight: '',
    description: '',
    type: 'standard',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle shipment creation
    console.log('New shipment:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">إنشاء شحنة جديدة</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              موقع الاستلام
            </label>
            <div className="relative">
              <MapPin className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="المدينة، الحي، الشارع"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              موقع التسليم
            </label>
            <div className="relative">
              <MapPin className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="المدينة، الحي، الشارع"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            نوع الشحنة
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="standard">قياسية</option>
            <option value="express">سريعة</option>
            <option value="fragile">قابلة للكسر</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الوزن (كجم)
          </label>
          <div className="relative">
            <Weight className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            وصف الشحنة
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="تفاصيل إضافية عن الشحنة..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Package className="h-5 w-5 ml-2" />
          إنشاء الشحنة
        </button>
      </form>
    </div>
  );
}