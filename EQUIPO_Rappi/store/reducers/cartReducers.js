import { ADD_TO_CART, DELETE_ALL, DELETE_ITEM } from "../actions/cartActions";


const initialState = {
    total: 0,
    items: []  
}

export default (state = initialState, action) => { //state es el arreglo, action es la accion que recibe
    switch (action.type) {
        case ADD_TO_CART:
            //
            const item = action.item;
            item.id = Math.floor(Math.random() * 1001).toString()
            console.log(action.item)
           console.log(action.item.id)
            return {
                total: state.total + action.item.cost,
                items: state.items.concat(action.item),
                
                
            }
            
        case DELETE_ITEM: //filter para filtrar
            const index = action.item.id;
          
           
            //const i = state.items.map(items => items.id).indexOf(index); //busca la posicion
          
            
             //items: state.items.splice(i,1) //quita todos menos el index
             //items: state.items.filter(items => items.id > 500) filtra los ids mayores de 500
            //items: state.items.filter(item => item !== i) borra nada, con == borra todo
            return {
                items: state.items.filter(item => item.id != index),
                total: state.total - action.item.cost,
                
                
                
            } //!== si x es diferente de 'x'
        case DELETE_ALL:
            return{
                items: [],
                total: 0
            }
        }
    return state;
    
}
