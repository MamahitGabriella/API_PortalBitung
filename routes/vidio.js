"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/vidioController");

    app.route("/").get(jsonku.index);

    app.route("/tampilvidio").get(jsonku.tampilSemuavidio);

    app.route("/tampilvidio/:id").get(jsonku.tampilvidioBerdasarkanID);

    app.route("/tambahvidio").post(jsonku.tambahvidio);

    app.route("/ubahvidio").put(jsonku.ubahvidio);

    app.route("/hapusvidio").delete(jsonku.hapusvidio);
};