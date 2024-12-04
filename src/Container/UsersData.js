import React, { useEffect, useState } from 'react'
import useApiCallHooks from '../Hooks/useApiCallHooks'
import { useParams } from 'react-router-dom'

const UsersData = () => {
    const [response, error, callAPI] = useApiCallHooks()
    const [userData, setUserData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        callAPI("get", "users/" + id)
    }, [])

    const [isSet, setIsSet] = useState(false);

    if (response?.data && !isSet) {
        setUserData({ ...response.data })
        setIsSet(true);
    }

    if (!userData) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
                    {/* User Card Layout */}
                    <div className="flex flex-col items-center mb-6">
                        {/* Profile Image */}
                        <div className="relative mb-4">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover bg-gray-300"
                            />
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Loading...</h1>
                        <p className="text-gray-600 mb-2">Loading...</p>
                    </div>

                    {/* Loading Animation */}
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center mb-6">
                    {/* Profile Image */}
                    <div className="relative mb-4">
                        <img
                            src={userData.profilePicture || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover bg-gray-300"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">{userData.name}</h1>
                    <p className="text-gray-600 mb-2">{userData.username}</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <span className="font-semibold text-gray-600">Email:</span> {userData.email}
                    </div>

                    <div>
                        <span className="font-semibold text-gray-600">Address:</span>
                        <div className="ml-4">
                            <p><strong>Street:</strong> {userData?.address?.street}</p>
                            <p><strong>Suite:</strong> {userData?.address?.suite}</p>
                            <p><strong>City:</strong> {userData?.address?.city}</p>
                            <p><strong>Zipcode:</strong> {userData?.address?.zipcode}</p>
                            <p><strong>Geo Coordinates:</strong></p>
                            <p>Latitude: {userData?.address?.geo?.lat}</p>
                            <p>Longitude: {userData?.address?.geo?.lng}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersData
