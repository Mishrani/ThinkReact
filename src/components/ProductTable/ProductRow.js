import React from 'react'

const ProductRow = (props) => {
    const rowinfo = props.product
    return (
        <tr>
            <td>{rowinfo.name} {" "} {rowinfo.price}</td>
        </tr>
    )
}

export default ProductRow;
