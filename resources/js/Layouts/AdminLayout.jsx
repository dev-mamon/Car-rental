import AdminSidebar from "../Components/Admin/AdminSidebar";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import AdminFooter from "../Components/Admin/AdminFooter";

export default function AdminLayout({ children }) {
    return (
        <div className="flex bg-zinc-50 min-h-screen">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <main className="p-8 flex-1">{children}</main>
                <AdminFooter />
            </div>
        </div>
    );
}
