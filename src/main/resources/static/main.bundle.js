webpackJsonp([0,3],{

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(578);


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(344);
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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(809),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/login.component.js.map

/***/ }),

/***/ 369:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__(812),
            styles: [__webpack_require__(800)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsComponent);
    return ProductsComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/products.component.js.map

/***/ }),

/***/ 370:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-webshop',
            template: __webpack_require__(816),
            styles: [__webpack_require__(804)]
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopComponent);
    return WebshopComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/webshop.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 577;


/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polyfills__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(696);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/main.js.map

/***/ }),

/***/ 695:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(805),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/app.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webshop_webshop_module__ = __webpack_require__(706);
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
                __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/app.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var appRoutes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/app.routing.js.map

/***/ }),

/***/ 698:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'webshop-header',
            template: __webpack_require__(806),
            styles: [__webpack_require__(794)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/header.component.js.map

/***/ }),

/***/ 699:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'webshop-menu',
            template: __webpack_require__(807),
            styles: [__webpack_require__(795)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/menu.component.js.map

/***/ }),

/***/ 700:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(808),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/home.component.js.map

/***/ }),

/***/ 701:
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
    }
    ProductGridComponent.prototype.ngOnInit = function () {
    };
    ProductGridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'webshop-product-grid',
            template: __webpack_require__(810),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductGridComponent);
    return ProductGridComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/product-grid.component.js.map

/***/ }),

/***/ 702:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'webshop-navigation',
            template: __webpack_require__(811),
            styles: [__webpack_require__(799)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/products-sidebar.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(367);
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
        this.user = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(function (data) {
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            _this.router.navigate(['']);
        }, function (error) {
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'webshop-register',
            template: __webpack_require__(813),
            styles: [__webpack_require__(801)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'webshop-shopping-cart',
            template: __webpack_require__(814),
            styles: [__webpack_require__(802)]
        }), 
        __metadata('design:paramtypes', [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/shopping-cart.component.js.map

/***/ }),

/***/ 705:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'webshop-top-header',
            template: __webpack_require__(815),
            styles: [__webpack_require__(803)]
        }), 
        __metadata('design:paramtypes', [])
    ], TopHeaderComponent);
    return TopHeaderComponent;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/top-header.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webshop_routing__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_products_products_sidebar_products_sidebar_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_products_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_product_grid_product_grid_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__top_header_top_header_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shopping_cart_shopping_cart_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__webshop_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["a" /* CollapseModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__webshop_routing__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_10__webshop_component__["a" /* WebshopComponent */],
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_products_products_sidebar_products_sidebar_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_products_product_grid_product_grid_component__["a" /* ProductGridComponent */],
                __WEBPACK_IMPORTED_MODULE_8__top_header_top_header_component__["a" /* TopHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopModule);
    return WebshopModule;
}());
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/webshop.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_products_products_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webshop_component__ = __webpack_require__(370);
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
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__pages_register_register_component__["a" /* RegisterComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */] }
        ] },
];
var WebshopRoutingModule = (function () {
    function WebshopRoutingModule() {
    }
    WebshopRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopRoutingModule);
    return WebshopRoutingModule;
}());
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__pages_products_products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_4__pages_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */]];
//# sourceMappingURL=/Users/yaizagonzalo/Documents/DHBW/Studienarbeit/webshop/src/webshop.routing.js.map

/***/ }),

