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
    decls: 17,
    vars: 8,
    consts: [[1, "page-container"], [1, "tittle-container"], [1, "container"], ["routerLinkActive", "activo", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "activo", 3, "routerLink"], [1, "position"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " NEUROTEST \uD83E\uDDE0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "nav")(8, "ul")(9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
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
    decls: 22,
    vars: 0,
    consts: [[1, "container"], [1, "pregunta"], [1, "info-1"], [1, "preguntados"], [1, "info-2"]],
    template: function InformacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00BFC\u00F3mo se ha formado Neurotest? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Neurotest ha sido creada por dos programadores Jaime y Laureana para su TFG.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Esta aplicaci\u00F3n est\u00E1 pensada para que los especialistas en neuropsicolog\u00EDa puedan acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " r\u00E1pidamente mediante el registro de unos datos de paciente a un test, donde podr\u00E1n hacer sus evaluaciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00BFC\u00F3mo funciona Neurotest? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4)(15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Para usar este repositorio no necesitas m\u00E1s que meter los datos que te interesen en el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " que tienes disponible en el apartado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " y tendr\u00E1s disponibles los test que necesites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n    background-image: url('img header.png');\n    background-size: cover;\n    background-position: center;\n    margin: 0;\n    padding: 20px;\n    min-height: 100vh;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    -webkit-backdrop-filter: blur(60px);\n            backdrop-filter: blur(60px);\n}\n\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    -webkit-backdrop-filter: blur(30px);\n            backdrop-filter: blur(30px);\n    font-size: x-large;\n    \n    margin: 20px 0;\n}\n\n.pregunta[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n}\n\n.pregunta[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 10px;\n}\n\n.info-1[_ngcontent-%COMP%], .info-2[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 20px;\n    padding: 10px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvcm1hY2lvbi9pbmZvcm1hY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQkU7QUFDRjtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUNBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7O0lBRWxCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvaW1nIGhlYWRlci5wbmcnKTtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIFxyXG59XHJcblxyXG4uY29udGFpbmVyIHB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiAqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvaW1nIGhlYWRlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNjBweCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgcCB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4ucHJlZ3VudGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucHJlZ3VudGEgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmluZm8tMSxcclxuLmluZm8tMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    decls: 13,
    vars: 0,
    consts: [[1, "container"]],
    template: function InicioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Evaluaci\u00F3n Neuropsicol\u00F3gica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " La evaluaci\u00F3n neuropsicol\u00F3gica es un proceso utilizado para examinar las funciones cognitivas, emocionales y del comportamiento de una persona a trav\u00E9s de la evaluaci\u00F3n de su funci\u00F3n cerebral. Estas evaluaciones son llevadas a cabo por neuropsic\u00F3logos, profesionales entrenados en la intersecci\u00F3n de la psicolog\u00EDa y la neurolog\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " La evaluaci\u00F3n neuropsicol\u00F3gica implica una variedad de pruebas dise\u00F1adas para medir diferentes \u00E1reas del funcionamiento cognitivo, como la memoria, la atenci\u00F3n, la percepci\u00F3n, el lenguaje, las habilidades visuoespaciales, la funci\u00F3n ejecutiva y las habilidades motoras. Estas pruebas pueden incluir tareas de memoria, rompecabezas, ejercicios de resoluci\u00F3n de problemas, pruebas de velocidad de procesamiento y evaluaciones de habilidades ling\u00FC\u00EDsticas, entre otras. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Los resultados de la evaluaci\u00F3n neuropsicol\u00F3gica pueden proporcionar informaci\u00F3n crucial para el diagn\u00F3stico y el tratamiento de una variedad de condiciones m\u00E9dicas y psicol\u00F3gicas, como lesiones cerebrales traum\u00E1ticas, accidentes cerebrovasculares, trastornos del desarrollo, trastornos del aprendizaje, trastornos del estado de \u00E1nimo y enfermedades neurodegenerativas como el Alzheimer y el Parkinson. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Adem\u00E1s de ayudar en el diagn\u00F3stico, la evaluaci\u00F3n neuropsicol\u00F3gica tambi\u00E9n puede ser \u00FAtil para la planificaci\u00F3n de intervenciones y tratamientos personalizados, as\u00ED como para el seguimiento del progreso a lo largo del tiempo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " La evaluaci\u00F3n neuropsicol\u00F3gica es un proceso complejo y compuesto por fases. En ning\u00FAn caso esta web sustituye la labor de un profesional: simplemente es una herramienta que facilita la navegaci\u00F3n entre las muchas pruebas que se pueden utilizar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["body[_ngcontent-%COMP%] {\n    background-image: url('img header.png');\n    background-size: cover;\n    background-position: center;\n    font-family: Arial, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    border-radius: 10px;\n    margin: 40px;\n    padding: 40px;\n    background: linear-gradient(90deg, rgba(157,90,201,1) 0%, rgba(162,167,237,1) 50%, rgba(157,90,201,1) 100%);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #aad4e5;\n}\n\np[_ngcontent-%COMP%] {\n    color: black;\n    font-size: 1.2em;\n    line-height: 1.6;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSx1Q0FBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLDJHQUEyRztJQUMzRyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkciLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvaW1nIGhlYWRlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogNDBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTU3LDkwLDIwMSwxKSAwJSwgcmdiYSgxNjIsMTY3LDIzNywxKSA1MCUsIHJnYmEoMTU3LDkwLDIwMSwxKSAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYWFkNGU1O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiAuY29udGFpbmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2ZvbmRvMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyIHAge1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogYXp1cmU7XHJcbn0gKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function TestComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rellena todos los campos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TestComponent_Conditional_27_Conditional_0_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const test_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r1.test_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r1.tiempo_requerido);
  }
}
function TestComponent_Conditional_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pruebas recomendadas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tiempo Requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestComponent_Conditional_27_Conditional_0_tr_10_Template, 7, 3, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tests);
  }
}
function TestComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMsg, " ");
  }
}
function TestComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestComponent_Conditional_27_Conditional_0_Template, 11, 1)(1, TestComponent_Conditional_27_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, !ctx_r1.errorMsg ? 0 : 1);
  }
}
class TestComponent {
  constructor(formBuilder, http) {
    this.formBuilder = formBuilder;
    this.http = http;
    this.tests = [];
    this.hasSend = false;
    this.errorMsg = "";
    this.isFormValid = true;
    this.test = this.formBuilder.group({
      tiempoSesion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(2)]],
      nivelEducativo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      edadPaciente: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(2)]]
    });
  }
  enviar() {
    if (this.test.valid) {
      this.isFormValid = true;
      const headers = {
        'content-type': 'application/json'
      };
      const body = JSON.stringify(this.test.value);
      this.http.post('http://localhost/tfg-fp/manejoDatos.php', body, {
        'headers': headers
      }).subscribe(response => {
        if (response.errors) {
          this.errorMsg = response.errors;
        } else {
          this.errorMsg = "";
          this.tests = Object.values(response);
        }
        this.hasSend = true;
      });
    } else {
      this.isFormValid = false;
      this.hasSend = false;
    }
  }
  static #_ = this.ɵfac = function TestComponent_Factory(t) {
    return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TestComponent,
    selectors: [["app-test"]],
    decls: 28,
    vars: 3,
    consts: [[1, "container"], ["id", "formularioNeuro", "novalidate", "", "action", "#", "method", "POST", 1, "form", 3, "formGroup"], ["for", "tiempoSesion"], ["type", "number", "formControlName", "tiempoSesion", "name", "tiempoSesion", "required", ""], ["for", "nivelEducativo"], ["name", "nivelEducativo", "formControlName", "nivelEducativo", "id", "nivelEducativo", "required", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "edadPaciente"], ["type", "number", "formControlName", "edadPaciente", "id", "edadPaciente", "name", "edadPaciente", "required", ""], [1, "btn", "btn-exito", 3, "click"], [2, "color", "red"], [4, "ngFor", "ngForOf"]],
    template: function TestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Formulario neuropsicolog\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1)(4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tiempo disponible para la sesi\u00F3n (en minutos):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nivel educativo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5)(10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Primaria (12 a\u00F1os de educaci\u00F3n o menos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Secundaria (entre 12 y 16 a\u00F1os de educaci\u00F3n)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Superior (m\u00E1s de 16 a\u00F1os de educaci\u00F3n)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br")(17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edad del paciente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10)(21, "br")(22, "br")(23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_button_click_24_listener() {
          return ctx.enviar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TestComponent_Conditional_26_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TestComponent_Conditional_27_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.test);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](26, !ctx.isFormValid ? 26 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](27, ctx.hasSend ? 27 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".container[_ngcontent-%COMP%] {\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    background-color: rgba(0, 0, 0, 0.6);\n    border-radius: 10px;\n    margin: 40px;\n    padding: 40px;\n    background: linear-gradient(90deg, rgba(157,90,201,1) 0%, rgba(162,167,237,1) 50%, rgba(157,90,201,1) 100%);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    display: flex;\n     justify-content: center;\n     align-items: center;\n    min-height: 80vh;\n     flex-direction: column;\n    padding-top: 5px;\n       \n}\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: black;\n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    margin: 10px 0 5px;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 20px;\n    border: none;\n    border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    display: block;\n    width: 100px;\n    padding: 10px;\n    background-color: #aad4e5;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    color: black;\n    font-size: 16px;\n    margin: 0 auto 40px auto;\n    \n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border: 2px solid black;\n    background-color: #e9db6f;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    padding: 8px;\n    text-align: center;\n}\n \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkdBQTJHO0lBQzNHLHdDQUF3QztJQUN4QyxhQUFhO0tBQ1osdUJBQXVCO0tBQ3ZCLG1CQUFtQjtJQUNwQixnQkFBZ0I7S0FDZixzQkFBc0I7SUFDdkIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogNDBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTU3LDkwLDIwMSwxKSAwJSwgcmdiYSgxNjIsMTY3LDIzNywxKSA1MCUsIHJnYmEoMTU3LDkwLDIwMSwxKSAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggMCA1cHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQ0ZTU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byA0MHB4IGF1dG87XHJcbiAgICBcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlkYjZmO1xyXG59XHJcbnRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICJdLCJzb3VyY2VSb290IjoiIn0= */"]
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