import { useState } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth} from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesLink } from "../../types/routes";
import styles from "./Styles.module.scss";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(RoutesLink.HomePage);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };


  return (
    <>
      <main className={styles.block}>
        <section className={styles.container}>
          <h2 className={styles.title}>Log in</h2>
          <div>
            <form className={styles.form}>
              <div className={styles.input_block}>
                <label htmlFor="email-address">Enter your email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.input_block}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button onClick={onLogin} className={styles.button}>
                Login
              </button>
            </form>

            <p className={styles.text}>
              No account yet? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
