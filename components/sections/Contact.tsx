// app/components/sections/Contact.tsx
'use client'

import { Linkedin, Mail, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { personalInfo } from '@/data/personal'

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'namriamine',
      href: personalInfo.linkedin,
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your next project or opportunity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-12 text-lg">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we
            can work together!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                target={contact.href.includes('http') ? '_blank' : undefined}
                rel={contact.href.includes('http') ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <contact.icon className="w-8 h-8" />
                    </div>
                    <CardTitle>{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
