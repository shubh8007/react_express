import axios from 'axios';
const baseUrl="http://localhost:8001";

class ProductService{
    getProduct(){
        return axios.get(baseUrl+"/products")
    }

    getProduct(pid){
        return axios.get(baseUrl+"/products/product/"+pid)
    }

    deleteById(pid){
        return axios.get(baseUrl+"/products/delete/"+pid)
    }

    insertProduct(prod){
        return axios.post(baseUrl+"/products/insert",prod)
    }
    updateProduct(prod){
        return axios.put(baseUrl+"/products/update/"+prod.pid,prod)
    }
}

export default  new ProductService();