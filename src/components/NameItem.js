import React, { useEffect } from "react";

function NameItem({ name, activeName, setActiveName }) {

    useEffect(() => {
        console.log(`${name} is in de DOM gezet!`);
    }, [])

    useEffect(() => {
        if (activeName === name) {
            console.log(`${name} wil graag een liedje zingen.`);
        }
    }, [activeName])

    return (
        <li>
            <h3>{name}</h3>
            <button
                type="button"
                onClick={() => setActiveName(name)}
            >
                Kiest een liedje!
            </button>
        </li>
    );
}

export default NameItem;