/***/ 708:
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

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(1083);
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

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 383,
	"./af.js": 383,
	"./ar": 389,
	"./ar-dz": 384,
	"./ar-dz.js": 384,
	"./ar-ly": 385,
	"./ar-ly.js": 385,
	"./ar-ma": 386,
	"./ar-ma.js": 386,
	"./ar-sa": 387,
	"./ar-sa.js": 387,
	"./ar-tn": 388,
	"./ar-tn.js": 388,
	"./ar.js": 389,
	"./az": 390,
	"./az.js": 390,
	"./be": 391,
	"./be.js": 391,
	"./bg": 392,
	"./bg.js": 392,
	"./bn": 393,
	"./bn.js": 393,
	"./bo": 394,
	"./bo.js": 394,
	"./br": 395,
	"./br.js": 395,
	"./bs": 396,
	"./bs.js": 396,
	"./ca": 397,
	"./ca.js": 397,
	"./cs": 398,
	"./cs.js": 398,
	"./cv": 399,
	"./cv.js": 399,
	"./cy": 400,
	"./cy.js": 400,
	"./da": 401,
	"./da.js": 401,
	"./de": 403,
	"./de-at": 402,
	"./de-at.js": 402,
	"./de.js": 403,
	"./dv": 404,
	"./dv.js": 404,
	"./el": 405,
	"./el.js": 405,
	"./en-au": 406,
	"./en-au.js": 406,
	"./en-ca": 407,
	"./en-ca.js": 407,
	"./en-gb": 408,
	"./en-gb.js": 408,
	"./en-ie": 409,
	"./en-ie.js": 409,
	"./en-nz": 410,
	"./en-nz.js": 410,
	"./eo": 411,
	"./eo.js": 411,
	"./es": 413,
	"./es-do": 412,
	"./es-do.js": 412,
	"./es.js": 413,
	"./et": 414,
	"./et.js": 414,
	"./eu": 415,
	"./eu.js": 415,
	"./fa": 416,
	"./fa.js": 416,
	"./fi": 417,
	"./fi.js": 417,
	"./fo": 418,
	"./fo.js": 418,
	"./fr": 421,
	"./fr-ca": 419,
	"./fr-ca.js": 419,
	"./fr-ch": 420,
	"./fr-ch.js": 420,
	"./fr.js": 421,
	"./fy": 422,
	"./fy.js": 422,
	"./gd": 423,
	"./gd.js": 423,
	"./gl": 424,
	"./gl.js": 424,
	"./he": 425,
	"./he.js": 425,
	"./hi": 426,
	"./hi.js": 426,
	"./hr": 427,
	"./hr.js": 427,
	"./hu": 428,
	"./hu.js": 428,
	"./hy-am": 429,
	"./hy-am.js": 429,
	"./id": 430,
	"./id.js": 430,
	"./is": 431,
	"./is.js": 431,
	"./it": 432,
	"./it.js": 432,
	"./ja": 433,
	"./ja.js": 433,
	"./jv": 434,
	"./jv.js": 434,
	"./ka": 435,
	"./ka.js": 435,
	"./kk": 436,
	"./kk.js": 436,
	"./km": 437,
	"./km.js": 437,
	"./ko": 438,
	"./ko.js": 438,
	"./ky": 439,
	"./ky.js": 439,
	"./lb": 440,
	"./lb.js": 440,
	"./lo": 441,
	"./lo.js": 441,
	"./lt": 442,
	"./lt.js": 442,
	"./lv": 443,
	"./lv.js": 443,
	"./me": 444,
	"./me.js": 444,
	"./mi": 445,
	"./mi.js": 445,
	"./mk": 446,
	"./mk.js": 446,
	"./ml": 447,
	"./ml.js": 447,
	"./mr": 448,
	"./mr.js": 448,
	"./ms": 450,
	"./ms-my": 449,
	"./ms-my.js": 449,
	"./ms.js": 450,
	"./my": 451,
	"./my.js": 451,
	"./nb": 452,
	"./nb.js": 452,
	"./ne": 453,
	"./ne.js": 453,
	"./nl": 455,
	"./nl-be": 454,
	"./nl-be.js": 454,
	"./nl.js": 455,
	"./nn": 456,
	"./nn.js": 456,
	"./pa-in": 457,
	"./pa-in.js": 457,
	"./pl": 458,
	"./pl.js": 458,
	"./pt": 460,
	"./pt-br": 459,
	"./pt-br.js": 459,
	"./pt.js": 460,
	"./ro": 461,
	"./ro.js": 461,
	"./ru": 462,
	"./ru.js": 462,
	"./se": 463,
	"./se.js": 463,
	"./si": 464,
	"./si.js": 464,
	"./sk": 465,
	"./sk.js": 465,
	"./sl": 466,
	"./sl.js": 466,
	"./sq": 467,
	"./sq.js": 467,
	"./sr": 469,
	"./sr-cyrl": 468,
	"./sr-cyrl.js": 468,
	"./sr.js": 469,
	"./ss": 470,
	"./ss.js": 470,
	"./sv": 471,
	"./sv.js": 471,
	"./sw": 472,
	"./sw.js": 472,
	"./ta": 473,
	"./ta.js": 473,
	"./te": 474,
	"./te.js": 474,
	"./tet": 475,
	"./tet.js": 475,
	"./th": 476,
	"./th.js": 476,
	"./tl-ph": 477,
	"./tl-ph.js": 477,
	"./tlh": 478,
	"./tlh.js": 478,
	"./tr": 479,
	"./tr.js": 479,
	"./tzl": 480,
	"./tzl.js": 480,
	"./tzm": 482,
	"./tzm-latn": 481,
	"./tzm-latn.js": 481,
	"./tzm.js": 482,
	"./uk": 483,
	"./uk.js": 483,
	"./uz": 484,
	"./uz.js": 484,
	"./vi": 485,
	"./vi.js": 485,
	"./x-pseudo": 486,
	"./x-pseudo.js": 486,
	"./yo": 487,
	"./yo.js": 487,
	"./zh-cn": 488,
	"./zh-cn.js": 488,
	"./zh-hk": 489,
	"./zh-hk.js": 489,
	"./zh-tw": 490,
	"./zh-tw.js": 490
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
webpackContext.id = 769;


