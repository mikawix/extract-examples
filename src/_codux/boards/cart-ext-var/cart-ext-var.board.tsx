import { createBoard } from '@wixc3/react-board';
import { CartExtVar } from '../../../components/cart-ext-var/cart-ext-var';

export default createBoard({
    name: 'CartExtVar',
    Board: () => <CartExtVar />,
    isSnippet: true,
});