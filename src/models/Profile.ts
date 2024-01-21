import { models, model, Schema } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    constractionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["villa", "apartment", "office", "store"],
    },
    rules: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    location: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
