import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import User from "@/models/User";

async function page() {
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user?.email });
  const createdAt = user.createdAt;
  return <DashboardPage createdAt={createdAt} />;
}

export default page;
