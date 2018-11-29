import { Component, OnInit } from '@angular/core';
import { TodoItem, ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public todoItems: TodoItem[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
      this.listService.getItems().subscribe(items => this.todoItems = items);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
