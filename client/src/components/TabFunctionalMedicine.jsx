import React, { useState, useRef  } from 'react'
import "./tabFunctionalMedicine.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import EastIcon from '@mui/icons-material/East';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Button, TextField } from '@mui/material';

function TabFunctionalMedicine({onDetailClick, handleBackClick, onNextStep, onTitleSelect, onTextareaVal  }) {
  const [readmore, setReadmore] = useState(false);
  const textareaRef = useRef(null);

  const functionalTabCont = [
      {
        title:"Free Discovery Call",
        subTitle:"15 minutes - 0 USD", 
        sortDescription: "Schedule a free discovery call to get introduced to the core pillars of functional medicine. Learn how this innovative approach can harness the power of natural compounds to address root causes and promote complete healing, setting you on a path to optimal health.",
        description: `Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br /><br />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        `,
        timeMin: "15 minutes"
      },
      {
        title:"Blood Chemistry Analysis",
        subTitle:"30 minutes - 100 USD", 
        sortDescription: "Schedule a free discovery call to get introduced to the core pillars of functional medicine. Learn how this innovative approach can harness the power of natural compounds to address root causes and promote complete healing, setting you on a path to optimal health.",
        description: `Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br /><br />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        `,
        timeMin: "15 minutes"
      }
  ]

  const handleTitleSelect = (title) => {
    onTitleSelect(title);
  };

  const handleNext = () => {
    const textareaValue = textareaRef.current.value;
    handleTextareaValue(textareaValue);
    onNextStep();
  };

  const handleTextareaValue = (value) => {
    onTextareaVal(value)
  }

  return (
    <div className='tabFunctionalMedicine'>
      <Scrollbars style={{ height:'80vh' }} >
        <div className='tabFunctionalMedicineHdrImg'>
          <img src="./images/tabFunMedHdrImg.png" alt="" />
        </div>
        <div className='tabFunctionalMedicineCont'>
          <p>Functional medicine is an individualized, science-based approach addressing underlying causes of disease by integrating genetic, biochemical, and lifestyle factors, leveraging a systems biology perspective. This patient-centred methodology aims to restore health and function through personalized interventions.</p>
          <ul>
            {
                functionalTabCont.map((tabCon, index) => {
                    return (
                        <li key={index}>
                            <button onClick={() => {
                              handleTitleSelect(tabCon.title);
                              onDetailClick(
                              <DetailContent 
                                tabCon={tabCon} 
                                readmore={readmore}
                                handleReadMore={() => setReadmore(!readmore)}
                                handleBackClick={handleBackClick} 
                                onNextStep={handleNext} 
                                textareaRef={textareaRef}
                              />
                              );
                            }}>
                                <EastIcon />
                            </button>
                            <h3>{tabCon.title} <span>{tabCon.subTitle}</span> </h3>
                            <p>{tabCon.sortDescription}</p>
                        </li>
                    )                
                })
            }
          </ul>
        </div>
      </Scrollbars>
    </div>
  )
}

const DetailContent = ({ tabCon, readmore, handleReadMore, handleBackClick, onNextStep, textareaRef   }) => (
  <div className='funMedDtlBox'>
    <div className='funMedDtlBoxBack' onClick={handleBackClick}><KeyboardArrowLeftIcon /> Functional Medicine</div>
    <Scrollbars style={{ height:'78vh' }} >
      <div className={`funMedDtlBoxGreyBg ${readmore ? 'funMedDtlBoxGreyBgFull' : ''}`}>
        <h3>{tabCon.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: tabCon.description }}></p>
        <div className='readmoreTrans' onClick={handleReadMore}>
          {readmore ? 'Less' : 'Read more'}
        </div>
      </div>
      <div className='selectServiceLength'>
        <h3>Select Service Length</h3>
        <div className='timeDefine'>
          <span><i></i></span>
          <strong>{tabCon.timeMin}</strong>
        </div>
      </div>
      <div className='appointmentNotes'>
        <h3>Appointment notes </h3>
        <TextField 
            id="outlined-basic" 
            label="Please let us know your priority concerns and aspects you'd like us to focus on" 
            variant="standard"
            name="Please let us know your priority concerns and aspects you'd like us to focus on"
            multiline
            rows={4}
            inputRef={textareaRef}
        />
      </div>
    </Scrollbars>
    <div className='backNext'>
      <div className='backArw' onClick={handleBackClick}> <KeyboardArrowLeftIcon /> Back</div>
      <Button className="btn selectDate" onClick={onNextStep}>next slect date and time</Button>
    </div>
  </div>
);

export default TabFunctionalMedicine