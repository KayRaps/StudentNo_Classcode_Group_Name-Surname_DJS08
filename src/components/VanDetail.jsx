import React from "react"
import { useParams } from "react-router-dom"

export default function vanDetail() {
    const params = useParams()
    console.log(params)


    React.useEffect(() => {

    }, [])
    return <h1>Van detail page goes here</h1>
}