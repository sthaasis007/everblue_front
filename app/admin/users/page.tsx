"use client";
import React, { useEffect, useState } from "react";
import useAuth from "../../lib/useAuth";
import Link from "next/link";

export default function AdminUsersPage() {
  const { ready } = useAuth({ requireAdmin: true, requireLogin: true });
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found");
      return;
    }
    try {
      const res = await fetch("/api/admin/users", { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      console.log("Response:", data);
      if (data.users) {
        setUsers(data.users);
      } else {
        console.error("No users in response:", data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    if (!ready) return;
    fetchUsers();
  }, [ready]);

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "#000" }}>Admin - Users</h1>
      <Link href="/admin/users/create" style={{ color: "#0066cc", textDecoration: "underline" }}>Create User</Link>
      <button onClick={fetchUsers} style={{ marginLeft: 16, padding: "8px 16px", cursor: "pointer" }}>Refresh</button>
      <table style={{ width: "100%", marginTop: 16, borderCollapse: "collapse", color: "#000" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} style={{ borderTop: "1px solid #ddd" }}>
              <td>{u._id}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <Link href={`/admin/users/${u._id}`}>View</Link> | <Link href={`/admin/users/${u._id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
