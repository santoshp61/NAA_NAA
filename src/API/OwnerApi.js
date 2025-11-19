// src/api/ownerApi.js

export async function loginOwner(username, password) {
  try {
    const res = await fetch("http://localhost:5000/owner/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    return await res.json();
  } catch (err) {
    return { success: false, message: "Server not responding" };
  }
}
