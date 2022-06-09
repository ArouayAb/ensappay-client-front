import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Provider } from '../models/provider.model';


const providerUrl = 'http://localhost:8080/api/providers';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  providers: Provider[] = [
    {
      image: "https://halberdbastion.com/sites/default/files/2017-08/Maroc-Telecom-Logo.png",
      name: "Maroc Télécome",
      products: [
        "", ""
      ],
      category: "recharge"

    },
    {
      image: "https://www.marocemploi.cc/storage/files/ma/68/thumb-816x460-369c557388a7b34f87e6ae42fe50d9d6.jpg",
      name: "Inwi",
      products: [
        "", ""
      ],
      category: "recharge"
    },
    {
      image: "https://www.adipsys.com/wp-content/uploads/2018/11/Logo-Orange-emea.png",
      name: "Orange",
      products: [
        "", ""
      ],
      category: "recharge"
    },
  ];


  constructor(private http: HttpClient) { }

  getAll(): Observable<Provider[]> {
    // return this.http.get<Provider[]>(providerUrl);
    return of(this.providers);
  }

}
