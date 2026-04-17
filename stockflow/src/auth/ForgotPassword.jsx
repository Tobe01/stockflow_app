import { useState } from 'react';
import AuthLayout from './components/AuthLayout';
import InputField from './components/InputField';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const validateEmail = !email
    ? 'Email is required.'
    : !emailRegex.test(email)
    ? 'Enter a valid email address.'
    : '';

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched(true);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email and we’ll send a reset link to your inbox."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="you@example.com"
          autoComplete="email"
          error={touched ? validateEmail : ''}
          hint="A reset link will be sent to this address."
        />

        <button
          type="submit"
          className="w-full rounded-3xl bg-secondary py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-darkgreen active:scale-95"
        >
          Send reset link
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-600">
        <p className="mb-2">Remembered your password?</p>
        <button className="mt-2 font-semibold text-secondary hover:text-darkgreen focus:outline-none" type="button">
          Back to sign in
        </button>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;
