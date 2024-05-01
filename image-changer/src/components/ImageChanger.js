import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageChanger = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setImageUrl(response.data.message);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    const handleChangeImage = () => {
        fetchImage();
    };

    return (
        <div>
            <h2>Images</h2>
            <button onClick={handleChangeImage}>Change Image</button>
            <br />
            {imageUrl && <img src={imageUrl} alt="Dog" style={{ maxWidth: '100%' }} />}
        </div>
    );
};

export default ImageChanger;