import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col w-full h-full">
            <Header />
            <main className="h-full">{children}</main>
        </div>
    );
};

export default Layout;
