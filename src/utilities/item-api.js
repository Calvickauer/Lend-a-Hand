import sendRequest from "./send-request";

const BASE_URL = "/api/item";

export function addItem(itemData) {
    console.log("ITEM: ", itemData);
    return sendRequest(`${BASE_URL}/add`, "POST", itemData);
}