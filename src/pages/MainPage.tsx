import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store/store';

function MainPage() {
  const currentData = useSelector((state: RootState) => state.data);
  console.log(currentData);

  return (
    <div>
      <h2>Choose the form:</h2>
      <div className="nav-wrapper">
        <Link to="/uncontrolled-form">Uncontrolled form</Link>
        <Link to="/react-hook-form">React hook form</Link>
      </div>
      {currentData.data.map((item, i) => (
        <section key={i} className="data-tile">
          <p>Name: {item.fullName}</p>
          <p>Age: {item.age}</p>
          <p>E-mail: {item.email}</p>
          <p>Password: {item.password}</p>
          <p>Password confirmation: {item.confirmPassword}</p>
          <p>Gender: {item.gender}</p>
          <p>Country: {item.country}</p>
          <p>Accepted Terms & Conditions: {String(item.terms)}</p>
          <img src={item.image} alt="your-photo" />
        </section>
      ))}
    </div>
  );
}

export default MainPage;
