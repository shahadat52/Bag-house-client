import { TProduct } from "../../interface/products";

type OrderCardProps = {
    product: TProduct;
}
const ProductCart = ({ product, index }: OrderCardProps & { index: number }) => {

    return (
        <tr className="border-2 p-5 text-justify">
            <th>{index + 1}</th>
            <th>{product.name}</th>
            <th>{product?.price}</th>
            <td> {product.size}</td>
            {/* <td> {product.orderProducts.map((product: TProduct) => product.name)}</td> */}
            <td> <img src={product.images[0]} className="h-12 w-10" alt="" /></td>
            <td> {product.ratings}</td>
            <td> {product.subCategory}</td>
            <td> Delete</td>
        </tr>
    );
};

export default ProductCart;