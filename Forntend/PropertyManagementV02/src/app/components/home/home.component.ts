import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any = []

  constructor(private _PropertyService: PropertyService) { }

  ngOnInit(): void {
    this._PropertyService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);}
    );

  }

  remove(flag: any){
    this.data[flag].isActive = 0;
    this._PropertyService.editData(this.data[flag], this.data[flag]._id).subscribe(res => console.log(res));
  }

}
