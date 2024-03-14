import { createBoard } from '@wixc3/react-board';
import { CartVar } from '../../../components/cart-var/cart-var';

export default createBoard({
    name: 'CartWithLocalVar',
    Board: () => <CartVar />,
    isSnippet: true,
});