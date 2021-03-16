import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver.js';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/bw/pic1-bw.jpg"
                secondaryImg="/static/color/pic1-color.jpg"
                alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/bw/pic2-bw.jpg"
                secondaryImg="/static/color/pic2-color.jpg"
                alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;