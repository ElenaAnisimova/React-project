import { useRef, useState } from 'react';
import schema from '../utils/helpers/schema';
import { ValidationError } from 'yup';
import { Base64FormDataType, ErrorType } from '../types/types';
import { ErrorsStateType } from '../types/types';
import countriesArray from '../utils/constants/countriesArr';
import { setData } from '../utils/store/reducers/dataSlice';
import { convertPhoto } from '../utils/helpers/convertPhoto';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function UncontrolledForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fullNameValue = useRef<HTMLInputElement>(null);
  const ageValue = useRef<HTMLInputElement>(null);
  const emailValue = useRef<HTMLInputElement>(null);
  const passwordValue = useRef<HTMLInputElement>(null);
  const confirmPasswordValue = useRef<HTMLInputElement>(null);
  const genderValue = useRef<HTMLSelectElement>(null);
  const countryValue = useRef<HTMLInputElement>(null);
  const termsValue = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<ErrorsStateType>({});
  const [image, setImage] = useState<File>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] instanceof File) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currFormData = {
      fullName: fullNameValue.current?.value,
      age: Number(ageValue.current?.value),
      email: emailValue.current?.value,
      password: passwordValue.current?.value,
      confirmPassword: confirmPasswordValue.current?.value,
      gender: genderValue.current?.value,
      country: countryValue.current?.value,
      terms: termsValue.current?.checked,
      image,
    };

    try {
      await schema.validate(currFormData, { abortEarly: false });
      if (currFormData.image instanceof File) {
        const convertedPhoto = await convertPhoto(currFormData.image);
        const formData: Base64FormDataType = {
          ...currFormData,
          image: convertedPhoto,
        };
        dispatch(setData([formData]));
        navigate('/');
      }
    } catch (error) {
      const err = error as ValidationError;
      const currErrors: ErrorType = {};

      err.inner.forEach((errItem) => {
        currErrors[`${errItem.path}`] = errItem.message;
      });
      setErrors(currErrors);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="name-input"
        placeholder="Name"
        ref={fullNameValue}
      />
      <label className="error-label" htmlFor="name-input">
        {errors.fullName}
      </label>

      <input type="number" id="age-input" placeholder="Age" ref={ageValue} />
      <label className="error-label" htmlFor="age-input">
        {errors.age}
      </label>

      <input
        type="email"
        id="email-input"
        placeholder="Email"
        ref={emailValue}
      />
      <label className="error-label" htmlFor="email-input">
        {errors.email}
      </label>

      <label htmlFor="password-input">
        Password should contain 1 number, 1 uppercased letter, 1 lowercased
        letter, 1 special character
      </label>
      <input
        type="password"
        id="password-input"
        placeholder="Password"
        ref={passwordValue}
      />
      <label className="error-label" htmlFor="password-input">
        {errors.password}
      </label>

      <input
        type="password"
        id="confirm-password-input"
        placeholder="Confirm password"
        ref={confirmPasswordValue}
      />
      <label className="error-label" htmlFor="confirm-password-input">
        {errors.confirmPassword}
      </label>

      <select id="gender-input" ref={genderValue}>
        <option value="">Choose your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label className="error-label" htmlFor="gender-input">
        {errors.gender}
      </label>

      <input
        type="text"
        placeholder="Choose your country"
        id="country-input"
        list="country-choice"
        ref={countryValue}
      />
      <datalist id="country-choice">
        {countriesArray.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </datalist>
      <label className="error-label" htmlFor="country-input">
        {errors.country}
      </label>

      <div className="input-wrapper">
        <input type="checkbox" id="terms-input" ref={termsValue} />
        <label className="label" htmlFor="terms-input">
          Accept Terms&Conditions
        </label>
      </div>
      <label className="error-label" htmlFor="terms-input">
        {errors.terms}
      </label>

      <label className="label" htmlFor="image-input">
        Please upload your photo
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="image-input"
        onChange={handleImageChange}
      />
      <label className="error-label" htmlFor="image-input">
        {errors.image}
      </label>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default UncontrolledForm;
