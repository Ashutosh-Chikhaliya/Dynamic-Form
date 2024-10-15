// src/components/TeamMembersForm.jsx

import React, { useState } from "react";

function TeamMembersForm() {
    // State to hold the details of project and team members
    const [projectDetails, setProjectDetails] = useState({
        projectName: "",
        category: "",
    });

    const [members, setMembers] = useState([{ name: "", email: "", role: "" }]);

    // Handler to update project details
    const handleProjectChange = (event) => {
        const { name, value } = event.target;
        setProjectDetails({ ...projectDetails, [name]: value });
    };

    // Handler to add a new member
    const handleAddMember = () => {
        setMembers([...members, { name: "", email: "", role: "" }]);
    };

    // Handler to remove a member by index
    const handleRemoveMember = (index) => {
        const updatedMembers = members.filter((_, i) => i !== index);
        setMembers(updatedMembers);
    };

    // Handler to update member details
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedMembers = members.map((member, i) =>
            i === index ? { ...member, [name]: value } : member
        );
        setMembers(updatedMembers);
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Log both project details and team members data
        console.log("Project Details:", projectDetails);
        console.log("Team Members:", members);
        setMembers([{ name: "", email: "", role: "" }]);
        setProjectDetails({ projectName: "", category: "" });
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-900 text-white">
            <div className="mb-10 text-4xl">Dynamic Form</div>
            <form onSubmit={handleSubmit} className="bg-zinc-600 p-6 rounded shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Project Information</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="projectName"
                        value={projectDetails.projectName}
                        onChange={handleProjectChange}
                        placeholder="Enter Project Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 mb-2"
                        required
                    />

                    <div className="mb-4">
                        <input
                            type="text"
                            name="category"
                            value={projectDetails.category}
                            onChange={handleProjectChange}
                            placeholder="Enter Project Category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 mb-2"
                            required
                        />
                    </div>
                </div>

                <h2 className="text-lg font-bold mb-4">Add Project Team Members</h2>

                {members.map((member, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-md font-medium mb-2">
                            Member {index + 1}
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={member.name}
                            onChange={(event) => handleChange(index, event)}
                            placeholder="Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 mb-2"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={member.email}
                            onChange={(event) => handleChange(index, event)}
                            placeholder="Email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 mb-2 "
                            required
                        />
                        <input
                            type="text"
                            name="role"
                            value={member.role}
                            onChange={(event) => handleChange(index, event)}
                            placeholder="Role"
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 mb-2 "
                            required
                        />

                        {index !== 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveMember(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove Member
                            </button>
                        )}
                    </div>
                ))}

                <button
                    type="button"
                    onClick={handleAddMember}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                    Add Member
                </button>

                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TeamMembersForm;
