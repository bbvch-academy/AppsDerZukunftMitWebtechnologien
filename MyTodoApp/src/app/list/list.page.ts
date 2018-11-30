import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoItem, ListService } from './list.service';
import { List } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ItemDetailPage } from './item-detail/item-detail.page';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  // workaround: https://github.com/ionic-team/ionic/issues/15486#issuecomment-420025772
  @ViewChild('slidingList') slidingList: List;

  public todoItems: TodoItem[] = [];

  constructor(private listService: ListService, public modalController: ModalController) {}

  ngOnInit() {
    this.loadData();
  }

  async add() {
    const newItem: TodoItem = { title: 'New Item', note: '', completed: false };
    await this.presentModalWith(newItem);
    this.todoItems.push(newItem);
    this.listService.saveItems(this.todoItems);
  }

  onCheckboxChange(item: TodoItem) {
      item.completed = !item.completed;
    this.listService.saveItems(this.todoItems);
  }

  async edit(item: TodoItem) {
    await this.slidingList.closeSlidingItems();
    await this.presentModalWith(item);
    this.listService.saveItems(this.todoItems);
  }

  async delete(item: TodoItem) {
    // workaround
    await this.slidingList.closeSlidingItems();
    const index = this.todoItems.indexOf(item);
    this.todoItems.splice(index, 1);
    this.listService.saveItems(this.todoItems);
  }

  private async loadData() {
    this.todoItems = await this.listService.getItems();
  }

  private async presentModalWith(item: TodoItem) {
    const modal = await this.modalController.create({
      component: ItemDetailPage,
      componentProps: { item: item }
    });
    await modal.present();
    return modal.onDidDismiss();
  }

}
