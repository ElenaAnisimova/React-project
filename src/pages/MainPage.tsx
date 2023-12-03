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
        <section key={i}>
          <p>{item.fullName}</p>
          <p>{item.age}</p>
          <p>{item.email}</p>
        </section>
      ))}
    </div>
  );
}

export default MainPage;
