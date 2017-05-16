webpackJsonp([0,3],{

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(622);


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* unused harmony export Credentials */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Credentials = (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());
var AdminAuthenticationService = (function () {
    function AdminAuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(sessionStorage.getItem('currentAdmin'));
        this.adminToken = currentUser && currentUser.token;
    }
    AdminAuthenticationService.prototype.adminLogin = function (credentials) {
        var _this = this;
        return this.http.post('/api/v1/authentication/admin', credentials)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.text();
            if (token) {
                // set token property
                _this.adminToken = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('currentAdmin', JSON.stringify({ username: credentials.username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AdminAuthenticationService.prototype.adminLogout = function () {
        // clear token remove admin from local storage to log admin out
        this.adminToken = null;
        sessionStorage.removeItem('currentAdmin');
    };
    AdminAuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AdminAuthenticationService);
    return AdminAuthenticationService;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-authentication.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = [];
        for (var i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/pager.service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(850)
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAdminsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminAdminsComponent = (function () {
    function AdminAdminsComponent(adminService) {
        this.adminService = adminService;
        this.admins = [];
    }
    AdminAdminsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllUsers().subscribe(function (data) {
            _this.admins = data;
        }, function (error) {
            console.log(error);
        });
    };
    AdminAdminsComponent.prototype.adminToggle = function (email, e) {
        if (e.target.checked || !e.target.checked) {
            this.adminService.makeAdmin(email).subscribe(function (error) {
                console.log(error);
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AdminAdminsComponent.prototype, "admins", void 0);
    AdminAdminsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-admins',
            template: __webpack_require__(852)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__["a" /* AdminService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__["a" /* AdminService */]) === 'function' && _a) || Object])
    ], AdminAdminsComponent);
    return AdminAdminsComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-admins.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-home',
            template: __webpack_require__(853)
        }), 
        __metadata('design:paramtypes', [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-home.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminItemComponent = (function () {
    function AdminItemComponent(adminService, itemService) {
        this.adminService = adminService;
        this.itemService = itemService;
        this.item = {};
        this.loading = false;
        this.categories = [];
    }
    AdminItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getAllCategories().subscribe(function (data) {
            _this.categories = data;
        }, function (error) {
            console.log(error);
        });
    };
    AdminItemComponent.prototype.create = function () {
        var _this = this;
        this.loading = true;
        this.adminService.createItem(this.item).subscribe(function (data) {
            _this.item = data;
        }, function (error) {
            console.log(error);
        });
        this.uploadFile();
    };
    AdminItemComponent.prototype.uploadFile = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("file", this.userfile, this.userfile.name);
        this.adminService.upload(formData, this.item.name).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AdminItemComponent.prototype.fileChangeEvent = function (event) {
        this.userfile = event.target.files[0];
        console.log(this.userfile);
    };
    AdminItemComponent.prototype.onCategorySelectionChange = function (cat) {
        this.item.category = cat;
    };
    AdminItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-item',
            template: __webpack_require__(854)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__["a" /* AdminService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__["a" /* AdminService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _b) || Object])
    ], AdminItemComponent);
    return AdminItemComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-item.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminItemsetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminItemsetComponent = (function () {
    function AdminItemsetComponent(adminService, itemService) {
        this.adminService = adminService;
        this.itemService = itemService;
        this.item = {};
        this.loading = false;
        this.categories = [];
        this.items = [];
        this.selectedItems = [];
    }
    AdminItemsetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getAllCategories().subscribe(function (data) {
            _this.categories = data;
        }, function (error) {
            console.log(error);
        });
        this.itemService.getAllItems().subscribe(function (data) {
            _this.items = data;
        }, function (error) {
            console.log(error);
        });
    };
    AdminItemsetComponent.prototype.createItemset = function () {
        var _this = this;
        this.loading = true;
        this.item.items = this.selectedItems;
        this.adminService.createItemset(this.item).subscribe(function (data) {
            _this.item = data;
        }, function (error) {
            console.log(error);
        });
        this.uploadFile();
    };
    AdminItemsetComponent.prototype.uploadFile = function () {
        this.loading = true;
        var formData = new FormData();
        formData.append("file", this.userfile, this.userfile.name);
        this.adminService.upload(formData, this.item.name).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AdminItemsetComponent.prototype.fileChangeEvent = function (event) {
        this.userfile = event.target.files[0];
        console.log(this.userfile);
    };
    AdminItemsetComponent.prototype.onCategorySelectionChange = function (cat) {
        this.item.category = cat;
    };
    AdminItemsetComponent.prototype.onItemSelect = function (item, event) {
        if (event.target.checked) {
            this.selectedItems.push(item);
        }
        else {
            var index = this.selectedItems.indexOf(item);
            if (index > -1) {
                this.selectedItems.splice(index, 1);
            }
        }
    };
    AdminItemsetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-itemset',
            template: __webpack_require__(855)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__["a" /* AdminService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_admin_service__["a" /* AdminService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _b) || Object])
    ], AdminItemsetComponent);
    return AdminItemsetComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-itemset.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_admin_authentication_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLoginComponent = (function () {
    function AdminLoginComponent(route, router, adminAuthService) {
        this.route = route;
        this.router = router;
        this.adminAuthService = adminAuthService;
        this.model = {};
        this.loading = false;
        this.loginFailed = false;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.adminAuthService.adminLogout();
        // get return url from route parameters or default to '/admin'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    };
    AdminLoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.adminAuthService.adminLogin(new __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_authentication_service__["b" /* Credentials */](this.model.email, this.model.password))
            .subscribe(function (data) {
            _this.loginFailed = false;
            _this.loading = false;
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.loading = false;
            _this.loginFailed = true;
        });
    };
    AdminLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-login',
            template: __webpack_require__(856)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_admin_authentication_service__["a" /* AdminAuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_admin_authentication_service__["a" /* AdminAuthenticationService */]) === 'function' && _c) || Object])
    ], AdminLoginComponent);
    return AdminLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-login.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_admin_admin_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminManageComponent = (function () {
    function AdminManageComponent(pagerService, itemsService, adminService, router) {
        this.pagerService = pagerService;
        this.itemsService = itemsService;
        this.adminService = adminService;
        this.router = router;
        this.items = [];
        this.filteredItems = [];
        this.pager = {};
        this.pageSize = 30;
        this.artNrFilter = "";
    }
    AdminManageComponent.prototype.ngOnInit = function () {
        this.getAllItems();
    };
    AdminManageComponent.prototype.getAllItems = function () {
        var _this = this;
        this.itemsService.getAllItems().subscribe(function (data) {
            _this.items = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](data, ['article_number'], ['asc']);
            _this.filteredItems = _this.items;
            _this.setPage(1);
        });
    };
    AdminManageComponent.prototype.applyFilter = function (filter) {
        var _this = this;
        this.artNrFilter = filter;
        if (this.artNrFilter !== "") {
            this.filteredItems = this.items.filter(function (item) { return item.articleNumber.toString().startsWith(_this.artNrFilter); });
        }
        else {
            this.filteredItems = this.items;
        }
        this.setPage(1);
    };
    AdminManageComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.filteredItems.length, page, this.pageSize);
        // get current page of items
        this.pagedItems = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    AdminManageComponent.prototype.onPageChange = function (event) {
        this.setPage(event.page);
    };
    AdminManageComponent.prototype.editItem = function (itemId) {
        this.router.navigate([("/admin/manage/item/" + itemId)]);
        //this.router.navigate([`/admin/manage/set/${itemId}`]);
    };
    AdminManageComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        this.adminService.deleteItem(itemId).subscribe(function (data) {
            _this.getAllItems();
        });
    };
    AdminManageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-manage',
            template: __webpack_require__(857)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__["a" /* PagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__["a" /* PagerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_admin_admin_service__["a" /* AdminService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_admin_admin_service__["a" /* AdminService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], AdminManageComponent);
    return AdminManageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-manage.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemSetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditItemSetComponent = (function () {
    function EditItemSetComponent() {
    }
    EditItemSetComponent.prototype.ngOnInit = function () {
    };
    EditItemSetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-item-set',
            template: __webpack_require__(858)
        }), 
        __metadata('design:paramtypes', [])
    ], EditItemSetComponent);
    return EditItemSetComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/edit-item-set.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_admin_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditItemComponent = (function () {
    function EditItemComponent(route, itemsService, adminService) {
        this.route = route;
        this.itemsService = itemsService;
        this.adminService = adminService;
        this.item = {};
    }
    EditItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to id parameter in URL and get item details
        this.route.params.subscribe(function (param) {
            _this.itemId = param['id'];
            _this.getItemDetails();
        });
    };
    EditItemComponent.prototype.getItemDetails = function () {
        var _this = this;
        this.itemsService.getItemDetails(this.itemId).subscribe(function (data) {
            _this.item = data;
            _this.item.description = _this.item.description.replace(/\n/g, "<br />");
        });
    };
    EditItemComponent.prototype.editItem = function () {
    };
    EditItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-item',
            template: __webpack_require__(859)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_admin_service__["a" /* AdminService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_admin_service__["a" /* AdminService */]) === 'function' && _c) || Object])
    ], EditItemComponent);
    return EditItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/edit-item.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminAuthGuard = (function () {
    function AdminAuthGuard(router) {
        this.router = router;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        if (sessionStorage.getItem('currentAdmin')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/admin/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AdminAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AdminAuthGuard);
    return AdminAuthGuard;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-authguard.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsService = (function () {
    function ItemsService(http) {
        this.http = http;
        this.selectedChildCategory = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.selectedFilters = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    ItemsService.prototype.getItemsInCategory = function (catId) {
        return this.http.get("/api/v1/items/" + catId).map(function (response) { return response.json(); });
    };
    ItemsService.prototype.getParentCategories = function () {
        return this.http.get("/api/v1/items/categories").map(function (response) { return response.json(); });
    };
    ItemsService.prototype.getCategory = function (catId) {
        return this.http.get("/api/v1/items/category/" + catId).map(function (response) { return response.json(); });
    };
    ItemsService.prototype.getAllCategories = function () {
        return this.http.get('/api/v1/items/categories/all').map(function (response) { return response.json(); });
    };
    ItemsService.prototype.getAllItems = function () {
        return this.http.get('/api/v1/items/categories/allItems').map(function (response) { return response.json(); });
    };
    ItemsService.prototype.getItemDetails = function (itemId) {
        return this.http.get("/api/v1/items/details/" + itemId).map(function (response) { return response.json(); });
    };
    ItemsService.prototype.selectChildCategory = function (catId) {
        this.selectedChildCategory.next(catId);
    };
    ItemsService.prototype.setFilters = function (selectedFilters) {
        //Emit Event with all selected filters
        this.selectedFilters.next(selectedFilters);
    };
    ItemsService.prototype.getImage = function (itemId) {
        return this.http.get("/api/v1/items/images/" + itemId).map(function (response) { return response.text(); });
    };
    ItemsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ItemsService);
    return ItemsService;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/items.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
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
        if (sessionStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/shop/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/authguard.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_reset_password__ = __webpack_require__(746);
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
    function AccountComponent(authenticationService, userService, shoppincartService, router) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.shoppincartService = shoppincartService;
        this.router = router;
        this.gender = [{ id: 'FEMALE', text: 'Frau' },
            { id: 'MALE', text: 'Herr' }];
        this.user = {};
        this.billingAddress = {};
        this.shippingAddress = {};
        this.changeEmail = false;
        this.changePassword = false;
        this.changePWFailed = false;
        this.changePWSuccess = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    AccountComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.shoppincartService.resetItemCount();
        this.router.navigate(['']);
    };
    AccountComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.user = data;
            _this.billingAddress = _this.user.billingAddress;
            _this.shippingAddress = _this.user.shippingAddress;
        });
    };
    AccountComponent.prototype.changePW = function () {
        var _this = this;
        var resetPassword = new __WEBPACK_IMPORTED_MODULE_5__shared_models_reset_password__["a" /* ResetPassword */](this.previousPassword, this.newPassword, this.user.email);
        this.userService.changePassword(resetPassword).subscribe(function (data) {
            _this.changePWSuccess = true;
            _this.resetPWInputs();
        }, function (error) {
            _this.changePWFailed = true;
            _this.resetPWInputs();
        });
    };
    AccountComponent.prototype.cancelChangePassword = function () {
        this.changePassword = false;
        this.resetPWInputs();
    };
    AccountComponent.prototype.resetPWInputs = function () {
        this.previousPassword = '';
        this.newPassword = '';
    };
    AccountComponent.prototype.changeEmailAddr = function () {
    };
    AccountComponent.prototype.cancelChangeEmail = function () {
        this.changeEmail = false;
        this.newEmail = '';
    };
    AccountComponent.prototype.changeAddress = function (type) {
        this.userService.currentShippingAddress = this.shippingAddress;
        this.userService.currentBillingAddress = this.billingAddress;
        this.router.navigate(['/shop/change-address'], { queryParams: { type: type } });
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-account',
            template: __webpack_require__(866)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/account.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeAddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeAddressComponent = (function () {
    function ChangeAddressComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.address = {};
        this.gender = [{ id: 'FEMALE', text: 'Frau' },
            { id: 'MALE', text: 'Herr' }];
        this.activeGender = [{ id: 'FEMALE', text: 'Frau' }];
    }
    ChangeAddressComponent.prototype.ngOnInit = function () {
        //Get address type from route params
        this.addressType = this.route.snapshot.queryParams['type'];
        //Get current address from user service
        if (this.addressType == "billing") {
            this.address = this.userService.currentBillingAddress;
        }
        else if (this.addressType == "shipping") {
            this.address = this.userService.currentShippingAddress;
        }
        if (this.address.gender === "MALE") {
            this.activeGender = [{ id: 'MALE', text: 'Herr' }];
        }
    };
    ChangeAddressComponent.prototype.changeAddress = function () {
        var _this = this;
        if (this.address.gender == null) {
            this.address.gender = "FEMALE";
        }
        this.userService.changeAddress(this.address, this.addressType).subscribe(function (data) {
            _this.router.navigate(['/shop/account'], { queryParams: { successAddrChange: _this.addressType } });
        });
    };
    ChangeAddressComponent.prototype.setAddrGender = function (value) {
        this.address.gender = value.id;
    };
    ChangeAddressComponent.prototype.cancelChangeAddr = function () {
        this.router.navigate(['/shop/account']);
    };
    ChangeAddressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-change-address',
            template: __webpack_require__(867)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], ChangeAddressComponent);
    return ChangeAddressComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/change-address.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
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
    function LoginComponent(route, router, authenticationService, shoppincartService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.shoppincartService = shoppincartService;
        this.model = {};
        this.loading = false;
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.shoppincartService.getItemCount();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(new __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_authentication_service__["b" /* Credentials */](this.model.email, this.model.password))
            .subscribe(function (data) {
            _this.loginFailed = false;
            if (_this.shoppincartService.tempItemStore != null) {
                _this.shoppincartService.addItemToShoppingCart(_this.shoppincartService.tempItemStore);
            }
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.loading = false;
            _this.loginFailed = true;
        });
    };
    LoginComponent.prototype.registerRedirect = function () {
        this.router.navigate(['/shop/register'], { queryParams: { returnUrl: this.returnUrl } });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-login',
            template: __webpack_require__(868)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/login.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_user_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailsComponent = (function () {
    function OrderDetailsComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.order = {};
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to id parameter in URL and get order details
        this.route.params.subscribe(function (param) {
            _this.orderId = param['id'];
            _this.getOrder();
        });
    };
    OrderDetailsComponent.prototype.getOrder = function () {
        var _this = this;
        this.userService.getOrder(this.orderId).subscribe(function (data) {
            _this.order = data;
            _this.calculateTotal();
        });
    };
    OrderDetailsComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.order.items.forEach(function (i) {
            _this.total = _this.total + (i.item.price * i.quantity);
        });
    };
    OrderDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(869)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/order-details.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgbComponent = (function () {
    function AgbComponent() {
    }
    AgbComponent.prototype.ngOnInit = function () {
    };
    AgbComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agb',
            template: __webpack_require__(872)
        }), 
        __metadata('design:paramtypes', [])
    ], AgbComponent);
    return AgbComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/agb.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_user_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderConfirmationComponent = (function () {
    function OrderConfirmationComponent(shoppingCartService, router, userService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.router = router;
        this.userService = userService;
        this.shoppingCart = {
            items: []
        };
        this.billingAddress = {};
        this.shippingAddress = {};
        this.allGood = true;
        this.unavailable = [];
        this.unavailableMessage = "";
        this.shoppingCartService.shoppingCartUpdate.subscribe(function (data) {
            _this.shoppingCart = data;
        });
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCartService.getShoppingCart();
        this.userService.getUserInfo().subscribe(function (user) {
            _this.billingAddress = user.billingAddress;
            _this.shippingAddress = user.shippingAddress;
        });
    };
    OrderConfirmationComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.total = 0;
        this.shoppingCart.items.forEach(function (i) {
            _this.total = _this.total + (i.item.price * i.quantity);
        });
    };
    OrderConfirmationComponent.prototype.preOrderAvailabilityCheck = function () {
        var _this = this;
        this.unavailableMessage = "";
        this.unavailable = [];
        this.shoppingCart.items.forEach(function (i) {
            if (i.item.stock < i.quantity) {
                _this.allGood = false;
                _this.unavailable.push({ item: i.item, quantity: i.item.stock });
            }
        });
        if (this.allGood) {
            this.placeOrder();
        }
        else {
            this.unavailable.forEach(function (i) {
                _this.unavailableMessage += "Der Artikel " + i.item.name + " ist nur noch " + i.quantity + " mal verfügbar.<br>";
            });
        }
    };
    OrderConfirmationComponent.prototype.placeOrder = function () {
        var _this = this;
        this.shoppingCartService.placeOrder().subscribe(function (data) {
            _this.router.navigate(['/shop/order-success']);
        }, function (error) {
        });
    };
    OrderConfirmationComponent.prototype.changeAddress = function (type) {
        this.router.navigate(['/shop/change-address'], { queryParams: { type: type } });
    };
    OrderConfirmationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-confirmation',
            template: __webpack_require__(874)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/order-confirmation.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(875)
        }), 
        __metadata('design:paramtypes', [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/order-success.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
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
    function ShoppingCartComponent(shoppingCartService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.shoppingCart = {
            items: []
        };
        this.shoppingCartService.shoppingCartUpdate.subscribe(function (data) {
            _this.shoppingCart = data;
        });
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCartService.getShoppingCart();
        this.total = 0;
        this.shoppingCart.items.forEach(function (i) {
            _this.total = _this.total + (i.item.price * i.quantity);
        });
    };
    ShoppingCartComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.total = 0;
        this.shoppingCart.items.forEach(function (i) {
            _this.total = _this.total + (i.item.price * i.quantity);
        });
    };
    ShoppingCartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-shopping-cart',
            template: __webpack_require__(876)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _a) || Object])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/shopping-cart.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImprintComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImprintComponent = (function () {
    function ImprintComponent() {
    }
    ImprintComponent.prototype.ngOnInit = function () {
    };
    ImprintComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-imprint',
            template: __webpack_require__(878)
        }), 
        __metadata('design:paramtypes', [])
    ], ImprintComponent);
    return ImprintComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/imprint.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SafePipeUrl; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemDetailsComponent = (function () {
    function ItemDetailsComponent(route, itemsService, shoppingCartService) {
        this.route = route;
        this.itemsService = itemsService;
        this.shoppingCartService = shoppingCartService;
        this.item = {};
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to id parameter in URL and get item details
        this.route.params.subscribe(function (param) {
            _this.itemId = param['id'];
            _this.getItemDetails();
        });
    };
    ItemDetailsComponent.prototype.getItemDetails = function () {
        var _this = this;
        this.itemsService.getItemDetails(this.itemId).subscribe(function (data) {
            _this.item = data;
            _this.item.description = _this.item.description.replace(/\n/g, "<br />");
        });
    };
    ItemDetailsComponent.prototype.addToCart = function (item) {
        var scItem = {
            item: item,
            quantity: 1
        };
        this.shoppingCartService.addItemToShoppingCart(scItem.item);
    };
    ItemDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-item-details',
            template: __webpack_require__(879)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _c) || Object])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
    var _a, _b, _c;
}());
var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
var SafePipeUrl = (function () {
    function SafePipeUrl(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipeUrl.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustUrl(style);
    };
    SafePipeUrl = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeUrl' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], SafePipeUrl);
    return SafePipeUrl;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/item-details.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_sidebar_model_sidebar_filter__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_sidebar_model_filter_option__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemsComponent = (function () {
    function ItemsComponent(route, itemsService) {
        this.route = route;
        this.itemsService = itemsService;
        this.category = { name: '' };
        this.items = [];
        this.categories = [];
        this.selectedFilters = [];
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Subscribe to id parameter in URL and get items
        this.route.params.subscribe(function (param) {
            _this.categoryId = param['id'];
            if (param['childId'] != null) {
                _this.childCategoryId = param['childId'];
                _this.getItemsinCategory(_this.childCategoryId);
            }
            else {
                _this.getItemsinCategory(_this.categoryId);
            }
            _this.getCategory();
        });
        //subscribe to filter changes
        this.itemsService.selectedFilters.subscribe(function (selFilters) {
            _this.selectedFilters = selFilters;
        });
    };
    ItemsComponent.prototype.getItemsinCategory = function (catId) {
        var _this = this;
        this.itemsService.getItemsInCategory(catId).subscribe(function (data) {
            _this.items = data;
            _this.getFilters();
        }, function (error) {
        });
    };
    ItemsComponent.prototype.getCategory = function () {
        var _this = this;
        this.itemsService.getCategory(this.categoryId).subscribe(function (data) {
            _this.category = data;
            _this.categories = _this.category.childrenCategories;
        }, function (error) {
            console.log(error);
        });
    };
    ItemsComponent.prototype.getFilters = function () {
        var _this = this;
        this.filters = [];
        var brands = [];
        var colors = [];
        var materials = [];
        //for all items fetch available brands, colors and materials to use in the sidebar filter
        this.items.forEach(function (i) {
            if (i.brand != null && __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](brands, { name: i.brand }) === -1) {
                var selBrand = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](_this.selectedFilters, { name: i.brand, filter: 'brand' })[0];
                if (selBrand != null) {
                    brands.push(selBrand);
                }
                else {
                    brands.push(new __WEBPACK_IMPORTED_MODULE_3__item_sidebar_model_filter_option__["a" /* FilterOption */](i.brand, "brand"));
                }
            }
            if (i.color != null && __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](colors, { name: i.color }) === -1) {
                var selColor = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](_this.selectedFilters, { name: i.color, filter: 'color' })[0];
                if (selColor != null) {
                    colors.push(selColor);
                }
                else {
                    colors.push(new __WEBPACK_IMPORTED_MODULE_3__item_sidebar_model_filter_option__["a" /* FilterOption */](i.color, "color"));
                }
            }
            if (i.material != null && __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](materials, { name: i.material }) === -1) {
                var selMaterial = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](_this.selectedFilters, { name: i.material, filter: 'material' })[0];
                if (selMaterial != null) {
                    materials.push(selMaterial);
                }
                else {
                    materials.push(new __WEBPACK_IMPORTED_MODULE_3__item_sidebar_model_filter_option__["a" /* FilterOption */](i.material, "material"));
                }
            }
        });
        this.filters.push(new __WEBPACK_IMPORTED_MODULE_2__item_sidebar_model_sidebar_filter__["a" /* SideBarFilter */]("Marke", brands), new __WEBPACK_IMPORTED_MODULE_2__item_sidebar_model_sidebar_filter__["a" /* SideBarFilter */]("Farbe", colors), new __WEBPACK_IMPORTED_MODULE_2__item_sidebar_model_sidebar_filter__["a" /* SideBarFilter */]("Material", materials));
    };
    ItemsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'items',
            template: __webpack_require__(882)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _b) || Object])
    ], ItemsComponent);
    return ItemsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/items.component.js.map

