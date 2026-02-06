import React from "react";
import SmallAppIcon from "./SmallAppIcon";
import LargeAppIcon from "./LargeAppIcon";
import styles from "./taskbar.module.css";
import appList from "@/app/constants/appList";

const TaskbarLine = () => {
  return (
    <section className={styles.taskbarLine}>
      <div className={styles.smallAppIconContainer}>
        <SmallAppIcon
          src="/icons/githubIcon.svg"
          alt="Github Icon"
          url="https://github.com/PereDeMacron/"
        />
        <SmallAppIcon
          src="/icons/linkedinIcon.svg"
          alt="Linkedin Icon"
          url="https://www.linkedin.com/in/gary-mirambet-1868b0287/"
        />
        <SmallAppIcon
          src="/icons/emailIcon.svg"
          alt="Email Icon"
          url="mailto: garymbt64@gmail.com"
        />
      </div>
      <div className={styles.largeAppIconContainer}>
        {appList.map((appData) => (
          <LargeAppIcon
            key={appData.appName}
            src={appData.src}
            alt={`${appData.appName} Icon`}
            appName={appData.appName}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskbarLine;
