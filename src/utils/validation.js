import * as yup from 'yup';

export const loginSchema = yup.object({
  login: yup.string().required(),
  secondname: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(16),
});
