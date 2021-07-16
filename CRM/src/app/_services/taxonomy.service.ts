import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TaxonomyService {
  term = [];
  socialMedia = [];
  getTerm: any
  getSocialMedia: any
  constructor() {
  }

  // Social Media
  showSocialMedia(){
    this.getSocialMedia = JSON.parse(localStorage.getItem('SocialMedia'))
    console.log(this.getSocialMedia);
    return this.getSocialMedia
  }
  addSocaialMedia(newValue){
    this.socialMedia.push(newValue)
    console.log(this.socialMedia);
    const newSocialMedia = localStorage.setItem('SocialMedia',JSON.stringify(this.socialMedia))
    return newSocialMedia
  }

  // terms service
  showData() {
    this.getTerm = JSON.parse(localStorage.getItem('terms'));
    return this.getTerm
  }
  addTerms(newValue: any) {
    this.term.push(newValue);
    console.log(this.term);
    const newTerm = localStorage.setItem('terms', JSON.stringify(this.term))
    return newTerm
  }
}
