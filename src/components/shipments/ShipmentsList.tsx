import React from 'react';
import { Package, Search, Filter } from 'lucide-react';

export default function ShipmentsList() {
  const shipments = [
    {
      id: 'SHP001',
      from: 'الرياض',
      to: 'جدة',
      status: 'قيد التوصيل',
      date: '2024-03-15',
      weight: '5 كجم',
      price: '75 ريال',
    },
    {
      id: 'SHP002',
      from: 'جدة',
      to: 'الدمام',
      status: 'تم التسليم',
      date: '2024-03-14',
      weight: '3 كجم',
      price: '60 ريال',
    },
    {
      id: 'SHP003',
      from: 'الدمام',
      to: 'الرياض',
      status: 'في الانتظار',
      date: '2024-03-13',
      weight: '7 كجم',
      price: '90 ريال',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">الشحنات</h1>
        <button className="btn-primary">
          <Package className="h-5 w-5 ml-2" />
          شحنة جديدة
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث عن شحنة..."
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Filter className="h-5 w-5 ml-2" />
              تصفية
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-right text-sm font-medium text-gray-500 border-b">
                  <th className="pb-4 pl-6">رقم الشحنة</th>
                  <th className="pb-4 px-6">من</th>
                  <th className="pb-4 px-6">إلى</th>
                  <th className="pb-4 px-6">الحالة</th>
                  <th className="pb-4 px-6">التاريخ</th>
                  <th className="pb-4 px-6">الوزن</th>
                  <th className="pb-4 pr-6">السعر</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {shipments.map((shipment) => (
                  <tr
                    key={shipment.id}
                    className="text-sm text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="py-4 pl-6 font-medium">{shipment.id}</td>
                    <td className="py-4 px-6">{shipment.from}</td>
                    <td className="py-4 px-6">{shipment.to}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          shipment.status === 'قيد التوصيل'
                            ? 'bg-yellow-100 text-yellow-800'
                            : shipment.status === 'تم التسليم'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {shipment.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">{shipment.date}</td>
                    <td className="py-4 px-6">{shipment.weight}</td>
                    <td className="py-4 pr-6">{shipment.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}