import Homepage from './pages/homepage';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
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
