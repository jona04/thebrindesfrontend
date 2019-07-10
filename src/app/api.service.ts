import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  baseurl = "https://thebrindesapi.herokuapp.com";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

getAllCategorias(): Observable<any>{
  return this.http.get(this.baseurl+'/api/categoria/',
    {headers: this.httpHeaders}
  );
}

getAllArtesCanecas(): Observable<any>{
  return this.http.get(this.baseurl+'/api/artecaneca/',
    {headers: this.httpHeaders}
  );
}

getAllBrindes(): Observable<any>{
  return this.http.get(this.baseurl+'/api/brinde/',
    {headers: this.httpHeaders}
  );
}

getOneCategoria(slug): Observable<any>{
  return this.http.get(this.baseurl+'/api/categoria/'+slug+'/',
    {headers: this.httpHeaders}
  );
}

createOrcamento(orcamento): Observable<any>{
  const body = {name:orcamento.name,email:orcamento.email,phone:orcamento.phone,quantity:orcamento.quantity,brindes:orcamento.brindes};
  return this.http.post(this.baseurl+'/api/orcamento/', body,
  {headers: this.httpHeaders}
);
}

search(busca): Observable<any>{
  return this.http.get(this.baseurl+'/api/brinde/?search='+busca,
  {headers: this.httpHeaders}
);
}

}
