"use client";
import React, { useEffect, useState } from "react";
import useAuth from "../../lib/useAuth";

export default function ProfilePage() {
  const { ready } = useAuth({ requireLogin: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (!ready) return;
    const stored = localStorage.getItem("user");
    if (stored) {
      const u = JSON.parse(stored);
      setName(u.name || "");
      setEmail(u.email || "");
    }
  }, [ready]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return;
    const user = localStorage.getItem("user");
    const id = user ? JSON.parse(user).id : null;
    if (!id) return;

    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    if (image) fd.append("image", image);

    await fetch(`/api/auth/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });
    // simple feedback
    alert("Profile updated (if API available)");
  };

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "#000" }}>Profile</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Avatar</label>
          <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
