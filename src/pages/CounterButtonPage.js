import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { parse } from 'query-string'
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';
import { usePersistentState } from '../usePersistentState';

export const CounterButtonPage = () => {
    const { name } = useParams();
    const location = useLocation();
    const startingValue = parse(location.search).startingValue || 0;
    const threshold = 10;

    console.log(location);
    console.log(parse(location.search));

    // const [numberOfClicks, setNumberOfClicks] = useState(0);
    // using custom hooks for data Persistence 
    const [numberOfClicks, setNumberOfClicks] = usePersistentState('numberOfClicks', startingValue, Number);

    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);


    return (
        <>
            { name ?
                <h1> {name}'s Counter Button Page </h1>
                : <h1> The Counter Button Page </h1>
            }
            {/* display Congratulations message every time threshold number of times  */}
            <DisplayIf condition={!hideMessage && (numberOfClicks !== 0 && numberOfClicks % threshold === 0)}>
                <CongratulationsMessage
                    numberOfClicks={numberOfClicks}
                    onHide={() => setHideMessage(true)}
                />
            </DisplayIf>
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}
                onHide={() => setHideMessage(false)}
            />
        </>
    );
}