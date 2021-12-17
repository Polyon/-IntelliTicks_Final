import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  PropertyForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    size: new FormControl()
  })

  constructor(private _PropertyService: PropertyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._PropertyService.setData(this.PropertyForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
