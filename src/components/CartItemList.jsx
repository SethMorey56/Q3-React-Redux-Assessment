import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const CartItemList = (props) => {

    let camerasInCart = props.cameras.filter(camera => camera.inCart)

    let camerasToBeRendered = camerasInCart.map(camera => <CartItem key={camera.id} camera={camera}/>)

    let total = 0;
    camerasInCart.forEach(camera => {
        let cameraPrice = camera.price.slice(1)
        let cameraTotalPrice = parseFloat(cameraPrice.replace(',', ''))
        total += cameraTotalPrice
        console.log('logged this', total)
    })

    return (
        <div>
            {camerasToBeRendered}
            <p> Price: ${total}</p>
            <p> Tax: 0.086 </p>
            <p> Total with Tax: ${(total * 1.086).toFixed(2)}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    cameras: state.cameras
})

export default connect(mapStateToProps)(CartItemList)