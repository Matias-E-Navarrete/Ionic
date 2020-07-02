import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  mensajes: any;


  constructor( private dataService: DataService) { }

  ngOnInit(): void {

    this.mensajes = this.dataService.getData();

    /* 
    Genera basura cada vez que se ejecuta porque al hacer el 
    ngOnInit genera un nuevo observable.
    .subscribe( (posts: any[]) => {
      this.mensajes = posts;
    });
     */

  }

}
