export class ItemsList{
    constructor(){
        this.items = [];
    }
    getAllItems(){
        return this.items;
    }
    getItemById(id){
        return this.items.find(item => item.id === id);
    }
    createItem(item){
        this.items.push(item);
        return item;
    }
    updateItem(id, item){
        const index = this.items.findIndex(item => item.id === id);
        this.items[index] = item;
        return item;
    }
    addItem(item){
        this.items.push(item);
        return item;
    }
    deleteItem(id){
        const index = this.items.findIndex(item => item.id === id);
        this.items.splice(index, 1);
        return id;
    }
    getItemByType(type){
        const filtrado = this.items.filter(item => item.type === type);
        console.log(filtrado);
        return filtrado;
    }
    getItemBySize(size){
        return this.items.filter(item => item.size === size);
    }
    getItemByColor(color){
        return this.items.filter(item => item.color === color);
    }
}

export default ItemsList;