import http from "./config";
const order = {
  create_order: (data) => http.post("/order", data),
  get: () => http.get("/order/all", { params: { page: 1, limit: 10 } })
};
export default order;
