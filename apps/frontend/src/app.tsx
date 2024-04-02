import './app.css';
import Homepage from './pages/homepage';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <h1>Fart</h1>
        <Routes>
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
