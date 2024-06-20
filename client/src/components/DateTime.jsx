import React, { useState, useEffect } from 'react'
import "./dateTime.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';
import axios from 'axios';
import dayjs from 'dayjs';

const DateTime = ({ onNextStep, onPrevStep, onDateTimeSelect  }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState('');
  const [availability, setAvailability] = useState({});
  const times = ["12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "5:30PM", "6:00PM", "6:30PM", "7:00PM", "7:30PM", "8:00PM"];

  useEffect(() => {
    // Fetch availability data from the server
    axios.get(`${window.location.origin}/api/auth/availability`).then(response => {
      setAvailability(response.data)
    })
    .catch(error => console.error('Error fetching availability data:', error));
  }, []);

  const handleNext = () => {
    if (!selectedDate || !selectedTime) {
      setError('Please select both a date and a time.');
      return;
    }
    setError('');
    onDateTimeSelect(selectedDate, selectedTime);
    onNextStep();
  };

  const handleButtonClick = (time) => {
    setSelectedTime(time);
    setError(''); // Clear error on time selection
  };

  const shouldDisableDate = (date) => {
    const formattedDate = date.format('DD/MM/YYYY');
    return availability[formattedDate] && availability[formattedDate].length === times.length;
  };

  const getAvailableTimes = () => {
    if (!selectedDate) return times;
    const formattedDate = selectedDate.format('DD/MM/YYYY');
    const bookedTimes = availability[formattedDate] || [];
    return times.filter(time => !bookedTimes.includes(time));
  };

  return (
    <div className='dateTime'>
      <h3>Select service time</h3>
      <div className='calTime'>
        <div className='calCol'>
          <div className='availability'>AVAILABILITY</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(date) => {
                setSelectedDate(date); setSelectedTime(null); setError('');
              }}
              shouldDisableDate={shouldDisableDate}
            />
          </LocalizationProvider>
        </div>
        <div className='timeCol'>
          <div className='timeTitle'>Lorem Isum dolores</div>
          <Scrollbars style={{ height:'46vh' }} >
          <ul>
            {getAvailableTimes().map((time) => (
              <li key={time}>
                <Button
                  variant="contained"
                  className={`form-Btn ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => handleButtonClick(time)}                  
                  disabled={!selectedDate || !getAvailableTimes().includes(time)}
                >
                  {time}
                </Button>
              </li>
            ))}
          </ul>
          </Scrollbars>
          <p>Time Zone :  Indian Standard Time</p>
        </div>
      </div>
      {error && <div className='error'>{error}</div>}
      <div className='backNext'>
        <div className='backArw' onClick={onPrevStep}> <KeyboardArrowLeftIcon /> Back</div>
        <Button className="btn selectDate" onClick={handleNext}>next :  review booking</Button>
      </div>
    </div>
  )
}

export default DateTime