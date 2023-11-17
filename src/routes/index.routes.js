import { Router } from "express";
import routerItems  from "./items.routes.js";

const router = Router();

router.use("/item", routerItems);

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Server ONLINE!" });
});



export default router;