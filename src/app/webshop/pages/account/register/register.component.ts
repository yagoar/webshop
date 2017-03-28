import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/Rx';
import {UserService} from "../../../../shared/services/shop/user.service";

@Component({
    selector: 'webshop-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

    user: any = {};
    returnUrl: string;
    loading = false;
    gender = [{id: 'FEMALE', text:'Frau'},
        {id: 'MALE', text:'Herr'}];
    diffAddress: boolean = false;
    billingAddress: any = {};
    shippingAddress: any = {};

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {

    }

    ngOnInit(): void {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    register() {

        this.loading = true;
        this.setAddress();
        if(this.user.gender == null) {
            this.user.gender = "FEMALE";
        }

        this.userService.create(this.user)
            .subscribe(
                data => {
                    this.loading = false;
                    this.router.navigate(['/shop/login'], { queryParams: { returnUrl: this.returnUrl }});
                },
                error => {
                    this.loading = false;
                    console.log(error);
                });
    }

    setGender(value){
        this.user.gender = value.id;
    }

    setAddress(){
        this.user.addresses = [];

        //If different address for shipping is given, add to user, else add billing address as shipping address too
        if(!this.diffAddress) {
            Object.assign(this.shippingAddress, this.billingAddress);
        }

        //Add addresses to the user
        this.billingAddress.addressType = "BILLING";
        this.shippingAddress.addressType = "SHIPPING";
        this.user.addresses.push(this.billingAddress, this.shippingAddress);
    }
}