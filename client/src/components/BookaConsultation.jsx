import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import "./bookaConsultation.css";

export const BookaConsultation = () => {
  return (
    <div className="bookaConsultation">
       {/* <NavLink to={"/"}>Book a Consultation</NavLink> */}
       <Button variant="contained" >Book a Consultation</Button>
    </div>
  )
}