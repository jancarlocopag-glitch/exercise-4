"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Guard: only logged-in users can see this page
  useEffect(() => {
    const u = localStorage.getItem("pixelnotes_user");
    if (!u) {
      router.replace("/");
      return;
    }
    setUser(u);
  }, [router]);

  // Bonus 2: logout returns to the login screen
  function logout() {
    localStorage.removeItem("pixelnotes_user");
    router.push("/");
  }

  if (!user) return null;

  return (
    <main className="center">
      <div className="card">
        <h1>Welcome!</h1>
        <p className="muted">Login successful. Your email and password are correct.</p>
        <p className="success">Logged in as {user}</p>
        <button className="btn" onClick={logout}>Logout</button>
      </div>
    </main>
  );
}
