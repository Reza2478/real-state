import ProfileData from "@/interfaces/ProfileData";
import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilesPage.module.css"

interface Props {
    myProfiles: ProfileData[]
}


export default function MyProfilesPage(props: Props) {

    const { myProfiles } = props

    return (
        <>
            {myProfiles.length ? myProfiles.map(profile => <DashboardCard profile={JSON.parse(JSON.stringify(profile))} key={profile._id} />
            ) : <p className={styles.text}>هیچ آگهی ثبت نشده است</p>}
        </>
    )

}