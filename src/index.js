import edit from './components/edit.jsx';
import save from './components/save.jsx';


var attributes = {
  title: { type: 'string', },
  price: { type: 'string', },
  description: { type: 'string', },
  style: { type: 'string', default: '',},
};

wp.blocks.registerBlockType('custom-blocks/menu-item', {
  title: 'Menu Item',
  icon: 'admin-page',
  category: 'common',
  attributes,
  edit,
  save,
});