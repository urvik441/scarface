import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { products } from '../data/products'

const productOptions = ['General Inquiry', ...products.map(p => p.name)]

const countries = [
  'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Oman', 'Bahrain',
  'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Ethiopia', 'Tanzania',
  'Germany', 'United Kingdom', 'Netherlands', 'France', 'Spain', 'Italy',
  'USA', 'Canada',
  'Vietnam', 'Thailand', 'Malaysia', 'Indonesia', 'Philippines', 'Singapore',
  'Japan', 'South Korea', 'Australia', 'China',
  'India', 'Other',
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const prefilledProduct = searchParams.get('product') || ''

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: prefilledProduct || 'General Inquiry',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    // Simulated submission (no backend in v1)
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-white border rounded-xl text-sm text-charcoal placeholder-charcoal/35 focus:outline-none focus:ring-2 transition-all duration-300 ${
      errors[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
        : 'border-navy/15 focus:border-gold/60 focus:ring-gold/15'
    }`

  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B1C25 0%, #1F4050 100%)' }}
        aria-label="Contact page hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')` }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-max relative z-10 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase font-heading block mb-4">Get In Touch</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Let's Build Global
            <br />
            <span className="gold-shimmer">Connections.</span>
          </h1>
          <div className="w-14 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Ready to source quality Indian products? Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* ─── CONTACT SECTION ───────────────────────────────── */}
      <section id="contact-main" className="section-pad bg-offwhite" aria-label="Contact form and information">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left — Contact Info */}
            <div>
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase font-heading block mb-3">Contact Details</span>
              <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl mb-4 leading-tight">
                Reach SCARFACE
              </h2>
              <div className="w-10 h-0.5 bg-gold mb-7" />

              <div className="space-y-6 mb-10">
                {[
                  {
                    Icon: MapPin,
                    label: 'Address',
                    value: 'Gujarat, India',
                    sub: '(Address — placeholder, to be updated)',
                  },
                  {
                    Icon: Mail,
                    label: 'Email',
                    value: 'info@example.com', // PLACEHOLDER
                    href: 'mailto:info@example.com',
                    sub: '(Placeholder — update with real email)',
                  },
                  {
                    Icon: Phone,
                    label: 'Phone',
                    value: '+91 XXXXX XXXXX', // PLACEHOLDER
                    href: 'tel:+91XXXXXXXXXX',
                    sub: '(Placeholder — update with real number)',
                  },
                ].map(({ Icon, label, value, href, sub }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/8 border border-navy/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-navy" />
                    </div>
                    <div>
                      <p className="text-gold text-[9px] tracking-widest uppercase font-heading font-semibold mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-navy font-medium text-sm hover:text-gold transition-colors block">
                          {value}
                        </a>
                      ) : (
                        <p className="text-navy font-medium text-sm">{value}</p>
                      )}
                      {sub && <p className="text-charcoal/35 text-[10px] mt-0.5">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-navy/15 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
                  alt="Gujarat, India — SCARFACE office location"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-white border-t border-navy/8">
                  <p className="text-navy font-heading font-semibold text-sm flex items-center gap-2">
                    <MapPin size={13} className="text-gold" />
                    Gujarat, India
                  </p>
                  <p className="text-charcoal/50 text-xs mt-1">Interactive map to be added with actual address</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-card border border-navy/8">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={30} className="text-green-500" />
                    </div>
                    <h3 className="font-heading font-bold text-navy text-2xl mb-3">Enquiry Sent!</h3>
                    <p className="text-charcoal/65 text-base mb-6">
                      Thank you for reaching out. We will review your enquiry and get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setStatus('idle'); setForm({ name:'',company:'',email:'',phone:'',country:'',product: prefilledProduct || 'General Inquiry',message:'' }) }}
                      className="btn-secondary"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} noValidate>
                    <h3 className="font-heading font-bold text-navy text-2xl mb-2">Send an Enquiry</h3>
                    <p className="text-charcoal/55 text-sm mb-7">
                      Fill in the form below and we'll be in touch soon.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-charcoal/60 tracking-wide uppercase font-heading mb-2">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-charcoal/60 tracking-wide uppercase font-heading mb-2">
                          Company Name
                        </label>
                        <input
                          id="company" name="company" type="text"
                          value={form.company} onChange={handleChange}
                          placeholder="Your company (optional)"
                          className={inputClass('company')}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-charcoal/60 tracking-wide uppercase font-heading mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-charcoal/60 tracking-wide uppercase font-heading mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className={inputClass('phone')}
                        />
                      </div>

                      {/* Country */}
                      <div>
                        <label htmlFor="country" className="block text-xs font-semibold text-charcoal/60 tracking-wide uppercase font-heading mb-2">
                          Country
                        </label>
                        <select
                          id="country" name="country"
                          value={form.country} onChange={handleChange}
                          className={inputClass('country') + ' cursor-pointer'}
                        >
                          <option value="">Select your country</option>
                          {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>

                      {/* Product */}
                      <div>
                        <label htmlFor="product" className="block text-xs font-semibold text-charcoal/60 tracking-wide uppercase font-heading mb-2">
                          Product Interested In
                        </label>
                        <select
                          id="product" name="product"
                          value={form.product} onChange={handleChange}
                          className={inputClass('product') + ' cursor-pointer'}
                        >
                          {productOptions.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <label htmlFor="message" className="block text-xs font-semibold text-charcoal/60 tracking-wide uppercase font-heading mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message" name="message"
                        value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your requirements — product specifications, quantities, destination, etc."
                        className={inputClass('message') + ' resize-none'}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>}
                    </div>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-charcoal/35 text-xs text-center mt-4">
                      This form does not submit to a server in the current version. Integration to be added.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
