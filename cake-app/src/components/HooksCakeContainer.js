import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/actions/CakeActions'

const HooksCakeContainer = () => {
    // useSelector is the same as mapStateToProps
    const numOfCakes = useSelector((state) => state.cakes.numOfCakes)
    
    // useDispatch is the same as mapDispatchToProps
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
