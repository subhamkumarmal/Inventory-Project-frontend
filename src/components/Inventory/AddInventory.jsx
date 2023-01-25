import { useEffect, useState } from "react";
import { getInventorys } from "../axiosCall/apiCalls"
import { ReusableToster } from "../message/notifyMessages";

export const AddInventorys = () => {
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        fetchInitialDatas()
    }, [])
    const fetchInitialDatas = async () => {
        const res = await getInventorys()
        if (res.data) {
            setInventorys(res.data)
        } else {
            ReusableToster({ type: 'info' })
        }
    }
    return (
        <div>
        </div>
    )
}