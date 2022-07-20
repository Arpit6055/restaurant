import {fetchUser} from "../utils/fetchLocalsorageData.js";

export const initialState = {
    user : fetchUser()
}