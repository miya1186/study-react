import Image from "next/image";
import styles from "src/components/Main/Main.module.css";

import { Links } from "src/components/Links";
import { Headline } from "src/components/Headerline";
import { useEffect } from "react";
export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        {<code className={styles.code}>pages/{props.page}.js</code>}
      </Headline>
      <Links />
    </main>
  );
}
