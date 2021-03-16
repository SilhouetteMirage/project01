import React, { useRef, useEffect, useState } from 'react';
import styles from '../src/Style.module.css';


const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const [inView, setInView] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler); // Function that is executed when the component mounts
        return () => {
            window.removeEventListener("scroll", scrollHandler); // Function that is removed when the component unmounts
        };
    }, []); // Empty array tells the function to only run when the component is first rendered

    const scrollHandler = () => {
        setInView(isInView());
    };

    return (
        <img src={inView ? secondaryImg : primaryImg}
            alt=""
            ref={imageRef}
            className={styles.smallimg}
        />

    );
};

export default ImageToggleOnScroll;