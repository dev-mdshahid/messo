import React from "react";

const ProfileCompletion = () => {
  return (
    <div className=" h-fit w-full rounded-xl bg-white shadow shadow-messo-100">
      <div className="p-5 px-6 text-lg font-bold text-blue-900">
        <h2 className="capitalize">Profile Completion rate</h2>
        <div className="mb-2 mt-3 h-6 w-full rounded-lg bg-blue-100">
          <div className="flex h-6 w-[85%] items-center justify-center rounded-lg bg-green-600 pr-3 text-sm text-white">
            85%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
