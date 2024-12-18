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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
>
            <h2 className="date">
                {date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    weekday: "long"
                })}
            </h2>
            <h1 className="time" style={{fontSize: '70px', color: 'GrayText'}}>
                {date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true
                })}
            </h1>
        </div>
    );    
}

export default DateTime;