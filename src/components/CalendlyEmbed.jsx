import React, { useRef, useEffect } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { locations } from '../data/locations';

const CalendlyEmbed = ({
  branch,
  formData,
  onAppointmentScheduled,
  onCalendlyEventTypeViewed,
}) => {
  const calendlyRef = useRef(null);

  useCalendlyEventListener({
    onEventTypeViewed: (e) => {
      // Check if the event type viewed is the one we are waiting for to hide the loader
      if (e.data.event === 'calendly.event_type_viewed') {
        if (onCalendlyEventTypeViewed) {
          onCalendlyEventTypeViewed();
        }
        // Scroll to and focus the Calendly embed
        if (calendlyRef.current) {
          calendlyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          calendlyRef.current.focus();
        }
      }
    },
    onEventScheduled: (e) => {
      onAppointmentScheduled(e);
    },
  });

  const selectedLocation = locations.find((loc) => loc.displayName === branch);

  let url = selectedLocation?.calendlyUrl;

  if (!url) {
    return (
      <div className='text-center py-8'>
        <p>No Calendly link found for the selected branch.</p>
      </div>
    );
  }

  const prefill = {};
  if (formData) {
    prefill.name = formData.name;
    prefill.email = formData.email;
    prefill.customAnswers = {};

    let customNotes = '';
    if (formData.service) {
      customNotes += `Service: ${formData.service}\n`;
    }
    if (formData.designContext) {
      customNotes += `Design Context: ${formData.designContext}\n`;
    }

    if (customNotes) {
      prefill.customAnswers['a2'] = customNotes; // Assuming 'a2' is the custom question for notes
    }

    if (formData.dateTime) {
      prefill.date = new Date(formData.dateTime).toISOString();
    }
  }

  // Append prefill parameters to the URL
  const queryParams = new URLSearchParams();
  if (prefill.name) queryParams.append('name', prefill.name);
  if (prefill.email) queryParams.append('email', prefill.email);
    queryParams.append('a1', '+91');
  if (prefill.customAnswers && prefill.customAnswers['a2'])
    queryParams.append('a2', prefill.customAnswers['a2']);
  if (prefill.date) queryParams.append('date', prefill.date);

  if (queryParams.toString()) {
    url = `${url}?${queryParams.toString()}&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=d4af37`;
  } else {
    url = `${url}?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=d4af37`;
  }

  return (
    <div ref={calendlyRef} tabIndex="-1" className='w-full'>
      <InlineWidget url={url} styles={{ minHeight: '80vh', width: '100%' }} />
    </div>
  );
};

export default CalendlyEmbed;