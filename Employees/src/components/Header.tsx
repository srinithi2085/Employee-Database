import { useAuth } from '../hooks/useAuth';
import '../styles/Header.css';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <h1>ProU Technology</h1>
        <div className="header-user">
          <span>Welcome, {user?.username}!</span>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
