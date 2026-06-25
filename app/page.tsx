import Script from "next/script";
import HeroSection from "@/components/home/HeroSection";
import DivisionsSection from "@/components/home/DivisionsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '658754353715558');
        fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=658754353715558&ev=PageView&noscript=1"
          alt="facebook pixel"
        />
      </noscript>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WEVSM7ZB4K"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WEVSM7ZB4K');`}
      </Script>

      <HeroSection />
      <DivisionsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <IndustriesStrip />
      <FAQSection />
    </>
  );
}
