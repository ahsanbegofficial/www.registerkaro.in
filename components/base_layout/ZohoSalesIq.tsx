import Script from 'next/script';
import React, { useEffect } from 'react';

const ZohoSalesIQ: React.FC = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.id = 'zsiqchat';
  //   script.innerHTML = `
  //   var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq2adac5d538a6a933309158387ce56a2fc812ca91bf8f4812b078355d6e4897ab551d2ca06118714c681af9c0497062be", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
  //   `;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <>
      <Script id="zsiqchat" dangerouslySetInnerHTML={{
        __html: `
        var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq2adac5d538a6a933309158387ce56a2fc812ca91bf8f4812b078355d6e4897ab551d2ca06118714c681af9c0497062be", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
          `,
      }}
      />
    </>
  );
};

export default ZohoSalesIQ;