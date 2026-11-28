"use client";
import { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Anjali Menon", dept: "Cardiology", rating: "4.9", exp: "12 yrs", time: "Today 9-1", fee: 600 },
  { id: 2, name: "Dr. Rahul Nair", dept: "Cardiology", rating: "4.8", exp: "10 yrs", time: "Tomorrow", fee: 550 },
  { id: 3, name: "Dr. Priya S", dept: "Neurology", rating: "4.9", exp: "14 yrs", time: "Today 4-6", fee: 700 },
  { id: 4, name: "Dr. Arjun K", dept: "Neurology", rating: "4.7", exp: "8 yrs", time: "Today 9-12", fee: 500 },
  { id: 5, name: "Dr. Sneha P", dept: "Pediatrics", rating: "4.9", exp: "9 yrs", time: "Today 10-1", fee: 400 },
  { id: 6, name: "Dr. Vivek M", dept: "Pediatrics", rating: "4.8", exp: "11 yrs", time: "Today 3-5", fee: 450 },
  { id: 7, name: "Dr. Suresh K", dept: "Orthopedics", rating: "4.8", exp: "15 yrs", time: "Today 9-3", fee: 600 },
  { id: 8, name: "Dr. Lakshmi R", dept: "Dermatology", rating: "4.9", exp: "7 yrs", time: "Tomorrow", fee: 350 },
];

const depts = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "General Medicine"];

export default function Home() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState("");
  const [filter, setFilter] = useState("All");

  const handleBook = (doc: any) => {
    if (!user) { setShowLogin(true); return; }
    const newBooking = {
      id: "KHC" + Math.floor(1000 + Math.random() * 9000),
      doctor: doc.name, dept: doc.dept, fee: doc.fee,
      date: new Date().toLocaleString(), status: "Paid"
    };
    setBookings([...bookings, newBooking]);
    alert(`✅ Booked ${doc.name}! Booking ID: ${newBooking.id}`);
  };

  const filteredDoctors = filter === "All" ? doctors : doctors.filter(d => d.dept === filter);

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      {/* HEADER - Like photo */}
      <header className="bg-white p-4 sticky top-0 z-10 shadow-sm border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl text-[#0a3d62] flex items-center gap-2">🏥 Kochi Health Care</h1>
          <div className="hidden md:flex gap-6 text-sm font-bold text-black">
            <span className="cursor-pointer">Home</span>
            <span className="cursor-pointer" onClick={() => document.getElementById('doctors')?.scrollIntoView()}>Doctors</span>
            <span className="cursor-pointer">Book</span>
            <span className="cursor-pointer" onClick={() => { if(bookings.length===0) alert("No bookings yet"); else alert(`${bookings.length} bookings`)}}>My Appointments {bookings.length>0?`(${bookings.length})`:''}</span>
          </div>
          {user ? <span className="text-sm font-bold text-black">Hi, {user}</span> : <button onClick={() => setShowLogin(true)} className="bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-bold">Login</button>}
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* BLUE BANNER - EXACT like photo */}
        <div className="bg-[#0a74da] text-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl md:text-3xl font-bold">Book Kochi's Best Doctors in 2 Minutes</h2>
          <p className="text-sm mt-2 text-blue-100 font-medium">12+ Doctors • 6 Departments • UPI / Card Payment</p>
          <button onClick={() => document.getElementById('doctors')?.scrollIntoView()} className="mt-4 bg-white text-black px-5 py-2 rounded-full text-sm font-bold">Book Now →</button>
        </div>

        {/* DEPARTMENTS - Like photo */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          {depts.map((d) => (
            <button key={d} onClick={() => setFilter(d)} className={`bg-white p-4 rounded-xl shadow-sm border text-left font-medium text-black hover:shadow-md transition ${filter===d?'border-blue-600 border-2 bg-blue-50':''}`}>{d}</button>
          ))}
        </div>
        {filter !== "All" && <button onClick={() => setFilter("All")} className="mt-3 text-sm font-bold text-blue-700">Show All ×</button>}

        {/* TOP DOCTORS - Like photo */}
        <h3 id="doctors" className="font-bold text-lg text-black mt-8 mb-4">Top Doctors {filter!=="All"?`- ${filter}`:''}</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <span className="bg-green-50 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold">{doc.dept}</span>
              <h4 className="font-bold text-black mt-2">{doc.name}</h4>
              <p className="text-xs text-black font-medium mt-1">⭐ {doc.rating} • {doc.exp} • {doc.time}</p>
              <p className="font-bold text-black mt-1 text-sm">₹{doc.fee}</p>
              <button onClick={() => handleBook(doc)} className="mt-3 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold">Book</button>
            </div>
          ))}
        </div>

        {/* MY BOOKINGS SHOW */}
        {bookings.length > 0 && (
          <div className="bg-white p-6 rounded-2xl shadow border mt-8">
            <h3 className="font-bold text-black">My Bookings ({bookings.length})</h3>
            <div className="mt-3 space-y-2">
              {bookings.map((b) => (
                <div key={b.id} className="p-3 bg-slate-50 rounded-lg border flex justify-between"><div><p className="font-bold text-black text-sm">{b.id} - {b.doctor}</p><p className="text-xs text-black">{b.date}</p></div><span className="font-bold text-black">₹{b.fee}</span></div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center p-8 mt-10">
          <a href="/admin" className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold inline-block shadow">🔐 Admin Dashboard</a>
        </div>
      </div>

      {/* LOGIN POPUP - DARK TEXT */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-20">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl border-2">
            <h3 className="font-bold text-lg text-black">Login / Signup</h3>
            <input id="nameInput" placeholder="Full Name" className="w-full p-3 border-2 border-black rounded-xl mt-4 text-black font-bold placeholder:text-black" />
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
