import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component( {
  selector: 'app-dialog-confim',
  templateUrl: './dialog-confim.component.html',
  styles: [
    `
      button {
        margin-right:5px
      }
    `
  ]
} )
export class DialogConfimComponent implements OnInit {

  constructor(
    private dialogReg: MatDialogRef<DialogConfimComponent>
  ) { }

  ngOnInit (): void {
  }

  delete () {
    this.dialogReg.close( true )
  }
  cancel () {
    this.dialogReg.close( false )
  }

}
