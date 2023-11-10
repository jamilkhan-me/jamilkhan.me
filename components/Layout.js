import Footer from "./Footer";
import Header from "./Header";
import SectionContainer from "./SectionContainer";

function Layout({ children }) {
  return (
    <SectionContainer>
      <div className="flex h-auto flex-col justify-between">
        <Header />
        <main className="mb-72">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
}

export default Layout;
