(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jianyuan\news-app\client\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function RegisterComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Only alphanumeric characters allowed [A-Z, a-z, 0-9] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Only alphanumeric characters allowed [A-Z, a-z, 0-9] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Error: Registration failed. Please try again later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(fb, router, alertService, authService) {
        this.fb = fb;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[A-Za-z0-9]+')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[A-Za-z0-9]+')]]
        });
    }
    register() {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        this.authService.register(username, password)
            .then(data => {
            console.log(data);
            this.registerError = false;
            this.router.navigateByUrl('');
            this.alertService.sendAlert('Registration successful! You may now login.');
        })
            .catch(err => {
            console.error(err);
            console.log('register fail');
            this.registerError = true;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 20, vars: 5, consts: [[3, "formGroup", "ngSubmit"], [1, "my-3"], [1, "form-floating", "mb-1"], ["type", "text", "id", "username", "placeholder", "Username", "formControlName", "username", 1, "form-control"], ["for", "username"], [1, "mt-2", "small"], [1, "text-danger"], [4, "ngIf"], [1, "form-floating", "mb-3"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["for", "password"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-100", 3, "disabled"], ["class", "mt-3 text-danger", 4, "ngIf"], [1, "mt-3", "text-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register for an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RegisterComponent_li_9_Template, 2, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RegisterComponent_li_16_Template, 2, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("username").invalid && ctx.form.get("username").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "4hj4":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert.service */ "YdJ5");




class AlertComponent {
    constructor(alertService, router) {
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.getAlert().subscribe(message => {
            console.log(`In alertComponent | subscribed message = ${message}`);
            if (message) {
                this.message = message;
                this.showAlert();
            }
            else {
                this.hideAlert();
            }
        });
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                this.alertService.clearAlert();
            }
        });
    }
    ngOnDestroy() {
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    hideAlert() {
        document.getElementById('alert').style.display = 'none';
    }
    showAlert() {
        document.getElementById('alert').style.display = '';
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 3, vars: 1, consts: [["id", "alert", "role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mt-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_2_listener() { return ctx.hideAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "my-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to News App!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To view news articles, click on \"View\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To post news articles, click on \"Post\". Login is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DLXL":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





class ArticleComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]}/api/articles/${id}`)
            .toPromise()
            .then(data => {
            console.log(data);
            this.article = data;
            this.article.imageDataUrl = 'data:' + this.article.imageMimeType
                + ';base64,' + this.article.imageBuffer;
        })
            .catch(err => console.log(err));
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 13, vars: 8, consts: [[1, "mt-3"], [1, "w-100", 3, "src"], [1, "my-3"], [1, "small"], [1, "bi", "bi-calendar", "me-1"], [1, "bi", "bi-person", "me-1"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.article.imageDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, ctx.article.datePosted, "MMMM d, y, h:mm a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.article.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.article.comments);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "OhBw":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/auth-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const token = this.authService.getToken();
        if (token) {
            const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




class AuthGuard {
    constructor(authService, alertService, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
    }
    canActivate(route, state) {
        console.log('In AuthGuard | canActivate');
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.authService.redirectUrl = state.url;
            this.router.navigateByUrl('/login');
            this.alertService.sendAlert('Please login first');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert.component */ "4hj4");





function AppComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login (Guest)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Logout (", ctx_r1.getUsername(), ")");
} }
class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    getUsername() {
        return this.authService.getUsername();
    }
    logout() {
        this.authService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 2, consts: [[1, "container-fluid"], [1, "d-flex", "pt-3", "pb-2", "justify-content-between"], ["routerLink", "/", 1, "text-decoration-none", "text-body", "fw-bold"], [1, "bi", "bi-newspaper"], ["routerLink", "/articles/view"], ["routerLink", "/articles/post"], ["routerLink", "/login", 4, "ngIf"], ["data-bs-toggle", "modal", "href", "#logoutModal", 4, "ngIf"], ["id", "logoutModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "d-flex", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["routerLink", "/login"], ["data-bs-toggle", "modal", "href", "#logoutModal"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " News App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_9_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_a_10_Template, 2, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirm logout?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n}\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  max-width: 250px;\r\n  margin: 1em auto;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAxZW0gYXV0bztcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "YdJ5":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    sendAlert(message) {
        this.subject.next(message);
    }
    clearAlert() {
        this.subject.next();
    }
    getAlert() {
        return this.subject.asObservable();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-list/article-list.component */ "eofC");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert/alert.component */ "4hj4");
/* harmony import */ var _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-article/post-article.component */ "c5Cx");
/* harmony import */ var _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http-interceptors/auth-interceptor */ "OhBw");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./webcam/webcam.component */ "j60U");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "8Y7J");



















const ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] },
    { path: 'articles/view', component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__["ArticleListComponent"] },
    { path: 'articles/view/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"] },
    { path: 'articles/post', component: _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_10__["PostArticleComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'articles/capture', component: _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_14__["WebcamComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_13__["WebcamModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
        _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__["ArticleListComponent"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
        _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_10__["PostArticleComponent"],
        _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_14__["WebcamComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_13__["WebcamModule"]] }); })();


/***/ }),

/***/ "c5Cx":
/*!********************************************************!*\
  !*** ./src/app/post-article/post-article.component.ts ***!
  \********************************************************/
/*! exports provided: PostArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostArticleComponent", function() { return PostArticleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");








class PostArticleComponent {
    constructor(http, fb, router, alertService) {
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.alertService = alertService;
        this.imagePlaceholderSrc = '../../assets/cactus.jpg';
    }
    ngOnInit() {
        let title = '';
        let comments = '';
        if (localStorage.getItem('title')) {
            title = localStorage.getItem('title');
        }
        if (localStorage.getItem('comments')) {
            comments = localStorage.getItem('comments');
        }
        this.form = this.fb.group({
            title: this.fb.control(title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            comments: this.fb.control(comments, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        if (localStorage.getItem('imageSrc')) {
            this.imageSrc = localStorage.getItem('imageSrc');
        }
        else {
            this.imageSrc = this.imagePlaceholderSrc;
        }
    }
    post() {
        const title = this.form.get('title').value;
        const comments = this.form.get('comments').value;
        const imageFile = this.imageDataUrlToFile(this.imageSrc);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('comments', comments);
        formData.append('imageFile', imageFile);
        this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_1__["SERVER_URL"]}/api/articles`, formData).toPromise()
            .then(data => {
            console.log(data);
            this.clear();
            this.alertService.sendAlert('Article posted successfully!');
        })
            .catch(err => {
            console.error(err);
            this.alertService.sendAlert('Error encountered when posting article.');
        });
    }
    clear() {
        this.form.reset();
        this.imageSrc = this.imagePlaceholderSrc;
        localStorage.removeItem('title');
        localStorage.removeItem('comments');
        localStorage.removeItem('imageSrc');
    }
    capture() {
        const title = this.form.get('title').value;
        const comments = this.form.get('comments').value;
        localStorage.setItem('title', title);
        localStorage.setItem('comments', comments);
        this.router.navigateByUrl('articles/capture');
    }
    isImageCaptured() {
        return this.imageSrc !== this.imagePlaceholderSrc;
    }
    imageDataUrlToFile(dataUrl) {
        const split = dataUrl.split(',');
        const mime = split[0].match(/:(.*?);/)[1];
        const bstr = atob(split[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const file = new File([u8arr], 'placeholder', { type: mime });
        return file;
    }
    get imgClass() {
        if (this.isImageCaptured()) {
            return 'w-100 border border-dark';
        }
        else {
            return 'w-50 border border-dark';
        }
    }
}
PostArticleComponent.ɵfac = function PostArticleComponent_Factory(t) { return new (t || PostArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
PostArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PostArticleComponent, selectors: [["app-post-article"]], decls: 22, vars: 4, consts: [[3, "formGroup", "ngSubmit"], [1, "my-3"], [1, "text-center", "mb-3"], [3, "src", "ngClass"], ["for", "title", 1, "h5", "mb-2"], ["type", "text", "id", "title", "placeholder", "Title", "formControlName", "title", 1, "form-control", "mb-3"], ["for", "comments", 1, "h5", "mb-2"], ["id", "comments", "placeholder", "Your thoughts", "formControlName", "comments", "rows", "5", 1, "form-control", "mb-3"], [1, "d-flex", "justify-content-between"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "bi", "bi-share-fill"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "bi", "bi-trash-fill"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-camera-fill"]], template: function PostArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PostArticleComponent_Template_form_ngSubmit_0_listener() { return ctx.post(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Share Something Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostArticleComponent_Template_button_click_16_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostArticleComponent_Template_button_click_19_listener() { return ctx.capture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Capture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngClass", ctx.imgClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid || !ctx.isImageCaptured());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWFydGljbGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "YdJ5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class AuthService {
    constructor(router, alertService, http) {
        this.router = router;
        this.alertService = alertService;
        this.http = http;
        this.redirectUrl = '';
    }
    login(username, password) {
        const body = { username, password };
        let success = false;
        this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]}/api/users/login`, body).toPromise()
            .then((data) => {
            localStorage.clear();
            const date = new Date();
            date.setSeconds(date.getSeconds() + data.expiresIn);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            localStorage.setItem('expiresAt', date.valueOf().toString());
            this.router.navigateByUrl(this.redirectUrl);
            this.alertService.sendAlert('Login successful!');
            success = true;
        })
            .catch(err => {
            console.error(err);
            success = false;
        });
        return success;
    }
    isLoggedIn() {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        const expiresAt = parseInt(localStorage.getItem('expiresAt'));
        const now = new Date().valueOf();
        if (now < expiresAt) {
            return true;
        }
        else {
            return false;
        }
    }
    getUsername() {
        return localStorage.getItem('username');
    }
    logout() {
        localStorage.clear();
        this.router.navigateByUrl('');
        this.alertService.sendAlert('Logout successful!');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    register(username, password) {
        const body = { username, password };
        return this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]}/api/users/register`, body)
            .toPromise();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eofC":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





const _c0 = function (a1) { return ["/articles/view", a1]; };
function ArticleListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, article_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", article_r1.imageDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 4, article_r1.datePosted, "MMMM d, y, h:mm a"), " ");
} }
class ArticleListComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_0__["SERVER_URL"]}/api/articles`).toPromise()
            .then(data => {
            data.forEach(article => {
                article.imageDataUrl = 'data:' + article.imageMimeType + ';base64,'
                    + article.imageBuffer;
            });
            this.articles = data;
        })
            .catch(err => {
            console.error(err);
        });
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], decls: 2, vars: 1, consts: [[1, "row", "row-cols-1", "mt-3", "d-flex", "justify-content-center"], ["class", "col text-center", 4, "ngFor", "ngForOf"], [1, "col", "text-center"], [3, "routerLink"], [1, "w-100", 3, "src"], [1, "mt-2"], [1, "small"], [1, "bi", "bi-calendar", "me-1"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleListComponent_div_1_Template, 10, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "j60U":
/*!********************************************!*\
  !*** ./src/app/webcam/webcam.component.ts ***!
  \********************************************/
/*! exports provided: WebcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class WebcamComponent {
    constructor(router) {
        this.router = router;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_0__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }
    back() {
        this.router.navigateByUrl('articles/post');
    }
    capture() {
        this.trigger.next();
    }
    switch() {
        this.nextWebcam.next(true);
    }
    handleImage(webcamImage) {
        localStorage.setItem('imageSrc', webcamImage.imageAsDataUrl);
        this.router.navigateByUrl('articles/post');
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
}
WebcamComponent.ɵfac = function WebcamComponent_Factory(t) { return new (t || WebcamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
WebcamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WebcamComponent, selectors: [["app-webcam"]], decls: 14, vars: 5, consts: [[1, "my-3"], [1, "text-center", "border", "border-secondary", "pt-1"], [3, "width", "trigger", "allowCameraSwitch", "switchCamera", "imageCapture"], [1, "d-flex", "justify-content-between", "mt-3"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "bi", "bi-arrow-left-circle-fill"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-camera-fill"], ["type", "button", 1, "btn", "btn-info", 3, "disabled", "click"], [1, "bi", "bi-arrow-repeat"]], template: function WebcamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Capture Image for Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "webcam", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("imageCapture", function WebcamComponent_Template_webcam_imageCapture_3_listener($event) { return ctx.handleImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebcamComponent_Template_button_click_5_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebcamComponent_Template_button_click_8_listener() { return ctx.capture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Capture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebcamComponent_Template_button_click_11_listener() { return ctx.switch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Switch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 350)("trigger", ctx.triggerObservable)("allowCameraSwitch", false)("switchCamera", ctx.nextWebcamObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.multipleWebcamsAvailable);
    } }, directives: [ngx_webcam__WEBPACK_IMPORTED_MODULE_0__["WebcamComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWJjYW0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: SERVER_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
// export const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = '';


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, consts: [[1, "d-flex", "justify-content-center", "mt-3"], ["src", "../../assets/404.jpg", 1, "w-100"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");






function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Incorrect username or password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.loginError = false;
    }
    login() {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        const success = this.authService.login(username, password);
        this.loginError = !success;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [[3, "formGroup", "ngSubmit"], [1, "my-3"], [1, "form-floating", "mb-1"], ["type", "text", "id", "username", "placeholder", "Username", "formControlName", "username", 1, "form-control"], ["for", "username"], [1, "form-floating", "mb-3"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["for", "password"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "w-100", 3, "disabled"], [1, "bi", "bi-door-open-fill"], [1, "mt-3"], ["routerLink", "/register"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " to register. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map