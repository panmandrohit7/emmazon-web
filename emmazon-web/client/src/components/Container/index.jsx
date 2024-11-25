const Container = ({ children, classes }) => {
  return (
    <div className={`${classes} px-4 xl:px-8 xl:container xl:mx-auto`}>{children}</div>
  );
};

export default Container;
