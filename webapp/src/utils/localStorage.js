const TOKEN_KEY = "access_token";

export const setToken = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = token => {
    localStorage.getItem(TOKEN_KEY);
};
