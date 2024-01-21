"use client"

import ProfileData from "@/interfaces/ProfileData";
import Card from "@/module/Card";
import styles from "@/module/DashboardCard.module.css"
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai"
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "@/module/Loader";

interface Props {
    profile: ProfileData
}


export default function DashboardCard(props: Props) {
    const [loading, setLoading] = useState(false)

    const { profile } = props
    const router = useRouter()

    const editHandler = () => {
        router.push(`/dashboard/my-profiles/${profile._id}`)
    }

    const deleteHandler = async () => {
        setLoading(true)
        const res = await fetch(`/api/profile/delete/${profile._id}`, {
            method: "DELETE"
        })
        const data = await res.json()
        setLoading(false)
        if (data.error) {
            toast.error(data.error)
        } else {
            toast.success(data.message)
            router.refresh()
        }
    }

    return (
        <div className={styles.container}>
            <Card profile={profile} />
            <div className={styles.main}>
                <button onClick={editHandler}>ویرایش <FiEdit /></button>
                {loading ? <Loader /> : <button onClick={deleteHandler}>حذف آگهی<AiOutlineDelete /></button>}
            </div>
            <Toaster />
        </div>
    )

}