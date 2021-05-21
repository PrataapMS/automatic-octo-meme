import React, { useEffect } from 'react';

export const CounterButton = ({ onIncrement, numberOfClicks, onHide }) => {

    useEffect(() => {
        console.log('useEffect function called!');

        return () => console.log('unmounting!');
    }, []);

    // react components will only rerender when props or hooks change.
    // this does not work because it doesn't re-render the components of the DOM.
    // let numberOfClicks = 0;
    // const increment =()=> {
    //     numberOfClicks = numberOfClicks+1;
    //     console.log(numberOfClicks);
    // }

    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click me!</button>
        <button onClick={onHide}>Reset</button>
        </>
    )
};