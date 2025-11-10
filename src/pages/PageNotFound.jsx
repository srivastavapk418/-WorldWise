import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>Oops! Page not found</p>
        <p className={styles.subtext}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className={styles.btn}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
