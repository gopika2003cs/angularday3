import { Component } from '@angular/core';
import { districts } from 'src/assets/districts';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
collections = districts;
}
