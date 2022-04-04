import React from 'react';

interface Props {
    latitude: number
    longitude: number
}

export const Map: React.FC<Props> = ({latitude, longitude}) => {
    const sourceString = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAHlNcVQosSvK1QKOC22g5EwKr56qxx71I&center='
    + latitude + ',' + longitude + '&zoom=14&maptype=satellite';

    return (
        <iframe
            width="900"
            height="675"
            loading="lazy"
            allowFullScreen
            src={sourceString}
        ></iframe>

    );
};