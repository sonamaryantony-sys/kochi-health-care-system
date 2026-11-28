"use client";
export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      {/* TOP HEADER - BLACK */}
      <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex justify-between items-center">
        <h1 className="text-3xl font-bold">🔐 Admin Dashboard</h1>
        <a href="/" className="bg-white text-black px-5 py-2 rounded-full font-bold">← Back to Home</a>
      </div>

      {/* STATS CARDS - BLACK */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Total Appointments</p>
          <p className="text-3xl font-bold mt-2">1,248</p>
          <p className="text-green-400 text-xs mt-1">↑ 12% this month</p>
        </div>
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold mt-2">₹8,42,500</p>
          <p className="text-green-400 text-xs mt-1">↑ 8% this month</p>
        </div>
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Active Doctors</p>
          <p className="text-3xl font-bold mt-2">42</p>
        </div>
        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Total Patients</p>
          <p className="text-3xl font-bold mt-2">892</p>
        </div>
      </div>

      {/* RECENT BOOKINGS - BLACK */}
      <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mt-6">
        <h2 className="text-xl font-bold mb-4">Recent Bookings (Live from your site)</h2>
        <div className="space-y-3">
          <div className="bg-black p-4 rounded-xl border border-zinc-800 flex justify-between">
            <div><b>KHC2847</b> - Dr. Arjun Nair<br/><span className="text-xs text-zinc-400">Amrita Hospital | Cardiology</span></div>
            <div className="text-right"><span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs">Paid</span><br/><span className="text-sm font-bold">₹500</span></div>
          </div>
          <div className="bg-black p-4 rounded-xl border border-zinc-800 flex justify-between">
            <div><b>KHC2848</b> - Dr. Priya Menon<br/><span className="text-xs text-zinc-400">Lakeshore | Dermatology</span></div>
            <div className="text-right"><span className="bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-xs">Pending</span><br/><span className="text-sm font-bold">₹400</span></div>
          </div>
          <div className="bg-black p-4 rounded-xl border border-zinc-800 flex justify-between">
            <div><b>KHC2849</b> - Dr. Suresh Kumar<br/><span className="text-xs text-zinc-400">Medical Trust | Orthopedics</span></div>
            <div className="text-right"><span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs">Paid</span><br/><span className="text-sm font-bold">₹600</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}
