import React from 'react';
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.about__container}>
            <span>
                About this page: I built it because I love movies.
            </span>
            <span>
                yujin
            </span>
        </div>
    );
}

export default About;