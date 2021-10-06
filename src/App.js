import './App.css';
import React, {useState} from 'react';

function App() {

  const [values, setValues] = useState({
    firstname: "",
    lastname:"",
    email:"",
  });

  const handlefirstname = (event) => {
    setValues({...values, firstname: event.target.value})
  }

  const handlelastname = (event) => {
    setValues({...values, lastname: event.target.value})
  }

  const handleemail = (event) => {
    setValues({...values, email: event.target.value})
  }

  const [submitted, setSubmitted] = useState(false);

  const handlesubmit = (event) => {
    event.preventDefault();
    if(values.firstname && values.lastname && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  const [valid ,setValid] = useState(false);




  return (
    <div className="container">
      <form className="register-form" onSubmit={handlesubmit}>
       {submitted && valid ? <div className="success">Successful</div> : null}
        <input
        value={values.firstname}
        onChange={handlefirstname}
        id="first-name"
        className="form-field"
        type="text"
        placeholder="Enter your first name"
        name="firstname"/>
        {submitted && !values.firstname ? <span> Please enter your first name </span> :null }

        <input
        value={values.lastname}
        onChange={handlelastname}
        id="last-name"
        className="form-field"
        type="text"
        placeholder="Enter your last name"
        name="lastname"/>
        {submitted && !values.lastname ? <span> Please enter your last name </span> : null}

        <input
        value={values.email}
        onChange={handleemail}
        id="first-name"
        className="form-field"
        type="text"
        placeholder="Enter your email address"
        name="email"/>
        {submitted && !values.email ? <span> Please enter your email </span> :null}

        <button className="form-field" type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default App;
