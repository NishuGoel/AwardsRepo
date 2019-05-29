import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Document} from '../document';
import {DocumentData} from '../document.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 // documents: Document[] = [];
  constructor ( private dataservice: DataService){}

  getDocuments(){
    this.dataservice.getDocuments().subscribe(data => {
     // this.documents = data;
    });
  }

  ngOnInit(){
    this.getDocuments();
  }
}
