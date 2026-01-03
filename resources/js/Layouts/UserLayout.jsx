import UserNavbar from "../Components/User/UserNavbar";
import UserFooter from "../Components/User/UserFooter";

export default function UserLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <UserNavbar />
            <main className="flex-1 bg-white">{children}</main>
            <UserFooter />
        </div>
    );
}
