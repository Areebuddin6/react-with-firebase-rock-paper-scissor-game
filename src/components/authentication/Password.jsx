import React, { useContext, useState } from "react";
import { Context } from "../GameContext";
import { FormControlLabel, Checkbox, Grid } from "@mui/material";

const Password = () => {
	const [checked, setChecked] = useState(false);
	const { setPassword } = useContext(Context);
	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	function changeValue(func, e) {
		func(e.target.value);
	}
	return (
		<div className="form-group">
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid item>
					<label htmlFor="password" className="col order-1 justify-self-start">
						Password
					</label>
				</Grid>
				<Grid item>
					<FormControlLabel
						control={<Checkbox checked={checked} onChange={handleChange} />}
						label="Show Password"
						className="col order-2"
					/>
				</Grid>
			</Grid>
			<input
				type={!checked ? "password" : "text"}
				className="form-control"
				placeholder="Enter your secret password"
				required
				onChange={(e) => changeValue(setPassword, e)}
			/>
		</div>
	);
};

export default Password;
