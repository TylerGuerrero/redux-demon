import React, { useState} from 'react'
import { buyCake } from '../redux/cake/actions/cakeActions'
import { connect } from 'react-redux'

const NewCakeContainer = ({ numOfCakes, buyCake }) => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h2>Number of Cakes {numOfCakes}</h2>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => buyCake(number)}>Buy {number}</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cakes.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)
