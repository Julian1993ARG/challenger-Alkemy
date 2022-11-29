import * as Yup from 'yup'

export const validateUser = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters')
})
