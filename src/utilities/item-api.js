import sendRequest from "./send-request";

const BASE_URL = "/api/item";

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function create(title) {
    console.log("ITEM: ", title);
    console.log(typeof(title));
    return sendRequest(`${BASE_URL}/add`, "POST", {title});
}