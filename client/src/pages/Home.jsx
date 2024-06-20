import { useRef } from 'react';
import { BookaCall } from "../components/BookaCall"
import { FunctionalMedicine } from "../components/FunctionalMedicine"
import { Herobanner } from "../components/Herobanner"
import { LanguageofStars } from "../components/LanguageofStars"
import { ScheduleConsultation } from "../components/ScheduleConsultation"
import { VedicAstrology } from "../components/VedicAstrology"

export const Home = () => {
  const bookaCallRef = useRef(null);
  
  return (
    <>
      <Herobanner bookaCallRef={bookaCallRef} />
      <BookaCall ref={bookaCallRef} />
      <FunctionalMedicine />
      <ScheduleConsultation />
      <LanguageofStars />
      <VedicAstrology />
    </>
  )
}
