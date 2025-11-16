import { useState } from 'react';
import type { Employee } from '../types';
import { EmployeeForm } from './EmployeeForm';
import '../styles/EmployeeList.css';

interface EmployeeListProps {
  employees: Employee[];
  onAdd: (employee: Omit<Employee, 'id'>) => void;
  onUpdate: (employee: Employee) => void;
  onDelete: (id: string) => void;
}

export function EmployeeList({ employees, onAdd, onUpdate, onDelete }: EmployeeListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setEditingId(employee.id);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingEmployee(null);
    setEditingId(null);
    setShowForm(true);
  };

  const handleFormSubmit = (data: Omit<Employee, 'id'>) => {
    if (editingId) {
      onUpdate({ ...data, id: editingId });
    } else {
      onAdd(data);
    }
    setShowForm(false);
    setEditingEmployee(null);
    setEditingId(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingEmployee(null);
    setEditingId(null);
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="employee-list-container">
      <div className="list-header">
        <h2>Employees</h2>
        {!showForm && (
          <button onClick={handleAdd} className="add-button">
            + Add Employee
          </button>
        )}
      </div>

      {showForm && (
        <EmployeeForm
          employee={editingEmployee}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      {!showForm && (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name, email, or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="table-container">
            {filteredEmployees.length === 0 ? (
              <p className="no-data">No employees found</p>
            ) : (
              <table className="employee-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Hire Date</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{`${employee.firstName} ${employee.lastName}`}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.position}</td>
                      <td>{employee.department}</td>
                      <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
                      <td className="salary">₹{employee.salary.toLocaleString()}</td>
                      <td className="actions">
                        <button onClick={() => handleEdit(employee)} className="edit-button">
                          Edit
                        </button>
                        <button onClick={() => onDelete(employee.id)} className="delete-button">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
}
