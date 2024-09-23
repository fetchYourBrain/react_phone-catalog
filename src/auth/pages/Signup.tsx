import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./Styles.module.scss";
import { auth } from "../../firebase.ts";

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassoword] = useState("");
  const [error, setError] = useState("");

  const validationLoginFields = () => {
    setError("");

    if (email.trim() === "") {
      setError("Email field is required.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password.trim() === "") {
      setError("Password field is required.");
      return false;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return false;
    }
    if (password !== confirmedPassword) {
      setError(
        "Password and confirm password do not match. Please enter again"
      );
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validationLoginFields()) {
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main className={styles.block}>
      <section className={styles.container}>
        <h2 className={styles.title}>Sign up</h2>
        <div>
          <form className={styles.form}>
            <div className={styles.input_block}>
              <label htmlFor="email-address">Enter your email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>

            <div className={styles.input_block}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className={styles.input_block}>
              <label htmlFor="password">Confirm your password</label>
              <input
                type="password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassoword(e.target.value)}
                required
                placeholder="Confirm password"
              />
            </div>
            {error && <span className={styles.error}>{error}</span>}
            <button onClick={onSubmit} className={styles.button}>
              Sign up
            </button>
          </form>

          <p className={styles.text}>
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};
