import React from 'react'

const Stats = ({ turnsLeft, selectionLeft, score, onResetClick }) => (
    <div id="stats">
        <ul id="wrapper">
            <li className="stat">Tahů do konce: <span className="statVal">{turnsLeft}</span></li>
            <li className="stat">Ještě lze vybrat: <span className="statVal">{selectionLeft}</span></li>
            <li className="stat">Celkem bodů: <span className="statVal">{score}</span></li>
        </ul>
        <button onClick={() => onResetClick()}>Reset</button>
    </div>
);

export default Stats;