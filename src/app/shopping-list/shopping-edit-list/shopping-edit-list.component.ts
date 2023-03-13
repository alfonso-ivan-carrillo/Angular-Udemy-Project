import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit-list',
  templateUrl: './shopping-edit-list.component.html',
  styleUrls: ['./shopping-edit-list.component.css']
})
export class ShoppingEditListComponent {
  hello: string = "hello";
  song: string = '';
  comic: string = '';

  buttonState: boolean = true;

  onClick(){
    alert("bye");
  }

  onSong(event: Event){
    this.song = (<HTMLInputElement>event.target).value;
  }

}
