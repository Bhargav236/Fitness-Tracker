import React from 'react';
import { Dumbbell } from 'lucide-react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const handleLogin = (values: { email: string; password: string; rememberMe: boolean }) => {
    console.log('Login values:', values);
    // Here you would typically handle authentication with your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50 flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 mb-5">
              <Dumbbell className="h-8 w-8 text-sky-600" />
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-gray-600">
              Sign in to track your fitness journey
            </p>
          </div>
          
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
      
      {/* Right side - Image/Branding */}
      <div className="hidden md:flex md:w-1/2 relative bg-sky-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-blue-800 opacity-90" />
        
        <img
          src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg"
          alt="Fitness"
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-40"
        />
        
        <div className="relative z-10 flex flex-col justify-center items-center px-8 py-12 text-white">
          <h1 className="text-4xl font-bold mb-6">FitTrack Pro</h1>
          <div className="max-w-md space-y-6">
            <p className="text-xl font-medium">
              Track your workouts, monitor your progress, and achieve your fitness goals.
            </p>
            
            <ul className="space-y-4">
              {[
                'Personalized workout plans',
                'Progress tracking and analytics',
                'Nutrition guidance and meal planning',
                'Connect with friends and trainers'
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;