/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = ""

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

module.exports = ""

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "<a href=\"#\"><img src=\"../../assets/webshop%20logo.png\" class=\"img-responsive center-block\" id=\"logo\"/></a>"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"webshop-nav\">\n   <div class=\"navbar-header\">\n     <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\">\n       <span class=\"sr-only\">Toggle navigation</span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n     </button>\n   </div>\n\n   <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n     <ul class=\"nav navbar-nav\">\n       <li><a href=\"#\">Home</a></li>\n       <li><a href=\"#/shop/products\">Produkte</a></li>\n       <li><a href=\"#/shop/register\">Registrierung</a></li>\n     </ul>\n   </div>\n</nav>\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    Panel content\n  </div>\n</div>"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel-group\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Kategorien</h3>\n        </div>\n        <div class=\"panel-body\">\n            Panel content\n        </div>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Filter</h3>\n        </div>\n        <div class=\"panel-body\">\n            Panel content\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 col-sm-4 col-xs-12\">\n    <webshop-navigation></webshop-navigation>\n  </div>\n  <div class=\"col-md-9 col-sm-8 col-xs-12\">\n    <webshop-product-grid></webshop-product-grid>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Registrierung</h2>\n    <form (ngSubmit)=\"register()\">\n        <div class=\"form-group\">\n            <label for=\"firstName\">Vorname</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Nachname</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\">E-Mail</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Passwort</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Registrieren</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping-cart works!\n</p>\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"top-header\">\n  <div class=\"col-xs-12\">\n    <a href=\"login\" class=\"top-header-link\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Mein Konto</a>\n    <a href=\"shopping-cart\" class=\"top-header-link\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Warenkorb <span class=\"badge\">2</span></a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<webshop-top-header></webshop-top-header>\n<webshop-header></webshop-header>\n<webshop-menu></webshop-menu>\n<router-outlet></router-outlet>\n"

/***/ })

},[1085]);
//# sourceMappingURL=main.bundle.map