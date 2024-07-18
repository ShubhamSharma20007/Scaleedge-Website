import { Rubik } from "next/font/google"
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
export const font = Rubik({
  subsets: ['latin'],
  weight: ['300', '400'],
});


export const metadata = {
  metadataBase: new URL("https://scaleedge.in/"),
  title: {
    default: 'Web, Software & Mobile App Development | ScaleEdge Solution',
    // template: '%s | ScaleEdge Solution'
  },
  description: 'ScaleEdge Solution is a Web, software, and mobile app development company. We provide high-performing custom software solutions and digital marketing services.',
  keywords: "Web Development, Web Development Services, Mobile App Development, Mobile App Development Services, Software Development, Web Design, eCommerce Development, Digital Marketing, SEO, SMO, SMM, Blockchain Development",
  alternates: {
    canonical: "https://scaleedge.in/",
  },
  openGraph: {
    description: 'ScaleEdge Solution is a Web, software, and mobile app development company. We provide high-performing custom software solutions and digital marketing services.',
    url: "https://scaleedge.in/",
    title: 'Scaleedge Website',


  },
  twitter: {
    site: 'https://scaleedge.in/',
    title: 'Scaleedge Website',
    description: 'ScaleEdge Solution is a Web, software, and mobile app development company. We provide high-performing custom software solutions and digital marketing services.',
    image: 'https://scaleedge.in/assets/scaleedge-KBjbABNw.webp'
  },
  verification: {
    google: "_LMlS7Fud1o_zVP68URdDGy5oj7_OgtISXRlpI4vObE"
  },
  robots: {
    index: true, follow: true, archive: true, googleBot: { index: true, follow: true, archive: true }
  },
  authors: [
    { name: "ScaleEdge Solution" }
  ]

}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.placename" content="Alwar, Rajasthan, India" />
        <meta name="geo.position" content="27.594549,76.616687" />
        <meta name="geo.region" content="IN-Rajasthan" />

        <link rel="icon" type="image/x-icon" href="./images/scaleedge_ico.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RV4GV9YXVB"></script>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin='anonymous'></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin='anonymous'></script>

        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
        <script src="https://smtpjs.com/v3/smtp.js"></script>

        {/* Add crossorigin="anonymous" to the Font Awesome script */}
        <script src="https://kit.fontawesome.com/a7d20ff54b.js" aria-hidden crossOrigin="anonymous"></script>
        {/* Bootstrap Accordion */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        {/* metatag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RV4GV9YXVB"></script>
        {/* google analytics */}
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HQWFWNF026"
        strategy="afterInteractive"
      />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-HQWFWNF026');
        `}
        </Script>

      <body suppressHydrationWarning className={`main-class ${font.className}`} style={{ overflowX: 'hidden', backgroundColor: '#FFFCF3' }}>
        {children}
      </body>
      <GoogleAnalytics gaId="https://www.googletagmanager.com/gtag/js?id=G-HQWFWNF026" />



    </html>
  );
}

