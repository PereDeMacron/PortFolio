import React from "react";
import styles from "./start.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const BottomPanel = () => {
  return (
    <section className={styles.bottomPanel}>
      <p className={`${tahoma.className} ${styles.bottomPanelLabel}`}>
        Gary Mirambet.&nbsp;
      </p>
    </section>
  );
};

export default BottomPanel;
