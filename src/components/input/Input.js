import React, { useState } from 'react'

const Input = () => {
    let [numberInput, setNumberInput] = useState(0)

    let onlyNumbers = (evt) => {
        const result = evt.target.value.replace(/\D/g, '');

        setNumberInput(result);
    }

    return (
        <div>
            <textarea maxLength={8} value={numberInput} onChange={(evt) => onlyNumbers(evt)} />
        </div>
    )
}

export default Input