const save = ({ attributes: { title, price, description, style, }}) => (
    <div>
      <div className={'menu-item-wrapper' + (style && ' menu-item-' + style)}>
        <div className='menu-title-wrapper'>
          <div className='menu-item-title'>{title}</div>
          <div className='menu-item-price'>{price}</div>
        </div>
        {description? <p className='menu-item-description'>{description}</p>: null}
      </div>
    </div>
  );

  export default save;
  