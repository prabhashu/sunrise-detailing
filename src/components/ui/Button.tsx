"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  fullWidth?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary:
    'bg-sunrise-orange text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 focus:ring-sunrise-orange',
    secondary:
    'bg-sunrise-navy text-white hover:bg-blue-900 shadow-lg hover:shadow-blue-900/30 focus:ring-sunrise-navy',
    outline:
    'border-2 border-sunrise-navy text-sunrise-navy hover:bg-gray-100 focus:ring-sunrise-navy',
    white:
    'bg-white text-sunrise-navy hover:bg-gray-100 shadow-lg focus:ring-white'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}>

      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </motion.button>);

}