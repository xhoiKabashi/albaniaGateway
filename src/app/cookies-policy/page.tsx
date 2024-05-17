import GeneralTextTemplate from "@/components/organisms/general/GeneralTextTemplate";

const cookieDisclaimerData = {
  mainTitle: "Cookies Disclaimer",
  sections: [
    {
      title: "What Are Cookies?",
      para: "Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.",
    },
    {
      title: "How We Use Cookies",
      para: "We use cookies to improve your experience on our site, including keeping you signed in, understanding how you use our site, and personalizing content and ads. Specifically, we use Google Analytics to track website traffic and user behavior, and Google AdSense to display personalized advertisements.",
    },
    {
      title: "Google Analytics",
      para: "Google Analytics is a web analytics service provided by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy.",
    },
    {
      title: "Google AdSense",
      para: "Google AdSense is an advertising service provided by Google that uses cookies to serve ads based on your prior visits to our site or other sites on the internet. Google’s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. Users may opt-out of personalized advertising by visiting Ads Settings: https://www.google.com/settings/ads.",
    },
    {
      title: "Managing Cookies",
      para: "You can manage your cookie preferences through your web browser settings. Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can obtain up-to-date information about blocking and deleting cookies via these links: \n- [Chrome](https://support.google.com/chrome/answer/95647?hl=en) \n- [Firefox](https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences) \n- [Internet Explorer](https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies) \n- [Safari](https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac)",
    },
    {
      title: "Contact Us",
      para: "If you have any questions about our use of cookies or other technologies, please contact us at:momotech.al@gmail.com",
    },
  ],
};

export default function page() {
  return (
    <GeneralTextTemplate
      mainTitle={cookieDisclaimerData.mainTitle}
      sections={cookieDisclaimerData.sections}
    />
  );
}
