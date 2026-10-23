"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MIN_PASSWORD_LENGTH = 6; // password must be MORE than this many characters

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  // If already logged in, skip the login screen
  useEffect(() => {
    if (localStorage.getItem("pixelnotes_user")) router.replace("/welcome");
  }, [router]);

  function validate() {
    const e = {};
    const trimmed = email.trim().toLowerCase();

    if (trimmed === "") {
      e.email = "Email cannot be empty.";
    } else if (!trimmed.endsWith("@gmail.com") || trimmed === "@gmail.com") {
      e.email = "Email must be a @gmail.com address.";
    }

    if (password.length <= MIN_PASSWORD_LENGTH) {
      e.password = `Password must be more than ${MIN_PASSWORD_LENGTH} characters.`;
    }
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);

    if (Object.keys(e).length > 0) {
      setFormError("Login failed. Please fix the errors above.");
      return;
    }

    setFormError("");
    localStorage.setItem("pixelnotes_user", email.trim().toLowerCase());
    router.push("/welcome");
  }

  return (
    <main className="center">
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h1>Login</h1>
        <p className="muted">Enter your email below to login to your account</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="m@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "invalid" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? "invalid" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="btn primary">Login</button>

        {/* Bonus 1: error message at the bottom of the login button */}
        {formError && <p className="error form-error" role="alert">{formError}</p>}
      </form>
    </main>
  );
}
