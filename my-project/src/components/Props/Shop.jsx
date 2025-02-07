import Fruit from "./Fruit";

function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <Fruit name="Apple" />
      <Fruit name="Orange" />
      <Fruit name="Mango">
        <button>Add to cart</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam ipsa veritatis. Debitis rem placeat illum dignissimos assumenda harum voluptatibus autem consequatur animi, ducimus quam suscipit dolorum quas tenetur explicabo?</p>
      </Fruit>

      <hr/>
      <Fruit children={<h5>Hello</h5>} />
    </>
  );
}

export default Shop;
