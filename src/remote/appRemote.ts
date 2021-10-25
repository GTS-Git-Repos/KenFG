import { BASE_URL, METHODS } from "../constants/API_constants"
import requestServer from "../workers/requestServer"

// API Routes
const req_get_all_users = "/init"

export const initialRemote = async () => {
    try {
        const response = await requestServer(METHODS.GET, BASE_URL)
        if (response.status === "success") {
            return response.query
        }
        else {
            failedLog("initialRemote()", response)
        }
    }
    catch (err) {
        console.log(err)
        return false
    }
}

const failedLog = (functionname: string, response: any) => {
    console.log(
        `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
    );
    throw response
};