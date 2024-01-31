'use client'

import Image from "next/image"
import { Result } from "../interfaces/users"
import { Dispatch, ReactNode, SetStateAction } from "react";

type Props = {
    userInfo: Result[],
    setModal:Dispatch<SetStateAction<boolean>> 
}
const UserInformation = ({ userInfo, setModal }: Props) => {
    return (
        <div className="w-full min-h-screen absolute flex flex-col items-center bg-[#000000c0]">
            <div onClick={()=>setModal(false)} className="text-white font-normal text-4xl absolute right-4 top-4">x</div>
            <section className="w-[80%] md:w-[60%] mt-10 bg-[#0e5663f6] p-4 rounded-md">
                {userInfo?.map(info =>
                    <div className="grid grid-cols-4 gap-4" key={info.login?.salt}>
                        <div className="col-start-2 col-span-2 flex flex-col items-center" >
                            <Image className="rounded-full" src={info.picture?.large!} width={150} height={150} alt="user" />
                            <p className=" font-medium text-3xl">{info.name?.first} {info.name?.last}</p>
                        </div>
                        <div className="col-start-1 col-span-2">
                            <p className="font-bold text-base">Gender: <span className="capitalize font-normal text-sm">{info.gender}</span></p>
                            <p className="font-bold text-base">Age: <span className="capitalize font-normal text-sm">{info.dob?.age}</span></p>
                            <p className="font-bold text-base">Phone: <span className="capitalize font-normal text-sm">{info.phone}</span></p>
                        </div>
                        <div className="col-start-3 col-span-2">asdasdasdasd</div>
                        
                    </div>
                )}

            </section>
        </div>
    )
}

export { UserInformation }