import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}

export default App;
