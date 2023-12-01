import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/">Main page</NavLink>
      <NavLink to="/uncontrolled-component-form">Uncontrolled Form</NavLink>
      <NavLink to="/react-hook-form">React Hook Form</NavLink>
    </nav>
  );
}
