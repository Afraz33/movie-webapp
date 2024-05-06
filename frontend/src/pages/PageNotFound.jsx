import { MdMoodBad } from "react-icons/md";

//project imports
import Navbar from "@components/ui/navbar/Navbar";
import Footer from "@components/ui/footer/Footer";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          columnGap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Oops! Page not found</h2>
        <MdMoodBad style={{ width: "40px", height: "40px", color: "white" }} />
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
