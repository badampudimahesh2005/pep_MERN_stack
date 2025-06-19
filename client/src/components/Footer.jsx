
const Footer = () => {
  return (
    <>
    <div className="bg-gray-400 text-white p-6 mt-10  bottom-0">
        <div className="container mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
            <p className="text-sm">Follow us on 
            <a href="https://twitter.com" className="text-black/50 hover:underline ml-1">Twitter</a>, 
            <a href="https://facebook.com" className="text-black/50 hover:underline ml-1">Facebook</a>, 
            <a href="https://instagram.com" className="text-black/50 hover:underline ml-1">Instagram</a>
            </p>
        </div>
    </div>
    </>
  )
}

export default Footer