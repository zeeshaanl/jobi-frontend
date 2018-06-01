const API_ROOT = "https://backend.gojobi.de";
const API_ROOT_DEV = "http://localhost:4444";

const config = {
    baseURL: API_ROOT_DEV,
    endpoints: {
        JOBS: "/jobs",
        CREATE_USER: "/createUser"
    }
};

export default config;
