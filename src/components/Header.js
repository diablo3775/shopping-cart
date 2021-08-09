import {Container, AppBar, Button, Badge} from '@material-ui/core';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <AppBar>
      <Container>
        <div className='name'>
          <Link to="/"><h5>🛒Shopping Cart</h5></Link>
        </div>
    
        <div className='cart'>
          <Dropdown>
          <Dropdown.Toggle
          >
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button variant='outlined' color='primary' style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
