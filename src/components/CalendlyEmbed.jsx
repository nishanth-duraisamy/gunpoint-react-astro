import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { locations } from '../data/locations';

const CalendlyEmbed = ({
                           branch,
                           formData,
                           onAppointmentScheduled,
                           onCalendlyEventTypeViewed,
                       }) => {
    // Listen for Calendly events to coordinate with the GlobalLoader
    useCalendlyEventListener({
        onEventTypeViewed: (e) => {
            if (e.data.event === 'calendly.event_type_viewed') {
                if (onCalendlyEventTypeViewed) {
                    onCalendlyEventTypeViewed();
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
            <div className='text-center py-8 font-body text-text-main'>
                <p>No Calendly link found for the selected branch.</p>
            </div>
        );
    }

    // Prefill data from the previous steps of your booking form
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
            prefill.customAnswers['a2'] = customNotes;
        }
    }

    // Build query parameters for a branded, dark-themed experience
    const queryParams = new URLSearchParams();
    if (prefill.name) queryParams.append('name', prefill.name);
    if (prefill.email) queryParams.append('email', prefill.email);
    queryParams.append('a1', '+91'); // Defaulting to India country code
    if (prefill.customAnswers && prefill.customAnswers['a2'])
        queryParams.append('a2', prefill.customAnswers['a2']);

    // Apply Gunpoint Studio colors to the Calendly interface
    const themeParams = 'hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=d4af37';
    url = queryParams.toString() ? `${url}?${queryParams.toString()}&${themeParams}` : `${url}?${themeParams}`;

    return (
        <div className='w-full border-t border-accent/20 mt-8 pt-8'>
            <InlineWidget
                url={url}
                styles={{
                    minHeight: '800px', // Explicit height to prevent layout shift
                    width: '100%'
                }}
            />
        </div>
    );
};

export default CalendlyEmbed;