import classNames from 'classnames';
import styles from './image.module.scss';
import img1 from '../../assets/phto-1.png';

export interface ImageProps {
    className?: string;
    src?: string;
    fitting?: 'scaleToFit' | 'scaleToFill';
    alignment?: 'left' | 'right' | 'center' | 'top' | 'bottom';
}

export const Image = ({
    className,
    src = img1,
    fitting = 'scaleToFill',
    alignment = 'center',
}: ImageProps) => {
    return (
        <div className={className}>
            <img
                src={src}
                className={`${styles.img} ${styles[alignment]} ${styles[fitting]}`}
            />
        </div>
    );
};

