import { useContext } from "react";
import { Context } from "../GameContext";

export default function useGameContext() {
	return useContext(Context);
}
