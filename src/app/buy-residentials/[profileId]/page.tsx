import { ProfileData } from "@/template/AddProfilePage";
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
  console.log(params);
  
  return params;
}

async function ProfileDetails(props: Props) {
  const { profileId } = props.params;

  const res = await fetch(`http://localhost:3000/api/profile/${profileId}`);
  const data = await res.json();
  const details: ProfileData = data.data;
  console.log(profileId);
  

  return <div>ProfileDetails-{details._id}</div>;
}

export default ProfileDetails;