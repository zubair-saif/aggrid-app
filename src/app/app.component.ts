import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { AgGridAngular } from 'ag-grid-angular';

import { AllCommunityModules } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    {
      headerName: 'make',
      field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
    },
    { headerName: 'model', field: 'model', sortable: true, filter: true },
    { headerName: 'price', field: 'price', sortable: true, filter: true },
  ];

  rowData = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getdata().subscribe((res) => {
      this.rowData = res;
    });
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.make} ${node.model} ${node.price}`)
      .join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
