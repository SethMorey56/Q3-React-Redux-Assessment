import React from 'react';
import { Card, CardTitle, Button } from 'reactstrap';
import CartItemsList from './CartItemList';

const Cart = (props) => {
    return (
        <div>
            <h2> Cart Component </h2>
            <Card>
                <CardTitle>Items</CardTitle>
                <CartItemsList/>
                <Button>Checkout</Button>
            </Card>
        </div>
    );
}

export default Cart