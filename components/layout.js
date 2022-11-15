import Head from "next/head";
import Image from "next/image";
import { container, header } from "./layout.module.css";
import { borderCircle, headingLg, heading2x1, colorInherit, backToHome } from "../styles/utils.module.css";
import Link from "next/link";
import img from '../pages/images/profile.jpg'
export const siteTitle = 'Next.js Learning Env'
const name = 'WerewolfWill712'
export default function Layout({children, home}) {
    return (
        <div className={container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="learning how to build a website with next js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={header}>
                {home? (
                    <>
                        <Image
                            priority
                            src={img}
                            className={borderCircle}
                            height={144}
                            width={144}
                            alt=''
                        />
                        <h1 className={heading2x1}>{name}</h1>
                    </>
                ):(
                    <>
                        <Link href='/'>
                            <Image
                                priority
                                src={img}
                                className={borderCircle}
                                height={108}
                                width={108}
                                alt=''
                            />  
                        </Link>
                        <h2 className={headingLg}>
                            <Link href='/' className={colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={backToHome}>
                    <Link href='/'>Back to Home</Link>
                </div>
            )}
        </div>
    )
}