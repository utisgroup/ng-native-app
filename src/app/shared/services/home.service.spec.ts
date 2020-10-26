import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HomeService', () => {
  let service: HomeService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(HomeService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });


  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [HomeService]
  }));

   it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service.getData).toBeTruthy();
   });

  

});
