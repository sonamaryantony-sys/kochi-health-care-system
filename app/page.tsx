"use client";
import { useState, useEffect } from "react";

const doctors = [
{ name:"Dr. Anjali Menon", dept:"Cardiology", exp:"12 yrs", rating:"4.9", fee:600, avail:"Today 9-1"},
{ name:"Dr. Rahul Nair", dept:"Cardiology", exp:"10 yrs", rating:"4.8", fee:550, avail:"Tomorrow"},
{ name:"Dr. Priya S", dept:"Neurology", exp:"14 yrs", rating:"4.9", fee:700, avail:"Today 4-6"},
{ name:"Dr. Arjun K", dept:"Neurology", exp:"8 yrs", rating:"4.7", fee:600, avail:"Today"},
{ name:"Dr. Sneha P", dept:"Pediatrics", exp:"9 yrs", rating:"5.0", fee:400, avail:"Today 10-1"},
{ name:"Dr. Vivek M", dept:"Pediatrics", exp:"11 yrs", rating:"4.8", fee:450, avail:"Tomorrow"},
{ name:"Dr. Divya R", dept:"Orthopedics", exp:"13 yrs", rating:"4.9", fee:650, avail:"Today"},
{ name:"Dr. Manoj T", dept:"Orthopedics", exp:"15 yrs", rating:"4.8", fee:700, avail:"Tomorrow"},
{ name:"Dr. Lakshmi V", dept:"Dermatology", exp:"7 yrs", rating:"4.9", fee:500, avail:"Today 2-5"},
{ name:"Dr. Kevin J", dept:"Dermatology", exp:"6 yrs", rating:"4.7", fee:450, avail:"Tomorrow"},
{ name:"Dr. Sonam A", dept:"General Medicine", exp:"10 yrs", rating:"4.9", fee:350, avail:"Today"},
{ name:"Dr. Farhan S", dept:"General Medicine", exp:"9 yrs", rating:"4.8", fee:350, avail:"Today"},
];

