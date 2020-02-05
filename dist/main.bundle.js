webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseurl = "https://thebrindesapi.herokuapp.com";
        // baseurl = "http://127.0.0.1:8000";
        this.httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    ApiService.prototype.getAllCategorias = function () {
        return this.http.get(this.baseurl + '/api/categoria/', { headers: this.httpHeaders });
    };
    ApiService.prototype.getAllArtesCanecas = function () {
        return this.http.get(this.baseurl + '/api/artecaneca/', { headers: this.httpHeaders });
    };
    ApiService.prototype.getAllCategoriasArte = function () {
        return this.http.get(this.baseurl + '/api/categoriasarte/', { headers: this.httpHeaders });
    };
    ApiService.prototype.getAllBrindes = function () {
        return this.http.get(this.baseurl + '/api/brinde/', { headers: this.httpHeaders });
    };
    ApiService.prototype.getArteClienteCaneca = function (id) {
        return this.http.get(this.baseurl + '/api/arteClienteCaneca/' + id + '/', { headers: this.httpHeaders });
    };
    ApiService.prototype.getOneCategoria = function (slug) {
        return this.http.get(this.baseurl + '/api/categoria/' + slug + '/', { headers: this.httpHeaders });
    };
    ApiService.prototype.createOrcamento = function (orcamento) {
        var body = { name: orcamento.name, email: orcamento.email, phone: orcamento.phone, quantity: orcamento.quantity, brindes: orcamento.brindes };
        // print(body)
        return this.http.post(this.baseurl + '/api/orcamento/', body, { headers: this.httpHeaders });
    };
    ApiService.prototype.search = function (busca) {
        return this.http.get(this.baseurl + '/api/brinde/?search=' + busca, { headers: this.httpHeaders });
    };
    var _a;
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" ? _a : Object])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arte_cliente_arte_cliente_component__ = __webpack_require__("../../../../../src/app/arte-cliente/arte-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__personalizar_personalizar_component__ = __webpack_require__("../../../../../src/app/personalizar/personalizar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busca_busca_component__ = __webpack_require__("../../../../../src/app/busca/busca.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brindes_brindes_component__ = __webpack_require__("../../../../../src/app/brindes/brindes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empresa_empresa_component__ = __webpack_require__("../../../../../src/app/empresa/empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoria_categoria_component__ = __webpack_require__("../../../../../src/app/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__content_content_component__["a" /* ContentComponent */] },
    { path: 'empresa', component: __WEBPACK_IMPORTED_MODULE_5__empresa_empresa_component__["a" /* EmpresaComponent */] },
    { path: 'personalizar-caneca-porcelana', component: __WEBPACK_IMPORTED_MODULE_1__personalizar_personalizar_component__["a" /* PersonalizarComponent */] },
    { path: 'cliente/:id', component: __WEBPACK_IMPORTED_MODULE_0__arte_cliente_arte_cliente_component__["a" /* ArteClienteComponent */] },
    { path: 'categoria/:slug', component: __WEBPACK_IMPORTED_MODULE_6__categoria_categoria_component__["a" /* CategoriaComponent */] },
    { path: 'brindes/:categoria/:brinde', component: __WEBPACK_IMPORTED_MODULE_3__brindes_brindes_component__["a" /* BrindesComponent */] },
    { path: 'busca/:busca', component: __WEBPACK_IMPORTED_MODULE_2__busca_busca_component__["a" /* BuscaComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["e" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* PreloadAllModules */] })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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


var AppComponent = /** @class */ (function () {
    function AppComponent(title) {
        this.title = title;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title.setTitle('The Brindes - Brindes Personalizados em Teresina e todo Brasil!');
    };
    var _a;
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" ? _a : Object])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__empresa_empresa_component__ = __webpack_require__("../../../../../src/app/empresa/empresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__categoria_categoria_component__ = __webpack_require__("../../../../../src/app/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__brindes_brindes_component__ = __webpack_require__("../../../../../src/app/brindes/brindes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__busca_busca_component__ = __webpack_require__("../../../../../src/app/busca/busca.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__personalizar_personalizar_component__ = __webpack_require__("../../../../../src/app/personalizar/personalizar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__arte_cliente_arte_cliente_component__ = __webpack_require__("../../../../../src/app/arte-cliente/arte-cliente.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__empresa_empresa_component__["a" /* EmpresaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__categoria_categoria_component__["a" /* CategoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__brindes_brindes_component__["a" /* BrindesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__busca_busca_component__["a" /* BuscaComponent */],
                __WEBPACK_IMPORTED_MODULE_14__personalizar_personalizar_component__["a" /* PersonalizarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__arte_cliente_arte_cliente_component__["a" /* ArteClienteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/arte-cliente/arte-cliente.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  \n    /* keyframes for rotating animation */\n    \n      @keyframes spin {\n        from { transform: rotateY(160deg); }\n        to   { transform: rotateY(-20deg); }\n      }\n      \n      \n      .container {\n        width: 105px;\n        height: 400px;\n        position: relative;\n        perspective: 1400px;\n        margin: 10px auto;\n      }\n      \n      #carousel {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        transform-style: preserve-3d;\n        animation: spin 10s infinite linear;\n        transition: all 1s linear;\n        \n      }\n  /*     \n      #carousel figure {\n        margin: 0;\n        display: block;\n        position: absolute;\n        \n        width: 105px;\n        height: 400px;\n        left: 10px;\n        top: 10px;\n      }\n       */\n      \n      .aba{\n        background: #fff;\n       }   \n      #carousel figure {\n        margin: 0;\n        display: block;\n        position: absolute;\n        \n        width: 56px;\n        height: 400px;\n        left: 10px;\n        top: 10px;\n      }\n      \n      #carousel figure:nth-child(1) { background-position: 280px 0px; transform: rotateY( -3deg ) translateZ( 150px ); }\n  \n      #carousel figure:nth-child(2) { background-position: 224px 0px; transform: rotateY( 18deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(3) { background-position: 168px 0px; transform: rotateY(  39deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(4) { background-position: 112px 0px; transform: rotateY( 60deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(5) { background-position: 56px 0px; transform: rotateY(  81deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(6) { background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img3.png")) + "); width: 115px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 190px ); }\n      #carousel figure:nth-child(7) { transform: rotateY( 147deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(8) { background-position: 840px 0px; transform: rotateY( 147deg ) translateZ( 150px ); }\n      \n      #carousel figure:nth-child(9) { background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img3.png")) + "); width: 115px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 175px ); }\n  \n      #carousel figure:nth-child(10) { background-position: 784px 0px; transform: rotateY( 168deg ) translateZ( 150px ); }\n      \n      #carousel figure:nth-child(11) { background-position: 728px 0px; transform: rotateY( 189deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(12) { background-position: 672px 0px; transform: rotateY( 210deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(13) { background-position: 616px 0px; transform: rotateY( 231deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(14) { background-position: 560px 0px; transform: rotateY( 252deg ) translateZ( 150px ); }\n    \n      \n      #carousel figure:nth-child(15) { background-position: 504px 0px; transform: rotateY( 273deg ) translateZ( 150px ); }\n      #carousel figure:nth-child(16) { background-position: 448px 0px; transform: rotateY( 294deg ) translateZ( 150px ); }\n  \n      #carousel figure:nth-child(17) { background-position: 392px 0px; transform: rotateY( 315deg ) translateZ( 150px ); }\n     \n      \n      #carousel figure:nth-child(18) { background-position: 336px 0px; transform: rotateY( 336deg ) translateZ( 150px ); }\n  \n      \n  \n      \n      /* #carousel figure:nth-child(1) { background-position: 315px 0px; transform: rotateY(   0deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(2) { background-position: 210px 0px; transform: rotateY(  36deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(3) { background-position: 105px 0px; transform: rotateY(  72deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(4) { background-image: url(\"../../assets/img3.png\"); width: 110px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 210px ); }\n      #carousel figure:nth-child(5) { transform: rotateY( 144deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(6) { background-position: 840px 0px; transform: rotateY( 180deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(7) { background-position: 735px 0px; transform: rotateY( 216deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(8) { background-position: 630px 0px; transform: rotateY( 252deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(9) { background-position: 525px 0px; transform: rotateY( 288deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(10) { background-position: 420px 0px; transform: rotateY( 324deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(11) { background-image: url(\"../../assets/img3.png\"); width: 110px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 210px ); }\n       */\n      /* esse é para o fundo primeiro, a a imagem cinza por tras feito no corel  */\n    /*\n    #carousel figure:nth-child(1) { background-position: 370px 0px; transform: rotateY(   0deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(2) { background-position: 265px 0px; transform: rotateY(  36deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(3) { background-position: 160px 0px; transform: rotateY(  72deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(4) { background-image: url(\"../assets/img3.png\"); width: 110px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 210px ); }\n      #carousel figure:nth-child(5) { background-position: 1000px 0px; transform: rotateY( 144deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(6) { background-position: 895px 0px; transform: rotateY( 180deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(7) { background-position: 790px 0px; transform: rotateY( 216deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(8) { background-position: 685px 0px; transform: rotateY( 252deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(9) { background-position: 580px 0px; transform: rotateY( 288deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(10) { background-position: 475px 0px; transform: rotateY( 324deg ) translateZ( 161px ); }\n      #carousel figure:nth-child(11) { background-image: url(\"../assets/img3.png\"); width: 110px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 210px ); }\n      \n      */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/arte-cliente/arte-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br>\n\n<div class=\"col-sm-12 col-md-5\">\n  <section class=\"container\">\n    <div id=\"carousel\">\n    \n        <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n      <figure class=\"aba\" [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"></figure>\n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n      <figure></figure>\n\n      <figure class=\"aba\" [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"></figure>\n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n    \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n\n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n      \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n      <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n\n\n\n\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 7 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 8 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 9 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"></figure> aba -->\n      <!-- <figure>1</figure> 1 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 2 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 3 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 4 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 5 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 6 -->\n      <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"> </figure> aba -->\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/arte-cliente/arte-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArteClienteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArteClienteComponent = /** @class */ (function () {
    function ArteClienteComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.title = 'app';
        this.source = "../../assets/img2.png";
        this.color = "red";
        this.local = "../../assets/img2.png";
        this.local_aba = "../../assets/img_aba.png";
        this.artecliente = { id: 0, image: "" };
        this.param_busca = this.route.snapshot.paramMap.get("id");
        this.getArteCliente(this.param_busca);
    }
    ArteClienteComponent.prototype.ngOnInit = function () {
    };
    ArteClienteComponent.prototype.getArteCliente = function (id) {
        var _this = this;
        this.api.getArteClienteCaneca(id).subscribe(function (data) {
            _this.artecliente.id = data["id"];
            _this.artecliente.image = data["image"];
            var re = /\ /gi;
            var new_local = data["image"].replace(re, "+");
            _this.local = new_local;
        }, function (error) {
            console.log(error);
        });
    };
    var _a, _b, _c;
    ArteClienteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-arte-cliente',
            template: __webpack_require__("../../../../../src/app/arte-cliente/arte-cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/arte-cliente/arte-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" ? _c : Object])
    ], ArteClienteComponent);
    return ArteClienteComponent;
}());

//# sourceMappingURL=arte-cliente.component.js.map

/***/ }),

