import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["applied", "interview", "offer", "rejected"],
      default: "applied",
      lowercase: true, 
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Freelance", "Remote"],
      default: "Full-time",
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
    location: {
      type: String,
      default: "Remote",
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Job", jobSchema);

export default Application;
