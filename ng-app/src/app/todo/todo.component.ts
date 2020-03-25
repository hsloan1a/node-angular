import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Item} from '../item';
import {Observable, of} from 'rxjs';
import _ from 'underscore';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ DataService ]
})
export class TodoComponent implements OnInit {
  itemList: Item[] = [];
  selectedItem: Item;

  constructor(private dataService: DataService) { }

  addItem(form) {
    const newItem: Item = {
      itemName: form.value.itemName,
      itemDone: false
    };
    this.dataService.addToDoItem(newItem)
    .subscribe(
      result => {
        console.log(result);
        this.getItems();
      }
    );
  }

  updateCheckBox(item) {
    item.itemDone = !item.itemDone;
    console.log(item, 'item');
    this.dataService.updateToDoItem(item)
    .subscribe(result => {
      console.log(result);
      this.getItems();
    });
  }

  deleteItem(itemId) {
    this.dataService.deleteToDoItem(itemId)
    .subscribe(result => {
      console.log(result);
      this.itemList.splice(_.findIndex(this.itemList, {_id: itemId}), 1);
    });
  }

  getItems() {
    this.dataService.getToDoItems()
    .subscribe(
      (items: Item[]) => {
        this.itemList = items;
      });
  }

  ngOnInit(): void {
    this.getItems();
  }

}
