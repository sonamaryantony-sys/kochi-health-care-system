"use client";
import { useState } from "react";

export default function AdminPage() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* SIDEBAR */}
      <div className="w-64 bg-blue-900 text-white p-4 min-h-screen sticky top-0">
        <div className="mb-8">
          <h2 className="font-bold text-lg">🏥 Kochi Health</h2>
          <p className="font-bold text-lg -mt-1">Care System</p>
          <p className="text-xs text-blue-300 mt-1">Healthcare Admin</p>
        </div>
        
        <div className="space-y-1">
          {[
            { name: "Dashboard", icon: "📊" },
            { name: "Appointments", icon: "📅" },
            { name: "Doctors", icon: "👨‍⚕️" },
            { name: "Patients", icon: "👥" },
            { name: "Revenue", icon: "💰" },
            { name: "Reports", icon: "📄" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full text-left p-3 rounded-lg flex gap-2 font-bold transition ${
                active === item.name ? "bg-blue-700 text-white shadow" : "text-blue-200 hover:bg-blue-800"
              }`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <a href="/" className="bg-white text-blue-900 px-4 py-2 rounded-full font-bold text-sm block text-center">← Back to Home</a>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-black mb-6">{active}</h1>

        {active === "Dashboard" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="bg-white p-6 rounded-2xl shadow border text-center"><p className="font-bold text-black">Total Appointments</p><p className="text-3xl font-bold text-black mt-2">1248</p><p className="text-xs font-bold text-green-700 mt-2">↑ 12% from last month</p></div>
              <div className="bg-white p-6 rounded-2xl shadow border text-center"><p className="font-bold text-black">Revenue</p><p className="text-3xl font-bold text-black mt-2">₹842500</p><p className="text-xs font-bold text-green-700 mt-2">↑ 8.4% from last month</p></div>
              <div className="bg-white p-6 rounded-2xl shadow border text-center"><p className="font-bold text-black">Active Doctors</p><p className="text-3xl font-bold text-black mt-2">42</p><p className="text-xs font-bold text-black mt-2">↑ 3 new this month</p></div>
              <div className="bg-white p-6 rounded-2xl shadow border text-center"><p className="font-bold text-black">Patients</p><p className="text-3xl font-bold text-black mt-2">3,166</p><p className="text-xs font-bold text-green-700 mt-2">↑ 15% from last month</p></div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border mt-8">
              <h2 className="font-bold text-lg text-black mb-4">Recent Bookings (Live from your site)</h2>
              <div className="space-y-3">
                <div className="flex justify-between p-4 bg-slate-50 rounded-xl border"><div><p className="font-bold text-black">KHC2847 - Dr. Arjun Nair</p><p className="text-sm text-black">Amrita Hospital</p></div><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs h-fit font-bold">Paid</span></div>
                <div className="flex justify-between p-4 bg-slate-50 rounded-xl border"><div><p className="font-bold text-black">KHC2848 - Dr. Priya Menon</p><p className="text-sm text-black">Lakeshore Hospital</p></div><span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs h-fit font-bold">Pending</span></div>
                <div className="flex justify-between p-4 bg-slate-50 rounded-xl border"><div><p className="font-bold text-black">KHC2849 - Dr. Suresh Kumar</p><p className="text-sm text-black">Medical Trust</p></div><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs h-fit font-bold">Paid</span></div>
              </div>
            </div>
          </>
        )}

        {active === "Appointments" && (
          <div className="bg-white p-6 rounded-2xl shadow border">
            <p className="text-black font-bold">All Appointments - 1248 total</p>
            <div className="mt-4 space-y-2">
              <div className="p-3 border rounded-lg text-black font-medium">KHC2847 - Today 10:00 AM - Dr. Arjun - Paid ✅</div>
              <div className="p-3 border rounded-lg text-black font-medium">KHC2848 - Today 11:30 AM - Dr. Priya - Pending ⏳</div>
              <div className="p-3 border rounded-lg text-black font-medium">KHC2849 - Tomorrow 9:00 AM - Dr. Suresh - Paid ✅</div>
            </div>
          </div>
        )}

        {active === "Doctors" && (
          <div className="bg-white p-6 rounded-2xl shadow border">
            <p className="text-black font-bold mb-4">42 Active Doctors</p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="border p-4 rounded-xl"><p className="font-bold text-black">Dr. Arjun Nair</p><p className="text-sm text-black">Cardiology - Amrita</p></div>
              <div className="border p-4 rounded-xl"><p className="font-bold text-black">Dr. Priya Menon</p><p className="text-sm text-black">Dermatology - Lakeshore</p></div>
              <div className="border p-4 rounded-xl"><p className="font-bold text-black">Dr. Suresh Kumar</p><p className="text-sm text-black">Orthopedics - Medical Trust</p></div>
            </div>
          </div>
        )}

        {active === "Patients" && (
          <div className="bg-white p-6 rounded-2xl shadow border"><p className="font-bold text-black">Patients List - 3,166</p><p className="text-black mt-2">Patient data will come from database. Demo: Rahul, Priya, Suresh...</p></div>
        )}

        {active === "Revenue" && (
          <div className="bg-white p-6 rounded-2xl shadow border"><p className="font-bold text-black text-2xl">₹8,42,500 Total Revenue</p><p className="text-black mt-2 font-bold text-green-700">↑ 8.4% growth - Chart will show here</p></div>
        )}

        {active === "Reports" && (
          <div className="bg-white p-6 rounded-2xl shadow border"><p className="font-bold text-black">Reports</p><button className="mt-3 bg-blue-900 text-white px-4 py-2 rounded-full font-bold">📥 Download Monthly Report</button></div>
        )}
      </div>
    </div>
  );
}
