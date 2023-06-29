import React,{Component,Fragment} from 'React';
import ProductService from '../service/ProductService';
import {Link} from 'react-router-dom';


class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parr:[],
            searcharr:[],
            searchtext:""

        }
    }
    fetchData=()=>{
        ProductService.getProduct().then((result)=>{
            console.log(result.data)
            this.setState({...this.state,parr:result.data,searcharr:result.data})
        }).catch(()=>{})

    }
    componentDidMount(){
        this.fetchData();
    }
    deleteProd=(pid)=>{
        ProductService.deleteById(pid).then(()=>{
            this.fetchData()

        }).catch();
    }
    render(){
        return(
            <div>
                    <Link to="/form">
                        <button type="button" id="btn" value="btn" name="btn">Add New Product</button>
                    </Link>
                    <br></br>
                    <br></br>
                    <input type="text" id="nm" name="nm" value={this.searchtext}
                    onChange={(event)=>{this.setState({...this.state,searchtext:event.target.value})}}></input>
                    <table border={2} className='table'>

                            <thead>
                                <tr>
                                   <th scope='col'>ProductId</th>
                                   <th scope='col'>Product Name</th>
                                   <th scope='col'>Price</th>
                                   <th scope='col'> Action</th>
                                </tr>
                            </thead>
                             <tbody>
                                {this.state.searcharr.map((prod)=><tr key={prod.id}>
                                  <td>{prod.pid}</td>
                                  <td>{prod.pname}</td>
                                  <td>{prod.price}</td>
                                  <td>
                                    <button type="button" onClick={()=>{this.deleteProd(prod.id)}}>delete</button>
                                  </td>






                                </tr>)}
                             </tbody>


                    </table>





            </div>
        )
    }
}

export default ProductTable;