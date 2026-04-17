import { useState } from "react";
import AuthLayout from "./components/AuthLayout";
import InputField from "./components/InputField";

export function ResetPassword() {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
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
    setTouched({ password: true, confirmPassword: true });
  };

  // display login modal

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Choose a new password to keep your account secure."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="password"
          name="password"
          label="New password"
          type={showPassword.password ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a new password"
          autoComplete="new-password"
          error={touched.password ? validate.password : ""}
          hint="At least 8 characters recommended."
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
          label="Confirm new password"
          type={showPassword.confirmPassword ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Repeat the new password"
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

        <button
          type="submit"
          className="w-full rounded-3xl bg-secondary py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-darkgreen active:scale-95"
        >
          Reset password
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-600">
        <p className="mb-2">Remembered your password?</p>
          <button
            onClick={renderLogin}
            type="button"
            className="font-semibold  text-gray-200 hover:text-slate-900 focus:outline-none"
          >
            Sign in instead
          </button>
      </div>
    </AuthLayout>
  );
}

export default ResetPassword;
