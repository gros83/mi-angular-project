import { Component, OnInit } from '@angular/core';
import { AuthenticationService, Book } from '../service/authentication.service';

@Component({
  selector: 'app-validation-demo',
  templateUrl: './validation-demo.component.html',
  styleUrls: ['./validation-demo.component.css']
})
export class ValidationDemoComponent implements OnInit {

  books: Book[];

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.getBooks().
      then(books => this.books = books);
  }

}
