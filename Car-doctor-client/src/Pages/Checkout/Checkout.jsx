import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Provider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customer: name,
      email: email,
      date: date,
      img: service.img,
      service: service.title,
      service_id: service._id,
      price: service.price,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("booking successfully !");
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Book Service {service.title}</h1>

      <form onSubmit={handleBook} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name..."
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email..."
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$ " + service.price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block input input-bordered"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
