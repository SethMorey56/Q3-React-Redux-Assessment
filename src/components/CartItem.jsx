import React from 'react';
import { Button } from 'reactstrap';
import { removeFromCart } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CartItem = (props) => {
    return (
        <div>
            <h5>{props.camera.name}</h5>
            <img src={props.camera.picture}></img>
            <p>{props.camera.price}</p>
            <Button onClick={() => props.removeFromCart(props.camera.id)}>Remove</Button>
        </div>
    );
}

const mapDispatchtoProps = dispatch => bindActionCreators({
    removeFromCart
}, dispatch)

export default connect(null, mapDispatchtoProps)(CartItem)