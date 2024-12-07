import { useEffect, useState } from "react";

const DateTime = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(id);
    }, [])

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
>
            <h2 className="date">
                {date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </h2>
            <h2 className="time">
                {date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true
                })}
            </h2>
        </div>
    );    
}

export default DateTime;