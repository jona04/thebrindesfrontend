import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  baseurl = "https://thebrindesapi.herokuapp.com";
  // baseurl = "http://127.0.0.1:8000";
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

getAllCategoriasArte(): Observable<any>{
  return this.http.get(this.baseurl+'/api/categoriasarte/',
    {headers: this.httpHeaders}
  );
}

getAllBrindes(): Observable<any>{
  return this.http.get(this.baseurl+'/api/brinde/',
    {headers: this.httpHeaders}
  );
}

getArteClienteCaneca(id): Observable<any>{
  return this.http.get(this.baseurl+'/api/arteClienteCaneca/'+id+'/',
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
  // print(body)
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
