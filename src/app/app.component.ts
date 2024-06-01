import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'ecom';

  ngOnInit(): void {
    this.getFirstRequest()
  }
  
  getFirstRequest() {
     this.http.get(`http://localhost:4400`).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
