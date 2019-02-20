import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gifs: string[] = ['mickey', 'minnie', 'donald', 'daisy'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  processForm(form: NgForm) {
    console.info(form.value);
    this.gifs.push(form.value.gifname);
    this.getGIF(form.value.gifname);
    form.resetForm();
  }

  getGIF(gifname: string) {
    console.log('selected: ', gifname);
    this.router.navigate(['/display', gifname]);
  }

}
