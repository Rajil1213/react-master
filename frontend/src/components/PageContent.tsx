import classes from "./PageContent.module.css";

type PageContentProps = {
  title: string;
};

function PageContent({
  title,
  children,
}: React.PropsWithChildren<PageContentProps>) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
