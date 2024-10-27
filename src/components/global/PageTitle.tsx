import { FC } from "react";

interface PageTitle {
	pageTitle: string;
	className?: string;
	pageDescription?: string;
}

const PageTitle: FC<PageTitle> = ({
	className,
	pageTitle = "This is the Page Title",
	pageDescription,
}) => {
	return (
		<div  className={`page-title + ${className}`}>
				<h1>{pageTitle}</h1>
				<p>{pageDescription}</p>
			
		</div>
	);
};

export default PageTitle;
