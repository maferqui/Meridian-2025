import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon, GlobeIcon, MessageSquareIcon, Share2Icon, UserIcon, CalendarIcon, AwardIcon, BarChart2Icon, BriefcaseIcon, CodeIcon, DatabaseIcon, FileTextIcon, GitBranchIcon, GitCommitIcon, GitPullRequestIcon, HeadphonesIcon, HelpCircleIcon, HomeIcon, ImageIcon, LayersIcon, LinkIcon, LockIcon, MailCheckIcon, Maximize2Icon, MenuIcon, MicIcon, MinusIcon, MoonIcon, MoreHorizontalIcon, PackageIcon, PaperclipIcon, PauseIcon, PenToolIcon, PlayIcon, PlusIcon, RefreshCwIcon, SaveIcon, SearchIcon, SettingsIcon, ShieldIcon, SidebarIcon, SlashIcon, SlidersIcon, StarIcon, TagIcon, TargetIcon, ThumbsUpIcon, Trash2Icon, TrendingUpIcon, UploadIcon, UserPlusIcon, UsersIcon, VideoIcon, Volume2Icon, XIcon, ZapIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = () => {
  // Contact info data
  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6 text-white" />,
      text: "email@example.com",
      isLink: true,
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-white" />,
      text: "+1 (555) 000-0000",
      isLink: true,
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-white" />,
      text: "123 Sample St, Sydney NSW 2000 AU",
      isLink: false,
    },
  ];

  // Icons data for horizontal rows
  const iconRows = [
    [
      { icon: <GlobeIcon className="w-6 h-6 text-white" /> },
      { icon: <Share2Icon className="w-6 h-6 text-white" /> },
      { icon: <UserIcon className="w-6 h-6 text-white" /> },
      { icon: <CalendarIcon className="w-6 h-6 text-white" /> },
      { icon: <AwardIcon className="w-6 h-6 text-white" /> },
      { icon: <BarChart2Icon className="w-6 h-6 text-white" /> },
      { icon: <BriefcaseIcon className="w-6 h-6 text-white" /> },
      { icon: <CodeIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <DatabaseIcon className="w-6 h-6 text-white" /> },
      { icon: <FileTextIcon className="w-6 h-6 text-white" /> },
      { icon: <GitBranchIcon className="w-6 h-6 text-white" /> },
      { icon: <GitCommitIcon className="w-6 h-6 text-white" /> },
      { icon: <GitPullRequestIcon className="w-6 h-6 text-white" /> },
      { icon: <HeadphonesIcon className="w-6 h-6 text-white" /> },
      { icon: <HelpCircleIcon className="w-6 h-6 text-white" /> },
      { icon: <HomeIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <ImageIcon className="w-6 h-6 text-white" /> },
      { icon: <LayersIcon className="w-6 h-6 text-white" /> },
      { icon: <LinkIcon className="w-6 h-6 text-white" /> },
      { icon: <LockIcon className="w-6 h-6 text-white" /> },
      { icon: <MailCheckIcon className="w-6 h-6 text-white" /> },
      { icon: <Maximize2Icon className="w-6 h-6 text-white" /> },
      { icon: <MenuIcon className="w-6 h-6 text-white" /> },
      { icon: <MicIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <MinusIcon className="w-6 h-6 text-white" /> },
      { icon: <MoonIcon className="w-6 h-6 text-white" /> },
      { icon: <MoreHorizontalIcon className="w-6 h-6 text-white" /> },
      { icon: <PackageIcon className="w-6 h-6 text-white" /> },
      { icon: <PaperclipIcon className="w-6 h-6 text-white" /> },
      { icon: <PauseIcon className="w-6 h-6 text-white" /> },
      { icon: <PenToolIcon className="w-6 h-6 text-white" /> },
      { icon: <PlayIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <PlusIcon className="w-6 h-6 text-white" /> },
      { icon: <RefreshCwIcon className="w-6 h-6 text-white" /> },
      { icon: <SaveIcon className="w-6 h-6 text-white" /> },
      { icon: <SearchIcon className="w-6 h-6 text-white" /> },
      { icon: <SettingsIcon className="w-6 h-6 text-white" /> },
      { icon: <ShieldIcon className="w-6 h-6 text-white" /> },
      { icon: <SidebarIcon className="w-6 h-6 text-white" /> },
      { icon: <SlashIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <SlidersIcon className="w-6 h-6 text-white" /> },
      { icon: <StarIcon className="w-6 h-6 text-white" /> },
      { icon: <TagIcon className="w-6 h-6 text-white" /> },
      { icon: <TargetIcon className="w-6 h-6 text-white" /> },
      { icon: <ThumbsUpIcon className="w-6 h-6 text-white" /> },
      { icon: <Trash2Icon className="w-6 h-6 text-white" /> },
      { icon: <TrendingUpIcon className="w-6 h-6 text-white" /> },
      { icon: <UploadIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <UserPlusIcon className="w-6 h-6 text-white" /> },
      { icon: <UsersIcon className="w-6 h-6 text-white" /> },
      { icon: <VideoIcon className="w-6 h-6 text-white" /> },
      { icon: <Volume2Icon className="w-6 h-6 text-white" /> },
      { icon: <XIcon className="w-6 h-6 text-white" /> },
      { icon: <ZapIcon className="w-6 h-6 text-white" /> },
      { icon: <ClockIcon className="w-6 h-6 text-white" /> },
      { icon: <MessageSquareIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <GlobeIcon className="w-6 h-6 text-white" /> },
      { icon: <Share2Icon className="w-6 h-6 text-white" /> },
      { icon: <UserIcon className="w-6 h-6 text-white" /> },
      { icon: <CalendarIcon className="w-6 h-6 text-white" /> },
      { icon: <AwardIcon className="w-6 h-6 text-white" /> },
      { icon: <BarChart2Icon className="w-6 h-6 text-white" /> },
      { icon: <BriefcaseIcon className="w-6 h-6 text-white" /> },
      { icon: <CodeIcon className="w-6 h-6 text-white" /> },
    ],
    [
      { icon: <DatabaseIcon className="w-6 h-6 text-white" /> },
      { icon: <FileTextIcon className="w-6 h-6 text-white" /> },
      { icon: <GitBranchIcon className="w-6 h-6 text-white" /> },
      { icon: <GitCommitIcon className="w-6 h-6 text-white" /> },
      { icon: <GitPullRequestIcon className="w-6 h-6 text-white" /> },
      { icon: <HeadphonesIcon className="w-6 h-6 text-white" /> },
      { icon: <HelpCircleIcon className="w-6 h-6 text-white" /> },
      { icon: <HomeIcon className="w-6 h-6 text-white" /> },
    ],
  ];

  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-6 sm:px-8 md:px-16 py-16 sm:py-20 md:py-28 relative w-full bg-[#0e2828]">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 relative w-full">
        <div className="flex flex-col md:flex-row items-start gap-10 sm:gap-16 md:gap-20 relative self-stretch w-full">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col items-start gap-6 md:gap-8 relative w-full md:flex-1">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
              <div className="inline-flex items-center relative">
                <span className="font-heading-tagline text-[#d5ac57] whitespace-nowrap font-bold" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                  Tagline
                </span>
              </div>

              <div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full">
                <h2 className="self-stretch font-heading-h2 text-white" style={{ fontSize: '3.25rem', lineHeight: '120%' }}>
                  Contact us
                </h2>

                <p className="self-stretch font-text-medium-normal text-white" style={{ fontSize: '1.125rem', lineHeight: '150%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 py-2 relative">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {item.icon}
                  {item.isLink ? (
                    <a
                      href="#"
                      className="font-text-regular-normal text-white underline" style={{ fontSize: '1rem', lineHeight: '150%' }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-text-regular-normal text-white" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col items-start gap-6 relative w-full md:flex-1 mt-6 md:mt-0">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              <label className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-sm md:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Name
              </label>
              <Input className="self-stretch border border-solid border-[#ffffff33] bg-transparent text-white" />
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              <label className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-sm md:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Email
              </label>
              <Input className="self-stretch border border-solid border-[#ffffff33] bg-transparent text-white" />
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              <label className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-sm md:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Message
              </label>
              <Textarea
                className="h-[120px] sm:h-[150px] md:h-[182px] self-stretch border border-solid border-[#ffffff33] bg-transparent text-white"
                placeholder="Type your message..."
              />
            </div>

            <div className="flex items-center gap-2 pt-0 pb-4 px-0 relative">
              <Checkbox
                id="terms"
                className="w-5 h-5 rounded-sm border border-solid border-[#ffffff33]"
              />
              <label
                htmlFor="terms"
                className="text-white font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]"
              >
                I accept the{" "}
                <a
                  href="#"
                  className="underline font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] [font-style:var(--text-small-link-font-style)]"
                >
                  Terms
                </a>
              </label>
            </div>

            <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#d5ac57] text-[#123332] rounded-md border border-solid hover:bg-[#c09b46]">
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                Submit
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Horizontal Icon Rows */}
      <div className="w-full py-12 bg-[#0e2828]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white mb-12">Our Partners</h2>
          <div className="space-y-8">
            {iconRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {row.map((item, iconIndex) => (
                  <div 
                    key={`${rowIndex}-${iconIndex}`}
                    className="p-3 bg-white/10 rounded-lg hover:bg-[#d5ac57] transition-colors duration-300"
                  >
                    {React.cloneElement(item.icon, { 
                      className: 'w-6 h-6 sm:w-8 sm:h-8 text-white' 
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
