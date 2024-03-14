import classNames from 'classnames';
import styles from './child-style.module.scss';
import img1 from '../../assets/phto-1.png';
import img2 from '../../assets/phto-2.png';
import img3 from '../../assets/phto-3.png';
import img4 from '../../assets/phto-4.png';
import img5 from '../../assets/phto-5.png';
import img6 from '../../assets/phto-6.png';
import { Image } from '../image/image';

export interface ChildStyleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ChildStyle = ({ className }: ChildStyleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.playground}>
                <div className={styles.column}>
                    <div className={styles.images}>
                        <Image src={img1} className={styles.left} />
                        <Image src={img3} className={styles.left} />
                        <Image src={img5} className={styles.left} />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.images}>
                        <Image src={img2} className={styles.right} />
                        <Image src={img4} className={styles.right} />
                        <Image src={img6} className={styles.right} />
                    </div>
                </div>
            </div>
        </div>
    );
};
