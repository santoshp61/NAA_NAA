import { useLocation } from "react-router-dom";

const OrderPage = () => {
    const { state } = useLocation();
    const product = state?.product;

    return (
        <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">Order Page</h1>

            {product ? (
                <div className="mt-6">
                    <img src={product.image} className="w-60 rounded-lg" />
                    <h2 className="text-2xl mt-4">{product.name}</h2>
                    <p className="text-xl">Price: Rs {product.price}</p>
                </div>
            ) : (
                <p>No product selected</p>
            )}
        </div>
    );
};

export default OrderPage;
