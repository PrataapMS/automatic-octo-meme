import React, { useEffect } from 'react';

export const CongratulationsMessage = ({ numberOfClicks, threshold, onHide }) => {
    useEffect(() => {
        console.log('UserEffect called for Congratulations Message Component!')
        return () => {console.log('CongratulationsMessage unmounting ')};
    }, [])

    return numberOfClicks !== 0 && numberOfClicks%threshold === 0
    ? <>
        <h1>Congratulations! You've reached {threshold} number of clicks!</h1>
        <button onClick={onHide}>Hide</button>
    </>
    : null;
}