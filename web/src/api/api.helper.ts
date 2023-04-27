import axios from "axios";
const apiUrl = 'http://127.0.0.1:5000'
export const requests = {
    get: (url: string) => {
      return axios({
        method: `get`,
        url: `${apiUrl}${url}`,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
      });
    },
    post: (url: string, body: any, onUploadProgress?: any) => {
      if (onUploadProgress) {
        return axios({
          method: `post`,
          url: `${apiUrl}${url}`,
          data: body,
          onUploadProgress,
        });
      }
      return axios({
        method: `post`,
        url: `${apiUrl}${url}`,
        data: body,
      });
    },
    delete: (url: string, body = false) => {
      if (body) {
        return axios({
          method: "delete",
          url: `${apiUrl}${url}`,
          data: body,
        });
      }
      return axios({
        method: "delete",
        url: `${apiUrl}${url}`,
      });
    },
    put: (url: string, body: any) => {
      return axios({
        method: "put",
        url: `${apiUrl}${url}`,
        data: body,
      });
    },
  };