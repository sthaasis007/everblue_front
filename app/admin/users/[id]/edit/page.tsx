"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import useAuth from "../../../../lib/useAuth";

export default function AdminUserEdit() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const { ready } = useAuth({ requireAdmin: true, requireLogin: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (!ready) return;
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch(`/api/admin/users/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((data) => {
        const u = data.user;
        if (u) {
          setName(u.name || "");
          setEmail(u.email || "");
        }
      })
      .catch(() => {});
  }, [ready, id]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return;
    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    if (image) fd.append("image", image);

    await fetch(`/api/admin/users/${id}`, { method: "PUT", headers: { Authorization: `Bearer ${token}` }, body: fd });
    router.push("/admin/users");
  };

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "#000" }}>Edit User {id}</h1>
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
