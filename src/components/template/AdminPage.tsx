import React from 'react'
import styles from "@/template/AdminPage.module.css"
import ProfileData from "@/interfaces/ProfileData";
import AdminCard from '@/module/AdminCard'

interface Props {
    profiles: ProfileData[]
}

function AdminPage({ profiles }: Props) {

    return (
        <div>
            {profiles.length ? null : <p className={styles.text}>هیچ آگهی در انتظار تایید وجود ندارد</p>}
            {profiles.map(item => <AdminCard key={item._id} profile={JSON.parse(JSON.stringify(item))}/>)}
        </div>
    )
}

export default AdminPage