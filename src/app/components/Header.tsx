import { Search, Gift, User, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-md">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#FFEB3B] to-[#76FF03] bg-clip-text text-transparent">
            Dalla Imports
          </h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Search size={20} className="text-white" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Gift size={20} className="text-white" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <User size={20} className="text-white" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors relative">
            <ShoppingCart size={20} className="text-white" />
            <span className="absolute top-0 right-0 bg-[#76FF03] text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
