import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header/header";
import Footer from "@/components/footer/Footer";


const Layout = (props: any) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      // delay: 100,
    });
  }, []);

  return (
    <div >
      <Header/>
      <main className="dark:bg-[#154371] bg-white ">

        {props.children}
      </main>
     <Footer/>
    </div>
  );
};

export default Layout;
