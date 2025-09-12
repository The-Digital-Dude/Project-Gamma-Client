import Headline from "@/components/Headline/Headline";
import Link from "next/link";
import "@/styles/terms-of-service.scss";

export default function TermsOfServicePage() {
  return (
    <section className="terms-of-service">
      <section className="terms-of-service__hero common-section">
        <div className="container">
          <div className="terms-of-service__content">
            <h1 className="terms-of-service__title">Terms of Service</h1>

            <div className="terms-of-service__description">
              <p>
                These terms govern the provision of safety and compliance
                services by Gas and Electrical Safety Checks Pty Ltd. Please
                read these terms carefully as they apply to our services
                including smoke alarm, gas and electrical safety and compliance
                services.
              </p>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Introduction to Us and our Services
              </h3>
              <p className="terms-of-service__section-content">
                Thank you for using Gas and Electrical Safety Checks Pty Ltd for
                your owned property or properties ("Property"). Please read
                these terms ("Terms") including the Schedule carefully as they
                apply to our provision to you of our safety and compliance
                services, including smoke alarm, gas and electrical safety and
                compliance services and, where applicable, other services that
                we provide from time to time at your Property (each a "Service",
                collectively "Services"). Each Service is provided on specific
                terms and conditions relevant to that Service ("Service Terms")
                as set out in the Schedule. To the extent of any inconsistency
                between these Terms and any Service Terms, these Terms prevail.
                By accepting any or part of our Services you acknowledge and
                agree to be bound by these Terms.
              </p>
              <p className="terms-of-service__section-content">
                You acknowledge that these Terms may be modified by us from time
                to time, including but not limited to terms relating to fees and
                charges, cancellation and modifying the Services your Enrolled
                Property receives.
              </p>
              <p className="terms-of-service__section-content">
                Please also review our Privacy Policy to learn more about how we
                use information we procure in the provision of the Services,
                noting that you will be taken to be bound by our Privacy Policy
                upon the entry into of these Terms, and you consent to the
                collection, use and disclosure of your 'personal information'
                (as that term is defined in the Privacy Act 1988 (Cth)) being
                treated by us in accordance with that policy.
              </p>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">Definitions</h3>
              <p className="terms-of-service__section-content">
                In these Terms (and where the context permits), the singular
                includes the plural and vice versa, and a reference to:
              </p>
              <div className="terms-of-service__definition-list">
                <div className="terms-of-service__definition-item">
                  <strong>"Agent"</strong> means your duly appointed agent for
                  the management of your property at the Commencement Date.
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Australian Consumer Law"</strong> means the consumer
                  legislation set out in Schedule 2 of the Competition and
                  Consumer Act 2010 (Cth).
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Commencement Date"</strong> means, for each Service,
                  the date a Service begins for an Enrolled Property, as
                  notified to you in writing from time to time.
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Gas and Electrical Safety Checks"</strong> means each
                  of our Related Entities incorporated from time to time shall
                  be referred to collectively as "Gas and Electrical Safety
                  Checks", "we", "us", or "our".
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Enrolled Property"</strong> means a property that is
                  enrolled to receive a Service or Services from us.
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Excluded Property"</strong> means, in respect of a
                  Service, a property that:
                  <ul style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                    <li>Is not a domestic residential dwelling;</li>
                    <li>
                      Is not a property type ordinarily serviced by us, as
                      determined by us from time to time and notified to you;
                    </li>
                    <li>
                      Is not enrolled in the Service by act or omission of your
                      Agent or by you;
                    </li>
                    <li>
                      During the Term, begins to be managed by an agent other
                      than the Agent; or
                    </li>
                    <li>
                      Has had the Service suspended or otherwise terminated by
                      you, by your Agent or by us.
                    </li>
                  </ul>
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Law"</strong> means any statute, regulations,
                  instruments and by-laws and all other subordinate legislation
                  or orders made by any authority with jurisdiction over the
                  Services, including without limitation Australian Consumer
                  Law.
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"property"</strong> includes both a rental property
                  and an owner-occupied property, and includes all synonyms for
                  property, including but not limited to flat, apartment,
                  premises, residence etc.
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Related Entities"</strong> is given its meaning in
                  the Corporations Act 2001 (Cth) and includes but is not
                  necessarily limited to Gas and Electrical Safety Checks Pty
                  Ltd ABN 66654158951
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Term"</strong> means the period from the Commencement
                  Date until the Termination Date.
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"Termination Date"</strong> means the date upon which
                  the Services are terminated in accordance with these Terms.
                </div>
                <div className="terms-of-service__definition-item">
                  <strong>"you"</strong> (or similar personal pronoun) is a
                  reference to the property owner of the Enrolled Property.
                </div>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">The Services</h3>
              <p className="terms-of-service__section-content">
                Your property is an Enrolled Property and will receive the
                Services during the Term in return for payment of the Fees.
              </p>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Fees and Payment
              </h3>
              <div className="terms-of-service__section-content">
                <p>
                  The fees payable by you will be based on the Services the
                  Enrolled Property is enrolled in and will be notified to you
                  by us or by your Agent at enrolment, together with these
                  Terms.
                </p>
                <p>
                  You authorize your Agent to pay us on your behalf in respect
                  of any Fees due.
                </p>
                <p>
                  Where your Property is enrolled in one or more individual
                  Services, Fees will be payable within fourteen (14) days of
                  the invoice date without set off or deduction.
                </p>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Suspension and Termination
              </h3>
              <div className="terms-of-service__section-content">
                <p>
                  You may choose to terminate the Services in respect of the
                  Enrolled Property at any time by providing us with written
                  notice. Upon termination, the property will cease to be an
                  Enrolled Property and will automatically become an Excluded
                  Property.
                </p>

                <div className="terms-of-service__warning-box">
                  <strong>
                    Notwithstanding anything else in these Terms and to the
                    maximum extent permitted by Law, we shall immediately
                    suspend your Services where any of the following occurs:
                  </strong>
                  <ul style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                    <li>
                      An invoice in respect of one or more of your properties
                      remains unpaid after the specified due date;
                    </li>
                    <li>You or your Agent breach any of these Terms;</li>
                    <li>
                      You or your Agent fail to provide us with all necessary
                      information for us to effectively and efficiently supply
                      the Services, and any products or materials, including
                      without limitation notifying us of any changes to the
                      information already provided to us;
                    </li>
                    <li>
                      Your instructions, information, documentation, approvals,
                      or authorizations have not been provided to us in
                      accordance with these Terms, either by you or the Agent;
                    </li>
                    <li>
                      You or your Agent or your tenant advise us that we may not
                      enter the Property due to health concerns; and/or
                    </li>
                    <li>
                      You have not taken steps in accordance with our
                      professional advice and recommendations to ensure that
                      your plant and equipment tested and maintained by us
                      pursuant to these Terms are compliant.
                    </li>
                  </ul>
                </div>

                <p>
                  Should we suspend the Services pursuant to these Terms, we may
                  terminate these Terms by written notice to you or your Agent.
                </p>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Following Suspension or Termination
              </h3>
              <div className="terms-of-service__section-content">
                <p>
                  We shall be entitled to recover from you any Fees accrued with
                  respect to the provision of the Services to you that remain
                  unpaid as at the date of termination and such fees will become
                  immediately payable;
                </p>
                <p>
                  We accept no risk regarding your compliance obligations at Law
                  or the installation, repair or ongoing maintenance of the
                  items of plant or equipment that we are required to ordinarily
                  test and/or maintain as part of the Services ("Serviced
                  Equipment"); and you immediately assume and accept all risks
                  at Law associated with the Serviced Equipment and your
                  compliance obligations at Law.
                </p>
                <p>
                  In the event that these Terms are terminated by your Agent
                  because your property is no longer managed by your Agent, then
                  you agree and undertake to indemnify your Agent for any fees
                  payable to us.
                </p>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Restrictions and Exclusions
              </h3>
              <div className="terms-of-service__section-content">
                <p>
                  The extent of our obligations with respect of the Services is
                  to ensure they are:
                </p>
                <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
                  <li>
                    Provided with acceptable care and skill or technical
                    knowledge and taking all necessary steps to avoid loss and
                    damage;
                  </li>
                  <li>
                    Fit for the purpose or give the results that you had agreed
                    to; and be delivered within a reasonable time when there is
                    no agreed end date, (collectively, "Statutory Warranties").
                  </li>
                </ul>

                <p>We are liable to you for:</p>
                <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
                  <li>
                    Any damage to your property which has been caused by the
                    fault, negligence or fraud by us or our personnel during the
                    conduct of the Services.
                  </li>
                  <li>
                    Death or personal injury caused by us or our personnel.
                  </li>
                </ul>

                <p>
                  If you have contributed to any loss or damage you are claiming
                  against us, our liability is reduced to the extent of your
                  contribution. (collectively, "Our Agreed Liabilities").
                </p>

                <div className="terms-of-service__highlight-box">
                  <strong>
                    Subject to your rights under Australian Consumer Law or any
                    other applicable legislation which cannot be lawfully
                    excluded or limited by us, you acknowledge and agree as
                    follows:
                  </strong>
                  <ul style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
                    <li>
                      We do not give any warranty nor accept any liability in
                      relation to the performance or non-performance of the
                      Services outside of the Statutory Warranties or Our Agreed
                      Liabilities, and if any warranty would be implied by law,
                      custom or otherwise, that warranty is excluded to the
                      fullest extent permitted by law.
                    </li>
                    <li>
                      We are only liable to you for those Services which you or
                      your Agent have validly enrolled in pursuant to these
                      Terms and we disclaim all liability or responsibility for
                      Services in which you or your Agent have failed or
                      neglected to validly enrol.
                    </li>
                    <li>
                      We disclaim all liability for all indirect or
                      consequential losses, loss of profits, loss of business,
                      loss of revenue, loss of data or the poor performance or
                      non-performance of our systems, loss of use or value of
                      equipment, loss of anticipated earnings or savings, in
                      connection with: (A) the provision of the Services; or (B)
                      your use of or reliance upon any of the information
                      provided by us to you in carrying out the Services that
                      does not form part of these Terms.
                    </li>
                    <li>
                      We will provide the Services within a 'reasonable time
                      frame', having regard to the uptake and demand for the
                      provision of the Services. You acknowledge and agree that
                      the provision of dates by which Services will be provided
                      is done on a best endeavors basis and nothing in these
                      Terms is to be treated as a guarantee by us that we will
                      provide any Services by any fixed date or time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Limiting your Liability
              </h3>
              <p className="terms-of-service__section-content">
                You will not be liable to us for any indirect or consequential
                losses that we suffer as a result of a breach by you of these
                Terms.
              </p>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Survival, Governing Law and Assignment
              </h3>
              <div className="terms-of-service__section-content">
                <p>
                  Those obligations under the subparagraph titled "Following
                  Suspension or Termination", the paragraph titled "Restrictions
                  and Exclusions", this paragraph and any other indemnities
                  provided under these Terms survive the termination or expiry
                  of these Terms.
                </p>
                <p>
                  The Terms and Service Terms are governed by the laws of the
                  state and territory in which your property is located. If part
                  of these Terms and/or Services Terms is not legally
                  enforceable, that part will be cut from these Terms and/or
                  Services Terms and all other parts of these Terms and/or
                  Services Terms shall continue.
                </p>
                <p>
                  You may transfer or assign your rights under these Terms
                  (where those rights are assignable). We may transfer or assign
                  some or all of our rights and/or obligations under these Terms
                  and Services Terms.
                </p>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">Contact us</h3>
              <div className="terms-of-service__section-content">
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "1.5rem 0 0 0",
                  }}
                >
                  <li>
                    <strong>General Enquiries:</strong>{" "}
                    <span className="terms-of-service__contact-email">
                      hello@RentalEase.com.au
                    </span>
                  </li>
                  <li>
                    <strong>Landlord Support:</strong>{" "}
                    <span className="terms-of-service__contact-email">
                      landlords@RentalEase.com.au
                    </span>
                  </li>
                  <li>
                    <strong>Tenant Support:</strong>{" "}
                    <span className="terms-of-service__contact-email">
                      tenants@RentalEase.com.au
                    </span>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <span className="terms-of-service__contact-phone">
                      1300 RENTLEASE (1300 736 853)
                    </span>
                  </li>
                  <li>
                    <strong>Office Address:</strong> Melbourne, VIC, Australia
                  </li>
                  <li>
                    <strong>Operating Hours:</strong> Monday - Friday: 9:00 AM -
                    5:00 PM (AEST)
                  </li>
                </ul>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">Legal Advice</h3>
              <p className="terms-of-service__section-content">
                You agree that any information, advice or material we provide to
                you in the supply of Services by us is for guidance purposes
                only and does not constitute legal advice. You are responsible
                for obtaining your own legal advice with respect to any such
                information, including any obligations at Law that you may have
                with respect to the Serviced Equipment.
              </p>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Schedule: Service Terms
              </h3>
              <div className="terms-of-service__section-content">
                <ol style={{ marginLeft: "2rem" }}>
                  <li>Smoke Alarm Safety & Compliance Service</li>
                  <li>Gas Safety & Compliance Service</li>
                  <li>Electrical Safety & Compliance Service</li>
                </ol>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Smoke Alarm Safety & Compliance Service
              </h3>
              <div className="terms-of-service__section-content">
                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Your obligations under the Law
                </h4>
                <p>
                  This Schedule includes the Service Terms for the annual Smoke
                  Alarm Safety & Compliance Service ("Scheduled Smoke Alarm
                  Service") and the Guarantee Services (collectively, "Smoke
                  Alarm Services").
                </p>
                <p>
                  The Service Fee for each Scheduled Smoke Alarm Service is $99
                  (plus GST).
                </p>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Reference to "Smoke Alarm" means collectively, any or all of
                  the following:
                </h4>
                <ul style={{ marginLeft: "2rem" }}>
                  <li>
                    A smoke alarm or detector that is detachable, portable,
                    battery powered smoke alarms ("Wireless Smoke Alarm").
                  </li>
                  <li>
                    A smoke alarm or detector that is 240v mains powered and is
                    hard wired to the mains ("Wired Smoke Alarm").
                  </li>
                  <li>
                    A smoke alarm or detector that is linked to a security
                    system or fire indication panel ("FIP Linked Smoke Alarm").
                  </li>
                </ul>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Scheduled Smoke Alarm Service
                </h4>
                <p>
                  For each Property that is enrolled in the Smoke Alarm Services
                  (and is not an Excluded Property), we will (subject to
                  fulfillment of your obligations under the Terms) ensure that a
                  Scheduled Smoke Alarm Service is carried out at least
                  annually, which shall include (but is not necessarily limited
                  to):
                </p>
                <ul style={{ marginLeft: "2rem" }}>
                  <li>
                    Conducting an annual maintenance check on each Smoke Alarm,
                    which includes cleaning, running smoke and button tests and
                    checking status relative to each Smoke Alarm's expiry
                    period.
                  </li>
                  <li>
                    Conducting an annual Smoke Alarm battery check for all Smoke
                    Alarms at a Property.
                  </li>
                  <li>
                    Assessing positioning and functionality of each Smoke Alarm
                    as against requirements at Law and identification of any
                    installed Smoke Alarm that is excess to such requirements
                    ('Excess Smoke Alarm').
                  </li>
                  <li>
                    Replacing or rectifying non-compliant, faulty or expired RE
                    Smoke Alarms (expressly excluding Excess Smoke Alarms and
                    FIP Linked Smoke Alarms).
                  </li>
                  <li>
                    Creating a report in respect of each Smoke Alarm Service and
                    maintaining a photo database with time/date/location stamps
                    of all Smoke Alarms.
                  </li>
                </ul>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Guarantee Services
                </h4>
                <p>
                  For each Property that has received the Annual Service (and is
                  not an Excluded Property), call out and rectification costs
                  for all Smoke Alarms (excluding Excess Smoke Alarms and FIP
                  Linked Smoke Alarms) ("Guarantee Services") will be provided
                  at no charge to the Owner for 12 months following each
                  Scheduled Smoke Alarm Service ("Service Guarantee").
                </p>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Gas Safety & Compliance Service
              </h3>
              <div className="terms-of-service__section-content">
                <p>
                  This Schedule includes the Service Terms for the biennial
                  (every 2 years) Gas Safety & Compliance Service ("Scheduled
                  Gas Service") and the Guarantee Services (collectively, "Gas
                  Services").
                </p>
                <p>
                  The Service Fee for each Scheduled Gas Service is $330 (inc
                  GST).
                </p>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Reference to Gas Appliance means a gas appliance supplied by
                  you at your Property (and expressly excludes any appliance
                  supplied by a tenant residing at your property), and includes
                  (but may not be limited to):
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <ul style={{ margin: 0 }}>
                    <li>Cooktop</li>
                    <li>Hot Water Continuous flow (External)</li>
                    <li>Space Heater Room Sealed</li>
                    <li>Ducted Heating Cupboard</li>
                    <li>Hot Water Continuous flow (Internal)</li>
                    <li>Wall Furnace</li>
                    <li>Ducted Heating External</li>
                    <li>Hot Water Storage Tank (External)</li>
                    <li>Wall furnace power flue</li>
                    <li>Ducted Heating Roof</li>
                    <li>Hot Water Storage Tank (Internal)</li>
                    <li>Hydronic Heating</li>
                    <li>Free Standing Oven</li>
                    <li>Room sealed instantaneous hot water</li>
                    <li>Hydronic Heating</li>
                    <li>Gas Log Fire</li>
                    <li>Solar Hot Water</li>
                    <li>Pool heating</li>
                    <li>Gas Potbelly</li>
                    <li>Space Heater</li>
                    <li>Main pressure BBQ</li>
                  </ul>
                </div>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Scheduled Gas Service
                </h4>
                <p>
                  For each Property that is enrolled in the Gas Services (and is
                  not an Excluded Property), we will (subject to fulfillment of
                  your obligations under the Terms) ensure that a Scheduled Gas
                  Service is carried out at least once every two years, which
                  shall include (but is not necessarily limited to):
                </p>
                <ul style={{ marginLeft: "2rem" }}>
                  <li>
                    A gas safety & compliance check in respect of all gas
                    installations, Gas Appliances and all gas fittings at least
                    every 2 years delivered by or under the supervision of a
                    registered 'Type A servicing' gas fitter.
                  </li>
                  <li>
                    A digital Gas Safety & Compliance Report issued after each
                    Scheduled Gas Service is completed.
                  </li>
                  <li>
                    Pressure retention test of the main gas line into the
                    Property (test of gas tightness).
                  </li>
                </ul>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Guarantee Services
                </h4>
                <p>
                  For each Property that has received the Scheduled Gas Service
                  (and is not an Excluded Property), call outs for all Gas
                  Appliance breakdowns including pilot light relights and
                  thermocouple replacements ("Guarantee Services") will be
                  provided at no charge to the Owner for 12 months following the
                  Scheduled Gas Service ("Service Guarantee"), expressly
                  excluding recurring faults in a Gas Appliance if recommended
                  rectification of the fault is declined by the Owner.
                </p>
              </div>
            </div>

            <div className="terms-of-service__section">
              <h3 className="terms-of-service__section-title">
                Electrical Safety & Compliance Service
              </h3>
              <div className="terms-of-service__section-content">
                <p>
                  This Schedule includes the Service Terms for the biennial
                  (every 2 years) Electrical Safety & Compliance Service
                  ("Scheduled Electrical Service") and the Guarantee Services
                  (collectively, "Electrical Services").
                </p>
                <p>
                  The Service Fee for each Scheduled Electrical Service is $275
                  (inc GST).
                </p>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Reference to Electrical Appliance means an electrical
                  appliance supplied by you at the property and expressly
                  excludes solar installations and any appliance supplied by a
                  tenant residing at your property, and includes (but may not be
                  limited to):
                </h4>
                <ul style={{ marginLeft: "2rem" }}>
                  <li>Electric Oven</li>
                  <li>Electric Heaters</li>
                  <li>Electric Hot Plates</li>
                  <li>Electric Air-Conditioners</li>
                  <li>Electric Hot Water Units</li>
                  <li>Refrigerators</li>
                  <li>Electric Range Hoods</li>
                </ul>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Scheduled Electrical Service
                </h4>
                <p>
                  For each Property that is enrolled in the Electrical Services
                  (and is not an Excluded Property), we will (subject to
                  fulfillment of your obligations under the Terms) ensure that a
                  Scheduled Electrical Service is carried out at least once
                  every two years, which shall include (but is not necessarily
                  limited to):
                </p>
                <ul style={{ marginLeft: "2rem" }}>
                  <li>
                    An electrical safety & compliance check in respect of all
                    electrical installations, electrical fittings and all
                    electrical appliances (unless excluded below) at least every
                    2 years delivered by or under the supervision of a qualified
                    electrician.
                  </li>
                  <li>
                    A digital Electrical Safety & Compliance Report issued after
                    each Electrical Safety & Compliance Service is completed.
                  </li>
                  <li>
                    A thorough switchboard inspection including a condition and
                    safety check, insulation resistance test and RCD/safety
                    switch test.
                  </li>
                  <li>
                    All accessible power points checked including earth loop and
                    polarity tests.
                  </li>
                  <li>
                    Safety check of the Electrical Appliances at the Property
                    including assessing damage to plugs, leads and casings.
                  </li>
                </ul>

                <h4
                  style={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  Guarantee Services
                </h4>
                <p>
                  For each Property that has received the Scheduled Electrical
                  Service (and is not an Excluded Property), we will provide, at
                  no charge to the Owner for 12 months following the Scheduled
                  Electrical Service ("Service Guarantee"), the Guarantee
                  Services, being:
                </p>
                <ul style={{ marginLeft: "2rem" }}>
                  <li>
                    Callouts for electrical safety issues relating to an
                    Electrical Appliance checked as part of the Scheduled
                    Electrical Service, including switchboard, power point or
                    switch faults (but excluding general faults in Electrical
                    Appliances, lighting and in all inaccessible electrical
                    fittings or fixtures).
                  </li>
                  <li>
                    Replacement of faulty or damaged safety switches, standard
                    light switches, standard power points, fuses and circuit
                    breakers (but excluding globe replacement).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <nav aria-label="breadcrumb">
              <Link
                href="/"
                style={{
                  color: "#1a237e",
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                Home
              </Link>
              <span style={{ margin: "0 8px", color: "#888" }}>&gt;</span>
              <span style={{ color: "#333", fontWeight: 500 }}>
                Terms of Service
              </span>
            </nav>
          </div>
        </div>
      </section>
    </section>
  );
}
