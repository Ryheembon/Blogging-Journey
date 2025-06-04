import React, { useState } from 'react';
import { Mail, Check, X } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thanks for subscribing! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
      <div className="flex items-center space-x-3 mb-4">
        <Mail className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Subscribe to Newsletter</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Get the latest articles and updates delivered straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 rounded-lg transition-colors flex items-center justify-center"
          >
            {status === 'loading' ? (
              <span className="animate-spin">⏳</span>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>

        {status !== 'idle' && (
          <div
            className={`p-3 rounded-lg flex items-center space-x-2 ${
              status === 'success'
                ? 'bg-green-500/20 text-green-400'
                : status === 'error'
                ? 'bg-red-500/20 text-red-400'
                : ''
            }`}
          >
            {status === 'success' ? (
              <Check className="w-5 h-5" />
            ) : status === 'error' ? (
              <X className="w-5 h-5" />
            ) : null}
            <span>{message}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter; 