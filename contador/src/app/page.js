  import Image from "next/image";
  import styles from "./page.module.css";
  import Contador from './contador.js';

  export default function Home() {
    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <Contador></Contador>
        </div>
      </main>
    );
  }
