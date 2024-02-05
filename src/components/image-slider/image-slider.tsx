import classNames from 'classnames';
import styles from './image-slider.module.scss';
import { useState } from 'react';

export interface ImageSliderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ImageSlider = ({ className }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0);
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageWrapper}>
                {[
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
                    'https://media.istockphoto.com/id/1077741064/photo/tel-aviv-skyline.jpg?s=612x612&w=0&k=20&c=4GqVLwnp3zsh8f9kJtIXzMClTvz2r5-6pNilFSd855s=',
                ].map((src, index) => (
                    <img
                        srcSet={src}
                        className={classNames(
                            styles.image,
                            imageIndex === index ? styles.imageCurrent : ''
                        )}
                    />
                ))}
            </div>
            <div className={styles.buttons}>
                <button onClick={() => setImageIndex(imageIndex + 1)}>Next</button>
                <button onClick={() => setImageIndex(imageIndex + 1)}>Prev</button>
            </div>
        </div>
    );
};
