import React from 'react'
import './productTable.css'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
    const dataElements = props.displayData;
    let lastCategory = null;
    const rowList = dataElements.map(
        dataRow => {
            if (dataRow.category !== lastCategory) {
                lastCategory = dataRow.category
                return (
                    <div>
                        <ProductCategoryRow key={dataRow.name} category={dataRow.category} />
                        <ProductRow key={dataRow.name} product={dataRow} />
                    </div>
                )
            }
            //the below component needs to render even when the if condition satisfies
            lastCategory = dataRow.category;
            return (<ProductRow key={dataRow.name} product={dataRow} />)

        })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rowList}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;
