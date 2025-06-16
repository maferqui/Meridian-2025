'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import Section from '../ui/section'
import Integrations from '../eldoraui/integrations'

export function ContactForm() {
    const [agreed, setAgreed] = useState(false)

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
                        <form action="#" method="POST" className="mt-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm/6 font-semibold outline-primary">
                                        Nombre
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm/6 font-semibold outline-primary">
                                        Apellido
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
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
                                            autoComplete="organization"
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm/6 font-semibold outline-primary">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold outline-primary">
                                        Número telefónico
                                    </label>
                                    <div className="mt-2.5">
                                        <div className="flex rounded-lg outline-1 -outline-offset-1 outline-secondary has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-primary">
                                            <input
                                                id="phone-number"
                                                name="phone-number"
                                                type="text"
                                                className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm/6 font-semibold outline-primary">
                                        Mensaje
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="block w-full rounded-lg px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-secondary placeholder:text-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="block rounded-lg btn btn-primary"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}