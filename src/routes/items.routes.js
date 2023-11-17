import { Router } from "express";
import {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,

} from "../controllers/item.controller.js";

const routerItems = Router();

routerItems.get("/", getAllItems);

routerItems.get("/:id", getItemById);

routerItems.post("/", createItem);

routerItems.put("/:id", updateItem);

routerItems.delete("/:id", deleteItem);



export default routerItems;