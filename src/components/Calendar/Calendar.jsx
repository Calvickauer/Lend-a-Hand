import { useState, useEffect } from "react"
import { ReactDOM } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate)
    }
    return (
        <Calendar
            onChange={onDateChange}
            value={date}
            showNeighboringMonth={false}
            locale={"en-US"}
         />
    );
}

export default MyCalendar
