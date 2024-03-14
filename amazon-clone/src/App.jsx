import './App.css';
import Login from './nav/login'; // Corrected import statement
import RegistrationForm from './nav/register'; // Corrected import statement
import AppRoutes from './Routes';

function App() {
  return (
    <div>
      <AppRoutes />
      {/* Assuming you want these outside the routing context, but typically you'd include these within specific routes */}
      <RegistrationForm />
      <Login />
    </div>
  );
}

export default App;
