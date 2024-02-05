import classNames from 'classnames';
import styles from './gallery.module.scss';

export interface GalleryProps {
    className?: string;
}

const srca="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg";


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Gallery = ({ className }: GalleryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span>text</span>
            <div className={styles.grid}>
            <>
                <div className={styles.card}>
                    <img
                        src={srca}
                        alt=""
                    />
                    <div>
                        product title<button>Button</button>
                    </div>
                </div>
                </>
                <div>
                    <img
                        src={srca}
                        alt=""
                    />
                    <div>Gallery</div>
                </div>
                <div>
                    <img
                        src={srca}
                        alt=""
                    />
                    <div>Gallery</div>
                </div>
                <div>
                    <img
                        src={srca}
                        alt=""
                    />
                    <div>Gallery</div>
                </div>
                <div>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                    />
                    <div>Gallery</div>
                </div>
                <div>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                    />
                    <div>Gallery</div>
                </div>
            </div>
        </div>
    );
};
