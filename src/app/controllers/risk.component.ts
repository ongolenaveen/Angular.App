import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RisksRepository} from "../models/repository.model";
import {Risk} from "../models/Risk.model"

@Component({
  selector: 'risks',
  styleUrls: ['risk.component.css'],
  templateUrl: 'risk.component.html',
  moduleId:module.id
})
export class RiskComponent {
  displayedColumns = ['id', 'title','score','status','owner'];
  dataSource: MatTableDataSource<Risk>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(repository:RisksRepository) {
    // Assign the data to the data source for the table to render
    let contacts = repository.getRisks();
    this.dataSource = new MatTableDataSource(contacts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}