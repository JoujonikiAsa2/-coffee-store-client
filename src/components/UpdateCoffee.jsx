import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const loadedCoffee = useLoaderData()
    console.log(loadedCoffee)
    // const { _id,name, chef, category, quantity, price, details, photo } = loadedCoffee

    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const category = form.category.value
        const quantity = form.quantity.value
        const price = form.price.value
        const details = form.details.value
        const photo = form.photo.value

        const UpdatedCoffee = { name, chef, category, quantity, price, details, photo }
        console.log(UpdatedCoffee)

        fetch(`https://coffee-store-server-dhkucuwz6-joujonikiasa2s-projects.vercel.app/coffee/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(UpdatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="max-w-5xl mx-auto bg-gray-500 py-8">
            <Link to="/" className='text-black flex gap-4 items-center px-32'><FaArrowLeft></FaArrowLeft>Go home</Link>
            <h2 className="text-2xl text-pink-400 font-bold py-3">Update coffee name: {loadedCoffee.name}</h2>
            <div>
                <form className="max-w-3xl mx-auto bg-gray-500 " onSubmit={handleUpdateCoffee}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <input type="text" defaultValue={loadedCoffee.name} className="input input-bordered w-1/2" placeholder="Name" name="name" />
                            <input type="text" defaultValue={loadedCoffee.chef} className="input input- w-1/2" placeholder="Chef" name="chef" />
                        </div>
                        <div>
                            <input type="text" defaultValue={loadedCoffee.category} className="input input-bordered w-1/2" placeholder="Category" name="category" />
                            <input type="text" defaultValue={loadedCoffee.quantity} className="input input-bordered w-1/2" placeholder="Quantity" name="quantity" />
                        </div>
                        <div>
                            <input type="text" defaultValue={loadedCoffee.price} className="input input-bordered w-1/2" placeholder="Price" name="price" />
                            <input type="text" defaultValue={loadedCoffee.details} className="input input-bordered w-1/2" placeholder="Details" name="details" />
                        </div>
                        <div className="flex flex-col">
                            <input type="text" defaultValue={loadedCoffee.photo} className="input input-bordered" placeholder="Photo" name="photo" />
                            <input type="submit" value="Update Coffee" className="btn btn-block my-4" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;