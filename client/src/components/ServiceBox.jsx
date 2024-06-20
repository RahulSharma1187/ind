import React, { useState } from 'react'
import TabFunctionalMedicine from './TabFunctionalMedicine';
import TabVedicAstrology from './TabVedicAstrology';
import "./serviceBox.css";

function ServiceBox({ onNextStep, onTitleSelect, onTextareaVal }) {
  const [activeTab, setActiveTab] = useState('medicine');
  const [detailContent, setDetailContent] = useState(null);
  const [readmore, setReadmore] = useState(false);

  const handleActiveTab = (tab) => {
    setActiveTab(tab); 
    setDetailContent(null); // Reset detail content when switching tabs
  }

  const handleDetailClick = (content) => {
    setDetailContent(content);
    setReadmore(false); // Reset readmore state when new detail content is loaded
  };

  const handleReadMore = () => {
    setReadmore(!readmore); // Toggle readmore state
  };

  const handleBackClick = () => {
    setDetailContent(null); // Reset detail content when back button is clicked
  };
  
  return (
    <div className='serviceBox'>
      {detailContent ? (
        <div className='serviceTabDetail'>
          {React.cloneElement(detailContent, { readmore, handleReadMore, handleBackClick })}
        </div>
      ) : (
        <>
          <div className='helpBooking'>
            For help booking your appointment, text us at 123.4567.4567
          </div>
          <div className='serviceTab'>
            <div className='serviceTabLft'>
              <ul>
                <li onClick={() => handleActiveTab('medicine')} className={activeTab === 'medicine' ? 'active' : ''}>
                  Functional Medicine
                </li>
                <li onClick={() => handleActiveTab('vedic')} className={activeTab === 'vedic' ? 'active' : ''}>
                  Vedic Astrology
                </li>
              </ul>
            </div>
            
            <div className='serviceTabRgt'>
                {activeTab === 'medicine' && <TabFunctionalMedicine onDetailClick={handleDetailClick} handleBackClick={handleBackClick} onNextStep={onNextStep} onTitleSelect={onTitleSelect} onTextareaVal={onTextareaVal} />}
                {activeTab === 'vedic' && <TabVedicAstrology  onDetailClick={handleDetailClick} handleBackClick={handleBackClick} onNextStep={onNextStep} onTitleSelect={onTitleSelect} onTextareaVal={onTextareaVal} />}
            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default ServiceBox