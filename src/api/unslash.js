import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JGbyHcJBPk26vQnZDP5elhD4V1P-xuRuGgLNUkj8nPg",
  },
});
