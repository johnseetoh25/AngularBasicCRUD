import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { DataModel } from 'src/app/models/data-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-insert-data-page',
  templateUrl: './insert-data-page.component.html',
  styleUrls: ['./insert-data-page.component.css']
})
export class InsertDataPageComponent {

  insertDataForm !: FormGroup;
  
  constructor( 
    private fromBuilder : FormBuilder, 
    private insertApi : ApiService 
  ) {}
  
  ngOnInit(): void{
    this.insertDataForm = this.fromBuilder.group({
      insertTextInputData: ['', Validators.required],
    })
  }

  addInsertedData(){
    if (this.insertDataForm.valid) {
      this.insertApi.postData(this.insertDataForm.value)
      .subscribe((data: DataModel)=>{
          alert("insert successfully")
        },()=>{
          alert("insert error")
        }
      )
    }
  }
  
}
