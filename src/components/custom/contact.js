'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Section from '../ui/section'
import Integrations from '../eldoraui/integrations'

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        }
    })

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // Here you would typically send the data to your backend
            // For now, we'll simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            // Simulate successful submission
            setSubmitStatus('success')
            reset()
        } catch (error) {
            setSubmitStatus('error')
            reset()
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
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="firstName" className="block text-sm/6 font-semibold outline-primary">
                                            Nombre
                                        </label>
                                        {errors.firstName && <p className="text-sm text-error">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="firstName"
                                            {...register('firstName', { 
                                                required: 'El nombre es requerido'
                                            })}
                                            className={`block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary ${errors.firstName ? 'outline-error' : ''}`}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="lastName" className="block text-sm/6 font-semibold outline-primary">
                                            Apellido
                                        </label>
                                        {errors.lastName && <p className="text-sm text-error">{errors.lastName.message}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="lastName"
                                            {...register('lastName', {
                                                required: 'El apellido es requerido'
                                            })}
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
                                            {...register('company')}
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="email" className="block text-sm/6 font-semibold outline-primary">
                                            Email
                                        </label>
                                        {errors.email && <p className="text-sm text-error">{errors.email.message}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            type="email"
                                            {...register('email', {
                                                required: 'El email es requerido',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Email inválido'
                                                }
                                            })}
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
                                            type="tel"
                                            {...register('phone')}
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="message" className="block text-sm/6 font-semibold outline-primary">
                                            ¿En qué necesitas ayuda?
                                        </label>
                                        {errors.message && <p className="text-sm text-error">{errors.message.message}</p>}
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            rows={4}
                                            {...register('message', {
                                                required: 'El mensaje es requerido'
                                            })}
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