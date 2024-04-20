'use client'

import styles from "./style.module.scss";
import dynamic from "next/dynamic";
import SubProject from "./Sub Project";
import SmoothScroll from "@/components/SmoothScroll";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Earth = dynamic(() => import("@/components/ProjectEarth/Earth"), {
  ssr: false,
  loading: () => <img src="/assets/earth.png" alt="" />,
});
export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <SmoothScroll>
      <div className={styles.main}>
          <div ref={container} className={styles.container}>
            <Earth />
            <SubProject />
          </div>
      </div>
    </SmoothScroll>
  );
}
