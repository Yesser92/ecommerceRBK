import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  image_url: string;
  quantity: number;
  category: string;
};

const Card = ({
  id,
  title,
  price,
  image_url,
  quantity,
  category,
}: ProductProps) => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <div className="bg-white rounded shadow-sm">
      <img src={image_url} alt={title} className="h-60  rounded-t" />
      <div className="p-3">
        <h2 className="title text-sm font-semibold">{title}</h2>
        <h2 className="title text-sm font-semibold">{category}</h2>
        <div className="flex items-center justify-between">
          <p className="text-green-600 text-xs font-bold">
            {formatCurrency(price)}
          </p>

          <button
            onClick={() => increaseCartQuantity(id)}
            className="py-1 px-4 rounded bg-red-50 text-red-400 hover:bg-white duration-300"
          >
            Add to cart
          </button>
        </div>
        <h4>
          <span className="font-bold text-red-600">{quantity}</span> items on
          stock
        </h4>
      </div>
    </div>
  );
};

export default Card;
