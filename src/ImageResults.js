import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageResults(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://api.pexels.com/v1/search', {
                    params: { query: props.searchtext },
                    headers: { Authorization: 'LW246lwJOyzp1YL380O5tZNYAoDdei9x7AEf9XTcW86Cm0h83SCJw0jU' }
                });

                setImages(response.data.photos);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, [props.searchtext]);

    return (
        <div>
            <h1>{props.searchtext} Pictures</h1>
            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        <img src={image.src.small} width="200px" height="200px"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImageResults;