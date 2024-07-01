// "use client";

// import Link from "next/link";
// import React, { FC, useEffect, useState } from "react";

// interface iLoad {
//   session: any;
// }

// const page: FC<iLoad> = ({ session }) => {
//   const [state, setState] = useState<any>([]);

//   const fetchData = async() => {
//     return await fetch(`http://localhost:3000/api/project`, {
//       method: "GET",
//       cache: "no-cache",
//       next: {
//         tags: ["project"],
//       },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((result: any) => {
//         console.log("result: ", result);
//         setState(result?.data?.projects);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <p className="pb-3 font-medium border-b text-[12px] mb-3">
//         Projects:
//       </p>
//       <div className="text-[12px] font-semibold">
//         <div>
//           {state?.map((props: any, i: number) => (
//             <div>
//               {(
//                 <Link
//                   href="/"
//                   className="my-1 flex flex-col hover:bg-neutral-900 hover:text-white transition-all duration-300 py-2 px-1 rounded-sm"
//                 >
//                   # {props.title}
//                   # {props.dueDate}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;