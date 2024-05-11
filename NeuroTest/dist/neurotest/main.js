"use strict";
(self["webpackChunkneurotest"] = self["webpackChunkneurotest"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test/test.component */ 6043);
/* harmony import */ var _components_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/informacion/informacion.component */ 6205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inicio/inicio.component */ 7841);
/* harmony import */ var _components_formulario_registro_formulario_registro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formulario-registro/formulario-registro.component */ 5697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__.InicioComponent
}, {
  path: 'registro',
  component: _components_formulario_registro_formulario_registro_component__WEBPACK_IMPORTED_MODULE_3__.FormularioRegistroComponent
}, {
  path: 'informacion',
  component: _components_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_1__.InformacionComponent
}, {
  path: 'test',
  component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_0__.TestComponent
}, {
  path: '**',
  redirectTo: 'informacion'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const _c0 = () => ["/"];
const _c1 = () => ({
  exact: true
});
const _c2 = () => ["/informacion"];
const _c3 = () => ["/test"];
class AppComponent {
  constructor(router) {
    this.router = router;
  }
  onClick(ruta) {
    this.router.navigateByUrl(ruta);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 23,
    vars: 8,
    consts: [[1, "page-container"], [1, "tittle-container"], [1, "nav-container"], [3, "click"], [1, "container"], ["routerLinkActive", "activo", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "activo", 3, "routerLink"], [1, "position"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " NEUROTEST \uD83E\uDDE0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "nav")(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
          return ctx.onClick("/login");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() {
          return ctx.onClick("/singUp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Identificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "nav")(14, "ul")(15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Informacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: [".page-container[_ngcontent-%COMP%]{\n    margin: 0 80px;\n    \n}\n\nheader[_ngcontent-%COMP%]{\n\n\nbackground-image: url('headr.jpeg');\nbackground-repeat: no-repeat;\nbackground-size: cover;\ndisplay: flex;\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\nwidth: 100%;\nalign-items: center;\njustify-content: center;\nposition: relative;\nheight: 100px;\n\n}\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 10px 20px;\n    position: absolute;\n    z-index: 1;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style-type: none;\n    display: flex;\n    gap: 20px;\n    \n}\n\nli[_ngcontent-%COMP%]{\n    width: 200px;\n    border: 1px solid rgb(22, 22, 23);\n    background-color: lightblue;\n    border-radius: 5px;\n    text-align: center;\n    padding: 10px 20px;\n    transition:  .2s;\n    cursor: pointer;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);\n    \n    \n}\n\n.activo[_ngcontent-%COMP%]{\n    background-color: rgb(71, 171, 229);\n}\n\n\n.container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.position[_ngcontent-%COMP%]{\n    margin: 0 80px;\n}\n\n\nbutton[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    border: none;\n    background-color: rgb(36, 196, 211);\n    cursor: pointer;\n    border-radius: 1px solid black;\n}\n\n.nav-container[_ngcontent-%COMP%]{\n    display: flex;\n    gap: 50px;\n}\n\n.tittle-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: -100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYzs7QUFFbEI7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakMsbUNBQWdEO0FBQ2hELDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLFNBQVM7QUFDVCxVQUFVO0FBQ1Ysc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQixhQUFhOztBQUViOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixTQUFTOztBQUViOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxREFBcUQ7SUFDckQsMkNBQTJDOzs7QUFHL0M7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wYWdlLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMCA4MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbmhlYWRlcntcclxuLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyAqL1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWcvaGVhZHIuanBlZyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbm1hcmdpbjogMDtcclxucGFkZGluZzogMDtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxud2lkdGg6IDEwMCU7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmhlaWdodDogMTAwcHg7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxubGl7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIsIDIyLCAyMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAgLjJzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmFjdGl2b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTcxLCAyMjkpO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zaXRpb257XHJcbiAgICBtYXJnaW46IDAgODBweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMTk2LCAyMTEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubmF2LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDUwcHg7XHJcbn1cclxuXHJcbi50aXR0bGUtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inicio/inicio.component */ 7841);
/* harmony import */ var _components_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/informacion/informacion.component */ 6205);
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test/test.component */ 6043);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_formulario_registro_formulario_registro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/formulario-registro/formulario-registro.component */ 5697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__.InicioComponent, _components_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_3__.InformacionComponent, _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__.TestComponent, _components_formulario_registro_formulario_registro_component__WEBPACK_IMPORTED_MODULE_5__.FormularioRegistroComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
  });
})();

/***/ }),

/***/ 5697:
/*!*********************************************************************************!*\
  !*** ./src/app/components/formulario-registro/formulario-registro.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormularioRegistroComponent: () => (/* binding */ FormularioRegistroComponent)
