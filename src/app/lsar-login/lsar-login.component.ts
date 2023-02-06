import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-lsar-login',
  templateUrl: './lsar-login.component.html',
  styleUrls: ['./lsar-login.component.css']
})
export class LsarLoginComponent {



  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

}
