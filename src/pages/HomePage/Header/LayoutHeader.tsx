import { useEffect, useState } from "react";
// import NavMenu from "src/components/NavBar";

const LayoutHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setScrolled(top > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="navbar">
      
    </div>
  );
};

export default LayoutHeader;
