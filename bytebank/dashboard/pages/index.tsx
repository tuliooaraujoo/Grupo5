"use client";

import DashboardLayout from "../../src/components/DashboardLayout";
import Menu from "../../src/components/Menu";
import Account from "../../src/components/Account";
import Extract from "../../src/components/Extract";
import useTransaction from "../../src/hooks/useTransaction"; 
import useAccount from "../../src/hooks/useAccount";  

interface PageLayoutProps {
  mainContent: React.ReactNode;
}

const PageLayout = ({ mainContent }: PageLayoutProps) => {
  const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
  const { account } = useAccount();

  return (
    <DashboardLayout
      menu={<Menu />}
      account={<Account saldo={account.balance} />}
      mainContent={mainContent}
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

export default PageLayout;
