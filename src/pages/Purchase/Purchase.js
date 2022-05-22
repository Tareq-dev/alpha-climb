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
    const shopName = event.target.shop.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const availableQuantity = product.availableQuantity;
    const orderQuantity = parseInt(event.target.order.value);

    if (availableQuantity < orderQuantity) {
      return toast.error("Sorry!! You can not order more then stock");
    }
    if (orderQuantity < 50) {
      return toast.error("Sorry!! minimum order 50");
    }
    const placeOrder = {
      email: userEmail,
      shopName,
      img: imgURL,
      address,
      phone,
      orderQuantity,
    };
    fetch("http://localhost:5000/orders", {
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

    //************* set these quantity on the products quantity *******************
    //     const remainingQuantity = availableQuantity - orderQuantity;
    //     console.log(remainingQuantity);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <div className="lg:w-full mx-auto flex flex-wrap">
          <div className="lg:w-1/2  lg:h-auto h-80">
            <img
              alt="ecommerce"
              className="w-full lg:h-auto h-80 object-cover object-center rounded"
              src="https://api.lorem.space/image/shoes?w=400&h=225"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-xl title-font text-gray-500 mb-3 tracking-widest">
              User Name :{user?.displayName}
            </h2>
            <h2 className="text-xl title-font text-gray-500 mb-3 tracking-widest">
              User Email : {user?.email}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed">{product.description}</p>
            <div className="mt-4 pb-5 border-b-2 border-gray-100 mb-5">
              <span className="title-font mb-6 block font-medium text-2xl text-gray-900">
                $ {product.price}
              </span>
              <div className="mb-4">
                <h2 className="text-xl text-sky-600 font-semibold">
                  Available Quantity :
                  <span name="available"> {product.availableQuantity}</span> Pcs
                </h2>
                <p className="text-xl mt-2 text-sky-600 font-semibold">
                  Minimum Order : 50 Pcs
                </p>
              </div>
              <div className="flex mt-5">
                <form
                  onSubmit={handlePurchases}
                  className="flex-col justify-center items-center border-2 p-4"
                >
                  <div>
                    <label htmlFor="">Shop Name</label>
                    <input
                      type="text"
                      name="shop"
                      required
                      className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="">Phone No :</label>
                    <input
                      type="number"
                      name="phone"
                      className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="">Order Quantity</label>
                    <input
                      type="number"
                      name="order"
                      min="0"
                      placeholder="50"
                      className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                    />
                  </div>
                  <div className="flex justify-center mt-5">
                    <input
                      className="mx-3 text-white font-semibold bg-sky-500 border-0 py-1 px-3 h-8 focus:outline-none rounded"
                      type="submit"
                      value="Purchase"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
