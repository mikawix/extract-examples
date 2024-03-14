import { createBoard } from '@wixc3/react-board';
import { Cart } from '../../../components/cart/cart';

export default createBoard({
    name: 'Cart-inner component',
    Board: () => <Cart />,
    isSnippet: true,
});
