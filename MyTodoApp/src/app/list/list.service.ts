import { ListPage } from './list.page';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: ListPage
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

    getItems(): Observable<TodoItem[]> {
        return of(this.items);
    }

    addItem(item: TodoItem): Observable<boolean> {
        this.items.push(item);
        return of(true);
    }

    deleteItem(item: TodoItem): Observable<boolean> {
        const index = this.items.indexOf(item);
        this.items.slice(index, index + 1);
        return of(true);
    }
}

export interface TodoItem {
    title: string;
    note: string;
    completed: boolean;
}
