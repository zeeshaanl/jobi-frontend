import axios from 'axios';
import config from '../../../config';

class ApiClient {
    constructor() {
        this.apiInstance = axios.create({
            baseURL: config.baseURL
        })
    }

    fetchJobs(queryParams) {
        return this.apiInstance.get(config.endpoints.JOBS, {
            params: queryParams
        });
    }

    createUser(authToken, firstName, lastName, email, telephone) {
        return this.apiInstance.post(config.endpoints.CREATE_USER, {
            id: authToken,
            firstName,
            lastName,
            email,
            telephone
        }, {
            headers: {
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': authToken
            }
        });
    }
}

const apiClient = new ApiClient();

export default apiClient;
