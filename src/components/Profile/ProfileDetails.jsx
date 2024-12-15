import React from "react";

const ProfileDetails = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white p-8 md:p-12 rounded-xl shadow-md max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-400 flex-shrink-0">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-grow mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-600 mt-2">
            A curious learner and aspiring software developer, passionate about
            building scalable and accessible learning platforms.
          </p>

          {/* Progress Section */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-500 mb-1">
              Learning Progress
            </p>
            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: "80%" }} // Adjust progress percentage
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">80% Completed</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6 space-x-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600">
              View Courses
            </button>
            <button className="px-6 py-2 bg-gray-100 text-blue-500 rounded-full shadow hover:bg-gray-200">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Icon Section */}
      <div className="flex justify-around mt-8">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl shadow">
            📚
          </div>
          <p className="mt-2 text-sm text-gray-600">Courses</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl shadow">
            🏆
          </div>
          <p className="mt-2 text-sm text-gray-600">Achievements</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl shadow">
            🔧
          </div>
          <p className="mt-2 text-sm text-gray-600">Skills</p>
        </div>
      </div>

      {/* Contact and Account Details Section */}
      <div className="mt-10 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800">Contact & Account Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="+123 456 7890"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* Bank Account */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Bank Account</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
        </div>
        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
