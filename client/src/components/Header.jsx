
const Header = () => {
  return (
    <>

    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-pink-500 text-lg font-bold">
          <a href="/">MyApp</a>
        </div>
        <div className="space-x-4">
          <a href="/login" className="text-pink-500 hover:text-gray-300">Login</a>
          <a href="/register" className="text-pink-500 hover:text-gray-300">Register</a>
        </div>
      </div>

    </nav>
    </>
  )
}

export default Header