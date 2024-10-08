import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header/Header";
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
      <main className="">

        {props.children}
      </main>
     <Footer/>
    </div>
  );
};

export default Layout;
