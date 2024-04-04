import { render } from "@testing-library/react";
//import { render } from 'react-dom';
import { it } from "vitest";
import { Provider } from "react-redux";
import { store } from "../../store/index.jsx";
import {
  verify_input,
  verify_input_description,
  verify_input_price,
  verify_input_photo,
  verify_input_freshness,
  verify_special_char_productName,
  verify_input_empty,
} from "../../../tests/helper.js";
import FormCreateProduct from "../Product/form-create-product.jsx";

describe("LATIHAN REACT TESTING", () => {
  it("PRODUCT NAME", () => {
    render(
      <Provider store={store}>
        <FormCreateProduct />
      </Provider>
    );
    verify_input("Product name", "Sabun Lifeboy", "Sabun Lifeboy");
  }),
    it("PRODUCT CATEGORY", () => {
      render(
        <Provider store={store}>
          <FormCreateProduct />
        </Provider>
      );
      verify_input("Product Category:", "Soap", "Soap");
    }),
    it("PHOTO PRODUCT", () => {
      render(
        <Provider store={store}>
          <FormCreateProduct />
        </Provider>
      );
      verify_input_photo("Image of Product", "test.jpg", "image/jpg");
    }),
    it("PRODUCT FRESHNESS", () => {
      render(
        <Provider store={store}>
          <FormCreateProduct />
        </Provider>
      );
      verify_input_freshness("Brand New", "Brand New", "Brand New");
    }),
    it("DESCRIPTION PRODUCT", () => {
      render(
        <Provider store={store}>
          <FormCreateProduct />
        </Provider>
      );
      verify_input_description(
        "Additional Description",
        "Produk terbaru kualitas terbaik",
        "Produk terbaru kualitas terbaik"
      );
    }),
    it("PRODUCT PRICE", () => {
      render(
        <Provider store={store}>
          <FormCreateProduct />
        </Provider>
      );
      verify_input_price("Product Price", "1000");
    }),
    it("SPECIAL CHAR AND LENGTH PRODUCT NAME", () => {
      render(
        <Provider store={store}>
          <FormCreateProduct />
        </Provider>
      );
      verify_special_char_productName("Product name", "Sabun Lifeboy");
    });

  it("EMPTY FIELD", () => {
    render(
      <Provider store={store}>
        <FormCreateProduct />
      </Provider>
    );
    verify_input_empty();
  });
});
