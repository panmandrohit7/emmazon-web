import { IoIosCloseCircle } from "react-icons/io";

export default function Alert({ alertMsg }) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <IoIosCloseCircle className="h-5 w-5 text-red-400" />
        </div>
        <h3 className="text-sm font-medium text-red-800 ml-3">{alertMsg}</h3>
      </div>
    </div>
  );
}
