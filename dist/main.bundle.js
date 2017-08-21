webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-container {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.exon-panelHeading {\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.ex-container label {\r\n    color: rgb(75, 85, 100);\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    text-align: right;\r\n    margin-right: 10px;\r\n}\r\n\r\n.table-details{\r\n    position: absolute;\r\n    right: 510px;\r\n    bottom: 225px;\r\n    border : 1px solid #333\r\n}\r\n.flowRate{\r\nposition: absolute;\r\n    left: 670px;\r\n    bottom: 105px;\r\n}\r\n.runningStatus{\r\n    position: absolute;\r\n    left: 275px;\r\n    bottom: 325px;\r\n}\r\n.tankLevel{\r\n    position: absolute;\r\n    right: 50px;\r\n    bottom: 235px;\r\n\r\n}\r\n.setPoints{\r\nposition: absolute;\r\n    right: 35px;\r\n    bottom: 500px;    \r\n}\r\n.lightsComponent{\r\n    float: left;\r\n}\r\n/* toggle */\r\n\r\n.item {\r\n\tposition: relative;\r\n\tbox-sizing: border-box;\r\n\tbackground: #ffffff;\r\n}\r\n\r\n\r\n\r\ninput[type=\"checkbox\"] {\r\n\tdisplay: none;\t\r\n}\r\n\r\n.toggle {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 9px;\r\n\tmargin: auto;\r\n\twidth: 51px;\r\n\theight: 31px;\r\n}\r\n\r\n.toggle label,\r\n.toggle i {\r\n\tbox-sizing: border-box;\r\n\tdisplay: block;\r\n\tbackground: #ffffff;\r\n}\r\n\r\n.toggle label {\r\n\twidth: 51px;\r\n\theight: 32px;\r\n\tborder-radius: 32px; \r\n\tborder: 2px solid #e5e5e5;\r\n\ttransition: all 0.30s ease;\r\n}\r\n\r\n.toggle i {\r\n\tposition: absolute;\r\n\ttop: 2px;\r\n\tleft: 2px;\r\n\twidth: 28px;\r\n\theight: 28px;\r\n\tborder-radius: 28px;\r\n\tbox-shadow: 0 0 1px 0 rgba(0,0,0, 0.25),\r\n\t\t\t\t0 3px 3px 0 rgba(0,0,0, 0.15);\r\n\tbackground: #ffffff;\r\n\ttransition: all 0.3s cubic-bezier(0.275, -0.450, 0.725, 1.450);\r\n}\r\n\r\ninput[type=\"checkbox\"]:active + .toggle i {\r\n\twidth: 35px;\r\n}\r\n\r\ninput[type=\"checkbox\"]:active + .toggle label,\r\ninput[type=\"checkbox\"]:checked + .toggle label {\r\n\tborder: 16px solid #4cd964;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .toggle i {\r\n\tleft: 21px;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked:active + .toggle label {\r\n\tborder: 16px solid #e5e5e5;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked:active + .toggle i {\r\n\tleft: 14px;\r\n}\r\n\r\n\r\n/**\r\n * toggle\r\n * --------------------------------------------------\r\n */\r\n.toggle {\r\n  height: 32px;\r\n}\r\n.toggle input[type=\"checkbox\"], .toggle input[type=\"radio\"] {\r\n  width: 0;\r\n  height: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  text-indent: -100000px;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.toggle .handle {\r\n  position: relative;\r\n  top: -20px;\r\n  left: 0;\r\n\r\n  display: block;\r\n  width: 50px;\r\n  height: 32px;\r\n  background-color: white;\r\n          border-radius: 19px;\r\n  box-shadow: inset 0 0 0 1px #b8bfc8;\r\n\r\n  -webkit-border-radius: 19px;\r\n     -moz-border-radius: 19px;\r\n}\r\n.toggle .handle:before, .toggle .handle:after {\r\n  position: absolute;\r\n  top: 1px;\r\n  left: 1px;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n\r\n  content: \"\";\r\n  background-color: white;\r\n          border-radius: 30px;\r\n  box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\r\n  transition: all .25s ease-in-out;\r\n\r\n  -webkit-border-radius: 30px;\r\n     -moz-border-radius: 30px;\r\n}\r\n.toggle input[type=\"checkbox\"]:disabled + .handle, .toggle input[type=\"radio\"]:disabled + .handle, .toggle input[type=\"checkbox\"]:disabled + .handle:before, .toggle input[type=\"radio\"]:disabled + .handle:before, .toggle input[type=\"checkbox\"]:disabled + .handle:after, .toggle input[type=\"radio\"]:disabled + .handle:after {\r\n  background-color: #e6e9ed;\r\n  filter: alpha(opacity=60);\r\n\r\n  opacity: .6;\r\n}\r\n.toggle input[type=\"checkbox\"]:checked + .handle:before, .toggle input[type=\"radio\"]:checked + .handle:before {\r\n  width: 70px;\r\n  background-color: #a0d468;\r\n  content : \"On\";\r\n}\r\n.toggle input[type=\"checkbox\"]:checked + .handle:after, .toggle input[type=\"radio\"]:checked + .handle:after {\r\n  left: 40px;\r\n  content: \"\";\r\n  color: green;\r\n  box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\r\n}\r\n\r\n\r\n/* Modal Responsive CSS */ \r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  max-width: 600px;\r\n  margin: 10px;\r\n}\r\n.modal-sm {\r\n  max-width: 300px;\r\n}\r\n.modal-lg {\r\n  max-width: 900px;\r\n}\r\n@media (min-width: 768px) {\r\n  .modal-dialog {\r\n    margin: 30px auto;\r\n  }\r\n}\r\n@media (min-width: 320px) {\r\n  .modal-sm {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n}\r\n@media (min-width: 620px) {\r\n  .modal-dialog {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  .modal-lg {\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n  }\r\n}\r\n@media (min-width: 920px) {\r\n  .modal-lg {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n #chartdiv {\r\n\t  width: 300px;\r\n    min-width: 150px;\r\n    font-size: 11px;\r\n    height: 275px;\r\n    max-height: 500px;\r\n    min-height:200px;\r\n }\r\n\r\n\r\n\r\n .container {\r\n   background-size: initial;\r\n  background: rgb(226,226,226); /* Old browsers */ /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 11.10+ */ /* IE10+ */\r\n  background: linear-gradient(to bottom,  rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* W3C */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=0 ); /* IE6-9 */\r\n  padding: 20px;\r\n}\r\n\r\n.led-box {\r\n  height: 30px;\r\n  width: 5%;\r\n  margin: 10px 0;\r\n  float: left;\r\n}\r\n\r\n.led-box p {\r\n  font-size: 12px;\r\n  text-align: center;\r\n  margin: 1em;\r\n}\r\n\r\n.led-red {\r\n  margin: 0 auto;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-color: #F00;\r\n  border-radius: 50%;\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px;\r\n  -webkit-animation: blinkRed 0.5s infinite;\r\n  animation: blinkRed 0.5s infinite;\r\n}\r\n\r\n@-webkit-keyframes blinkRed {\r\n    from { background-color: #F00; }\r\n    50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}\r\n    to { background-color: #F00; }\r\n}\r\n@keyframes blinkRed {\r\n    from { background-color: #F00; }\r\n    50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}\r\n    to { background-color: #F00; }\r\n}\r\n\r\n.led-yellow {\r\n  margin: 0 auto;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-color: #FF0;\r\n  border-radius: 50%;\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px;\r\n  -webkit-animation: blinkYellow 1s infinite;\r\n  animation: blinkYellow 1s infinite;\r\n}\r\n\r\n@-webkit-keyframes blinkYellow {\r\n    from { background-color: #FF0; }\r\n    50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }\r\n    to { background-color: #FF0; }\r\n}\r\n@keyframes blinkYellow {\r\n    from { background-color: #FF0; }\r\n    50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }\r\n    to { background-color: #FF0; }\r\n}\r\n\r\n.led-green-flashing{\r\n margin: 0 auto;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-color: #7CFC00;\r\n  border-radius: 50%;\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,#7CFC00 0 2px 12px;\r\n  -webkit-animation: blinkGreen 1s infinite;\r\n  animation: blinkGreen 1s infinite;\r\n}\r\n\r\n@-webkit-keyframes blinkGreen {\r\n   from { background-color: #00FF00\t; }\r\n    50% { background-color: #7FFF00\t; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #00FF7F\t\t 0 -1px 9px,#00FF00 0 2px 0; }\r\n    to { background-color: #00FF00; }\r\n}\r\n@keyframes blinkGreen {\r\n    from { background-color: #00FF00\t; }\r\n    50% { background-color: #7FFF00\t; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #00FF7F\t\t 0 -1px 9px,#00FF00 0 2px 0; }\r\n    to { background-color: #00FF00; }\r\n}\r\n\r\n.led-green-steady {\r\n  margin: 0 auto;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-color: #ABFF00;\r\n  border-radius: 50%;\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px;\r\n}\r\n\r\n.led-yellow-steady {\r\n  margin: 0 auto;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-color:#FF0;;\r\n  border-radius: 50%;\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, rgba(0, 0, 0, 0.2) 0 2px 14px;\r\n}\r\n.led-red-steady{\r\nmargin: 0 auto;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-color:#F00;\r\n  border-radius: 50%;\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 14px;\r\n}\r\n\r\nli {\r\n    font-size: large;\r\n}\r\nli:hover{\r\n    background-color: lightgray;\r\n}\r\nli:active, :visited{\r\n    background-color: gray;\r\n}\r\n\r\n\r\ndiv.panel-heading {\r\n   font-size: x-large; \r\n}\r\n.navbar-brand{\r\n    background-color: bisque;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class='navbar navbar-default'>\n        <div class='container-fluid'>\n            <a class='navbar-brand'>{{pageTitle}}</a>\n        </div>\n    </nav>\n<div>\n    <div class=\"nav-bar\">\n        <div class=\"panel-heading\">\n            <!--{{pageTitle}}-->\n        </div>\n        <!--  <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Set Points!</button> \n\n<button type=\"button\" class=\"btn btn-default\" (click)=\"openLoginDialog()\">Configure Set Points!</button>\n-->\n\n<div class=\"container\">\n        <modal #modal class='modal-md'>\n            <modal-header [show-close]=\"true\">\n                <h4 class=\"modal-title\">User Information:</h4>\n            </modal-header>\n            <modal-body>\n                <div class='form-group'>\n                    <label class='control-label' style=\"color:#333\"> E-mail : </label>\n                    <!-- <input type=\"text\" [(ngModel)] = 'flowratesp' class='form-control' style=\"width:80%\">  -->\n                    <input type=\"text\" #emailId class='form-control' style=\"width:80%\">\n                </div>\n                <div class='form-group'>\n                    <label class='control-label' style=\"color:#333\"> Phone No : </label>\n                    <!-- <input type=\"text\" [(ngModel)] = 'tanklevelsp' class='form-control' style='width:80%'> -->\n                    <input type=\"text\" #phoneNo class='form-control' style=\"width:80%\">\n                </div>\n            </modal-body>\n            <modal-footer [show-default-buttons]=\"false\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\">Cancel</button>\n                <!--  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateSetPoints(flowratesp, tanklevelsp, emailId.value)\">Submit</button>  -->\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"userDetailsForm( emailId.value, phoneNo.value)\">Submit</button>\n            </modal-footer>\n        </modal>\n\n        <!-- SetHighPoints Small Screen Modal -->\n        <modal #modalSetHp class='modal-sm modal-md'>\n            <modal-header [show-close]=\"true\">\n                <h4 class=\"modal-title\">Configure:</h4>\n            </modal-header>\n            <modal-body>\n                <div class='form-group'>\n                    <label class='control-label' style=\"color:#333\"> Tank Level High: </label>\n                    <input type=\"text\" #highSpInput [(ngModel)]='tanklevelhisp1' class='form-control' style=\"width:80%\">\n                    <!--  <input type=\"text\" #emailId class='form-control' style=\"width:80%\"> -->\n                </div>\n                <div class='form-group'>\n                    <label class='control-label' style=\"color:#333\"> Tank Level High High : </label>\n                    <input type=\"text\" #highHighSpInput [(ngModel)]='tanklevelhihisp1' class='form-control' style='width:80%'>\n                </div>\n                <div class=\"row\">\n                    <div class='form-group'>\n                        <label class='control-label col-xs-9' style=\"color:#333\">Running Status : </label>\n                        <div class='col-xs-3 col-sm-3' style=\"margin-top:0.8em;margin-right:0em;left:-0.5em\">\n                            <div class='item pull-left'>\n                                <input #pumpStatusInput type=\"checkbox\" id=\"toggle_today_summary1\"  [(ngModel)]='pumpstatus1'> <!--  (click)=\"pumpstatus1Change(pumpStatus1) -->\n                                <div class=\"toggle\">\n                                    <label for=\"toggle_today_summary1\"><i></i></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </modal-body>\n            <modal-footer [show-default-buttons]=\"false\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateSetPoints(highSpInput.value, highHighSpInput.value, pumpStatusInput.value)\">Configure</button>\n                <!--  <button type=\"button\" class=\"btn btn-primary\" (click)=\"userDetailsForm( emailId.value, phoneNo.value)\">Submit</button> -->\n            </modal-footer>\n        </modal>\n\n\n\n\n        <div class='container-fluid'>\n\n            <div class='row'>\n                <div class='col-xs-9 col-sm-6'>\n                    <!--<lights-component> </lights-component>-->\n\n                            <!-- Lights Component -->\n        <!-- PLC State :  (plcstate = 1 | plcstate = 2 | plcstate = 3 | plcstate = 4 | plcstate = 5  )?{{plcstate}}: \"Incompatible Data\" ; -->\n<div [ngSwitch]=\"plcstate\">\n <div class=\"led-box\" > <div *ngSwitchCase=\"'1'\" [ngClass] = \"{'led-red' : false, 'led-red-steady' : true , 'led-green-steady' : false, 'led-green-flashing' : false, 'led-yellow-steady' : false, 'led-yellow': false }\"> </div> </div>\n <div class=\"led-box\"> <div *ngSwitchCase=\"'2'\" [ngClass] = \"{'led-red' : false, 'led-red-steady' : false , 'led-green-steady' : false, 'led-green-flashing' : true, 'led-yellow-steady' : false, 'led-yellow': false }\"> </div> </div>\n <div class=\"led-box\"> <div *ngSwitchCase=\"'3'\" [ngClass] = \"{'led-red' : false, 'led-red-steady' : false , 'led-green-steady' : true, 'led-green-flashing' : false, 'led-yellow-steady' : false, 'led-yellow': false }\"> </div> </div>\n<div *ngSwitchCase=\"'4'\">\n    <div class=\"row\">\n            <div class=\"led-box col-xs-2\" >\n            <div [ngClass] = \"{'led-red' : false, 'led-red-steady' : false , 'led-green-steady' : true, 'led-green-flashing' : false, 'led-yellow-steady' : false, 'led-yellow': false }\"> </div> \n            </div>\n            <div class=\"led-box col-xs-1\" >\n            <div [ngClass] = \"{'led-red' : false, 'led-red-steady' : false , 'led-green-steady' : false, 'led-green-flashing' : false, 'led-yellow-steady' : true, 'led-yellow': false }\"> </div> \n     </div>\n    </div>\n </div>    \n <div class=\"led-box\"> <div *ngSwitchCase=\"'5'\" [ngClass] = \"{'led-red' : false, 'led-red-steady' : false , 'led-green-steady' : false, 'led-green-flashing' : false, 'led-yellow-steady' : false, 'led-yellow': true }\"> </div> </div>\n <div class=\"led-box\"> <div *ngSwitchDefault [ngClass] = \"{'led-red' : false, 'led-red-steady' : false , 'led-green-steady' : false, 'led-green-flashing' : false, 'led-yellow-steady' : false, 'led-yellow': false }\"> </div> </div>\n</div>\n\n\n                </div>\n\n                <div class='col-sm-offset-3 col-xs-12 col-sm-3 hidden-xs'>\n                    <div class=\"form-group form-inline\">\n                        <div>\n                            <label class=\"control-label\" style='min-width:150px'>Tank Level High : </label>\n                            <span *ngIf=\"!editMode\"> {{jsonlist ? jsonlist[0].tanklevelhisp : ''}}</span>\n                            <input *ngIf=\"editMode\" type=\"textbox\" id=\"tankLevelHigh\" class='form-control' [(ngModel)]='tanklevelhisp1' style=\"width: 55px\">\n                        </div>\n                        <div style='margin-top : 10px'>\n                            <label class=\"control-label\" style='min-width:150px'>Tank Level High High : </label>\n                            <span *ngIf=\"!editMode\"> {{jsonlist ? jsonlist[0].tanklevelhihisp : ''}}</span>\n                            <input *ngIf=\"editMode\" type=\"textbox\" id=\"tankLevelHighHigh\" class='form-control' [(ngModel)]='tanklevelhihisp1' style=\"width: 55px\">\n                        </div>\n                        <button type=\"button\" *ngIf=\"!editMode\" class=\"editSetPoints btn btn-primary\" (click)=\"editingMode()\">Edit</button>\n                        <button type=\"button\" *ngIf=\"editMode\" class=\"btn btn-primary\" (click)=\"setHighPoints( tanklevelhisp1, tanklevelhihisp1)\">Update</button>\n\n                        <!-- <button type=\"button\" *ngIf = \"editMode\" class=\"btn btn-primary\" (click)=\"setHighPoints( tankLevelHigh.value, tankLevelHighHigh.value)\">Update</button> -->\n\n                    </div>\n\n                </div>\n                <!-- Small Screen Edit Configure SetPoint Button(Glyphicon) -->\n\n                <div class='editIcon col-xs-12 visible-xs'>\n                    <div class=\"form-group form-inline\">\n                       <!-- <input type=\"button\" class=\"btn btn-primary \" value=\"Set Configure Points\">\n                       <span class=\"glyphicon glyphicon-edit\" (click)='configureHp()'></span> -->\n                       <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)='configureHp()'>\n                        Configure <span class=\"glyphicon glyphicon-edit\"></span>\n                        </button>\n                       \n                    </div>\n                    <!-- end Glyphicon -->\n\n                </div>\n            </div>\n\n\n            <div class='row'>\n                <div class='col-xs-6 col-sm-3'>\n                    <div class=\"form-group form-inline pull-right\">\n                        <div>\n                            <label><h4>Running Status: </h4> </label>\n                        </div>\n                    </div>\n                </div>\n                <div class='col-xs-3 col-sm-3' style=\"margin-top:1.2em;margin-right:3em;left:3em\">\n                    <div class='item pull-left'>\n                        <input type=\"checkbox\" id=\"toggle_today_summary\" [(ngModel)]='pumpStatusBoolean' (change)='pumpBooleanChange(pumpStatusBoolean)'> <!--pumpBooleanChange(pumpStatusBoolean)  -->\n                        <div class=\"toggle\">\n                            <label for=\"toggle_today_summary\"><i></i></label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <!--  </div>    \n                     <!--   <div class='col-sm-3' style=\"margin-top:1.8em;margin-right:3em;left:3em\">\n                             <div class='item pull-left' >\n                                <input type=\"checkbox\" id=\"toggle_today_summary\" [(ngModel)]='pumpStatusBoolean' (change)='pumpBooleanChange(pumpStatusBoolean)'>\n                                <div class=\"toggle\">\n                                    <label for=\"toggle_today_summary\"><i></i></label>\n                                </div>\n                            </div>            \n                            </div>\n                    -->\n\n\n\n            <div class='row'>\n                <div class='col-md-6 hidden-xs hidden-sm'>\n                    <img src='./assets/image.png' class='img img-responsive' alt='image'>\n                </div>\n                <div class='col-xs-12 col-sm-offset-3 col-sm-3'>\n                    <!--<oil-amchart> </oil-amchart>-->\n                    <div id=\"chartdiv\"></div>\n                </div>\n            </div>\n\n\n            <div class='row'>\n                <div class=\"col-sm-offset-3 col-sm-3  col-xs-12\">\n                    <span>Flow Rate (bpd):</span>\n\n                    <span><b>{{jsonlist ? jsonlist[0].flowrate : ''}}</b></span>\n                </div>\n                <div class=\"col-sm-offset-3 col-sm-12 col-md-3 col-xs-12\" style=\"font-size: 15px\">\n                    <span>Tank Level :</span>\n                    <span><b>{{jsonlist ? jsonlist[0].tanklevel * 3.125 : \"0\"}} bbls</b></span>\n                </div>\n            </div>\n\n            <!-- oil tank level chart -->\n\n            <!--  <img src=\"./app/assets/images/image.png\"\n                 class=\"img-responsive center-block\"/> -->\n        </div>\n\n    </div>\n\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/ng2-bs3-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { oilChartComponent } from './oilChart.component';
//import { flashLightsComponent } from './flashlights.component';
//import { ChartModule }            from 'angular2-highcharts'; 
var AppComponent = (function () {
    function AppComponent(_http, AmCharts) {
        var _this = this;
        this._http = _http;
        this.AmCharts = AmCharts;
        this.cb1 = true;
        this.editMode = false;
        this.pageTitle = "XTO NextField";
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(500).flatMap(function () {
            return _this._http.get('http://nextapi-xto.azurewebsites.net/api/RodPumpDemo/GetRodPumpCosmo');
        })
            .subscribe(function (response) {
            _this.jsonlist = response.json();
            //console.log(response);
            _this.datalist = _this.jsonlist[0];
            _this.pumpStatusBoolean = (_this.datalist.pumpstatus == "ON") ? true : false;
            _this.pumpstatus = _this.datalist.pumpstatus;
            _this.tanklevelhisp = _this.jsonlist[0].tanklevelhisp;
            _this.tanklevelhihisp = _this.jsonlist[0].tanklevelhihisp;
            _this.plcstate = _this.jsonlist[0].plcstate;
            //console.log("json list is " + this.jsonlist);
            //  this.cb1 = (this.jsonlist[0].pumpstatus == 'ON') ? true : false;
            //this.flowratesp = this.jsonlist[0].flowratesp;
            // this.tanklevelsp = this.jsonlist[0].tanklevelsp;
            // console.log(this.jsonlist[0].tanklevel,this.jsonlist[0].flowrate);
            // console.log("running status" + this.cb1);
        });
        /*
                setTimeout(() => {this.loadUser()},2000);
          */
        /*
      Observable.interval(2000).flatMap( () => {
          return this._http.request('http://nextapi-xto.azurewebsites.net/api/RodPumpDemo/GetRodPumpVals')
      }).subscribe((res: Response) => {
                this.data = res.json();
                // this.datalist = JSON.parse(this.data);
               console.log("type of data " + typeof this.data[0]);


                //console.log(" stored data list is " + this.datalist);
       } )*/
        /*
this.datalist = ():any[] => {
this.loading = true;
this._http.request('http://nextapi-xto.azurewebsites.net/api/RodPumpDemo/GetRodPumpCosmo')
    .subscribe(
        this.loading = false;
       // console.log(this.data[0]);
        return this.data[0];
        */
    }
    /* method used for first api */
    /*
      findObjFromArray(type) {
          if (this.jsonlist) {
  
                  /*
             return this.jsonlist.find(obj => {
                 console.log("obj['dName'] is " + obj[type]);
               return obj['dName'] === type;
              })
              
             * /
              return this.jsonlist[0];
          }
          return {};
      }
  */
    /*
        getUser() {
        return this._http.get(`http://nextapi-xto.azurewebsites.net/api/RodPumpDemo/GetRodPumpCosmo`)
        .map((res:Response) => res.json());
      }
    loadUser(){
      this.getUser().subscribe(data => this.cosmoList = data);
      console.log("type of cosmolist is " + typeof (this.cosmoList));
    }
    */
    /* Updates Database with tanklevel high and high */
    AppComponent.prototype.setHighPoints = function (tankLevelHigh, tankLevelHighHigh) {
        //url : string = 'http://nextapi-xto.azurewebsites.net/api/RodPumpDemo/PostSPs'
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // let data = {flowratesp,tanklevelsp};
        //let data = {"tankLevelHigh":tankLevelHigh, "tankLevelHighHigh": tankLevelHighHigh};
        var data = { "pumpstatus": this.pumpstatus, "tanklevelhisp": tankLevelHigh, "tanklevelhihisp": tankLevelHighHigh };
        this.editMode = false;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://nextapi-xto.azurewebsites.net/api/RodPumpDemo/PostSPs', data, options)
            .subscribe(function (response) {
            console.log(data);
            console.log(response);
            //this.modal.close();
        });
    };
    /* Toggle Button changing pumpstatus */
    AppComponent.prototype.pumpBooleanChange = function (pumpStatusBoolean) {
        this.datalist.pumpstatus = (pumpStatusBoolean == true) ? 'ON' : 'OFF';
        console.log(this.datalist.pumpstatus);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var setPointData = { "pumpstatus": this.datalist.pumpstatus, "tanklevelhisp": this.tanklevelhisp, "tanklevelhihisp": this.tanklevelhihisp };
        //console.log(JSON.stringify(setPointData));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://nextapi-xto.azurewebsites.net/api/RodPumpDemo/PostSPs', setPointData, options)
            .subscribe(function (response) {
            console.log("Set points submitted successfully");
        });
    };
    // User Email and Phone no details submission on pageload
    AppComponent.prototype.userDetailsForm = function (emailId, phoneNo) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var userData = { "emailaddress": emailId, "phonenumber": phoneNo };
        // console.log(JSON.stringify(userData));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://nextapi-xto.azurewebsites.net/api/RodPumpDemo/PostUserInfo', userData, options)
            .subscribe(function (response) {
            _this.modal.close();
        });
    };
    /*OnClick Edit */
    AppComponent.prototype.editingMode = function () {
        this.editMode = true;
        this.tanklevelhisp1 = this.jsonlist[0].tanklevelhisp;
        this.tanklevelhihisp1 = this.jsonlist[0].tanklevelhihisp;
    };
    /* on Click Configure Set Points, Open Modal
    openLoginDialog(){
       // this.flowratesp = this.jsonlist[0].flowratesp;
       //  this.tanklevelsp = this.jsonlist[0].tanklevelsp;
         console.log("when open dialog" + this.flowratesp + " and " + this.tanklevelsp);
         return this.modal.open();
    }
    */
    AppComponent.prototype.configureHp = function () {
        // this.editMode = true;
        this.tanklevelhisp1 = this.jsonlist[0].tanklevelhisp;
        this.tanklevelhihisp1 = this.jsonlist[0].tanklevelhihisp;
        this.pumpstatus1 = (this.jsonlist[0].pumpstatus = "ON") ? true : false;
        ;
        this.modalSetHp.open();
    };
    /* Updates API from Edit Glyphicon xs resolution */
    AppComponent.prototype.updateSetPoints = function (tankLevelHighInput, tankLevelHighHighInput, pumpStatusInput) {
        //url : string = 'http://nextapi-xto.azurewebsites.net/api/RodPumpDemo/PostSPs'
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // let data = {flowratesp,tanklevelsp};
        //let data = {"tankLevelHigh":tankLevelHigh, "tankLevelHighHigh": tankLevelHighHigh};
        var data = { "pumpstatus": (pumpStatusInput = true) ? "ON" : "OFF", "tanklevelhisp": tankLevelHighInput, "tanklevelhihisp": tankLevelHighHighInput };
        //this.editMode = false;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://nextapi-xto.azurewebsites.net/api/RodPumpDemo/PostSPs', data, options)
            .subscribe(function (response) {
            console.log(JSON.stringify(data));
            console.log(response);
            _this.modalSetHp.close();
        });
    };
    AppComponent.prototype.pumpstatus1Change = function (pumpStatusInput) {
        this.pumpstatus1 = (pumpStatusInput = true) ? "ON" : "OFF";
    };
    AppComponent.prototype.ngOnInit = function () {
        this.modal.open();
        this.createChart();
    };
    AppComponent.prototype.createChart = function () {
        var _this = this;
        this.charts = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "depth3D": 100,
            "angle": 30,
            "pathToImages": "https://www.amcharts.com/lib/3/images/",
            "dataProvider": this.generateChartData(),
            "valueAxes": [{
                    "stackType": "regular",
                    "gridAlpha": 0,
                    "minimum": 0,
                    "maximum": 600
                    //"maximum":193
                    // "strictMinMax":true
                }],
            "graphs": [{
                    "type": "column",
                    "topRadius": 1,
                    "columnWidth": 1,
                    "showOnAxis": true,
                    "lineThickness": 2,
                    "lineAlpha": 0.5,
                    "lineColor": "#FFFFFF",
                    "fillColors": "green",
                    "fillAlphas": 0.8,
                    "valueField": "value1",
                    "autoGridCount": false,
                    "max": 192
                }, {
                    "type": "column",
                    "topRadius": 1,
                    "columnWidth": 1,
                    "showOnAxis": true,
                    "lineThickness": 2,
                    "lineAlpha": 0.5,
                    "lineColor": "#cdcdcd",
                    "fillColors": "#cdcdcd",
                    "fillAlphas": 0.5,
                    "valueField": "value2",
                }],
            "responsive": {
                "enabled": true
            },
            "categoryField": "category",
            "categoryAxis": {
                "axisAlpha": 0,
                "labelOffset": 20,
                "gridAlpha": 0
            }
        });
        /*
        this.charts.chartBackground.css({
        background:'transaparent !important'
        
        });
        */
        /* Update chart for every 1sec */
        this.timer = setInterval(function () {
            // This must be called when making any changes to the chart
            _this.AmCharts.updateChart(_this.charts, function () {
                _this.charts.dataProvider = _this.generateChartData();
            });
        }, 100);
    };
    AppComponent.prototype.generateChartData = function () {
        var chartData = [];
        var tanklevelVal1;
        var tanklevelVal2;
        var tanklevelInBPS1;
        var tanklevelInBPS2;
        tanklevelVal1 = this.jsonlist ? this.jsonlist[0].tanklevel : 0;
        tanklevelVal2 = (tanklevelVal1 > 192) ? 0 : (192 - tanklevelVal1);
        tanklevelInBPS1 = tanklevelVal1 * 3.125; //(tanklevelVal1 * 600/192)
        tanklevelInBPS2 = tanklevelVal2 * 3.125;
        chartData.push({ "category": "Oil Level in the Tank", "value1": tanklevelInBPS1, "value2": tanklevelInBPS2 });
        // chartData.push({"category":"Oil Level in the Tank", "value1": 295 ,"value2":193   });
        return chartData;
    };
    ;
    AppComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
        this.AmCharts.destroyChart(this.charts);
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === "function" && _a || Object)
], AppComponent.prototype, "modal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalSetHp'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === "function" && _b || Object)
], AppComponent.prototype, "modalSetHp", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__("../../../../ng2-bs3-modal/ng2-bs3-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"],
            __WEBPACK_IMPORTED_MODULE_5__amcharts_amcharts3_angular__["a" /* AmChartsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__amcharts_amcharts3_angular__["b" /* AmChartsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map