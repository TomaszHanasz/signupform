import CustomInput from "./components/customInput/CustomInput";
import CustomButton from "./components/customButton/CustomButton";
import "./App.css";

function App() {
  return (
    <div className="sign-up">
      <h1>Sign up form</h1>
      <div className="form">
        <CustomInput
          labelText="First Name:"
          placeholder="ex. John"
          maxLength="15"
          type="text"
          size="medium"
        />
        <CustomInput
          labelText="Last Name:"
          placeholder="ex. Smith"
          maxLength="15"
          type="text"
          size="medium"
        />
        <CustomInput
          labelText="Address:"
          placeholder="ex. 1210 Arlington Hts Rd"
          maxLength="50"
          type="text"
          size="long"
        />
        <CustomInput
          labelText="City:"
          placeholder="ex. Chicago"
          maxLength="25"
          type="text"
          size="medium"
        />
        <CustomInput
          labelText="State:"
          placeholder="ex. Illinois"
          maxLength="15"
          type="text"
          size="short"
        />
        <CustomInput
          labelText="Zip Code:"
          placeholder="ex. 60005"
          maxLength="5"
          type="number"
          size="short"
        />
        <CustomInput
          labelText="Email Address:"
          placeholder="ex. johnsmith@gmail.com"
          maxLength="50"
          type="email"
          size="long"
        />
        <CustomInput
          labelText="Mobile Number:"
          placeholder="ex. 111-111-1111"
          maxLength="10"
          type="text"
          size="medium"
        />
        <CustomInput
          labelText="Home Number:"
          placeholder="ex. 111-111-1111"
          maxLength="10"
          type="text"
          size="medium"
        />
      </div>
      <CustomButton name="Sign Up" />
    </div>
  );
}

export default App;
