import React, { useState } from 'react';

import './Schedule.css';

const Schedule = ({ schedules }) => {
  const availableDates = schedules.map(schedule => schedule.date);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedHall, setSelectedHall] = useState(null);


  const formatDate = (dateString) => {
    const dateStringArr = dateString.split('.');
    const dateStringEu = dateStringArr[1] + "." + dateStringArr[0] + "." + dateStringArr[2];
    const date = new Date(dateStringEu);
    const options = { weekday: 'short', day: '2-digit', month: '2-digit' };
    return date.toLocaleDateString('ru-RU', options);
  };

  const getUniqueHalls = () => {
    const uniqueHalls = new Set();
    schedules.forEach(schedule => {
      schedule.seances.forEach(seance => {
        uniqueHalls.add(seance.hall.name);
      });
    });
    return Array.from(uniqueHalls);
  };

  const getSeanceTimesForHallAndDate = (hall, date) => {
    const seanceTimes = [];
    schedules.forEach(schedule => {
      if (schedule.date === date) {
        schedule.seances
          .filter(seance => seance.hall.name === hall)
          .forEach(seance => {
            seanceTimes.push(seance.time);
          });
      }
    });
    return seanceTimes;
  };

  const renderSeatsMatrix = () => {
    if (selectedHall && selectedDate && selectedTime) {
      const selectedHallData = schedules
        .find(schedule => schedule.date === selectedDate)
        .seances.find(seance => seance.hall.name === selectedHall).hall;

      const seatsMatrix = selectedHallData.places.map((row, rowIndex) => (
        <div key={rowIndex}>
          <span style={{ marginRight: '5px', fontWeight: 600, fontSize: '15px'}}>{rowIndex}</span>
          {row.map((seat, seatIndex) => (
            <button
              key={seatIndex}
              disabled={seat.type === 'BLOCKED'}
              style={{ margin: '2px', backgroundColor: seat.type === 'BLOCKED' ? 'lightgray' : 'white' }}
            >
              {seatIndex + 1}
            </button>
          ))}
        </div>
      ));

      return (
        <div>
          <h2>Выбор места</h2>
          <span style={{ margin: '5px', fontWeight: 600, fontSize: '15px'}}>Ряд</span>
          {seatsMatrix}
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Расписание</h2>
      {availableDates.map(date => (
        <button
          key={date}
          onClick={() => {
            setSelectedDate(date);
            setSelectedTime(null);
            setSelectedHall(null);
          }}
          style={{ margin: '10px' }}
          className={selectedDate === date ? 'selected' : ''}
        >
          {formatDate(date)}
        </button>
      ))}

      {selectedDate && (
        <div>
          {getUniqueHalls().map(hall => (
            <div key={hall}>
              <p>{hall} зал</p>
              <ul>
                {getSeanceTimesForHallAndDate(hall, selectedDate).map(time => (
                  <button
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setSelectedHall(hall);
                    }}
                    style={{ margin: '5px' }}
                    className={selectedTime === time && selectedHall === hall ? 'selected' : ''}
                  >
                    {time}
                  </button>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {renderSeatsMatrix()}

    </div>
  );
};

export default Schedule;
