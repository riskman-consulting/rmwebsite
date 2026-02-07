import { Outlet } from "react-router-dom";

function Layout() {
  
  return (
    <div className="min-h-screen z-[100]  bg-bgLight dark:bg-bgDark transition-colors duration-300">
      
      {/* Page Content */}
      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}



export default Layout;