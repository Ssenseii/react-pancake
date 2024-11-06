
const PageTitle = ({ className, pageTitle = "This is the Page Title", pageDescription }) => {
	return (
		<div className={`page-title + ${className}`}>
			<h1>{pageTitle}</h1>
			<p>{pageDescription}</p>
		</div>
	);
};

export default PageTitle;
