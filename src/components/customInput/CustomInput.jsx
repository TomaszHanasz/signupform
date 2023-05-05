import "./customInput.style.css";

const CustomInput = (props) => {
  return (
    <label className={`${props.size}`}>
      {props.labelText}
      <input
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        type={props.type}
      ></input>
    </label>
  );
};

export default CustomInput;
