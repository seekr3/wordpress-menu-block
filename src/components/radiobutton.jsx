const RadiobuttonStyle = {
  whiteSpace: 'nowrap',
  paddingRight: '1rem',
}

const Radiobutton = ({ label, value, checked, setAttr }) => (
  <div style={RadiobuttonStyle}>
    <input
      type='radio'
      id={label}
      value={value}
      checked={checked === value}
      onChange={setAttr('style')}
    ></input>
    <label for={label}>{label}</label>
  </div>
);

export default Radiobutton;
