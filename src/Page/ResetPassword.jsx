import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1 for OTP Request, Step 2 for Password Reset
  const [loading, setLoading] = useState(false);

  // Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://localhost:5000/api/v1/auth/requestOtp`, { email }, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('OTP sent to your email.');
      setStep(2); // Move to Step 2 for OTP verification
    } catch (err) {
      toast.error(err.response?.data || 'Error sending OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://localhost:5000/api/v1/auth/resetPassword`, {
        email,
        otp,
        newPassword,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Password reset successfully!');
      window.location.href = '/login';
    } catch (err) {
      toast.error(err.response?.data || 'Error resetting password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-4 h-screen bg-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {step === 1 ? 'Request OTP' : 'Reset Password'}
        </h1>

        {/* Step 1: OTP Request */}
        {step === 1 && (
          <form onSubmit={handleRequestOtp}>
            <div className="mb-5">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <small className="text-gray-500 mt-1 block">We'll send an OTP to this email.</small>
            </div>
            <button
              type="submit"
              className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending OTP...' : 'Request OTP'}
            </button>
          </form>
        )}

        {/* Step 2: OTP Verification and Password Reset */}
        {step === 2 && (
          <form onSubmit={handleResetPassword}>
            <div className="mb-5">
              <label htmlFor="otp" className="block text-lg font-medium text-gray-700 mb-2">OTP</label>
              <input
                type="text"
                id="otp"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <small className="text-gray-500 mt-1 block">Enter the OTP sent to your email.</small>
            </div>
            <div className="mb-5">
              <label htmlFor="newPassword" className="block text-lg font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                id="newPassword"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <small className="text-gray-500 mt-1 block">Your new password must be at least 6 characters long.</small>
            </div>
            <button
              type="submit"
              className={`w-full py-3 bg-green-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-green-700 focus:ring-4 focus:ring-green-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default ResetPassword;
