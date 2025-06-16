'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import Section from '../ui/section'
import Integrations from '../eldoraui/integrations'

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        })
        setErrors({})
        setSubmitStatus(null)
    }

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido'
        if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es requerido'
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email inválido'
        }
        if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) return
        
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // Here you would typically send the data to your backend
            // For now, we'll simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            // Simulate successful submission
            setSubmitStatus('success')
            resetForm()
        } catch (error) {
            setSubmitStatus('error')
            resetForm()
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left column - Integrations */}
                    <div className="hidden md:flex items-center w-full h-full">
                            <Integrations />
                    </div>

                    {/* Right column - Contact Form */}
                    <div className="px-4 md:px-6 rounded-lg py-8 w-full bg-base-300">
                        <div className="text-center md:text-left">
                            <h2 className="text-sm font-medium uppercase tracking-wider outline-primary text-primary">Únete a la consultoría con Propósito</h2>
                            <h3 className="mt-4 text-3xl font-semibold sm:text-4xl text-secondary">Contáctanos</h3>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="firstName" className="block text-sm/6 font-semibold outline-primary">
                                            Nombre
                                        </label>
                                        {errors.firstName && <p className="text-sm text-error">{errors.firstName}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary ${errors.firstName ? 'outline-error' : ''}`}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="lastName" className="block text-sm/6 font-semibold outline-primary">
                                            Apellido
                                        </label>
                                        {errors.lastName && <p className="text-sm text-error">{errors.lastName}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary ${errors.lastName ? 'outline-error' : ''}`}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm/6 font-semibold outline-primary">
                                        Empresa
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="email" className="block text-sm/6 font-semibold outline-primary">
                                            Email
                                        </label>
                                        {errors.email && <p className="text-sm text-error">{errors.email}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary ${errors.email ? 'outline-error' : ''}`}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm/6 font-semibold outline-primary">
                                        Número telefónico
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="message" className="block text-sm/6 font-semibold outline-primary">
                                            Mensaje
                                        </label>
                                        {errors.message && <p className="text-sm text-error">{errors.message}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary ${errors.message ? 'outline-error' : ''}`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`block rounded-lg btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-success/20 text-success rounded-lg">
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-error/20 text-error rounded-lg">
                                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}