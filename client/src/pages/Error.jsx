import { NavLink } from "react-router-dom";

export function Error() {
  return (
    <div className="errorPage">
        <h1>Page Not Found</h1>
        <h2>404</h2>
        <NavLink to="/">Return to Home</NavLink>
    </div>
  )
}
