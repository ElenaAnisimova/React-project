// import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { countriesArray } from '../utils/countriesArr';

function Form() {
  const MAX_IMAGE_SIZE = 1048576; // 1Mb
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/^[A-Z].*/, 'The first letter should be uppercased')
      .required('Your full name is requeired!'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    age: yup
      .number()
      .required('Please choose your age')
      .positive('Age should be above 0')
      .integer('Age should be an integer'),
    password: yup
      .string()
      .min(4)
      .max(24)
      .matches(/[A-Z]/, 'Password should have at least 1 uppercase letter')
      .matches(/[a-z]/, 'Password should have at least 1 lowercase letter')
      .matches(/[0-9]/, 'Password should have at least 1 number')
      .matches(
        /[@$!%*#?&]/,
        'Password should have at least 1 special character'
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], "Passwords don't match")
      .required(),
    gender: yup.string().required(),
    country: yup.string().required(),
    terms: yup
      .boolean()
      .oneOf([true])
      .required('Accept Terms & Conditions is required'),
    image: yup
      .mixed()
      .required('Photo is required')
      .test('fileSize', 'Photo size is too big', (photo) => {
        const image = photo as File;
        return image && image.size <= MAX_IMAGE_SIZE;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] instanceof File) {
      // const file = event.target.files[0];
      //  setImagePreview(URL.createObjectURL(file));
      console.log(event.target.files[0].size);
      setValue('image', event.target.files[0]);
      trigger('image');
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} action="">
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
        {' '}
        {errors.age?.message}
      </label>

      <input
        type="email"
        id="email-input"
        placeholder="Email"
        {...register('email')}
      />
      <label className="error-label" htmlFor="email-input">
        {' '}
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

      <select
        // onChange={handleChange}
        {...register('gender')}
        id="gender-input"
      >
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
        // {...register('image')}
        onChange={handleImageChange}
      />
      <label className="error-label" htmlFor="image-input">
        {errors.image?.message}
      </label>
      <button
        type="submit"
        // disabled={!isValid}
      >
        Submit form
      </button>
    </form>
  );
}

export default Form;
