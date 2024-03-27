import './style.css'
"use client";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import Detail from '../Detail';


export default function FormCreateProduct () {
    useEffect(() => {
        window.alert("Welcome");
        console.log("hai");
      },[]);
    
    const initial = {
        id:'',
        product_name:'',
        category:'',
        AddPhoto:'',
        productFreshness:'',
        description:'',
        Product_Price:''
    }
    const [openModal, setOpenModal] = useState(false);
    const [values, setValid] = useState(initial);
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(null);
    const [Err, setErr] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        setData(data);
    }, [data]);

    function handleInput (e){
        setValid({...values, [e.target.name]: e.target.value});
        setErr(validation(values));
    }
    
    function handleValid (e){
        e.preventDefault();
        const newData = {
            id: uuidv4(),
            product_name: values.product_name,
            category:values.category,
            AddPhoto:values.AddPhoto,
            productFreshness:values.productFreshness,
            description:values.description,
            Product_Price:values.Product_Price
          };
            setData([...data, newData]);
            console.log(data);
            setValid({...values, [e.target.name]: e.target.value=""});
    }

    const deleteByIndex = (i) => {
            const newData = [...data];
            newData.splice(i,1);
            setData(newData);
            setDeleted(null);
            console.log(data);
            setOpenModal(false);
    }
    
    //  function handleData (){
    //      history(`/detail/:id?id=${data.id}&name=${data.product_name}&category=${data.category}&
    //      photo=${data.AddPhoto}& 
    //      freshness=${data.productFreshness}& 
    //      desc=${data.description}& 
    //      price=${data.Product_Price}`);
    // }

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
        if (!values.productFreshness){
            Err.productFreshness = `field product Freshness can't be empty`;
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
            <section className="container max-w-screen-xl mx-auto">
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
                                 className="py-1 px-5 border rounded-md outline-gray-300 h-9 form-select w-5/12" aria-label="Default select example" id="product_category" name="category" size="1">
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
                                <input type="file" accept="image/*" sizing="lg"
                                onChange={handleInput}
                                value={values.AddPhoto}
                                
                                 className=" custom-file-input rounded-md fill-blue-500 form-control border outline-gray-300 w-6/12" id="AddPhoto" name="AddPhoto" />
                            {
                                Err.AddPhoto?
                                <p className='text-red-500 text-sm text-start px-2'>{Err.AddPhoto}</p>:null
                            }
                            </div>
                            <div className="grid gap-2">
                                <label id="listProduct" className="text-start text-[16px] font-normal form-label">Product-Freshness </label>
                                <div class="form-check text-start text-[14px]">
                                    <input 
                                    onChange={handleInput}
                                    name="productFreshness"
                                    value="Brand New"
                                    checked={values.productFreshness === "Brand New"}
                                    className="form-check-input" type="radio" id="BrandNew" />
                                    <label className="form-check-label px-1 text-[16px]" htmlFor="BrandNew">Brand New</label>
                                </div>
                                <div className="form-check text-start">
                                    <input 
                                    onChange={handleInput}
                                    name="productFreshness"
                                    value="Second Hand"
                                    checked={values.productFreshness === "Second Hand"}
                                    className="form-check-input" type="radio" id="SecondHank" />
                                    <label className="form-check-label px-1 text-[16px]" htmlFor="SecondHank">Second Hank</label>
                                </div>
                                <div className="form-check text-start">
                                    <input 
                                    onChange={handleInput}
                                    name="productFreshness"
                                    value="Refurbished"
                                    checked={values.productFreshness === "Refurbished"}
                                    className="form-check-input" type="radio" id="Refurbished" />
                                    <label className="form-check-label px-1 text-[16px]" htmlFor="Refurbished">Refurbished</label>
                                </div>
                            {
                                Err.productFreshness?
                                <p className='text-red-500 text-sm text-start px-2'>{Err.productFreshness}</p>:null
                            } 
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
                                <label className="text-start text-[16px] font-normal form-label">Product Price</label>
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
                                <Button color='blue' type='submit' className='text-[18px] font-medium'>Submit</Button>
                            </div>
                        </form>
                    </div>
                    <div className=" mx-auto py-14">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                No
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Product Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Product Fresnhess
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Product Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item,i)=>(
                                            <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                <td className="px-6 py-4">
                                                    {i+1}
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.product_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                {item.category}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.productFreshness}
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${item.Product_Price}
                                                </td>
                                                <td className="px-6 py-4 flex gap-2">
                                                    <Button color='failure' onClick={() => setOpenModal(true)}>Delete</Button>
                                                    <Button color='blue' >Edit</Button>
                                                    <Link to={`/detail/${item.id}`}><Button color='warning'>Detail</Button></Link>
                                                </td>
                                            </tr>
                                            ))
                                        } 
                                        

                                    </tbody>
                                    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                                        <Modal.Header />
                                        <Modal.Body>
                                        <div className="text-center">
                                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            Are you sure you want to delete this product?
                                            </h3>
                                            <div className="flex justify-center gap-4">
                                            <Button color="failure" onClick={() => deleteByIndex()}>
                                                {"Yes, I'm sure"}
                                            </Button>
                                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                                No, cancel
                                            </Button>
                                            </div>
                                        </div>
                                        </Modal.Body>
                                    </Modal>
                                </table>
                            </div>
                        </div>
            </section>
    );
}