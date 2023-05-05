import "./customButton.style.css";

const CustomButton = (props) => {
  return <button className={`btn ${props.type}`}>{props.name}</button>;
};

export default CustomButton;
