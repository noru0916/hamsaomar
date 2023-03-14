import LayoutHeader from "./Header/LayoutHeader";
import LayoutFooter from "./Footer/LayoutFooter";
import LayoutLanding from "./Landing/LayoutLanding";

const HomePage: React.FC = () => {
  return (
    <div className="main-container">
     <LayoutHeader/>
     <LayoutLanding />
     <LayoutFooter /> 
    </div>
  )
};

export default HomePage;



 