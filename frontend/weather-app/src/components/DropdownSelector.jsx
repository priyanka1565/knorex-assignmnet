import React from 'react';
import { Form } from 'react-bootstrap';

const DropdownSelector = ({ cities, onCityChange }) => {
    return (
        <Form.Select
            onChange={(e) => onCityChange(e.target.value)}
            className="custom-select"
        >
            <option value="" disabled>
                🌍 Select a city
            </option>
            {cities.map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
            ))}
        </Form.Select>
    );
};

export default DropdownSelector;
