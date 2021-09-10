function Header() {
    return (
        <header className="p-8 bg-blue-900 flex justify-between items-center px-12">
            <a className="text-3xl font-bold text-white cursor-pointer" href="/"><h1>Gizmo</h1></a>
            <ul className="flex">
                <li className ="text-white font-bold text-xl mr-6"><a className="bg-red-400 p-2 rounded-lg">Home</a></li>
                <li className ="text-white font-bold text-xl mr-6"><a className="bg-red-400 p-2 rounded-lg">About</a></li>
                <li className ="text-white font-bold text-xl"><a className="bg-red-400 p-2 rounded-lg">Contact</a ></li>
            </ul>
        </header>
        
    )
}


export default Header;