import React, { useState } from 'react';

const AddUser = () => {
    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        lat: '',
        lng: ''
    });

    const [errors, setErrors] = useState({});

    // Validate form fields
    const validate = () => {
        const errors = {};
        if (!data.name) errors.name = 'Name is required';
        if (!data.username) errors.username = 'Username is required';
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.street) errors.street = 'Street address is required';
        if (!data.city) errors.city = 'City is required';
        if (!data.zipcode) errors.zipcode = 'Zip code is required';
        if (data.lat && isNaN(data.lat)) errors.lat = 'Latitude must be a valid number';
        if (data.lng && isNaN(data.lng)) errors.lng = 'Longitude must be a valid number';

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submission
        const validationErrors = validate();
        setErrors(validationErrors);

        // If no validation errors, proceed with submission
        if (Object.keys(validationErrors).length === 0) {
            console.log(data);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={data.username}
                                onChange={(e) => setData({ ...data, username: e.target.value })}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address</label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={data.street}
                                onChange={(e) => setData({ ...data, street: e.target.value })}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
                        </div>

                        <div>
                            <label htmlFor="suite" className="block text-sm font-medium text-gray-700">Suite</label>
                            <input
                                type="text"
                                id="suite"
                                name="suite"
                                value={data.suite}
                                onChange={(e) => setData({ ...data, suite: e.target.value })}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={data.city}
                                onChange={(e) => setData({ ...data, city: e.target.value })}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                        </div>

                        <div>
                            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                            <input
                                type="text"
                                id="zipcode"
                                name="zipcode"
                                value={data.zipcode}
                                onChange={(e) => setData({ ...data, zipcode: e.target.value })}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode}</p>}
                        </div>

                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="lat" className="block text-sm font-medium text-gray-700">Latitude</label>
                                <input
                                    type="text"
                                    id="lat"
                                    name="lat"
                                    value={data.lat}
                                    onChange={(e) => setData({ ...data, lat: e.target.value })}
                                    className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.lat && <p className="text-red-500 text-sm">{errors.lat}</p>}
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="lng" className="block text-sm font-medium text-gray-700">Longitude</label>
                                <input
                                    type="text"
                                    id="lng"
                                    name="lng"
                                    value={data.lng}
                                    onChange={(e) => setData({ ...data, lng: e.target.value })}
                                    className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.lng && <p className="text-red-500 text-sm">{errors.lng}</p>}
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
