const express = require('express')
const router = express.Router()

// RETORNO TODOS OS PEDIDO
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorno os pedidos'
    })
})

// INSERE UM PEDIDO
router.post('/', (req, res, next) => {

    const pedido = {                         //usando body-parser
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
    })
})

// RETORNO OS DADOS DE UM PEDIDO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto


    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id_pedido: id
    })


})


//EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    })
})


module.exports = router