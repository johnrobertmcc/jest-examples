import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className="py-36">{children}</main>
      <Footer />
    </>
  )
}
