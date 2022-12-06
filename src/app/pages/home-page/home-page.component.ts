import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  displayedColumns: string[] = ['id', 'dataList', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private api : ApiService, 
    private router : Router,
  ){}

  ngOnInit(): void{
    this.getAllDataLists();
  }

  getAllDataLists(){
    this.api.getAllData()
    .subscribe(data=>{
      //const sortState: Sort = {active: 'id', direction: 'desc'};
      this.dataSource = new MatTableDataSource(data);

      //this.sort.active = sortState.active;
      //this.sort.direction = sortState.direction;
      //this.sort.sortChange.emit(sortState);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //console.log(data);
    });
  }

  openEditDataPage(row: any){
    this.router.navigate(['edit-data-page', row]);
  }

  deleteData(id: number){
    this.api.deleteData(id)
    .subscribe({
      next:(res)=>{
        this.getAllDataLists();
      }
    });
  }


}