/***/ "../../../../../src/app/brindes/brindes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brindes/brindes.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- DIV CONTEUDO INDEDx -->\n\n    <div class=\"container margem_topo_fixo\">\n\n        <div class=\"row\">\n            \n            <div class=\"col-sm-12\">\n\n                <ol  class=\"breadcrumb bg-light\">\n                        \n                    <li class=\"breadcrumb-item\"><a href=\"\">Inicio</a></li>\n                    <li class=\"breadcrumb-item\"><a  routerLink=\"/categoria/{{categoria.slug}}\" href=\"\">{{ categoria.name }}</a></li>\n                    <li class=\"breadcrumb-item\">{{ brinde.name }}</li>\n                </ol>\n        \n                <form #busca = \"ngForm\" (ngSubmit) = \"onClickSubmitSearch(busca.value)\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" ngModel name=\"campo_busca\" placeholder=\"Pesquisar por todo o site...\">\n                        <span class=\"input-group-btn\">\n                        <button class=\"btn btn-success\" type=\"submit\">Buscar !</button>\n                        </span>\n                    </div><!-- /input-group -->\n                </form>\n\n            </div>\n        </div>\n        \n            <div class=\"row\">\n                \n                <div class=\"titulo_categoria_index\">\n                    <h1>{{ brinde.name }}</h1>\n                </div>\n            </div>  \n            <hr>  \n            <br>\n            <br>\n            <!-- <div class=\"row\">\n                <div class=\"alert alert-success\" role=\"alert\">Orçamento solicitado com sucesso! Retornaremos seu pedido o mais rápido possível.</div>\n            </div> -->\n            <div class=\"row\">  \n\n                <div class=\"col-sm-6\">\n                    \n                        <img class=\"img-fluid\" width=\"400\" src=\"{{ brinde.image }}\" alt=\"{{ brinde.name }}\" />\n\n\n                </div>\n                <div class=\" col-sm-6\">\n                    \n                    <div class=\"jumbotron bg-light borda\">\n                        <h3 class=\"text-center\">Formulario de orçamento!</h3>\n                        <br /><br />\n\n                         <form #orcamento = \"ngForm\" (ngSubmit) = \"onClickSubmitOrcamento(orcamento.value)\">\n                                <div class=\"form-group\">\n                                  <label class=\"font-weight-bold\" for=\"nomeEmpresa\">Nome / Empresa</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"name\" ngModel  placeholder=\"Seu nome ou nome de sua empresa\">\n                                </div>\n                                <div class=\"form-group\">\n                                  <label class=\"font-weight-bold\" for=\"email\">Email</label>\n                                  <input type=\"email\" class=\"form-control\" name=\"email\" ngModel aria-describedby=\"emailHelp\" placeholder=\"Seu email\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"font-weight-bold\" for=\"phone\">Fone / Whatsapp</label>\n                                    <input type=\"text\" class=\"form-control\" name=\"phone\" ngModel  placeholder=\"Informe seu contato\">\n                                </div>\n                                <input type=\"hidden\" name=\"brindes\" ngModel [(ngModel)]=\"brinde.id\">\n                                <div class=\"form-group\">\n                                    <label class=\"font-weight-bold\" for=\"quantity\">Quantidade</label>\n                                    <input type=\"number\" class=\"form-control\" name=\"quantity\" ngModel  placeholder=\"Quantidade desejada\">\n                                </div>\n\n                                \n                                <button type=\"submit\" class=\"btn btn-success\">Enviar Orçamento!</button>\n                        </form> \n\n                        <!-- <form #userlogin = \"ngForm\" (ngSubmit) = \"onClickSubmit(userlogin.value)\" >\n                                <input type = \"text\" name = \"emailid\" placeholder = \"emailid\" ngModel>\n                                <br/>\n                                <input type = \"password\" name = \"passwd\" placeholder = \"passwd\" ngModel>\n                                <br/>\n                                <input type = \"submit\" value = \"submit\">\n                             </form> -->\n                    </div>\n                    \n                </div>\n            </div>\n            <div class=\"row\">\n\n\n                <div class=\"card \">\n                    <div class=\"card-header alert-success\">\n                            Informaçoes do produto\n                    </div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">{{ brinde.name }}</h5>\n                        <p class=\"card-text\"> \n                            {{ brinde.details }}\n                        </p>\n                    </div>\n                </div>\n\n\n            </div>\n\n    </div>\n<!-- FIM DIV CONTEUDO INDEDx -->"

