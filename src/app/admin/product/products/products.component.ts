import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../../product/Interface/product.interface';
import { ProductService } from '../../../core/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfimComponent } from '../../components/dialog-confim/dialog-confim.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component( {
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
} )
export class ProductsComponent implements AfterViewInit {

  products: Product[] = []
  dataSource: any


  @ViewChild( MatPaginator ) paginator!: MatPaginator;
  @ViewChild( MatSort ) sort!: MatSort;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'id', 'name', 'price', 'acciones' ];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  ngAfterViewInit (): void {
    this.productService.getProducts()
      .subscribe( products => {
        this.products = products
        this.dataSource = new MatTableDataSource<Product>( this.products );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } )
  }

  // delete ( id: number ) {
  //   this.productService.deleteProduct( id )
  //     .subscribe( resp => {
  //       console.log( "delete product" );
  //     } )
  // }

  delete ( id: number ) {
    const data = this.dialog.open( DialogConfimComponent, {
      width: "250px",
    } )

    data.afterClosed().subscribe( result => {
      if ( result ) {
        this.productService.deleteProduct( id )
          .subscribe( resp => {
            this.openSnackBar( "Se borro exitosamente" )
          } )
      } else {
        this.openSnackBar( "Se cancelo el pedido" )
      }
    } )
  }

  openSnackBar ( message: string ) {
    this._snackBar.open( message, "ok!", {
      duration: 3000
    } );
  }
}
