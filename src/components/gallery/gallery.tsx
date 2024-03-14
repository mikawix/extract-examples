import classNames from 'classnames';
import styles from './gallery.module.scss';

export interface GalleryProps {
    className?: string;
}

const srca = 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Gallery = ({ className }: GalleryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.title}>Product Gallery</span>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <img src={srca} alt="" />
                    <div className={styles.footer}>
                        product title<button>Add To Cart</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={srca} alt="" />
                    <div className={styles.footer}>
                        product title<button>Add To Cart</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={srca} alt="" />
                    <div className={styles.footer}>
                        product title<button>Add To Cart</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={srca} alt="" />
                    <div className={styles.footer}>
                        product title<button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
