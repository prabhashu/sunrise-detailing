"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}
export function AccordionItem({
  title,
  children,
  isOpen,
  onClick
}: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-sunrise-navy">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none group">

        <span className="font-semibold text-sunrise-navy group-hover:text-sunrise-orange transition-colors">
          {title}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{
            duration: 0.2
          }}
          className="text-gray-500 group-hover:text-sunrise-orange">

          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="overflow-hidden">

            <div className="pb-4 text-gray-600 leading-relaxed">{children}</div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}