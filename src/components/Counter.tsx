import {useState} from "react";
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const onClickHandler = () => {
        setCount(prevState => prevState + 1)
    }
    return <div>
        <div>{count}</div>
        <button onClick={onClickHandler}>increment</button>
    </div>
}
