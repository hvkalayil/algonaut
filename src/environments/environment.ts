import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  options : {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
};
