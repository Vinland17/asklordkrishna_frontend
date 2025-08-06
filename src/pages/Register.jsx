import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMsg('');
    
    try {
      await api.post('/auth/register', form);
      setMsg('Account created successfully! Redirecting to login...');
      setTimeout(() => nav('/login'), 1500);
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Your Account</h2>
            <p>Join us on your journey towards wisdom</p>
          </div>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                onChange={handleChange} 
                value={form.email}
                required 
              />
            </div>
            
            <div className="input-group">
              <input 
                type="password" 
                name="password" 
                placeholder="Create a strong password" 
                onChange={handleChange} 
                value={form.password}
                required 
              />
            </div>

            {error && (
              <div className="error-message">
                <span>{error}</span>
              </div>
            )}

            {msg && (
              <div className="success-message">
                <span>{msg}</span>
              </div>
            )}

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <a href="/login" className="auth-link">Login here</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
