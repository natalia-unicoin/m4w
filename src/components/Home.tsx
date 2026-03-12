'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import FourWays from '@/components/FourWays';
import HowItWorks from '@/components/HowItWorks';
import StatsSection from '@/components/StatsSection';
import FoundingMember from '@/components/FoundingMember';
import WhyThisMomentMatters from '@/components/WhyThisMomentMatters';
import LedBySection from '@/components/LedBySection';
import JoinFlow from '@/components/JoinFlow';

const Home = () => {
    return (
        <>
            <Hero />
            <FoundingMember />
            <StatsSection />
            <FourWays />
            <HowItWorks />
            <WhyThisMomentMatters />
            <LedBySection />
            <JoinFlow />
        </>
    );
};

export default Home;
