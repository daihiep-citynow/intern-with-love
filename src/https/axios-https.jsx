// libs
import axios from "axios";

const instance = axios.create({
  baseURL: "https://intern-with-love.daihiep.co/",
});

export default instance;
