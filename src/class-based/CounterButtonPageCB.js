import React from 'react';
import { CounterButtonCB } from './CounterButtonCB';
import { CongratulationsMessageCB } from './CongratulationsMessageCB';
import {DisplayIf} from '../DisplayIf';

export class CounterButtonPageCB extends React.Component {
    state = {
        hideMessage: false,
        numberOfClicks: 0,
    };

    // Component Life Cycle
    // -------------------
    // componentDidMount()
    // componentDidUpdate()
    // componentWillUnmount()
    // UNSAFE_componentWillMount
    // UNSAFE_componentWillUpdate
    // UNSAFE_componentWillReceiveProps

    increment = () => {
        this.setState({numberOfClicks: this.state.numberOfClicks + 1});
    }

    unhide = () => {
        this.setState({hideMessage: false});
    }


    render() {
        const threshold = 10;
        const {hideMessage, numberOfClicks} = this.state;
        return (
            <>
                <h1> The Counter Button Page </h1>
                {/* display Congratulations message every time threshold number of times  */}
                <DisplayIf condition={!hideMessage && (numberOfClicks !== 0 && numberOfClicks % threshold === 0)}>
                    <CongratulationsMessageCB
                        numberOfClicks={numberOfClicks}
                        onHide={() => this.setState({hideMessage: true})}
                    />
                </DisplayIf>
                <CounterButtonCB onIncrement={this.increment} numberOfClicks={numberOfClicks}
                    onHide={this.unhide}
                />
            </>
        )
    }
}