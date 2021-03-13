import { Injectable } from '@angular/core';

import { SecondaryOneInternalService } from './secondary-one-internal.service';

@Injectable({
  providedIn: 'root',
})
export class SecondaryOneService {
  constructor(
    private internalService: SecondaryOneInternalService,
  ) { }
}
