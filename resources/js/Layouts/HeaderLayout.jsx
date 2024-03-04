import { Footer } from "@/Components/Footer";
import ResponsiveNavbar from "@/Components/ResponsiveNavbar";
export default function HeaderLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <ResponsiveNavbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
