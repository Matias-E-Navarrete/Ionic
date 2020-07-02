import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listado: List[] = [
    {
      icon: 'notifications-outline',
      name: 'Alertas',
      redirectTo: '/alerts'
    },
    {
      icon: 'ellipsis-vertical-outline',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface List{
  icon: string;
  name: string;
  redirectTo: string;
}
