"use client";
import { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Arjun Nair", dept: "Cardiology", fee: 500 },
  { id: 2, name: "Dr. Priya Menon", dept: "Dermatology", fee: 400 },
  { id: 3, name: "Dr. Suresh Kumar", dept: "Orthopedics", fee: 600 },
  { id: 4, name: "Dr. Anjali Rao", dept: "Pediatrics", fee: 350 },
];

export default function Home() {
  const [tab, setTab] = useState("home");
  const [bookings, setBookings] = useState<any[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState("");

  const handleBook = (doc: any) => {
    const newBooking = {
      id: "KHC" + Math.floor(1000 + Math.random() * 9000),
      doctor: doc.name,
      dept: doc.dept,
      fee: doc.fee,
      date: new Date().toLocaleString(),
    };
    setBookings([...bookings, newBooking]);
    setTab("receipt");
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-10">
      <header className="bg-blue-900 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">Kochi Health Care</h1>
        <button onClick={() => setShowLogin(true)} className="bg-white text-blue-900 px-4 py-1 rounded-full text-sm">Login</button>
      </header>

      {tab === "home" && (
        <div className="p-6 grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {doctors.map((d) => (
            <div key={d.id} className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-bold text-lg">{d.name}</h3>
              <p className="text-sm text-slate-600">{d.dept} - ₹{d.fee}</p>
              <button onClick={() => handleBook(d)} className="mt-3 bg-blue-900 text-white px-4 py-2 rounded-full w-full">Book Appointment</button>
            </div>
          ))}
        </div>
      )}

      {tab === "my" && (
        <div className="p-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold">👤 My Appointments</h2>
          <div className="mt-4 grid gap-3">
            {bookings.length ? bookings.map((b: any) => (
              <div key={b.id} className="bg-white p-4 rounded-xl shadow">
                <b>{b.id}</b> - {b.doctor} ({b.dept})<br/>
                <span className="text-sm">{b.date} - Paid ₹{b.fee}</span>
              </div>
            )) : <p className="text-slate-500">No bookings yet</p>}
          </div>
          <button onClick={() => setTab("home")} className="mt-4 underline">Back to Home</button>
        </div>
      )}

      {tab === "receipt" && (
        <div className="bg-white rounded-2xl p-8 shadow max-w-lg mx-auto text-center mt-6">
          <h2 className="text-2xl font-bold">✅ Booking Confirmed!</h2>
          <p className="mt-3">
            ID: {bookings[bookings.length - 1]?.id}<br/>
            {bookings[bookings.length - 1]?.doctor} - ₹{bookings[bookings.length - 1]?.fee}
          </p>
          <button onClick={() => window.print()} className="mt-4 bg-sky-500 text-white px-5 py-2 rounded-full font-bold">Print Receipt</button>
          <div className="mt-4 flex gap-4 justify-center">
            <button onClick={() => setTab("home")} className="underline">Home</button>
            <button onClick={() => setTab("my")} className="underline">My Appointments</button>
          </div>
        </div>
      )}

      {/* ADMIN BUTTON - FIXED */}
      <div className="text-center p-6 bg-slate-100 mt-10">
        <a href="/admin" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold no-underline inline-block">
          🔐 Admin Dashboard
        </a>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-20">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="font-bold text-lg">Login / Signup</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full p-3 border rounded mt-3" />
            <div className="flex gap-2 mt-4">
              <button onClick={() => setShowLogin(false)} className="flex-1 bg-slate-200 p-3 rounded-xl">Cancel</button>
              <button onClick={() => { setShowLogin(false); setTab("my"); }} className="flex-1 bg-blue-900 text-white p-3 rounded-xl">Login</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
