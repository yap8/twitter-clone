import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { useAppSelector } from './hooks/redux';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

const App: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={user ? <Home /> : <Welcome />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
