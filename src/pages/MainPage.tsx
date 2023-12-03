import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h2>Choose the form:</h2>
      <div className="nav-wrapper">
        <Link to="/uncontrolled-form">Uncontrolled form</Link>
        <Link to="/react-hook-form">React hook form</Link>
      </div>
    </div>
  );
}

export default MainPage;
