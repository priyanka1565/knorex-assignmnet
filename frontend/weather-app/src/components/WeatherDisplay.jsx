import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData)
        return <p className="mt-4">🌦️ Please select a city to see the weather!</p>;

    const { current, forecast } = weatherData;

    return (
        <div>
            <Card className="mt-4 text-center">
                <Card.Body>
                    <Card.Title>
                        <strong>Current Weather</strong>
                    </Card.Title>
                    <img src={current.icon} alt={current.description} />
                    <h3>{current.temp}°C</h3>
                    <p>{current.description}</p>
                </Card.Body>
            </Card>
            <h4 className="mt-4">3-Day Forecast</h4>
            <Row className="mt-2">
                {forecast.map((day, index) => (
                    <Col key={index} sm={4}>
                        <Card>
                            <Card.Body>
                                <img src={day.icon} alt={day.description} />
                                <h5>Day {index + 1}</h5>
                                <p>{day.temp}°C</p>
                                <p>{day.description}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default WeatherDisplay;
