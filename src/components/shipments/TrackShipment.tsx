import React, { useState } from 'react';
import { Search, Package, MapPin, Truck, CheckCircle } from 'lucide-react';

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentStatus, setShipmentStatus] = useState<any>(null);

  // Mock tracking data
  const mockTrackingData = {
    id: 'SHP001',
    status: 'في الطريق',
    currentLocation: 'الرياض',
    destination: 'جدة',
    timeline: [
      {
        status: 'تم استلام الطلب',
        location: 'الرياض',
        date: '2024-03-15 09:00',
        completed: true,
      },
      {
        status: 'في المستودع',
        location: 'الرياض',
        date: '2024-03-15 11:30',
        completed: true,
      },
      {
        status: 'في الطريق',
        location: 'الرياض - جدة',
        date: '2024-03-15 14:00',
        completed: true,
      },
      {
        status: 'تم التسليم',
        location: 'جدة',
        date: '-',
        completed: false,
      },
    ],
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setShipmentStatus(mockTrackingData);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">تتبع شحنتك</h1>
        <p className="text-gray-600">أدخل رقم التتبع لمعرفة حالة شحنتك</p>
      </div>

      <form onSubmit={handleTrack} className="mb-8">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="أدخل رقم التتبع"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            تتبع
          </button>
        </div>
      </form>

      {shipmentStatus && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                شحنة رقم: {shipmentStatus.id}
              </h2>
              <p className="text-gray-600">الحالة: {shipmentStatus.status}</p>
            </div>
            <Package className="h-8 w-8 text-blue-600" />
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 ml-2" />
              <div>
                <p className="text-sm text-gray-600">من</p>
                <p className="font-medium">{shipmentStatus.currentLocation}</p>
              </div>
            </div>
            <Truck className="h-6 w-6 text-blue-600" />
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 ml-2" />
              <div>
                <p className="text-sm text-gray-600">إلى</p>
                <p className="font-medium">{shipmentStatus.destination}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-5 right-3 w-0.5 h-full bg-gray-200 -z-10"></div>
            <div className="space-y-8">
              {shipmentStatus.timeline.map((event: any, index: number) => (
                <div key={index} className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full ${
                      event.completed ? 'bg-blue-600' : 'bg-gray-200'
                    } flex items-center justify-center`}
                  >
                    {event.completed && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{event.status}</p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}