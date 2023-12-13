"use client";

import React, { useState, useEffect } from "react";
import styles from "@/template/Signup.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";

function SigninPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials",{
        email,
        password,
        redirect:false
    })
    setLoading(false);

    if (res?.error) {
        toast.error(res.error);
    } else {
      router.push("/")
    }
  };

  return (
    <>
      <div className={styles.form}>
        <h4>فرم ورود</h4>
        <form>
          <label>ایمیل</label>
          <input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>رمز عبور</label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!loading ? (
            <button onClick={(e) => signinHandler(e)} type="submit">
               ورود
            </button>
          ) : (
            <ThreeDots
              color="#304ffe"
              height={45}
              ariaLabel="three-dots-loading"
              visible={true}
              wrapperStyle={{ margin: "auto" }}
            />
          )}
        </form>
        <p>
          حساب کاربری ندارید؟
          <Link href="/signup">ثبت نام</Link>
        </p>
        <Toaster />
      </div>
    </>
  );
}

export default SigninPage;
