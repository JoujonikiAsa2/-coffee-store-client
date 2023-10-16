import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setusers] = useState(loadedUsers)
    console.log(loadedUsers.id)

    const handleDelete = id => {
        console.log(id)
        // make sure user to delete
        fetch(`https://coffee-store-server-dhkucuwz6-joujonikiasa2s-projects.vercel.app/user/${id}`,
            {
                method: "DELETE"
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remainingUsers = users.filter(user => user._id != id)
                    setusers(remainingUsers)
                    .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount>0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee added successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
                }
            })
}
return (
    <div>
        <h2 className="text-2xl font-bold text-center">Users: {loadedUsers.length}</h2>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Login</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadedUsers.map(user => <tr key={user.id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td><button className="btn" onClick={() => handleDelete(user._id)}>X</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Users;