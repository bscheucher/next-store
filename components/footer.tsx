import { Copyright } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex justify-center items-center space-x-2">
        <Copyright className="w-4 h-4" />
        <span>{currentYear}</span>
        <span>Bernhard Scheucher</span>
      </div>
    </footer>
  );
};

export default Footer;
