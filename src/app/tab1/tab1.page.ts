import { Component } from '@angular/core';

import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private http: HTTP
    ) {}

  test(email, password){

    let url = 'http://mpi.spedo.com.br/api/app/logarAPP.json';

    let data = {
      str_email: btoa(email),
      str_senha: btoa(password),
    };

    let header = {
        'MPI-API-KEY': '0000000000000000000000000000000000000000',
      }

    this.http.setDataSerializer('json');

    this.http.post(url, data, header)
      .then(data => {
        var response = JSON.parse(data.data);
        console.log(response)
      }
    )
  }
}
