import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, LogIn } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Divider from '../ui/Divider';
import useForm from '../../hooks/useForm';

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string; rememberMe: boolean }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const validationRules = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      required: true,
      minLength: 6,
    },
  };
  
  const { 
    values, 
    errors, 
    handleChange, 
    handleBlur, 
    handleSubmit 
  } = useForm(
    { email: '', password: '', rememberMe: false },
    validationRules,
    (formValues) => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        onSubmit(formValues);
        setIsLoading(false);
      }, 1000);
    }
  );
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-4">
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="email@example.com"
          icon={<Mail size={18} />}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          autoComplete="email"
          required
        />
        
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          icon={<Lock size={18} />}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          autoComplete="current-password"
          required
        />
      </div>
      
      <div className="flex items-center justify-between">
        <Checkbox
          name="rememberMe"
          label="Remember me"
          checked={values.rememberMe}
          onChange={handleChange}
        />
        
        <a href="#" className="text-sm font-medium text-sky-600 hover:text-sky-500">
          Forgot password?
        </a>
      </div>
      
      <Button 
        type="submit" 
        fullWidth 
        isLoading={isLoading}
        icon={LogIn}
      >
        Sign in
      </Button>
      
      <Divider text="Or continue with" />
      
      <div className="grid grid-cols-2 gap-3">
        <Button 
          type="button" 
          variant="outline"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </Button>
        
        <Button 
          type="button" 
          variant="outline"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M10,10.5H14V7.5L18,12L14,16.5V13.5H10V16.5L6,12L10,7.5V10.5Z" />
          </svg>
          Apple
        </Button>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-sky-600 hover:text-sky-500 inline-flex items-center">
            Sign up
            <ArrowRight size={16} className="ml-1" />
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;