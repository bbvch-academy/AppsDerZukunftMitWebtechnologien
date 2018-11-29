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

  async clicked(item: TodoItem) {
    await this.listService.updateItem(item);
    this.loadData();
  }

  edit(item: TodoItem) {
    this.presentModalWith(item);
    this.slidingList.closeSlidingItems();
  }

  async delete(item: TodoItem) {
    // workaround
    await this.slidingList.closeSlidingItems();
    await this.listService.deleteItem(item);
    this.loadData();
  }

  private async loadData() {
    this.todoItems = await this.listService.getItems();
  }

  private async presentModalWith(item: TodoItem) {
    const modal = await this.modalController.create({
      component: ItemDetailPage,
      componentProps: { item: item }
    });
    return await modal.present();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
