import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/uncontrolled-component-form">
        Uncontrolled Component Form
      </NavLink>
      <NavLink to="/react-hook-form">React Hook Form</NavLink>
    </nav>
  );
}
