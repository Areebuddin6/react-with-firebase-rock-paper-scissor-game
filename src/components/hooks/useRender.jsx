import React, { useRef } from "react";

const useRender = () => {
	const count = useRef(0);
	count.current++;
	return count.current;
};

export default useRender;
