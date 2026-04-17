import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import InputField from "./components/InputField";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Signup({setSignup, signup}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
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
    fullName: !form.fullName ? "Full name is required." : "",
    email: !form.email
      ? "Email is required."
      : !emailRegex.test(form.email)
        ? "Enter a valid email address."
        : "",
    password: !form.password
      ? "Password is required."
      : form.password.length < 8
        ? "Use at least 8 characters."
        : "",
    confirmPassword: !form.confirmPassword
      ? "Confirm your password."
      : form.confirmPassword !== form.password
        ? "Passwords do not match."
        : "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });
  };

  return (
    <AuthLayout
      setSignup={setSignup}
      signup={signup}
      title="Create your Inventra account"
      subtitle="Take control of your inventory, starting today."
    >
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <InputField
          id="fullName"
          name="fullName"
          label="Full name"
          type="text"
          value={form.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Jane Doe"
          autoComplete="name"
          error={touched.fullName ? validate.fullName : ""}
          hint="Enter the name you use for your team."
        />

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
          hint="Use an email you can access today."
        />

        <InputField
          id="password"
          name="password"
          label="Password"
          type={showPassword.password ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Create a secure password"
          autoComplete="new-password"
          error={touched.password ? validate.password : ""}
          hint="Minimum 8 characters."
        >
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => ({ ...prev, password: !prev.password }))
            }
            className="flex items-center text-slate-500 hover:text-slate-900"
            aria-label={
              showPassword.password ? "Hide password" : "Show password"
            }
          >
            {showPassword.password ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L23 23"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M17.94 17.94C16.32 19.1 14.31 19.8 12 19.8C7 19.8 3 15.8 3 10.8C3 9.3 3.35 7.9 3.96 6.7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

        <InputField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          type={showPassword.confirmPassword ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Repeat your password"
          autoComplete="new-password"
          error={touched.confirmPassword ? validate.confirmPassword : ""}
          hint="Must match the password above."
        >
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => ({
                ...prev,
                confirmPassword: !prev.confirmPassword,
              }))
            }
            className="flex items-center text-slate-500 hover:text-slate-900"
            aria-label={
              showPassword.confirmPassword ? "Hide password" : "Show password"
            }
          >
            {showPassword.confirmPassword ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L23 23"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M17.94 17.94C16.32 19.1 14.31 19.8 12 19.8C7 19.8 3 15.8 3 10.80C3 9.3 3.35 7.9 3.96 6.7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          className="w-full mt-2 rounded-3xl bg-secondary py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-darkgreen active:scale-95"
        >
          Create account
        </button>
      </form>

      <div className="mt-3 text-center text-sm text-slate-600">
        <p>
          Already have an account?{" "}
          <Link
            to="/Login"
            className="font-semibold cursor-pointer text-secondary hover:text-darkgreen focus:outline-none"
          >
            <button className="cursor-pointer" type="button">Sign in</button>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Signup;
