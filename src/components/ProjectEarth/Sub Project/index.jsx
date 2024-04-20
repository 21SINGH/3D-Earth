
'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from '../Title';
import Descriptions from '../Description';

const data = [
    {
        title: "COMPKILLER",
        description: "Crafting an avant-garde web scraping marvel for Amazon.",
        speed: 0.5
    },
    {
        title: "Gramchat",
        description: "Pioneering the digital dialogue landscape.",
        speed: 0.8
    },
    {
        title: "HQIF",
        description: "Embark on a visual odyssey with our high-quality image fetcher tailored for your desires. ",
        speed: 0.67
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}