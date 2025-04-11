import { Application as Job } from "../model/index.js";
import { ApiResponse, ApiError, asyncHandler } from "../utils/index.js";

// -- Add New Job Application --
const addJob = asyncHandler(async (req, res) => {
  const { company, position, status, appliedDate,jobType} = req.body;

  if (!company || !position || !status || !appliedDate) {
    throw new ApiError(400, "All fields are required");
  }

  const job = new Job({ company, position, status, appliedDate,jobType});
  await job.save();

  res.status(201).json(new ApiResponse(job, "Job added successfully"));
});

// -- Get All Job Applications --
const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find().sort({ appliedDate: -1 });
  res.status(200).json(new ApiResponse(jobs, "Jobs fetched successfully"));
});

// -- Get Single Job By ID --
const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) throw new ApiError(404, "Job not found");
  res.status(200).json(new ApiResponse(job, "Job fetched successfully"));
});

// -- Update Job Application --
const updateJob = asyncHandler(async (req, res) => {
  const { company, position, status, appliedDate,jobType } = req.body;

  if (!company || !position || !status || !appliedDate) {
    throw new ApiError(400, "All fields are required");
  }

  const updatedJob = await Job.findByIdAndUpdate(
    req.params.id,
    { company, position, status, appliedDate,jobType},
    { new: true }
  );

  if (!updatedJob) throw new ApiError(404, "Job not found");

  res.status(200).json(new ApiResponse(updatedJob, "Job updated successfully"));
});

// -- Delete Job Application --
const deleteJob = asyncHandler(async (req, res) => {
  const deletedJob = await Job.findByIdAndDelete(req.params.id);
  if (!deletedJob) throw new ApiError(404, "Job not found");
  res.status(200).json(new ApiResponse(null, "Job deleted successfully"));
});

export { addJob, getJobs, getJobById, updateJob, deleteJob };
