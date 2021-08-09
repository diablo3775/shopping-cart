import { CartState } from "../context/Context";
import Rating from "./Rating";
import { Button, CardMedia } from "@material-ui/core";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <div>
        <CardMedia component='img' variant="top" image={prod.image} alt={prod.name} />
        <div>
          <div>{prod.name}</div>
          <div style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant='contained'
              color='primary'
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
