webpackJsonp([0,3],{

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/v1/user/register', JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user) {
                // store user details in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/authentication.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/shop/login']);
        }
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/authguard.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.create = function (user) {
        return this.http.put('/api/v1/user/register', user).map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/user.service.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    function AccountComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-account',
            template: __webpack_require__(801)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/account.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.router.navigate(['/shop/account']);
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.loginFailed = false;
            _this.router.navigate(['/shop/account']);
        }, function (error) {
            _this.loginFailed = true;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-login',
            template: __webpack_require__(802)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/login.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__(807)
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsComponent);
    return ProductsComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/products.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebshopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebshopComponent = (function () {
    function WebshopComponent() {
    }
    WebshopComponent.prototype.ngOnInit = function () {
    };
    WebshopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-webshop',
            template: __webpack_require__(810)
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopComponent);
    return WebshopComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/webshop.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 580;


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polyfills__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(699);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/main.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(798),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/app.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webshop_webshop_module__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_authentication_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_authguard__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__webshop_webshop_module__["a" /* WebshopModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["a" /* CollapseModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__shared_authguard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/app.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var appRoutes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/app.routing.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-header',
            template: __webpack_require__(799)
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/header.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.isCollapsed = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-menu',
            template: __webpack_require__(800)
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/menu.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__(369);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-register',
            template: __webpack_require__(803)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/register.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(804)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/home.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductGridComponent = (function () {
    function ProductGridComponent() {
        this.totalItems = 100;
        this.currentPage = 4;
        this.itemsPerPage = 10;
    }
    ProductGridComponent.prototype.ngOnInit = function () {
    };
    ProductGridComponent.prototype.getPage = function () {
        console.log(this.currentPage - 1);
    };
    ProductGridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-product-grid',
            template: __webpack_require__(805)
        }), 
        __metadata('design:paramtypes', [])
    ], ProductGridComponent);
    return ProductGridComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/product-grid.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-navigation',
            template: __webpack_require__(806)
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/products-sidebar.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingCartComponent = (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-shopping-cart',
            template: __webpack_require__(808),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/shopping-cart.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopHeaderComponent = (function () {
    function TopHeaderComponent() {
    }
    TopHeaderComponent.prototype.ngOnInit = function () {
    };
    TopHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'webshop-top-header',
            template: __webpack_require__(809)
        }), 
        __metadata('design:paramtypes', [])
    ], TopHeaderComponent);
    return TopHeaderComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/top-header.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webshop_routing__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_header_header_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_products_products_sidebar_products_sidebar_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_products_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_product_grid_product_grid_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__top_header_top_header_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shopping_cart_shopping_cart_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__webshop_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account_component__ = __webpack_require__(370);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebshopModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var WebshopModule = (function () {
    function WebshopModule() {
    }
    WebshopModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__webshop_routing__["a" /* WebshopRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["c" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["d" /* PaginationModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__webshop_routing__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_10__webshop_component__["a" /* WebshopComponent */],
                __WEBPACK_IMPORTED_MODULE_2__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_products_products_sidebar_products_sidebar_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_products_product_grid_product_grid_component__["a" /* ProductGridComponent */],
                __WEBPACK_IMPORTED_MODULE_8__top_header_top_header_component__["a" /* TopHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account_component__["a" /* AccountComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopModule);
    return WebshopModule;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/webshop.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_products_products_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_register_register_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webshop_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_authguard__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebshopRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var routes = [
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_6__webshop_component__["a" /* WebshopComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_3__pages_products_products_component__["a" /* ProductsComponent */] },
            { path: 'account', component: __WEBPACK_IMPORTED_MODULE_7__pages_account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_authguard__["a" /* AuthGuard */]] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__pages_account_register_register_component__["a" /* RegisterComponent */] }
        ] },
];
var WebshopRoutingModule = (function () {
    function WebshopRoutingModule() {
    }
    WebshopRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopRoutingModule);
    return WebshopRoutingModule;
}());
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__pages_products_products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_4__pages_account_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__["a" /* LoginComponent */]];
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/webshop.routing.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/environment.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */



