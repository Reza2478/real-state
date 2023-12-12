import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  const style = { minHeight: "700px" };
  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
