
export const metadata = {
    title:{
      default:'HR Edge : All-in-One Human Resources (HRMS) Software'
    },
    description: " HR Edge Software provides HR Management System (HRMS) to suit all your business needs, which can also be customized as per your requirements and manages all HR functions efficiently.",
    keywords: " HR System, Human Resource Management System, HRMS, HR Management System, HR Software,  HR software solution, HR Management Software",
    alternates: {
      canonical: "https://scaleedge.in/hredge" 
    },
    openGraph: {
      description:" HR Edge Software provides HR Management System (HRMS) to suit all your business needs, which can also be customized as per your requirements and manages all HR functions efficiently.",
      url: "https://scaleedge.in/hredge" 
    },
    authors: [
      { name:"ScaleEdge Solution"}
    ],
    robots:{
      index:true,follow:true,archive:true,googleBot:{index:true,follow:true,archive:true}
    },
    
   
  
  }

export default function HrEdgeRoot({children}){
    return(
        <>
        {children}
        </>
    )
}