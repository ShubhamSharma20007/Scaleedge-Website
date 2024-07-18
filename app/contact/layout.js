
export const metadata = {
    title:{
      default:'Contact Service | ScaleEdge Solution',

    },
    description: "ScaleEdge Solution is a trusted Web, software, and mobile app development company. We provide high-performing custom software solutions and digital marketing services.",
    keywords: "IT solutions, technology consulting, contact us, business technology, information technology, IT services, technology solutions, contact form, IT support.",
    alternates: {
      canonical: "https://scaleedge.in/contact"
    },
    openGraph: {
      description:"ScaleEdge Solution is a trusted Web, software, and mobile app development company. We provide high-performing custom software solutions and digital marketing services.",
      url: "https://scaleedge.in/contact"
    },
    robots:{
      index:true,follow:true,archive:true,googleBot:{index:true,follow:true,archive:true}
    },
    authors: [
      { name:"ScaleEdge Solution"}
    ]
  
  }
export default function contactRoot({children}){
    return(
        <>
        {children}
        </>
    )
}