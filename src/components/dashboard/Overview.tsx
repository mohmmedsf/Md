import React from 'react';
import { Package, Truck, Clock, CheckCircle } from 'lucide-react';

export default function Overview() {
  const stats = [
    {
      title: 'الشحنات النشطة',
      value: '12',
      icon: Package,
      color: 'blue',
    },
    {
      title: 'قيد التوصيل',
      value: '4',
      icon: Truck,
      color: 'yellow',
    },
    {
      title: 'في الانتظار',
      value: '3',
      icon: Clock,
      color: 'indigo',
    },
    {
      title: 'مكتملة',
      value: '156',
      icon: CheckCircle,
      color: 'green',
    },
  ];

  const recentShipments = [
    {
      id: 'SHP001',
      destination: 'الرياض',
      status: 'قيد التوصيل',
      date: '2024-03-15',
    },
    {
      id: 'SHP002',
      destination: 'جدة',
      status: 'تم التسليم',
      date: '2024-03-14',
    },
    {
      id: 'SHP003',
      destination: 'الدمام',
      status: 'في الانتظار',
      date: '2024-03-13',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm p-6 flex items-center"
          >
            <div
              className={`p-3 rounded-lg bg-${stat.color}-100 text-${stat.color}-600 ml-4`}
            >
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            آخر الشحنات
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-right text-sm font-medium text-gray-500">
                  <th className="pb-4 pl-6">رقم الشحنة</th>
                  <th className="pb-4 px-6">الوجهة</th>
                  <th className="pb-4 px-6">الحالة</th>
                  <th className="pb-4 pr-6">التاريخ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentShipments.map((shipment) => (
                  <tr key={shipment.id} className="text-sm text-gray-900">
                    <td className="py-4 pl-6 font-medium">{shipment.id}</td>
                    <td className="py-4 px-6">{shipment.destination}</td>
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
                    <td className="py-4 pr-6">{shipment.date}</td>
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