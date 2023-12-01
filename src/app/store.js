import { configureStore } from "@reduxjs/toolkit";

import newLaptopReducer, {
  fetchNewData,
} from "../features/NewLaptops/newLaptops.js";
import refurbishedLaptopReducer, { fetchRefurbishedData } from "../features/RefurbishedProducts/refurbishedProducts.js";
export const store = configureStore({
  reducer: {
    newLaptops: newLaptopReducer,
    refurbishedLaptops: refurbishedLaptopReducer
  },
});

store.dispatch(fetchNewData());
store.dispatch(fetchRefurbishedData());
