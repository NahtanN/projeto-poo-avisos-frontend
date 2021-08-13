import API from "../service/api";

export const fetcher = (path: string) => API.get(path).then(response => response.data)