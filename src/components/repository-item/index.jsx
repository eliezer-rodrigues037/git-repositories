import React from "react";

export default function Repository({ name, link, description }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={link} target="_blanc" rel="noreferrer">
                Repository link
            </a>
        </div>
    );
}
