import Project from '@/components/ProjectEarth';
import React from 'react';
import styles from "./page.module.scss";

const page = () => {
    return (
        <div className={styles.main}>
            <div className={styles.top}>Scroll Downwards</div>
            <Project />
            <div className={styles.bottom}>Scroll Upwards</div>
        </div>
    )
}

export default page