/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/polyfills.js.map

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 386,
	"./af.js": 386,
	"./ar": 392,
	"./ar-dz": 387,
	"./ar-dz.js": 387,
	"./ar-ly": 388,
	"./ar-ly.js": 388,
	"./ar-ma": 389,
	"./ar-ma.js": 389,
	"./ar-sa": 390,
	"./ar-sa.js": 390,
	"./ar-tn": 391,
	"./ar-tn.js": 391,
	"./ar.js": 392,
	"./az": 393,
	"./az.js": 393,
	"./be": 394,
	"./be.js": 394,
	"./bg": 395,
	"./bg.js": 395,
	"./bn": 396,
	"./bn.js": 396,
	"./bo": 397,
	"./bo.js": 397,
	"./br": 398,
	"./br.js": 398,
	"./bs": 399,
	"./bs.js": 399,
	"./ca": 400,
	"./ca.js": 400,
	"./cs": 401,
	"./cs.js": 401,
	"./cv": 402,
	"./cv.js": 402,
	"./cy": 403,
	"./cy.js": 403,
	"./da": 404,
	"./da.js": 404,
	"./de": 406,
	"./de-at": 405,
	"./de-at.js": 405,
	"./de.js": 406,
	"./dv": 407,
	"./dv.js": 407,
	"./el": 408,
	"./el.js": 408,
	"./en-au": 409,
	"./en-au.js": 409,
	"./en-ca": 410,
	"./en-ca.js": 410,
	"./en-gb": 411,
	"./en-gb.js": 411,
	"./en-ie": 412,
	"./en-ie.js": 412,
	"./en-nz": 413,
	"./en-nz.js": 413,
	"./eo": 414,
	"./eo.js": 414,
	"./es": 416,
	"./es-do": 415,
	"./es-do.js": 415,
	"./es.js": 416,
	"./et": 417,
	"./et.js": 417,
	"./eu": 418,
	"./eu.js": 418,
	"./fa": 419,
	"./fa.js": 419,
	"./fi": 420,
	"./fi.js": 420,
	"./fo": 421,
	"./fo.js": 421,
	"./fr": 424,
	"./fr-ca": 422,
	"./fr-ca.js": 422,
	"./fr-ch": 423,
	"./fr-ch.js": 423,
	"./fr.js": 424,
	"./fy": 425,
	"./fy.js": 425,
	"./gd": 426,
	"./gd.js": 426,
	"./gl": 427,
	"./gl.js": 427,
	"./he": 428,
	"./he.js": 428,
	"./hi": 429,
	"./hi.js": 429,
	"./hr": 430,
	"./hr.js": 430,
	"./hu": 431,
	"./hu.js": 431,
	"./hy-am": 432,
	"./hy-am.js": 432,
	"./id": 433,
	"./id.js": 433,
	"./is": 434,
	"./is.js": 434,
	"./it": 435,
	"./it.js": 435,
	"./ja": 436,
	"./ja.js": 436,
	"./jv": 437,
	"./jv.js": 437,
	"./ka": 438,
	"./ka.js": 438,
	"./kk": 439,
	"./kk.js": 439,
	"./km": 440,
	"./km.js": 440,
	"./ko": 441,
	"./ko.js": 441,
	"./ky": 442,
	"./ky.js": 442,
	"./lb": 443,
	"./lb.js": 443,
	"./lo": 444,
	"./lo.js": 444,
	"./lt": 445,
	"./lt.js": 445,
	"./lv": 446,
	"./lv.js": 446,
	"./me": 447,
	"./me.js": 447,
	"./mi": 448,
	"./mi.js": 448,
	"./mk": 449,
	"./mk.js": 449,
	"./ml": 450,
	"./ml.js": 450,
	"./mr": 451,
	"./mr.js": 451,
	"./ms": 453,
	"./ms-my": 452,
	"./ms-my.js": 452,
	"./ms.js": 453,
	"./my": 454,
	"./my.js": 454,
	"./nb": 455,
	"./nb.js": 455,
	"./ne": 456,
	"./ne.js": 456,
	"./nl": 458,
	"./nl-be": 457,
	"./nl-be.js": 457,
	"./nl.js": 458,
	"./nn": 459,
	"./nn.js": 459,
	"./pa-in": 460,
	"./pa-in.js": 460,
	"./pl": 461,
	"./pl.js": 461,
	"./pt": 463,
	"./pt-br": 462,
	"./pt-br.js": 462,
	"./pt.js": 463,
	"./ro": 464,
	"./ro.js": 464,
	"./ru": 465,
	"./ru.js": 465,
	"./se": 466,
	"./se.js": 466,
	"./si": 467,
	"./si.js": 467,
	"./sk": 468,
	"./sk.js": 468,
	"./sl": 469,
	"./sl.js": 469,
	"./sq": 470,
	"./sq.js": 470,
	"./sr": 472,
	"./sr-cyrl": 471,
	"./sr-cyrl.js": 471,
	"./sr.js": 472,
	"./ss": 473,
	"./ss.js": 473,
	"./sv": 474,
	"./sv.js": 474,
	"./sw": 475,
	"./sw.js": 475,
	"./ta": 476,
	"./ta.js": 476,
	"./te": 477,
	"./te.js": 477,
	"./tet": 478,
	"./tet.js": 478,
	"./th": 479,
	"./th.js": 479,
	"./tl-ph": 480,
	"./tl-ph.js": 480,
	"./tlh": 481,
	"./tlh.js": 481,
	"./tr": 482,
	"./tr.js": 482,
	"./tzl": 483,
	"./tzl.js": 483,
	"./tzm": 485,
	"./tzm-latn": 484,
	"./tzm-latn.js": 484,
	"./tzm.js": 485,
	"./uk": 486,
	"./uk.js": 486,
	"./uz": 487,
	"./uz.js": 487,
	"./vi": 488,
	"./vi.js": 488,
	"./x-pseudo": 489,
	"./x-pseudo.js": 489,
	"./yo": 490,
	"./yo.js": 490,
	"./zh-cn": 491,
	"./zh-cn.js": 491,
	"./zh-hk": 492,
	"./zh-hk.js": 492,
	"./zh-tw": 493,
	"./zh-tw.js": 493
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 772;


