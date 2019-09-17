const TextareaStyle = { width: '100%', 'resize': 'none' };

class Textarea extends React.Component {
  constructor(props) {
    super(props);
  }
  handleResize() {
    const node = ReactDOM.findDOMNode(this);

    node.style.height = 'inherit';
    
    const {borderBottomWidth, paddingBottom, width} = getComputedStyle(node);
    
    node.style.height = node.scrollHeight
    + parseInt(borderBottomWidth, 0)
    + parseInt(paddingBottom, 0)
    + 'px';
  }
  componentDidMount() {
    addEventListener('resize', () => this.handleResize());
    this.handleResize();
  }
  handleOnChange(e) {
    this.props.setAttr('description')(e);
    this.handleResize();
  }
  render() {
    return (
      <textarea
        style={TextareaStyle}
        value={this.props.value}
        onChange={e => this.handleOnChange(e)}
      ></textarea>
    );
  }
}

const Description = ({ value, setAttr }) => (
  <>
    <span>description:</span>
    <Textarea
      value={value}
      setAttr={setAttr}
    ></Textarea>
  </>
);
  
export default Description;
