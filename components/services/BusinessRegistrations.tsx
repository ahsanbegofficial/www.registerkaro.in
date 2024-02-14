import React from 'react'
import { useRouter } from "next/router";
import { FormAds } from '../child_components/FormAds';

export const BusinessRegistrations = ({ data }: { data: any }) => {
  const router = useRouter();
  const Query = router.query.state as string;
  let name = "", city = "";
  if (Query) {
    [name, city] = Query.split("-in-");
    name = name.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    city = city.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  const interpolatedHTML = data.replace(/\{name}/g, name).replace(/\{city}/g, city);

  return (
    <div className='businessRegistrations'>
      <div className='reg'>
        <div dangerouslySetInnerHTML={{ __html: interpolatedHTML }}></div>
      </div>
      <FormAds Query={Query}/>
    </div>
  )
}