/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "<a href=\"#\"><img src=\"../../assets/webshop%20logo.png\" class=\"img-responsive center-block\" id=\"logo\"/></a>"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"webshop-nav\">\n   <div class=\"navbar-header\">\n     <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\">\n       <span class=\"sr-only\">Toggle navigation</span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n     </button>\n   </div>\n\n   <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n     <ul class=\"nav navbar-nav\">\n       <li><a href=\"#\">Home</a></li>\n       <li><a href=\"#/shop/products\">Produkte</a></li>\n     </ul>\n   </div>\n</nav>\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<p>\n  account works! <a (click)=\"logout()\">Logout</a>\n</p>\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-md-offset-4\">\n  <h2>Login</h2>\n  <alert *ngIf=\"loginFailed\"  type=\"danger\" dismissible=\"true\">Login fehlgeschlagen</alert>\n  <form (ngSubmit)=\"login()\">\n    <div class=\"form-group\">\n      <label for=\"username\">E-Mail</label>\n      <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #username=\"ngModel\" required />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Passwort</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Anmelden</button>\n    </div>\n  </form>\n  <p>Sie haben bereits ein Konto? <a href=\"#/shop/register\"><button class=\"btn btn-secondary\">Registrieren</button></a></p>\n</div>"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-md-offset-4\">\n    <h2>Registrierung</h2>\n    <form (ngSubmit)=\"register()\">\n        <div class=\"form-group\">\n            <label for=\"firstName\">Vorname</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Nachname</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\">E-Mail</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.email\" #username=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Passwort</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Registrieren</button>\n        </div>\n    </form>\n    <p>Sie haben bereits ein Konto? <a href=\"#/shop/login\"><button class=\"btn btn-secondary\">Anmelden</button></a></p>\n</div>"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "<div class=\"row item-grid\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <img class=\"img-responsive center-block\" src=\"../../../../../assets/lovewool_hellblau.jpg\" />\n    <div class=\"item-info\">\n      <div class=\"item-name\"><b>Artikelnamesdgwehwrhwrtztrzwertwert</b></div>\n      <div class=\"item-brand\">Marke</div>\n      <div class=\"item-price\">Preis</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-12\">\n    <pagination class=\"pagination\" [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\"\n                [(ngModel)]=\"currentPage\" [maxSize]=\"6\" lastText=\"Letzte\" firstText=\"Erste\" (click)=\"getPage()\"></pagination>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <div >\n        <accordion>\n            <accordion-group #categories>\n                <div accordion-heading>\n                    Kategorien\n                    <i class=\"pull-right float-xs-right glyphicon\"\n                       [ngClass]=\"{'glyphicon-chevron-down': categories?.isOpen, 'glyphicon-chevron-right': !categories?.isOpen}\"></i>\n                </div>\n                Kategorien\n            </accordion-group>\n        </accordion>\n    </div>\n    <div >\n        <accordion>\n            <accordion-group #filter>\n                <div accordion-heading>\n                    Filter\n                    <i class=\"pull-right float-xs-right glyphicon\"\n                       [ngClass]=\"{'glyphicon-chevron-down': filter?.isOpen, 'glyphicon-chevron-right': !filter?.isOpen}\"></i>\n                </div>\n                Filter\n            </accordion-group>\n        </accordion>\n    </div>\n</div>\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12\">\n    <webshop-navigation></webshop-navigation>\n  </div>\n  <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-12\">\n    <webshop-product-grid></webshop-product-grid>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping-cart works!\n</p>\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"top-header\">\n  <div class=\"col-xs-12\">\n    <a href=\"#/shop/account\" class=\"top-header-link\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Mein Konto</a>\n    <a href=\"shopping-cart\" class=\"top-header-link\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Warenkorb <span class=\"badge\">2</span></a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<div id=\"pattern-container\">\n    <div class=\"container-fluid\">\n        <webshop-top-header></webshop-top-header>\n        <webshop-header></webshop-header>\n        <webshop-menu></webshop-menu>\n    </div>\n</div>\n<div id=\"content-container\" class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ })

},[1080]);
//# sourceMappingURL=main.bundle.map