import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 100 },
    { duration: "5m", target: 100 },
    // { duration: "2m", target: 0 },
  ],
};

export default function () {
  const BASE_URL = "http://localhost:8080"; // make sure this is not production

  const res = http.get(BASE_URL + "/api/gateway/owners/6");
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  //sleep(0.1);
}
