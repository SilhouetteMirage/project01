import React, { useRef, useEffect, useState } from 'react';
import styles from '../src/Style.module.css';


const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= -260 && rect.bottom <= window.innerHeight + 260;
    };

    const [inView, setInView] = useState(false);

    useEffect(() => { // Runs after the first render is completed
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler); // Function that is executed when the component mounts
        return () => {
            window.removeEventListener("scroll", scrollHandler); // Function that is removed when the component unmounts
        };
    }, []); // Empty dependency array tells the function to only run when the component is first rendered

    const scrollHandler = () => {
        setInView(isInView());
    };

    return (
        <img src={
            isLoading ? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            : inView ? secondaryImg : primaryImg}
            alt=""
            ref={imageRef}
            className={styles.smallimg}
        />

    );
};

export default ImageToggleOnScroll;