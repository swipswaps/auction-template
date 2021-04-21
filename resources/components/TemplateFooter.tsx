import React from "react";

const TemplateFooter = () => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "white",
				padding: "1em",
			}}
		>
			<table
				style={{
					display: "flex !important",
					alignItems: "center",
					justifyContent: "center",
					visibility: "visible",
				}}
			>
				<tbody>
					<tr>
						<td align="right" style={{ padding: "5px" }}>
							<span
								style={{
									display: "inline-block !important",
									visibility: "visible",
								}}
							>
								<img
									src="data:image/svg+xml;base64,PHN2ZyBpZD0icXVpa2tfc29mdHdhcmVfbG9nbyIgZGF0YS1uYW1lPSJRVUlLSyBTb2Z0d2FyZSBMb2dvIgogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDU1LjE3IDExNyIgdGl0bGU9IlFVSUtLIFNvZnR3YXJlIExvZ28iPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5wcmltYXJ5e2ZpbGw6IzIxMjQyRDt9LmFjY2VudHtmaWxsOiNmZjU4NGY7fTwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8cGF0aCBjbGFzcz0icHJpbWFyeSIgZD0iTTQ4OS45Myw0ODkuMTZWNDM1LjcySDUxMnY1Mi42MmMwLDE4LjE0LDcuOTEsMjUuNjMsMjEuMjcsMjUuNjNzMjEuMjctNy40OSwyMS4yNy0yNS42M1Y0MzUuNzJoMjEuODF2NTMuNDRjMCwyOC4wOS0xNi4wOSw0My42My00My4yMiw0My42M1M0ODkuOTMsNTE3LjI1LDQ4OS45Myw0ODkuMTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzcyLjQxIC00MzQuMDgpIi8+CiAgICA8cGF0aCBjbGFzcz0icHJpbWFyeSIgZD0iTTU5NS40Niw0MzUuNzJoMjIuMDh2OTUuNDNINTk1LjQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM3Mi40MSAtNDM0LjA4KSIvPgogICAgPHBhdGggY2xhc3M9InByaW1hcnkiIGQ9Ik02NzIuMjEsNDkzLjY2LDY1OS40LDUwN3YyNC4xM0g2MzcuNDVWNDM1LjcySDY1OS40VjQ4MC4zbDQyLjI2LTQ0LjU4SDcyNi4ybC0zOS41NCw0Mi41Myw0MS44Niw1Mi45SDcwMi43NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNzIuNDEgLTQzNC4wOCkiLz4KICAgIDxwYXRoIGNsYXNzPSJwcmltYXJ5IiBkPSJNNzcwLjM3LDQ5My42Niw3NTcuNTYsNTA3djI0LjEzSDczNS42MVY0MzUuNzJoMjEuOTVWNDgwLjNsNDIuMjYtNDQuNThoMjQuNTRsLTM5LjU0LDQyLjUzLDQxLjg2LDUyLjlIODAwLjkxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM3Mi40MSAtNDM0LjA4KSIvPgogICAgPHBvbHlnb24gY2xhc3M9ImFjY2VudCIgcG9pbnRzPSI1NS43IDU3LjQ0IDc4LjQ4IDExNy4zMyA4NC40NyA4Ni4yMSAxMTUuMzkgODAuNDEgNTUuNyA1Ny40NCIvPgogICAgPHBhdGggY2xhc3M9InByaW1hcnkiIGQ9Ik00MzIuNzUsNTEzYTMyLjQ5LDMyLjQ5LDAsMCwxLTguMTIsMWMtMTcsMC0yOS44Ni0xMi40LTI5Ljg2LTMwLjUzczEyLjgyLTMwLjU0LDI5Ljg2LTMwLjU0LDI5Ljg2LDEyLjQsMjkuODYsMzAuNTRhMzMuMTYsMzMuMTYsMCwwLDEtMi43OSwxMy42NGwyMC40LDcuODRhNDkuNTYsNDkuNTYsMCwwLDAsNC43NS0yMS40OGMwLTI4LjUtMjIuMjMtNDkuMzYtNTIuMjItNDkuMzZzLTUyLjIyLDIxLTUyLjIyLDQ5LjM2YzAsMjMuNDEsMTUsNDEuODIsMzcuMjgsNDcuNTUsNS4zOCwxLjM0LDE3LjIzLDMuNDIsMjkuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNzIuNDEgLTQzNC4wOCkiLz4KICAgIDxwb2x5bGluZSBjbGFzcz0icHJpbWFyeSIgcG9pbnRzPSI3OS4zIDYzLjAxIDExMi43MSA3NiA5My41IDU1LjA1Ii8+CiAgICA8cG9seWxpbmUgY2xhc3M9InByaW1hcnkiIHBvaW50cz0iNjAuMjYgNzguOTQgNzQuNjMgMTE0Ljc4IDQ5IDkxLjIzIi8+Cjwvc3ZnPg=="
									alt="powered by Auction Template and QUIKK Software"
									title="powered by Auction Template and QUIKK Software"
									height="24.3px"
									style={{ marginTop: `${24.3 / 4}px` }}
								/>
							</span>
						</td>
						<td align="left" style={{ padding: "5px" }}>
							<p
								style={{
									fontWeight: "normal",
									fontSize: "12px",
									textDecoration: "none",
									display: "inline-block !important",
									visibility: "visible",
									margin: 0,
								}}
							>
								powered by Auction Template
							</p>
							<p
								style={{
									fontWeight: "normal",
									fontSize: "10px",
									textDecoration: "none",
									display: "inline-block !important",
									visibility: "visible",
									margin: 0,
								}}
							>
								No cost. No Registration. Lightning fast.
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TemplateFooter;
