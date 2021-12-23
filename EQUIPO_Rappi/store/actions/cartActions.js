export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item: item
    }
}

export const deleteItemFromCart = (item) => { //lo naranja no cambia en nada, depende del valor 
    return {
        type: DELETE_ITEM,
        item: item
        
    }
}
export const deleteAllCart = (item) => {
    return {
        type: DELETE_ALL,
        item: item
    }
}