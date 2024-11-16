import React from 'react';
import { Package, MapPin, Truck, User, Phone, Calendar, DollarSign } from 'lucide-react';

export default function ShipmentDetails({ id }: { id: string }) {
  // Mock shipment data
  const shipment = {
    id: 'SHP001',
    status: 'قيد التوصيل',
    from: {
      address: 'الرياض، حي النزهة، شارع العليا',
      contact: 'أحمد محمد',
      phone: '0501234567',
    },
    to: {
      address: 'جدة، حي الروضة، شارع فلسطين',
      contact: 'محمد أحمد',
      phone: '0507654321',
    },
    details: {
      weight: '5 كجم',
      type: 'قياسية',
      date: '2024-03-15',
      price: '75 ريال',
      paymentStatus: 'مدفوع',
    },
    courier: {
      name: 'عبدالله العمري',
      phone: '0509876543',
      vehicle: 'تويوتا هايس',
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          تفاصيل الشحنة #{shipment.id}
        </h1>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            shipment.status === 'قيد التوصيل'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}
        >
          {shipment.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            معلومات الشحنة
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Package className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">نوع الشحنة</p>
                <p className="text-sm text-gray-600">{shipment.details.type}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">تاريخ الشحن</p>
                <p className="text-sm text-gray-600">{shipment.details.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">التكلفة</p>
                <p className="text-sm text-gray-600">{shipment.details.price}</p>
                <p className="text-xs text-green-600">
                  {shipment.details.paymentStatus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            معلومات المندوب
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">اسم المندوب</p>
                <p className="text-sm text-gray-600">{shipment.courier.name}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">رقم الجوال</p>
                <p className="text-sm text-gray-600">{shipment.courier.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">المركبة</p>
                <p className="text-sm text-gray-600">{shipment.courier.vehicle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            عنوان المرسل
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">العنوان</p>
                <p className="text-sm text-gray-600">{shipment.from.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">اسم المرسل</p>
                <p className="text-sm text-gray-600">{shipment.from.contact}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">رقم الجوال</p>
                <p className="text-sm text-gray-600">{shipment.from.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            عنوان المستلم
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">العنوان</p>
                <p className="text-sm text-gray-600">{shipment.to.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">اسم المستلم</p>
                <p className="text-sm text-gray-600">{shipment.to.contact}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">رقم الجوال</p>
                <p className="text-sm text-gray-600">{shipment.to.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}