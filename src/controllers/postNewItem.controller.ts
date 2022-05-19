import { Request, Response } from "express";
import * as ItemService from "../items/items.service";
import { BaseItem, Item } from "../items/item.interface";

const postNewItem = async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const items: Item[] = (await ItemService.findAll());

    const id: number = items.length + 1;

    console.log(id);
    
    const newItem = await ItemService.create({
      ...item,
      id,
    });

    res.status(201).json(newItem);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export default postNewItem;
