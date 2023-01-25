import { ReusableToster } from "../message/notifyMessages";
import { GET, POST, PUT, DELETE } from "./axios";

export const getInventorys = () => {
  const res = GET("inventory-details/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      ReusableToster({ type: "error" });
      return [];
    });
  return res;
};
