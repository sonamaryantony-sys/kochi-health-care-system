"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("khc_bookings") || "[]");
    setBookings(data);
  }, []);

  const totalRevenue = bookings.reduce((sum, b) => sum + (b.fees || 800), 0);

  // Mock data if no bookings yet
  const displayBookings = bookings.length > 0 ? bookings : [
    { id: 1, patientName: "Aarav Menon", doctor: "Dr. Priya Nair", date: "15 Oct 2024", status: "Paid", fees: 800 },
    { id: 2, patientName: "Sneha Kumar", doctor: "Dr. Rohit Patel", date: "15 Oct 2024", status: "Pending", fees: 1200 },
    { id: 3, patientName: "Mohammed Ali", doctor: "Dr. Anjali Thomas", date: "14 Oct 2024", status: "Paid", fees: 800 },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f4f8', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', background: '#0f3d8a', color: 'white', padding: '20px' }}>
        <h2 style={{ fontWeight: 'bold' }}>🏥 Kochi Health<br/>Care System</h2>
        <p style={{ fontSize: '12px', opacity: 0.7 }}>Healthcare Admin</p>
        <div style={{ marginTop: '40px' }}>
          <div style={{ background: '#1e5bb8', padding: '12px', borderRadius: '8px', marginBottom: '10px' }}>📊 Dashboard</div>
          <div style={{ padding: '12px', opacity: 0.8 }}>📅 Appointments</div>
          <div style={{ padding: '12px', opacity: 0.8 }}>👨‍⚕️ Doctors</div>
          <div style={{ padding: '12px', opacity: 0.8 }}>👥 Patients</div>
          <div style={{ padding: '12px', opacity: 0.8 }}>💰 Revenue</div>
          <div style={{ padding: '12px', opacity: 0.8 }}>📄 Reports</div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: '30px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#0f3d8a' }}>Dashboard</h1>
        
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div>📅</div><p>Total Appointments</p><h2 style={{ fontSize: '32px' }}>{displayBookings.length + 1245}</h2><small style={{ color: 'green' }}>↑ 12% from last month</small>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div>₹</div><p>Revenue</p><h2 style={{ fontSize: '32px' }}>₹{totalRevenue + 842500}</h2><small style={{ color: 'green' }}>↑ 8.4% from last month</small>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div>🩺</div><p>Active Doctors</p><h2 style={{ fontSize: '32px' }}>42</h2><small style={{ color: 'green' }}>↑ 3 new this month</small>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div>👥</div><p>Patients</p><h2 style={{ fontSize: '32px' }}>3,186</h2><small style={{ color: 'green' }}>↑ 15% from last month</small>
          </div>
        </div>

        {/* Bookings Table */}
        <div style={{ background: 'white', marginTop: '30px', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Recent Bookings (Live from your site)</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr style={{ background: '#f5f7fb', textAlign: 'left' }}><th style={{ padding: '10px' }}>PATIENT</th><th>DOCTOR</th><th>DATE</th><th>PAYMENT</th></tr></thead>
            <tbody>
              {displayBookings.map((b, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px' }}>{b.patientName || b.name}</td>
                  <td>{b.doctor || b.doctorName}</td>
                  <td>{b.date || new Date().toLocaleDateString()}</td>
                  <td><span style={{ background: b.status === 'Paid' ? '#22c55e' : '#f59e0b', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{b.status || 'Paid - Demo'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>Note: This shows demo bookings from localStorage. For real project, connect to database.</p>
        </div>
      </div>
    </div>
  );
}
