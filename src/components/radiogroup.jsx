import Radiobutton from './radiobutton.jsx';
import { get } from 'https';

const RadiogroupStyle = {
    display: 'flex',
    flexWrap: 'wrap',
};

export default class Radiogroup extends React.Component {
    handleResize() {
        const node = ReactDOM.findDOMNode(this);
        const { children } = node;

        const { width } = node.getBoundingClientRect();

        var childrenWidth = 5;

        for (const child of children) {
            child.style.flexBasis = 'auto';
            childrenWidth += child.getBoundingClientRect().width;
        }

        if (childrenWidth >= width) {
            for (const { style } of children) {
                style.flexBasis = '100%';
            }
        }
    }
    componentDidMount() {
        addEventListener('resize', () => this.handleResize());
        addEventListener('load'  , () => this.handleResize());
        // this.handleResize();
    }
    render() {
        const { checked, setAttr } = this.props;

        return (
            <div style={RadiogroupStyle}>
                <Radiobutton
                    label='none'
                    value=''
                    checked={checked}
                    setAttr={setAttr}
                ></Radiobutton>
                <Radiobutton
                    label='border'
                    value='border'
                    checked={checked}
                    setAttr={setAttr}
                ></Radiobutton>
                <Radiobutton
                    label='fill'
                    value='fill'
                    checked={checked}
                    setAttr={setAttr}
                ></Radiobutton>
            </div>
        );
    }
}