/***/ }),

/***/ 402:
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
        this.storeShoppingCart();
    };
    WebshopComponent.prototype.storeShoppingCart = function () {
        var shoppingCart = {
            items: [
                {
                    item: {
                        i_id: 3,
                        name: 'Noodles grün',
                        dtype: 'single',
                        articleNumber: 123,
                        stock: 123,
                        category: {
                            c_id: 1,
                            name: 'Stricken',
                            description: 'Stricknadeln und Zubehör'
                        },
                        description: 'Textilgarn (Baumwolle)',
                        price: 12.5,
                        pictureLink: 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg',
                        brand: 'Stafil',
                        color: 'grün',
                        weight: 400,
                        material: 'Baumwolle'
                    },
                    quantity: 1
                },
                {
                    item: {
                        i_id: 3,
                        name: 'Noodles grün',
                        dtype: 'single',
                        articleNumber: 123,
                        stock: 123,
                        category: {
                            c_id: 1,
                            name: 'Stricken',
                            description: 'Stricknadeln und Zubehör'
                        },
                        description: 'Textilgarn (Baumwolle)',
                        price: 12.5,
                        pictureLink: 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg',
                        brand: 'Stafil',
                        color: 'grün',
                        weight: 400,
                        material: 'Baumwolle'
                    },
                    quantity: 1
                }
            ]
        };
        if (localStorage.getItem('shopping-cart') === null) {
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    };
    WebshopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-webshop',
            template: __webpack_require__(884)
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopComponent);
    return WebshopComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/webshop.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartService = (function () {
    function ShoppingCartService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.shoppingCart = {
            items: []
        };
        this.shoppingCartUpdate = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](this.shoppingCart);
        this.itemCountUpdate = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](0);
        this.tempItemStore = null;
        this.itemCount = 0;
    }
    ShoppingCartService.prototype.getShoppingCart = function () {
        var _this = this;
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.get("/api/v1/shopping-cart", options).map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.shoppingCart = data;
            _this.shoppingCart.items = __WEBPACK_IMPORTED_MODULE_4_lodash__["sortBy"](_this.shoppingCart.items, ['iq_id']);
            _this.shoppingCartUpdate.next(_this.shoppingCart);
        }, function (error) {
            console.log(error);
        });
    };
    ShoppingCartService.prototype.addItemToShoppingCart = function (item) {
        var _this = this;
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post("/api/v1/shopping-cart/new-item", item, options).map(function (response) { return response.text(); })
            .subscribe(function (data) {
            _this.getItemCount();
        });
    };
    ShoppingCartService.prototype.tempStoreItem = function (item) {
        this.tempItemStore = item;
    };
    ShoppingCartService.prototype.removeItemFromShoppingCart = function (itemId) {
        var _this = this;
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.delete("/api/v1/shopping-cart/" + itemId, options).map(function (response) { return response.text(); })
            .subscribe(function (data) {
            _this.getItemCount();
        });
    };
    ShoppingCartService.prototype.updateItemQuantity = function (itemId, quantity) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post("/api/v1/shopping-cart/quantity/" + itemId, quantity, options).map(function (response) { return response.text(); })
            .subscribe(function (data) {
        }, function (error) {
        });
    };
    ShoppingCartService.prototype.placeOrder = function () {
        var _this = this;
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put("/api/v1/shopping-order", this.shoppingCart, options).map(function (response) {
            if (response.ok) {
                _this.getItemCount();
            }
            return response.text();
        });
    };
    ShoppingCartService.prototype.getItemCount = function () {
        var _this = this;
        if (this.authenticationService.token != null) {
            // add authorization header with jwt token
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            this.http.get('/api/v1/shopping-cart/count', options)
                .map(function (response) { return response.text(); })
                .subscribe(function (data) {
                _this.itemCount = Number(data);
                _this.itemCountUpdate.next(_this.itemCount);
            });
        }
    };
    ShoppingCartService.prototype.resetItemCount = function () {
        this.itemCount = 0;
        this.itemCountUpdate.next(this.itemCount);
    };
    ShoppingCartService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], ShoppingCartService);
    return ShoppingCartService;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/shopping-cart.service.js.map

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 621;


