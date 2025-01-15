"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Account from "@/components/Account";
import Extract from "@/components/Extract";
import { TransactionProvider } from "@/context/TransactionContext";
import Menu from "@/components/Menu";
import useTransaction from "@/hooks/useTransaction";
import Cards from "@/components/Cards";
import useAccount from "@/hooks/useAccount";
import { AccountProvider } from "@/context/AccountContext";

const CardsContent = () => {
    const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
    const { account } = useAccount();

    return (
        <DashboardLayout
            menu={<Menu />}
            account={<Account saldo={account.balance} />}
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
            <AccountProvider>
                <CardsContent />
            </AccountProvider>
        </TransactionProvider>
    );
};

export default CardsLayout;

