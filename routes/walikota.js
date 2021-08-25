"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/walikotaCotroller");

    app.route("/").get(jsonku.index);

    app.route("/tampilwalikota").get(jsonku.tampilSemuawalikota);

    app.route("/tampilwalikota/:id").get(jsonku.tampilwalikotaBerdasarkanID);

    app.route("/tambahwalikota").post(jsonku.tambahwalikota);

    app.route("/ubahwalikota").put(jsonku.ubahwalikota);

    app.route("/hapuswalikota").delete(jsonku.hapuswalikota);
};