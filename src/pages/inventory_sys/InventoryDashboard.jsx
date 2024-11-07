import React from "react";
import PageTitle from "../../components/global/PageTitle";

const InventoryDashboard = () => {
	return (
		<div className="inventory__dashboard">
			<div className="row">
				<PageTitle
					pageTitle="Pancake: Inventory Management System"
					pageDescription="Unlock Smarter Inventory Management: Real-time Insights, Seamless Control."
				></PageTitle>
			</div>
			<br />
			<div className="row">
				<div className="card col-xs-12 col-md-6 col-lg-2">
					<h3>Total Inventory Value</h3>
					<p>24.514 MAD</p>
				</div>
			</div>
		</div>
	);
};

export default InventoryDashboard;
