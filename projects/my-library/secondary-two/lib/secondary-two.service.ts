import { Injectable } from '@angular/core';

import { SecondaryTwoInternalService } from './secondary-two-internal.service';

@Injectable({
  providedIn: 'root',
})
export class SecondaryTwoService {
  constructor(
    private internalService: SecondaryTwoInternalService,
  ) { }
}
