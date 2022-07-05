import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={formik.handleSubmit}
      >
        <label>Username</label><br />
        <input
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /><br />
        <label>Password</label><br />
        <input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /><br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default LoginPage;
