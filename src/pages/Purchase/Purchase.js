import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useSingleProduct from "../../Hooks/useSingleProduct";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [product] = useSingleProduct(id);
  const navigate = useNavigate();

  const handlePurchases = (event) => {
    event.preventDefault();
    const userEmail = user.email;
    const imgURL = product.img;
    const price = product.price;
    const name = product.name;
    const orderQuantity = parseInt(event.target.order.value);
    const totalPrice = price * orderQuantity;
    const shopName = event.target.shop.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const availableQuantity = product.availableQuantity;
    if (availableQuantity < orderQuantity) {
      return toast.error("Sorry!! You can not order more then stock");
    }
    if (orderQuantity < 50) {
      return toast.error("Sorry!! minimum order 50");
    }
    const placeOrder = {
      name,
      productId: id,
      email: userEmail,
      shopName,
      price: totalPrice,
      img: imgURL,
      address,
      phone,
      orderQuantity,
    };
    fetch("https://intense-beyond-53965.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placeOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate(`/payment/${id}`);
        }
      });
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div>
            <h2 className="text-md title-font text-gray-500 tracking-widest">
              User Name : {user?.displayName}
            </h2>
            <h2 className="text-md title-font text-gray-500 mb-3 tracking-widest">
              User Email : {user?.email}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed">{product.description}</p>
            <div className="mt-2 pb-2 mb-5">
              <span className="title-font mb-3 block font-medium text-2xl text-gray-900">
                $ {product.price}
              </span>
              <div className="mb-2">
                <h2 className="text-xl text-sky-600 font-semibold">
                  Available Quantity :
                  <span name="available"> {product.availableQuantity}</span> Pcs
                </h2>
                <p className="text-md mt-2 text-sky-600 font-semibold">
                  Minimum Order : 50 Pcs
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="ecommerce"
              className="w-max lg:h-auto h-80 object-cover object-center rounded"
              src={product?.img}
            />
          </div>
        </div>
        <div className="flex justify-center md:mt-12 ">
          <form
            onSubmit={handlePurchases}
            className="flex-col w-full md:w-1/2 justify-center items-center border-2 p-4"
          >
            <div>
              <label className=" block px-3" htmlFor="">
                Shop Name
              </label>
              <input
                type="text"
                name="shop"
                required
                className="border-2 w-3/4 mx-3 h-10 p-2 rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block px-3" htmlFor="">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="border-2 mx-3 h-10 p-2 rounded w-3/4"
              />
            </div>

            <div className="mt-4">
              <label className="block px-3" htmlFor="">
                Phone No :
              </label>
              <input
                type="number"
                name="phone"
                className="border-2  mx-3 h-10 p-2 rounded w-3/4"
              />
            </div>
            <div className="mt-4">
              <label className="block px-3" htmlFor="">
                Order Quantity
              </label>
              <input
                type="number"
                name="order"
                min="0"
                placeholder="50"
                className="border-2 mx-3 h-10 p-2 rounded w-3/4"
              />
            </div>
            <div className="flex justify-center mt-5">
              <input
                className="mx-3 text-white h-10 font-semibold bg-sky-500 border-0 py-1 px-3 rounded"
                type="submit"
                value="Purchase"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
