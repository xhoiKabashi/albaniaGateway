import GeneralTextTemplate from "@/components/organisms/general/GeneralTextTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Albania Gateway",
};

const privacyPolicyData = {
  mainTitle: "Privacy Policy",
  sections: [
    {
      title: "Introduction",
      para: "Welcome to Albania Gateway. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (https://albaniagateway.com/) and tell you about your privacy rights and how the law protects you.",
    },
    {
      title: "Data We Collect",
      para: "We do not collect any personal data directly from users. However, we use Google Analytics to track and report website traffic and user behavior, and Google AdSense to display personalized advertisements. These services may collect data as described below.",
    },
    {
      title: "Google Analytics",
      para: "Google Analytics is a web analytics service provided by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our website. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy.",
    },
    {
      title: "Google AdSense",
      para: "Google AdSense is an advertising service provided by Google that uses cookies to serve ads based on your prior visits to our website or other websites. Google’s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. Users may opt-out of personalized advertising by visiting Ads Settings: https://www.google.com/settings/ads.",
    },
    {
      title: "Cookies",
      para: "Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site. For more detailed information on how we use cookies and the purposes for which we use them, please see our Cookies Policy.",
    },
    {
      title: "Your Data Protection Rights",
      para: "Under certain circumstances, you have rights under data protection laws in relation to your personal data. If you wish to exercise any of the rights set out below, please contact us. These rights may include: \n- Request access to your personal data \n- Request correction of your personal data \n- Request erasure of your personal data \n- Object to processing of your personal data \n- Request restriction of processing your personal data \n- Request transfer of your personal data",
    },
    {
      title: "Contact Us",
      para: "If you have any questions or concerns about this privacy policy, please contact us at: momotech.al@gmail.com",
    },
  ],
};

export default function page() {
  return (
    <GeneralTextTemplate
      mainTitle={privacyPolicyData.mainTitle}
      sections={privacyPolicyData.sections}
    />
  );
}
