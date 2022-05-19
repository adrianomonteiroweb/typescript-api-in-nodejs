import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { Item } from "./item.interface";

export const itemsRouter = express.Router();

itemsRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

