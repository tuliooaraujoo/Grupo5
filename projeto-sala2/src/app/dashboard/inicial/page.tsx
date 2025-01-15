"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Account from "@/components/Account";
import FormTransaction from "@/components/Forms/FormTransaction";
import Extract from "@/components/Extract";
import { BalanceProvider } from "@/context/BalanceContext";
import { TransactionProvider } from "@/context/TransactionContext";
import Menu from "@/components/Menu";
import useTransaction from "@/hooks/useTransaction";
import useBalance from "@/hooks/useBalance";

const InicialContent = () => {
    const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
    const { balance } = useBalance();

    return (
        <DashboardLayout
            menu={<Menu />}
            account={<Account saldo={balance} />}
            mainContent={<FormTransaction />}
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

const InicialLayout = () => {
    return (
        <TransactionProvider>
            <BalanceProvider>
                <InicialContent />
            </BalanceProvider>
        </TransactionProvider>
    );
};

export default InicialLayout;

