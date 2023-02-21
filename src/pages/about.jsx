import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Javier Galera</title>
        <meta
          name="description"
          content="I’m Javier Galera. I live in Spain, where I forge stars."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Javier Galera. I live in Spain, where I forge stars.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved forging things for as long as I can remember, and
                wrote my first program when I was 11 years old, a basic program that helped me memorize the subjects I hated the most (Ahem, literature, ahem!).
              </p>
              <p>
                The only thing I loved as much as than computers as a kid was space and drawing.
                I was so obsessed with space that I only thought about being an astronaut so I could explore everything out there.<br />
                When I was 10, I stumbled upon a video of Steve Jobs talking about his vision about technology.
                Something clicked on my head, I finally found someone who shared a similar vision to me. 
                That day, I knew that I needed to create something big, create my own company.
              </p>
              <p>
                I spent the next few summers writing down and drawing ideas, improving my programming skills, and of course, thinking about the name, and I came out with a temporary name, <em>ProjectDream</em>.<br />
              </p>
              <p>
                When I was 16 years old, a movie came out in theaters, and a friend and I went to see it together, it was called <em>Interstellar.</em><br />
                That movie became my favorite movie of all time that day.<br />
              </p>
              <p>
                The day after, my friend and I went for a walk in the middle of the night, we stargazed for some hours and we talked about the space.<br />
                The space, filled with mistery and possibilities. And those stars were shining in that infinite black sky, a beacon of hope. They were guiding us for centuries. That night, I knew the name that my company should have.
              </p>
              <p>
                Today, I’m an iOS Software Engineer and the founder of <b>Space</b>, where we’re working on <em>forging</em> the best products possible, with only one goal on mind, to help people reach the endless possibilities that this world offers — we are <em>forging stars</em>.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/javiergalera98" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/javiergalera98" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/javiergalera98" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/javiergalera98/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hello@javiergalera.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@javiergalera.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}