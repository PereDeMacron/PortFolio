import React from "react";
import IconLabel from "./IconLabel";
import styles from "./start.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });
const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const RightPanel = () => {
  return (
    <section className={styles.mainPanelRight}>
      <section className={styles.rightPanelInterests}>
        <div>
          <p className={`${tahomabd.className} ${styles.boldLabel}`}>
            My Interests
          </p>
          <p className={tahoma.className}>💻 • Web development & UI/UX</p>
          <p className={tahoma.className}>↳ Building clean, modern and user-friendly web interfaces.</p>
          <p className={tahoma.className}>🎮 • Game development & scripting </p>
          <p className={tahoma.className}>↳ Learning and experimenting with the game creation to refine my skills in various fields.</p>
          <p className={tahoma.className}>🖥️ • Backend & server hosting</p>
          <p className={tahoma.className}>↳ Managing and optimizing game servers and web projects.</p>
          <p className={tahoma.className}>🌍 • Tech exploration</p>
          <p className={tahoma.className}>↳ Exploring new tools, frameworks and technologies.</p>
        </div>
      </section>
      <hr className={styles.rightPanelHR} />

      <section className={styles.rightPanelLinks}>
        <IconLabel
          src="/icons/githubSquareIcon.png"
          alt="GitHub Logo"
          label="My GitHub"
          url="https://github.com/PereDeMacron/"
        />
        <IconLabel
          src="/icons/linkedinIcon.svg"
          alt="LinkedIn Logo"
          label="My LinkedIn"
          url="https://www.linkedin.com/in/gary-mirambet-1868b0287/"
        />
        <IconLabel
          src="/icons/emailIcon.png"
          alt="Email Icon"
          label="garymbt64@gmail.com"
          url="mailto: garymbt64@gmail.com"
        />
      </section>
    </section>
  );
};

export default RightPanel;
