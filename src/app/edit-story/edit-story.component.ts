import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentDetails } from '../documentdetails';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

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




  @Output() edited = new EventEmitter();

  edit() {
    this.edited.emit(this.userFormGroup.value);
  }


  // updateDocument(idtoUpdate) {
  //   this.dataservice.getDocument(idtoUpdate).subscribe(data => {
  //     this.document = data;
  //     this.document.text = ;
  //     this.dataservice.updateDocument(this.document).subscribe(data1 => {
  //       this.router.navigate(['/search']);
  //     });
  //   });

  // }

  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        edit_text: new FormControl('')
      },
    );

    this.route.params.subscribe(
      (document) => {
        this.fetchId = document.id;
      });
    //  this.getDocuments();
    this.getDocument();
  }



}
