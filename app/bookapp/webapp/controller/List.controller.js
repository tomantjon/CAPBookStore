sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("bookapp.controller.List", {
            onInit: function () {

                var oNewModel = { 
                    "OrderNo":"2019-09...", 
                    "Items":[
                        { "book_ID":201, "amount":5 }
                    ]};
                var oLocal = new JSONModel(oNewModel);
                this.getView().setModel(oLocal, "local");

               
            },

            handleListItemPress: function (oEvent) {

                var oEntry = this.getView().getModel("local").getData();
                //Get the V2 ODataModel from manifest.json called v2model.
                //This is necessary to create items via the OData V2.
                var oData = this.getView().getModel("v2model");

                 oData.create("/Orders", oEntry, {
                     success: function (data) {
                        alert("success");
                    },
                    error: function (e) {
                        alert("error");
                    }
                });
                
            }
        });
    });
