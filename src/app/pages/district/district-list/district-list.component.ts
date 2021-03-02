import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DistrictInfo} from '../../../shared/interfaces';
import {DistrictService} from '../../../common/services';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../../shared/component/dialog/dialog.component';
import {UserPermissionService} from '../../../common/services/user-permission.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-district',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements AfterViewInit {

  // animal: string;
  // name: string;

  // public title = 'District List of Bangladesh';
  // public numberOfDistrict = 0;
  public listOfDistrict: DistrictInfo[] = [];
  public listOfDeletedDistrict: DistrictInfo[] = [];
  public isAdmin = false;
  private subscription!: Subscription;
  constructor(
    private userPermissionService: UserPermissionService,
    private districtService: DistrictService,
    public dialog: MatDialog) {
    this.setDistrictList();
    this.userPermissionService.getUserPermission().subscribe(res => {
      // console.log(res);
      // this.subscription =
      if (res.userType === 'admin')
      {
        this.isAdmin = true;
      }else {
        this.isAdmin = false;
      }
    });
  }

  @ViewChild('refIn') inRef!: ElementRef;
  ngAfterViewInit(): void {
    this.inRef.nativeElement.focus();
    // console.log(this.inRef);
  }
  /*ngOnInit(): void {
    console.log(this.inRef);
  }*/

  private setDistrictList(): void{
    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.listOfDistrict = this.getRectifiedDistricts(res.data);
        // this.numberOfDistrict = this.getNumberOfDistricts();
        // this.setNumberOfDistricts(res.data);
      }
      else {
        console.log('Error', res);
      }
    });
  }
  private getRectifiedDistricts(districtList: DistrictInfo[]): DistrictInfo[]{
    for (const it of districtList)
    {
      it.density = Math.floor(it.population / it.areaSqKm);
    }
    return districtList;
  }
  public getNumberOfDistricts(): number {
    return (this.listOfDistrict.length);
  }

  public getNumberOfDeletedDistricts(): number {
    return (this.listOfDeletedDistrict.length);
  }
  /*
  private setNumberOfDistricts(districtList: DistrictInfo[]): void{
    this.numberOfDistrict = (districtList.length);
  }


  public reCount(event: number): void{
    this.numberOfDistrict = this.districtList.length;
  }*/
  public rowHasRemovedByIndex(rowNumber: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        title: 'What\'s your opinion?',
        body: 'Are you sure to delete'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
      // this.animal = result;
      if (result === 'yes')
      {
        this.deleteTableRowByIndex(rowNumber);
      }
    });
    /*for (const it of list) {
      this.listOfDeletedDistrict.push(it);
    }*/
  }

  private deleteTableRowByIndex(index: number): void {
    const removedItems = this.listOfDistrict.splice(index, 1);
    for (const item of removedItems) {
      this.listOfDeletedDistrict.push(item);
    }
  }


  public rowHasRemovedBySelected(list: DistrictInfo[]): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        title: 'What\'s your opinion?',
        body: 'Are you sure to delete'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
      // this.animal = result;
      if (result === 'yes')
      {
        // this.deleteTableRowByIndex()
      }
    });
    /*for (const it of list) {
      this.listOfDeletedDistrict.push(it);
    }*/
  }

}
