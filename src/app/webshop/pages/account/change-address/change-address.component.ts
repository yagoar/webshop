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
  activeGender: any = [{id: 'FEMALE', text:'Frau'}];
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    //Get address type from route params
    this.addressType = this.route.snapshot.queryParams['type'];

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    //Get current address from user service
    if(this.addressType == "billing"){
      this.address = this.userService.currentBillingAddress;
    } else if(this.addressType == "shipping"){
      this.address = this.userService.currentShippingAddress;
    }

    if(this.address.gender === "MALE") {
      this.activeGender = [{id: 'MALE', text:'Herr'}];
    }

  }



  changeAddress() {

    if(this.address.gender == null) {
      this.address.gender = "FEMALE";
    }

    this.userService.changeAddress(this.address, this.addressType).subscribe(
        data => {
          this.router.navigate([this.returnUrl], { queryParams: { successAddrChange: this.addressType }});
        }
    );
  }

  setAddrGender(value){
    this.address.gender = value.id;
  }

  cancelChangeAddr() {
    this.router.navigate([this.returnUrl]);
  }

}