/***/ }),

/***/ "../../../../../src/app/brindes/brindes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrindesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrindesComponent = /** @class */ (function () {
    function BrindesComponent(api, route, router, title) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.router = router;
        this.title = title;
        this.categorias = [{}];
        this.brindes = [{}];
        this.categoria = { id: 0, name: "", slug: "" };
        this.brinde = { id: 0, name: "", slug: "", subname: "", details: "", image: "", created_at: "", uploaded_at: "", is_active: "", categoria: "", fornecedores: "" };
        this.getAllCategorias = function () {
            _this.api.getAllCategorias().subscribe(function (data) {
                _this.categorias = data;
                _this.categorias.forEach(function (element) {
                    if (_this.param_cat == element["slug"]) {
                        _this.categoria.id = element["id"];
                        _this.categoria.name = element["name"];
                        _this.categoria.slug = element["slug"];
                    }
                });
            }, function (error) {
                console.log(error);
            });
        };
        this.getAllBrindes = function () {
            _this.api.getAllBrindes().subscribe(function (data) {
                _this.brindes = data;
                _this.brindes.forEach(function (element) {
                    if (_this.param_brinde == element["slug"]) {
                        _this.brinde.id = element["id"];
                        _this.brinde.name = element["name"];
                        _this.brinde.slug = element["slug"];
                        _this.brinde.subname = element["subname"];
                        _this.brinde.details = element["details"];
                        _this.brinde.image = element["image"];
                        _this.brinde.created_at = element["created_at"];
                        _this.brinde.uploaded_at = element["uploaded_at"];
                        _this.brinde.uploaded_at = element["suploaded_atlug"];
                        _this.brinde.is_active = element["is_active"];
                        _this.brinde.categoria = element["categoria"];
                        _this.brinde.fornecedores = element["fornecedores"];
                    }
                });
                _this.title.setTitle(_this.brinde.name + ' - The Brindes - Brindes Personalizados em Teresina e todo Brasil!');
            }, function (error) {
                console.log(error);
            });
        };
        this.param_brinde = this.route.snapshot.paramMap.get("brinde");
        this.param_cat = this.route.snapshot.paramMap.get("categoria");
        this.orcamento = { name: '', email: '', phone: '', quantity: 0 };
        this.getAllBrindes();
        this.getAllCategorias();
    }
    BrindesComponent.prototype.onClickSubmitOrcamento = function (orcamento) {
        // alert(orcamento.brindes)
        this.api.createOrcamento(orcamento).subscribe(function (data) {
            alert("Muito Obrigado!! Seu orçamento foi enviado com sucesso. Aguarde em quanto respondemos. Ou entre em contato em: (86) 99436-7255");
        }, function (error) {
            console.log(error);
        });
    };
    BrindesComponent.prototype.onClickSubmitSearch = function (busca) {
        this.router.navigateByUrl('/busca/' + busca.campo_busca);
    };
    BrindesComponent.prototype.ngOnInit = function () {
    };
    var _a, _b, _c, _d;
    BrindesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-brindes',
            template: __webpack_require__("../../../../../src/app/brindes/brindes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/brindes/brindes.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" ? _d : Object])
    ], BrindesComponent);
    return BrindesComponent;
}());

//# sourceMappingURL=brindes.component.js.map

/***/ }),

/***/ "../../../../../src/app/busca/busca.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/busca/busca.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- DIV CONTEUDO INDEDx -->\n<div class=\"container margem_topo_fixo\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <ol class=\"breadcrumb bg-light\">\n                <li class=\"breadcrumb-item\"><a href=\"\">Inicio</a></li>\n                <li class=\"breadcrumb-item\">busca</li>\n            \n                \n            </ol>\n\n            <form #busca = \"ngForm\" (ngSubmit) = \"onClickSubmitSearch(busca.value)\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" ngModel name=\"campo_busca\" placeholder=\"Pesquisar por todo o site...\">\n                    <span class=\"input-group-btn\">\n                    <button class=\"btn btn-success\" type=\"submit\">Buscar !</button>\n                    </span>\n                </div><!-- /input-group -->\n            </form>\n            <br>\n            <br>\n\n             <div class=\"\">\n                <h1>Busca por: {{ param_busca }}</h1>\n            </div>\n            \n            <hr>\n            <br>\n            <br>\n\n            <!-- {% for brinde in categoria.brindes.all %}\n                {% if brinde.is_active == True %} -->\n             <div class=\"row\">\n                <div *ngFor=\"let brinde of brindes\" class=\"list-items\">\n                    <a routerLink=\"/brindes/{{brinde.categoria}}/{{brinde.slug}}\" *ngIf=\"brinde.is_active==true\">\n                        <div class=\"produto text-center\">\n                        \n                        <div class=\"img\">\n\n                                <img class=\"img-fluid\" width=\"350\" src=\"{{ brinde.image }}\" alt=\"{{ brinde.image }}\" />\n                     \n                        </div>\n                        <div class=\"titulo\">{{ brinde.name }}</div>\n                        <div class=\"subtitulo\">{{ brinde.subname }}</div>\n                        <div class=\"botao\">\n                          <a routerLink=\"/brindes/{{brinde.categoria}}/{{brinde.slug}}\" class=\"btn btn-success\">Fazer orçamento</a>\n                        </div>\n                    </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- FIM DIV CONTEUDO INDEDx -->"

/***/ }),

