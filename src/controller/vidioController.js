"use strict";

var response = require("../../res");
var connection = require("../../config/koneksi");

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res);
};

// Menampilkan semua data Vidio
exports.tampilSemuaVidio = function(req, res) {
    connection.query("SELECT * FROM vidio", function(error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menampilkan semua data Vidio berdasarkan id
exports.tampilVidioBerdasarkanID = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM vidio WHERE id_vidio = ?", [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data Vidio
exports.tambahVidio = function(req, res) {
    var id_vidio = req.body.id_vidio;
    var nama_vidio = req.body.nama_vidio;
    var vidio = req.body.vidio;

    connection.query("INSERT INTO vidio (id_vidio, nama_vidio, vidio) VALUES (?, ?, ?)", [id_vidio, nama_vidio, vidio], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Kembalikan Data!", res);
        }
    });
};

// Merubah data berdasarkan id Vidio
exports.ubahVidio = function(req, res) {
    var id_vidio = req.body.id_vidio;
    var nama_vidio = req.body.nama_vidio;
    var vidio = req.body.vidio;

    connection.query("UPDATE vidio SET nama_vidio=?, vidio=?,  WHERE id_vidio=?", [nama_vidio, vidio, id_vidio], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
};

// Menghapus data berdasarkan id Vidio
exports.hapusVidio = function(req, res) {
    var id_vidio = req.body.id_vidio;
    connection.query("DELETE FROM vidio WHERE id_vidio=?", [id_vidio], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res);
        }
    });
};