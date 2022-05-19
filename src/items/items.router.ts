import express from "express";

import getItemById from "../controllers/getItemById.controller";
import getAllItems from "../controllers/getAllItems.controller";
import postNewItem from "../controllers/postNewItem.controller";
import putItem from "../controllers/putItem.controller";
import deleteItem from "../controllers/deleteItem.controller";

export const itemsRouter = express.Router();

itemsRouter.get("/", getAllItems);

itemsRouter.get("/:id", getItemById);

itemsRouter.post("/", postNewItem);

itemsRouter.put("/:id", putItem);

itemsRouter.delete("/:id", deleteItem);
