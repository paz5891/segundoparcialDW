const express = require ("express");
const mySqlCon = require ("../db/database");
const security = require ("../security/security");
const router = express.Router();


router.get('/facturas/:id/productos',security,(req,res)=>{
    console.log('GET productos_facturas con id de factura')
    mySqlCon.query("select productos_facturas.id, productos_facturas.producto_id, productos_facturas.cantidad, productos_facturas.subtotal, productos_facturas.creado_por from facturas join productos_facturas on facturas.id = productos_facturas.factura_id join productos on productos_facturas.producto_id = productos.id where facturas.id = ?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});


router.get('/productos_facturas',security,(req, res)=>{
    console.log('get productos_facturas')
    mySqlCon.query("select * from productos_facturas",(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

router.delete('/productos_facturas/:id',security, (req, res)=>{
    console.log('DELETE productos_facturas')
    mySqlCon.query('delete from productos_facturas where id = ?',
    [req.params.id], (err,result)=>{
        if(!err){
            res.send('deleted successfully');
        }else{
            console.log(err.sqlMessage);
            res.status(500).send(err.sqlMessage);
        }
    })
});

module.exports = router;