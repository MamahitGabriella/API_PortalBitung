"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/visimisiController");

    app.route("/").get(jsonku.index);

    app.route("/tampilvisimisi").get(jsonku.tampilSemuavisimisi);

    app.route("/tampilvisimisi/:id").get(jsonku.tampilvisimisiBerdasarkanID);

    app.route("/tambahvisimisi").post(jsonku.tambahvisimisi);

    app.route("/ubahvisimisi").put(jsonku.ubahvisimisi);

    app.route("/hapusvisimisi").delete(jsonku.hapusvisimisi);
};