import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./scheduleConsultation.css";

import { useSelector, useDispatch } from 'react-redux';
import { openBookServiceBox, closeBookServiceBox, startAnimateBox, stopAnimateBox } from '../features/bookService/bookServiceSlice';

export const ScheduleConsultation = () => {

  const dispatch = useDispatch();

  const handleBookService = () => {
    dispatch(openBookServiceBox());
    setTimeout(() => {
        dispatch(startAnimateBox());
    }, 500);
  }

  const handleBookServiceBoxBg = () => {
    dispatch(stopAnimateBox());
    setTimeout(() => {
        dispatch(closeBookServiceBox());
    }, 500);
  }

  const [value, setValue] = useState(null);


  return (
    <div className="scheduleConsultation">
        <div className="scheduleConsultationBox">
            <h2>Schedule a <span>consultation</span></h2>
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>            
            <Button variant="contained" fullWidth  className="btn w-full m-40" onClick={handleBookService}>Confirm date and time</Button>
        </div>
    </div>
  )
}