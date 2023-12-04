import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/store/store';
import { useEffect } from 'react';
import { setEffect } from '../utils/store/reducers/newTileEffectlice';

function MainPage() {
  const currentData = useSelector((state: RootState) => state.data.data);
  const dispatch = useDispatch();
  const tileBorderEffect = useSelector(
    (state: RootState) => state.effect.effect
  );

  useEffect(() => {
    setTimeout(() => dispatch(setEffect(false)), 3000);
  }, [dispatch]);

  return (
    <div>
      <h2>Choose the form:</h2>
      <div className="nav-wrapper">
        <Link to="/uncontrolled-form">Uncontrolled form</Link>
        <Link to="/react-hook-form">React hook form</Link>
      </div>
      <div className="tiles-wrapper">
        {currentData.map((item, i) => (
          <section
            key={i}
            className={
              tileBorderEffect && i === 0
                ? 'data-tile data-tile__active'
                : 'data-tile'
            }
          >
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
    </div>
  );
}

export default MainPage;
