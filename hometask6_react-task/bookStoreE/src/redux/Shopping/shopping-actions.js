import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  console.log("in action function check id"+itemID);
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID
    }
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  };
};

export const loadCurrentItem = (item) => {
  //alert("loaditems");
  //console.log(item);
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item
  }
}