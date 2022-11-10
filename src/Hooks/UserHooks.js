import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => {
        document.title = `${title} - Devents`
    }, [title])

}

export default useTitle;