import "./TogglePane.css";

const TogglePane = ({ onChange }: { onChange: () => void }) => {
  return (
    <>
      {/*Slider adapted from https://www.w3schools.com/howto/howto_css_switch.asp*/}
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider" />
      </label>
    </>
  );
};

export default TogglePane;
