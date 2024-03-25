import classNames from 'classnames';
import { createBoard } from '@wixc3/react-board';
import { Image } from '../../../components/image/image';
import globalStyles from '../../../globals.module.scss';
import img4 from '../../../assets/phto-4.png';
import styles from './extract-example.board.module.scss';

export default createBoard({
    name: 'Extract to Component Base Example',
    Board: () => (
        <div className={styles.root}>
            <div className={styles.header}>
                <h2 className={globalStyles.title}>Extract to Component Base Example</h2>
                <div className={styles.instructionsContainer}>
                    <h3 className={classNames(globalStyles.subtitle, styles.instructionMessage)}>
                        Create new component out of the card below.
                    </h3>
                </div>
                <h3 className={classNames(globalStyles.subtitle, styles.instructionMessage)}></h3>
            </div>
            <div className={styles.content}>
                <div className={classNames(styles.card, globalStyles.roundedCorners)}>
                    <Image className={styles.cardImage} src={img4} />
                    <div className={styles.cardInfo}>
                        <div
                            className={classNames(
                                styles.greenText,
                                styles.cardTitle,
                                globalStyles.bold,
                            )}
                        >
                            Card Title
                        </div>
                        <div className={classNames(styles.greenText, styles.cardSubtitle)}>
                            Card Subtitle
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 537,
        canvasWidth: 800,
    },
});
