import { useEffect, useState } from "react"
import {products as productos, getProductById} from '../../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'

import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    
    const {itemId} = useParams()
    console.log(itemId)
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(productos)
            }, 2000)
        })
        
        promesa.then(result => {
            result = result.filter(product => product.id == itemId)
            setProduct(result) //Se almacena el resultado de la promesa

        })
    }, [])
    
    return(
        <div className="flex justify-center">
            <ItemDetail {...product[0]}/>
        </div>
    )
}
export default ItemDetailContainer