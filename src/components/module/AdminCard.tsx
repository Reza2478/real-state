"use client"

import ProfileData from '@/interfaces/ProfileData'
import styles from "@/module/AdminCard.module.css"
import { sp } from '@/utils/replaceNumber'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast'
import { useState } from "react";
import Loader from "@/module/Loader";


interface Props {
  profile: ProfileData
}


function AdminCard({ profile }: Props) {

  const [loading, setLoading] = useState(false)

  const router = useRouter()

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
      setTimeout(() => {
        router.refresh()
      }, 3000)
    }
  }

  const publishHandler = async () => {
    setLoading(true)
    const res = await fetch(`/api/profile/publish/${profile._id}`, {
      method: "PATCH"
    })

    const data = await res.json()
    setLoading(false)
    if (data.error) {
      toast.error(data.error)
    } else {
      toast.success(data.message)
      setTimeout(() => {
        router.refresh()
      }, 3000)
    }
  }


  return (
    <div className={styles.container}>
      <h3>{profile.title}</h3>
      <p>
        {profile.description}
      </p>
      <div>
        <span>{profile.location}</span>
        <span>{sp(profile.price)}</span>
      </div>
      <button onClick={publishHandler}>انتشار</button>
      {loading ? <Loader /> : <button onClick={deleteHandler}>حذف آگهی</button>}
      <Link href={{ pathname: `/buy-residentials/${profile._id}` }}>
        مشاهده آگهی
      </Link>
      <Toaster />
    </div>
  )
}

export default AdminCard