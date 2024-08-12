import {useState} from "react";
import * as cls from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const onClickHandler = () => {

        setCount(prevState => prevState + 1)
    }
    return <div className={cls.button}>
        <div>{count}</div>
        <button onClick={onClickHandler}>increment</button>
    </div>
}