/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polyfills__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(743);



//enableProdMode();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/main.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Credentials; });
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


var Credentials = (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post('/api/v1/authentication/user', credentials)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.text();
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('currentUser', JSON.stringify({ username: credentials.username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        sessionStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/authentication.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__(72);
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
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.create = function (user) {
        return this.http.put('/api/v1/user/register', user).map(function (response) { return response.text(); });
    };
    UserService.prototype.getUserInfo = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/v1/user/profile', options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.changePassword = function (resetPassword) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/api/v1/user/profile/password', resetPassword, options).map(function (response) { return response.text(); });
    };
    UserService.prototype.changeAddress = function (newAddress, type) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post("/api/v1/user/profile/" + type, newAddress, options);
    };
    UserService.prototype.getUserOrders = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/v1/shopping-order', options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getOrder = function (orderId) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get("/api/v1/shopping-order/" + orderId, options)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/user.service.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_login_admin_login_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_home_admin_home_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_admin_nav_component__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_item_admin_item_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_admin_admin_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_admins_admin_admins_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_itemset_admin_itemset_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_admin_manage_admin_manage_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_manage_edit_item_edit_item_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_manage_edit_item_set_edit_item_set_component__ = __webpack_require__(387);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__admin_routing__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["c" /* PaginationModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_routing__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_admin_login_admin_login_component__["a" /* AdminLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_admin_nav_component__["a" /* AdminNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_item_admin_item_component__["a" /* AdminItemComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_itemset_admin_itemset_component__["a" /* AdminItemsetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_admin_manage_admin_manage_component__["a" /* AdminManageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admins_admin_admins_component__["a" /* AdminAdminsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_manage_edit_item_edit_item_component__["a" /* EditItemComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_manage_edit_item_set_edit_item_set_component__["a" /* EditItemSetComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: "de-DE" },
                __WEBPACK_IMPORTED_MODULE_10__shared_services_admin_admin_service__["a" /* AdminService */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_admin_home_admin_home_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_admin_item_admin_item_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_admins_admin_admins_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_authentication_admin_authguard__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_login_admin_login_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_itemset_admin_itemset_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_manage_admin_manage_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_manage_edit_item_edit_item_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_manage_edit_item_set_edit_item_set_component__ = __webpack_require__(387);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
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
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_admin_home_admin_home_component__["a" /* AdminHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_services_authentication_admin_authguard__["a" /* AdminAuthGuard */]] },
            { path: 'new-item', component: __WEBPACK_IMPORTED_MODULE_4__pages_admin_item_admin_item_component__["a" /* AdminItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_services_authentication_admin_authguard__["a" /* AdminAuthGuard */]] },
            { path: 'new-set', component: __WEBPACK_IMPORTED_MODULE_8__pages_admin_itemset_admin_itemset_component__["a" /* AdminItemsetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_services_authentication_admin_authguard__["a" /* AdminAuthGuard */]] },
            { path: 'manage', component: __WEBPACK_IMPORTED_MODULE_9__pages_admin_manage_admin_manage_component__["a" /* AdminManageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_services_authentication_admin_authguard__["a" /* AdminAuthGuard */]] },
            { path: 'manage/item/:id', component: __WEBPACK_IMPORTED_MODULE_10__pages_admin_manage_edit_item_edit_item_component__["a" /* EditItemComponent */] },
            { path: 'manage/set/:id', component: __WEBPACK_IMPORTED_MODULE_11__pages_admin_manage_edit_item_set_edit_item_set_component__["a" /* EditItemSetComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__pages_admin_admins_admin_admins_component__["a" /* AdminAdminsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_services_authentication_admin_authguard__["a" /* AdminAuthGuard */]] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__pages_admin_login_admin_login_component__["a" /* AdminLoginComponent */] }
        ]
    },
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__pages_admin_home_admin_home_component__["a" /* AdminHomeComponent */], __WEBPACK_IMPORTED_MODULE_4__pages_admin_item_admin_item_component__["a" /* AdminItemComponent */], __WEBPACK_IMPORTED_MODULE_5__pages_admin_admins_admin_admins_component__["a" /* AdminAdminsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__pages_admin_login_admin_login_component__["a" /* AdminLoginComponent */], __WEBPACK_IMPORTED_MODULE_8__pages_admin_itemset_admin_itemset_component__["a" /* AdminItemsetComponent */], __WEBPACK_IMPORTED_MODULE_9__pages_admin_manage_admin_manage_component__["a" /* AdminManageComponent */]];
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin.routing.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_admin_authentication_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminNavigationComponent = (function () {
    function AdminNavigationComponent(adminAuthService) {
        this.adminAuthService = adminAuthService;
    }
    AdminNavigationComponent.prototype.ngOnInit = function () {
    };
    AdminNavigationComponent.prototype.logout = function () {
        this.adminAuthService.adminLogout();
    };
    AdminNavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-nav',
            template: __webpack_require__(851)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_admin_authentication_service__["a" /* AdminAuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_admin_authentication_service__["a" /* AdminAuthenticationService */]) === 'function' && _a) || Object])
    ], AdminNavigationComponent);
    return AdminNavigationComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin-nav.component.js.map

/***/ }),

/***/ 742:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(860),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/app.component.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_shop_user_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webshop_webshop_module__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_authentication_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_authentication_authguard__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_shop_pager_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_module__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_authentication_admin_authguard__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_authentication_admin_authentication_service__ = __webpack_require__(164);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__webshop_webshop_module__["a" /* WebshopModule */],
                __WEBPACK_IMPORTED_MODULE_14__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["a" /* CollapseModule */].forRoot()
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: "de-DE" },
                __WEBPACK_IMPORTED_MODULE_10__shared_services_authentication_authguard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_15__shared_services_authentication_admin_authguard__["a" /* AdminAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_authentication_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_authentication_admin_authentication_service__["a" /* AdminAuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_shop_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_services_shop_pager_service__["a" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_shop_items_service__["a" /* ItemsService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/app.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var appRoutes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'admin', redirectTo: '/admin', pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/app.routing.js.map

/***/ }),

/***/ 745:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-header',
            template: __webpack_require__(861)
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/header.component.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassword; });
var ResetPassword = (function () {
    function ResetPassword(previousPassword, newPassword, email) {
        this.previousPassword = previousPassword;
        this.newPassword = newPassword;
        this.email = email;
    }
    return ResetPassword;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/reset-password.js.map

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/category.js.map

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/shopping-cart.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shop_category__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shop_category___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_shop_category__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeCategoryComponent = (function () {
    function TreeCategoryComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.expanded = false;
        //Subscribe to id parameter in URL and get items
        this.route.params.subscribe(function (param) {
            _this.rootCategoryId = param['id'];
        });
    }
    TreeCategoryComponent.prototype.ngOnInit = function () {
    };
    TreeCategoryComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    TreeCategoryComponent.prototype.selectChildCategory = function (catId) {
        this.router.navigate([("/shop/category/" + this.rootCategoryId + "/" + catId)]);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_shop_category__["Category"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_shop_category__["Category"]) === 'function' && _a) || Object)
    ], TreeCategoryComponent.prototype, "category", void 0);
    TreeCategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tree-category',
            template: __webpack_require__(862)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], TreeCategoryComponent);
    return TreeCategoryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/tree-category.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeViewComponent = (function () {
    function TreeViewComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TreeViewComponent.prototype, "categories", void 0);
    TreeViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tree-view',
            template: __webpack_require__(863)
        }), 
        __metadata('design:paramtypes', [])
    ], TreeViewComponent);
    return TreeViewComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/tree-view.component.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-footer',
            template: __webpack_require__(864)
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/footer.component.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_items_service__ = __webpack_require__(39);
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
    function MenuComponent(itemsService) {
        this.itemsService = itemsService;
        this.isCollapsed = true;
        this.parentCategories = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getParentCategories().subscribe(function (data) {
            _this.parentCategories = data;
        });
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-menu',
            template: __webpack_require__(865)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _a) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/menu.component.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderHistoryComponent = (function () {
    function OrderHistoryComponent(pagerService, userService, ngZone) {
        var _this = this;
        this.pagerService = pagerService;
        this.userService = userService;
        this.ngZone = ngZone;
        this.orders = [];
        this.pager = {};
        this.pageSize = 3;
        window.onresize = function (e) {
            //ngZone.run will help to run change detection
            _this.ngZone.run(function () {
                _this.innerWidth = window.innerWidth;
            });
        };
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        this.getUserOrders();
        this.innerWidth = window.innerWidth;
    };
    OrderHistoryComponent.prototype.getUserOrders = function () {
        var _this = this;
        this.userService.getUserOrders().subscribe(function (data) {
            _this.orders = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](data, ['date'], ['desc']);
            _this.setPage(1);
        });
    };
    OrderHistoryComponent.prototype.openOrder = function (orderId) {
    };
    OrderHistoryComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.orders.length, page, this.pageSize);
        // get current page of items
        this.pagedOrders = this.orders.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    OrderHistoryComponent.prototype.onPageChange = function (event) {
        this.setPage(event.page);
    };
    OrderHistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'order-history',
            template: __webpack_require__(870)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__["a" /* PagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__["a" /* PagerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _c) || Object])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/order-history.component.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_user_service__ = __webpack_require__(73);
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
    function RegisterComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = {};
        this.loading = false;
        this.gender = [{ id: 'FEMALE', text: 'Frau' },
            { id: 'MALE', text: 'Herr' }];
        this.diffAddress = false;
        this.billingAddress = {};
        this.shippingAddress = {};
        this.datepicker = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        if (this.user.gender == null) {
            this.user.gender = "FEMALE";
        }
        this.setAddress();
        this.userService.create(this.user)
            .subscribe(function (data) {
            _this.loading = false;
            _this.router.navigate(['/shop/login'], { queryParams: { returnUrl: _this.returnUrl } });
        }, function (error) {
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.showDatepicker = function () {
        this.datepicker = true;
    };
    RegisterComponent.prototype.hideDatepicker = function () {
        this.user.dateOfBirth =
            this.datepicker = false;
    };
    RegisterComponent.prototype.setGender = function (value) {
        this.user.gender = value.id;
    };
    RegisterComponent.prototype.setAddrGender = function (value) {
        this.shippingAddress.gender = value.id;
    };
    RegisterComponent.prototype.setAddress = function () {
        this.billingAddress.gender = this.user.gender;
        this.billingAddress.firstName = this.user.firstName;
        this.billingAddress.lastName = this.user.lastName;
        //If different address for shipping is given, add to user, else add billing address as shipping address too
        if (!this.diffAddress) {
            Object.assign(this.shippingAddress, this.billingAddress);
        }
        this.user.billingAddress = this.billingAddress;
        this.user.shippingAddress = this.shippingAddress;
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-register',
            template: __webpack_require__(871)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/register.component.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_shop_shopping_cart__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_shop_shopping_cart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shared_models_shop_shopping_cart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartItemsComponent = (function () {
    function CartItemsComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CartItemsComponent.prototype.removeItem = function (itemq) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["remove"](this.shoppingCart.items, itemq);
        this.shoppingCartService.removeItemFromShoppingCart(itemq.item.i_id);
    };
    CartItemsComponent.prototype.addOne = function (itemId) {
        var newQuantity = 0;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.shoppingCart.items, function (scItem) {
            if (scItem.item.i_id === itemId) {
                scItem.quantity++;
                newQuantity = scItem.quantity;
            }
            return scItem;
        });
        this.shoppingCartService.updateItemQuantity(itemId, newQuantity);
    };
    CartItemsComponent.prototype.removeOne = function (itemId) {
        var newQuantity = 0;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.shoppingCart.items, function (scItem) {
            if (scItem.item.i_id === itemId) {
                if (scItem.quantity > 1) {
                    scItem.quantity--;
                    newQuantity = scItem.quantity;
                }
            }
            return scItem;
        });
        this.shoppingCartService.updateItemQuantity(itemId, newQuantity);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_shop_shopping_cart__["ShoppingCart"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_models_shop_shopping_cart__["ShoppingCart"]) === 'function' && _a) || Object)
    ], CartItemsComponent.prototype, "shoppingCart", void 0);
    CartItemsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-cart-items',
            template: __webpack_require__(873)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _b) || Object])
    ], CartItemsComponent);
    return CartItemsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/cart-items.component.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(171);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(877),
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["g" /* CarouselConfig */], useValue: { interval: 10000, noPause: true } }]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/home.component.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_authentication_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItemsGridComponent = (function () {
    function ItemsGridComponent(pagerService, shoppingCartService, itemsService, authenticationService, router) {
        this.pagerService = pagerService;
        this.shoppingCartService = shoppingCartService;
        this.itemsService = itemsService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.items = [];
        this.selectedFilters = [];
        this.filteredItems = [];
        this.pager = {};
        this.pageSize = 6;
        var state = router.routerState;
        var snapshot = state.snapshot;
        this.snapshot = snapshot;
    }
    ItemsGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.filteredItems = this.items;
        this.itemsService.selectedFilters.subscribe(function (selectedFilters) {
            _this.selectedFilters = selectedFilters;
            //check if there are any filters selected
            if (_this.selectedFilters.length > 0) {
                _this.applyFilters();
            }
            else {
                _this.resetFilters();
            }
        });
    };
    ItemsGridComponent.prototype.ngOnChanges = function () {
        this.resetFilters();
    };
    ItemsGridComponent.prototype.applyFilters = function () {
        var _this = this;
        this.filteredItems = [];
        var brandFilters = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.selectedFilters, { filter: 'brand' });
        var colorFilters = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.selectedFilters, { filter: 'color' });
        var materialFilters = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.selectedFilters, { filter: 'material' });
        //search for items that match the filters
        this.items.forEach(function (i) {
            var brandMatch = true;
            var colorMatch = true;
            var materialMatch = true;
            if (brandFilters.length > 0) {
                brandMatch = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](brandFilters, { name: i.brand }).length > 0;
            }
            if (colorFilters.length > 0) {
                colorMatch = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](colorFilters, { name: i.color }).length > 0;
            }
            if (materialFilters.length > 0) {
                materialMatch = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](materialFilters, { name: i.material }).length > 0;
            }
            //Only show elements that match all filters 
            if (brandMatch && colorMatch && materialMatch) {
                _this.filteredItems.push(i);
            }
        });
        this.setPage(1);
    };
    ItemsGridComponent.prototype.resetFilters = function () {
        this.filteredItems = this.items;
        this.setPage(1);
    };
    ItemsGridComponent.prototype.setPageSize = function (size) {
        this.pageSize = size; //not used
    };
    ItemsGridComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.filteredItems.length, page, this.pageSize);
        // get current page of items
        this.pagedItems = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ItemsGridComponent.prototype.onPageChange = function (event) {
        this.setPage(event.page);
    };
    ItemsGridComponent.prototype.addToCart = function (item) {
        if (this.authenticationService.token != null) {
            this.shoppingCartService.addItemToShoppingCart(item);
        }
        else {
            this.shoppingCartService.tempStoreItem(item);
            this.router.navigate(['/shop/login'], { queryParams: { returnUrl: this.snapshot.url } });
        }
    };
    ItemsGridComponent.prototype.getImage = function (id) {
        return 'data:image/jpg;base64,' + this.itemsService.getImage(id);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ItemsGridComponent.prototype, "items", void 0);
    ItemsGridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'items-grid',
            template: __webpack_require__(880)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__["a" /* PagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_pager_service__["a" /* PagerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _e) || Object])
    ], ItemsGridComponent);
    return ItemsGridComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/item-grid.component.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsSidebarComponent = (function () {
    function ItemsSidebarComponent(itemsService) {
        this.itemsService = itemsService;
        this.categoriesIsOpen = true;
        this.selectedFilters = [];
    }
    ItemsSidebarComponent.prototype.setFilters = function () {
        //trigger event on all observer components
        this.itemsService.setFilters(this.selectedFilters);
    };
    ItemsSidebarComponent.prototype.resetFilters = function () {
        //reset selected filters array
        this.selectedFilters = [];
        //uncheck all options
        this.filters.forEach(function (filter) {
            filter.options.forEach(function (option) {
                option.checked = false;
            });
        });
        this.setFilters();
    };
    ItemsSidebarComponent.prototype.addFilter = function (option) {
        var optNotInArray = __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](this.selectedFilters, { name: option.name, filter: option.filter }) === -1;
        //check if option is selected and if it already is in the array
        if (option.checked && optNotInArray) {
            this.selectedFilters.push(option);
        }
        else if (!option.checked && !optNotInArray) {
            this.selectedFilters.splice(this.selectedFilters.indexOf(option));
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ItemsSidebarComponent.prototype, "categories", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ItemsSidebarComponent.prototype, "filters", void 0);
    ItemsSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'items-sidebar',
            template: __webpack_require__(881)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_shop_items_service__["a" /* ItemsService */]) === 'function' && _a) || Object])
    ], ItemsSidebarComponent);
    return ItemsSidebarComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/item-sidebar.component.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterOption; });
