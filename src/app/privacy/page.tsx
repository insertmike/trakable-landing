import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl pt-32">
          <h1 className="text-3xl font-bold text-center mb-10">
            Privacy Policy
          </h1>

          <p className="text-gray-700 mb-8">
            This Privacy Policy (&ldquo;Policy&rdquo;) outlines how DexterLab
            LTD (&ldquo;the Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;) collects, uses, maintains, and discloses
            information collected from users (&ldquo;you,&rdquo;
            &ldquo;your,&rdquo; or &ldquo;user&rdquo;) of the Trakable mobile
            application (&ldquo;Application&rdquo; or &ldquo;App&rdquo;).
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Information Collection
            </h2>
            <p className="text-gray-700 mb-4">
              The Company may collect the following categories of information:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Anonymous Usage Data:</strong> The Application collects
                certain anonymous data regarding usage patterns, feature
                utilization, and performance metrics. This data is collected
                solely in an anonymized format and cannot be used to identify
                individual users.
              </li>
              <li>
                <strong>Device Information:</strong> The Application may collect
                technical information about the device on which it is installed,
                including but not limited to device type, operating system
                version, and technical specifications. This information is
                collected for the purpose of Application optimization and
                technical issue resolution.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Use of Collected Information
            </h2>
            <p className="text-gray-700 mb-4">
              The Company utilizes the collected information for the following
              purposes:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                Providing, maintaining, and improving the Application&apos;s
                functionality and user experience
              </li>
              <li>
                Identifying, diagnosing, and addressing technical issues and
                bugs
              </li>
              <li>
                Analyzing usage patterns to enhance Application performance and
                feature development
              </li>
              <li>
                Notifying users of Application updates, changes, or improvements
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              The Company shall retain anonymous usage data only for such
              duration as is reasonably necessary to fulfill the purposes
              outlined in this Policy, including Application improvement and
              technical issue resolution.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. International Data Transfer
            </h2>
            <p className="text-gray-700 mb-4">
              Anonymous information collected through the Application may be
              transferred to and processed on computers located outside of your
              state, province, country, or governmental jurisdiction, where data
              protection laws may differ from those in your jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Disclosure of Information
            </h2>
            <p className="text-gray-700 mb-4">
              The Company may disclose anonymous usage data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                To comply with a legal obligation, court order, or governmental
                request
              </li>
              <li>
                To protect and defend the rights, property, or safety of
                DexterLab LTD
              </li>
              <li>
                To investigate potential violations of the Terms of Use or
                illegal activities in connection with the Application
              </li>
              <li>
                To protect the safety and security of the Application&apos;s
                users or the public
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              The security of your information is of paramount importance to the
              Company. We implement appropriate technical and organizational
              measures to protect against unauthorized access, alteration,
              disclosure, or destruction of information. However, it must be
              acknowledged that no method of electronic transmission or storage
              is 100% secure, and the Company cannot guarantee absolute data
              security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              The Application is not directed toward individuals under the age
              of 13. The Company does not knowingly collect personally
              identifiable information from children under 13 years of age.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Amendments to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              The Company reserves the right to update or modify this Policy at
              any time. Users will be notified of any material changes through
              appropriate channels, and the &ldquo;Effective Date&rdquo; at the
              top of this Policy will be updated accordingly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For inquiries regarding this Privacy Policy, please contact:
            </p>
            <div className="pl-4 border-l-4 border-gray-200">
              <p className="text-gray-700">DexterLab LTD</p>
              <p className="text-gray-700">
                BULGARIA, Plovdiv, Trakia district, 59 Osvobozhdenie blvd., bl.
                172, ent. B, room 1
              </p>
              <p className="text-gray-700">Email: contact@dexterlab.site</p>
            </div>
          </section>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              See also our{" "}
              <Link href="/terms" className="text-green-600 hover:underline">
                Terms of Use
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
