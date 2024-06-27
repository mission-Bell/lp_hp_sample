import HeaderMenu from "@/components/headerMenu/headerMenu";
import FooterMenu from "@/components/footerMenu/footerMenu";
const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="text-amber-950 bg-gray-50">
        <HeaderMenu />
        <main className=" overflow-auto">{children}</main>
        <FooterMenu />
    </div>
  )
}

export default MainLayout