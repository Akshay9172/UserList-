import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Features/UserSlice'

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleAddUserClick = () => {
        navigate('/add-user')
    }

    // Loading spinner
    const renderLoading = () => (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
                </div>
                <p className="text-center text-gray-500 mt-4">Loading user data...</p>
            </div>
        </div>
    );

    // Error handling
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='container mx-auto p-4'>
            {/* Add User Button */}
            <div className="mb-4 flex justify-between items-center px-5">
                <h1 className="text-xl font-bold text-gray-800 ">List of User Details</h1>
                <button
                    onClick={() => handleAddUserClick()}
                    className="px-6 py-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 transition"
                >
                    Add New Users
                </button>
            </div>

            {/* Card with Table */}
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                    {/* Table Search and Header */}
                    <div className="flex items-center justify-between mb-4">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search by name or email"
                            className="p-2 border border-gray-300 rounded w-full sm:w-1/2 lg:w-1/3"
                        />
                    </div>

                    {/* Loading state */}
                    {loading ? (
                        renderLoading()
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto border-collapse">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-semibold text-sm text-gray-600">Name</th>
                                        <th className="px-4 py-2 text-left font-semibold text-sm text-gray-600">Email</th>
                                        <th className="px-4 py-2 text-left font-semibold text-sm text-gray-600">Phone</th>
                                        <th className="px-4 py-2 text-left font-semibold text-sm text-gray-600">Company</th>
                                        <th className="px-4 py-2 text-left font-semibold text-sm text-gray-600">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center p-4 text-red-500">No matching data found</td>
                                        </tr>
                                    ) : (
                                        filteredUsers.map(user => (
                                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                                <td className="px-4 py-2 text-sm text-gray-700"><b>{user.name}</b></td>
                                                <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
                                                <td className="px-4 py-2 text-sm text-gray-700">{user.phone}</td>
                                                <td className="px-4 py-2 text-sm text-gray-700">{user.company.name}</td>
                                                <td className="px-4 py-2 text-sm text-blue-500">
                                                    <Link
                                                        to={`/user/${user.id}`}
                                                        className="inline-block bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-red-500 hover:via-yellow-500 hover:to-orange-400 transition-all"
                                                    >
                                                        View Details
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserList;
