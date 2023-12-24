import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";
import SignupPage from "@/template/SignupPage";

async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return <SignupPage />;
}

export default SignUp;
