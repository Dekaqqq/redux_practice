import React from 'react';

const Timer = ({ value, onIncrement, step, onDecrement }) => {
    return (
        <div>
            <button type="button" onClick={() => onDecrement(step)}>
                &#8722;
            </button>
            <p>{value} minutes</p>
            <button type="button" onClick={() => onIncrement(step)}>
                &#43;
            </button>
        </div>
    );
};

export default Timer;
