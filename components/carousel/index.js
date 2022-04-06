import { useState } from 'react';

import css from './style.module.css';

function Carousel({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            {images.length > 0 &&
                <div className={css.carousel}>
                    <div className={css.title}>{images[currentIndex].title}</div>
                    <img src={images[currentIndex].src} alt={images[currentIndex].title} />
                    <div className={css.link}>
                        {images.map((_, index) => (
                            <button
                                className={currentIndex === index ? `${css['active-link']}` : ''}
                                key={`link-${index}`}
                                onClick={() => setCurrentIndex(index)} />
                        ))}
                    </div>
                </div>}
        </>
    )
}

export default Carousel;
