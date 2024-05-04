import LoginForm from "@components/ui/LoginForm/LoginForm";
import Footer from "@components/ui/footer/Footer";
function AuthLogin() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <LoginForm />
      <Footer />
    </div>
  );
}

export default AuthLogin;
