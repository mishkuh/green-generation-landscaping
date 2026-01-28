"use server"

import EmailTemplate, { InquiryEmailProps } from '@/app/(gg-site)/ui/components/email-template';
import resend from '@/app/(gg-site)/lib/resend';

export async function sendEmail(inquiryProps: InquiryEmailProps) {
    try {
        const response = await resend.emails.send({
            from: 'Green Generation Landscaping <contact@ggenerationlandscaping.com>',
            to: ['mishkkuh@gmail.com'],
            subject: 'New Project Inquiry',
            react: EmailTemplate(inquiryProps),
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