/***/ "../../../../../src/app/busca/busca.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscaComponent = /** @class */ (function () {
    function BuscaComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.brindes = [{}];
        this.param_busca = this.route.snapshot.paramMap.get("busca");
        this.getBusca(this.param_busca);
    }
    BuscaComponent.prototype.ngOnInit = function () {
    };
    BuscaComponent.prototype.getBusca = function (busca) {
        var _this = this;
        this.api.search(busca).subscribe(function (data) {
            _this.brindes = data;
        }, function (error) {
            console.log(error);
        });
    };
    BuscaComponent.prototype.onClickSubmitSearch = function (busca) {
        this.router.navigateByUrl('/busca/' + busca.campo_busca);
    };
    var _a, _b, _c;
    BuscaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-busca',
            template: __webpack_require__("../../../../../src/app/busca/busca.component.html"),
            styles: [__webpack_require__("../../../../../src/app/busca/busca.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" ? _c : Object])
    ], BuscaComponent);
    return BuscaComponent;
}());

//# sourceMappingURL=busca.component.js.map

/***/ }),

/***/ "../../../../../src/app/categoria/categoria.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categoria/categoria.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- DIV CONTEUDO INDEDx -->\n<div class=\"container margem_topo_fixo\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <ol class=\"breadcrumb bg-light\">\n                <li class=\"breadcrumb-item\"><a href=\"\">Inicio</a></li>\n                <li class=\"breadcrumb-item\">{{ categoria.name }}</li>\n            \n                \n            </ol>\n\n            <form #busca = \"ngForm\" (ngSubmit) = \"onClickSubmitSearch(busca.value)\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" ngModel name=\"campo_busca\" placeholder=\"Pesquisar por todo o site...\">\n                        <span class=\"input-group-btn\">\n                        <button class=\"btn btn-success\" type=\"submit\">Buscar !</button>\n                        </span>\n                    </div><!-- /input-group -->\n                </form>\n            \n<br><br>\n             <div class=\"\">\n                <h1>{{ categoria.name }}</h1>\n            </div>\n            \n            <hr>\n            <br><br>\n            <!-- {% for brinde in categoria.brindes.all %}\n                {% if brinde.is_active == True %} -->\n             <div class=\"row\">\n                <div *ngFor=\"let brinde of brindes\" class=\"list-items\">\n                    <a routerLink=\"/brindes/{{categoria.slug}}/{{brinde.slug}}\" *ngIf=\"brinde.categoria==categoria.id && brinde.is_active==true\">\n                        <div class=\"produto text-center\">\n                        \n                        <div class=\"img\">\n\n                                <img class=\"img-fluid\" width=\"350\" src=\"{{ brinde.image }}\" alt=\"{{ brinde.image }}\" />\n                     \n                        </div>\n                        <div class=\"titulo\">{{ brinde.name }}</div>\n                        <div class=\"subtitulo\">{{ brinde.subname }}</div>\n                        <div class=\"botao\">\n                          <a routerLink=\"/brindes/{{categoria.slug}}/{{brinde.slug}}\" class=\"btn btn-success\">Fazer orçamento</a>\n                        </div>\n                    </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- FIM DIV CONTEUDO INDEDx -->"

/***/ }),

/***/ "../../../../../src/app/categoria/categoria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaComponent = /** @class */ (function () {
    function CategoriaComponent(api, route, router, title) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.router = router;
        this.title = title;
        this.categorias = [{}];
        this.brindes = [{}];
        this.categoria = { id: 0, name: "", slug: "" };
        this.getAllCategorias = function () {
            _this.api.getAllCategorias().subscribe(function (data) {
                _this.categorias = data;
                _this.categorias.forEach(function (element) {
                    if (_this.param == element["slug"]) {
                        _this.categoria.id = element["id"];
                        _this.categoria.name = element["name"];
                        _this.categoria.slug = element["slug"];
                    }
                });
                _this.title.setTitle(_this.categoria.name + ' - The Brindes - Brindes Personalizados em Teresina e todo Brasil!');
            }, function (error) {
                console.log(error);
            });
        };
        this.getAllBrindes = function () {
            _this.api.getAllBrindes().subscribe(function (data) {
                _this.brindes = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.param = this.route.snapshot.paramMap.get("slug");
        this.getAllCategorias();
        this.getAllBrindes();
    }
    CategoriaComponent.prototype.onClickSubmitSearch = function (busca) {
        this.router.navigateByUrl('/busca/' + busca.campo_busca);
    };
    CategoriaComponent.prototype.ngOnInit = function () {
    };
    var _a, _b, _c, _d;
    CategoriaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-categoria',
            template: __webpack_require__("../../../../../src/app/categoria/categoria.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categoria/categoria.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" ? _d : Object])
    ], CategoriaComponent);
    return CategoriaComponent;
}());

