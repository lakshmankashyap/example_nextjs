import React, { useState, useEffect } from 'react';
import TimeSection from '../components/timesection';

export default function SSGPage() {
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

export const getStaticProps = async () => {
    const res = await fetch("https://worldtimeapi.org/api/ip").then(res => res.json())

    return {
        props: { dateTime: res.datetime }
    }
}