import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


import { CardElement } from 'classes/CardElement'
import { isNullOrUndefined } from 'util'


@Injectable()
export class LibraryService {
  public listView = false
  private URL = '/api/library'
  libraryMovie: any
  libraryTv: any

  constructor(private http: Http) { }

  public async addToLibrary(element: CardElement) {
    const type = element.type
    const id = element.id
    try {
      const response = await this.http.post(this.URL + '/' + type, {id: id}).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async removeFromLibrary(element: CardElement) {
    const type = element.type
    const id = element.id
    try {
      const response = await this.http.get(this.URL + '/' + type + '/remove/' + id).toPromise()
    } catch (err) {
      console.error(err)
    }
  }
  public async getLibrary() {
    try {
      const response = await this.http.get(this.URL + '/movie/').toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'movie')
      }
    } catch (err) {
      console.error(err)
    }

    try {
      const response = await this.http.get(this.URL + '/tv/').toPromise()
      if (response.status === 200) {
        this.reconfigure(response.json(), 'tv')
      }
    } catch (err) {
      console.error(err)
    }
  }
  private reconfigure(json, type) {
    switch (type) {
      case('movie'):
        this.libraryMovie = json.map((result) => new CardElement(result))
        break
      case('tv'):
        this.libraryTv = json.map((result) => new CardElement(result))
        break
    }
  }
  public isEmpty(type): boolean {
    switch (type) {
      case 'movie': {
        if (!this.libraryMovie) { return true }
        if (!this.libraryMovie.length) { return true }
        return false
      }
      case 'tv': {
        if (!this.libraryTv) { return true }
        if (!this.libraryTv.length) { return true }
        return false
      }
      default: {
        return false
      }
    }
  }

  private toggleListView() {
    this.listView = !this.listView
  }

}
