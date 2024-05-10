import Image from 'next/image';
import { TGenericComponentProps } from '@/types/generics';
import { cn } from '@/utils/css';
import {RxAvatar} from "react-icons/rx"
import {RiArrowDropDownLine} from "react-icons/ri"

export const NavBar = ({className = ""}: TGenericComponentProps) => {
  return (
    <nav className={cn(
        "border border-l-0 border-gray-100 bg-white p-1 flex items-center justify-between w-full h-16",
        className
    )}>
      <div className="flex items-center h-full pl-10">
        <span className="text-lg">Tracker</span>
      </div>
      <div className="flex items-center">
        <div className="relative group pr-2">
            <div className="h-10 w-8 rounded-full cursor-pointer">
              <RxAvatar size={40}/>
            </div>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-gray-700">
                <ul>
                <li className="py-2 px-4 hover:bg-blue-100">Profile</li>
                <li className="py-2 px-4 hover:bg-blue-100">Settings</li>
                <li className="py-2 px-4 hover:bg-blue-100">Logout</li>
                </ul>
            </div>
        </div>
      </div>
    </nav>
  );
};
