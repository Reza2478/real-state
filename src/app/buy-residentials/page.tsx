import BuyResidentialsPage from '@/template/BuyResidentialsPage'
import { ProfileData } from '@/template/AddProfilePage'

interface Props {
  searchParams: {
    category: string
  }
}

async function BuyResidentials(props: Props) {

  const { category } = props.searchParams

  const res = await fetch("http:localhost:3000/api/profile", { cache: "no-store" })
  const data = await res.json()
  const allData: ProfileData[] = data.data
  if (data.error) return <h3>مشکلی پیش آمده است</h3>

  let finalData = allData

  if (category) {
    finalData = allData.filter((item) => item.category === category)
  }

  return <BuyResidentialsPage profiles={finalData} />
}

export default BuyResidentials