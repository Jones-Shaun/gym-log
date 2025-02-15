import { Dumbbell } from "lucide-react";
import { UserRound } from "lucide-react";
import { History } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar() {
	return (
		<div className="shrink-0 w-50 h-full bg-primary-orange py-18 px-4 flex justify-center flex-col gap-25">
			<span className="w-full flex flex-col gap-10 text-center text-3xl">
				JymLog
				<div className="w-full h-[2px] bg-snow-white opacity-80 rounded-xl"></div>
			</span>
			<div className="h-full flex flex-col gap-4">
				<NavLink
					to={"/profile"}
					className="flex items-center gap-3 rounded-md p-2 transition ease-in-out duration-300 hover:bg-orange-300 hover:cursor-pointer text-xl font-light"
				>
					<UserRound size={25} />
					Profile
				</NavLink>
				<NavLink
					to={"/workout"}
					className="flex items-center gap-3 rounded-md p-2 transition ease-in-out duration-300 hover:bg-orange-300 hover:cursor-pointer text-xl font-light"
				>
					<Dumbbell size={25} />
					Workouts
				</NavLink>
				<NavLink
					to={"/history"}
					className="flex items-center gap-3 rounded-md p-2 transition ease-in-out duration-300 hover:bg-orange-300 hover:cursor-pointer text-xl font-light"
				>
					<History size={25} />
					History
				</NavLink>
				<NavLink
					to={"/database"}
					className="flex items-center gap-3 rounded-md p-2 transition ease-in-out duration-300 hover:bg-orange-300 hover:cursor-pointer text-xl font-light"
				>
					<BookOpenText size={25} />
					Database
				</NavLink>
			</div>
		</div>
	);
}
