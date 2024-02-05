import { createBoard } from '@wixc3/react-board';
import { ImageSlider } from '../../../components/image-slider/image-slider';

export default createBoard({
    name: 'ImageSlider - hook',
    Board: () => <ImageSlider />,
    isSnippet: true,
});
