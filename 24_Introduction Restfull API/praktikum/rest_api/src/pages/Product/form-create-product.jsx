import './style.css'
"use client";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import Detail from '../Detail';
import { useDispatch, useSelector } from 'react-redux';
import {addForm, deleteForm} from '../../store/slices/form.slice';
import {formSlice} from '../../store/slices/form.slice';
import axios from "axios";
import { deletedForm, getForm, sendForm } from '../../api/dataFetch';


export default function FormCreateProduct () {

    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.product);
    
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
    const [values, setValid] = useState([]);
    const [newData, setNewData] = useState([initial])
    //const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(null);
    const [Err, setErr] = useState('');
    const history = useNavigate();

    // useEffect(() => {
    //     dispatch(addForm(values));
    // }, []);

    function fetchDataPost(){
        getForm()
        .then((res) => {
            /*const data = axios.get(
            `${import.meta.env.VITE_ENDPOINT_PRODUCTS}/products`
            );*/
            setValid(res.data);
            console.log(res.data);
            console.log(values);
            
            //dispatch(addForm(data));
            //const filtering = data?.filter((filtered) => filtered?.id === 3);
            //dispatch(favPost(filtering));
        })
        .catch ((error) =>{
            console.log(error);
        })
    }

    useEffect(() => {
        fetchDataPost();
    },[]);

    function handleInput (e){
        const { name, files } = e.target;
        if (name == "AddPhoto" && files && files.length > 0){
            console.log('ck');
            const file = files[0];
            const reader = new FileReader();
            
            reader.onloadend = () => {
                if (!validateImageType(file)){
                    Err.AddPhoto = `Please upload a PNG, JPG, or JPEG image file`;
                    setErr(Err)
                    setNewData(initial); 
                    return ;
                }
                else setNewData({ ...newData, [name]: reader.result });
                
            };
            reader.readAsDataURL(file);
            
        }
        else if (name === 'AddPhoto') {
            setNewData(initial); // Clear the file selection
        }
        else {
            setNewData({...newData, [name]: e.target.value});
        }
    }

    function validateImageType(file) {
        const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
        return allowedTypes.includes(file.type);
    }
    
    function handleValid (e){
        e.preventDefault();

        const Err={};
        validation(newData, Err);
        setErr(Err);
        console.log(Err);
        if (Object.keys(Err).length === 0){
            const file = newData.AddPhoto;
            if (!file) {
                console.log('File not found');
                return; 
            }
            
            const Data = {
                id: uuidv4(),
                product_name: newData.product_name,
                category:newData.category,
                AddPhoto:newData.AddPhoto,
                productFreshness:newData.productFreshness,
                description:newData.description,
                Product_Price:newData.Product_Price
            };
            dispatch(addForm(Data));
            sendForm(Data)
            .then((res) =>{
                // setForm(res.data)
                console.log('Data berhasil tersimpan di API => ', res.data)
            })
            .catch((er) =>{
                console.log('Ada Kesalahan dalam code', er)
            })
    
            setValid([...values,Data]);
            //location.reload();
            //console.log (newData);
            
            // console.log(newData);
            // console.log(products);
                // setData([...data, newData]);
                // console.log(data);
            setNewData(initial);
        }
        
    }


    const handleDeleteClick = (id) => {
        setDeleted(id);
        setOpenModal(true);
    };

    const deleteByIndex =  async (e) => {
            //console.log(products);
            if (deleted){
            // dispatch(deleteForm(deleted))
            // setDeleted(null);
            
            console.log(deleted)
            
            try{
                //const idData = id;
                const res = await deletedForm(deleted)
                console.log('Data berhasil terhapus di API => ', res.data)
                const delData = values?.filter((filtered) => filtered.deleted !== deleted);
                setValid(delData);
               
            }
            catch (er){
                console.log('Ada Kesalahan dalam code', er);
            }
            //console.log(products);
            // console.log(data);
            finally{
                setOpenModal(false);
                location.reload()
            };
            }
    }
    
    //  function handleData (){
    //      history(`/detail/:id?id=${data.id}&name=${data.product_name}&category=${data.category}&
    //      photo=${data.AddPhoto}& 
    //      freshness=${data.productFreshness}& 
    //      desc=${data.description}& 
    //      price=${data.Product_Price}`);
    // }

    function validation(newData,Err) {
        const nameIsValid = /^[a-zA-Z0-9\s]{1,25}$/.test(newData.product_name)
        const priceIsValid =  /^\d+(\.\d{1,2})?$/.test(newData.Product_Price);
       
        if (!newData.product_name) {
            Err.product_name = `Field name can't be empty`;
        }
        else if (!nameIsValid){
            Err.product_name = `product name  must be alphanumeric not exceed 25 characters`;
        }
       
        if (!newData.productFreshness){
            Err.productFreshness = `field product Freshness can't be empty`;
        }
        if (!newData.description){
            Err.description = `field description can't be empty`;
        }
        if (!newData.Product_Price) {
            Err.Product_Price = `Field price can't be empty`;
        }
        else if (!priceIsValid){
            Err.Product_Price = `field product price must number`;
        }
        if (!newData.category){
            Err.category = `field category can't be empty`;
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
                                 value={newData.product_name}
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
                                 value={newData.category}
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
                                name="AddPhoto"
                                id="AddPhoto"
                                 className=" custom-file-input rounded-md fill-blue-500 form-control border outline-gray-300 w-6/12"  />
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
                                    checked={newData.productFreshness === "Brand New"}
                                    className="form-check-input" type="radio" id="BrandNew" />
                                    <label className="form-check-label px-1 text-[16px]" htmlFor="BrandNew">Brand New</label>
                                </div>
                                <div className="form-check text-start">
                                    <input 
                                    onChange={handleInput}
                                    name="productFreshness"
                                    value="Second Hand"
                                    checked={newData.productFreshness === "Second Hand"}
                                    className="form-check-input" type="radio" id="SecondHank" />
                                    <label className="form-check-label px-1 text-[16px]" htmlFor="SecondHank">Second Hank</label>
                                </div>
                                <div className="form-check text-start">
                                    <input 
                                    onChange={handleInput}
                                    name="productFreshness"
                                    value="Refurbished"
                                    checked={newData.productFreshness === "Refurbished"}
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
                                value={newData.description}
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
                                value={newData.Product_Price}
                                 className="py-1 px-5 border rounded-md h-9 outline-gray-300" id="Product_Price" name="Product_Price" placeholder="$1"/>
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
                                                Photo Product
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Product Fresnhess
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Description 
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
                                            values.map((item,i)=>(
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
                                                    <img width={50} height={50} src={item.AddPhoto} alt={item.product_name} />
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.productFreshness}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.description}
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${item.Product_Price}
                                                </td>                                               
                                                <td className="px-6 py-4 flex gap-2">
                                                    <Button color='failure' onClick={() => handleDeleteClick(item.id)}>Delete</Button>
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
                                            <Button color="failure" onClick={deleteByIndex}>
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