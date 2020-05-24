import React from 'react'
import './productTable.css'
import ProductCategoryRow from './ProductCategoryRow '
import ProductRow from './ProductRow '

const ProductTable = (props) => {
    const dataElements = props.displayData;
    const rowList = dataElements.map(
        dataRow =>
            <React.Fragment>
                <ProductCategoryRow namelist={dataRow} />
                <ProductRow key={dataRow.name} namelist={dataRow} />
            </React.Fragment>
    )
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
