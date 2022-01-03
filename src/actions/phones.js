export const RECEIVE_PHONES = 'RECEIVE_PHONES'
export const MOVE_INCART = 'MOVE_INCART'
export const REMOVE_INCART = 'REMOVE_INCART'

export function receivePhones(phones){
    return{
        type: RECEIVE_PHONES,
        phones
    }
}
export function moveIncart(phone_id){
    return{
        type: MOVE_INCART,
        id: phone_id
    }
}

    export function removeIncart(phone_id,phone_main){
        console.log(phone_id,phone_main);
    return{
        type: REMOVE_INCART,
        id: phone_main,
        idMain:phone_main
    }
}
