import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import type { Employee } from './types';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { EmployeeList } from './components/EmployeeList';
import { mockEmployees } from './data/mockEmployees';
import './App.css';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);

  const handleAddEmployee = (newEmployee: Omit<Employee, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setEmployees([...employees, { ...newEmployee, id }]);
  };

  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    setEmployees(employees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
  };

  const handleDeleteEmployee = (id: string) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <EmployeeList
          employees={employees}
          onAdd={handleAddEmployee}
          onUpdate={handleUpdateEmployee}
          onDelete={handleDeleteEmployee}
        />
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
