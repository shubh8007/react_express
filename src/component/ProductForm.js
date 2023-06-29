import {Fragment,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ProductService from '../service/ProductService'


const productFrom=(props)=>{
    let navigate=useNavigate();
    let [formDetails,setFormdetails]=useState({pid:"",pname:"",price:""});
    let addProd=()=>{
        ProductService.insertProduct(formDetails).then((result)=>{
            console.log(result.data);
            navigate("/");
        }).catch(()=>{});
    }
    return(
        <div>
           <form>
          <label htmlFor='pid'>Product id</label>
          <input type="text" id="pid" name="pid" value={formDetails.pid}
           onChange={(event)=>{setFormdetails({...formDetails,pid:event.target.value})}}></input>

           <lable htmlFor='pname'>Product name</lable>
           <input type="text" id="pname" name="pname" value={formDetails.pname}
           onChange={(event)=>{setFormdetails({...formDetails,pname:event.target.value})}}></input>
  
         <lable htmlFor='price'>Price</lable>
         <input type="text" id="price" name="price" value={formDetails.price}
         onChange={(event)=>{setFormdetails({...formDetails,price:event.target.value})}}></input>


         <button type="button" id="btn" name="btn" onClick={addProd}>Add Product</button>


           </form>









        </div>
    )

}

export default productFrom;