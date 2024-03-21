import './style.css'
import Button from "../../components/button";

export default function FormCreateProduct () {
    return(
            <section className="container">
                    <div className=" max-w-xl w-full gap-1 py-4 mx-auto px-12 mt-8">
                        <div>
                            <h3 className="text-start text-lg font-medium">Detail Product</h3>
                        </div>
                        <form action="" className='grid gap-[33px]'>
                            <div className="grid mt-1 gap-2">
                                <label htmlFor="product_name" className="text-start text-[16px] font-normal form-label">Product name</label>
                                <input type="text" required className="py-1 px-5 border rounded-md h-9 outline-gray-300 w-6/12" id="product_name" name="product_name"/>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="product_category" className="text-start text-[16px] font-normal form-label">Product Category:</label>
                                <select class="py-1 px-5 border rounded-md outline-gray-300 h-9 form-select w-5/12" aria-label="Default select example" id="product_category" name="category" size="1" required>
                                    <option selected>Choose</option>
                                    <option value="Soap">Soap</option>
                                    <option value="Coffe">Coffe</option>
                                    <option value="Tea">Tea</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="AddPhoto" className="text-start text-[16px] font-normal form-label">Image of Product </label>
                                <input type="file" accept="image/*" required className="custom-file-input h-9 rounded-md fill-blue-500 form-control border outline-gray-300 w-6/12" id="AddPhoto" name="AddPhoto" />
                            </div>
                            <div className="grid gap-2">
                                <label id="listProduct" className="text-start text-[16px] font-normal form-label">Product-Freshness </label>
                                <div class="form-check text-start text-[14px]">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="BrandNew" required />
                                    <label className="form-check-label px-1 text-[16px]" for="BrandNew">Brand New</label>
                                </div>
                                <div className="form-check text-start">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="SecondHank" required />
                                    <label className="form-check-label px-1 text-[16px]" for="SecondHank">Second Hank</label>
                                </div>
                                <div className="form-check text-start">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="Refurbished" required />
                                    <label className="form-check-label px-1 text-[16px]" for="Refurbished">Refurbished</label>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="" className="text-start text-[16px] font-normal form-label">Additional Description</label>
                                <textarea required className="py-1 px-5 border rounded-md outline-gray-300 h-28" aria-label="With textarea" name="description" id="Add-Description"/>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="Product_Price" className="text-start text-[16px] font-normal form-label">Product name</label>
                                <input type="text" required className="py-1 px-5 border rounded-md h-9 outline-gray-300" id="Product_Price" name="Product_Price" placeholder="$1" pattern="[0-9]+(\.[0-9]{2})?"/>
                            </div>
                            <div className="grid mt-8">
                                <Button name="Submit"></Button>
                            </div>
                        </form>
                    </div>
            </section>
    );
}