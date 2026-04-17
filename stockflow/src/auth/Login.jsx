import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import InputField from "./components/InputField";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Login({setLogin, login}) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = {
    email: !form.email
      ? "Email is required."
      : !emailRegex.test(form.email)
        ? "Enter a valid email address."
        : "",
    password: !form.password ? "Password is required." : "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ email: true, password: true });
  }; 

  return (
    <AuthLayout
      setLogin={setLogin}
      login={login}
      title="Sign in to Inventra"
      subtitle="Access your inventory workspace with a secure login experience."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="you@example.com"
          autoComplete="email"
          error={touched.email ? validate.email : ""}
          hint="Use the email associated with your account."
        />

        <InputField
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password"
          autoComplete="current-password"
          error={touched.password ? validate.password : ""}
          hint=""
        >
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="flex items-center text-slate-500 hover:text-slate-900"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.94 17.94C16.32 19.1 14.31 19.8 12 19.8C7 19.8 3 15.8 3 10.8C3 9.3 3.35 7.9 3.96 6.7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.1 9.1C9.37 8.64 9.83 8.32 10.37 8.32C11.1 8.32 11.7 8.92 11.7 9.65C11.7 10.19 11.38 10.65 10.92 10.92"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.81 14.81C14.54 15.27 14.08 15.59 13.54 15.59C12.81 15.59 12.21 14.99 12.21 14.26C12.21 13.72 12.53 13.26 12.99 12.99"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L23 23"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            )}
          </button>
        </InputField>

        <button
          type="submit"
          className="w-full rounded-3xl bg-secondary py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-darkgreen active:scale-95"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 space-y-4 text-center text-sm text-white">
        <p>
          New to Inventra?{" "}
          <Link
            to="/Signup"
            className="cursor-pointer font-semibold text-secondary hover:text-darkgreen focus:outline-none"
          >
            <button className="cursor-pointer" type="button">
              Create an account
            </button>
          </Link>
        </p>
        <Link to="/ForgotPassword" className="font-semibold text-white hover:text-slate-900 focus:outline-none">
          <button 
            type="button"
          >
            Forgot password?
          </button>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Login;
