import { Button, FormGroup, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Form, Image } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <FormGroup row>
          {cart.map((prod) => (
            <div key={prod.id}>
              <Grid container spacing={2} >
                <Grid md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
              
                </Grid>
                <Grid md={2}>
                  <span>{prod.name}</span>
                </Grid>
                <Grid md={2}>₹ {prod.price}</Grid>
                <Grid md={2}>
                  <Rating rating={prod.ratings} />
                </Grid>
                <Grid md={2}>
                            
                   <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Grid>
                <Grid md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Grid>
              </Grid>
            </div>
          ))}
        </FormGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button color='inherit' variant='outlined' type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
