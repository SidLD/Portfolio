import React from 'react'
import { useLoaderData } from 'react-router-dom'

function CareerDetail() {
    const data = useLoaderData()
    return (
    <div>
        <h4>id: {data.id}</h4>
        <h4>title: {data.title}</h4>
        <h5>Salary: {data.salary}</h5>
        <h5>Location: {data.location}</h5>
    </div>
  )
}

export default CareerDetail

export const careerDetailLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch("http://localhost:4000/careers/"+id)
    return res.json();
}