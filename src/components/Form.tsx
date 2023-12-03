import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import countriesArray from '../utils/constants/countriesArr';
import schema from '../utils/constants/schema';
import { useDispatch } from 'react-redux';
// import { RootState } from '../utils/store/store';
import { setData } from '../utils/store/reducers/dataSlice';
import { FormDataType, Base64FormDataType } from '../types/types';
import { convertPhoto } from '../utils/helpers/convertPhoto';
import { useNavigate } from 'react-router';

function Form() {
  // const currentData = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormDataType) => {
    console.log(data);
    if (data.image instanceof File) {
      const convertedPhoto = await convertPhoto(data.image);
      const formData: Base64FormDataType = { ...data, image: convertedPhoto };
      dispatch(setData([formData]));
      navigate('/');
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] instanceof File) {
      setValue('image', event.target.files[0]);
      trigger('image');
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('fullName')}
        id="name-input"
        placeholder="Name"
      />
      <label className="error-label" htmlFor="name-input">
        {errors.fullName?.message}
      </label>

      <input
        type="number"
        id="age-input"
        placeholder="Age"
        {...register('age')}
      />
      <label className="error-label" htmlFor="age-input">
        {errors.age?.message}
      </label>

      <input
        type="email"
        id="email-input"
        placeholder="Email"
        {...register('email')}
      />
      <label className="error-label" htmlFor="email-input">
        {errors.email?.message}
      </label>

      <input
        type="password"
        id="password-input"
        placeholder="Password"
        {...register('password')}
      />
      <label className="error-label" htmlFor="password-input">
        {errors.password?.message}
      </label>

      <input
        type="password"
        id="confirm-password-input"
        placeholder="Confirm password"
        {...register('confirmPassword')}
      />
      <label className="error-label" htmlFor="confirm-password-input">
        {errors.confirmPassword?.message}
      </label>

      <select {...register('gender')} id="gender-input">
        <option value="">Choose your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label className="error-label" htmlFor="gender-input">
        {errors.gender?.message}
      </label>

      <input
        {...register('country')}
        placeholder="Choose your country"
        id="country-input"
        list="country-choice"
      />
      <datalist id="country-choice">
        {countriesArray.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </datalist>
      <label className="error-label" htmlFor="country-input">
        {errors.country?.message}
      </label>

      <label className="label" htmlFor="terms-input">
        Accept Terms&Conditions
      </label>
      <input {...register('terms')} type="checkbox" id="terms-input" />
      <label className="error-label" htmlFor="terms-input">
        {errors.terms?.message}
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
        {errors.image?.message}
      </label>
      <button type="submit" disabled={!isValid}>
        Submit form
      </button>
    </form>
  );
}

export default Form;
