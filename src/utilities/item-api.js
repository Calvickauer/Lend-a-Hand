import sendRequest from "./send-request";

const BASE_URL = "/api/items";


export function create(title) {
    console.log("ITEM: ", title);
    console.log(typeof(title));
    return sendRequest(`${BASE_URL}/add`, "POST", {title});
}

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

// added 
export function getOwned() {
    return sendRequest(`${BASE_URL}/owned`);
}
export function getItem(params) {
    return sendRequest(`${BASE_URL}/items/:itemId`, "POST", {params});

}