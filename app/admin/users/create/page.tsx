"use client";
import React, { useState } from "react";
import useAuth from "../../../lib/useAuth";
import { useRouter } from "next/navigation";

export default function AdminUserCreate() {
  useAuth({ requireAdmin: true, requireLogin: true });
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [image, setImage] = useState<File | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("role", role);
    if (image) fd.append("image", image);

    await fetch(`/api/auth/user`, { method: "POST", body: fd });
    alert("User created");
    router.push("/admin/users");
  };

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "#000" }}>Create User</h1>
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
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label>Avatar</label>
          <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
