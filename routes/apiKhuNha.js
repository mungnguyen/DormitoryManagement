module.exports = function (app, db) {
    // CRUD
    app.get('/api/khuNha', function (req, res) {
        db.KhuNha.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.get('/api/khuNha/:id', function(req, res) {
        db.KhuNha.findOne({ 
            where:
                { khuNhaId: req.params.id }
            }
        ).then(function(result) {
            res.json(result);
        });
    }); 

    app.post('/api/themKhuNha', function (req, res) {
        db.KhuNha.create({
            tenKhuNha: req.body.tenKhuNha
        }).then(function (result) {
                res.json(result);
        });
    });

    app.put('/api/suakhuNha', function (req, res) {
        db.KhuNha.update({
            tenKhuNha: req.body.tenKhuNha
        }, {
            where: {
                khuNhaId: req.body.khuNhaId
            }
        }).then(function (result) {
              res.json(result
                );
        });
    });

    app.delete('/api/xoaKhuNha', function (req, res) {
        db.KhuNha.destroy({
            where: {
                khuNhaId: req.body.khuNhaId
            }
        }).then(function (result) {
            res.json(result);
        });
    })
}