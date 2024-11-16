import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from './Overview';
import ShipmentsList from '../shipments/ShipmentsList';
import NewShipment from '../shipments/NewShipment';
import TrackShipment from '../shipments/TrackShipment';
import ShipmentDetails from '../shipments/ShipmentDetails';
import Profile from '../profile/Profile';
import Settings from '../settings/Settings';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/shipments" element={<ShipmentsList />} />
              <Route path="/shipments/:id" element={<ShipmentDetails id="1" />} />
              <Route path="/new-shipment" element={<NewShipment />} />
              <Route path="/track" element={<TrackShipment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}