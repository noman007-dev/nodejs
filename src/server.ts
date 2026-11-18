import { createServer, IncomingMessage, Server, ServerResponse } from "node:http";
import routeHandler from "./routes/route";


const server:Server = createServer((req:IncomingMessage, res:ServerResponse) => {
//   console.log("Request : ",req);
    // console.log("Response : ",res);
    // console.log(req.url);
    // console.log(req.method); 
    routeHandler(req,res);
    

});

server.listen(5001, () => {
  console.log("Server running on port 5001");
}); 