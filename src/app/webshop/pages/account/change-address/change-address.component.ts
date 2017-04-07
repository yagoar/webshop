import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../shared/services/shop/user.service";

@Component({
  selector: 'webshop-change-address',
  templateUrl: './change-address.component.html'
})
export class ChangeAddressComponent implements OnInit {

  addressType: string;
  address: any = {};
  gender = [{id: 'FEMALE', text:'Frau'},
    {id: 'MALE', text:'Herr'}];
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    //Get address type from route params
    this.addressType = this.route.snapshot.queryParams['type'];
  }

  changeAddress() {

    if(this.address.gender == null) {
      this.address.gender = "FEMALE";
    }

    this.userService.changeAddress(this.address, this.addressType).subscribe(
        data => {
          this.router.navigate(['/shop/account'], { queryParams: { successAddrChange: this.addressType }});
        }
    );
  }

  setAddrGender(value){
    this.address.gender = value.id;
  }

  cancelChangeAddr() {
    this.router.navigate(['/shop/account']);
  }

}
