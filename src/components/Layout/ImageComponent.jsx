import React from 'react';

const ImageComponent = ({src, alt}) => {
    const divStyle = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };

    return <div style={divStyle} alt={alt}></div>;
};

export default ImageComponent;
