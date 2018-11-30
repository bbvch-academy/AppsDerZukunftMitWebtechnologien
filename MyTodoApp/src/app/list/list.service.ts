import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const kDataBaseKey = 'asd98s7d09f8s9f';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    constructor(private storage: Storage) { }

    getItems(): Promise<TodoItem[]> {
        return this.storage.get(kDataBaseKey).then((val) => {
            return val || [];
          });
    }

    saveItems(newItems: TodoItem[]) {
        this.storage.set(kDataBaseKey, newItems);
    }
}

export interface TodoItem {
    title: string;
    note: string;
    completed: boolean;
}
