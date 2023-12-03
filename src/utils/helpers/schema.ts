import * as yup from 'yup';

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
    .matches(/[@$!%*#?&]/, 'Password should have at least 1 special character')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required(),
  gender: yup.string().required('Choose a gender'),
  country: yup.string().required('Choose a country'),
  terms: yup
    .boolean()
    .oneOf([true])
    .required('Accepting Terms & Conditions is required'),
  image: yup
    .mixed()
    .required('Photo is required')
    .test('fileSize', 'Photo size is too big', (photo) => {
      const image = photo as File;
      return image && image.size <= MAX_IMAGE_SIZE;
    })
    .test('fileType', 'Please choose PNG or JPEG image', (photo) => {
      const image = photo as File;
      return image && ['image/png', 'image/jpeg'].includes(image.type);
    }),
});

export default schema;
