// 'use client';
// import { useRouter, useParams } from "next/navigation";
const PropertyPage = ({params}) => {
    return ( 
    <div className="text-4xl">
       
        Property Page {params.id}
      
    </div> 
    );
}
 
export default PropertyPage;