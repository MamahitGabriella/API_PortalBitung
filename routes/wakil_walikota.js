"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/wakil_walikotaController");

    app.route("/").get(jsonku.index);

    app.route("/tampilwakil_walikota").get(jsonku.tampilSemuawakil_walikota);

    app.route("/tampilwakil_walikota/:id").get(jsonku.tampilwakil_walikotaBerdasarkanID);

    app.route("/tambahwakil_walikota").post(jsonku.tambahwakil_walikota);

    app.route("/ubahwakil_walikota").put(jsonku.ubahwakil_walikota);

    app.route("/hapuswakil_walikota").delete(jsonku.hapuswakil_walikota);
};