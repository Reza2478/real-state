import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB"
import AddProfilePage from "@/template/AddProfilePage";


interface Props {
    params: {
        profileId: string
    }
}

export default async function EditPage(props: Props) {
    await connectDB();
    const { profileId } = props.params
    const profile = await Profile.findOne({ _id: profileId })

    if (!profile) return <h3>خطایی پیش آمده است لطفا دوباره امتحان کنید</h3>

    return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />

}
