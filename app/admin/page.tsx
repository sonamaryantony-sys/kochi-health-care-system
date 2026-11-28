"use client";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* SIDEBAR - BLUE */}
      <div className="w-64 bg-blue-900 text-white p-4 min-h-screen">
        <div className="mb-8">
          <h2 className="font-bold text-lg flex items-center gap-2">🏥 Kochi Health</h2>
          <p className="font-bold text-lg -mt-1">Care System</p>
          <p className="text-xs text-blue-300 mt-1">Healthcare Admin</p>
        </div>
        
        <div className="space-y-1">
          <div className="bg-blue-800 p-3 rounded-lg font-bold flex gap-2">📊 Dashboard</div>
          <div className="p-3 rounded-lg hover:bg-blue-800 flex gap-2 text-blue-100">📅 Appointments</div>
          <div className="p-3 rounded-lg hover:bg-blue-800 flex gap-2 text-blue-100">👨‍⚕️ Doctors</div>
          <div className="p-3 rounded-lg hover:bg-blue-800 flex gap-2 pl-8 text-blue-100">Patients</div>
          <div className="p-3 rounded-lg hover:bg-blue-800 flex gap-2 text-blue-100">💰 Revenue</div>
          <div className="p-3 rounded-lg hover:bg-blue-800 flex gap-2 text-blue-100">📄 Reports</div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 bg-slate-50">
        <h1 className="text-3xl font-bold text-black mb-6">Dashboard</h1>

        {/* 4 CARDS - NOW DARK TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl shadow border border-slate-200">
            <div className="flex justify-center mb-2">📊</div>
            <p className="text-center text-sm font-bold text-black">Total Appointments</p>
            <p className="text-center text-3xl font-bold text-black mt-2">1248</p>
            <p className="text-center text-xs font-bold text-green-700 mt-2">↑ 12% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-slate-200">
            <div className="flex justify-center mb-2">💰</div>
            <p className="text-center text-sm font-bold text-black">Revenue</p>
            <p className="text-center text-3xl font-bold text-black mt-2">₹842500</p>
            <p className="text-center text-xs font-bold text-green-700 mt-2">↑ 8.4% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-slate-200">
            <div className="flex justify-center mb-2">👨‍⚕️</div>
            <p className="text-center text-sm font-bold text-black">Active Doctors</p>
            <p className="text-center text-3xl font-bold text-black mt-2">42</p>
            <p className="text-center text-xs font-bold text-black mt-2">↑ 3 new this month</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-slate-200">
            <div className="flex justify-center mb-2">👥</div>
            <p className="text-center text-sm font-bold text-black">Patients</p>
            <p className="text-center text-3xl font-bold text-black mt-2">3,166</p>
            <p className="text-center text-xs font-bold text-green-700 mt-2">↑ 15% from last month</p>
          </div>
        </div>

        {/* RECENT BOOKINGS - DARK TEXT */}
        <div className="bg-white p-6 rounded-2xl shadow border border-slate-200 mt-8">
          <h2 className="font-bold text-lg text-black mb-4">Recent Bookings (Live from your site)</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border">
              <div>
                <p className="font-bold text-black">KHC2847 - Dr. Arjun Nair</p>
                <p className="text-sm text-black">Amrita Hospital | Cardiology</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-black">Total: ₹500</p>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Paid</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border">
              <div>
                <p className="font-bold text-black">KHC2848 - Dr. Priya Menon</p>
                <p className="text-sm text-black">Lakeshore | Dermatology</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-black">Total: ₹400</p>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">Pending</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border">
              <div>
                <p className="font-bold text-black">KHC2849 - Dr. Suresh Kumar</p>
                <p className="text-sm text-black">Medical Trust | Orthopedics</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-black">Total: ₹600</p>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Paid</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-black font-medium mt-6">Note: This shows demo bookings from localStorage. For real project, connect to database.</p>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="bg-blue-900 text-white px-6 py-2 rounded-full font-bold inline-block">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
