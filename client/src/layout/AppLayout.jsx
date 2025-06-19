import Footer from "../components/Footer"
import Header from "../components/Header"

const AppLayout =({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout