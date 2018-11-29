import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    private items: TodoItem[];

    constructor() {
        this.items = [
            { title: 'Buy bread', note: 'Lorem ipsum dolor', completed: false },
            { title: 'Call auntie', note: 'Dolores et ea rebum.', completed: false },
            { title: 'Watch "The Godfather"', note: 'Justo duo dolores et ea rebum', completed: false },
            { title: 'Have fun!', note: 'Consetetur sadipscing elitr', completed: false }
        ];
    }

    getItems(): Promise<TodoItem[]> {
        // Return a copy
        const itemsCopy = [].concat(...this.items);
        return Promise.resolve(itemsCopy);
    }

    putItem(item: TodoItem): Promise<boolean> {
        this.items.push(item);
        return Promise.resolve(true);
    }

    deleteItem(item: TodoItem): Promise<boolean> {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        return Promise.resolve(true);
    }

    updateItem(item: TodoItem): Promise<boolean> {
        const index = this.items.indexOf(item);
        this.items[index] = item;
        return Promise.resolve(true);
    }
}

export interface TodoItem {
    title: string;
    note: string;
    completed: boolean;
}