var FilterOption = (function () {
    function FilterOption(name, filter) {
        this.name = name;
        this.filter = filter;
        this.checked = false;
    }
    FilterOption.prototype.check = function () {
        this.checked = !this.checked;
    };
    return FilterOption;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/filter-option.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarFilter; });
var SideBarFilter = (function () {
    function SideBarFilter(name, options) {
        this.name = name;
        this.options = options;
        this.expanded = false;
    }
    SideBarFilter.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    return SideBarFilter;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/sidebar-filter.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__ = __webpack_require__(44);
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
    function TopHeaderComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.shoppingCartService.getItemCount();
    }
    TopHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCartService.itemCountUpdate.subscribe(function (itemCount) {
            _this.itemsInCart = itemCount;
        });
    };
    TopHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'webshop-top-header',
            template: __webpack_require__(883)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shop_shopping_cart_service__["a" /* ShoppingCartService */]) === 'function' && _a) || Object])
    ], TopHeaderComponent);
    return TopHeaderComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/top-header.component.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webshop_routing__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_header_header_component__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_items_item_sidebar_item_sidebar_component__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_items_items_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_items_item_grid_item_grid_component__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__top_header_top_header_component__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_checkout_shopping_cart_shopping_cart_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__webshop_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_tree_view_tree_view_component__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_tree_view_tree_category__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_checkout_order_confirmation_order_confirmation_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_checkout_cart_items_cart_items_component__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_select__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_item_details_item_details_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_account_order_history_order_history_component__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_account_change_address_change_address_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_account_order_details_order_details_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_checkout_order_result_order_success_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_imprint_imprint_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_agb_agb_component__ = __webpack_require__(395);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__webshop_routing__["a" /* WebshopRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["d" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["c" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["e" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["f" /* CarouselModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__webshop_routing__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_10__webshop_component__["a" /* WebshopComponent */],
                __WEBPACK_IMPORTED_MODULE_2__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_items_item_sidebar_item_sidebar_component__["a" /* ItemsSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_items_items_component__["a" /* ItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_items_item_grid_item_grid_component__["a" /* ItemsGridComponent */],
                __WEBPACK_IMPORTED_MODULE_8__top_header_top_header_component__["a" /* TopHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_checkout_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_checkout_cart_items_cart_items_component__["a" /* CartItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_tree_view_tree_view_component__["a" /* TreeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_tree_view_tree_category__["a" /* TreeCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_checkout_order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_item_details_item_details_component__["a" /* ItemDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_item_details_item_details_component__["b" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_21__pages_item_details_item_details_component__["c" /* SafePipeUrl */],
                __WEBPACK_IMPORTED_MODULE_22__pages_account_order_history_order_history_component__["a" /* OrderHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_account_change_address_change_address_component__["a" /* ChangeAddressComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_account_order_details_order_details_component__["a" /* OrderDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_checkout_order_result_order_success_component__["a" /* OrderSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_imprint_imprint_component__["a" /* ImprintComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_agb_agb_component__["a" /* AgbComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopModule);
    return WebshopModule;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/webshop.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_items_items_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_register_register_component__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webshop_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_authentication_authguard__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_checkout_shopping_cart_shopping_cart_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_checkout_order_confirmation_order_confirmation_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_item_details_item_details_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_order_details_order_details_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_change_address_change_address_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_order_result_order_success_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_imprint_imprint_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_agb_agb_component__ = __webpack_require__(395);
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
            { path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_3__pages_items_items_component__["a" /* ItemsComponent */] },
            { path: 'category/:id/:childId', component: __WEBPACK_IMPORTED_MODULE_3__pages_items_items_component__["a" /* ItemsComponent */] },
            { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_11__pages_item_details_item_details_component__["a" /* ItemDetailsComponent */] },
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_9__pages_checkout_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_authentication_authguard__["a" /* AuthGuard */]] },
            { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_10__pages_checkout_order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_authentication_authguard__["a" /* AuthGuard */]] },
            { path: 'account', component: __WEBPACK_IMPORTED_MODULE_7__pages_account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_authentication_authguard__["a" /* AuthGuard */]] },
            { path: 'order-details/:id', component: __WEBPACK_IMPORTED_MODULE_12__pages_account_order_details_order_details_component__["a" /* OrderDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_authentication_authguard__["a" /* AuthGuard */]] },
            { path: 'order-success', component: __WEBPACK_IMPORTED_MODULE_14__pages_checkout_order_result_order_success_component__["a" /* OrderSuccessComponent */] },
            { path: 'change-address', component: __WEBPACK_IMPORTED_MODULE_13__pages_account_change_address_change_address_component__["a" /* ChangeAddressComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_authentication_authguard__["a" /* AuthGuard */]] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__pages_account_register_register_component__["a" /* RegisterComponent */] },
            { path: 'imprint', component: __WEBPACK_IMPORTED_MODULE_15__pages_imprint_imprint_component__["a" /* ImprintComponent */] },
            { path: 'agb', component: __WEBPACK_IMPORTED_MODULE_16__pages_agb_agb_component__["a" /* AgbComponent */] }
        ] },
];
var WebshopRoutingModule = (function () {
    function WebshopRoutingModule() {
    }
    WebshopRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], WebshopRoutingModule);
    return WebshopRoutingModule;
}());
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__pages_items_items_component__["a" /* ItemsComponent */], __WEBPACK_IMPORTED_MODULE_4__pages_account_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_5__pages_account_login_login_component__["a" /* LoginComponent */]];
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/webshop.routing.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(1153);
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
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/polyfills.js.map

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 415,
	"./af.js": 415,
	"./ar": 422,
	"./ar-dz": 416,
	"./ar-dz.js": 416,
	"./ar-kw": 417,
	"./ar-kw.js": 417,
	"./ar-ly": 418,
	"./ar-ly.js": 418,
	"./ar-ma": 419,
	"./ar-ma.js": 419,
	"./ar-sa": 420,
	"./ar-sa.js": 420,
	"./ar-tn": 421,
	"./ar-tn.js": 421,
	"./ar.js": 422,
	"./az": 423,
	"./az.js": 423,
	"./be": 424,
	"./be.js": 424,
	"./bg": 425,
	"./bg.js": 425,
	"./bn": 426,
	"./bn.js": 426,
	"./bo": 427,
	"./bo.js": 427,
	"./br": 428,
	"./br.js": 428,
	"./bs": 429,
	"./bs.js": 429,
	"./ca": 430,
	"./ca.js": 430,
	"./cs": 431,
	"./cs.js": 431,
	"./cv": 432,
	"./cv.js": 432,
	"./cy": 433,
	"./cy.js": 433,
	"./da": 434,
	"./da.js": 434,
	"./de": 437,
	"./de-at": 435,
	"./de-at.js": 435,
	"./de-ch": 436,
	"./de-ch.js": 436,
	"./de.js": 437,
	"./dv": 438,
	"./dv.js": 438,
	"./el": 439,
	"./el.js": 439,
	"./en-au": 440,
	"./en-au.js": 440,
	"./en-ca": 441,
	"./en-ca.js": 441,
	"./en-gb": 442,
	"./en-gb.js": 442,
	"./en-ie": 443,
	"./en-ie.js": 443,
	"./en-nz": 444,
	"./en-nz.js": 444,
	"./eo": 445,
	"./eo.js": 445,
	"./es": 447,
	"./es-do": 446,
	"./es-do.js": 446,
	"./es.js": 447,
	"./et": 448,
	"./et.js": 448,
	"./eu": 449,
	"./eu.js": 449,
	"./fa": 450,
	"./fa.js": 450,
	"./fi": 451,
	"./fi.js": 451,
	"./fo": 452,
	"./fo.js": 452,
	"./fr": 455,
	"./fr-ca": 453,
	"./fr-ca.js": 453,
	"./fr-ch": 454,
	"./fr-ch.js": 454,
	"./fr.js": 455,
	"./fy": 456,
	"./fy.js": 456,
	"./gd": 457,
	"./gd.js": 457,
	"./gl": 458,
	"./gl.js": 458,
	"./gom-latn": 459,
	"./gom-latn.js": 459,
	"./he": 460,
	"./he.js": 460,
	"./hi": 461,
	"./hi.js": 461,
	"./hr": 462,
	"./hr.js": 462,
	"./hu": 463,
	"./hu.js": 463,
	"./hy-am": 464,
	"./hy-am.js": 464,
	"./id": 465,
	"./id.js": 465,
	"./is": 466,
	"./is.js": 466,
	"./it": 467,
	"./it.js": 467,
	"./ja": 468,
	"./ja.js": 468,
	"./jv": 469,
	"./jv.js": 469,
	"./ka": 470,
	"./ka.js": 470,
	"./kk": 471,
	"./kk.js": 471,
	"./km": 472,
	"./km.js": 472,
	"./kn": 473,
	"./kn.js": 473,
	"./ko": 474,
	"./ko.js": 474,
	"./ky": 475,
	"./ky.js": 475,
	"./lb": 476,
	"./lb.js": 476,
	"./lo": 477,
	"./lo.js": 477,
	"./lt": 478,
	"./lt.js": 478,
	"./lv": 479,
	"./lv.js": 479,
	"./me": 480,
	"./me.js": 480,
	"./mi": 481,
	"./mi.js": 481,
	"./mk": 482,
	"./mk.js": 482,
	"./ml": 483,
	"./ml.js": 483,
	"./mr": 484,
	"./mr.js": 484,
	"./ms": 486,
	"./ms-my": 485,
	"./ms-my.js": 485,
	"./ms.js": 486,
	"./my": 487,
	"./my.js": 487,
	"./nb": 488,
	"./nb.js": 488,
	"./ne": 489,
	"./ne.js": 489,
	"./nl": 491,
	"./nl-be": 490,
	"./nl-be.js": 490,
	"./nl.js": 491,
	"./nn": 492,
	"./nn.js": 492,
	"./pa-in": 493,
	"./pa-in.js": 493,
	"./pl": 494,
	"./pl.js": 494,
	"./pt": 496,
	"./pt-br": 495,
	"./pt-br.js": 495,
	"./pt.js": 496,
	"./ro": 497,
	"./ro.js": 497,
	"./ru": 498,
	"./ru.js": 498,
	"./sd": 499,
	"./sd.js": 499,
	"./se": 500,
	"./se.js": 500,
	"./si": 501,
	"./si.js": 501,
	"./sk": 502,
	"./sk.js": 502,
	"./sl": 503,
	"./sl.js": 503,
	"./sq": 504,
	"./sq.js": 504,
	"./sr": 506,
	"./sr-cyrl": 505,
	"./sr-cyrl.js": 505,
	"./sr.js": 506,
	"./ss": 507,
	"./ss.js": 507,
	"./sv": 508,
	"./sv.js": 508,
	"./sw": 509,
	"./sw.js": 509,
	"./ta": 510,
	"./ta.js": 510,
	"./te": 511,
	"./te.js": 511,
	"./tet": 512,
	"./tet.js": 512,
	"./th": 513,
	"./th.js": 513,
	"./tl-ph": 514,
	"./tl-ph.js": 514,
	"./tlh": 515,
	"./tlh.js": 515,
	"./tr": 516,
	"./tr.js": 516,
	"./tzl": 517,
	"./tzl.js": 517,
	"./tzm": 519,
	"./tzm-latn": 518,
	"./tzm-latn.js": 518,
	"./tzm.js": 519,
	"./uk": 520,
	"./uk.js": 520,
	"./ur": 521,
	"./ur.js": 521,
	"./uz": 523,
	"./uz-latn": 522,
	"./uz-latn.js": 522,
	"./uz.js": 523,
	"./vi": 524,
	"./vi.js": 524,
	"./x-pseudo": 525,
	"./x-pseudo.js": 525,
	"./yo": 526,
	"./yo.js": 526,
	"./zh-cn": 527,
	"./zh-cn.js": 527,
	"./zh-hk": 528,
	"./zh-hk.js": 528,
	"./zh-tw": 529,
	"./zh-tw.js": 529
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
webpackContext.id = 824;


