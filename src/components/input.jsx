const InputStyle = {
  width: '100%'
};

const Input = ({ style, attr, value, setAttr }) => (
  <div style={style}>
    <span>{attr}:</span>
    <input
      style={InputStyle}
      type='text'
      value={value}
      onChange={setAttr(attr)}
    ></input>
  </div>
);

export default Input;
