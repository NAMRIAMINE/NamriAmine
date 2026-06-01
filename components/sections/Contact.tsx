'use client'

import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: '/in/namriamine',
    href: personalInfo.linkedin,
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/namriamine',
    href: 'https://github.com/namriamine',
    accent: 'text-slate-700',
    bg: 'bg-slate-100',
    border: 'border-slate-200',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Let&apos;s <span className="text-rose-500">Connect</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            Open to senior full-stack and engineering lead roles. Based in Casablanca — available
            remote or hybrid.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
            >
              <Link
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-slate-300 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-sky-600"
                aria-label={`${method.title}: ${method.value}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg ${method.bg} border ${method.border} flex items-center justify-center shrink-0`}
                >
                  <method.icon className={`w-5 h-5 ${method.accent}`} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    {method.title}
                  </p>
                  <p className="text-sm font-medium text-slate-800 truncate group-hover:text-sky-600 transition-colors">
                    {method.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
