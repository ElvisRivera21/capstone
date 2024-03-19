import './App.css';
import Login from './nav/login';
import RegistrationForm from './nav/register';
import AppRoutes from './Routes';

function App() {
  return (
    <div>
      <AppRoutes />
      <RegistrationForm />
      <Login />
    </div>
  );
}

export default App;
