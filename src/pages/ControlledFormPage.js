import { React, useState } from 'react';

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [color, setColor] = useState('');
    return (
        <>
            <h1>Controlled Form</h1>
            <form>
                <h3>Please enter your information:</h3>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Favorite color"
                        value={color}
                        onChange={e => setColor(e.target.value)} />
                </div>
                <button onClick={
                    e => {
                        alert(`
                    Name: is ${name},
                    Email is ${email},
                    Favorite color is ${color}
                    `)
                        e.preventDefault();
                    }
                }>Submit</button>
            </form>
        </>
    )
}