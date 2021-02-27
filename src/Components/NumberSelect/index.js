import React from 'react'
import { OptionContainer } from "./styles";

export default function NumberSelect({min, max, name, value, onChange}) {

    const options = []
    for (let i = min; i <= max; i++) {
        options.push(i)
    }

    const renderOptions = options.map((item) => {
        return (
            <option value={item} key={item}>
                {item}
            </option>
        )
    })

    return (
        <OptionContainer>
            <label htmlFor={name}>{name}</label>
            <select 
                name={name} 
                id={name} 
                value={value} 
                onChange={onChange} 
            >
                {renderOptions} 
            </select>
        </OptionContainer>
    )
}
