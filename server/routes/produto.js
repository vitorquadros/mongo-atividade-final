import {
	index,
	show,
	store, 
	update, 
	remove,
	removeMany,
	filterPrice}
from '../app/controllers/produto.js'
import { Router } from 'express';

const routes = Router();
routes.get('/', (req,res,next) => index(req,res))
routes.get('/filter_price/', (req,res,next) => filterPrice(req,res))
routes.get('/:id', (req,res,next) => show(req,res))
routes.post('/', (req,res,next) => store(req,res))
routes.put('/:id',(req,res,next) => update(req,res))
routes.delete('/many/',(req,res,next) => removeMany(req,res))
routes.delete('/:id',(req,res,next) => remove(req,res))
export default routes;