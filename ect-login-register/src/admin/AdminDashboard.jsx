import React from "react";

export default function AdminDashboard({ userData }) {
  return (
    <div className="dashboard">
      <h1>Welcome Admin {userData?.firstName} {userData?.lastName}!</h1>
      <p>You have administrative privileges over EcoTrack.</p>
    </div>
  );
}
