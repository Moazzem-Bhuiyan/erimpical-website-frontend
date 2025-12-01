'use client';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { useGetTermsAndConditionsPrivecyQuery } from '@/redux/api/termsandPrivecyApi';
import React from 'react';

const TermsAndCondition = () => {
  const { data } = useGetTermsAndConditionsPrivecyQuery();
  return (
    <ResponsiveContainer className={'!mx-auto  '}>
      <div
        className="pro-description text-sm text-foreground"
        dangerouslySetInnerHTML={{
          __html: data?.data?.termsAndConditions || 'Terms And Conditions not found',
        }}
      />
    </ResponsiveContainer>
  );
};

export default TermsAndCondition;
