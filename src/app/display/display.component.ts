import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DocumentDetails } from '../documentdetails';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  document: DocumentDetails;
  documents: Document[];
  userFormGroup: FormGroup;
  constructor(private dataservice: DataService, private route: ActivatedRoute, private router: Router) { }


  fetchId = 0;
  getDocument() {
    this.dataservice.getDocument(this.fetchId).subscribe(data => {
      this.document = data;

    });
  }


  updateDocument(idtoUpdate) {
    this.dataservice.getDocument(idtoUpdate).subscribe(data => {
      this.document = data;
      this.document.text = 'Hello';
      this.dataservice.updateDocument(this.document).subscribe(data1 => {
        this.router.navigate(['/search']);
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(
      (document) => {
        this.fetchId = document.id;
      });


    //  this.getDocuments();
    this.getDocument();
  }

}
