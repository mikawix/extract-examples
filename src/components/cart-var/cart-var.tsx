import classNames from 'classnames';
import styles from './cart-var.module.scss';
import { Button } from '../button/button';

export interface CartVarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CartVar = ({ className }: CartVarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.line}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
                <span>T-shirt</span>
                <span>$50</span>
                <input placeholder="1" />
                <Button className={styles.button} />
            </div>
            <div className={styles.line}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
                <span>T-shirt</span>
                <span>$50</span>
                <input placeholder="1" />
                <Button />
            </div>
            <div className={styles.line}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
                <span>T-shirt</span>
                <span>$50</span>
                <input placeholder="1" />
                <Button />
            </div>
        </div>
    );
};
