// "use client";

// import DashboardLayout from "@/components/DashboardLayout";
// import Account from "@/components/Account";
// import Extract from "@/components/Extract";
// import { TransactionProvider } from "@/context/TransactionContext";
// import Menu from "@/components/Menu";
// import useTransaction from "@/hooks/useTransaction";
// import Services from "@/components/Services";
// import useAccount from "@/hooks/useAccount";
// import { AccountProvider } from "@/context/AccountContext";

// const ServicesContent = () => {
//     const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
//     const { account } = useAccount();

//     return (
//         <DashboardLayout
//             menu={<Menu />}
//             account={<Account saldo={account.balance} />}
//             mainContent={<Services />}
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

// const ServicesLayout = () => {
//     return (
//         <TransactionProvider>
//             <AccountProvider>
//                 <ServicesContent />
//             </AccountProvider>
//         </TransactionProvider>
//     );
// };

// export default ServicesLayout;

"use client";

import PageLayout from "../PageLayout";
import AppProviders from "../AppProviders";
import Services from "@/components/Services";

const CardsLayout = () => (
    <AppProviders>
        <PageLayout mainContent={<Services />} />
    </AppProviders>
);

export default CardsLayout;
