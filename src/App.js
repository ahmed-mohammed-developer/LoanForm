import './App.css';
import LoanForm from './LoanForm';
import { UserContext } from './contexts/UserContext';

function App() {
  return (
  <UserContext.Provider 
  value={{name: "Ahmed", userName: "AAAA@@@", email: "QQQQQQ"}}
  >
     <div className="App">
     <LoanForm />
    </div>
  </UserContext.Provider>
  );
}

export default App;
