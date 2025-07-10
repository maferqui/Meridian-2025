import { siteConfig } from "@/siteConfig";
import { Logo } from "../ui/logo";
import Link from "next/link";

const year = new Date().getFullYear().toString();

export function Footer({
    resources,
    legals,
    socialNetworks = siteConfig.socialNetworks,
    contactInfo = siteConfig.contactInfo,
}) {

    return <footer className="bg-base-200 border-t border-primary">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Logo version={2} />
                </div>
                <div className="flex flex-col md:gap-16 md:flex-row">
                    {
                        !!resources?.length && <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-primary">Recursos</h2>
                            <ul className="text-secondary font-medium">
                                {
                                    resources.map(resource => <li key={`footer-resource-${resource.name}`} className="mb-4">
                                        <Link href={resource?.link} className="hover:underline">{resource.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    }
                    {
                        socialNetworks?.length &&
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-primary">Síguenos</h2>
                            <ul className="text-secondary font-medium">
                                {
                                    socialNetworks.map(socialNetwork => <li key={`footer-social-link-${socialNetwork.name}`} className="mb-4">
                                        <Link href={socialNetwork.link} target="_blank" className="hover:underline ">{socialNetwork.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    }
                    {
                        contactInfo?.length &&
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-primary">Contáctanos</h2>
                            <ul className="text-secondary font-medium">
                                {
                                    contactInfo.map(info => <li key={`footer-social-link-${info.name}`} className="mb-4">
                                        <Link href={info.link} className="hover:underline ">{info.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    }
                    {
                        legals?.length &&
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-primary">Legal</h2>
                            <ul className="text-secondary font-medium">
                                {
                                    legals.map(legal => <li key={`footer-legal-link-${legal.name}`} className="mb-4">
                                        <Link href={legal.link} className="hover:underline">{legal.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <hr className="my-6 border-primary sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-secondary sm:text-center">© 2025 <Link href="/" className="hover:underline">{siteConfig.companyName}</Link>
                </span>
                {
                    !!socialNetworks?.length && <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {
                            socialNetworks.map(socialNetwork => <Link
                                key={`footer-social-icon-link-${socialNetwork.name}`}
                                href={socialNetwork.link}
                                className="text-secondary hover:text-primary"
                                target="_blank"
                            >
                                <socialNetwork.icon className="size-5" />
                                <span className="sr-only">{ }</span>
                            </Link>)
                        }
                    </div>
                }
            </div>
        </div>
    </footer>

}