import React from "react"
import Helmet from "react-helmet"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import styled from "styled-components"

export default () => {
  const PrivacyBody = styled.div`
    padding-bottom: 50px;

    p {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    @media only screen and (min-width: 375px) {
      p {
        font-size: 1.6rem;
      }
    }

    @media only screen and (min-width: 1500px) {
      padding-bottom: 75px;
      p {
        font-size: 1.8rem;
      }
    }
  `

  return (
    <Layout>
      <Helmet>
        <title>Privacy Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Masthead>
        <MastheadTitle mastheadTitle="Privacy" />
        <MastheadBody>
          <p>
            Rooster Design has made every effort to ensure the accuracy of the
            information contained in this site. Whilst every effort is made to
            produce up to date products and specifications, this site should not
            be regarded as an infallible guide to our products and services, nor
            does it constitute an offer for the sale of any particular product
            or service.
          </p>
        </MastheadBody>
      </Masthead>
      <PageContent>
        <PrivacyBody className="container">
          <h4>Copyright</h4>
          <p>
            All rights, including copyright and database right, in the website
            and its contents, are owned by or licensed to Rooster Design, or
            otherwise used by Rooster Design as permitted by applicable law or
            the copyright holder. You may not copy, reproduce, republish,
            download, post, broadcast or transmit any text, images, graphic,
            logo, button, icon, image and their selection and arrangement
            thereof, and any underlying source code and software, for any
            commercial or public purpose without prior written permission from
            Rooster Design or the copyright holder.
          </p>

          <p>
            You may not adapt, alter or create any of the material or
            information in this site or use it for any other purpose other than
            for your personal non-commercial use. You agree to use this site
            only for lawful purposes.
          </p>
          <p>
            Rooster Design reserves the right to use for its own purposes any
            material submitted to the site, including text and images, either on
            the site or in any other form, including for publicity purposes.
            Rooster Design reserves the right to monitor submissions to the site
            and to edit or reject any submissions.
          </p>
          <h4>Disclaimer</h4>
          <p>
            We try to ensure that information on our site is accurate, complete
            and up-to-date. In using this site, however, you agree to be bound
            by the Terms &amp; Conditions, which take effect on the date when
            you first use the site.
          </p>
          <p>
            Without prejudice to your statutory rights, the site and all
            information, text, names, images, pictures, logos, links and icons
            and other materials (without limitation) are provided 'AS IS' and on
            an 'IS AVAILABLE' basis without representation warranty or
            endorsement, express or implied. In particular, we do not warrant or
            represent the accuracy or completeness of information provided on
            this site nor do we guarantee that use of this site will be
            uninterrupted or error-free, or that the site and its servers are
            free of computer viruses or bugs.
          </p>
          <p>
            In no event will Rooster Design be liable to any person for any
            damage or loss that may arise from the use of any information
            contained in our site or products displayed on our site, including,
            without limitation, indirect or consequential damages, or any
            damages whatsoever arising from use or loss of use, data, or
            profits, whether in action of contract, negligence or other tortious
            action, arising out of or in connection with the use of the site.
          </p>
          <p>
            Notwithstanding anything else in these Terms &amp; Conditions, we
            will not be liable for claims relating to the functionality or
            availability of this site.
          </p>
          <h4>Trademarks</h4>

          <p>
            All names, images, logos identifying Rooster Design are proprietary
            marks of Rooster Design. All third party brand, product, service and
            company names contained on this site are the trademarks, service
            marks and trade names of their respective holders. Rooster Design
            does not give permission for their use by any person other than the
            holders. Any such use may constitute an infringement of the holders'
            rights.
          </p>
          <h4>External links</h4>

          <p>
            Rooster Design does not represent, warrant, endorse or hold
            responsibility over any external sites that may be linked to and
            from this site. Any external site that you visit by clicking through
            a link on this site is outside the control of Rooster Design and you
            visit entirely at your own risk.
          </p>
          <h4>Software disclaimer</h4>

          <p>
            The software downloads from this site have been thoroughly scanned
            and tested at all stages of production, but - as with all new
            software - we still recommend that you run a virus checker before
            use. We also recommend that you have an up-to-date backup of your
            hard disk before using the software. Rooster Design cannot accept
            responsibility for any disruption, damage and/or loss of data on
            your data or computer system that may occur while using the
            software. Consult your network administrator before installing any
            software on a networked computer.
          </p>
          <h4>Jurisdiction</h4>

          <p>
            These Terms &amp; Conditions shall be governed by and construed in
            accordance with the laws of England and Wales. Disputes arising here
            shall be exclusively subject to the jurisdiction of the courts of
            England and Wales.
          </p>
          <p>
            If any of these Terms should be determined to be illegal, invalid or
            otherwise unenforceable by reason of the laws of any state or
            country in which these Terms are intended to be effective, it shall
            be severed and deleted from this clause. All other Terms of Use and
            Terms &amp; Conditions shall remain in full force and continue to be
            binding and enforceable.
          </p>
          <p>
            Rooster Design reserves the right to change any of its terms and
            conditions at any time by posting changes online.
          </p>
          <p>
            If you do not accept these terms in full, you must stop using this
            website immediately.
          </p>
          <h4>Do we use cookies?</h4>

          <p>
            Yes. Cookies are small files that a site or its service provider
            transfers to your computers hard drive through your Web browser (if
            you allow) that enables the sites or service providers systems to
            recognize your browser and capture and remember certain information
          </p>
          <p>
            We use cookies to compile aggregate data about site traffic and site
            interaction so that we can offer better site experiences and tools
            in the future.
          </p>
          <h4>What are cookies?</h4>

          <p>
            Cookies are small text files which a website may put on your
            computer or mobile device when you first visit a site or page. The
            cookie will help the website, or another website, to recognise your
            device the next time you visit. Web beacons or other similar files
            can also do the same thing. We use the term "cookies" in this policy
            to refer to all files that collect information in this way.
          </p>
          <p>
            There are many functions cookies serve. For example, they can help
            us to remember your username and preferences, analyse how well our
            website is performing, or even allow us to recommend content we
            believe will be most relevant to you.
          </p>
          <p>
            Certain cookies contain personal information – for example, if you
            click to "remember me" when logging in, a cookie will store your
            username. Most cookies won't collect information that identifies
            you, and will instead collect more general information such as how
            users arrive at and use our websites, or a user's general location.
          </p>
          <h4>What are the advantages of cookies?</h4>

          <p>
            A cookie contains information linked from a web browser (the user)
            to a specific web server (the website). If a web browser accesses
            that web server again, the web server can read from and react to
            that information. Cookies ensure a user-friendly experience and
            support safety efforts for many online offers and services, e.g.
            language preferences, privacy settings, shopping baskets of online
            shops or relevant adverts.
          </p>
          <h4>Do cookies pose a security or safety risk?</h4>

          <p>
            No, cookies do not pose any safety or security risks. They are not
            'active', executable, software. They do not spy on data that is
            stored in the computer nor can they carry a virus.
          </p>
          <h4>Is my privacy protected?</h4>

          <p>
            Usually cookies contain only a generic browser recognition or are
            associated with anonymous data. When cookies are set, the user is
            informed about it (typically in the privacy section of a website or
            in the terms of use or other user contract). If websites use cookies
            to collect personal data, data protection laws require those
            websites to inform users about the collection of personal data and
            the purpose of such collection.
          </p>
          <h4>Can I control cookies?</h4>

          <p>
            Yes, browsers offer cookie management setting tools (please see some
            help below). Browser settings can be set to require the user's
            confirmation for each cookie that might be stored on his / her PC.
            You can also set the browser to accept cookies only from specific
            web sites (e.g. your favourite news site). Browsers can also enable
            users to delete specific cookies. It is even possible to set a
            browser to reject all cookies. Note that choosing to disable all
            cookies could significantly affect your web browsing experience
            because many Internet services rely on cookies.
          </p>
          <h4>How can I manage or remove cookies?</h4>

          <p>
            <strong>Google Chrome</strong>
            <br />
            Open your browser. Click on the icon representing "Tools" at the
            right of the window and choose Options. Click the "Under the Hood"
            tab and Click Content Settings in the Privacy section. Choose your
            preferred settings in the Cookies tab.
          </p>
          <p>
            For newer versions of Chrome, click on the icon representing "Tools"
            at the right of the window and choose Settings. Click the "Show
            advanced settings…" " at the bottom and Click Content Settings in
            the Privacy section. Choose your preferred settings in the Cookies
            tab.
          </p>
          <p>
            <strong>Internet Explorer</strong>
            <br />
            Open your browser. Click on Tools at the right of the window and
            choose Internet Options. Click on the Privacy tab. You can choose
            between different levels of automatic cookies management or choose
            to do it manually by clicking on Advanced.
          </p>
          <p>
            <strong>Mozilla Firefox</strong>
            <br />
            Open your browser. Click on Tools and choose Options. Click on the
            Privacy tab. In the History section you can choose between different
            scenarios (Remember history/ Never remember history /Use custom
            settings for history) and define exceptions.
          </p>
          <p>
            <strong>Opera</strong>
            <br />
            Open your browser. Go to the main menu and click on Settings. Choose
            Preferences and click on the Advanced tab. Choose the Cookies tab
            and define your preferred settings.
          </p>
          <p>
            <strong>Safari</strong>
            <br />
            Open your browser. Click on the menu icon on the far right. Choose
            Preferences and click on the Security tab. Define your preferred
            settings.
          </p>
          <p>
            To find out more about managing cookies, including how to see what
            cookies have been stored and how to manage and delete them, visit{" "}
            <a
              href="http://www.allaboutcookies.org/manage-cookies/"
              title="All about cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.allaboutcookies.org/manage-cookies/
            </a>
          </p>
          <p>
            Please remember that if you do choose to disable cookies, you may
            find that certain sections of our website do not work properly.
          </p>
          <h4>Can I disable a cookie?</h4>

          <p>
            Yes, some browsers will let you block just third party cookies
            (these are cookies placed on your browser by an entity other than
            the particular website's owner- e.g., an advertising partner) or
            will allow the use of settings to block only cookies that do not
            meet your privacy preferences. However, most Websites use cookies in
            order to enhance a user-friendly experience and the safety of their
            online offers, e.g. the shopping basket of an online shop or the
            display of a relevant advertisement. You can choose to disable all
            cookies but this could significantly affect your web browsing
            experience.
          </p>
          <h4>What is the lifespan of a cookie?</h4>

          <p>
            Cookies are managed by web servers. The lifespan of a cookie can
            vary significantly, depending on its purpose. Some cookies are used
            only during an online session ('session cookies') and are not
            retained once you leave a website, and some cookies are retained and
            used each time you visit a website ('permanent cookies'). However,
            cookies can be deleted by a user at any given time through the
            browser settings.
          </p>
          <p>
            What kinds of cookies exist? There are two types of cookies:
            'session cookies', which are automatically deleted after each
            session and 'permanent cookies', which have a longer life-span. Both
            kinds of cookies can be deleted at any given time by the user.
          </p>
          <h4>What are third party cookies?</h4>

          <p>
            Some content on a Website can be placed by a third party provider
            (e.g. a news box ticker, a video or an advertisement). Those third
            parties can also place cookies through a Website and they are called
            'third party' cookies because they are not the Website owner. Third
            party providers must of course respect the applicable legislation
            and typically the policies of the Website owner. See also question
            "Can I control cookies?".
          </p>
          <h4>Do cookies fill up my hard disk?</h4>

          <p>
            No, cookies are small text files and require very little storage.
          </p>
          <h4>What are flash cookies (or LSOs)?</h4>

          <p>
            'Flash cookies', referred to also as Local Shared Objects (LSOs),
            operate in a similar way to cookies and store preferred settings of
            players like Flash or Silverlight. In most cases, LSOs cannot be
            managed by browsers but through special manager tools:
          </p>
          <p>
            <strong>Adobe Settings Manager for LSOs using Flash Player</strong>
          </p>
          <p>
            <a
              href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager.html"
              title="Macromedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager.html
            </a>
          </p>
          <p>
            The "Global Storage Settings panel" will allow you to choose how
            much disk space websites can use to store information for websites
            you have not visited yet (zero to unlimited). If you want to change
            the settings for the websites you have already visited, go to
            "Website Storage Settings Panel". You can choose the level of
            information storage for a website or delete the website so that, if
            you visit it again, it will use the global settings you have set
            under the "Global Storage Settings panel".
          </p>
          <p>
            <strong>
              Microsoft Settings Manager for LSOs using Silverlight
            </strong>
          </p>
          <p>
            <a
              href="https://www.microsoft.com/GetSilverlight/resources/documentation/AppStorage.aspx"
              title="Microsoft"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.microsoft.com/GetSilverlight/resources/documentation/AppStorage.aspx
            </a>
          </p>
          <p>
            Open the Silverlight application. Click the Application Storage tab
            to see which Web sites are currently using application storage.
          </p>
          <p>
            Add-on extensions have also have been created by the Firefox Web
            browser (Click&amp;Clean, Objection, BetterPrivacy).
          </p>
          <h4>How do we use cookies?</h4>

          <p>
            <strong>Cookie Notice</strong>
          </p>
          <p>
            <strong>Cookie Name:</strong> CookieNotice
          </p>
          <p>
            <strong>What this cookie does:</strong> When you visit this site at
            the top will be a message displayed informing you that this site
            uses cookies. There is also a button 'Don't show me this message
            again' which when clicked will hide this message bar and not show it
            to you again.
          </p>
          <p>
            In order to remember that you have clicked this button, a cookie
            will be stored on your computer. This is purely to enhance your
            experience and no other information is stored.
          </p>
          <p>
            <strong>Third Party Cookies</strong>
          </p>
          <p>
            <strong>Google Analytics</strong>
          </p>
          <p>
            <strong>Cookie Name:</strong> __utma, __utmb, __utmc, __utmz
          </p>
          <p>
            <strong>What this Cookie does:</strong> These cookies are used to
            collect information about how visitors use our site. We use the
            information to compile reports and to help us improve the site.
          </p>
          <p>
            The information collected is anonymous and does not identify a
            visitor. The data includes the number of visitors to the site, where
            visitors have come from and the pages they visited.
          </p>
          <p>Select this link for an overview of privacy at Google.</p>
          <p>
            To opt out of being tracked by Google Analytics across all websites
            visit.
          </p>
          <h4>More Information</h4>

          <p>
            More detail on how businesses use cookies is available at{" "}
            <a
              href="http://www.allaboutcookies.org"
              title="All about cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
        </PrivacyBody>
      </PageContent>
    </Layout>
  )
}
