import MyComponent from './MyComponent'
import AuthContext from './AuthContext'
import MyComponent2 from './MyComponent2';
import MyForm from './MyForm';
import './App.css'
import MyTable from './MyTable';

function App() {
  const username = '김일';

  return (
    // AuthContext에 감싸져 있어야 사용가능함.
    <AuthContext.Provider value={username}> 
      <MyComponent />
      <MyTable />
      <MyComponent2 />
      <MyForm />
    </AuthContext.Provider>
  )
}

export default App
