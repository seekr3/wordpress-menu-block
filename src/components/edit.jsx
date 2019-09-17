import Input from './input.jsx';
import Description from './description.jsx';
import Radiogroup from './radiogroup.jsx';

const InputWrapperStyle = {
    display: 'flex',
};

const InputStyle1 = {
    width: '100%',
};

const InputStyle2 = {
    width: '5rem',
    marginLeft: '5px',
};


const edit = ({ attributes: { title, price, description, style, }, setAttributes, }) => {

  const setAttr = attr => e => {
    setAttributes({[attr]: e.target.value});
  }

  return (
    <>
      <div style={InputWrapperStyle}>
        <Input
          style={InputStyle1}
          attr='title'
          value={title}
          setAttr={setAttr}
        ></Input>
        <Input
          style={InputStyle2}
          attr='price'
          value={price}
          setAttr={setAttr}
        ></Input>
      </div>
      <Description
        value={description}
        setAttr={setAttr}
      ></Description>
      <Radiogroup
        checked={style}
        setAttr={setAttr}
      ></Radiogroup>
    </>
  );
}

export default edit;
