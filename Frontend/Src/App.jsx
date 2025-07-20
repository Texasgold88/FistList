import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    tier: "free",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const launchSweep = async () => {
    const res = await fetch("https://your-backend-url.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="fistlist-container">
      <h1>FistList 💥</h1>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <select name="tier" onChange={handleChange}>
        <option value="free">Free</option>
        <option value="strike">Strike</option>
        <option value="smash">Smash</option>
        <option value="firewall">Firewall</option>
      </select>
      <button onClick={launchSweep}>💥 Launch FistList Sweep</button>
    </div>
  );
}

export default App;
