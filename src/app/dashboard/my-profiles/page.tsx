import { authOptions } from "@/utils/auth"
import User from "@/models/User"
import MyProfilesPage from "@/template/MyProfilesPage"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"

 export default async function myProfiles(){
    
    await connectDB()
    
    const session = await getServerSession(authOptions)
    
    const [user] = await User.aggregate([{$match:{email:session?.user?.email}},{$lookup:{
        from:"profiles",
        foreignField:"userId",
        localField:"_id",
        as:"profiles"
    }}])

    return <MyProfilesPage myProfiles={user.profiles}/>
 }