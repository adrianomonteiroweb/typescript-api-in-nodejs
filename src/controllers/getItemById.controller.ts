import { Request, Response } from "express";
import * as ItemService from "../items/items.service";
import { Item } from "../items/item.interface";

const getItemById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    if (item) return res.status(200).send(item);

    res.status(404).send("item not found");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default getItemById;
