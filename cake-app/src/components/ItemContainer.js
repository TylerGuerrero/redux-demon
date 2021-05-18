import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/actions/cakeActions'
import { buyIceCream } from '../redux/icecream/actions/iceCreamActions'


const ItemContainer = ({ item, cake, buyItem}) => {
    return (
        <div>
            <h2>Item - {item}</h2>
            <button onClick={() => buyItem()}> Buy Item </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? 
    state.cakes.numOfCakes: 
    state.iceCreams.numOfIceCreams 

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunc = ownProps.cake ? 
    () => dispatch(buyCake()):
    () => dispatch(buyIceCream());

    return {
        buyItem: dispatchFunc
    }
}

// can pass null to first arg
// to unsubscribe from store never get updates to state

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)
