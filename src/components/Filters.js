import { CartState } from "../context/Context";
import Rating from "./Rating";
import React from 'react';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';

const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  // make state for rating

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
   <span>
   <FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label="Ascending"
        name='group1'
        onChange={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          })
        }
        checked={sort === "lowToHigh" ? true : false}
      />
   </span>

      <span>
      <FormControlLabel
        control={<Checkbox />}
        label="Descending"
        name='group1'
        onChange={() =>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
          })
        }
        checked={sort === "highToLow" ? true : false}
      />
     </span>
   

     <span>
      <FormControlLabel
        control={<Checkbox />}
        label="Include out of stock"
        name='group1'
        onChange={() =>
          productDispatch({
            type: "FILTER_BY_STOCK",
          })
        }
        checked={byStock}
      />
     </span>
   
     <span>
      <FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label="Fast Delivery Only"
        name='group1'
        onChange={() =>
          productDispatch({
            type: "FILTER_BY_DELIVERY",
          })
        }
        checked={byFastDelivery}
      />
     </span>
 
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="outlined"
        color='inherit'
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
