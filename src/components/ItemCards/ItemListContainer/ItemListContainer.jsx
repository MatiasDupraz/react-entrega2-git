import { useEffect, useState } from "react"
import {products as productos, getProducts, getProductByCategory} from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams();
    /*Estoy tratando de parsear una cadena de caracteres (boludo)*/
    console.log(categoryId)
    
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(productos)
            }, 500)
        })
        promise.then(result => {
            if(categoryId){
                setProducts(result.filter(product => product.category === categoryId)) //Se almacena el resultado de la promesa
            }
            else{
                setProducts(result) //Se almacena el resultado de la promesa
            }
            
        })
    }, [categoryId])

    return(
        <div>
            <h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{greeting}</h1>
            {products.length === 0 ? <div>Loading...</div> : <ItemList products={products}/>}
            
        </div>
    )
}
export default ItemListContainer