//# sourceMappingURL=categoria.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-header{\n    color: #fff;\n}\n.card-footer{\n    background-color: #fff;\n}\n\n/* keyframes for rotating animation */\n\n  @keyframes spin {\n    from { transform: rotateY(160deg); }\n    to   { transform: rotateY(-20deg); }\n  }\n  \n  \n  .container_content {\n    width: 105px;\n    height: 400px;\n    position: relative;\n    perspective: 1400px;\n    margin: 10px auto;\n  }\n  \n  #carousel {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    transform-style: preserve-3d;\n    animation: spin 10s infinite linear;\n    transition: all 1s linear;\n    \n  }\n/*     \n  #carousel figure {\n    margin: 0;\n    display: block;\n    position: absolute;\n    \n    width: 105px;\n    height: 400px;\n    left: 10px;\n    top: 10px;\n  }\n   */\n  \n  .aba{\n    background: #fff;\n   }   \n  #carousel figure {\n    margin: 0;\n    display: block;\n    position: absolute;\n    \n    width: 56px;\n    height: 400px;\n    left: 10px;\n    top: 10px;\n  }\n  \n  #carousel figure:nth-child(1) { background-position: 280px 0px; transform: rotateY( -3deg ) translateZ( 150px ); }\n\n  #carousel figure:nth-child(2) { background-position: 224px 0px; transform: rotateY( 18deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(3) { background-position: 168px 0px; transform: rotateY(  39deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(4) { background-position: 112px 0px; transform: rotateY( 60deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(5) { background-position: 56px 0px; transform: rotateY(  81deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(6) { background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img3.png")) + "); width: 115px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 190px ); }\n  #carousel figure:nth-child(7) { transform: rotateY( 147deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(8) { background-position: 840px 0px; transform: rotateY( 147deg ) translateZ( 150px ); }\n  \n  #carousel figure:nth-child(9) { background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img3.png")) + "); width: 115px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 175px ); }\n\n  #carousel figure:nth-child(10) { background-position: 784px 0px; transform: rotateY( 168deg ) translateZ( 150px ); }\n  \n  #carousel figure:nth-child(11) { background-position: 728px 0px; transform: rotateY( 189deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(12) { background-position: 672px 0px; transform: rotateY( 210deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(13) { background-position: 616px 0px; transform: rotateY( 231deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(14) { background-position: 560px 0px; transform: rotateY( 252deg ) translateZ( 150px ); }\n\n  \n  #carousel figure:nth-child(15) { background-position: 504px 0px; transform: rotateY( 273deg ) translateZ( 150px ); }\n  #carousel figure:nth-child(16) { background-position: 448px 0px; transform: rotateY( 294deg ) translateZ( 150px ); }\n\n  #carousel figure:nth-child(17) { background-position: 392px 0px; transform: rotateY( 315deg ) translateZ( 150px ); }\n \n  \n  #carousel figure:nth-child(18) { background-position: 336px 0px; transform: rotateY( 336deg ) translateZ( 150px ); }\n\n  \n\n  \n  /* #carousel figure:nth-child(1) { background-position: 315px 0px; transform: rotateY(   0deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(2) { background-position: 210px 0px; transform: rotateY(  36deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(3) { background-position: 105px 0px; transform: rotateY(  72deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(4) { background-image: url(\"../../assets/img3.png\"); width: 110px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 210px ); }\n  #carousel figure:nth-child(5) { transform: rotateY( 144deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(6) { background-position: 840px 0px; transform: rotateY( 180deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(7) { background-position: 735px 0px; transform: rotateY( 216deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(8) { background-position: 630px 0px; transform: rotateY( 252deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(9) { background-position: 525px 0px; transform: rotateY( 288deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(10) { background-position: 420px 0px; transform: rotateY( 324deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(11) { background-image: url(\"../../assets/img3.png\"); width: 110px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 210px ); }\n   */\n  /* esse é para o fundo primeiro, a a imagem cinza por tras feito no corel  */\n/*\n#carousel figure:nth-child(1) { background-position: 370px 0px; transform: rotateY(   0deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(2) { background-position: 265px 0px; transform: rotateY(  36deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(3) { background-position: 160px 0px; transform: rotateY(  72deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(4) { background-image: url(\"../assets/img3.png\"); width: 110px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 210px ); }\n  #carousel figure:nth-child(5) { background-position: 1000px 0px; transform: rotateY( 144deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(6) { background-position: 895px 0px; transform: rotateY( 180deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(7) { background-position: 790px 0px; transform: rotateY( 216deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(8) { background-position: 685px 0px; transform: rotateY( 252deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(9) { background-position: 580px 0px; transform: rotateY( 288deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(10) { background-position: 475px 0px; transform: rotateY( 324deg ) translateZ( 161px ); }\n  #carousel figure:nth-child(11) { background-image: url(\"../assets/img3.png\"); width: 110px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 210px ); }\n  \n  */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"embed-responsive embed-responsive-16by9\">\n<video  autoplay muted loop poster=\"../../assets/poster.png\" class=\"wrapper-content margem_topo_fixo\">\n\t<source src=\"../../assets/video_content_mp4.m4v\" type=\"video/mp4\">\n</video>\n</div> -->\n<div class=\"container wrapper-content \">\n\n    \n\n\n    <div class=\"\" >\n\n        <div class=\"card box-tile border-success\">\n            <div class=\"card-header bg-success text-center\">\n              Mais uma novidade!\n            </div>\n            <div class=\"card-body\">\n              <!-- <h5 class=\"card-title text-center\">Titulo novidade</h5> -->\n              <h1><span class=\"tag\">#</span>\n                <span class=\"typing-element\"></span>\n              </h1>\n              \n            </div>\n\n            <div class=\"card-footer text-center\">\n                <button type=\"button\" routerLink=\"/personalizar-caneca-porcelana\" class=\"btn btn-success \">Visualizar modelos prontos!</button>\n              </div>\n          </div>\n\n\n      \n    </div>\n    <div class=\"bg_img mr-auto\">\n\n      <section class=\"container_content\">\n        <div id=\"carousel\">\n        \n            <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n          <figure class=\"aba\" [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"></figure>\n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n          <figure></figure>\n\n          <figure class=\"aba\" [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"></figure>\n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n        \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n\n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure>\n          \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n          <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> \n\n\n\n\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 7 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 8 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 9 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"></figure> aba -->\n          <!-- <figure>1</figure> 1 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 2 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 3 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 4 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 5 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local+')' }\"></figure> 6 -->\n          <!-- <figure [ngStyle]=\"{ 'background-image': 'url('+local_aba+')' }\"> </figure> aba -->\n        </div>\n      </section>\n\n\n\n\n    </div>\n</div>\n\n  <div class=\"container\">\n    <br>\n      <form #busca = \"ngForm\" (ngSubmit) = \"onClickSubmitSearch(busca.value)\">\n          <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" ngModel name=\"campo_busca\" placeholder=\"Pesquisar por todo o site...\">\n              <span class=\"input-group-btn\">\n              <button class=\"btn btn-success\" type=\"submit\">Buscar !</button>\n              </span>\n          </div><!-- /input-group -->\n      </form>\n\n\n    <div *ngFor=\"let categoria of categorias\" class=\"row\">\n      <div class=\"col-sm-12\">\n          <div class=\"titulo_categoria_index clearfix\">\n              <a (click)=\"setTitle( 'THE Brindes - ' + categoria.name )\" routerLink=\"/categoria/{{categoria.slug}}\" class=\"float-left nome_categoria\">\n                  {{ categoria.name }}\n              </a>\n\n              <a (click)=\"setTitle( 'THE Brindes - ' + categoria.name )\" routerLink=\"/categoria/{{categoria.slug}}\" class=\"float-right nome_categoria\">\n                  Ver mais\n              </a>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div *ngFor=\"let brinde of brindes\" class=\"list-items\">\n              <a (click)=\"setTitle( 'THE Brindes - ' + brinde.name )\" routerLink=\"/brindes/{{categoria.slug}}/{{brinde.slug}}\" *ngIf=\"brinde.categoria==categoria.id && brinde.is_active==true\">\n                  \n                  <div class=\"produto text-center\">\n\n                      <div class=\"img\">\n                              <img class=\"img-fluid\" width=\"350\" src=\"{{ brinde.image }}\" alt=\"{{ brinde.name }}\" />\n\n                      </div>\n                      <div class=\"titulo\">{{ brinde.name }}</div>\n                      <div class=\"subtitulo\">{{ brinde.subname }}</div>\n                      <div class=\"botao\">\n                          <a routerLink=\"/brindes/{{categoria.slug}}/{{brinde.slug}}\" class=\"btn btn-success\">Fazer orçamento</a>\n                      </div>\n                  </div>\n              </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_typed_js__ = __webpack_require__("../../../../typed.js/lib/typed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_typed_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_typed_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContentComponent = /** @class */ (function () {
    function ContentComponent(api, router, title) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.title = title;
        this.source = "../../assets/img2.png";
        this.color = "red";
        this.local = "../../assets/img2.png";
        this.local_aba = "../../assets/img_aba.png";
        this.categorias = [{}];
        this.brindes = [{}];
        this.getCategorias = function () {
            _this.api.getAllCategorias().subscribe(function (data) {
                _this.categorias = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.getBrindes = function () {
            _this.api.getAllBrindes().subscribe(function (data) {
                _this.brindes = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.getCategorias();
        this.getBrindes();
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.title.setTitle('The Brindes - Brindes Personalizados em Teresina e todo Brasil!');
        var options = {
            stringsElement: '#typed-strings',
            strings: ['Agora você pode visualizar alguns de nossos modelos de canecas diretamente de nosso site.', 'Basta clicar no botão abaixo e escolher um modelo.'],
            typeSpeed: 40,
            backSpeed: 200,
            backDelay: 1300,
            smartBackspace: true,
            fadeOut: true,
            showCursor: false,
            startDelay: 1000,
            loop: true
        };
        var typed = new __WEBPACK_IMPORTED_MODULE_4_typed_js___default.a('.typing-element', options);
    };
    ContentComponent.prototype.onClickSubmitSearch = function (busca) {
        this.router.navigateByUrl('/busca/' + busca.campo_busca);
    };
    var _a, _b, _c;
    ContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" ? _c : Object])
    ], ContentComponent);
    return ContentComponent;
}());

//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/empresa/empresa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/empresa/empresa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margem_topo_fixo\">\n\n  <div class=\"row\"> \n         \n            \n          <div class=\"col-sm-12\">\n      \n              <ol  class=\"breadcrumb bg-light\">\n                      \n                  <li class=\"breadcrumb-item\"><a href=\"\">Inicio</a></li>\n                  <li class=\"breadcrumb-item\">Emrpesa</li>\n              </ol>\n      \n              <form #busca = \"ngForm\" (ngSubmit) = \"onClickSubmitSearch(busca.value)\">\n                  <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" ngModel name=\"campo_busca\" placeholder=\"Pesquisar por todo o site...\">\n                      <span class=\"input-group-btn\">\n                      <button class=\"btn btn-success\" type=\"submit\">Buscar !</button>\n                      </span>\n                  </div><!-- /input-group -->\n              </form>\n      \n      </div>\n\n          <div class=\"col-sm-12\">\n              <br>\n              <br>\n              <h1>A Empresa</h1>\n\n              <hr>\n              <br>\n              <br>\n          </div>\n          \n          \n          \n          <div class=\" col-sm-6\">\n              <h3>Quem Somos</h3>\n              A THE Brindes é uma empresa de serviços que atua no segmento de brindes personalizados. \n              <br /><br />\n              Com profissionalismo e qualidade em seus serviços, está capacitada a fornecer soluções para todas as situações pertinentes a promoções, merchandising, brindes e comunicação. Utilizando equipamentos especificos para desempenhar o papel, desenvolve trabalhos com profissionalismo, prazo e qualidade em todos os serviços oferecidos. \n              <br /> <br />\n              Sabemos que a Comunicação Visual deve ser levada a sério e por isso investimos em uma equipe e estrutura que venha a atender nossos clientes e parceiros de forma especial e diferenciada, sempre com qualidade e a melhor relação custo benefício.\n              \n          </div>\n          \n          <div class=\" col-sm-6\">\n\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h3>Missao</h3>\n                  Ser referência em brindes e prestação de serviços no setor, desenvolvendo um trabalho inovador, com qualidade, respeito, e superando as expectativas dos mais exigentes.\n              \n              </div>\n            </div>\n            <br>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h3>Visao</h3>\n                  Solucionar e realizar todo e qualquer projeto prezando a qualidade, a eficiência e o profissionalismo que o mercado exige e merece.\n\n              </div>\n            </div>\n          </div>\n\n             \n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/empresa/empresa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpresaComponent = /** @class */ (function () {
    function EmpresaComponent(router, title) {
        this.router = router;
        this.title = title;
    }
    EmpresaComponent.prototype.onClickSubmitSearch = function (busca) {
        this.router.navigateByUrl('/busca/' + busca.campo_busca);
    };
    EmpresaComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Saiba mais sobre a The Brindes - Brindes Personalizados em Teresina e todo Brasil!');
    };
    var _a, _b;
    EmpresaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-empresa',
            template: __webpack_require__("../../../../../src/app/empresa/empresa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/empresa/empresa.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" ? _b : Object])
    ], EmpresaComponent);
    return EmpresaComponent;
}());

