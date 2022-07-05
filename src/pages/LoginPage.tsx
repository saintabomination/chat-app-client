import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../components/form/FormInput';

const LoginPage = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .required('Username required!')
      .min(6, 'Username too short!')
      .max(24, 'Username too long!'),
      password: Yup.string()
      .required('Password required!')
      .min(6, 'Password too short!')
      .max(24, 'Password too long!'),
    }),
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });

  console.log(formik.errors.username);

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={formik.handleSubmit}
      >
        <label>Username</label><br />
        <FormInput
          type="text"
          {...formik.getFieldProps('username')}
          errorMessage={formik.errors.username && formik.touched.username ? formik.errors.username : ''}
        /><br />
        <label>Password</label><br />
        <FormInput
          type="password"
          {...formik.getFieldProps('password')}
          errorMessage={formik.errors.password && formik.touched.password ? formik.errors.password : ''}
        /><br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default LoginPage;
