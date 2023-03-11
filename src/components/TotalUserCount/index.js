import React, { useEffect, useState } from 'react'
import { addDoc, collection, getCountFromServer, getDocs } from 'firebase/firestore'
import { firebaseDb } from '@/firebase/init'

function TotalUserCount() {
    const [totalCount, setTotalCount] = useState(0)
    const [intial, setIntial] = useState(true)
    const [data, setData] = useState('')

    useEffect(() => {
        console.log('called')
        if (!intial) return
        fetch("https://geolocation-db.com/json/")
            .then(response => response.json())
            .then(async res => {
                setData(res)
            })
            .catch(err => console.error(err, "sss"))
        getVisitorCount()

    }, [])

    const getVisitorCount = async () => {
        const docRef = collection(firebaseDb, "visitor");
        const snapShot = await getCountFromServer(docRef)
        const total = snapShot.data().count;
        setTotalCount(total)
        console.log(total, 'total')
    }

    useEffect(() => {
        if (!intial) return;
        if (!data) return;
        let arr = false;
        const docRef = collection(firebaseDb, "visitor");
        getDocs(docRef).then(r => {
            r?.docs?.forEach((i) => {
                console.log(i.data(), "aaa", data)
                if (i.data().ip === data?.IPv4) {
                    arr = data.IPv4
                }
            })
            console.log(arr, "ip")

            arr ? '' : handleAddIp(data)
        });
        setIntial(false);
    }, [data]);

    const handleAddIp = async (res) => {
        const docRef = collection(firebaseDb, "visitor");
        await addDoc(docRef, { ip: res.IPv4 ? res.IPv4 : res.country_name });
    }
    return (
        <>
            <div className='flex ml-auto mr-[25px] bg-[#ad0b6a] rounded-lg justify-center mt-[40px] mb-[40px]'>
                <div className='px-[20px] py-[15px] '>
                    <p className='text-white font-bold'>{totalCount}</p>
                </div>
            </div>
        </>

    )
}

export default TotalUserCount