/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "<div id=\"content-container\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3\">\n      <admin-nav></admin-nav>\n    </div>\n    <div class=\"col-lg-9 col-md-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "<div>\n    <a href=\"#/admin/new-item\">Artikel hinzufügen</a> <br>\n    <a href=\"#/admin/new-set\">Set hinzufügen</a><br>\n    <a href=\"#/admin/manage\">Artikel/Set verwalten</a><br>\n    <a href=\"#/admin/users\">Admin-Benutzer verwalten</a><br>\n    <a (click)=\"logout()\">Abmelden</a><br>\n</div>"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 \">\n        <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n            <h4 class=\"order\">User</h4>\n        </div>\n        <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n            <h4 class=\"order\">Admin</h4>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 \">\n        <div *ngFor=\"let user of admins\" class=\"order\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n                    {{user.email}}\n                </div>\n                <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n                    <input type=\"checkbox\" data-md-icheck [checked]=\"user.admin\" (change)=\"adminToggle(user.email, $event)\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br />\n<br />\n\n<p>\n    Hier können Sie für bestehende User auswählen, ob sie Admin-Rechte haben sollen.\n</p>"

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "Admin Home"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Artikel anlegen</h2>\n<br>\n<div class=\"row\">\n    <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1\">\n        <form (ngSubmit)=\"create()\">\n\n            <div class=\"form-group\">\n                <label for=\"name\">Name des Artikels</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"item.name\" #name=\"ngModel\"\n                       required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"articleNumber\">Artikelnummer</label>\n                <input type=\"text\" class=\"form-control\" id=\"articleNumber\" name=\"articleNumber\"\n                       [(ngModel)]=\"item.articleNumber\" #articleNumber=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"stock\">Lagerbestand</label>\n                <input type=\"number\" class=\"form-control\" id=\"stock\" name=\"stock\" [(ngModel)]=\"item.stock\"\n                       #stock=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Beschreibung</label>\n                <textarea type=\"text\" class=\"form-control\" id=\"description\" name=\"description\"\n                          [(ngModel)]=\"item.description\" #description=\"ngModel\" required></textarea>\n            </div>\n            <div class=\"form-group\" id=\"categories\">\n                <label for=\"categories\">Kategorie</label>\n                <div *ngFor=\"let cat of categories; let idx=index\" class=\"order\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n                            {{cat.name}}\n                        </div>\n                        <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n                            <input type=\"radio\" name=\"radiogroup\" [value]=\"cat.name\" (change)=\"onCategorySelectionChange(cat)\" required/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"brand\">Marke</label>\n                <input type=\"text\" class=\"form-control\" id=\"brand\" name=\"brand\" [(ngModel)]=\"item.brand\"\n                       #price=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"color\">Farbe</label>\n                <input type=\"text\" class=\"form-control\" id=\"color\" name=\"color\" [(ngModel)]=\"item.color\"\n                       #price=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"weight\">Gewicht</label>\n                <input type=\"number\" class=\"form-control\" id=\"weight\" name=\"weight\" [(ngModel)]=\"item.weight\"\n                       #price=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"material\">Material</label>\n                <input type=\"text\" class=\"form-control\" id=\"material\" name=\"material\" [(ngModel)]=\"item.material\"\n                       #price=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"price\">Preis</label>\n                <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"item.price\"\n                       #price=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pic\">Bild</label>\n                <input type=\"file\" id=\"pic\" name=\"pictureLink\" (change)=\"fileChangeEvent($event)\" required/>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\"><i *ngIf=\"loading\"\n                                                                                      class=\"fa fa-spinner fa-spin\"></i>\n                    Artikel speichern\n                </button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Artikel anlegen</h2>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n        <form (ngSubmit)=\"createItemset()\">\n\n            <div class=\"form-group\">\n                <label for=\"name\">Name des Artikels</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"item.name\" #name=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"articleNumber\">Artikelnummer</label>\n                <input type=\"text\" class=\"form-control\" id=\"articleNumber\" name=\"articleNumber\" [(ngModel)]=\"item.articleNumber\" #articleNumber=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"stock\">Lagerbestand</label>\n                <input type=\"number\" class=\"form-control\" id=\"stock\" name=\"stock\" [(ngModel)]=\"item.stock\" #stock=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Beschreibung</label>\n                <textarea type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"item.description\" #description=\"ngModel\" required> </textarea>\n            </div>\n            <div class=\"form-group\" id=\"categories\">\n                <label for=\"categories\">Kategorie</label>\n                <div *ngFor=\"let cat of categories; let idx=index\" class=\"order\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-9 col-md-4 col-sm-4 col-xs-12 order-col\">\n                            {{cat.name}}\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12 order-col\">\n                            <input type=\"radio\" name=\"radiogroup\" [value]=\"cat.name\" (change)=\"onCategorySelectionChange(cat)\" required/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\" id=\"items\">\n                <label for=\"items\">Einzelartikel</label>\n                <div *ngFor=\"let item of items\" class=\"order\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-9 col-md-4 col-sm-4 col-xs-12 order-col\">\n                            {{item.articleNumber}}\n                            <br>\n                            {{item.name}}\n                        </div>\n                        <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12 order-col\">\n                            <input type=\"checkbox\" data-md-icheck (change)=\"onItemSelect(item, $event)\"/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"price\">Preis</label>\n                <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"item.price\" #price=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pic\">Bild</label>\n                <input type=\"file\" id=\"pic\" name=\"pictureLink\" (change) = \"fileChangeEvent($event)\" required />\n            </div>\n\n            <div class=\"form-group\">\n                <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\"><i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i> Set speichern</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Login</h2>\n<div class=\"row\">\n  <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n    <alert *ngIf=\"loginFailed\"  type=\"danger\" dismissible=\"true\" (click)=\"loginFailed = false\">Login fehlgeschlagen</alert>\n    <form (ngSubmit)=\"login()\">\n      <div class=\"form-group\">\n        <label for=\"email\">E-Mail</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #username=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Passwort</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\"><i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i> Anmelden</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-2 col-md-2 col-sm-2\">\n        <h4>Artikelnr.</h4>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <h4>Name</h4>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-2 col-md-2 col-sm-2\">\n        <input type=\"text\" name=\"articleNrFilter\" placeholder=\"Artikelnr.\" class=\"input-field\" id=\"article-number-filter\" [ngModel]=\"artNrFilter\" (ngModelChange)=\"applyFilter($event)\"/>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 \">\n        <div *ngFor=\"let item of pagedItems\" class=\"admin-item\">\n            <div *ngIf=\"!item.deleted\" class=\"row\">\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 admin-item-col\">\n                    {{item.articleNumber}}\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 admin-item-col\">\n                    {{item.name}}\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-12\">\n                    <a (click)=\"editItem(item.i_id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-12\">\n                    <a (click)=\"deleteItem(item.i_id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"text-center\">\n        <pagination [itemsPerPage]=\"pageSize\" [boundaryLinks]=\"true\" [totalItems]=\"filteredItems.length\" [maxSize]=\"6\" [(ngModel)]=\"pager.currentPage\" class=\" pagination-sm\"\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (pageChanged)=\"onPageChange($event)\"></pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-item-set works!\n</p>\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Artikel {{item.articleNumber}} editieren</h2>\n<br>\n<div class=\"row\">\n  <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1\">\n    <form (ngSubmit)=\"editItem()\">\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name des Artikels</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"item.name\" #name=\"ngModel\"\n               required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"articleNumber\">Artikelnummer</label>\n        <input type=\"text\" class=\"form-control\" id=\"articleNumber\" name=\"articleNumber\"\n               [(ngModel)]=\"item.articleNumber\" #articleNumber=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"stock\">Lagerbestand</label>\n        <input type=\"number\" class=\"form-control\" id=\"stock\" name=\"stock\" [(ngModel)]=\"item.stock\"\n               #stock=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Beschreibung</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"description\" name=\"description\"\n                  [(ngModel)]=\"item.description\" #description=\"ngModel\" required></textarea>\n      </div>\n      <div class=\"form-group\" id=\"categories\">\n        <label for=\"categories\">Kategorie</label>\n        <div *ngFor=\"let cat of categories; let idx=index\" class=\"order\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n              {{cat.name}}\n            </div>\n            <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n              <input type=\"radio\" name=\"radiogroup\" [value]=\"cat.name\" (change)=\"onCategorySelectionChange(cat)\" required/>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"brand\">Marke</label>\n        <input type=\"text\" class=\"form-control\" id=\"brand\" name=\"brand\" [(ngModel)]=\"item.brand\"\n               #price=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"color\">Farbe</label>\n        <input type=\"text\" class=\"form-control\" id=\"color\" name=\"color\" [(ngModel)]=\"item.color\"\n               #price=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"weight\">Gewicht</label>\n        <input type=\"number\" class=\"form-control\" id=\"weight\" name=\"weight\" [(ngModel)]=\"item.weight\"\n               #price=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"material\">Material</label>\n        <input type=\"text\" class=\"form-control\" id=\"material\" name=\"material\" [(ngModel)]=\"item.material\"\n               #price=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"price\">Preis</label>\n        <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"item.price\"\n               #price=\"ngModel\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pic\">Bild</label>\n        <input type=\"file\" id=\"pic\" name=\"pictureLink\" (change)=\"fileChangeEvent($event)\" required/>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\"><i *ngIf=\"loading\"\n                                                                              class=\"fa fa-spinner fa-spin\"></i>\n          Artikel speichern\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "<a href=\"#\"><img src=\"../../assets/webshop%20logo.png\" class=\"img-responsive center-block\" id=\"logo\"/></a>"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "<li>\n    <div *ngIf=\"category.childrenCategories.length > 0\">\n        <button (click)=\"toggle()\" class=\"node-icon\">\n        <i *ngIf=\"!expanded\" class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n        <i *ngIf=\"expanded\" class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n      </button>\n        <a (click)=\"selectChildCategory(category.c_id)\" class=\"node-name\">{{ category.name }}</a>\n        <div *ngIf=\"expanded\">\n            <ul>\n                <div *ngFor=\"let child of category.childrenCategories\">\n                    <tree-category [category]=\"child\"></tree-category>\n                </div>\n            </ul>\n        </div>\n    </div>\n\n    <div *ngIf=\"category.childrenCategories.length == 0\">\n        <a (click)=\"selectChildCategory(category.c_id)\" class=\"node-name no-icon\">{{ category.name }}</a>\n    </div>\n\n</li>"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = "<ul>\n  <div *ngFor=\"let cat of categories\">\n    <tree-category [category]=\"cat\"></tree-category>\n  </div>\n</ul>"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\n<!-- <a href=\"#/shop/contact\"  class=\"footer-link\">Kontakt</a>| -->\n  <a href=\"#/shop/imprint\" class=\"footer-link\">Impressum</a>|\n  <a href=\"#/shop/agb\"  class=\"footer-link\">AGB</a>\n</footer>"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"webshop-nav\">\n   <div class=\"navbar-header\">\n     <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\">\n       <span class=\"sr-only\">Toggle navigation</span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n       <span class=\"icon-bar\"></span>\n     </button>\n   </div>\n\n   <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n     <ul class=\"nav navbar-nav\">\n       <li><a href=\"#\">Home</a></li>\n       <li *ngFor=\"let category of parentCategories\"><a href=\"#/shop/category/{{category.c_id}}\">{{category.name}}</a></li>\n\n     </ul>\n   </div>\n</nav>\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Kontoübersicht</h2>\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\n    <button class=\"btn btn-primary pull-right\" (click)=\"logout()\">Abmelden</button>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n    <div class=\"order-conf-panel\">\n      <h4>Benutzerinformationen</h4>\n      {{user.firstName}} {{user.lastName}} <br>\n      {{user.email}}<br>\n      <br>\n      <button class=\"btn btn-primary\" (click)=\"changePassword=true\" [disabled]=\"changePassword\">Passwort ändern</button> <br>\n      <div *ngIf=\"changePassword\" id=\"change-pw\">\n        <alert *ngIf=\"changePWFailed\"  type=\"danger\" dismissible=\"true\" (click)=\"changePWFailed = false\">Passwort ändern fehlgeschlagen</alert>\n        <alert *ngIf=\"changePWSuccess\"  type=\"success\" dismissible=\"true\" (click)=\"changePWSuccess = false\">Passwort erfolgreich geändert</alert>\n        <form (ngSubmit)=\"changePW()\">\n          <div class=\"form-group\">\n            <label for=\"previousPassword\">Altes Passwort</label>\n            <input type=\"password\" class=\"form-control\" id=\"previousPassword\" name=\"previousPassword\" [(ngModel)]=\"previousPassword\" #oldPW=\"ngModel\" required />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"newPassword\">Neues Passwort</label>\n            <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"newPassword\" minlength=\"8\" #newPW=\"ngModel\" required />\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Ändern</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelChangePassword()\">Abbrechen</button>\n          </div>\n        </form>\n      </div>\n      <button id=\"change-email-btn\" class=\"btn btn-primary\" (click)=\"changeEmail=true\" [disabled]=\"changeEmail\">E-Mail ändern</button>\n      <div *ngIf=\"changeEmail\">\n        <form (ngSubmit)=\"changeEmailAddr()\">\n          <div class=\"form-group\">\n            <label for=\"newEmail\">Neue E-Mail</label>\n            <input type=\"password\" class=\"form-control\" id=\"newEmail\" name=\"newEmail\" [(ngModel)]=\"newEmail\" #newMail=\"ngModel\" required />\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Ändern</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelChangeEmail()\">Abbrechen</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n    <div class=\"order-conf-panel\">\n      <h4>Rechnungsadresse</h4>\n      <span *ngIf=\"billingAddress.gender=='FEMALE'\">Frau</span>\n      <span *ngIf=\"billingAddress.gender=='MALE'\">Herr</span>\n      {{billingAddress.firstName}} {{billingAddress.lastName}} <br>\n      {{billingAddress.streetNo}}<br>\n      {{billingAddress.zip}} {{billingAddress.city}}<br>\n      {{billingAddress.country}}<br>\n      <br>\n      <button class=\"btn btn-primary\" (click)=\"changeAddress('billing')\">Rechnungsadresse ändern</button>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n    <div class=\"order-conf-panel\">\n      <h4>Lieferadresse</h4>\n      <span *ngIf=\"shippingAddress.gender=='FEMALE'\">Frau</span>\n      <span *ngIf=\"shippingAddress.gender=='MALE'\">Herr</span>\n      {{shippingAddress.firstName}} {{shippingAddress.lastName}} <br>\n      {{shippingAddress.streetNo}} <br>\n      {{shippingAddress.zip}} {{shippingAddress.city}}<br>\n      {{shippingAddress.country}}<br>\n      <br>\n      <button class=\"btn btn-primary\" (click)=\"changeAddress('shipping')\">Lieferadresse ändern</button>\n    </div>\n  </div>\n</div>\n\n<!-- Order history -->\n<order-history></order-history>"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">\n  <span *ngIf=\"addressType == 'billing'\"> Rechnungsadresse</span>\n  <span *ngIf=\"addressType == 'shipping'\">Versandadresse</span>\n  ändern</h2>\n<div class=\"row\">\n  <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n    <form (ngSubmit)=\"changeAddress()\">\n      <div class=\"form-group\">\n        <label>Anrede</label>\n        <ng-select id=\"gender\"\n                   [allowClear]=\"false\"\n                   [items]=\"gender\"\n                   [active]=\"activeGender\"\n                   (data)=\"setAddrGender($event)\"\n                   placeholder=\"Keine Anrede\">\n        </ng-select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstname\">Vorname</label>\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" [(ngModel)]=\"address.firstName\" #firstname=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastname\">Nachname</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\" [(ngModel)]=\"address.lastName\" #lastname=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"street\">Straße Nr.</label>\n        <input type=\"text\" class=\"form-control\" id=\"street\" name=\"street\" [(ngModel)]=\"address.streetNo\" #street=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"city\">Stadt</label>\n        <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\" [(ngModel)]=\"address.city\" #city=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"zip\">Postleitzahl</label>\n        <input type=\"text\" class=\"form-control\" id=\"zip\" name=\"zip\" [(ngModel)]=\"address.zip\" #zip=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"zip\">Land</label>\n        <input type=\"text\" class=\"form-control\" id=\"country\" name=\"country\" [(ngModel)]=\"address.country\" #country=\"ngModel\" required />\n      </div>\n      <button class=\"btn btn-secondary\" type=\"submit\">Ändern</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelChangeAddr()\">Abbrechen</button>\n  </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Login</h2>\n<div class=\"row\">\n  <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n    <alert *ngIf=\"loginFailed\"  type=\"danger\" dismissible=\"true\" (click)=\"loginFailed = false\">Login fehlgeschlagen</alert>\n    <form (ngSubmit)=\"login()\">\n      <div class=\"form-group\">\n        <label for=\"email\">E-Mail</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #username=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Passwort</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\"><i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i> Anmelden</button>\n      </div>\n    </form>\n    <p>Sie haben noch kein Konto? <button (click)=\"registerRedirect()\" class=\"btn btn-secondary\">Registrieren</button></p>\n  </div>\n</div>\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Bestellung Nr. {{order.soId}}</h2>\n<div class=\"row\">\n  <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n    <div class=\"sc-item\" *ngFor=\"let orderItem of order.items\">\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <img class=\"img-responsive\" src =\"api/v1/items/images/{{orderItem.item.i_id}}\"/>\n          <span class=\"item-name\">{{orderItem.item.name}}</span>\n          <br>\n          <span>Artikel-Nr.: {{orderItem.item.articleNumber}}</span>\n          <br>\n          <span>Preis: {{orderItem.item.price | currency:'EUR':true}}</span>\n          <br>\n          <span>Anzahl: {{orderItem.quantity}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n    <div id=\"sc-overview\">\n      <h4>Zusammenfassung</h4>\n      Summe: <span class=\"pull-right\">{{total | currency:'EUR':true}}</span><br>\n      Versandkosten: <span class=\"pull-right\">{{0 | currency:'EUR':true}}</span><br>\n      <b>Gesamtsumme: <span class=\"pull-right\">{{total | currency:'EUR':true}}</span></b><br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Bestellhistorie</h3>\n\n<div class=\"order-history\">\n<div *ngIf=\"innerWidth >= 768\" class=\"row\">\n  <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4\">\n    <h4>Datum</h4>\n  </div>\n  <div class=\"col-lg-2 col-md-2 col-sm-2\">\n    <h4>Best.-Nr.</h4>\n  </div>\n  <div class=\"col-lg-5 col-md-6 col-sm-6\">\n    <h4>Status</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 \">\n  <div *ngFor=\"let order of pagedOrders\" class=\"order\">\n    <div class=\"row\">\n    <div class=\"col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-12 order-col\">\n      <label *ngIf=\"innerWidth < 768\">Datum: </label> {{order.date | date:'medium'}}\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 order-col\">\n      <label *ngIf=\"innerWidth < 768\">Best.-Nr.: </label> {{order.soId}}\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 order-col\">\n      <label *ngIf=\"innerWidth < 768\">Status: </label> {{order.paid}}\n    </div>\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\">\n      <button class=\"btn btn-secondary\"><a href=\"/#/shop/order-details/{{order.soId}}\">Details</a></button>\n    </div>\n    </div>\n  </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"text-center\">\n    <pagination [itemsPerPage]=\"pageSize\" [boundaryLinks]=\"true\" [totalItems]=\"orders.length\" [maxSize]=\"6\" [(ngModel)]=\"pager.currentPage\" class=\" pagination-sm\"\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (pageChanged)=\"onPageChange($event)\"></pagination>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Registrierung</h2>\n<div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n        <form (ngSubmit)=\"register()\">\n            <div class=\"form-group\">\n                <label>Anrede</label>\n                <ng-select id=\"gender\"\n                           [allowClear]=\"false\"\n                           [items]=\"gender\"\n                           [active]=\"[{id: 'FEMALE', text:'Frau'}]\"\n                           (data)=\"setGender($event)\"\n                           placeholder=\"Keine Anrede\">\n                </ng-select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"firstName\">Vorname</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"lastName\">Nachname</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"lastName\">Geburtsdatum</label>\n                <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\" name=\"dateOfBirth\" placeholder=\"tt.mm.jjjj\" [(ngModel)]=\"user.dateOfBirth\" (focus)=\"showDatepicker()\" #dateOfBirth=\"ngModel\"  required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"username\">E-Mail</label>\n                <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.email\" #username=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Passwort</label>\n                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" minlength=\"8\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"bilstreet\">Straße Nr.</label>\n                <input type=\"text\" class=\"form-control\" id=\"bilstreet\" name=\"bilstreet\" [(ngModel)]=\"billingAddress.streetNo\" #bilstreet=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"bilcity\">Stadt</label>\n                <input type=\"text\" class=\"form-control\" id=\"bilcity\" name=\"bilcity\" [(ngModel)]=\"billingAddress.city\" #bilcity=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"bilzip\">Postleitzahl</label>\n                <input type=\"text\" class=\"form-control\" id=\"bilzip\" name=\"bilzip\" [(ngModel)]=\"billingAddress.zip\" #bilzip=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"shizip\">Land</label>\n                <input type=\"text\" class=\"form-control\" id=\"bilcountry\" name=\"bilcountry\" [(ngModel)]=\"billingAddress.country\" #shizip=\"ngModel\" required />\n            </div>\n            <div class=\"form-group\">\n                <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"diffAddress\" [(ngModel)]=\"diffAddress\" />Andere Lieferaddresse</label>\n            </div>\n            <div *ngIf=\"diffAddress\">\n                <div class=\"form-group\">\n                    <label>Anrede</label>\n                    <ng-select id=\"gender\"\n                               [allowClear]=\"false\"\n                               [items]=\"gender\"\n                               [active]=\"[{id: 'FEMALE', text:'Frau'}]\"\n                               (data)=\"setAddrGender($event)\"\n                               placeholder=\"Keine Anrede\">\n                    </ng-select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"firstName\">Vorname</label>\n                    <input type=\"text\" class=\"form-control\" id=\"shiFirstName\" name=\"shiFirstName\" [(ngModel)]=\"shippingAddress.firstName\" #firstName=\"ngModel\" required />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Nachname</label>\n                    <input type=\"text\" class=\"form-control\" id=\"shiLastName\" name=\"shiLastName\" [(ngModel)]=\"shippingAddress.lastName\" #lastName=\"ngModel\" required />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"shistreet\">Straße Nr.</label>\n                    <input type=\"text\" class=\"form-control\" id=\"shistreet\" name=\"shistreet\" [(ngModel)]=\"shippingAddress.streetNo\" #shistreet=\"ngModel\" required />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"shicity\">Stadt</label>\n                    <input type=\"text\" class=\"form-control\" id=\"shicity\" name=\"shicity\" [(ngModel)]=\"shippingAddress.city\" #shicity=\"ngModel\" required />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"shizip\">Postleitzahl</label>\n                    <input type=\"text\" class=\"form-control\" id=\"shizip\" name=\"shizip\" [(ngModel)]=\"shippingAddress.zip\" #shizip=\"ngModel\" required />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"shizip\">Land</label>\n                    <input type=\"text\" class=\"form-control\" id=\"shicountry\" name=\"shicountry\" [(ngModel)]=\"shippingAddress.country\" #shizip=\"ngModel\" required />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\"><i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i> Registrieren</button>\n            </div>\n        </form>\n        <p>Sie haben bereits ein Konto? <a href=\"#/shop/login\"><button class=\"btn btn-secondary\">Anmelden</button></a></p>\n    </div>\n</div>\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<h2>Allgemeine Geschäftsbedingungen der Firma Wooliness<br /></h2>\n\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§1 Geltung gegenüber Unternehmern und Begriffsdefinitionen</p>\n(1) Die nachfolgenden Allgemeinen Geschäftbedingungen gelten für alle Lieferungen zwischen uns und einem Verbraucher\nin ihrer zum Zeitpunkt der Bestellung gültigen Fassung.<br />\n<br />\nVerbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder\nihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).\n<br />\n\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§2 Zustandekommen eines Vertrages, Speicherung des Vertragstextes</p>\n(1) Die folgenden Regelungen über den Vertragsabschluss gelten für Bestellungen über unseren Internetshop https://www.studienarbeit-webshop.herokuapp.com .<br />\n<br />\n<b>(2) Im Falle des Vertragsschlusses kommt der Vertrag mit<br />\n\n  <div style=\"font-weight: bold; margin-left: 20px;\" >\n    <br />\n    Wooliness<br />\n    Martha Musterfrau<br />\n    Musterstraße 1<br />\n    D-12345 Musterstadt<br />\n    Registernummer 12131415<br />\n    Registergericht Amtsgericht Musterstadt<br />\n    <br />\n  </div>\n  zustande.<br /></b>\n<br />\n(3) Die Präsentation der Waren in unserem Internetshop stellen kein rechtlich bindendes Vertragsangebot unsererseits dar,\nsondern sind nur eine unverbindliche Aufforderungen an den Verbraucher, Waren zu bestellen. Mit der Bestellung der gewünschten Ware gibt der Verbraucher ein für\nihn verbindliches Angebot auf Abschluss eines Kaufvertrages ab.<br />\n(4) Bei Eingang einer Bestellung in unserem Internetshop gelten folgende Regelungen:\nDer Verbraucher gibt ein bindendes Vertragsangebot ab, indem er die in unserem Internetshop vorgesehene Bestellprozedur erfolgreich durchläuft.<br />\n<br />\nDie Bestellung erfolgt in folgenden Schritten:<br />\n<br />\n<div class=\"ml20\">\n\n  1) Auswahl der gewünschten Ware<br />\n\n  2) Bestätigen durch Anklicken der Buttons „Bestellen“ <br />\n\n  3) Prüfung der Angaben im Warenkorb<br />\n\n  4) Betätigung des Buttons „zur Kasse“ <br />\n\n  5) Anmeldung im Internetshop nach Registrierung und Eingabe der Anmelderangaben (E-Mail-Adresse und Passwort). <br />\n\n  6) Nochmalige Prüfung bzw. Berichtigung der jeweiligen eingegebenen Daten.<br />\n\n  7) Verbindliche Absendung der Bestellung durch Anklicken des Buttons „kostenpflichtig bestellen“ bzw. „kaufen“<br />\n\n  <br />\n</div>\nDer Verbraucher kann vor dem verbindlichen Absenden der Bestellung durch Betätigen der in dem von ihm verwendeten Internet-Browser enthaltenen „Zurück“-Taste nach\nKontrolle seiner Angaben wieder zu der Internetseite gelangen, auf der die Angaben des Kunden erfasst werden und Eingabefehler berichtigen bzw. durch Schließen des\nInternetbrowsers den Bestellvorgang abbrechen.\nWir bestätigen den Eingang der Bestellung unmittelbar durch eine automatisch generierte E-Mail („Auftragsbestätigung“). Mit dieser nehmen wir Ihr Angebot an.\n<br />\n<br />\n(5) Speicherung des Vertragstextes bei Bestellungen über unseren Internetshop : Wir speichern den Vertragstext und senden Ihnen die Bestelldaten und unsere AGB per\nE-Mail zu. Die AGB können Sie jederzeit auch unter https://studienarbeit-webshop.herokuapp.com/#agb  einsehen.\n\nIhre vergangenen Bestellungen können Sie in unserem Kunden-Bereich unter Mein Konto --> Bestellhistorie einsehen.<br />\n\n\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§3 Preise, Versandkosten, Zahlung, Fälligkeit</p>\n(1) Die angegebenen Preise enthalten die gesetzliche Umsatzsteuer und sonstige Preisbestandteile. Hinzu kommen etwaige Versandkosten.<br />\n<br />\n(2) Der Verbraucher hat die Möglichkeit der Zahlung per\nVorkasse\n\n\n\n\n.<br />\n<br />\n(3) Hat der Verbraucher die Zahlung per Vorkasse gewählt, so verpflichtet er sich, den Kaufpreis unverzüglich nach Vertragsschluss zu zahlen.<br />\n\n\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§4 Lieferung</p>\n(1) Sofern wir dies in der Produktbeschreibung nicht deutlich anders angegeben haben, sind alle von uns angebotenen Artikel sofort versandfertig.\nDie Lieferung erfolgt hier spätesten innerhalb von 5 Werktagen.\nDabei beginnt die Frist für die Lieferung im Falle der Zahlung per Vorkasse am Tag nach\nZahlungsauftrag an die mit der Überweisung beauftragte Bank und bei allen anderen Zahlungsarten am Tag nach Vertragsschluss zu laufen.\nFällt das Fristende auf einen Samstag, Sonntag oder gesetzlichen Feiertag am Lieferort, so endet die Frist am nächsten Werktag.\n<br /><br />\n\n(2) Die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der\nverkauften Sache geht auch beim Versendungskauf erst mit der Übergabe der Sache an den Käufer auf diesen über.  <br />\n\n\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§5 Eigentumsvorbehalt</p>\nWir behalten uns das Eigentum an der Ware bis zur vollständigen Bezahlung des Kaufpreises vor. <br />\n\n\n\n<br />\n\n****************************\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§6 Widerrufsrecht des Kunden als Verbraucher:\n</p>\n\n<b>\n  Widerrufsrecht für Verbraucher</b><br />\n<br />\nVerbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt,\ndie überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:\n\n<br />\n<br />\n\n<p style=\"font-weight: bold; padding-bottom: 1px; text-align: center;\">Widerrufsbelehrung</p>\n<br />\n<b>Widerrufsrecht</b><br />\n<br />\nSie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.\n<br />\n<br />\nDie Widerrufsfrist beträgt vierzehn Tage, ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,\nder nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.\n\n<br /><br />\nUm Ihr Widerrufsrecht auszuüben, müssen Sie uns<br />\n<div style=\"margin-left:20px; margin-top: 5px; margin-bottom:5px;\">\n  Wooliness<br />\n  Martha Musterfrau<br />\n  Musterstraße 1<br />\n  D-12345 Musterstadt<br />\n  E-Mail woolinessshop@gmail.com<br />\n</div>\nmittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss,\ndiesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.\n<br />\n<br />\n\n<b>Widerrufsfolgen</b>\n<br /><br />\nWenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der\nLieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als\ndie von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen\nab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.\nFür diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben,\nes sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.\n<br />\n<br />\n\nWir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben,\ndass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.\n<br />\n<br />\n\nSie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den\nWiderruf dieses Vertrages unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt,\nwenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.\n<br />\n<br />\n\nSie tragen die unmittelbaren Kosten der Rücksendung der Waren.<br />\n<br />\n\n\n<b>Ende der Widerrufsbelehrung</b>\n<br />\n<br />\n****************************\n\n<br />\n\n\n\n\n\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§7 Widerrufsformular</p>\n\n<p style=\"text-align: center; font-weight: bold;\">Muster-Widerrufsformular</p>\n(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)<br />\n<div style=\"border: 1px solid #000000;padding: 10px;\">\n  An :<br />\n  Wooliness<br />\n  Martha Musterfrau<br />\n  Musterstraße 1<br />\n  D-12345 Musterstadt<br />\n  E-Mail woolinessshop@gmail.com<br />\n  <br />\n\n  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)<br />\n  <br />\n  _______________________<br />\n  <br />\n  Bestellt am (*)/erhalten am (*)<br />\n  <br />\n  __________________<br />\n  <br />\n  Name des/der Verbraucher(s)<br />\n  <br />\n  __________________<br />\n  <br />\n  Anschrift des/der Verbraucher(s)<br />\n  <br />\n  <br />\n  __________________<br />\n  <br />\n  Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br />\n  <br />\n  __________________<br />\n  <br />\n  Datum<br />\n  <br />\n  __________________<br />\n  <br />\n</div>\n(*) Unzutreffendes streichen.<br />\n\n\n\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§8 Gewährleistung\n</p>\n\nEs gelten die gesetzlichen Gewährleistungsregelungen.\n<br />\n\n\n<br />\n<p style=\"font-weight: bold; padding-bottom: 10px;\">§9 Vertragssprache</p>\nAls Vertragssprache steht ausschließlich Deutsch zur Verfügung.<br />\n\n<br />\n<br />\n<p>Stand der AGB Mai.2017</p>\n\n<p><i><a href=\"http://www.agb.de\">Gratis AGB</a> erstellt von agb.de</i></p>"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"shoppingCart.items.length == 0\" class=\"text-center\">Warenkorb leer, fügen Sie etwas hinzu!</div>\n<div class=\"sc-item\" *ngFor=\"let scItem of shoppingCart.items\">\n    <div class=\"row clearfix\">\n        <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\">\n            <img class=\"img-responsive\" [src]=\"scItem.item.pictureLink\"/>\n            <span class=\"item-name\">{{scItem.item.name}}</span>\n            <br>\n            <span>Artikel-Nr.: {{scItem.item.articleNumber}}</span>\n        </div>\n        <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-12\">\n            <span class=\"sc-item-delete pull-right\">\n                <button><i class=\"fa fa-times\" aria-hidden=\"true\" title=\"Artikel aus Warenkorb entfernen\" (click)=\"removeItem(scItem)\"></i></button>\n            </span>\n            <span class=\"sc-item-price pull-right\">\n               {{scItem.item.price | currency:'EUR':true}}\n            </span>\n            <div class=\"sc-item-quantity pull-right\">\n               <button><i class=\"fa fa-minus\" aria-hidden=\"true\" title=\"Menge verringern\" (click)=\"removeOne(scItem.item.i_id)\"></i></button>\n                    {{scItem.quantity}}\n                <button><i class=\"fa fa-plus\" aria-hidden=\"true\" title=\"Menge erhöhen\" (click)=\"addOne(scItem.item.i_id)\"></i></button>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Bestellung prüfen</h2>\n<div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"order-conf-panel\">\n            <h4>Rechnungsadresse</h4>\n            <span *ngIf=\"billingAddress.gender=='FEMALE'\">Frau</span>\n            <span *ngIf=\"billingAddress.gender=='MALE'\">Herr</span>\n            {{billingAddress.firstName}} {{billingAddress.lastName}} <br>\n            {{billingAddress.streetNo}}<br>\n            {{billingAddress.zip}} {{billingAddress.city}}<br>\n            {{billingAddress.country}}<br>\n            <button class=\"btn btn-primary\" (click)=\"changeAddress('billing')\">Rechnungsadresse ändern</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"order-conf-panel\">\n            <h4>Lieferadresse</h4>\n            <span *ngIf=\"shippingAddress.gender=='FEMALE'\">Frau</span>\n            <span *ngIf=\"shippingAddress.gender=='MALE'\">Herr</span>\n            {{shippingAddress.firstName}} {{shippingAddress.lastName}} <br>\n            {{shippingAddress.streetNo}} <br>\n            {{shippingAddress.zip}} {{shippingAddress.city}}<br>\n            {{shippingAddress.country}}<br>\n            <button class=\"btn btn-primary\" (click)=\"changeAddress('shipping')\">Lieferadresse ändern</button>\n        </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"order-conf-panel\">\n            <h4>Zahlungsart</h4>\n            Rechnung\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n        <webshop-cart-items [shoppingCart]=\"shoppingCart\"></webshop-cart-items>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div id=\"sc-overview\">\n            <h4>Zusammenfassung</h4>\n            Summe: <span class=\"pull-right\">{{total | currency:'EUR':true}}</span><br>\n            Versandkosten: <span class=\"pull-right\">{{0 | currency:'EUR':true}}</span><br>\n            <b>Gesamtsumme: <span class=\"pull-right\">{{total | currency:'EUR':true}}</span></b><br>\n            <a (click)=\"preOrderAvailabilityCheck()\" class=\"btn btn-primary\">Kostenpflichtig bestellen <i\n                    class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></a>\n            <alert *ngIf=\"allGood === false\" type=\"danger\" dismissible=\"true\" (click)=\"allGood = true\" >\n                <strong>Upps!</strong>\n                <br>\n                <div [innerHTML]=\"unavailableMessage | safeHtml\"></div>\n                <br>\n                Bitte passen Sie Ihre Bestellung an.\n            </alert>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Bestellung erfolgreich</h2>\n<div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n        <p>Ihre Bestellung wurde erfolgreich übermittelt.</p>\n        <p>Den Status Ihrer Bestellung können Sie im <a href=\"#/shop/account\">Benutzerbereich</a> einsehen</p>\n    </div>\n</div>"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Warenkorb</h2>\n<div class=\"row\">\n    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n        <webshop-cart-items [shoppingCart]=\"shoppingCart\"></webshop-cart-items>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div id=\"sc-overview\">\n            <h4>Zusammenfassung</h4>\n            Summe: <span class=\"pull-right\">{{total | currency:'EUR':true}}</span><br>\n            Versandkosten: <span class=\"pull-right\">{{0 | currency:'EUR':true}}</span><br>\n            <b>Gesamtsumme: <span class=\"pull-right\">{{total | currency:'EUR':true}}</span></b><br>\n            <a *ngIf=\"shoppingCart.items.length === 0\" href=\"#/shop/checkout\" class=\"btn btn-primary disabled\">Zur Kasse  <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></a>\n            <a *ngIf=\"shoppingCart.items.length !== 0\" href=\"#/shop/checkout\" class=\"btn btn-primary\">Zur Kasse  <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<carousel>\n  <slide>\n    <img class=\"carousel-image\" src=\"assets/banner1.jpg\" alt=\"First slide\">\n    <div class=\"carousel-caption\">\n      <h3>Produkte höchster Qualität</h3>\n      <p>Bei uns finden Sie eine Kollektion der Besten Materialien für Ihr Hobby</p>\n    </div>\n  </slide>\n  <slide>\n    <img class=\"carousel-image\" src=\"assets/banner2.jpg\" alt=\"Second slide\">\n    <div class=\"carousel-caption\">\n      <h3>Große Auswahl an Produkten</h3>\n      <p>Egal ob einfarbig oder kunterbunt, bei uns finden Sie alles was Sie für Ihre Projekte suchen</p>\n    </div>\n  </slide>\n  <slide>\n    <img class=\"carousel-image\" src=\"assets/banner3.jpg\" alt=\"Third slide\">\n    <div class=\"carousel-caption\">\n      <h3>Für Anfänger und Fortgeschrittene</h3>\n      <p>Sind Sie Anfänger und Sie wissen nicht wo Sie anfangen möchten? Wir haben die perfekten Produksets für Ihren Start.</p>\n    </div>\n  </slide>\n  <slide>\n    <img class=\"carousel-image\" src=\"assets/banner4.jpg\" alt=\"Third slide\">\n    <div class=\"carousel-caption\">\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </div>\n  </slide>\n</carousel>"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<h2>Impressum</h2>\n<p>Martha Musterfrau<br/>\n  Musterstra&#223;e 1<br/>\n  12345 Musterstadt<br/>\n  0123/456789<br/>\n  0123/4567890<br/>\n  <a href=\"mailto:woolinessshop@gmail.com\">woolinessshop@gmail.com</a>\n</p>\n<meta name=\"generator\" content=\"Impressum-Generator der Kanzlei Hensche Rechtsanwälte\"/>\n<p>&nbsp;</p>\n<h2>Disclaimer - rechtliche Hinweise</h2>\n<p><strong>Auskunfts- und Widerrufsrecht</strong></p>\n<p>Sie haben jederzeit das Recht, sich unentgeltlich und unverz&#252;glich &#252;ber die zu Ihrer Person erhobenen Daten\n  zu erkundigen. Ebenfalls k&#246;nnen Sie Ihre Zustimmung zur Verwendung Ihrer angegebenen pers&#246;nlichen Daten mit\n  Wirkung f&#252;r die Zukunft widerrufen. Hierf&#252;r wenden Sie sich bitte an den im Impressum angegebenen\n  Diensteanbieter.</p>\n<p><strong>Datenschutz (allgemein)</strong></p>\n<p>Die Nutzung der Webseite ist grunds&#228;tzlich ohne Angabe personenbezogener Daten m&#246;glich. Soweit\n  personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit\n  m&#246;glich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdr&#252;ckliche Zustimmung nicht an Dritte\n  weitergegeben.</p>\n<p>Sofern ein Vertragsverh&#228;ltnis begr&#252;ndet, inhaltlich ausgestaltet oder ge&#228;ndert werden soll oder Sie an\n  uns eine Anfrage stellen, erheben und verwenden wir personenbezogene Daten von Ihnen, soweit dies zu diesem Zwecke\n  erforderlich ist (Bestandsdaten). Wir erheben, verarbeiten und nutzen personenbezogene Daten soweit dies erforderlich\n  ist, um Ihnen die Inanspruchnahme des Webangebots zu erm&#246;glichen (Nutzungsdaten). S&#228;mtliche personenbezogenen\n  Daten werden nur solange gespeichert wie dies f&#252;r den genannten Zweck (Bearbeitung Ihrer Anfrage oder Abwicklung\n  eines Vertrags) erforderlich ist. Hierbei werden steuer- und handelsrechtliche Aufbewahrungsfristen von uns\n  ber&#252;cksichtigt. Auf Anordnung der zust&#228;ndigen Stellen m&#252;ssen wir im Einzelfall Auskunft &#252;ber diese\n  Daten (Bestandsdaten) erteilen, soweit dies f&#252;r Zwecke der Strafverfolgung, zur Gefahrenabwehr, zur Erf&#252;llung\n  der gesetzlichen Aufgaben der Verfassungsschutzbeh&#246;rden oder des Milit&#228;rischen Abschirmdienstes oder zur\n  Durchsetzung der Rechte am geistigen Eigentum erforderlich ist.</p>\n<p>Wir weisen ausdr&#252;cklich darauf hin, dass die Daten&#252;bertragung im Internet (z. B. bei der Kommunikation per\n  E-Mail) Sicherheitsl&#252;cken aufweisen kann. Vor dem Zugriff auf Daten kann nicht l&#252;ckenlos gesch&#252;tzt\n  werden.</p>\n<p>Die Nutzung von im Rahmen der Impressumspflicht ver&#246;ffentlichten Kontaktdaten durch Dritte zur &#220;bersendung\n  von nicht ausdr&#252;cklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdr&#252;cklich untersagt.\n  Ausgenommen hiervon sind bestehende Gesch&#228;ftsbeziehungen bzw. es liegt Ihnen eine entsprechende Einwilligung von uns\n  vor.</p>\n<p>Die Anbieter und alle auf dieser Website genannten Dritten behalten sich ausdr&#252;cklich rechtliche Schritte im\n  Falle der unverlangten Zusendung von Werbeinformationen vor. Gleiches gilt f&#252;r die kommerzielle Verwendung und\n  Weitergabe der Daten.</p>\n<p>&nbsp;</p>\n<p><strong>Disclaimer (Haftungsausschluss)</strong></p>\n<p><strong>1. Haftung f&#252;r Inhalte</strong></p>\n<p>Als Diensteanbieter sind wir gem&#228;&#223; &#167; 7 Abs. 1 TMG f&#252;r eigene Inhalte auf diesen Seiten nach den\n  allgemeinen Gesetzen verantwortlich. Nach &#167;&#167; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht\n  verpflichtet, &#252;bermittelte oder gespeicherte fremde Informationen zu &#252;berwachen oder nach Umst&#228;nden zu\n  forschen, die auf eine rechtswidrige T&#228;tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung\n  von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&#252;hrt. Eine diesbez&#252;gliche Haftung ist\n  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&#246;glich. Bei Bekanntwerden von\n  entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>\n<p><strong>2. Haftung f&#252;r Links</strong></p>\n<p>Diese Website enth&#228;lt Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss genommen werden kann.\n  Deshalb kann f&#252;r diese fremden Inhalte auch keine Gew&#228;hr &#252;bernommen werden. F&#252;r die Inhalte der\n  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden\n  zum Zeitpunkt der Verlinkung auf m&#246;gliche Rechtsverst&#246;&#223;e &#252;berpr&#252;ft. Rechtswidrige Inhalte waren\n  zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne\n  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige\n  Links umgehend von dieser Website auf die rechtsverletzende Site entfernen.</p>\n<p><strong>3. Urheberrecht</strong></p>\n<p>Die durch die Diensteanbieter, deren Mitarbeiter und beauftragte Dritte erstellten Inhalte und Werke auf diesen Seiten\n  unterliegen dem deutschen Urheberrecht. Die Vervielf&#228;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung\n  au&#223;erhalb der Grenzen des Urheberrechtes bed&#252;rfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors\n  bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&#252;r den privaten, nicht kommerziellen Gebrauch\n  gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter\n  beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine\n  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von\n  Rechtsverletzungen werden derartige Inhalte umgehend entfernen.</p>\n<p>&nbsp;</p>\n<p>Dieses Impressum wurde mit Hilfe des <a target=\"_blank\"\n                                           href=\"http://www.hensche.de/impressum-generator.html\">Impressum-Generators</a> von <a target=\"_blank\" href=\"http://www.hensche.de/Rechtsanwalt_Arbeitsrecht_Berlin.html\">HENSCHE Rechtsanw&auml;lte</a> erstellt.</p>"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2 col-sm-6\">\n    <img class=\"img-responsive details-pic center-block\" src =\"api/v1/items/images/{{itemId}}\">\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <br>\n        <div class=\"item-brand\">{{item.brand}}</div>\n        <div class=\"item-name\"><h2>{{item.name}}</h2></div>\n      </div>\n      <div class=\"col-lg-12\">\n        <h3 class=\"item-price\">{{item.price | currency:'EUR':true}}</h3>\n        Artikelnr.: {{item.articleNumber}}\n        <div class=\"stock\">\n          <div class=\"item-in-stock\" *ngIf=\"item.stock > 10\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i> Auf Lager</div>\n          <div class=\"item-stock-low\" *ngIf=\"item.stock <= 10 && item.stock > 0\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i> Nur noch {{item.stock}} auf Lager</div>\n          <div class=\"item-not-in-stock\" *ngIf=\"item.stock == 0\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i> Nicht auf Lager</div>\n          <br>\n          <button class=\"btn btn-primary\" (click)=\"addToCart(item)\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> In den Warenkorb</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 item-description\">\n    <br>\n    <h4>Beschreibung</h4>\n    <div [innerHTML]= \"item.description | safeHtml\" ></div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_admin_authentication_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = (function () {
    function AdminService(http, adminAuthService) {
        this.http = http;
        this.adminAuthService = adminAuthService;
    }
    AdminService.prototype.createItem = function (item) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put('/api/v1/admin/item', item, options).map(function (response) { return response.text(); });
    };
    AdminService.prototype.createItemset = function (item) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put('/api/v1/admin/itemSet', item, options).map(function (response) { return response.text(); });
    };
    AdminService.prototype.deleteItem = function (itemId) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put("/api/v1/admin/item/" + itemId, options).map(function (response) { return response.text(); });
    };
    AdminService.prototype.getAllUsers = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/v1/admin/users/admin', options).map(function (response) { return response.json(); });
    };
    AdminService.prototype.upload = function (file, itemName) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log(this.adminAuthService.adminToken);
        return this.http.post("/api/v1/file/upload/" + itemName, file, options).map(function (response) { return response.text(); });
    };
    AdminService.prototype.makeAdmin = function (email) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/api/v1/admin/users/admin', email, options).map(function (response) { return response.json(); });
    };
    AdminService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_admin_authentication_service__["a" /* AdminAuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_admin_authentication_service__["a" /* AdminAuthenticationService */]) === 'function' && _b) || Object])
    ], AdminService);
    return AdminService;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/yagoar/webshop/src/admin.service.js.map

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<div class=\"row item-grid\">\n  <div *ngFor=\"let item of pagedItems\">\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n      <a href=\"/#/shop/details/{{item.i_id}}\">\n        <div class=\"item-grid-img-wrapper\">\n        <img class=\"img-responsive center-block\" src = \"api/v1/items/images/{{item.i_id}}\"/>\n        </div>\n      </a>\n      <div class=\"item-info\">\n        <div class=\"item-name\"><a href=\"/#/shop/details/{{item.i_id}}\"><b>{{item.name}}</b></a></div>\n        <div class=\"item-brand\">{{item.brand}}</div>\n        <div class=\"item-price\">\n          <button type=\"button\" (click)=\"addToCart(item)\" class=\"btn btn-secondary\">\n            <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> <b>{{item.price | currency:'EUR':true}}</b>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"text-center\">\n    <pagination [itemsPerPage]=\"pageSize\" [boundaryLinks]=\"true\" [totalItems]=\"filteredItems.length\" [maxSize]=\"6\" [(ngModel)]=\"pager.currentPage\" class=\" pagination-sm\"\n                previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\" (pageChanged)=\"onPageChange($event)\"></pagination>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<div class=\"items-sidebar\">\n    <div >\n        <accordion>\n            <accordion-group #categoriesAcc id=\"categories-acc\" [isOpen]=\"categoriesIsOpen\">\n                <div accordion-heading class=\"sidebar-heading\">\n                    Kategorien\n                    <i class=\"pull-right float-xs-right glyphicon\"\n                       [ngClass]=\"{'glyphicon-chevron-down': categoriesAcc?.isOpen, 'glyphicon-chevron-right': !categoriesAcc?.isOpen}\"></i>\n                </div>\n                <tree-view class=\"toggle-list\"[categories]=\"categories\"></tree-view>\n            </accordion-group>\n        </accordion>\n    </div>\n    <div >\n        <accordion>\n            <accordion-group #filterAcc>\n                <div accordion-heading class=\"sidebar-heading\">\n                    Filter\n                    <i class=\"pull-right float-xs-right glyphicon\"\n                       [ngClass]=\"{'glyphicon-chevron-down': filterAcc?.isOpen, 'glyphicon-chevron-right': !filterAcc?.isOpen}\"></i>\n                </div>\n                <div class=\"toggle-list\">\n                    <ul>\n                        <li *ngFor=\"let filter of filters\">\n\n                            <div *ngIf=\"filter.options.length > 0\">\n                                <button (click)=\"filter.toggle()\" class=\"node-icon\">\n                                    <i *ngIf=\"!filter.expanded\" class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n                                    <i *ngIf=\"filter.expanded\" class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n                                    <span class=\"node-name\">{{filter.name}}</span>\n                                </button>\n                                <div *ngIf=\"filter.expanded\">\n                                    <ul>\n                                        <li *ngFor=\"let option of filter.options\">\n                                            <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"option.checked\" (change)=\"addFilter(option)\"/> {{option.name}}\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n                <button class=\"btn btn-primary\" (click)=\"setFilters()\">Filter übernehmen</button>\n                <button class=\"btn btn-secondary\" (click)=\"resetFilters()\">Filter löschen</button>\n            </accordion-group>\n        </accordion>\n    </div>\n</div>\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">{{category.name}}</h2>\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12\">\n    <items-sidebar [categories]=\"categories\" [filters]=\"filters\" ></items-sidebar>\n  </div>\n  <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-12\">\n    <div></div>\n    <items-grid [items]=\"items\"></items-grid>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"top-header\">\n  <div class=\"col-xs-12\">\n    <a href=\"#/shop/account\" class=\"top-header-link\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Mein Konto</a>\n    <a href=\"#/shop/cart\" class=\"top-header-link\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Warenkorb <span class=\"badge\">{{itemsInCart}}</span></a>\n  </div>\n</div>\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<div id=\"pattern-container\">\n    <div class=\"container-fluid\">\n        <webshop-top-header></webshop-top-header>\n        <webshop-header></webshop-header>\n        <webshop-menu></webshop-menu>\n    </div>\n</div>\n<div id=\"content-container\" class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n\n<div id=\"footer-container\" class=\"container-fluid\">\n    <webshop-footer></webshop-footer>\n</div>\n\n"

/***/ })

},[1155]);
//# sourceMappingURL=main.bundle.map