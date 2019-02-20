import { GIFImage } from './../model';
import { Component, OnInit } from '@angular/core';
import { SearchGiphyService } from '../searchgiphy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  gifname: string;
  imgURL: string;
  gifImage: GIFImage[] = [];
  myCollection = [];
  p = 1;

  constructor(private searchGiphySVC: SearchGiphyService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.gifname = this.activatedRoute.snapshot.params.gifname;
    console.log('gifname: ', this.gifname);
    this.getGIF(this.gifname);
  }

  back() {
    this.router.navigate(['/']);
  }

  getGIF(gifname: string) {
    this.searchGiphySVC.getGIF(gifname)
      .then(result => {
        console.info(result);
        const g = result.datavalue;

// tslint:disable-next-line: forin
        for (const i in g) {
          this.imgURL = g[i].images.fixed_width.url;
          this.gifImage.push({
            imgURL: g[i].images.fixed_width.url
          });
        }
        console.info('>> imgURL: ', this.imgURL);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }
}
