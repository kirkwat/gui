import axios from "axios";

const apiEndPoint = "https://api.johnlawrimore.com/store/products";
const apiConfig = {
    headers: {
        Authorization: 'kwatson'
    }
};

export const getProductById = (productId) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/${productId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getProducts = () => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const addReview = (productId,review) => new Promise((resolve, reject) => {
    axios.post(`${apiEndPoint}/${productId}/reviews`, review, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});