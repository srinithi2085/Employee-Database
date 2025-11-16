# ProU Technology - Employee Management System

A modern, fully functional Employee Management System built with React and TypeScript. Perform complete CRUD operations on employee records with an intuitive user interface, authentication, and responsive design.

## 🚀 Features

- **Authentication**: Hardcoded login system (demo credentials: `admin` / `admin123`)
- **Employee Management**: Create, Read, Update, and Delete employee records
- **Search & Filter**: Real-time search across employee names, emails, and positions
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices
- **Form Validation**: Comprehensive input validation with error messages
- **Clean Architecture**: Strict TypeScript types and component-based structure

## 📋 Setup Steps

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd /Users/Swami/FocusPax/srinithi/employees
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run linting**
   ```bash
   npm run lint
   ```

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - UI library for building interactive components
- **TypeScript 5.9** - Type-safe JavaScript for better code quality
- **Vite 7.2** - Lightning-fast build tool and dev server

### Development Tools
- **ESLint 9.39** - Code quality and style checking
- **React Refresh** - Fast component updates during development
- **TSConfig** - Strict TypeScript configuration for type safety

### Styling
- **CSS3** - Custom CSS with CSS variables and media queries
- **Responsive Design** - Mobile-first approach with breakpoints for tablets and desktops

### Architecture
- **React Context API** - Global state management for authentication
- **Custom Hooks** - `useAuth` hook for authentication context
- **Component-Based** - Modular, reusable components

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Login.tsx       # Authentication form
│   ├── Header.tsx      # App header with user info
│   ├── EmployeeList.tsx # Employee table and management
│   └── EmployeeForm.tsx # Employee create/edit form
├── context/            # React Context providers
│   ├── AuthContext.tsx # Authentication provider component
│   └── auth.context.ts # Auth context definition
├── hooks/              # Custom React hooks
│   └── useAuth.ts      # Auth context hook
├── data/               # Mock data
│   └── mockEmployees.ts # Sample employee data
├── types/              # TypeScript type definitions
│   └── index.ts        # Type interfaces
├── styles/             # Component-specific CSS
│   ├── Login.css
│   ├── Header.css
│   ├── EmployeeList.css
│   └── EmployeeForm.css
├── App.tsx             # Main app component
├── App.css             # Global styles
└── main.tsx            # Entry point
```

## 🔐 Authentication

The system uses hardcoded credentials for demonstration purposes:

**Username**: `admin`
**Password**: `admin123`

### Key Features:
- Hardcoded authentication with fixed credentials
- Session persists during the application session
- Logout functionality clears user session
- Protected routes (employee management only accessible after login)

## 📊 Employee Data Model

```typescript
interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
}
```

### Available Departments:
- Engineering
- Product
- Design
- Quality Assurance
- Infrastructure
- Human Resources
- Finance

## 🎯 CRUD Operations

### Create
- Click "+ Add Employee" button to open the form
- Fill all required fields with valid data
- Submit to add new employee to the list

### Read
- View all employees in a paginated table
- Search by name, email, or position
- All employee details displayed including salary and hire date

### Update
- Click "Edit" button on any employee row
- Modify the employee information
- Submit to update the record

### Delete
- Click "Delete" button on any employee row
- Confirm the deletion
- Employee is permanently removed from the list

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop** (1024px and above): Full table layout with all columns visible
- **Tablet** (768px - 1023px): Adjusted spacing and button layouts
- **Mobile** (below 768px): Stack layouts, full-width elements, mobile-optimized forms

## ✅ Code Quality

- **Type Safety**: Strict TypeScript configuration with no `any` types
- **ESLint Compliant**: All code follows ESLint rules
- **React Best Practices**: Proper hook usage, component composition, and state management
- **No Direct State in useEffect**: State calculations are done during render

## 🎨 Design Highlights

- **Color Scheme**: Professional blue primary color with accent colors
- **Shadows & Spacing**: Consistent use of CSS variables for shadows and spacing
- **Animations**: Smooth transitions on buttons and form interactions
- **Form Validation**: Real-time validation with error messages
- **User Feedback**: Visual confirmation dialogs for destructive actions

## 🔄 State Management

- **Local Component State**: React `useState` for form and list management
- **Global Context**: AuthContext for authentication state
- **Mock Data**: Initial employee data loaded from `mockEmployees.ts`

## 🚦 Assumptions

1. **Hardcoded Credentials**: Authentication uses fixed credentials for demo purposes (not production-ready)
2. **Mock Data**: Employee data is stored in component state (not persisted to backend)
3. **In-Memory Storage**: All changes are lost on page refresh
4. **Single User Session**: Application supports one active user at a time
5. **No Backend**: Data operations use client-side state management only

## 🌟 Bonus Features Implemented

1. **Search Functionality**: Real-time search across multiple employee fields
2. **Form Validation**: Comprehensive field validation with user-friendly error messages
3. **Responsive Design**: Fully mobile-friendly interface with proper layouts at all breakpoints
4. **Custom Hooks**: Clean separation of concerns with custom `useAuth` hook
5. **Context API**: Modern state management with React Context instead of prop drilling
6. **Clean Architecture**: Well-organized file structure with clear separation of concerns
7. **Professional UI**: Gradient backgrounds, smooth animations, and consistent design system
8. **Confirmation Dialogs**: Delete confirmation to prevent accidental data loss

## 🧪 Testing

To run type checking:
```bash
npx tsc --noEmit
```

To run linting:
```bash
npm run lint
```

## 📖 Usage Example

1. **Login**
   - Visit the app and enter credentials: `admin` / `admin123`
   - Click "Login" to access the dashboard

2. **Add an Employee**
   - Click "+ Add Employee" button
   - Fill in all fields (First Name, Last Name, Email, Phone, Position, Department, Hire Date, Salary)
   - Click "Add Employee" to save

3. **Search for Employees**
   - Use the search bar to filter by name, email, or position
   - Results update in real-time

4. **Edit an Employee**
   - Click "Edit" on any employee row
   - Modify the information
   - Click "Update Employee" to save changes

5. **Delete an Employee**
   - Click "Delete" on any employee row
   - Confirm the deletion in the dialog
   - Employee is removed from the list

6. **Logout**
   - Click "Logout" button in the header
   - You will be redirected to the login page

## 🎓 Learning Outcomes

This project demonstrates:
- Building a complete frontend application with React and TypeScript
- Managing authentication and authorization flows
- CRUD operations with React state
- Form handling and validation
- Responsive web design principles
- Component composition and reusability
- Custom hooks development
- CSS styling and theming
- Error handling and user feedback

## 📝 Notes

- The application uses CSS-in-JS approach with CSS files for better organization
- All components are functional components using React Hooks
- TypeScript ensures type safety throughout the application
- The project follows ESLint rules for code consistency
- Mobile-first responsive design ensures great UX on all devices

## 🔗 API Endpoints (Future)

While currently using mock data, the architecture is designed to easily integrate with a backend API. Future additions could include:

- `GET /api/employees` - Fetch all employees
- `POST /api/employees` - Create new employee
- `GET /api/employees/:id` - Fetch specific employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User logout

---

**Company**: ProU Technology  
**Version**: 1.0.0  
**Last Updated**: November 2024
