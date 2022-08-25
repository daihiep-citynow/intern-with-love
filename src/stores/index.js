// components
import rootReducer from "@/reducers";
// libs
const { createStore } = require("redux");

const store = createStore(rootReducer);

export default store;
