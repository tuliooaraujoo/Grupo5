"use client";

import { BalanceProvider } from "@/context/BalanceContext";
import { TransactionProvider } from "@/context/TransactionContext";
import Menu from "@/components/Menu";
import AccountSettings from "@/components/AccountSettings";
import AccountHeader from "@/components/Header/AccountHeader";

const SettingsContent = () => {

    return (
        <div className="flex flex-col gap-6">
            <AccountHeader />
            <div className="grid grid-cols-12 gap-6 px-28 max-lg:flex max-lg:px-14 max-lg:flex-col max-sm:px-6">
                <div className="col-start-1 col-end-3"><Menu /></div>
                <div className="col-start-3 col-end-12"><AccountSettings /></div>
            </div>
        </div>
    );
};

const SettingsLayout = () => {
    return (
        <TransactionProvider>
            <BalanceProvider>
                <SettingsContent />
            </BalanceProvider>
        </TransactionProvider>
    );
};

export default SettingsLayout;

