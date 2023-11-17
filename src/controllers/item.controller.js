
import Item from "../models/Item.js";
import ItemsList from "../models/ItemList.js";

const itemsList = new ItemsList();

export const getAllItems = (req, res) => {
    let allItens = itemsList.getAllItems();

    const { type, size, color } = req.query;

    console.log(type, size, color);

    if (type) {
        allItens = itemsList.getItemByType(type);
    }

    if (size) {
        allItens = itemsList.getItemBySize(size);
    }

    if (color) {
        allItens = itemsList.getItemByColor(color);

    }
        return res.json({count: allItens.length, data: allItens});
    
   // return res.status(200).send({ message: allItens });

}

export const getItemById = (req, res) => {
    const id = req.params.id;
    const item = itemsList.getItemById(id);
    if (!item) {
        return res.status(404).send({ message: "item not found" });
    }
    return res.status(200).send({ message: "item found", item: item});
}

export const createItem = (req, res) => {
    const { name, type, size, color, amount, image } = req.body;
    const item = new Item(name, type, size, color, amount, image);

    const error = [];

    if (!name) {
        error.push("name is required");
    }
    if (!type) {
        error.push("type is required");
    }
    if (!size) {
        error.push("size is required");
    }
    if (!color) {
        error.push("color is required");
    }
    if (!amount) {
        error.push("amount is required");
    }
    if (!image) {
        error.push("image is required");
    }
    if (name.length < 3 || name.length > 40) {
        error.push("Name must have more than 3 characters and less than 40");
    }

    if (typeof type !== "string" || type.length > 50) {
        error.push("invalid type");
    }

    if (size !== "PP" && size !== "P" && size !== "M" && size !== "G" && size !== "GG" && size !== "XG") {
        error.push("size invalid");
    }

    if (color.length > 20) {
        error.push("invalid color");
    }

    if (image.match(/\.(jpeg|jpg|webp|gif|png)$/) == null) {
        error.push("invalid image");
    }

    if (amount > 15000) {
        error.push("invalid amount");
    }

    if (error.length > 0) {
        return res.status(400).send({ errors: error });
    } else {
        itemsList.addItem(item);
        return res.status(200).send(item);
    }
}

export const updateItem = (req, res) => {
    const { id } = req.params;
    const itemData = req.body;
    const item = itemsList.getItemById(id);
    if (item){
        const updatedItem = itemsList.updateItem(id, itemData);
        return res.status(200).send({ message: "Item atualizado!", item: updatedItem });
    } else {
        return res.status(404).send({ message: "Item não encontrado!" });
    }
}

export const deleteItem = (req, res) => {
    const { id } = req.params;
    const item = itemsList.getItemById(id);
    if (!item) {
        return res.status(404).send({ message: "item not found" });
    }
    itemsList.deleteItem(id);
    return res.status(200).send({ message: `ITEM DELETADO:`,    item: item

});
}