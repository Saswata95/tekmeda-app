import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

}
