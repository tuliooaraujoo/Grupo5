// "use client";

// import DashboardLayout from "@/components/DashboardLayout";
// import Account from "@/components/Account";
// import FormTransaction from "@/components/Forms/FormTransaction";
// import Extract from "@/components/Extract";
// import { TransactionProvider } from "@/context/TransactionContext";
// import Menu from "@/components/Menu";
// import useTransaction from "@/hooks/useTransaction";
// import useAccount from "@/hooks/useAccount";
// import { AccountProvider } from "@/context/AccountContext";

// const InicialContent = () => {
//     const { transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();
//     const { account } = useAccount();

//     return (
//         <DashboardLayout
//             menu={<Menu />}
//             account={<Account saldo={account.balance} />}
//             mainContent={<FormTransaction />}
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

// const InicialLayout = () => {
//     return (
//         <TransactionProvider>
//             <AccountProvider>
//                 <InicialContent />
//             </AccountProvider>
//         </TransactionProvider>
//     );
// };

// export default InicialLayout;

"use client";

import PageLayout from "../PageLayout";
import AppProviders from "../AppProviders";
import FormTransaction from "@/components/Forms/FormTransaction";

const CardsLayout = () => (
    <AppProviders>
        <PageLayout mainContent={<FormTransaction />} />
    </AppProviders>
);

export default CardsLayout;