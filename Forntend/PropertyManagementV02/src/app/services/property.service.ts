import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private _baseUrl: string = "http://localhost:3000/api";
  private _addUrl: string = this._baseUrl + '/add';
  private _editUrl: string = this._baseUrl + '/edit';

  constructor(private _httpClient: HttpClient) { }

  getData(){
    return this._httpClient.get(this._baseUrl+'/');
  }

  setData(data: any){
    let header = new HttpHeaders({'Content-Type': 'application/json'});
    return this._httpClient.request("POST", this._addUrl, {body: data, headers: header, responseType: 'json'});
  }

  editData(data: any, id: any){
    let header = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(this._editUrl+`/${id}`);
    return this._httpClient.request("PATCH", this._editUrl+`/${id}`, {body: data, headers: header, responseType: 'json'});
  }
}
