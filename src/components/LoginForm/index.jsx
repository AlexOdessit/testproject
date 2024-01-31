import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../../utils/validation';

function LoginForm() {
  const initialValues = {
    login: '',
    secondname: '',
    name: '',
    email: '',
    password: '',
    confirmpass: '',
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <Field type='text' name='login' />
          <ErrorMessage name='login' component='div' className='error' />
        </div>
        <div>
          <Field type='text' name='secondname' />
          <ErrorMessage name='secondname' component='div' className='error' />
        </div>
        <div>
          <Field type='text' name='name' />
          <ErrorMessage name='name' component='div' className='error' />
        </div>
        <div>
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='div' className='error' />
        </div>
        <div>
          <Field name='password' type='password' />
          <ErrorMessage name='password' className='error' component='p' />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
