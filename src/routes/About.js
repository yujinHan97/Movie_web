import React from 'react';
import styles from "./About.module.css";

function About(props) {
    console.log(props);
    return (
        <div className={styles.about__container}>
            <span>
                About this page: I built it because I love movies.
            </span>
            <span>
                Made by Han Yujin
            </span>
        </div>
    );
}

export default About;