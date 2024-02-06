import Image from "next/image";
import styles from "./page.module.css";
// pages/index.js
import prisma from '../prisma/client';

let resultNames = await prisma.$queryRaw`SELECT Name FROM Names`;
resultNames=JSON.stringify(resultNames).replace(/[^a-zA-Z,]*"Name":"([^"]*)"[^a-zA-Z,]*/g, '$1').replace(/,([^,]*)$/, ' y $1');
let resultWords = await prisma.$queryRaw`SELECT Word FROM Words`;
resultWords=JSON.stringify(resultWords).replace(/[^a-zA-Z,]*"Word":"([^"]*)"[^a-zA-Z,]*/g, '$1').replace(/,/, ' ');

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        {resultWords} de {resultNames}.
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
