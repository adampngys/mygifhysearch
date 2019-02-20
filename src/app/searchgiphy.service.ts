import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const URL = 'https://api.giphy.com/v1/gifs/search';
const APPID = 'hBkidoKJ58CbFoWqCQiixIp11IfjF52x';
const limitvalue = '100';
const offsetvalue = '0';
const ratingvalue = 'G';
const langvalue = 'en';

@Injectable()
export class SearchGiphyService {

    constructor(private http: HttpClient) { }

    getGIF(gifname: string) {
// tslint:disable-next-line: no-console
        console.info('>> gif: ', gifname);

        // ?api_key=abc123&q=<gif>&...
        const qs = new HttpParams()
            .set('api_key', APPID)
            .set('q', gifname)
            .set('limit', limitvalue)
            .set('offset', offsetvalue)
            .set('rating', ratingvalue)
            .set('lang', langvalue);


        return (
            // http://<URL>?api_key=abc123&q=<gif>&...
            this.http.get(URL, { params: qs })
                .toPromise() // Convert the result to a promise
                .then(result => {
                    return ({
                        datavalue: result['data']
                    });
                })
        );
    }

}
