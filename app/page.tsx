"use client";
import { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Arjun Nair", dept: "Cardiology", hospital: "Amrita Hospital", fee: 500 },
  { id: 2, name: "Dr. Priya Menon", dept: "Dermatology", hospital: "Lakeshore Hospital", fee: 400 },
  { id: 3, name: "Dr. Suresh Kumar", dept: "Orthopedics", hospital: "Medical Trust", fee: 600 },
  { id: 4, name: "Dr. Anjali Rao", dept: "Pediatrics", hospital: "Aster Medcity", fee: 350 },
  { id: 5, name: "Dr. Vivek Pillai", dept: "Neurology", hospital: "Rajagiri Hospital", fee: 800 },
  { id: 6, name: "Dr. Lakshmi S", dept: "Gynecology", hospital: "Sunrise Hospital", fee: 450 },
];

export default function Home() {
  const [tab, setTab] = useState("home");
  const [bookings, setBookings] = useState<any[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState("");

  const handleBook = (doc: any) => {
    if (!user) { setShowLogin(true); return; }
    const newBooking = {
      id: "KHC" + Math.floor(1000 + Math.random() * 9000),
      doctor: doc.name, dept: doc.dept, hospital: doc.hospital, fee: doc.fee,
      date: new Date().toLocaleString(), status: "Paid"
    };
    const updated = [...bookings, newBooking];
    setBookings(updated);
    setTab("receipt");
  };

  return (
    <main className="min-h-screen bg-black text-white pb-10">
      {/* TOP MENU - BLACK */}
      <header className="bg-zinc-900 text-white p-4 sticky top-0 z-10 shadow border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">Kochi Health Care System</h1>
          <div className="flex gap-2 md:gap-4 items-center">
            <button onClick={() => setTab("home")} className={`px-3 py-1 rounded-full text-sm ${tab==="home" ? "bg-white text-black" : "bg-zinc-800"}`}>Home</button>
            <button onClick={() => setTab("my")} className={`px-3 py-1 rounded-full text-sm ${tab==="my" ? "bg-white text-black" : "bg-zinc-800"}`}>My Bookings ({bookings.length})</button>
            {user ? <span className="text-sm">Hi, {user}</span> : <button onClick={() => setShowLogin(true)} className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold">Login</button>}
          </div>
        </div>
      </header>

      {tab === "home" && (
        <div className="p-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mt-4">Available Doctors in Kochi</h2>
          <p className="text-zinc-400 text-sm">Book appointment instantly - Kochi's top hospitals</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <div key={d.id} className="bg-zinc-900 p-5 rounded-2xl shadow border border-zinc-800 hover:border-zinc-600 transition">
                <h3 className="font-bold text-lg text-white">{d.name}</h3>
                <p className="text-sm text-sky-400 font-medium">{d.dept}</p>
                <p className="text-xs text-zinc-400 mt-1">🏥 {d.hospital}</p>
                <p className="text-sm font-bold mt-2">₹{d.fee} Consultation</p>
                <button onClick={() => handleBook(d)} className="mt-3 bg-white text-black px-4 py-2 rounded-full w-full font-bold hover:bg-zinc-200">Book Appointment</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "my" && (
        <div className="p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">👤 My Bookings</h2>
          <div className="mt-6 grid gap-3">
            {bookings.length ? bookings.map((b: any) => (
              <div key={b.id} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <div><b>{b.id}</b> - {b.doctor}<br/><span className="text-sm text-zinc-400">{b.hospital} | {b.dept}</span><br/><span className="text-xs text-zinc-500">{b.date}</span></div>
                <div className="text-right"><span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs font-bold">{b.status}</span><br/><span className="text-sm font-bold">₹{b.fee}</span></div>
              </div>
            )) : (
              <div className="bg-zinc-900 p-10 rounded-2xl text-center border border-zinc-800">
                <p className="text-zinc-400">No bookings yet</p>
                <button onClick={() => setTab("home")} className="mt-3 bg-white text-black px-5 py-2 rounded-full">Book Now</button>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "receipt" && bookings.length > 0 && (
        <div className="p-6">
          <div className="bg-zinc-900 rounded-2xl p-8 shadow max-w-lg mx-auto text-center mt-6 border border-zinc-800">
            <h2 className="text-2xl font-bold">✅ Booking Confirmed!</h2>
            <div className="mt-4 text-left bg-black p-4 rounded-xl border border-zinc-800">
              <p><b>Booking ID:</b> {bookings[bookings.length-1]?.id}</p>
              <p><b>Doctor:</b> {bookings[bookings.length-1]?.doctor}</p>
              <p><b>Hospital:</b> {bookings[bookings.length-1]?.hospital}</p>
              <p><b>Fee:</b> ₹{bookings[bookings.length-1]?.fee}</p>
              <p><b>Date:</b> {bookings[bookings.length-1]?.date}</p>
            </div>
            <button onClick={() => window.print()} className="mt-6 bg-white text-black px-6 py-2 rounded-full font-bold">🖨️ Print Receipt</button>
            <div className="mt-4 flex gap-3 justify-center">
              <button onClick={() => setTab("home")} className="underline text-sm text-zinc-400">Back to Home</button>
              <button onClick={() => setTab("my")} className="underline text-sm font-bold">View My Bookings</button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center p-8 bg-zinc-900 mt-10 border-t border-zinc-800">
        <p className="text-sm text-zinc-500 mb-3">For Hospital Staff Only</p>
        <a href="/admin" className="bg-white text-black px-8 py-3 rounded-xl font-bold no-underline inline-block shadow hover:bg-zinc-200">
          🔐 Admin Dashboard
        </a>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-20">
          <div className="bg-zinc-900 rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-zinc-700">
            <h3 className="font-bold text-lg">Login / Signup</h3>
            <p className="text-xs text-zinc-400">Enter your name to continue</p>
            <input id="nameInput" placeholder="Full Name" className="w-full p-3 border border-zinc-700 bg-black text-white rounded-xl mt-4" />
            <div className="flex gap-2 mt-4">
              <button onClick={() => setShowLogin(false)} className="flex-1 bg-zinc-800 p-3 rounded-xl">Cancel</button>
              <button onClick={() => { const val = (document.getElementById("nameInput") as HTMLInputElement)?.value; if(val){ setUser(val); setShowLogin(false); } }} className="flex-1 bg-white text-black p-3 rounded-xl font-bold">Login</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
