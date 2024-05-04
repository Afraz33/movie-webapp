//Project Imports
import Navbar from "@components/ui/navbar/Navbar";
import Footer from "@components/ui/footer/Footer";
import SignUpForm from "@components/ui/SignupForm/SignupForm";

function AuthRegister() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <SignUpForm />

      <Footer />
    </div>
  );
}

export default AuthRegister;
