
export const metadata = {
    title:{
      default:'All Software & Mobile App Developmen | ScaleEdge Solution',

    },
    description: "Learn more about ScaleEdge, a cutting-edge technology company dedicated to providing innovative solutions for businesses. Explore our mission, values, and the team driving our success.",
    keywords: "Website Development, Web Development solutions, Mobile App Development, Mobile App Development Services, Software Development, Web Design, web solutions, Digital Marketing Services, Custom Softaware Development",
    alternates: {
      canonical: "https://scaleedge.in/about",
    },
    openGraph: {
      description:"Learn more about ScaleEdge, a cutting-edge technology company dedicated to providing innovative solutions for businesses. Explore our mission, values, and the team driving our success.",
      url: "https://scaleedge.in/about",
    },
    robots:{
      index:true,follow:true,archive:true,googleBot:{index:true,follow:true,archive:true}
    },
    authors: [
      { name:"ScaleEdge Solution"}
    ]
  
  }
export default function aboutRoot({children}){
    return(
        <>
        {children}
        </>
    )
}