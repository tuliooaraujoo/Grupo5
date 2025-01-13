"use client"

import Account from '@/components/Account';
import AccountSettings from '@/components/AccountSettings';
import Cards from '@/components/Cards';
import Extract from '@/components/Extract';
import FormTransaction from '@/components/Forms/FormTransaction';
import Header from '@/components/Header/InitialHeader';
import Investments from '@/components/Investments';
import Menu from '@/components/Menu';
import Services from '@/components/Services';
import { ModalProvider } from '@/context/ModalContext';
import useTransaction from '@/hooks/useTransaction';
import { useState } from 'react';

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('Investments');

    const { balance, transactionHistory, handleDeleteTransaction, handleEditTransaction } = useTransaction();

    const renderComponent = () => {
        switch (activeComponent) {
            case "Inicial":
            default: return (
                <div className="grid grid-cols-3 grid-rows-2 gap-6">
                    <Menu setActiveComponent={setActiveComponent} />
                    <Account saldo={balance} />
                    <Extract
                        transactions={transactionHistory}
                        onEdit={handleEditTransaction}
                        onDelete={handleDeleteTransaction}
                    />
                    <FormTransaction />
                </div>
            )
            case 'Investimentos':
                return (
                    <div>
                        <Menu setActiveComponent={setActiveComponent} />
                        <Account saldo={balance} />
                        <Investments />
                        <Extract
                            transactions={transactionHistory}
                            onEdit={handleEditTransaction}
                            onDelete={handleDeleteTransaction}
                        />
                    </div>
                )
            case 'Cartões':
                return (
                    <div>
                        <Menu setActiveComponent={setActiveComponent} />
                        <Account saldo={balance} />
                        <Cards />
                        <Extract
                            transactions={transactionHistory}
                            onEdit={handleEditTransaction}
                            onDelete={handleDeleteTransaction}
                        />
                    </div>
                )
            case 'Serviços':
                return (
                    <div>
                        <Menu setActiveComponent={setActiveComponent} />
                        <Account saldo={balance} />
                        <Services />
                        <Extract
                            transactions={transactionHistory}
                            onEdit={handleEditTransaction}
                            onDelete={handleDeleteTransaction}
                        />
                    </div>
                )
            case 'Configurações':
                return (
                    <div>
                        <Menu setActiveComponent={setActiveComponent} />
                        <AccountSettings />
                    </div>
                )
        }
    };

    return (
        <ModalProvider>
            <Header />
            <div className="bg-gray p-6">
                {renderComponent()}
            </div>

        </ModalProvider>
    );
};

export default Dashboard;

