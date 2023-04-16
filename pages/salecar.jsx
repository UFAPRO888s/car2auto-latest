import { useAuth } from '@/context/AuthContext'
import addData from '@/firebase/firestore/addData'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import FormSaleCar from '@/components/FormSaleCar'
import { Container } from '@/components/Container'
import Image from 'next/image'
const SaleCarPage = () => {
  const { user } = useAuth()
  const address = useAddress()

  const addWallet = async () => {
    if (!address) return console.log('No wallet connected')
    else {
      const data = {
        email: user.email,
        wallet: address,
      }
      const { result, error } = await addData('wallets', user.uid, data)

      if (error) {
        return console.log(error)
      }
    }
  }

  return (
    <>
      <PageSEO
        title={'ประเมินราคารถยนต์ ' + siteMetadata.title + ' | ' + siteMetadata.author}
        description={'ประเมินราคารถยนต์ ' + siteMetadata.description}
      />
      <div className="h-10 object-cover">
        <Image
          src={'/images/banner/banner1920x9151.jpg'}
          alt="Banner"
          width={1000}
          height={100}
          className="w-full h-auto"
          priority
        />
      </div>
      <main className="bg-black">
        <Container>
          <div className="py-2 mx-auto">
            {/* <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
            <h1>สวัสดี {user.email}</h1>

            <h2 className="text-2xl font-semibold">this is dashboard page!</h2>
            <button
              onClick={addWallet}
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
            >
              เชื่อม Wallet ป่ะ
            </button>
          </div> */}
            <FormSaleCar />
          </div>
        </Container>
      </main>
    </>
  )
}

export default SaleCarPage
