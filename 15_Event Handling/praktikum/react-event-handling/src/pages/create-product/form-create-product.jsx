import './style.css'
import Button from "../../components/button";
import BtnRandomNumber from '../../components/btn-random-number';

import { useState } from 'react';

export default function FormCreateProduct () {
    const initial = {
        product_name:'',
        category:'',
        AddPhoto:'',
        description:'',
        Product_Price:''
    }

    const [values, setValid] = useState(initial);

    const [Err, setErr] = useState({});

    function handleInput (e){
        setValid({...values, [e.target.name]: e.target.value});
        setErr(validation(values));
    }
    
    function handleValid (e){
        e.preventDefault();
        handleInput(e);
    }

    function validation(values) {
        const Err = {};
        if (!values.product_name){
            Err.product_name = `field name can't be empty`;
        }
        if ((values.product_name).length >10){
            Err.product_name = `Last Name must not exceed 10 characters`;
        }
        if ((values.product_name).length >25){
            Err.product_name = `Last Name must not exceed 25 characters`;
        }
        if (!values.category){
            Err.category = `field category can't be empty`;
        }
        if (!values.AddPhoto){
            Err.AddPhoto = `field file can't be empty`;
        }
        if (!values.description){
            Err.description = `field description can't be empty`;
        }
        if (!values.Product_Price){
            Err.Product_Price = `field product price can't be empty`;
        }
        return Err;   
    }


    return(
            <section className="container">
                    <div className=" max-w-xl w-full gap-1 py-4 mx-auto px-12 mt-8">
                        <div>
                            <h3 className="text-start text-lg font-medium">Detail Product</h3>
                        </div>
                        <form action="" onSubmit={handleValid} className='grid gap-[33px]'>
                            <div className="grid mt-1 gap-2">
                                <label className="text-start text-[16px] font-normal form-label">Product name</label>
                                <input type="text"
                                 onChange={handleInput}
                                 value={values.product_name}
                                 className="py-1 px-5 border rounded-md h-9 outline-gray-300 w-6/12" id="product_name" name="product_name"/>
                            {
                                Err.product_name?
                                <p className='text-red-500 text-sm text-start px-2'>{Err.product_name}</p>:null
                            }
                            </div>
                            <div className="grid gap-2">
                                <label className="text-start text-[16px] font-normal form-label">Product Category:</label>
                                <select 
                                 onChange={handleInput}
                                 value={values.category}
                                 class="py-1 px-5 border rounded-md outline-gray-300 h-9 form-select w-5/12" aria-label="Default select example" id="product_category" name="category" size="1">
                                    <option selected>Choose</option>
                                    <option value="Soap">Soap</option>
                                    <option value="Coffe">Coffe</option>
                                    <option value="Tea">Tea</option>
                                </select>
                            {
                                Err.category?
                                <p className='text-red-500 text-sm text-start px-2'>{Err.category}</p>:null
                            }
                            </div>
                            <div className="grid gap-2">
                                <label  className="text-start text-[16px] font-normal form-label">Image of Product </label>
                                <input type="file" accept="image/*"
                                onChange={handleInput}
                                value={values.AddPhoto}
                                 className="custom-file-input h-9 rounded-md fill-blue-500 form-control border outline-gray-300 w-6/12" id="AddPhoto" name="AddPhoto" />
                            {
                                Err.AddPhoto?
                                <p className='text-red-500 text-sm text-start px-2'>{Err.AddPhoto}</p>:null
                            }
                            </div>
                            <div className="grid gap-2">
                                <label id="listProduct" className="text-start text-[16px] font-normal form-label">Product-Freshness </label>
                                <div class="form-check text-start text-[14px]">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="BrandNew" />
                                    <label className="form-check-label px-1 text-[16px]" for="BrandNew">Brand New</label>
                                </div>
                                <div className="form-check text-start">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="SecondHank" />
                                    <label className="form-check-label px-1 text-[16px]" for="SecondHank">Second Hank</label>
                                </div>
                                <div className="form-check text-start">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="Refurbished" />
                                    <label className="form-check-label px-1 text-[16px]" for="Refurbished">Refurbished</label>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-start text-[16px] font-normal form-label">Additional Description</label>
                                <textarea 
                                onChange={handleInput}
                                value={values.description}
                                 className="py-1 px-5 border rounded-md outline-gray-300 h-28" aria-label="With textarea" name="description" id="Add-Description"/>
                            {
                                Err.description?
                                <p className='text-red-500 text-sm text-start px-2'>{Err.description}</p>:null
                            }
                            </div>
                            <div className="grid gap-2">
                                <label className="text-start text-[16px] font-normal form-label">Product name</label>
                                <input type="text" 
                                onChange={handleInput}
                                value={values.Product_Price}
                                 className="py-1 px-5 border rounded-md h-9 outline-gray-300" id="Product_Price" name="Product_Price" placeholder="$1" pattern="[0-9]+(\.[0-9]{2})?"/>
                            {
                                Err.Product_Price?
                                <p className='text-red-500 text-sm text-start px-2'>{Err.Product_Price}</p>:null
                            }
                            </div>
                            <div className="grid mt-8">
                                <Button name="Submit"></Button>
                            </div>
                        </form>
                        <div className='mt-8'>
                            <BtnRandomNumber name="Click Random Number">
                            </BtnRandomNumber>
                        </div>
                    </div>
            </section>
    );
}