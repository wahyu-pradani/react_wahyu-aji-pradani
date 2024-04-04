import { screen, fireEvent } from '@testing-library/react';
import { expect } from 'vitest';

export function verify_input(label, input, result) {
    const product_name = screen.getByLabelText(label);

    // INPUT VALUE TO FIELD
    fireEvent.change(product_name, { target: { value: input } });

    expect(product_name.value).toBe(result);

    // DISPLAY
    const displayedText = screen.getByLabelText(label);
    expect(displayedText).toBeInTheDocument();
}

export function verify_input_photo(label, file, result) {
    const AddPhoto = screen.getByLabelText(label);

    fireEvent.change(AddPhoto, { target: { files: [file] } });

    const displayedText = screen.getByLabelText(label);
    expect(displayedText).toBeInTheDocument();

}

export function verify_input_freshness(label, input, result) {
    // Menyimpan reference ke input radio untuk setiap pilihan product freshness
    const freshnessCheckbox = screen.getByLabelText(label);

    // Memastikan input awalnya tidak ada yang terpilih
    expect(freshnessCheckbox.checked).toBeFalsy();

    fireEvent.click(freshnessCheckbox);

    //Memastikan input terpilih
    expect(freshnessCheckbox).toBeChecked(result);

    if (input !== undefined){
        expect(freshnessCheckbox.value).toBe(input);
    }
    expect(freshnessCheckbox).toBeInTheDocument();
}

export function verify_input_description(label, input, result) {
    const description = screen.getByLabelText(label);

    fireEvent.change(description, { target: { value: input } });

    expect(description.value).toBe(result);

    const displayedText = screen.getByLabelText(label);
    expect(displayedText).toBeInTheDocument();
}

export function verify_input_price(label, input) {
    const Product_Price = screen.getByLabelText(label);

    fireEvent.change(Product_Price, { target: { value: input } });

    const displayedText = screen.getByLabelText(label);
    const isPriceNumber = /^\d+(\.\d{1,2})?$/.test(displayedText.value)

    if (isPriceNumber === true){
        expect(displayedText.value).toBe(input);
        expect(displayedText).toBeInTheDocument();
    } else {
        expect(displayedText.value).not.toBe(input);
    }  
}

export function verify_special_char_productName(label, input) {
    const product_name = screen.getByLabelText(label);

    fireEvent.change(product_name, { target: { value: input } });

    const displayedText = screen.getByLabelText(label);
    const lengthProductName = displayedText.value.length;
    const isProductName = !/[@#{}]/.test(displayedText.value)

    if (isProductName === true){
        expect(displayedText.value).toBe(input);
        expect(displayedText).toBeInTheDocument();
    } else {
        expect(displayedText.value).not.toBe(input);
    }

    if ((lengthProductName > 0) && (lengthProductName <= 25)) {
        expect(displayedText.value).toBe(input);
        expect(displayedText).toBeInTheDocument();
    } else {
        expect(displayedText.value).not.toBe(input);
    }
}

export function verify_input_empty() {
    const product_name = screen.getByLabelText('Product name');
    const category = screen.getByLabelText('Product Category:');
    const AddPhoto = screen.getByLabelText('Image of Product');
    const freshnessCheckbox = screen.getByLabelText('Brand New');
    const description = screen.getByLabelText('Additional Description');
    const Product_Price = screen.getByLabelText('Product Price');

    // Menentukan opsi kosong pada dropdown "Product Category"
    const selectCategory = category.querySelector('option:checked');

    // Memasukkan nilai kosong ke setiap form field
    fireEvent.change(product_name, { target: { value: '' } });
    fireEvent.change(category, { target: { value: '' } });
    fireEvent.change(AddPhoto, { target: { value: '' } });
    fireEvent.change(freshnessCheckbox, { target: { checked: false }}); // Memilih opsi kosong pada radio button
    fireEvent.change(description, { target: { value: '' } });
    fireEvent.change(Product_Price, { target: { value: '' } });


    // Verifikasi bahwa semua form fields tidak boleh kosong
    expect(product_name).toHaveValue('');
    expect(selectCategory.value).toBe('Choose');
    expect(AddPhoto).toHaveValue('');
    expect(freshnessCheckbox).not.toBeChecked(); // Memastikan tidak ada radio button yang terpilih
    expect(description).toHaveValue('');
    expect(Product_Price).toHaveValue('');
}