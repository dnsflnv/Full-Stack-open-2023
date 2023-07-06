import React from "react";

const Numbers = ({ personsToShow, deleteCallback }) => {
    return (
        <ul>
            {personsToShow.map(person =>
                <li key={person.id}>
                    {person.name}, {person.number}&nbsp;
                    <button onClick={deleteCallback} value={person.id}>Delete</button>
                </li>
            )}
        </ul>
    );
}

export default Numbers;