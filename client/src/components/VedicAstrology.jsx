import { Astrology } from "./Astrology";
import { AstrologyIcons } from "./AstrologyIcons";
import { BookaConsultation } from "./BookaConsultation";
import { ConseptAndGoals } from "./ConseptAndGoals";
import { DividerStar } from "./DividerStar";
import "./vedicAstrology.css";

export const VedicAstrology = () => {
  return (
    <div className="vedicAstrology">
        <Astrology />
        <DividerStar />
        <AstrologyIcons />
        <DividerStar />
        <ConseptAndGoals />
        <DividerStar />
        <BookaConsultation />
    </div>
  )
}
