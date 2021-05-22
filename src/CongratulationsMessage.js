import React, { useEffect } from 'react';

export const CongratulationsMessage = ({ numberOfClicks, onHide }) => {
    useEffect(() => {
        console.log('UserEffect called for Congratulations Message Component!')
        return () => { console.log('CongratulationsMessage unmounting ') };
    }, [])

    return (
        <>
            <h1>Congratulations! You've reached {numberOfClicks} number of clicks!</h1>
            <button onClick={onHide}>Hide</button>
        </>
    );
}