import { Request, Response } from "express";
import * as ItemService from "../items/items.service";

const deleteItem = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);

    await ItemService.remove(id);

    res.sendStatus(204);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default deleteItem;