//# sourceMappingURL=empresa.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Rodade -->\n<footer>\n            \n  <div class=\"container\">\n      <div class=\"row container_footer\">\n              <div class=\"col col-lg-4 footer_box\">\n                  <div class=\"footer_atendimento sub_footer_box text-center\">\n                      <h3>Atendimento</h3>\n                      <p class=\"text-center\"><span class=\"titulo\">Whatsapp - (86) 99436-7255<br />(86) 3221-0215</span>\n                      <br />\n                      <span class=\"descricao\">Para comprar ou tirar dúvidas sobre produtos e preços, é só ligar. \n                          Segunda até Sexta das 8h às 18hs.</span></p>\n\n                      <p class=\"text-center\"><span class=\"titulo\">MSN/SKYPE teresinabrindes@hotmail.com</span>\n                      <br />\n                      <span class=\"descricao\">Estamos online de segunda a sexta das 9h às 18h, basta nos adicionar.</span></p>\n\n                      <p class=\"text-center\"><span class=\"titulo\">contato@teresinabrindes.com.br</span>\n                      <br />\n                      <span class=\"descricao\">Para clientes de Internet</span></p>\n\n\n                  </div>\n              </div>\n              <div class=\"col col-lg-8 footer_box\">\n                  <div class=\"footer_redes_sociais sub_footer_box text-center\">\n                      <h3>Redes Sociais</h3>\n\n                   <div class=\"fb-page\" data-href=\"https://www.facebook.com/thebrindes/\" data-tabs=\"timeline\" data-width=\"600\" data-height=\"350\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-hide-cover=\"true\" data-show-facepile=\"true\"><blockquote cite=\"https://www.facebook.com/thebrindes/\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/thebrindes/\">Teresina Brindes</a></blockquote></div>\n\n                  </div>\n              </div>\n          \n          \n      </div>\n      <div class=\"col-lg-12 texto_footer\">\n        <p class=\"text-center\">© 2012 - 2019 - THE Brindes - Todos os direitos reservados</p>\n        <br>\n    </div>\n  </div>\n  \n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"\">\n      <img width=\"250\" src=\"../../assets/logo-thebrindes.png\"/>\n  </a>\n  \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      \n    </ul>\n\n    \n\n    <ul class=\"navbar-nav my-2 my-lg-0\">\n      <li class=\"nav-item\">\n          <button type=\"button\" class=\"nav-link btn btn-outline-success\" routerLink=\"/personalizar-caneca-porcelana\" routerLinkActive=\"active\">Visualizar Modelos Prontos</button>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Categorias\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <div *ngFor=\"let categoria of categorias\">\n              <a href=\"/categoria/{{ categoria.slug }}\" class=\"dropdown-item\" >{{ categoria.name }}</a>\n          </div>\n        </div>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Localização</a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/empresa\" routerLinkActive=\"active\">A Empresa</a>\n      </li>\n    </ul>\n\n    \n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
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



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, api) {
        var _this = this;
        this.router = router;
        this.api = api;
        this.categorias = [{}];
        this.getCategorias = function () {
            _this.api.getAllCategorias().subscribe(function (data) {
                _this.categorias = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.getCategorias();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.gotoEmpresa = function () {
        this.router.navigate(['empresa']);
    };
    var _a, _b;
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" ? _b : Object])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/personalizar/personalizar.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#canvas {\n  height: 500px;\n  border: 1px solid rgb(13, 140, 91);\n  background-color: brown;\n}\n\n.fundo{\n    padding: 50px;\n    margin-top: 50px;\n  }\n\n  .fundo_personalizar{\n    background-image: linear-gradient(rgb(10, 152, 10), white);\n    height: 120px;\n    margin-bottom: 20px;\n  }\n  h4 {\n      font-size: 25pt;\n      color: #fff;\n      text-shadow: 1px 1px #333;\n      font-family: 'Crete Round', serif !important;\n      margin: 20px auto 0 auto;\n    }\n  \n\n  \n    /* keyframes for rotating animation */\n  \n    @keyframes spin {\n      from { transform: rotateY(160deg); }\n      to   { transform: rotateY(-20deg); }\n    }\n    \n    \n    .container {\n      width: 105px;\n      height: 400px;\n      position: relative;\n      perspective: 1400px;\n      margin: 10px auto;\n    }\n    \n    #carousel {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      /* transform-style: preserve-3d;\n      animation: spin 10s infinite linear;\n      transition: all 1s linear; */\n      \n    }\n/*     \n    #carousel figure {\n      margin: 0;\n      display: block;\n      position: absolute;\n      \n      width: 105px;\n      height: 400px;\n      left: 10px;\n      top: 10px;\n    }\n     */\n    \n    .aba{\n      background: #fff;\n     }   \n    #carousel figure {\n      margin: 0;\n      display: block;\n      position: absolute;\n      \n      width: 56px;\n      height: 400px;\n      left: 10px;\n      top: 10px;\n    }\n    \n    #carousel figure:nth-child(1) { background-position: 280px 0px; transform: rotateY( -3deg ) translateZ( 150px ); }\n\n    #carousel figure:nth-child(2) { background-position: 224px 0px; transform: rotateY( 18deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(3) { background-position: 168px 0px; transform: rotateY(  39deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(4) { background-position: 112px 0px; transform: rotateY( 60deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(5) { background-position: 56px 0px; transform: rotateY(  81deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(6) { background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img3.png")) + "); width: 115px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 190px ); }\n    #carousel figure:nth-child(7) { transform: rotateY( 147deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(8) { background-position: 840px 0px; transform: rotateY( 147deg ) translateZ( 150px ); }\n    \n    #carousel figure:nth-child(9) { background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img3.png")) + "); width: 115px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 175px ); }\n\n    #carousel figure:nth-child(10) { background-position: 784px 0px; transform: rotateY( 168deg ) translateZ( 150px ); }\n    \n    #carousel figure:nth-child(11) { background-position: 728px 0px; transform: rotateY( 189deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(12) { background-position: 672px 0px; transform: rotateY( 210deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(13) { background-position: 616px 0px; transform: rotateY( 231deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(14) { background-position: 560px 0px; transform: rotateY( 252deg ) translateZ( 150px ); }\n  \n    \n    #carousel figure:nth-child(15) { background-position: 504px 0px; transform: rotateY( 273deg ) translateZ( 150px ); }\n    #carousel figure:nth-child(16) { background-position: 448px 0px; transform: rotateY( 294deg ) translateZ( 150px ); }\n\n    #carousel figure:nth-child(17) { background-position: 392px 0px; transform: rotateY( 315deg ) translateZ( 150px ); }\n   \n    \n    #carousel figure:nth-child(18) { background-position: 336px 0px; transform: rotateY( 336deg ) translateZ( 150px ); }\n\n    \n\n    \n    /* #carousel figure:nth-child(1) { background-position: 315px 0px; transform: rotateY(   0deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(2) { background-position: 210px 0px; transform: rotateY(  36deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(3) { background-position: 105px 0px; transform: rotateY(  72deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(4) { background-image: url(\"../../assets/img3.png\"); width: 110px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 210px ); }\n    #carousel figure:nth-child(5) { transform: rotateY( 144deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(6) { background-position: 840px 0px; transform: rotateY( 180deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(7) { background-position: 735px 0px; transform: rotateY( 216deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(8) { background-position: 630px 0px; transform: rotateY( 252deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(9) { background-position: 525px 0px; transform: rotateY( 288deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(10) { background-position: 420px 0px; transform: rotateY( 324deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(11) { background-image: url(\"../../assets/img3.png\"); width: 110px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 210px ); }\n     */\n    /* esse é para o fundo primeiro, a a imagem cinza por tras feito no corel  */\n  /*\n  #carousel figure:nth-child(1) { background-position: 370px 0px; transform: rotateY(   0deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(2) { background-position: 265px 0px; transform: rotateY(  36deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(3) { background-position: 160px 0px; transform: rotateY(  72deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(4) { background-image: url(\"../assets/img3.png\"); width: 110px; transform: rotateY(   60deg ) translateZ( 0px ) translateX( 210px ); }\n    #carousel figure:nth-child(5) { background-position: 1000px 0px; transform: rotateY( 144deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(6) { background-position: 895px 0px; transform: rotateY( 180deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(7) { background-position: 790px 0px; transform: rotateY( 216deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(8) { background-position: 685px 0px; transform: rotateY( 252deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(9) { background-position: 580px 0px; transform: rotateY( 288deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(10) { background-position: 475px 0px; transform: rotateY( 324deg ) translateZ( 161px ); }\n    #carousel figure:nth-child(11) { background-image: url(\"../assets/img3.png\"); width: 110px; transform: rotateY(   0deg ) translateZ( 0px ) translateX( 210px ); }\n    \n    */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personalizar/personalizar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"fundo\">\n\n    <div class=\"row fundo_personalizar\">\n        <h4 class=\"text-center\">Escolha no menu ao lado um de nossos modelos prontos!</h4>\n    </div>\n\n  <div class=\"row\">\n\n     \n          \n\n          <div class=\"col-sm-12 col-md-2\">\n\n              \n\n\n                <span class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n                    <!-- <span *ngIf=\"isFirst\">\n                        <a class=\"list-group-item list-group-item-action active\" id=\"list-{{ artecaneca.slug }}-list\" data-toggle=\"list\" href=\"#list-{{ artecaneca.slug }}\" role=\"tab\" aria-controls=\"home\">{{ artecaneca.name }}</a>\n                    </span> -->\n                    <a *ngFor=\"let categoria of categoriasarte\"  (click)=teste(categoria.id)  class=\"list-group-item list-group-item-action\" id=\"{{ categoria.slug }}-list\" data-toggle=\"list\" href=\"#{{ categoria.slug }}\" role=\"tab\">{{ categoria.name }}</a>\n              \n                    <!-- {{ artescanecas.length }} -->\n\n                    \n                </span>\n\n               \n              \n          </div>\n          <div class=\"col-sm-12 col-md-5\">\n            <div class=\"tab-content\" id=\"nav-tabContent\">\n              <!-- <div class=\"tab-pane fade show active\" id=\"list-home\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\n                  <span *ngFor=\"let artecaneca of artescanecas\">\n                      <img width=\"200px\" src=\"{{ artecaneca.image_thumb }}\" (click)=\"local = artecaneca.image\"/>\n                  </span>\n                \n              </div> -->\n              \n                  <img *ngFor=\"let artecaneca of artescanecasNova\" width=\"200px\" src=\"{{ artecaneca.image_thumb }}\" (click)=add_gltf(artecaneca.image)/>\n\n                \n              \n              \n\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-5\">\n                \n                <div id=\"canvas\"></div>\n\n\n            </div>\n\n\n    \n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/personalizar/personalizar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_gltf_loader__ = __webpack_require__("../../../../three-gltf-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_gltf_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_gltf_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_orbitcontrols_ts__ = __webpack_require__("../../../../three-orbitcontrols-ts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_orbitcontrols_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_three_orbitcontrols_ts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalizarComponent = /** @class */ (function () {
    function PersonalizarComponent(api, title) {
        var _this = this;
        this.api = api;
        this.title = title;
        this.renderer = new __WEBPACK_IMPORTED_MODULE_3_three__["WebGLRenderer"]({ alpha: false });
        this.scene = null;
        this.camera = null;
        this.mesh = null;
        this.loader = null;
        this.object = null;
        this.ambientLight = null;
        this.directionalLight = null;
        this.textureLoader = null;
        this.texture = null;
        this.local_texture = '../assets/img3.png';
        this.controls = null;
        this.container = null;
        this.w = null;
        this.h = null;
        this.caneca = "../assets/caneca.gltf";
        this.source = "../../assets/img2.png";
        this.color = "red";
        this.local = "../../assets/img2.png";
        this.local_aba = "../../assets/img_aba.png";
        this.artescanecas = [{}];
        this.artescanecasNova = [{}];
        this.categoriasarte = [{}];
        this.getArtesCanecas = function () {
            _this.api.getAllArtesCanecas().subscribe(function (data) {
                _this.artescanecas = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.getCategoriasArte = function () {
            _this.api.getAllCategoriasArte().subscribe(function (data) {
                _this.categoriasarte = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.scene = new __WEBPACK_IMPORTED_MODULE_3_three__["Scene"]();
        this.getArtesCanecas();
        this.getCategoriasArte();
        this.ambientLight = new __WEBPACK_IMPORTED_MODULE_3_three__["AmbientLight"](0xcccccc);
        this.scene.add(this.ambientLight);
        this.directionalLight = new __WEBPACK_IMPORTED_MODULE_3_three__["DirectionalLight"](0xffffff);
        this.directionalLight.position.set(0, 1, 1).normalize();
        this.scene.add(this.directionalLight);
        this.add_gltf(this.local_texture);
    }
    PersonalizarComponent.prototype.teste = function (cat_id) {
        var _this = this;
        console.log(cat_id);
        this.artescanecasNova = [{}];
        this.artescanecas.forEach(function (element) {
            if (cat_id == element["categorias"]) {
                var id = element["id"];
                var code = element["code"];
                var slug = element["slug"];
                var image = element["image"];
                var image_thumb = element["image_thumb"];
                _this.artescanecasNova.push({ id: id, code: code, slug: slug, image: image, image_thumb: image_thumb });
            }
            if (element["categorias"].length > 1) {
                element["categorias"].forEach(function (element2) {
                    if (cat_id == element2) {
                        var id = element["id"];
                        var code = element["code"];
                        var slug = element["slug"];
                        var image = element["image"];
                        var image_thumb = element["image_thumb"];
                        _this.artescanecasNova.push({ id: id, code: code, slug: slug, image: image, image_thumb: image_thumb });
                    }
                });
            }
        });
        this.artescanecasNova.shift();
        console.log(this.artescanecasNova);
    };
    PersonalizarComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Visualize sua caneca em 3D. Monte sua caneca online - Brindes Personalizados em Teresina e todo Brasil!');
    };
    PersonalizarComponent.prototype.ngAfterViewInit = function () {
        // this.renderer.setSize(window.innerWidth/2, window.innerHeight/2);
        // this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        // this.animate();
        // document.body.appendChild( this.container );
        this.container = document.getElementById("canvas");
        this.w = this.container.offsetWidth;
        this.h = this.container.offsetHeight;
        // this.camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
        this.camera = new __WEBPACK_IMPORTED_MODULE_3_three__["PerspectiveCamera"](25, this.w / this.h, 1, 20000);
        // camera = new THREE.PerspectiveCamera( 75, w / h, 2, 1000 );
        this.camera.position.set(1, 1, 20);
        this.controls = new __WEBPACK_IMPORTED_MODULE_5_three_orbitcontrols_ts__["OrbitControls"](this.camera, this.renderer.domElement);
        this.controls.update();
        this.controls.minDistance = 10;
        this.controls.maxDistance = 50;
        this.renderer.setClearColor(0xC5C5C3);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.w, this.h);
        // this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.container.appendChild(this.renderer.domElement);
        this.animate();
    };
    PersonalizarComponent.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.animate(); });
        // this.object.rotation.y += 0.01;
        this.controls.update();
        this.controls.minDistance = 10;
        this.controls.maxDistance = 50;
        this.renderer.render(this.scene, this.camera);
    };
    PersonalizarComponent.prototype.add_gltf = function (artecaneca) {
        var _this = this;
        this.textureLoader = new __WEBPACK_IMPORTED_MODULE_3_three__["TextureLoader"]();
        this.texture = this.textureLoader.load(artecaneca);
        this.texture.flipY = false;
        // If texture is used for color information, set colorspace.
        this.texture.encoding = __WEBPACK_IMPORTED_MODULE_3_three__["sRGBEncoding"];
        // UVs use the convention that (0, 0) corresponds to the upper left corner of a texture.
        this.texture.flipY = false;
        this.loader = new __WEBPACK_IMPORTED_MODULE_4_three_gltf_loader___default.a();
        this.loader.load(this.caneca, function (gltf) {
            _this.object = gltf.scene;
            _this.object.scale.set(2, 2, 2);
            _this.object.position.x = 0; //Position (x = right+ left-) 
            _this.object.position.y = 0; //Position (y = up+, down-)
            _this.object.position.z = 0; //Position (z = front +, back-)
            // this.object.rotation.x = 0.2;
            _this.object.traverse(function (child) {
                if (child.isMesh && child["name"] == "Cylinder_1") {
                    child.material.map = _this.texture;
                    // console.log("child",child);
                }
            });
            _this.scene.add(_this.object);
        });
    };
    var _a, _b, _c;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" ? _a : Object)
    ], PersonalizarComponent.prototype, "rendererContainer", void 0);
    PersonalizarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
            selector: 'app-personalizar',
            template: __webpack_require__("../../../../../src/app/personalizar/personalizar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/personalizar/personalizar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" ? _c : Object])
    ], PersonalizarComponent);
    return PersonalizarComponent;
}());

//# sourceMappingURL=personalizar.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img3.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img3.d241e37e6a6dd990a1fb.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map