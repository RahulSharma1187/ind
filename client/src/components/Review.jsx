import React, { useState, useEffect } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
import "./review.css";

function Review({ selectedDate, selectedTime, selectedTitle, textareaValue, onNewBooking, onNewBookingDisable  }) {
  const { user, loginWithRedirect , isAuthenticated } = useAuth0();
  const [confirm, setConfirm] = useState(true);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (user) {
      setPatient({
        username: user.name,
        email: user.email,
        title: selectedTitle,
        message: textareaValue,
        date: selectedDate.format('DD/MM/YYYY'),
        time: selectedTime
      });
    }
  }, [user, selectedDate, selectedTime, selectedTitle, textareaValue]);


  const handleSubmit = async () => {
    if (!patient) {
      console.log('Patient data is not set');
      return;
    }
    console.log('Submitting patient data:', patient);
    try {
      const response = await fetch(`${window.location.origin}/api/auth/appointment`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(patient),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response from server:', result);
      setConfirm(false);
      // setTimeout(() => {
      //   setConfirm(true);
      // }, 3000);
    }  catch(error){
      console.log('Error found' , error);
      setConfirm(true);
    }
  };

  const handleNewBookingClick = () => {
    setConfirm(true);
    onNewBooking();
    onNewBookingDisable();
  };

  return (
    <>
      {confirm ? (
        <div className='reviewBox'>
        <div className='signInInfoBox'>
          <h4><strong>Title:</strong> {selectedTitle}</h4>
          <div className='notes'><strong>Appointment notes:</strong> <span>{textareaValue}</span></div>
          <div className='dateBook'><strong>Date:</strong> <span>{selectedDate ? selectedDate.format('DD/MM/YYYY') : 'Not selected'}</span></div>
          <div className='timeBook'><strong>Time:</strong> <span>{selectedTime || 'Not selected'}</span></div>
        </div>
        <div className="review-form">
          {
            !isAuthenticated ? (
              <>
                <h3>Sign in to continue</h3>
                <Button variant="contained" onClick={() => loginWithRedirect()} className="form-Btn"> 
                      Login with google <GoogleIcon /> or facebook  <FacebookIcon />
                </Button>
              </>
            ) : ( 
              <div className='button'>
                <Button  variant="contained" className='form-Btn' onClick={handleSubmit}>Continue</Button>
              </div> 
            )
          }  
        </div>
      </div>
      ) : (
        <div className='thankyouBox'>
          <h2>Thank you</h2>
          <Button  variant="contained" className='form-Btn' onClick={handleNewBookingClick}>New Booking</Button>
        </div>
      )
      } 
    </>
  )
}

export default Review