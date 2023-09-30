import { Resend } from 'resend'
import React from 'react'
import contactFormEmail from '../Email/contactFormEmail'
import { getApiKey } from '../utils/helpers'

type sendEmailParameters = {
  message: string
  sender: string
  target: string
}

export const sendEmail = async ({ message, sender, target }: sendEmailParameters): Promise<void> => {
  try {
    const resend = new Resend(getApiKey(target))
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: target,
      subject: 'Portfolio form message',
      react: React.createElement(contactFormEmail, { message, sender })
    })
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
