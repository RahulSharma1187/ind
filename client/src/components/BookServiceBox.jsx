import React, { useState } from 'react';
import ServiceBox from "./ServiceBox";
import DateTime from './DateTime';
import Review from './Review';
import "./bookServiceBox.css";

function BookSrceBox() {
    const [activeTab, setActiveTab] = useState('Services');
    const [dateTimeEnabled, setDateTimeEnabled] = useState(false);
    const [reviewEnabled, setReviewEnabled] = useState(false);
    const [serviceTabEnabled, setServiceTabEnabled] = useState(false);

    const handleDisable = () => {
        setDateTimeEnabled(false);
        setReviewEnabled(false);
    }  
    
    // handle Left Tab Click
    const handleTabClick = (tab) => {
        if ((tab === 'DateTime' && dateTimeEnabled) || 
            (tab === 'Review' && reviewEnabled) || 
            tab === 'Services' && serviceTabEnabled) {
            setActiveTab(tab);
        }
    };

    // handle Next Step
    const handleNextStep = () => {
        if (activeTab === 'Services') {
            setDateTimeEnabled(true);
            setServiceTabEnabled(true); // Enable the Services tab when moving to DateTime
            setActiveTab('DateTime');
        } else if (activeTab === 'DateTime') {
            setReviewEnabled(true);
            setActiveTab('Review');
        }  else if (activeTab === 'Review') {
        }
    };

    // handle Previus Step
    const handlePrevStep = () => {
        if (activeTab === 'DateTime') {
            setActiveTab('Services');
            setServiceTabEnabled(false); // Disable the Services tab when moving back to Services
            setDateTimeEnabled(false);
        }
    };

    // Get Date and Time
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const handleDateTimeSelect = (date, time) => {
        setSelectedDate(date);
        setSelectedTime(time);
    };


    // Get Title Text
    const [selectedTitle, setSelectedTitle] = useState();
    const handleTitleSelect = (title) => {
        setSelectedTitle(title)
    }

    // Get TextArea value
    const [textareaValue, setTextareaValue] = useState();
    const handleTextareaValue = (value) => {
        setTextareaValue(value)
    }

  return (
    <div className='bookSrceBox'>
        <div className='bookSrceBoxLft'>
            <ul>
                <li onClick={() => handleTabClick('Services')} className={`${activeTab === 'Services' ? 'active' : ''} ${serviceTabEnabled ? 'enable' : ''}`}>
                    <span><i></i></span>
                    <strong>Services</strong>
                </li>

                <li onClick={() => handleTabClick('DateTime')} className={`${activeTab === 'DateTime' ? 'active' : ''} ${!dateTimeEnabled ? 'disabled' : 'enable'}`}>
                    <span><i></i></span>
                    <strong>Date/Time</strong>
                </li>

                <li onClick={() => handleTabClick('Review')} className={`${activeTab === 'Review' ? 'active' : ''} ${!reviewEnabled ? 'disabled' : 'enable'}`}>
                    <span><i></i></span>
                    <strong>Review</strong>
                </li>
            </ul>
        </div>

        <div className='bookSrceBoxRgt'>
            {activeTab === 'Services' && <ServiceBox onNextStep={handleNextStep} onTitleSelect={handleTitleSelect} onTextareaVal={handleTextareaValue} />}
            {activeTab === 'DateTime' && <DateTime onNextStep={handleNextStep} onPrevStep={handlePrevStep} onDateTimeSelect={handleDateTimeSelect} />}
            {activeTab === 'Review' && <Review selectedDate={selectedDate} selectedTime={selectedTime} selectedTitle={selectedTitle} textareaValue={textareaValue} onNewBooking={() => handleTabClick('Services')} onNewBookingDisable={() => handleDisable()} />}
        </div>

    </div>
  )
}

export default BookSrceBox