export const CardProd = ({ id, title, price, description,category,image }) => {
    return (
      <div className="products" key={id}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <ul>
          <li><strong>{price}</strong> </li> 
          <li> <strong>{category}</strong> </li>
        </ul>
        <p>{description}</p>
      </div>
    );
  };