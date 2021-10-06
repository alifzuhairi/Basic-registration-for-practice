import './App.css';

function App() {
  return (
    <div className="container">
      <form className="register-form">
        <input
        id="first-name"
        className="form-field"
        type="text"
        placeholder="Enter your first name"
        name="firstname"/>

        <input
        id="last-name"
        className="form-field"
        type="text"
        placeholder="Enter your last name"
        name="firstname"/>

        <input
        id="first-name"
        className="form-field"
        type="text"
        placeholder="Enter your email address"
        name="firstname"/>

        <button className="form-field" type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default App;
