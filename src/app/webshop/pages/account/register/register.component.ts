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
    registerFailed: boolean = false;
    registerSuccess: boolean = false;
    datepicker: boolean = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService
    ) {

    }

    ngOnInit(): void {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    register() {

        this.loading = true;
        if(this.user.gender == null) {
            this.user.gender = "FEMALE";
        }

        this.setAddress();

        this.userService.create(this.user)
            .subscribe(
                data => {
                    this.loading = false;
                    this.registerSuccess = true;
                    window.scrollTo(0,0);
                    setTimeout(() => this.router.navigate(['/shop/login'], { queryParams: { returnUrl: this.returnUrl }}), 3000)
                },
                error => {
                    this.loading = false;
                    this.registerFailed = true;
                    window.scrollTo(0,0);
                });
    }

    showDatepicker() {
        this.datepicker = true;
    }

    hideDatepicker() {
        this.user.dateOfBirth =
        this.datepicker = false;
    }

    setGender(value){
        this.user.gender = value.id;
    }

    setAddrGender(value){
        this.shippingAddress.gender = value.id;
    }

    setAddress(){

        this.billingAddress.gender = this.user.gender;
        this.billingAddress.firstName = this.user.firstName;
        this.billingAddress.lastName = this.user.lastName;

        //If different address for shipping is given, add to user, else add billing address as shipping address too
        if(!this.diffAddress) {
            Object.assign(this.shippingAddress, this.billingAddress);
        }

        this.user.billingAddress = this.billingAddress;
        this.user.shippingAddress = this.shippingAddress;

    }
}