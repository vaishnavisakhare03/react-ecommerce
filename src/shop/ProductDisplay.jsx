import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat a ipsum harum quam quia voluptate error possimus autem neque!";

const ProductDisplay = ({item}) => {

    const {name, id, price, seller, ratingsCount, quantity, img} = item;
    const [prequantity, setQuantity] =useState(1);
    const [coupon, setCoupon] = useState("");

    const handleDecrease = () => {
        if(prequantity > 1){
            setQuantity(prequantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name, 
            price: price,
            quantity: prequantity,
            coupon: coupon
        }
        // console.log(product)
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }

        // update local storage 
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // reset orm fields
        setQuantity(1);
        setCoupon("");

        alert("Added to Cart");
    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>Rs {price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* cart plus minus  */}
                    <div className="cart-plus-minus">
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>

                    {/* Add to Cart */}
                    <button type='submit' className='lab-btn'>
                        <span>Add to Cart</span>
                    </button>

                    {/* coupon field  */}
                    {/* <div className="discount-code" style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" placeholder='Discount Code...' onChange={(e) => setCoupon(e.target.value)} width="300px" />
                    </div> */}
                    </div>

                    {/* btn section  */}
                    {/* <button type='submit' className='lab-btn'>
                        <span>Add to Cart</span>
                    </button> */}
                                      
                    <Link to="/shop" className='lab-btn'>
                    <span>Back</span>
                    </Link>

                    <Link to="/cart-page" className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>   
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay