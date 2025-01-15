"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Account from "@/components/Account";
import Extract from "@/components/Extract";
import { BalanceProvider } from "@/context/BalanceContext";
import { TransactionProvider } from "@/context/TransactionContext";
import Menu from "@/components/Menu";
import useTransaction from "@/hooks/useTransaction";
import useBalance from "@/hooks/useBalance";
import Investments from "@/components/Investments";

const InvestmentsContent = () => {
    const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
    const { balance } = useBalance();

    return (
        <DashboardLayout
            menu={<Menu />}
            account={<Account saldo={balance} />}
            mainContent={<Investments />}
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

const InvestmentsLayout = () => {
    return (
        <TransactionProvider>
            <BalanceProvider>
                <InvestmentsContent />
            </BalanceProvider>
        </TransactionProvider>
    );
};

export default InvestmentsLayout;

