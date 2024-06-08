import AuthButtonServer from "@/components/AuthButton/server";

const Login = async () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center gap-4">
      <h1>Login</h1>
      <AuthButtonServer />
    </section>
  );
};

export default Login;
