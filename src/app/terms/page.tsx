import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TermsOfUse = () => {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl pt-32">
          <h1 className="text-3xl font-bold text-center mb-10">Terms of Use</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              This document establishes the Terms of Use (&ldquo;Terms&rdquo;)
              governing your use of Trakable (hereinafter referred to as the
              &ldquo;Application&rdquo; or &ldquo;App&rdquo;). The Application
              is provided by DexterLab LTD, a company registered under the laws
              of Bulgaria, with its registered address at: BULGARIA, Plovdiv,
              Trakia district, 59 Osvobozhdenie blvd., bl. 172, ent. B, room 1
              (hereinafter referred to as &ldquo;DexterLab LTD,&rdquo;
              &ldquo;the Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;).
            </p>
            <p className="text-gray-700 mb-4">
              By downloading, installing, accessing, or utilizing the
              Application, you acknowledge that you have read, understood, and
              agree to be bound by these Terms. If you do not agree to all the
              terms and conditions contained herein, you are expressly
              prohibited from using the Application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Description of Application
            </h2>
            <p className="text-gray-700 mb-4">
              The Application constitutes a digital platform designed to enable
              users to track, monitor, and manage their daily activities, tasks,
              and productivity metrics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. User Obligations and Conduct
            </h2>
            <p className="text-gray-700 mb-4">
              The user hereby agrees to utilize the Application solely for
              lawful purposes and in compliance with these Terms and all
              applicable laws and regulations. The user expressly agrees to
              refrain from:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                Utilizing the Application in any manner that violates applicable
                local, national, or international law or regulation
              </li>
              <li>
                Attempting to gain unauthorized access to any portion of the
                Application, other accounts, or any other systems or networks
                connected to the Application
              </li>
              <li>
                Transmitting any malicious code, viruses, or similar disruptive
                items, or interfering with the Application&apos;s functionality
              </li>
              <li>
                Misrepresenting or falsely stating any affiliation with any
                person or entity
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 mb-4">
              The Application, including but not limited to its original
              content, features, functionality, code, design, and structure, is
              and shall remain the exclusive property of DexterLab LTD and its
              licensors. The Application is protected by copyright, trademark,
              and other intellectual property laws. Any unauthorized use of the
              Application may violate such laws and these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
            <p className="text-gray-700 mb-4">
              DexterLab LTD reserves the right to terminate or suspend your
              access to the Application immediately, without prior notice or
              liability, for any reason whatsoever, including but not limited to
              a breach of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by applicable law, in no event
              shall DexterLab LTD, its directors, employees, partners, agents,
              suppliers, or affiliates be liable for any indirect, incidental,
              special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the Application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Modifications to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              DexterLab LTD reserves the right, at its sole discretion, to
              modify or replace these Terms at any time. If a revision is deemed
              material, the Company shall endeavor to provide at least thirty
              (30) days&apos; notice prior to any new Terms taking effect. The
              continued use of the Application after the posting of any modified
              Terms constitutes your acceptance of the changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of Bulgaria, without regard to its conflict of law
              provisions. Any disputes arising under or in connection with these
              Terms shall be subject to the exclusive jurisdiction of the courts
              located in Bulgaria.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              9. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For inquiries regarding these Terms, please contact:
            </p>
            <div className="pl-4 border-l-4 border-gray-200 mb-4">
              <p className="text-gray-700">DexterLab LTD</p>
              <p className="text-gray-700">
                BULGARIA, Plovdiv, Trakia district, 59 Osvobozhdenie blvd., bl.
                172, ent. B, room 1
              </p>
              <p className="text-gray-700">Email: support@dexterlab.site</p>
            </div>
          </section>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              See also our{" "}
              <Link href="/privacy" className="text-green-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
