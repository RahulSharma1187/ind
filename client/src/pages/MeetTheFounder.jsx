import { Button } from "@mui/material"
import MeetTheFounderBanner from "../components/MeetTheFounderBanner"
import MeetTheFounderTestimonial from "../components/MeetTheFounderTestimonial"

import { useSelector, useDispatch } from 'react-redux';
import { openBookServiceBox, closeBookServiceBox, startAnimateBox, stopAnimateBox } from '../features/bookService/bookServiceSlice';

export const MeetTheFounder = () => {
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
    return (
      <>
        <div className="meetTheFounderPage">
          <h1>Meet The Founder </h1>
          <MeetTheFounderBanner />
          <MeetTheFounderTestimonial />
          <Button className="btn" onClick={handleBookService}>Click here</Button>
        </div>
      </>
    )
}
  