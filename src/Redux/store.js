import { createStore } from "redux";
import cakeReducer from "./Cakes/CakeReducer";

const store=createStore(cakeReducer)

export default store;
// something went wrong