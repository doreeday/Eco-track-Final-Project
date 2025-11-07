import React from "react";

export default function UserDashboard({ userData }) {
  return (
    <div className="dashboard">
      <h1>Welcome {userData?.firstName} {userData?.lastName}!</h1>
      <p>Thank you for helping us make a cleaner community.</p>
    </div>
  );
}
