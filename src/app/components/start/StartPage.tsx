"use client";
import { useWindowContext } from "@/app/WindowContext";
import styles from "./start.module.css";
import TopPanel from "./TopPanel";
import MainPanel from "./MainPanel";
import React, { useEffect } from "react";

const StartPage = () => {
  const { appStack, setAppStack } = useWindowContext();
  const { startOpen, setStartOpen } = useWindowContext();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e: Event) => {
    const clickedElement = e.target as HTMLElement;
    const elementClass = clickedElement.classList.value;
    const insideIcon = elementClass.includes("start_");
    if (!insideIcon) {
      setStartOpen(false);
      if (
        elementClass.includes("window") ||
        elementClass.includes("largeAppIcon")
      ) {
        const appName = "Start Page";
        setAppStack((prevState) =>
          prevState.filter((item) => item.appName !== appName)
        );
      }
    }
  };

  const index = appStack.findIndex((item) => item.appName === "Start Page");
  const zIndexValue = appStack[index] ? appStack[index].zIndex : 1;

  const startPage = (
    <section className={styles.startPage} style={{ zIndex: zIndexValue }}>
      <TopPanel />
      <MainPanel />
    </section>
  );

  return startOpen ? startPage : <section style={{ visibility: "hidden" }} />;
};

export default StartPage;
