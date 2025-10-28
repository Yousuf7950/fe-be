"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (!name || !email || !age) return alert("Please fill all fields");

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, age:Number(age) }),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setAge("");
      fetchUsers();
    } else {
      alert("Error adding user");
    }
  };

  const handleDeleteUser = async (id: string) => {
    const res = await fetch(`/api/users?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchUsers();
    else alert("Error deleting user");
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>👤 User Management</h1>

      {/* Add user form */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* Users table */}
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>❌ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
