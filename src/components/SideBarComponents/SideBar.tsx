import { cn } from "@/utils/css";
import {TGenericComponentProps} from "@/types/generics"
import {GiTimeBomb} from "react-icons/gi"
import { SidebarBox } from "./SidebarBox";
import { MdPeopleAlt } from "react-icons/md"
import { BsFolder2Open } from "react-icons/bs"
import {LiaFileInvoiceDollarSolid, LiaFileContractSolid} from "react-icons/lia"
import {AiOutlineClockCircle} from "react-icons/ai"

export const SideBar = ({className = ""}: TGenericComponentProps) => {
  return (
    <div className={cn(
        "border border-gray-100 bg-white h-screen left-0 top-0",
        className
    )}>
      <div className="h-16 border-b border-gray-100">
        <div className="h-full flex justify-center items-center">
            <GiTimeBomb size={30}/>
        </div>
      </div>
      <div className="px-6 flex flex-col">
        <div className="my-4">
          <SidebarBox className="hover:bg-green-300" text={"Clients"} svg={<MdPeopleAlt/>}/>
        </div>
        <div className="mb-4">
          <SidebarBox className="hover:bg-green-300" text={"Projects"} svg={<BsFolder2Open/>}/>
        </div>
        <div className="mb-4">
          <SidebarBox className="hover:bg-green-300" text={"Invoices"} svg={<LiaFileInvoiceDollarSolid/>}/>
        </div>
        <div className="mb-4">
          <SidebarBox className="hover:bg-green-300" text={"Contracts"} svg={<LiaFileContractSolid/>}/>
        </div>
        <div>
          <SidebarBox className="hover:bg-green-300" text={"Tracker"} svg={<AiOutlineClockCircle/>} href="/tracker"/>
        </div>
      </div>
    </div>
  );
};