export default function Home(){
const [tab,setTab]=useState("home");
const [deptFilter,setDeptFilter]=useState("");
const [bDoc,setBDoc]=useState(0);
const [pName,setPName]=useState(""); const [pPhone,setPPhone]=useState(""); const [pDate,setPDate]=useState(""); const [pTime,setPTime]=useState("09:00 AM"); const [pSymptoms,setPSymptoms]=useState("");
const [payMethod,setPayMethod]=useState("UPI"); const [bookings,setBookings]=useState<any[]>([]);
const [showLogin,setShowLogin]=useState(false);

useEffect(()=>{ setBookings(JSON.parse(localStorage.getItem("khc_bookings")||"[]")) },[]);

const filtered = doctors.filter(d=> !deptFilter || d.dept===deptFilter);

const handlePay=()=>{
if(!pName || pPhone.length<10){ alert("Enter name & 10-digit phone"); return }
const booking={ id:"KHC"+Date.now().toString().slice(-6), doctor:doctors[bDoc].name, dept:doctors[bDoc].dept, date:pDate||"Tomorrow", time:pTime, patient:pName, fee:doctors[bDoc].fee, pay:payMethod, symptoms:pSymptoms };
const all=[...bookings,booking]; localStorage.setItem("khc_bookings",JSON.stringify(all)); setBookings(all); setTab("receipt");
};

return (
<main className="min-h-screen bg-[#f0f7ff] text-slate-900 font-sans">
<header className="sticky top-0 z-10 bg-white shadow flex justify-between items-center p-4">
<div className="font-extrabold text-xl text-sky-500">🏥 Kochi Health Care</div>
<nav className="flex gap-4 font-semibold text-sm">
<span className="cursor-pointer" onClick={()=>setTab("home")}>Home</span>
<span className="cursor-pointer" onClick={()=>setTab("doctors")}>Doctors</span>
<span className="cursor-pointer" onClick={()=>setTab("booking")}>Book</span>
<span className="cursor-pointer" onClick={()=>setTab("my")}>My Appointments</span>
</nav>
<button onClick={()=>setShowLogin(true)} className="bg-sky-500 text-white px-4 py-2 rounded-full font-bold text-sm">Login</button>
</header>

<div className="max-w-6xl mx-auto p-5">
{tab==="home" && (<>
<div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-2xl p-8">
<h1 className="text-3xl font-bold">Book Kochi's Best Doctors in 2 Minutes</h1><p className="mt-2">12+ Doctors • 6 Departments • UPI / Card Payment</p>
<button onClick={()=>setTab("booking")} className="mt-4 bg-white text-sky-600 px-5 py-2 rounded-full font-bold">Book Now →</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
{["Cardiology","Neurology","Pediatrics","Orthopedics","Dermatology","General Medicine"].map(d=><div key={d} className="bg-white rounded-xl p-4 shadow">{d}</div>)}
</div>
<h2 className="mt-6 font-bold text-lg">Top Doctors</h2>
<div className="grid md:grid-cols-3 gap-4 mt-2">
{doctors.slice(0,6).map((d,i)=><div key={i} className="bg-white p-4 rounded-xl shadow"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">{d.dept}</span><h3 className="font-bold mt-1">{d.name}</h3><p className="text-sm text-slate-500">⭐ {d.rating} • {d.exp} • {d.avail}</p><p className="font-bold">₹{d.fee}</p><button onClick={()=>{setBDoc(doctors.indexOf(d)); setTab("booking")}} className="mt-2 bg-slate-900 text-white px-3 py-1 rounded-full text-sm">Book</button></div>)}
</div>
</>)}

{tab==="doctors" && (<>
<h2 className="text-xl font-bold">All Doctors</h2>
<select value={deptFilter} onChange={e=>setDeptFilter(e.target.value)} className="mt-3 p-2 border rounded-lg w-full md:w-64">
<option value="">All Departments</option><option>Cardiology</option><option>Neurology</option><option>Pediatrics</option><option>Orthopedics</option><option>Dermatology</option><option>General Medicine</option>
</select>
<div className="grid md:grid-cols-3 gap-4 mt-4">
{filtered.map((d,i)=><div key={i} className="bg-white p-4 rounded-xl shadow"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">{d.dept}</span><h3 className="font-bold mt-1">{d.name}</h3><p className="text-sm text-slate-500">{d.exp} • ⭐ {d.rating} • {d.avail}</p><p className="font-bold">₹{d.fee}</p><button onClick={()=>{setBDoc(doctors.indexOf(d)); setTab("booking")}} className="mt-2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm">Book Now</button></div>)}
</div>
</>)}

{tab==="booking" && (
<div className="bg-white rounded-2xl p-6 shadow max-w-lg mx-auto">
<h2 className="text-xl font-bold">📅 Book Appointment</h2>
<input value={pName} onChange={e=>setPName(e.target.value)} placeholder="Patient Full Name" className="w-full p-3 border rounded-lg mt-3"/>
<input value={pPhone} onChange={e=>setPPhone(e.target.value)} placeholder="Phone - 10 digit" className="w-full p-3 border rounded-lg mt-2"/>
<select value={bDoc} onChange={e=>setBDoc(Number(e.target.value))} className="w-full p-3 border rounded-lg mt-2">{doctors.map((d,i)=><option key={i} value={i}>{d.name} - {d.dept} (₹{d.fee})</option>)}</select>
<input type="date" value={pDate} onChange={e=>setPDate(e.target.value)} className="w-full p-3 border rounded-lg mt-2"/>
<select value={pTime} onChange={e=>setPTime(e.target.value)} className="w-full p-3 border rounded-lg mt-2"><option>09:00 AM</option><option>10:00 AM</option><option>11:30 AM</option><option>02:00 PM</option><option>04:00 PM</option><option>06:00 PM</option></select>
<textarea value={pSymptoms} onChange={e=>setPSymptoms(e.target.value)} placeholder="Symptoms" className="w-full p-3 border rounded-lg mt-2"/>
<button onClick={()=>setTab("payment")} className="w-full mt-4 bg-sky-500 text-white py-3 rounded-full font-bold">Continue to Payment →</button>
</div>
)}

{tab==="payment" && (
<div className="bg-white rounded-2xl p-6 shadow max-w-lg mx-auto">
<h2 className="text-xl font-bold">💳 Payment - ₹{doctors[bDoc].fee}</h2>
<p className="mt-2 text-sm bg-slate-100 p-3 rounded-lg"><b>{doctors[bDoc].name}</b><br/>{pDate||"Tomorrow"} at {pTime}<br/>Patient: {pName}</p>
<div className="flex gap-2 mt-4">{["UPI","Card","Net Banking"].map(m=><button key={m} onClick={()=>setPayMethod(m)} className={`px-4 py-2 rounded-full font-bold text-sm border ${payMethod===m?"bg-slate-900 text-white":"bg-white"}`}>{m}</button>)}</div>
<input placeholder={payMethod==="UPI"?"Enter UPI ID":payMethod==="Card"?"Enter Card Number":"Enter Bank"} className="w-full p-3 border rounded-lg mt-3"/>
<button onClick={handlePay} className="w-full mt-4 bg-green-600 text-white py-3 rounded-full font-bold">Pay ₹{doctors[bDoc].fee} & Confirm</button>
<p className="text-xs text-slate-500 mt-2">Demo payment - no real money. Razorpay test mode can be added later.</p>
</div>
)}

{tab==="my" && (
<div><h2 className="text-xl font-bold">👤 My Appointments</h2>
<div className="mt-4 grid gap-3">{bookings.length? bookings.map((b:any)=><div key={b.id} className="bg-white p-4 rounded-xl shadow"><b>{b.id}</b> - {b.doctor}<br/>{b.date} {b.time} • ₹{b.fee} via {b.pay}<br/>Patient: {b.patient}</div>):<p>No bookings yet.</p>}</div>
</div>
)}

{tab==="receipt" && (
<div className="bg-white rounded-2xl p-8 shadow max-w-lg mx-auto text-center">
<h2 className="text-2xl font-bold">✅ Booking Confirmed!</h2>
<p className="mt-3">{bookings[bookings.length-1]?.id} - {bookings[bookings.length-1]?.doctor}<br/>Paid ₹{bookings[bookings.length-1]?.fee} via {bookings[bookings.length-1]?.pay}</p>
<button onClick={()=>window.print()} className="mt-4 bg-sky-500 text-white px-5 py-2 rounded-full font-bold">Print Receipt</button>
<div className="mt-4"><button onClick={()=>setTab("home")} className="underline">Back to Home</button></div>
</div>
)}
</div>

{showLogin && (<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-20">
<div className="bg-white rounded-2xl p-6 w-full max-w-sm"><h3 className="font-bold">Login / Signup</h3><input placeholder="Full Name" className="w-full p-3 border rounded-lg mt-3"/><input placeholder="Email" className="w-full p-3 border rounded-lg mt-2"/><button onClick={()=>setShowLogin(false)} className="w-full mt-3 bg-sky-500 text-white py-2 rounded-full font-bold">Login</button><button onClick={()=>setShowLogin(false)} className="w-full mt-2">Close</button></div>
</div>)}
</main>
);
}
