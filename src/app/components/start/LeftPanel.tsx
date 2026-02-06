import React from "react";
import IconLabel from "./IconLabel";
import styles from "./start.module.css";
import localFont from "next/font/local";

const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const LeftPanel = () => {
  return (
    <section className={styles.mainPanelLeft}>
      <div className={styles.mainPanelLeftContent}>
        <section className={styles.leftPanelAboutMe}>
          <p className={`${tahomabd.className} ${styles.boldLabel}`}>
            About Me
          </p>
          <IconLabel
            src="/icons/HolbertonSchoolLogo.png"
            alt="Holberton School Logo"
            label="Studying Fullstack Engineering at the Holberton School Bordeaux"
            url="https://www.holbertonschool.fr/programme/bachelor-ai-augmented-software-engineering"
          />
          <IconLabel
            src="/icons/FranceFlag.png"
            alt="France Flag"
            label="Located in France (Biarritz-Bordeaux)"
          />
        </section>
        <section className={styles.leftPanelLanguages}>
          <p className={`${tahomabd.className} ${styles.boldLabel}`}>
            Languages I Frequently Use
          </p>
          <IconLabel
            src="/icons/javascriptIcon.png"
            alt="JS Logo"
            label="Javascript"
          />
          <IconLabel
            src="/icons/cssIcon.png"
            alt="CSS Logo"
            label="CSS"
          />
          <IconLabel src="/icons/htmlIcon.png" alt="html Logo" label="HTML" />
        </section>
      </div>
    </section>
  );
};

export default LeftPanel;
