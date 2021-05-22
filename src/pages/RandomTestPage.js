import React from 'react';
import { useState } from 'react';

export const RandomTestPage = () => {
    const [check, setCheck] = useState(true);

    const toggle = () => setCheck(check ? false : true);

    return (
        <>
            <div>
                <h1>Hello Prataap!</h1>
                <button style={{ background: 'red', foreground: 'white', border: '50px', padding: 10 }} onClick={toggle}>Toggle text</button>

                {check ?
                    <p>Start editing to see some magic happen :)</p>
                    : null}
            </div>
        </>
    );
}