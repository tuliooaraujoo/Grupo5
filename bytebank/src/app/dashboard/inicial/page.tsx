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