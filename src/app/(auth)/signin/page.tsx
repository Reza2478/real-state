import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SigninPage from "@/template/SigninPage";

async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return <SigninPage />;
}

export default SignIn;
