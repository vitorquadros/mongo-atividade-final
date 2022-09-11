import client from '../../database/dbConnection.js'

const collection = client.db('loja').collection('produtos')

const getAllProdutos = async (orderBy='id_prod', reverse = false) => {
    try {
        let resultados = []

        //implementar aqui
        
        return resultados;
    } catch (error) {
        console.log(error)
        return false;
    }
}

const getProdutoById = async (idProd) => {
    try {
        let produto = {}
        
        //implementar aqui
        
        return produto;
    } catch (error) {
        console.log(error)
        return false;
    }
}

const insertProduto = async (produto) => {
    try {
      
        //implementar aqui
        
        return true 
    } catch (error) {
        console.log(error)
        return false;
    }
}

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

const deleteProduto = async (id_prod) => {
    try {
       
        //implementar aqui
        
        return deleted //boolean
    } catch (error) {
        console.log(error)
        return false;
    }
}

const deleteManyProdutos = async (ids) => {
    try {
        
        //implementar aqui
        
        return deltedAll //boolean
    } catch (error) {
        console.log(error)
        return false;
    }
}

const getFiltredProdutos = async (field = 'nome', term = '') => {
    try {
        let resultados=[]
        console.log({ field, term })
        await changeIndexes(field) //troca de indices
  
        //implementar aqui
        
        return resultados;
    } catch (error) {
        console.log(error)
        return false;
    }
}

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
   
    textIndexes.forEach(async index =>{ 
        if(index.name !== field + '_text')
            await collection.dropIndex(index.name)
    })

    if(!textIndexes.length){
        let newIndex = {}
        newIndex[field] = 'text'
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