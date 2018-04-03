import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { get } from 'https';
@Injectable()
export class RemotecallService {
  

  constructor(private remotehttp:HttpClient) { }
  callremote = function(){
    console.log("I am in Service")
  }
  allRestData():{
    return this.remotehttp : get("https://jsonplaceholder.typicode.com/users");

  }
  

}
