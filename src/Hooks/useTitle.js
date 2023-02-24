import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Skill Digger`
    },[title])
}
export default useTitle; 