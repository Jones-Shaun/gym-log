import { Dumbbell } from "lucide-react";
import {UserRound} from "lucide-react";
import {History} from "lucide-react";


export default function Sidebar() {
  
	return (
		<div className="shrink-0 w-1/10 h-full bg-primary-orange py-12 px-4 flex justify-center flex-col gap-25 shadow-xl shadow-neutral-400">
			<span className="w-full flex flex-col gap-8 text-center text-3xl">
				JymLog <div className="w-full h-[2px] bg-snow-white opacity-80 rounded-xl"></div>
			</span>
			<div className="h-full flex flex-col gap-3">
				<div className="flex items-center gap-3 rounded-md p-2 transition ease-in-out duration-300 hover:bg-red-400 hover:cursor-pointer text-xl font-light">
					<UserRound size={25} />
					Profile
				</div>
				<div className="flex items-center gap-3 rounded-md p-2 transition ease-in-out duration-300 hover:bg-red-400 hover:cursor-pointer text-xl font-light">
					<Dumbbell size={25} />
					Workouts
				</div>
				<div className="flex items-center gap-3 rounded-md p-2 transition ease-in-out duration-300 hover:bg-red-400 hover:cursor-pointer text-xl font-light">
					<History size={25} />
					History
				</div>
			</div>
		</div>
	);
}
