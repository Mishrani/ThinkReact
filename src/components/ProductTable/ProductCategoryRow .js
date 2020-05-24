import React from 'react'

const ProductCategoryRow = (props) => {
    const rowcategory = props.namelist.category;
    console.log(rowcategory)
    return (
        <tr>
            <th>
                {rowCategory}
            </th>
        </tr>
    )
}

export default ProductCategoryRow;
