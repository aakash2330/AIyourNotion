import { httpRouter } from "convex/server";
import { doSomething } from "./httpActions"

const http = httpRouter();

http.route({
  path: "/test",
  method: "POST",
  handler: doSomething,
});

export default http;