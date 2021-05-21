import React from 'react';
import { PeopleList } from '../PeopleList';


const people = [
    {
        name: 'John',
        age: 30,
        hairColor: 'brown',

    }, {
        name: 'Helga',
        age: 45,
        hairColor: 'black',

    }, {
        name: 'Dwayne',
        age: 34,
        hairColor: 'blonde',

    },
];

export const PeopleListPage = () => (
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
    </>
);