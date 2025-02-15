import styles from './BigCalendar.module.css';
import dayjs from "dayjs";
import {useState} from "react";

//TODO add parameter that decides if its preview or full calendar
export function BigCalendar(){
    const [actualDate] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [addEventCard, setAddEventCard] = useState(false);

    const generateCalendar = () => {
        const daysInMonth = actualDate.daysInMonth();
        const firstDay = actualDate.startOf('month').day();
        const today = dayjs();
        const calendar = [];
        let day = 1;

        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    week.push({ day: null, types: ['another_month'] });
                } else if (day > daysInMonth) {
                    week.push({ day: null, types: ['another_month'] });
                } else {
                    const date = actualDate.date(day);
                    const dayTypes = ['this_month'];

                    if (date.isSame(today, 'day')) {
                        dayTypes.push('today');
                    }
                    if (date.isSame(selectedDate, 'day')) {
                        dayTypes.push('selected_day');
                    }
                    // Add more conditions for other types
                    week.push({ day, types: dayTypes });
                    day++;
                }
            }
            calendar.push(week);
        }
        return calendar;
    }

    const handleClick = (day) => {
        if (day !== null) {
            setSelectedDate(actualDate.date(day));
            if (day === selectedDate.date()) {
                setSelectedDate(null);
                setAddEventCard(true);
                setTimeout(5000);
                setAddEventCard(false);
            }
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.button} onClick={() => actualDate.subtract(1, 'month')}>-</div>
                <div>{actualDate.format('MMMM YYYY')}</div>
                <div className={styles.button} onClick={() => actualDate.add(1, 'month')}>+</div>
            </div>
            <div className={styles.calendar}>
                {generateCalendar().map((week, weekIndex) => (
                    <div key={weekIndex} className={styles.row}>
                        {week.map((day, dayIndex) => (
                            <div
                                key={dayIndex}
                                className={`${styles.cell} ${day.types.map(type => styles[type]).join(' ')}`}
                                onClick={() => handleClick(day.day)}
                            >
                                {day.day !== null ? day.day : ''}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}