import React, { useState, useEffect } from 'react';
import TimeSection from '../components/timesection';

export default function CSRPage() {
    const [dateTime, setDateTime] = useState();
    useEffect(() => {
        fetch("https://worldtimeapi.org/api/ip")
            .then(res => res.json())
            .then(
                (result) => {
                    setDateTime(result.datetime);
                },
                (error) => {
                    console.error(error);
                }
            )
    }, []);
    return (
        <TimeSection dateTime={dateTime} />
    );
}
