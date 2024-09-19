import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import Blog from "@/components/blog/Blog";
import Form from "@/components/contactForm/Form";



function crossplatform() {
    return (
        <>
            <Header />
{/* ----hero */}

{/* ----hero-end */}
              
             <Blog/>
             <Form/>
            <Footer />
        </>
    )
}

export default crossplatform;
