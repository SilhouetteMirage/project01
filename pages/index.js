import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll.js';
import styles from '../src/Style.module.css';

const ImageChangeOnScroll = () => {

    return (
        <div className={styles.centerDiv}>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic1-bw.jpg"
                    secondaryImg="/static/color/pic1-color.jpg"
                    alt=""
                />
            </div>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic2-bw.jpg"
                    secondaryImg="/static/color/pic2-color.jpg"
                    alt=""
                />
            </div>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic3-bw.jpg"
                    secondaryImg="/static/color/pic3-color.jpg"
                    alt=""
                    />
            </div>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic4-bw.jpg"
                    secondaryImg="/static/color/pic4-color.jpg"
                    alt=""
                />
            </div>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic1-bw.jpg"
                    secondaryImg="/static/color/pic1-color.jpg"
                    alt=""
                />
            </div>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic2-bw.jpg"
                    secondaryImg="/static/color/pic2-color.jpg"
                    alt=""
                />
            </div>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic3-bw.jpg"
                    secondaryImg="/static/color/pic3-color.jpg"
                    alt=""
                />
            </div>
            <div className="imgDiv">
                <ImageToggleOnScroll primaryImg="/static/bw/pic4-bw.jpg"
                    secondaryImg="/static/color/pic4-color.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ImageChangeOnScroll;