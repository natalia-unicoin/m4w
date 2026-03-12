'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { ModalContextType } from '@/types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isManifestoOpen, setIsManifestoOpen] = useState(false);
    const [isMasterclassOpen, setIsMasterclassOpen] = useState(false);

    const openJoinModal = () => setIsJoinModalOpen(true);
    const closeJoinModal = () => setIsJoinModalOpen(false);
    const openManifesto = () => setIsManifestoOpen(true);
    const closeManifesto = () => setIsManifestoOpen(false);
    const openMasterclass = () => setIsMasterclassOpen(true);
    const closeMasterclass = () => setIsMasterclassOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isJoinModalOpen,
                isManifestoOpen,
                isMasterclassOpen,
                openJoinModal,
                closeJoinModal,
                openManifesto,
                closeManifesto,
                openMasterclass,
                closeMasterclass,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
