// import { getEntries, createEntry,deleteEntry } from "./actions";

// export default async function Home(){
//   const entries = await getEntries();
//   return(
//     <div className="w-full min-h-screen bg-[url('./bg_unsplash_scott.jpg')]">
//       <div className="flex">
//       
//       {entries.map((entry)=>(
//         <div key={entry.id}>
//           <h3>{entry.title}</h3>
//           <p>{entry.content}</p>
//           
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

import Entry from "./entries/Entry";

export default function Home(){
  return(
    <div className="w-full min-h-screen">
      <Entry/>
    </div>
  )
}

//  bg-[url('./bg_unsplash_scott.jpg')]