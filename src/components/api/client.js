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
            firstName,
            lastName,
            email,
            telephone
        }, {
            headers: {
                'Authorization': `Bearer: ${authToken}`
            }
        });
    }

    addJobToFavourites(authToken, jobId) {
        console.log(authToken, 'authtoken received auth token');
        console.log(jobId, 'jobId received jobId');
        return this.apiInstance.post(config.endpoints.ADD_JOB_TO_FAVOURITES, {
            jobId,
        }, {
            headers: {
                'Authorization': `Bearer: ${authToken}`
            }
        });
    }
}

const apiClient = new ApiClient();

export default apiClient;
