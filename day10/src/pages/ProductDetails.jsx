import { useParams } from "react-router-dom";

export default function ProductDetails({ products }) {
  const { productId } = useParams();
  const product = products.find((p) => p.productId.toString() === productId);

  if (!product) {
    return (
      <div className="flex justify-center items-center p-10">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">{product.productName}</h1>
      <img
        src={product.productImage}
        alt={product.productName}
        className="my-4"
      />
      <p className="text-lg">Price: ${product.productPrice}</p>
    </div>
  );
}
