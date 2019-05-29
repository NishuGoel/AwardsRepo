import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Document } from '../document';
import { DocumentDetails } from '../documentdetails';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // documents= [];
  document: DocumentDetails;
  userFormGroup: FormGroup;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        title: new FormControl(''),
        text: new FormControl('')
      },
    );
    this.getDocuments();
  }

  getDocuments() {
    this.dataservice.getDocuments().subscribe(data => {
    // this.documents = data;
    });
  }

  addDocument() {
    this.dataservice.addDocument(this.userFormGroup.value).subscribe(data => {
      this.document = data;
      console.log(this.document);
    });
    this.router.navigate(['/search']);
  }
}