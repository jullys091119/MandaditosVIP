
import ProductList from "./productList";

export default async function Categories({ params }) {
  const { id } = await params;

  return (
      <ProductList id={id}/>
  );
}