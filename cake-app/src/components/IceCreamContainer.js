import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/actions/IceCreamActions'


const IceCreamContainer = ({numOfIceCreams, buyIceCream}) => {
    return (
        <div>
            <h2>Number of Ice Creams {numOfIceCreams}</h2>
            <button onClick={() => buyIceCream()}>Buy Ice Creams</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCreams.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => {dispatch(buyIceCream())}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(IceCreamContainer);
