"use client";

import Account from "@/components/Account";
import AccountSettings from "@/components/AccountSettings";
import Cards from "@/components/Cards";
import DashboardLayout from "@/components/DashboardLayout";
import Extract from "@/components/Extract";
import FormTransaction from "@/components/Forms/FormTransaction";
import AccountHeader from "@/components/Header/AccountHeader";
import Investments from "@/components/Investments";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import { TransactionProvider } from "@/context/TransactionContext";
import useBalance from "@/hooks/useBalance";
import useTransaction from "@/hooks/useTransaction";
import { useState } from "react";

const DashboardContent = ({ activeComponent, setActiveComponent }: { 
    activeComponent: string; 
    setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
    const { balance } = useBalance();

    const renderComponent = () => {
        const menu = <Menu setActiveComponent={setActiveComponent} />;
        const account = <Account saldo={balance} />;
        const extract = (
            <Extract
                transactions={transactionHistory}
                onEdit={handleEditTransaction}
                onDelete={handleDeleteTransaction}
            />
        );

        switch (activeComponent) {
            case "Inicial":
            default:
                return (
                    <DashboardLayout
                        menu={menu}
                        account={account}
                        mainContent={<FormTransaction />}
                        extract={extract}
                    />
                );
            case "Investimentos":
                return (
                    <DashboardLayout
                        menu={menu}
                        account={account}
                        mainContent={<Investments />}
                        extract={extract}
                    />
                );
            case "Cartões":
                return (
                    <DashboardLayout
                        menu={menu}
                        account={account}
                        mainContent={<Cards />}
                        extract={extract}
                    />
                );
            case "Serviços":
                return (
                    <DashboardLayout
                        menu={menu}
                        account={account}
                        mainContent={<Services />}
                        extract={extract}
                    />
                );
            case "Configurações":
                return (
                    <div className="grid grid-cols-6 grid-rows-1 gap-6 max-md:flex max-md:flex-col">
                        <div className="col-start-1 col-end-1 row-start-1">{menu}</div>
                        <div className="col-start-2 col-end-6 row-start-1">
                            <AccountSettings />
                        </div>
                    </div>
                );
        }
    };

    return <div className="bg-gray p-6">{renderComponent()}</div>;
};

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('Inicial');

    return (
        <TransactionProvider>
            <AccountHeader setActiveComponent={setActiveComponent} />
            <DashboardContent 
                activeComponent={activeComponent} 
                setActiveComponent={setActiveComponent} 
            />
        </TransactionProvider>
    );
};

export default Dashboard;