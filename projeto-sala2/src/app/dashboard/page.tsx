"use client"

import Account from '@/components/Account';
import AccountSettings from '@/components/AccountSettings';
import Cards from '@/components/Cards';
import Extract from '@/components/Extract';
import Header from '@/components/Header/InitialHeader';
import Investments from '@/components/Investments';
import Menu from '@/components/Menu';
import { ModalProvider } from '@/context/ModalContext';
import useTransaction from '@/hooks/useTransaction';
import { useState } from 'react';

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('Investments');

    const { balance, transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Investments':
                return <Investments />;
            case 'AccountSettings':
                return <AccountSettings />;
            case 'Cards':
            default:
                return <Cards />;
        }
    };

    return (
        <ModalProvider>
            <Header />
            <div className="grid grid-cols-3 grid-rows-4 gap-4">
                <div className="col-start-1 row-start-2">
                    <Menu setActiveComponent={setActiveComponent} />
                </div>
                <div className="col-span-1 row-span-1 row-start-2" >
                    <Account saldo={balance} />
                </div>
                <div className="col-span-1 row-span-4 row-start-1">
                    <Extract
                        transactions={transactionHistory}
                        onEdit={handleEditTransaction}
                        onDelete={handleDeleteTransaction}
                    />
                </div>
                <div className="variable-component col-span-1 row-span-1 row-start-3">
                    {renderComponent()}
                </div>
            </div>

        </ModalProvider>
    );
};

export default Dashboard;

