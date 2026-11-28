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
    setBookings([...bookings, newBooking]);
    setTab("receipt");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-blue-900 text-white p-4 sticky top-0 z-10 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">Kochi Health Care System</h1>
          <div className="flex gap-4 items-center">
            <button onClick={() => setTab("home")} className={`px-3 py-1 rounded-full text-sm ${tab==="home" ? "bg-white text-blue-900" : "bg-blue-800"}`}>Home</button>
            <button onClick={() => setTab("my")} className={`px-3 py-1 rounded-full text-sm ${tab==="my" ? "bg-white text-blue-900" : "bg-blue-800"}`}>My Bookings ({bookings.length})</button>
            {user ? <span className="text-sm">Hi, {user}</span> : <button onClick={() => setShowLogin(true)} className="bg-white text-blue-900 px-4 py-1 rounded-full text-sm font-bold">Login</button>}
          </div>
        </div>
      </header>

      {tab === "home" && (
        <div className="p-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mt-4 text-black">Available Doctors in Kochi</h2>
          <p className="text-black text-sm font-semibold">Book appointment instantly - Kochi's top hospitals</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <div key={d.id} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition border border-slate-200">
                <h3 className="font-bold text-lg text-black">{d.name}</h3>
                <p className="text-sm text-blue-800 font-bold">{d.dept}</p>
                <p className="text-xs text-black font-medium mt-1">🏥 {d.hospital}</p>
                <p className="text-sm font-bold mt-2 text-black">₹{d.fee} Consultation</p>
                <button onClick={() => handleBook(d)} className="mt-3 bg-blue-900 text-white px-4 py-2 rounded-full w-full font-bold">Book Appointment</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "my" && (
        <div className="p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black">👤 My Bookings</h2>
          <div className="mt-6 grid gap-3">
            {bookings.length ? bookings.map((b: any) => (
              <div key={b.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center border border-slate-200">
                <div><b className="text-black">{b.id}</b> - <span className="text-black font-medium">{b.doctor}</span><br/><span className="text-sm text-black font-medium">{b.hospital} | {b.dept}</span><br/><span className="text-xs text-slate-900 font-bold">{b.date}</span></div>
                <div className="text-right"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">{b.status}</span><br/><span className="text-sm font-bold text-black">₹{b.fee}</span></div>
              </div>
            )) : (
              <div className="bg-white p-10 rounded-2xl text-center border border-slate-200"><p className="text-black font-bold">No bookings yet</p><button onClick={() => setTab("home")} className="mt-3 bg-blue-900 text-white px-5 py-2 rounded-full">Book Now</button></div>
            )}
          </div>
        </div>
      )}

      {tab === "receipt" && bookings.length > 0 && (
        <div className="p-6">
          <div className="bg-white rounded-2xl p-8 shadow max-w-lg mx-auto text-center mt-6 border border-slate-300">
            <h2 className="text-2xl font-bold text-black">✅ Booking Confirmed!</h2>
            <div className="mt-4 text-left bg-slate-50 p-4 rounded-xl border">
              <p className="text-black"><b>Booking ID:</b> {bookings[bookings.length-1]?.id}</p>
              <p className="text-black"><b>Doctor:</b> {bookings[bookings.length-1]?.doctor}</p>
              <p className="text-black"><b>Hospital:</b> {bookings[bookings.length-1]?.hospital}</p>
              <p className="text-black"><b>Fee:</b> ₹{bookings[bookings.length-1]?.fee}</p>
            </div>
            <button onClick={() => window.print()} className="mt-6 bg-sky-600 text-white px-6 py-2 rounded-full font-bold">🖨️ Print Receipt</button>
          </div>
        </div>
      )}

      <div className="text-center p-8 bg-slate-100 mt-10 border-t">
        <a href="/admin" className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold no-underline inline-block shadow">🔐 Admin Dashboard</a>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-20">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl border-2 border-slate-300">
            <h3 className="font-bold text-lg text-black">Login / Signup</h3>
            <input id="nameInput" placeholder="Full Name" className="w-full p-3 border-2 border-slate-800 rounded-xl mt-4 text-black font-bold placeholder:text-black" />
            <div className="flex gap-2 mt-4">
              <button onClick={() => setShowLogin(false)} className="flex-1 bg-slate-200 text-black p-3 rounded-xl font-bold">Cancel</button>
              <button onClick={() => { const val = (document.getElementById("nameInput") as HTMLInputElement)?.value; if(val){ setUser(val); setShowLogin(false); } }} className="flex-1 bg-blue-900 text-white p-3 rounded-xl font-bold">Login</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
