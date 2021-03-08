import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  columnDefs = [
    { field: 'make', sortable: true, filter: true,checkboxSelection: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
];

rowData=[];

constructor(private data: DataService) {
  
}

ngOnInit() {
   this.data.getdata().subscribe(res=>{
    this.rowData=res;
  })

}
}
