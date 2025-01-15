"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Account from "@/components/Account";
import Extract from "@/components/Extract";
import { BalanceProvider } from "@/context/BalanceContext";
import { TransactionProvider } from "@/context/TransactionContext";
import Menu from "@/components/Menu";
import useTransaction from "@/hooks/useTransaction";
import useBalance from "@/hooks/useBalance";
import Services from "@/components/Services";

const ServicesContent = () => {
    const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
    const { balance } = useBalance();

    return (
        <DashboardLayout
            menu={<Menu />}
            account={<Account saldo={balance} />}
            mainContent={<Services />}
            extract={
                <Extract
                    transactions={transactionHistory}
                    onEdit={handleEditTransaction}
                    onDelete={handleDeleteTransaction}
                />
            }
        />
    );
};

const ServicesLayout = () => {
    return (
        <TransactionProvider>
            <BalanceProvider>
                <ServicesContent />
            </BalanceProvider>
        </TransactionProvider>
    );
};

export default ServicesLayout;

