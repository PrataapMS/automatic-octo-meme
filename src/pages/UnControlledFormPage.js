import React from 'react';

export const UnControlledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const colorInput = React.createRef();

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form>
                <h3>Please enter your information:</h3>
                <div>
                    <input
                        ref={nameInput}
                        type="text"
                        placeholder="Name" />
                </div>
                <div>
                    <input
                        ref={emailInput}
                        type="text"
                        placeholder="Email" />
                </div>
                <div>
                    <input
                        ref={colorInput}
                        type="text"
                        placeholder="Favorite color" />
                </div>
                <button onClick={e => {
                    alert(`
                    Your name is ${nameInput.current.value},
                    Your email is ${emailInput.current.value},
                    Your Favourite color is ${colorInput.current.value}
                    `)
                    e.preventDefault();
                }
                }>Submit</button>
            </form>
        </>
    )
}