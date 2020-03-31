import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  noOfTables:number[]=new Array;

  tableUpTo:number[]=new Array;

  ngOnInit(): void {
    for(var i=1;i<=20;i++){
      this.noOfTables[i-1]=i;
    }

    for(var i=1;i<=10;i++){
      this.tableUpTo[i-1]=i;
    }
  }

}
