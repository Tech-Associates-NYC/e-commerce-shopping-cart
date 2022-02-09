

import './ProductScreen.css'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// to fix params undefined error
import {useParams,useNavigate} from "react-router-dom"

// actions
import {getProductDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

function ProductScreen({ match }) {
    // setting qty ===  and initialising to 1
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    // push undefined: History no longer exists so use useNavigate
    let navigate = useNavigate();

    const productDetails = useSelector(state=> state.getProductDetails)
    
    const { loading, error, product } = productDetails;
    
    // to fix params undefined error

    const { id } = useParams()
    // console.log("checking the id:", id); // this will be shown in front end- console (inspect- console)
    
    // old code:
    // useEffect(() => {
    //     if (product && match.params.id !== Number(id)) {
    //       dispatch(getProductDetails(match.params.id));
    //     }
    // }, [dispatch, match, product])
   
    useEffect(() => {
        if (product && id !== product._id) {
          dispatch(getProductDetails(id));
        }
    }, [dispatch,id, product])
    // useEffect(() => {
    //     if (product &&  product._id !== Number(id)) {
    //       dispatch(getProductDetails(id));
    //     }
    // }, [dispatch,id, product])
    
    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        navigate.push("/cart")
    }
    return (
        <div className='productscreen'>

            {/* load the details */}
            {loading ?
                <h2>Loading...</h2> :
                error ?
                    <h2>{error}</h2> :(
                    // if non eof them is true  copy and paste the whole code below
                    <>
                        {/* PASTE HERE INSIDE THIS TAG */}
                        
                        <div className="productscreen_left">
                <div className="left_image">
                                <img src={product.imageUrl}
                                    alt={product.name} />
                </div>
                            <div className="left_info">
                                {/* its coming from our state */}
                    <p className='left_name'>{product.name}</p>
                    <p >Price: ${product.price}</p>
                    <p >Description: {product.description}</p>
                </div>
            </div>
            <div className="productscreen_right">
                <div className='right_info'>
                    <p>
                        Price: <span>${product.price}</span>
                    </p>
                    <p>Status: <span>{product.countInStock > 0 ? "In Stock" :"Out of Stock"}</span></p>
                    <p>Qty
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                    </p>
                    <p>
                        <button type="button" onClick={addToCartHandler}>Add to Cart</button>
                    </p>
            </div>
            </div>
                    
                    
                    </>
                    )}
            
        </div>
    )
}

export default ProductScreen


