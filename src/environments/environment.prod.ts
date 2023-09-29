import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  apiUrl: 'https://algonaut-api.onrender.com/',
  options : {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
};
