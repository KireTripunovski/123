import Buttons from "./Buttons/Buttons";
import Certificates from "./Certificates/Certificates";
import ClientsCarousel from "./Clients/Clients";
import Course from "./Course/Course";
import GetStarted from "./GetStarted/GetStarted";
import Hero from "./Hero/Hero";
import NavbarComponent from "./Navbar";
import Partners from "./Partners/Partners";
import Professor from "./Prosfessor/Professor";
import StudentTestimonial from "./StudentTestimonial/StudentTestimonial";
import Tasks from "./Tasks/Tasks";

export default function LandingPage() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Tasks />
      <Buttons />
      <Course />
      <Certificates />
      <StudentTestimonial />
      <Professor />
      <Partners />
      <ClientsCarousel />
      <GetStarted />
    </>
  );
}
