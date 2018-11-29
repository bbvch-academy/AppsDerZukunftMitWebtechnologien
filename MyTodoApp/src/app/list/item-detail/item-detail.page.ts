import { ModalController } from '@ionic/angular';
import { TodoItem } from './../list.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

    @Input() item: TodoItem;

    constructor(public modalController: ModalController) { }

    ngOnInit() {
    }

    close() {
        this.modalController.dismiss();
    }
}
