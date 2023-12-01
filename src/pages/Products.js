import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiLoader } from "react-icons/fi";
import Card from "../components/Card";
import { filterNewLaptopData } from "../features/NewLaptops/newLaptops";
import { filterRefurbishedData } from "../features/RefurbishedProducts/refurbishedProducts";

const Products = () => {
  const newLaptopStore = useSelector((state) => state.newLaptops);
  const refurbishedLaptopStore = useSelector((state) => state.refurbishedLaptops)
  const [selectedOption, setSelectedOption] = useState("new");
  const [filter, setFilter] = useState({ price: 0, design: 0, service: 0, brand: 0, performance: 0 });
  const dispatch = useDispatch();
  const handleFilter = (filterName, filterValue) => {
    setFilter(previous => {
      switch (filterName) {
        case 'price':
          return {
            ...previous, price: Number(filterValue)
          }
        case 'design':
          return {
            ...previous, design: Number(filterValue)
          }
        case 'performance':
          return {
            ...previous, performance: Number(filterValue)
          }
        case 'brand':
          return {
            ...previous, brand: Number(filterValue)
          }
        case 'service':
          return {
            ...previous, service: Number(filterValue)
          }
        default: return previous
      }
    })
  }
  useEffect(() => {
    if (selectedOption === "new") {
      dispatch(filterNewLaptopData(filter));
    } else {
      dispatch(filterRefurbishedData(filter))
    }
  }, [filter, dispatch, selectedOption])

  return (
    <div className="product-section container mx-auto px-10 py-10" style={{
      marginTop: 20,
      overflow: "auto",
      height: "80vh"
    }}>
      <h2 className="section-title uppercase font-bold space-font text-2xl mb-10 text-center tracking-wider ">
        Browse Available Products
      </h2>
      <span className="mr-4 text-lg font-semibold">Filters:</span>
      <div className="filter-section mb-6 flex flex-col flex-wrap text-xs">
        <div className="flex ml-3" onChange={onChangeValue}>
          <input type="radio" checked={selectedOption === "refurbished" ? true : false} onChange={() => { setSelectedOption("refurbished") }} name="refurbished" className="mr-1" />
          <label htmlFor="refurbished" className="mr-2">Refurbished</label>
          <input type="radio" checked={selectedOption === "new" ? true : false} onChange={() => { setSelectedOption("new") }} name="new" className="mr-1" />
          <label htmlFor="new">New</label>
        </div>
        <label className="ml-3 mt-1 mr-4 cursor-pointer">
          <span className="mr-2" style={{ display: 'inline-block', width: 87 }}>Price : </span>
          <select id="price" onChange={(e) => {
            handleFilter('price', e.target.value)
          }}>
            <option value={0}>Good</option>
            <option value={1}>Better</option>
            <option value={2}>Best</option>
          </select>
        </label>
        <label className="ml-3 mt-1 mr-4 cursor-pointer">
          <span className="mr-2" style={{ display: 'inline-block', width: 87 }}>Service : </span>
          <select id="service" onChange={(e) => {
            handleFilter('service', e.target.value)
          }}>
            <option value={0}>Good</option>
            <option value={1}>Better</option>
            <option value={2}>Best</option>
          </select>
        </label>
        <label className="ml-3 mt-1 mr-4 cursor-pointer">
          <span className="mr-2" style={{ display: 'inline-block', width: 87 }}>Design : </span>
          <select id="design" onChange={(e) => {
            handleFilter('design', e.target.value)
          }}>
            <option value={0}>Good</option>
            <option value={1}>Better</option>
            <option value={2}>Best</option>
          </select>
        </label>
        <label className="ml-3 mt-1 mr-4 cursor-pointer">
          <span className="mr-2" style={{ display: 'inline-block', width: 87 }}>Brand : </span>
          <select id="brand" onChange={(e) => {
            handleFilter('brand', e.target.value)
          }}>
            <option value={0}>Good</option>
            <option value={1}>Better</option>
            <option value={2}>Best</option>
          </select>
        </label>
        <label className="ml-3 mt-1 mr-4 cursor-pointer">
          <span className="mr-2" style={{ display: 'inline-block', width: 87 }}>Performance : </span>
          <select id="performance" onChange={(e) => {
            handleFilter('performance', e.target.value)
          }}>
            <option value={0}>Good</option>
            <option value={1}>Better</option>
            <option value={2}>Best</option>
          </select>
        </label>
      </div>

      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">

        {selectedOption === "new" &&
          (
            <>
              {newLaptopStore.loading && (
                <span className="loader text-center col-span-full">
                  <FiLoader className="inline-block animate-spin" />
                </span>
              )}
              {newLaptopStore.data?.map((product) => {
                return (
                  <Card product={product} key={product.id} />
                )
              })}
            </>
          )
        }
        {selectedOption === "refurbished" &&
          (
            <>
              {refurbishedLaptopStore.loading && (
                <span className="loader text-center col-span-full">
                  <FiLoader className="inline-block animate-spin" />
                </span>
              )}
              {refurbishedLaptopStore.data?.map((product) => {
                return (
                  <Card product={product} key={product.id} />
                )
              })}

            </>

          )
        }

      </div>
    </div >
  );
};

export default Products;