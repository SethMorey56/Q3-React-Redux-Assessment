import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import { bindActionCreators } from 'redux';

const Camera = ({cameras, addToCartFunc}) => {
    return (
            <div>
            <Card>
                <CardBody>
                <CardTitle>{cameras.name}</CardTitle>
                <CardSubtitle>There is no description in the API, weird.</CardSubtitle>
                </CardBody>
                <img width="100%" src={cameras.picture}/>
                <CardBody>
                <CardText>"It takes the best photos!" - Someone, Somewhere</CardText>
                <CardText>{cameras.price}</CardText>
                <Button onClick={() => addToCartFunc(cameras.id)}>
                    Add to Cart
                </Button>
                </CardBody>
            </Card>
            </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
    addToCartFunc : addToCart
}, dispatch)

export default connect(null, mapDispatchToProps)(Camera)