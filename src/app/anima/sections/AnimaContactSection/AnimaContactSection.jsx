'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AnimaIntegrations from './AnimaIntegrations'
import { 
  GlobeIcon, Share2Icon, UserIcon, CalendarIcon, AwardIcon, BarChart2Icon, BriefcaseIcon, CodeIcon,
  DatabaseIcon, FileTextIcon, GitBranchIcon, GitCommitIcon, GitPullRequestIcon, HeadphonesIcon, 
  HelpCircleIcon, HomeIcon, ImageIcon, LayersIcon, LinkIcon, LockIcon, MailCheckIcon, Maximize2Icon, 
  MenuIcon, MicIcon, MinusIcon, MoonIcon, MoreHorizontalIcon, PackageIcon, PaperclipIcon, PauseIcon, 
  PenToolIcon, PlayIcon, PlusIcon, RefreshCwIcon, SaveIcon, SearchIcon, SettingsIcon, ShieldIcon, 
  SidebarIcon, SlashIcon, SlidersIcon, StarIcon, TagIcon, TargetIcon, ThumbsUpIcon, Trash2Icon, 
  TrendingUpIcon, UploadIcon, UserPlusIcon, UsersIcon, VideoIcon, Volume2Icon, XIcon, ZapIcon, 
  ClockIcon, MessageSquareIcon 
} from 'lucide-react'
import React from 'react'

export function AnimaContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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
            await new Promise(resolve => setTimeout(resolve, 1000))
            setSubmitStatus('success')
            reset()
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

return (
        <>
        <section className="flex flex-col items-center px-6 sm:px-8 md:px-16 py-16 sm:py-20 md:py-28 w-full bg-[#0e2828]">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Left column - Integrations */}
                    <AnimaIntegrations />

                    {/* Right column - Contact Form */}
                    <div className="w-full bg-[#1a4040] rounded-xl p-8">
                        <div className="flex flex-col gap-4">
                            <span className="font-heading-tagline text-[#d5ac57] font-bold" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                                ÚNETE A LA CONSULTORÍA CON PROPÓSITO
                            </span>
                            <div className="flex flex-col gap-4 sm:gap-6">
                                <h2 className="font-heading-h2 text-white" style={{ fontSize: '3.25rem', lineHeight: '120%' }}>
                                    Contáctanos
                                </h2>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-white">
                                        Nombre
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="firstName"
                                            {...register('firstName', { required: 'Campo requerido*' })}
                                            className={`block w-full rounded-md border-0 px-3.5 py-2 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#d5ac57] sm:text-sm sm:leading-6 ${errors.firstName ? 'ring-red-500' : ''}`}
                                        />
                                        {errors.firstName && <p className="mt-2 text-sm text-red-500">{errors.firstName.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-white">
                                        Apellido
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="lastName"
                                            {...register('lastName', { required: 'Campo requerido*' })}
                                            className={`block w-full rounded-md border-0 px-3.5 py-2 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#d5ac57] sm:text-sm sm:leading-6 ${errors.lastName ? 'ring-red-500' : ''}`}
                                        />
                                        {errors.lastName && <p className="mt-2 text-sm text-red-500">{errors.lastName.message}</p>}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                     <label htmlFor="company" className="block text-sm font-medium leading-6 text-white">
                                        Empresa
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="company"
                                            {...register('company')}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#d5ac57] sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            type="email"
                                            {...register('email', { required: 'Email inválido', pattern: /\S+@\S+\.\S+/ })}
                                            className={`block w-full rounded-md border-0 px-3.5 py-2 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#d5ac57] sm:text-sm sm:leading-6 ${errors.email ? 'ring-red-500' : ''}`}
                                        />
                                        {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                                        Número telefónico
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="phone"
                                            type="tel"
                                            {...register('phone')}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#d5ac57] sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                                        ¿En qué necesitas ayuda?
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            rows={4}
                                            {...register('message', { required: 'Campo requerido*' })}
                                            className={`block w-full rounded-md border-0 px-3.5 py-2 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#d5ac57] sm:text-sm sm:leading-6 ${errors.message ? 'ring-red-500' : ''}`}
                                        />
                                        {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="rounded-md bg-[#d5ac57] px-3.5 py-2.5 text-center text-sm font-semibold text-[#123332] shadow-sm hover:bg-[#c09b46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d5ac57] disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </div>
                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-green-500/10 text-green-400 rounded-lg text-center">
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-red-500/10 text-red-400 rounded-lg text-center">
                                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Icon Rows Section - 9 identical rows */}
        <div className="w-full bg-[#0e2828] py-12 border-t border-[#ffffff1a] mt-12">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-white text-xl font-medium mb-8">Nuestros Aliados</h3>
                <div className="space-y-6">
                    {Array(9).fill(0).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-6">
                            {[
                                <GlobeIcon key="globe" />,
                                <Share2Icon key="share" />,
                                <UserIcon key="user" />,
                                <CalendarIcon key="calendar" />,
                                <AwardIcon key="award" />,
                                <BarChart2Icon key="chart" />,
                                <BriefcaseIcon key="briefcase" />,
                                <CodeIcon key="code" />
                            ].map((Icon, iconIndex) => (
                                <div 
                                    key={`${rowIndex}-${iconIndex}`} 
                                    className="flex items-center justify-center p-3 bg-[#1a3a3a] rounded-lg hover:bg-[#d5ac57] transition-colors duration-300"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </> 
} 
