import { client, db } from '../../database/dbConnection.js'

const collection = client.db(db).collection('produtos')
/**
 * Retorna produtos ordenados de acordo com o campo definido em orderBy
 * e ordenados na ordem definida por reverse, se verdadeiro ordem reversa (ASC)
 * Rotas da API:
 * GET /produtos
 * GET /produtos?order=${campo}&reverse=${valor}
 * GET /produtos?field=${campo}&search=${termo}
 * 
 * @param {*} orderBy campos a ser utilizado na ordenacao
 * @param {*} reverse booleano para a determinar a ordem ascendente (true) ou descendente (false)
 * @returns Array de objetos Produto
 */
const getAllProdutos = async (orderBy = 'id_prod', reverse = false) => {
    try {
        console.log('getAllProdutos')
        let resultados = []

        //implementar aqui

        return resultados;
    } catch (error) {
        console.log(error)
        return false;
    }
}

/**
 * Busca produto definido por id_prod igual ao campo id_prod
 * Rotas da API:
 *  GET /produtos/${id}
 * @param {*} id_prod ID do produto a ser retornado
 */
const getProdutoById = async (id_prod) => {
    try {
        let produto = {}

        //implementar aqui

        return produto;
    } catch (error) {
        console.log(error)
        return false;
    }
}

//Registra um novo produto no banco, 
//retorna verdadeiro se inserido com sucesso
//API - Testar com cliente HTTP
/**
 * Rota da API:
 *  POST /produtos
 * 
 * @param {*} produto Objeto Produto com os campos a serem inseridos
 * @returns 
 */
const insertProduto = async (produto) => {
    try {
        console.log(produto)
        //implementar aqui

        return true
    } catch (error) {
        console.log(error)
        return false;
    }
}

//Atualiza um produto no banco
//retorna verdadeiro se atualizado com sucesso
//API - Testar com cliente HTTP
/**
 * Rota da API:
 *  PUT /produtos/${id}
 * 
 * @param {*} new_produto Objeto com os campos a serem atualizados
 * @returns booleano de confirmação
 */
const updateProduto = async (new_produto) => {
    try {

        //implementar aqui

        let updated
        if (updated) return true
        else throw new Error('DAO: Erro ao atualizar produto!')
    } catch (error) {
        console.log(error)
        return false;
    }
}

//Remove um produto do banco
//API - Testar com cliente HTTP
/**
 * Rota da API:
 *  DELETE /produtos/${id}
 * 
 * @param {*} id_prod ID a ser excluído
 * @returns Booleano de confirmação
 */
const deleteProduto = async (id_prod) => {
    try {

        //implementar aqui

        return deleted //boolean
    } catch (error) {
        console.log(error)
        return false;
    }
}

//API - Testar com cliente HTTP
/**
 * Rota da API: 
 *  DELETE /produtos/many
 * 
 * @param {*} ids Array de ids a serem excluídos
 * @returns Booleano para confirmar a exclusão
 */
const deleteManyProdutos = async (ids) => {
    try {

        //implementar aqui

        return deltedAll //boolean
    } catch (error) {
        console.log(error)
        return false;
    }
}

/** Filtra Produtos por termo de busca para o campo nome ou descricao 
 * Rotas da API:
 * GET /produtos?field=${campo}&search=${termo}
 * campo => nome || descricao
 * 
 * @param {*} field campo de busca (nome ou descricao)
 * @param {*} term termo de busca (palavra a ser encontrada)
 * @returns Array de objetos Produto
 */
const getFiltredProdutos = async (field = 'nome', term = '') => {
    try {
        let resultados = []
        console.log({ field, term })
        await changeIndexes(field) //troca de indices

        //implementar aqui

        return resultados;
    } catch (error) {
        console.log(error)
        return false;
    }
}
/**
 * Rota da API:
 * GET /produtos/filter_price/?greater=${min}&less=${max}
 * Parametros:
 * @param {*} greater valor inicial do intervalor
 * @param {*} less valor final do intervalo
 * @param {*} sort ordenar por maior ou menor preco (1,-1)
 * @returns Array de objetos Produto
 */
const getProdutosPriceRange = async (greater = 0, less = 0, sort = 1) => {
    try {
        let resultados = []

        //implementar aqui

        return resultados;
    } catch (error) {
        console.log(error)
        return false;
    }
}

const changeIndexes = async (field) => {

    const indexes = await collection.indexes()
    const textIndexes = indexes.filter(index => index.key?._fts === 'text')

    textIndexes.forEach(async index => {
        if (index.name !== field + '_text')
            await collection.dropIndex(index.name)
    })

    if (!textIndexes.length) {
        let newIndex = {}
        newIndex[field] = 'text' //field = 'nome' => {nome:'text'}
        collection.createIndex(newIndex)
    }
}

export {
    getAllProdutos,
    getProdutoById,
    insertProduto,
    updateProduto,
    deleteProduto,
    deleteManyProdutos,
    getFiltredProdutos,
    getProdutosPriceRange
}