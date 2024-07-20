import Link from "next/link";
import styles from "./ui/home/home.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.welcomeText}>Welcome to Admin Dashboard</h1>
        <p className={styles.subText}>
          Log in to manage your account and access exclusive features.
        </p>
        <div className={styles.credentials}>
          <p>Username: Admin</p>
          <p>Password: MyAdminPassword12%</p>
        </div>
        <Link href="./login" className={styles.btnLink}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
