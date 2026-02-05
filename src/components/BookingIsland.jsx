import React, { useState, useEffect, useCallback } from 'react';
import { showLoader, hideLoader } from '../store/loaderStore';

import { ChevronLeftIcon } from '@heroicons/react/24/outline'; // Assuming it's from 24/outline, common path
import FirstTattooExperience from '../components/FirstTattooExperience';
import CoverUpExperience from '../components/CoverUpExperience';
import FineLineExperience from '../components/FineLineExperience';
import CustomDesignExperience from '../components/CustomDesignExperience';
import { locations } from '../data/locations';
import CalendlyEmbed from '../components/CalendlyEmbed';
import PreparationGuide from '../components/PreparationGuide';


const bookingSteps = [
  {
    step: 1,
    question: 'What are you booking for?',
    options: [
      'First tattoo',
      'Cover-up',
      'Fine-line / minimal',
      'Custom design',
    ],
    key: 'service',
  },
  {
    step: 2,
    question: 'Design Context',
    options: [
      'I know the size and placement',
      'I have an idea but need guidance',
      "I'm still figuring it out",
    ],
    key: 'designContext',
  },
  {
    step: 3,
    question: 'Date/Time & Contact Details',
    key: 'contact',
  },
];

const BookingIsland = () => { // Renamed from Appointments
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    designContext: '',
    branch: '',
    name: '',
    email: '',
    phone: '',
  });
  const [showPreparationGuide, setShowPreparationGuide] = useState(false);
  const [bookedLocationDetails, setBookedLocationDetails] = useState(null);

  // Show loader on mount, hide after a delay
  useEffect(() => {
    showLoader();
    const timer = setTimeout(() => {
      hideLoader();
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCalendlyEventTypeViewed = useCallback(() => {
    const calendlyEmbedSection = document.getElementById(
      'calendly-embed-section',
    );
    if (calendlyEmbedSection) {
      calendlyEmbedSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []); // setLoading removed from dependencies

  useEffect(() => {
    window.history.replaceState({}, '', window.location.pathname);

    const handlePopState = () => {
      window.location.href = '/';
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []); // navigate removed from dependencies

  const handleAppointmentScheduled = () => {
    const selectedLocation = locations.find(
      (loc) => loc.displayName === formData.branch,
    );
    if (selectedLocation) {
      setBookedLocationDetails({
        locationName: selectedLocation.name,
        address: selectedLocation.address,
      });
    }
    setShowPreparationGuide(true);
  };

  const filteredBookingSteps = (
    formData.service === 'First tattoo'
      ? bookingSteps
      : bookingSteps.filter((step) => step.key !== 'designContext')
  ).map((step, index) => ({ ...step, step: index + 1 }));

  const handleNext = () => {
    setCurrentStep((prev) =>
      prev < filteredBookingSteps.length ? prev + 1 : prev,
    );
  };

  const handleBack = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSelect = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (key !== 'branch') {
      handleNext();
    } else {
      // If the same branch is clicked again and loader is active, hide it immediately
      if (value === formData.branch) {
        return;
      }
    }
  };

  const currentQuestion = filteredBookingSteps.find(
    (s) => s.step === currentStep,
  );

  const renderStepContent = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.key) {
      case 'service':
        return (
          <div className='w-full max-w-4xl mx-auto'>
            <h2 className='text-2xl font-serif text-text-main mb-4 text-center'>
              {currentQuestion.question}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(currentQuestion.key, option)}
                  className={`p-6 text-lg text-text-main border-2 rounded-lg transition-all duration-300 ${
                    formData[currentQuestion.key] === option
                      ? 'bg-primary border-primary text-background font-bold'
                      : 'bg-secondary border-accent hover:border-primary'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      case 'designContext':
        return (
          <div className='w-full max-w-md mx-auto'>
            <h2 className='text-2xl font-serif text-text-main mb-4 text-center'>
              {currentQuestion.question}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(currentQuestion.key, option)}
                  className={`p-6 text-lg text-text-main border-2 rounded-lg transition-all duration-300 ${
                    formData[currentQuestion.key] === option
                      ? 'bg-primary border-primary text-background font-bold'
                      : 'bg-secondary border-accent hover:border-primary'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className='w-full max-w-4xl mx-auto'>
            {!showPreparationGuide && (
              <>
                <h2 className='text-2xl font-serif text-text-main mb-4 text-center'>
                  Which studio are you booking for?
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                  {locations.map((location) => (
                    <div
                      key={location.name}
                      onClick={() =>
                        handleSelect('branch', location.displayName)
                      }
                      className={`p-6 text-lg text-text-main border-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        formData.branch === location.displayName
                          ? 'bg-primary border-primary text-text-main'
                          : 'bg-secondary border-accent hover:border-primary'
                      }`}
                    >
                      <h3 className='text-xl text-white font-bold mb-2'>
                        {location.name}
                      </h3>
                      <p className='text-sm'>{location.address}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {formData.branch && (
              <div id='calendly-embed-section' className='mt-8 pt-4'>
                <CalendlyEmbed
                  branch={formData.branch}
                  formData={formData}
                  // onAppointmentScheduled={handleAppointmentScheduled} // No longer relevant
                  // onCalendlyEventTypeViewed={handleCalendlyEventTypeViewed} // No longer relevant
                />
                {showPreparationGuide && (
                  <PreparationGuide
                    bookedLocationDetails={bookedLocationDetails}
                  />
                )}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-background min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8'>
      {/* Helmet removed as SEO is handled by MainLayout.astro */}
      <div className='w-full max-w-7xl mx-auto py-8'>
        {/* Progress Dots */}
        {!showPreparationGuide && (
          <div className='flex justify-center items-center mb-8'>
            {filteredBookingSteps.map(({ step }) => (
              <React.Fragment key={step}>
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentStep >= step ? 'bg-primary' : 'bg-secondary'
                  }`}
                ></div>
                {step < filteredBookingSteps.length && (
                  <div className='w-12 h-px bg-secondary'></div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {renderStepContent()}

        {/* Navigation */}
        <div className='flex justify-between items-center mt-12 w-full max-w-md mx-auto'>
          {currentStep > 1 && !showPreparationGuide ? (
            <button
              onClick={handleBack}
              className='flex items-center text-text-main/60 hover:text-text-main transition-colors'
            >
              <ChevronLeftIcon className='mr-2 h-5 w-5' /> Back
            </button>
          ) : (
            <div></div> // Placeholder for alignment
          )}
        </div>
      </div>
      <div className='w-full max-w-7xl mx-auto mt-16'>
        {formData.service === 'First tattoo' && <FirstTattooExperience />}
        {formData.service === 'Cover-up' && <CoverUpExperience />}
        {formData.service === 'Fine-line / minimal' && <FineLineExperience />}
        {formData.service === 'Custom design' && <CustomDesignExperience />}
      </div>
    </div>
  );
};

export default BookingIsland;
