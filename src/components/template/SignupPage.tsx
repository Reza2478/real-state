"use client";

import React, { useState, useEffect } from "react";
import styles from "@/template/Signup.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/module/Loader";

function SignupPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز عبور با تکرار آن مطابقت ندارد");
      return;
    }
    setLoading(true);
    const res = await fetch("api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);

    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <>
      <div className={styles.form}>
        <h4>فرم ثبت نام</h4>
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
          <label>تکرار رمز عبور</label>
          <input
            name="rePassword"
            id="rePassword"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          {!loading ? (
            <button onClick={(e) => signupHandler(e)} type="submit">
              ثبت نام
            </button>
          ) : (
            <Loader/>
          )}
        </form>
        <p>
          حساب کاربری دارید؟
          <Link href="/signin">ورود</Link>
        </p>
        <Toaster />
      </div>
    </>
  );
}

export default SignupPage;
