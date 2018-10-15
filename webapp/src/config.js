/*
    /api can be used when web application is served from the same server
    with the same url and both the api and the webapp resides behind a proxy
*/

export const API_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5001/api"
        : "/api"
