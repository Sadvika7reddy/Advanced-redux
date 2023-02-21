import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DummyItems=[
  {
    id:"a1",
    title:"book",
    description:"good",
    price:100
  },
  {
    id:"a2",
    title:"pen",
    description:"excellent",
    price:20
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DummyItems.map((product)=>
          <ProductItem
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
          )
        }
        
      </ul>
    </section>
  );
};

export default Products;
