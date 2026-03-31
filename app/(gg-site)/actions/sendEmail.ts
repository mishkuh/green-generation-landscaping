"use server"

import InquiryTemplate, { InquiryEmailProps } from '@/app/(gg-site)/lib/email/InquiryTemplate';
import resend from '@/app/(gg-site)/lib/resend';

export async function sendEmail(inquiryProps: InquiryEmailProps) {
    try {
        const response = await resend.emails.send({
            from: 'ggenerationlandscaping.com <notifications@pugetflux.com>',
            to: [process.env.CONTACT_FORM_RECEIVE_EMAIL!],
            subject: 'New Contact Form Submission',
            react: InquiryTemplate(inquiryProps),
        });

        if (response.error) {
            // Return a plain string instead of the whole error object
            return { success: false, error: response.error.message };
        }

        // Return a simple plain object
        return { success: true, id: response.data?.id };

    } catch (error) {
        return { success: false, error: "An unexpected error occurred" };
    }
}