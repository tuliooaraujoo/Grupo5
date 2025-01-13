interface DashboardLayoutProps {
    menu?: React.ReactNode;
    account?: React.ReactNode;
    mainContent?: React.ReactNode;
    extract?: React.ReactNode;
}

const DashboardLayout = ({ menu, account, mainContent, extract }: DashboardLayoutProps) => {
    return (
        <div className="grid grid-cols-6 grid-rows-1 gap-6 max-md:flex max-md:flex-col">
            <div className="col-start-1 col-end-1">
                {menu}
            </div>
            <div className="col-start-2 col-end-5">
                {account}
            </div>
            <div className="col-start-2 col-end-5 row-start-2">
                {mainContent}
            </div>
            <div className="col-start-5 col-end-7">
                {extract}
            </div>
        </div>
    );
};

export default DashboardLayout;
