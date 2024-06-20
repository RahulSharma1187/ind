import { NavLink } from 'react-router-dom';
import "./conseptAndGoals.css";

export const ConseptAndGoals = () => {
  return (
    <div className="conseptAndGoals">
        <div className="conseptGoalsSec">
            <div className="conseptGoalsSecImg"></div>
            <div className="conseptGoalsSecCont">
                <h4>Concept</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit nibh non eros semper pulvinar. Aliquam ullamcorper vestibulum ligula, sed mattis urna varius at.</p>
                <p>Nam lobortis, eros sit amet scelerisque accumsan, justo felis gravida sem, ac feugiat felis orci ut tortor. </p>
                <NavLink className="readMore">Read More <span></span></NavLink>
            </div>
        </div>
        <div className="conseptGoalsSec">
            <div className="conseptGoalsSecImg"></div>
            <div className="conseptGoalsSecCont">
                <h4>Goals</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit nibh non eros semper pulvinar. Aliquam ullamcorper vestibulum ligula, sed mattis urna varius at.</p>
                <p>Nam lobortis, eros sit amet scelerisque accumsan, justo felis gravida sem, ac feugiat felis orci ut tortor. </p>
                <NavLink className="readMore">Read More <span></span></NavLink>
            </div>
        </div>
    </div>
  )
}