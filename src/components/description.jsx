const TextareaStyle = { width: '100%', 'resize': 'none' };

class Textarea extends React.Component {
  constructor(props) {
    super(props);
  }
  handleResize() {
    const node = ReactDOM.findDOMNode(this);
    const { style, scrollHeight } = node;

    style.height = 'inherit';
    
    const {
      borderBottomWidth,
      paddingBottom,
    } = getComputedStyle(node);
    
    const height = (scrollHeight || 100)
      + parseInt(borderBottomWidth, 0)
      + parseInt(paddingBottom, 0)
      + 'px';
    
    console.log(height);

    style.height = height;
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
