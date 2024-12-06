// TODO Component 第一個參數就是 props
const Card = (props) => {
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // Destructuring assignment
  // children 是關鍵字不能改
  // props 是唯讀屬性 所以不能改  props.name=XXXXX  是錯的，無效
  const { img, name, children, price } = props;
  return (
    <div className="category-item">
      <img className="category-item__img" alt={name} src={img} />
      {/* <img > Error,  JSX 所有的 tag 都要 close */}
      <div className="category-item__name">{name}</div>
      <div className="category-item__quote">{children}</div>
      <h1>{price}</h1>
    </div>
  );
};

export default Card;
