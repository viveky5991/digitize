// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private http: HttpClient) { }

  // fetchData() {
  //   // this.sharedData = data;
  //   return this.http.get<any>("/json/data.json") .pipe(
  //     map((user: any) => {
  //       // console.log(user);
  //       return user;
  //     })
  //   )
  // }

   // Example POST request
   postData( data: any): Observable<any> {
    
    return this.http.post<any>(`${environment.apiUrl}/create`,data) .pipe(
      map((user: any) => {
         console.log(user);
        return user;
      })
    )
  }
  
  getData(data:any): any[] {
    return this.data;
  }
  data = [
    {
      srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
    },
    {
      srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
      previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
    },
    {
      srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
      previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
    },
    {
      srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
      previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
    }
  ];

  
}

// export class ContactComponent {
//   contact = { name: '', email: '',phone:'',address:'', message: '' };
//   message: string | undefined;

//   constructor(private http: HttpClient) {}

//   onSubmit() {
//       this.http.post('http://localhost:3200/create', this.contact)
//           .subscribe({
//               next: (response) => this.message = 'Message sent successfully',
//               error: (error) => this.message = 'Error sending message'
//           });
//   }
// }
