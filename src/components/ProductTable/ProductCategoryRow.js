import React from 'react'

const ProductCategoryRow = (props) => {
    return (
        <tr>
            <th>
                {props.category}
            </th>
        </tr>
    )
}

export default ProductCategoryRow;
