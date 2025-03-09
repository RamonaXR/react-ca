/**
 * Footer Component.
 *
 * This component renders a footer element with a centered copyright notice
 * displaying the current year and "Ramona Jensen".
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ramona Jensen.
        </p>
      </div>
    </footer>
  );
}
