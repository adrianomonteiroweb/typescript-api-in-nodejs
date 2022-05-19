import { Request, Response } from "express";
import * as ItemService from "../items/items.service";
import { Item } from "../items/item.interface";

const putItem = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default putItem;