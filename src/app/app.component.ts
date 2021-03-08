import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;

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

getSelectedRows() {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map(node => node.data );
  const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

  alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}
