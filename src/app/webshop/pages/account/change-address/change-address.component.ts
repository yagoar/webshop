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
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    //Get address type from route params
    this.addressType = this.route.snapshot.queryParams['type'];
  }

  changeAddress() {
    this.address.addressType = this.addressType;

    if(this.address.gender == null) {
      this.address.gender = "FEMALE";
    }

    if(this.addressType === 'BILLING') {
      this.userService.changeBillingAddress(this.address).subscribe(
          data => {
            console.log(data);
          }
      );
    } else {
      this.userService.changeShippingAddress(this.address);
    }
  }

  setAddrGender(value){
    this.address.gender = value.id;
  }

  cancelChangeAddr() {
    this.router.navigate(['/shop/account']);
  }

}
