"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Account from "@/components/Account";
import Extract from "@/components/Extract";
import { BalanceProvider } from "@/context/BalanceContext";
import { TransactionProvider } from "@/context/TransactionContext";
import Menu from "@/components/Menu";
import useTransaction from "@/hooks/useTransaction";
import useBalance from "@/hooks/useBalance";
import Cards from "@/components/Cards";

const CardsContent = () => {
    const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
    const { balance } = useBalance();

    return (
        <DashboardLayout
            menu={<Menu />}
            account={<Account saldo={balance} />}
            mainContent={<Cards />}
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

const CardsLayout = () => {
    return (
        <TransactionProvider>
            <BalanceProvider>
                <CardsContent />
            </BalanceProvider>
        </TransactionProvider>
    );
};

export default CardsLayout;

