
const NavBar = () => {
    return ( 
        <header className="sticky top-0 z-[40] w-full border-b bg-background/95 shadow-sm backdrop-blur">
        <div className="py-5 flex flex-row mx-20 items-center">
        <div className="text-xl font-bold mr-8">
            RavenPoint
        </div>
        <div className="flex flex-row items-center space-x-6 ">
              <div className="text-base font-medium text-zinc-500 hover:text-black hover:cursor-pointer">
            Tables
        </div>

        <div className="text-base font-medium text-zinc-500 hover:text-black hover:cursor-pointer">
            Relationships
        </div>

        
        <div className="text-base font-medium text-zinc-500 hover:text-black hover:cursor-pointer">
            Files
        </div>

        <div className="text-base font-medium text-zinc-500 hover:text-black hover:cursor-pointer">
            Users
        </div>
        <div>
        </div>
            
        </div>

      



       </div>

        </header>
      
     );
}
 
export default NavBar;