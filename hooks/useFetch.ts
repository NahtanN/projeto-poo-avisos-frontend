import API from "../service/api";

export const fetcher = (url: string) => API.get(url).then(response => response.data)