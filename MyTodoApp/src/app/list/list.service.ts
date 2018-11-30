import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    private data: TodoItem[];

    constructor() {
        this.data = [
            { title: 'Buy bread', note: 'Lorem ipsum dolor', completed: false },
            { title: 'Call auntie', note: 'Dolores et ea rebum.', completed: false },
            { title: 'Watch "The Godfather"', note: 'Justo duo dolores et ea rebum', completed: false },
            { title: 'Have fun!', note: 'Consetetur sadipscing elitr', completed: false }
        ];
    }

    getItems(): Promise<TodoItem[]> {
        // Return a copy
        return Promise.resolve(this.data.slice());
    }

    saveItems(newItems: TodoItem[]) {
        // Make a copy
        this.data = newItems.slice();
        console.log('saved');
    }
}

export interface TodoItem {
    title: string;
    note: string;
    completed: boolean;
}
