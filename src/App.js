import './App.css';
import SignUpSeller from "./components/RegisterSeller.jsx";
import SignUpCustomer from "./components/RegisterCustomer.jsx";
import LoginForm from "./components/login"

function App() {
  return (
    <div className="App">
      <SignUpSeller/>
      <SignUpCustomer/>
      <LoginForm/>
      {/* <LoginFom/> */}
    </div>
  );
}

export default App;
