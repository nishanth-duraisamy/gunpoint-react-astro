import React, { useState, useCallback } from 'react';
import { useLoading } from '../contexts/LoadingContext';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
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
        options: ['First tattoo', 'Cover-up', 'Fine-line / minimal', 'Custom design'],
        key: 'service',
    },
    {
        step: 2,
        question: 'Design Context',
        options: ['I know the size and placement', 'I have an idea but need guidance', "I'm still figuring it out"],
        key: 'designContext',
    },
    {
        step: 3,
        question: 'Date/Time & Contact Details',
        key: 'contact',
    },
];

const Appointments = () => {
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

    // Note: LoadingContext only works if this component is wrapped in the provider
    const { setLoading } = useLoading();

    const handleCalendlyEventTypeViewed = useCallback(() => {
        const calendlyEmbedSection = document.getElementById('calendly-embed-section');
        if (calendlyEmbedSection) {
            calendlyEmbedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setLoading(false);
    }, [setLoading]);

    const handleAppointmentScheduled = () => {
        const selectedLocation = locations.find((loc) => loc.displayName === formData.branch);
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
        setCurrentStep((prev) => (prev < filteredBookingSteps.length ? prev + 1 : prev));
    };

    const handleBack = () => {
        setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const handleSelect = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        if (key !== 'branch') {
            handleNext();
        } else {
            if (value === formData.branch) return;
            setLoading(true);
        }
    };

    const currentQuestion = filteredBookingSteps.find((s) => s.step === currentStep);

    const renderStepContent = () => {
        if (!currentQuestion) return null;

        switch (currentQuestion.key) {
            case 'service':
            case 'designContext':
                return (
                    <div className='w-full max-w-4xl mx-auto'>
                        <h2 className='text-3xl font-display text-primary mb-8 text-center uppercase'>
                            {currentQuestion.question}
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                            {currentQuestion.options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleSelect(currentQuestion.key, option)}
                                    className={`p-8 text-lg font-body border-2 rounded-xl transition-all duration-300 ${
                                        formData[currentQuestion.key] === option
                                            ? 'bg-primary border-primary text-background font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                            : 'bg-secondary border-accent/30 text-text-main hover:border-primary'
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
                                <h2 className='text-3xl font-display text-primary mb-8 text-center uppercase'>
                                    Which studio are you booking for?
                                </h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                                    {locations.map((location) => (
                                        <div
                                            key={location.name}
                                            onClick={() => handleSelect('branch', location.displayName)}
                                            className={`p-6 border-2 rounded-xl transition-all duration-300 cursor-pointer ${
                                                formData.branch === location.displayName
                                                    ? 'bg-primary border-primary text-background'
                                                    : 'bg-secondary border-accent/30 text-text-main hover:border-primary'
                                            }`}
                                        >
                                            <h3 className='text-xl font-display mb-2'>{location.name}</h3>
                                            <p className='text-sm font-body opacity-90'>{location.address}</p>
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
                                    onAppointmentScheduled={handleAppointmentScheduled}
                                    onCalendlyEventTypeViewed={handleCalendlyEventTypeViewed}
                                />
                                {showPreparationGuide && (
                                    <PreparationGuide bookedLocationDetails={bookedLocationDetails} />
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
        <div className='bg-background min-h-screen py-12'>
            <div className='w-full max-w-7xl mx-auto px-4'>
                {!showPreparationGuide && (
                    <div className='flex justify-center items-center mb-16'>
                        {filteredBookingSteps.map(({ step }) => (
                            <React.Fragment key={step}>
                                <div
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                        currentStep >= step ? 'bg-primary shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'bg-secondary'
                                    }`}
                                ></div>
                                {step < filteredBookingSteps.length && (
                                    <div className='w-16 h-px bg-accent/30'></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}

                {renderStepContent()}

                <div className='flex justify-between items-center mt-12 w-full max-w-md mx-auto'>
                    {currentStep > 1 && !showPreparationGuide && (
                        <button
                            onClick={handleBack}
                            className='flex items-center text-text-main/60 hover:text-primary transition-colors font-body'
                        >
                            <ChevronLeftIcon className='mr-2 h-5 w-5' /> Back
                        </button>
                    )}
                </div>
            </div>

            {/* Dynamic Content Sections */}
            <div className='w-full max-w-7xl mx-auto mt-24 px-4'>
                {formData.service === 'First tattoo' && <FirstTattooExperience />}
                {formData.service === 'Cover-up' && <CoverUpExperience />}
                {formData.service === 'Fine-line / minimal' && <FineLineExperience />}
                {formData.service === 'Custom design' && <CustomDesignExperience />}
            </div>
        </div>
    );
};

export default Appointments;