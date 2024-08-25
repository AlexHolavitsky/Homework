import { useDispatch, useStore } from 'react-redux'
import {increase, decrease, reset} from '../redux-toolkit/counterSlice';


function Counter () {
    const dispatch = useDispatch();

const store = useStore();
console.log('store', store.getState());

    return (
        <div>
            {/* <button onClick={()=>dispatch({type: 'INCREMENT'})}> + </button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}> - </button> */}
            {/* <button onClick={()=>dispatch({type: 'RESET'})}> Reset </button> */}

            <button onClick={()=>dispatch(increase())}> + </button>
            <button onClick={()=>dispatch(decrease())}> - </button> 
            {/* <button onClick={()=>dispatch(reset())}> Reset </button> */}


        </div>
    );
}

export default Counter;