import { Request, Response } from "express";
import * as ItemService from "../items/items.service";
import { Item } from "../items/item.interface";

const getAllItems = async (_req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default getAllItems;
