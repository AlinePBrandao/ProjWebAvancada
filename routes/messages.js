var express = require('express');
var router = express.Router();

var Message = require('../models/message');

/*router.post('/', async function (req,res,next){
    var message = new Message({
        content:req.body.content
    });
    message.save(function(err,result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu ao salvar message',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem salva com sucesso",
            objMessageSave: result
        });
    });

});*/

router.get('/', async function(req, res, next){

    await Message.find({})
    .then((result) =>{
        res.status(200).json({
            myMsgSucesso: "Usuarios recuperados com sucesso",
            objMessageSRecuperadoS: result
        });
    })
    .catch((err) =>{
        return res.status(500).json({
            myErrorTitle: "Um erro aconteceu ao buscar as Mensagens",
            myError: err
        });
    });
});

router.post('/', async function (req,res){
    var message = new Message({
        content:req.body.content
    });

    try{
        console.log("***"+message);
        const result = await message.save();
        
        console.log(messageSave);
        console.log("message salva" + messageSave.content);

        res.status(201).json({
            myMsgSucess: "Mensagem salva com sucesso",
            objMessageSave: result
        });
        
    }
    catch(err){
        return res.status(500).json({
            myErroTitle: 'Um erro aconteceu ao salvar message',
            myError: err
            
        });       
    }
    console.log(message);
});

// router.delete('/', function (req, res, next){
//     Message.find(req)
//     .exec(function(err, result) {
//         if(err){
//             return res.status(500).json({
//                 myErroTitle: "Erro ocorreu",
//                 myError: err
//             });
//         }
//         res.status(200).json({
//             myMsgSucess: "Mensagem excluida com sucesso",
//             objMessageSave: result
//         });
//     });
// });


router.delete('/:id', function (req, res, next){
  
      Message.deleteOne({_id: new ObjectID(id)}, function(err, result) {
        if (err) throw err;
  
        console.log(`${result.deletedCount} registro(s) excluído(s)`);
        client.close();
      });
});


// router.delete('/', (req, res) => {
//     console.log("entrei");

// });

module.exports = router;