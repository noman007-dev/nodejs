import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { IProduct } from '../types/product';
import { bodyParser } from "../utils/parseBody";

const productController = async(req: IncomingMessage, res: ServerResponse) =>{
        const url =req.url
        const method = req.method
        // console.log(url)
        const parem_url = url?.split("/")
        // console.log(parem_url);
        
        const id = parem_url && parem_url[1] === "products" ? Number (parem_url[2]):null;
        console.log(id);

        if(url === "/products" && method === "GET"){
            // const products = [
            //     {
            //         id: 1,
            //         name: "Product-1",
            //         price: 200
            //     },
            //     {
            //         id: 2,
            //         name: "Product-2",
            //         price: 300
            //     },
            // ]

            const products = productService();

            res.writeHead(200,{"Content-Type":"application/json"})
            res.end(JSON.stringify({ message: "products retrived successfully!", data: products,}))

        } else if (method ==="GET" && id !== null) {
                const products = productService();
                const product = products.find((p:IProduct) => p.id ===id);

                res.writeHead(200,{"Content-Type":"application/json"})
                res.end(JSON.stringify({ message: "products retrived successfully!", data: product,}))
        } else if (method === "POST" && url === "/products"){
                const body = await bodyParser(req);
                
                res.writeHead(201,{"Content-Type":"application/json"})
                res.end(JSON.stringify({ message: "products retrived successfully!", 
                // data: product,
            }))
        }
           
};

export default productController;
