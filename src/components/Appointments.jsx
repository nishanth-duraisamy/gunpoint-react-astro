import { useState } from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { useLoading } from '../contexts/LoadingContext';
import { locations } from '../data/locations';
import PreparationGuide from '../components/PreparationGuide';

const services = [
  {
    name: 'Custom Tattoo Design',
    description:
      'A fully unique design based on your ideas, created in collaboration with our artists.',
  },
  {
    name: 'Flash Tattoo',
    description:
      'Choose from our collection of pre-designed tattoos for a quicker session.',
  },
  {
    name: 'Cover-ups & Reworks',
    description:
      'Transform or restore an existing tattoo with the help of our specialists.',
  },
  {
    name: 'Piercing & Jewelry',
    description:
      'Professional piercing services with a selection of high-quality jewelry.',
  },
];

function Appointments() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    designContext: '',
    branch: '',
  });
  const { setLoading } = useLoading();
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const handleCalendlyEventTypeViewed = () => {
    setIsCalendlyReady(true);
    setLoading(false);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAppointmentScheduled = (e) => {
    const eventDetails = e.data.payload;
    const invitee = eventDetails.invitee;
    const eventType = eventDetails.event.name;
    const locationName = eventType.split(' - ')[0]; // Assuming location is first part of event name
    const location = locations.find(loc => loc.name === locationName);
    
    setAppointmentDetails({
      name: invitee.name,
      email: invitee.email,
      event: eventType,
      startTime: new Date(eventDetails.event.start_time).toLocaleString(),
      locationName: location ? location.name : 'Unknown Location',
      address: location ? location.address : 'Address not found.',
    });
    setStep(3); // Move to the confirmation step
  };


  const renderStep1 = () => (
    <div className='space-y-6 animate-fade-in'>
      <h2 className='text-3xl font-bold text-center text-primary'>
        Book Your Appointment
      </h2>
      <div className='grid grid-cols-1 gap-6'>
        <div>
          <label htmlFor='branch' className='block text-lg font-medium'>
            Select a branch
          </label>
          <select
            name='branch'
            id='branch'
            value={formData.branch}
            onChange={handleChange}
            className='mt-1 block w-full bg-secondary border-accent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-lg'
          >
            <option value=''>--Please choose a branch--</option>
            {locations.map((loc) => (
              <option key={loc.name} value={loc.displayName}>
                {loc.displayName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='service' className='block text-lg font-medium'>
            What are you looking for?
          </label>
          <select
            name='service'
            id='service'
            value={formData.service}
            onChange={handleChange}
            className='mt-1 block w-full bg-secondary border-accent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-lg'
          >
            <option value=''>--Please choose a service--</option>
            {services.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='name' className='block text-lg font-medium'>
            Your Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            className='mt-1 block w-full bg-secondary border-accent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-lg'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-lg font-medium'>
            Your Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full bg-secondary border-accent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-lg'
          />
        </div>
        <div>
          <label htmlFor='designContext' className='block text-lg font-medium'>
            Tell us about your tattoo idea (optional)
          </label>
          <textarea
            name='designContext'
            id='designContext'
            rows='4'
            value={formData.designContext}
            onChange={handleChange}
            className='mt-1 block w-full bg-secondary border-accent rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary text-lg'
          ></textarea>
        </div>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={handleNext}
          className='bg-primary text-background hover:bg-primary-light font-bold py-2 px-6 rounded-lg'
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => {
    if (!isCalendlyReady) {
      setLoading(true);
    }

    return (
      <div className='animate-fade-in'>
        <h2 className='text-3xl font-bold text-center text-primary mb-6'>
          Select a Date and Time
        </h2>
        <CalendlyEmbed
          branch={formData.branch}
          formData={formData}
          onAppointmentScheduled={handleAppointmentScheduled}
          onCalendlyEventTypeViewed={handleCalendlyEventTypeViewed}
        />
        <div className='mt-6 flex justify-start'>
          <button
            onClick={handleBack}
            className='bg-secondary text-text-main hover:bg-opacity-80 font-bold py-2 px-6 rounded-lg'
          >
            Back
          </button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4">Appointment Confirmed!</h2>
      {appointmentDetails && (
        <div className="bg-secondary p-6 rounded-lg shadow-lg text-left max-w-lg mx-auto">
          <p className="text-lg mb-2"><strong className="text-primary">Name:</strong> {appointmentDetails.name}</p>
          <p className="text-lg mb-2"><strong className="text-primary">Email:</strong> {appointmentDetails.email}</p>
          <p className="text-lg mb-2"><strong className="text-primary">Service:</strong> {appointmentDetails.event}</p>
          <p className="text-lg mb-4"><strong className="text-primary">Date & Time:</strong> {appointmentDetails.startTime}</p>
          <p className="text-lg mb-4"><strong className="text-primary">Location:</strong> {appointmentDetails.address}</p>
          <p>You will receive a confirmation email shortly. Please also check your spam folder.</p>
        </div>
      )}
       <div className='mt-8'>
         <PreparationGuide bookedLocationDetails={appointmentDetails} />
       </div>
    </div>
  );


  return (
    <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </div>
  );
}

export default Appointments;
