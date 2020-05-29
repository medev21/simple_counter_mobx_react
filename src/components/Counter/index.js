import React from 'react';
import { observer } from 'mobx-react-lite';
import { UseStore } from '../../hooks/UseStore';
import './index.scss';
export default observer(() => {

    const { CounterStore } = UseStore();

    const handleIncrease = () => { CounterStore.increaseCounter() };
    const handleDecrease = () => { CounterStore.decreaseCounter() };

    return(
        <div id="counterSection"> 
            <div className="title">Counter!</div>

            <div className="counter">{CounterStore.counter}</div>
            <div className="btnsContainer">
                <button className="increaseBtn" onClick={handleIncrease}>+</button>
                <button className="decreaseBtn" onClick={handleDecrease}>-</button>
            </div>
        </div>
    );
});