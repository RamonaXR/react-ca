import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Layout Component.
 *
 * This component defines the common layout structure for the application.
 * It includes a header at the top, a footer at the bottom, and renders nested routes
 * via the Outlet component in between.
 *
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
