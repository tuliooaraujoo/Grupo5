// "use client";

// import DashboardLayout from "@/components/DashboardLayout";
// import Account from "@/components/Account";
// import Extract from "@/components/Extract";
// import { TransactionProvider } from "@/context/TransactionContext";
// import Menu from "@/components/Menu";
// import useTransaction from "@/hooks/useTransaction";
// import Investments from "@/components/Investments";
// import useAccount from "@/hooks/useAccount";
// import { AccountProvider } from "@/context/AccountContext";

// const InvestmentsContent = () => {
//     const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
//     const { account } = useAccount();

//     return (
//         <DashboardLayout
//             menu={<Menu />}
//             account={<Account saldo={account.balance} />}
//             mainContent={<Investments />}
//             extract={
//                 <Extract
//                     transactions={transactionHistory}
//                     onEdit={handleEditTransaction}
//                     onDelete={handleDeleteTransaction}
//                 />
//             }
//         />
//     );
// };

// const InvestmentsLayout = () => {
//     return (
//         <TransactionProvider>
//             <AccountProvider>
//                 <InvestmentsContent />
//             </AccountProvider>
//         </TransactionProvider>
//     );
// };

// export default InvestmentsLayout;

"use client";

import PageLayout from "../PageLayout";
import AppProviders from "../AppProviders";
import Investments from "@/components/Investments";

const CardsLayout = () => (
    <AppProviders>
        <PageLayout mainContent={<Investments />} />
    </AppProviders>
);

export default CardsLayout;
