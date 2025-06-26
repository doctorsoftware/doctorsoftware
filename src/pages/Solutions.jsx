import React from 'react';
import { MdLocalHospital, MdAccountBalance, MdOutlineFamilyRestroom, MdOutlineBusiness } from 'react-icons/md';
import { FaUsers, FaClinicMedical, FaUserMd, FaUserCog, FaChartLine, FaUserNurse, FaTooth, FaChild, FaBrain, FaHeartbeat, FaBaby, FaUserFriends, FaHospitalAlt, FaCogs, FaChartBar, FaUserTie, FaBriefcaseMedical, FaUserShield, FaUserCheck, FaUserSecret, FaUserGraduate, FaUserAlt, FaUser, FaChevronDown, FaBuilding, FaChartPie, FaTools, FaUserMd as FaDoctor, FaUserFriends as FaPatients, FaUserCog as FaManager, FaUserTie as FaCFO, FaUserShield as FaIT, FaChartLine as FaMarketing, FaBuilding as FaBackoffice, FaUserGraduate as FaHR, FaUserSecret as FaGov, FaUserNurse as FaNurse, FaTooth as FaDental, FaChild as FaPediatric, FaBrain as FaMentalHealth, FaHeartbeat as FaOBGYN, FaBaby as FaOBGYN2, FaUserCheck as FaCompliance, FaUserAlt as FaAsset, FaUser as FaPatient, FaUserFriends as FaFamily, FaUser as FaDoctorPractice, FaUser as FaSpecialty, FaUser as FaEye, FaUser as FaOrthopedic, FaUser as FaRehab, FaUser as FaPhysio, FaUser as FaDiabetes, FaUser as FaOphthalmology, FaUser as FaFinance, FaUser as FaSupplyChain, FaUser as FaInventory, FaUser as FaCRM, FaUser as FaPopulationHealth, FaUser as FaSurveillance, FaUser as FaVaccine, FaUser as FaKiosk, FaUser as FaCommunication, FaUser as FaSpeech, FaUser as FaCamp, FaUser as FaDoctorApp, FaUser as FaRevenue, FaUser as FaOT, FaUser as FaNursing, FaUser as FaVirtualOPD, FaUser as FaLIMS, FaUser as FaRIS, FaUser as FaPACS, FaUser as FaBed, FaUser as FaCanteen, FaUser as FaCentralized, FaUser as FaAccounting, FaUser as FaBanking, FaUser as FaDashboards, FaUser as FaCloud, FaUser as FaBackups, FaUser as FaGeofencing, FaUser as FaRPA, FaUser as FaSecurity, FaUser as FaMultilingual, FaUser as FaFHIR, FaUser as FaCustomisations, FaUser as FaReferral, FaUser as FaCampaigns, FaUser as FaSurveys, FaUser as FaDigitalMarketing, FaUser as FaHRMS, FaUser as FaAssetManagement, FaUser as FaPopulation, FaUser as FaRealTime, FaUser as FaABHA, FaUser as FaPMJJBY } from 'react-icons/fa';
import SolutionCard from '../components/SolutionCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Clinics',
    icon: <FaClinicMedical />,
    description: 'Outpatient, Telemedicine, EMR, Queue/Token, Kiosk, Communication, Speech-to-text, Medical Camp, Diabetes Management, Doctor App, Revenue Cycle, Vaccine Management',
    link: '/clinic-software'
  },
  {
    title: 'Hospitals',
    icon: <MdLocalHospital />,
    description: 'Inpatient, OT Management, Nursing, Virtual OPD, LIMS, RIS & PACS, Pharmacy, Blood Bank, Bed & Canteen Management'
  },
  {
    title: 'Specialty Care',
    icon: <FaUserMd />,
    description: 'OB-GYN, Pediatrics, Dental, Mental Health, Rehabilitation, Diabetes, Physio, Orthopedic, Ophthalmology'
  },
  {
    title: 'For Patients & Families',
    icon: <FaUsers />,
    description: 'Online scheduling, Kiosk, Patient Portal, Mobile App, Patient Communication, Diabetes Care'
  },
  {
    title: 'Hospital Chain',
    icon: <FaHospitalAlt />,
    description: 'Centralized Hospital Management'
  },
  {
    title: 'Hospital CFO',
    icon: <FaUserTie />,
    description: 'Revenue Cycle, Accounting, Banking, Dashboards'
  },
  {
    title: 'Hospital IT Manager',
    icon: <FaUserCog />,
    description: 'Cloud Migration, Backups, Geofencing, RPA Automation, Security, Multilingual Support, FHIR/HL7 Compliance, Customisations'
  },
  {
    title: 'Marketing Managers',
    icon: <FaChartLine />,
    description: 'Patient Analytics, Referral Management, CRM, Campaigns, Surveys, Digital Marketing'
  },
  {
    title: 'Backoffice & HR',
    icon: <FaBriefcaseMedical />,
    description: 'Finance, HRMS, Supply Chain, Asset Management, Inventory, CRM'
  },
  {
    title: 'Government',
    icon: <MdAccountBalance />,
    description: 'Population Health, Real-Time Surveillance, Compliance (ABHA, PMJJBY), Vaccine Management'
  },
];

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <section className="py-16 flex-1">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Solutions for Different Stakeholders</h1>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">Doctor 247 HMS offers tailored solutions for every stakeholder in the healthcare ecosystem. Explore the modules and features designed for clinics, hospitals, specialty care, patients, and more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <div key={i}>
                <SolutionCard title={s.title} icon={s.icon} description={s.description} />
                {s.link && (
                  <div className="mt-4 text-center">
                    <Link to={s.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Learn More</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 