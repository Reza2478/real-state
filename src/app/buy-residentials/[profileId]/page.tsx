import ProfileData from "@/interfaces/ProfileData";
import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import { profile } from "console";
import React from "react";

interface Props {
  params: {
    profileId: string;
  };
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/profile");
  const data = await res.json();
  const allData: ProfileData[] = data.data;
  const params = allData.map((profile) => ({ profileId: String(profile._id) }));

  return params;
}

async function ProfileDetails({ params: { profileId } }: Props) {
  const res = await fetch(`http://localhost:3000/api/profile/${profileId}`);
  const data = await res.json();
  const details: ProfileData = data.data;

  return <DetailsPage details={details} />
}


export const generateMetadata = async ({ params: { profileId } }: Props) => {

  await connectDB()
  const profile = await Profile.findOne({ _id: profileId })


  return {
    title: profile.title,
    description: profile.description
  }
}

export default ProfileDetails;
