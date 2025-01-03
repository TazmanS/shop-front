import { FC } from "react";

type LayoutType = {
  children: React.ReactNode;
};

const FullLayout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <nav>NAV</nav>
      {children}
      <footer>FOOTER</footer>
    </>
  );
};

export default FullLayout;
