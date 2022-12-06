import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from 'src/app/models/data-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-data-page',
  templateUrl: './edit-data-page.component.html',
  styleUrls: ['./edit-data-page.component.css']
})
export class EditDataPageComponent {
  
  editModifiedForm !: FormGroup;
  id: any;
  allDataListOut !: any;
  displayDataList !: DataModel;

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    private route : ActivatedRoute,
  ){}

  ngOnInit(): void{
    this.getDataByID(this.route.snapshot.params['id']);
    this.editModifiedForm = this.formBuilder.group({
      insertTextInputData: new FormControl(''),

    })
  }

  getDataByID(id: any){
    this.api.getOneDataById(id)
    .subscribe((data: any)=> {
      this.id = data.id;
      this.allDataListOut = data;

      this.editModifiedForm.patchValue({
        insertTextInputData: data.insertTextInputData,
      });

      console.log(this.editModifiedForm.value);
    });
  }

  submitModifiedData(){
    this.api.editData(this.editModifiedForm.value, this.id)
    .subscribe((res)=>{
      const id = res.id;
      alert("Modified Data submited success");
    },()=>{
      alert("error");
    });
  }
}
