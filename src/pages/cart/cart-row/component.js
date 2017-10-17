import React from 'react'

export default ({ product }) => (
  <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.description}</td>
  </tr>
)
