import { createBoard } from '@wixc3/react-board';
import { ChildStyle } from '../../../components/child-style/child-style';

export default createBoard({
    name: 'ChildStyling',
    Board: () => <ChildStyle />,
    isSnippet: true,
});