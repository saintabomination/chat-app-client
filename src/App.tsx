import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = (): JSX.Element =>
  (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
    </Routes>
  );

export default App;