/* harmony export */ });
/* harmony import */ var C_Programas_xampp_htdocs_TFG_FP_NeuroTest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class FormularioRegistroComponent {
  constructor(FormBuilder) {
    this.FormBuilder = FormBuilder;
    this.formulario = this.FormBuilder.group({
      nombre: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      apellidos: [null],
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: []
    });
  }
  onSubmit() {
    var _this = this;
    return (0,C_Programas_xampp_htdocs_TFG_FP_NeuroTest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.formulario.value);
      try {
        const response = yield _this.userService.register(_this.formulario.value);
        alert('Usuario registrado correctamente');
        localStorage.setItem('token_crm', response.token);
        _this.router.navigateByUrl('/gestion');
      } catch (error) {
        alert('Error en el registro');
      }
    })();
  }
  static #_ = this.ɵfac = function FormularioRegistroComponent_Factory(t) {
    return new (t || FormularioRegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FormularioRegistroComponent,
    selectors: [["app-formulario-registro"]],
    decls: 18,
    vars: 1,
    consts: [[3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "nombre", 1, "form-control"], ["type", "text", "formControlName", "apellidos", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "password", 1, "form-control"], ["type", "submit", "value", "Enviar", 1, "btn", "btn-info"]],
    template: function FormularioRegistroComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormularioRegistroComponent_Template_form_ngSubmit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1)(14, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formulario);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["form[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 0 auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    background-color: #f9f9f9;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    box-sizing: border-box;\n}\n\n\n.form-label[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007bff;\n    color: #fff;\n    cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhcmlvLXJlZ2lzdHJvL2Zvcm11bGFyaW8tcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6205:
/*!*****************************************************************!*\
  !*** ./src/app/components/informacion/informacion.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InformacionComponent: () => (/* binding */ InformacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class InformacionComponent {
  static #_ = this.ɵfac = function InformacionComponent_Factory(t) {
    return new (t || InformacionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InformacionComponent,
    selectors: [["app-informacion"]],
    decls: 3,
    vars: 0,
    consts: [[1, "container"]],
    template: function InformacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".container[_ngcontent-%COMP%] {\n    \n  background-image: url('img header.png');\n     background-size: cover;\n    background-position: center;\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center; \n    \n}\n\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    -webkit-backdrop-filter: blur(5px);\n            backdrop-filter: blur(5px);\n    font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvcm1hY2lvbi9pbmZvcm1hY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0VBRUUsdUNBQXNEO0tBQ25ELHNCQUFzQjtJQUN2QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2ltZyBoZWFkZXIucG5nJyk7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBcclxufVxyXG5cclxuLmNvbnRhaW5lciBwe1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7841:
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InicioComponent: () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class InicioComponent {
  static #_ = this.ɵfac = function InicioComponent_Factory(t) {
    return new (t || InicioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InicioComponent,
    selectors: [["app-inicio"]],
    decls: 3,
    vars: 0,
    consts: [[1, "container"]],
    template: function InicioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae quos, temporibus aperiam omnis eveniet accusantium. Maiores deserunt dolores fugiat accusantium minima nam ea molestias? Magnam dignissimos repellendus saepe officia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".container[_ngcontent-%COMP%] {\n\n    background-image: url('fondo2.jpg');\n    background-size: cover;\n    background-position: center;\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n\n}\n\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    -webkit-backdrop-filter: blur(5px);\n            backdrop-filter: blur(5px);\n    font-size: x-large;\n    color: azure;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUNBQWtEO0lBQ2xELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9mb25kbzIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciBwIHtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6043:
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestComponent: () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);




class TestComponent {
  constructor(FormBuilder, http) {
    this.FormBuilder = FormBuilder;
    this.http = http;
    this.test = this.FormBuilder.group({
      tiempoSesion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(2)],
      nivelEducativo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      regiones: [''],
      edadPaciente: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(2)]]
    });
  }
  enviar() {
    console.log("hola");
    //let body: any = {};
    //body.tiempoSesion = this.test.value.tiempoSesion;
    const headers = {
      'content-type': 'application/json'
    };
    const body = JSON.stringify(this.test.value);
    console.log(body);
    this.http.post('http://localhost/tfg-fp/manejoDatos.php', body, {
      'headers': headers
    }).subscribe(response => {
      console.log(response);
      //if (response.errors) {return errors} else {mostrar tabla con el array}
    });
  }
  static #_ = this.ɵfac = function TestComponent_Factory(t) {
    return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TestComponent,
    selectors: [["app-test"]],
    decls: 38,
    vars: 1,
    consts: [[1, "container"], ["id", "formularioNeuro", "novalidate", "", "action", "#", "method", "POST", 1, "form", 3, "formGroup"], ["for", "tiempoSesion"], ["type", "number", "formControlName", "tiempoSesion", "name", "tiempoSesion", "required", ""], ["for", "nivelEducativo"], ["name", "nivelEducativo", "formControlName", "nivelEducativo", "id", "nivelEducativo", "required", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "checkbox", "formControlName", "regiones", "id", "cortezaPrefrontal", "name", "regiones[]", "value", "Corteza Prefrontal"], ["for", "cortezaPrefrontal"], ["type", "checkbox", "id", "cortezaSupraOrbital", "name", "regiones[]", "value", "Corteza Supraorbital"], ["for", "cortezaSupraOrbital"], ["for", "edadPaciente"], ["type", "number", "formControlName", "edadPaciente", "id", "edadPaciente", "name", "edadPaciente", "required", ""], [1, "btn", "btn-exito", 3, "click"]],
    template: function TestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Formulario neuropsicolog\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1)(4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tiempo disponible para la sesi\u00F3n (en minutos):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nivel educativo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 5)(10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Primaria (12 a\u00F1os de educaci\u00F3n o menos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Secundaria (entre 12 y 16 a\u00F1os de educaci\u00F3n)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Superior (m\u00E1s de 16 a\u00F1os de educaci\u00F3n)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br")(17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "fieldset")(19, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Regiones encef\u00E1licas con evidencia de da\u00F1o (m\u00FAltiple selecci\u00F3n)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Corteza Prefrontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br")(25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Corteza Supraorbital");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Edad del paciente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 14)(33, "br")(34, "br")(35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_36_listener() {
          return ctx.enviar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.test);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map