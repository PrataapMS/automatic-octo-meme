import React from 'react';

export class CongratulationsMessageCB extends React.Component {
    render(){
        const {numberOfClicks, onHide} = this.props;
        return (
            <>
            <h1>Congratulations! You've reached {numberOfClicks} number of clicks!</h1>
            <button onClick={onHide}>Hide</button>
        </>
        );
    }
}