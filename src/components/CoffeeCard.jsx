import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {FaEye,FaEdit} from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee }) => {
    const {_id, name, price, photo } = coffee
    const handleDelete=()=>{
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{ 
            console.log(data)
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
            })
    }
    return (
        <div>
            <div className='flex justify-between items-center shadow-lg rounded border-2 p-4'>
                <img src={photo} alt="" />
                <div>
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <Link className='text-xl flex justify-center items-center w-12 h-12 bg-yellow-400'><FaEye></FaEye></Link>
                    <Link to={`/update/${_id}`} className='text-xl flex justify-center items-center w-12 h-12 bg-blue-400'><FaEdit></FaEdit></Link>
                    <Link onClick={handleDelete} className='text-xl flex justify-center items-center w-12 h-12 bg-red-400'><AiOutlineDelete></AiOutlineDelete></Link>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
}
export default CoffeeCard;