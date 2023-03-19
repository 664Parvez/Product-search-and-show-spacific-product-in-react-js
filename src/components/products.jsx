import React, {useState} from 'react'
import { useGetProductsQuery } from '../feature/productApi/product'

const Products = () => {

    const [formData, setFormData] = useState('')

    const {data, isLoading, isError} = useGetProductsQuery()

    if(isLoading) {
        return <p>Loading . . . .</p>   
    }
    else if (isError) {
        return <p>Data Fetching Problem</p>
    }


  return (
    <>
        <div className="container">
            <h1 className='text-center'>Products API</h1>

            <input type="text" className='form-control form-control-lg my-4' placeholder='Search your product . . . .' onChange={(e) => setFormData(e.target.value)} />

            <div className="row">

                {
                    data.filter((value) => {

                        if (formData === '') {
                            return value
                        } else if ((value.title.toLowerCase() && value.category.name.toLowerCase()).includes(formData.toLowerCase())) {
                            return value
                        }

                    }).map((item, key) => { 

                        return (
                                 
                            <>
                                <div className="col-lg-3 mt-3">
                                    <div className="card" key={key}>
                                        <img className='card-img' src={item.images[0]} alt="" />
                                        <div className="card-body">
                                            <h5>{item.title}</h5>
                                            <h4>${item.price}</h4>
                                            <p className='text-end'>{item.category.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            
                        )
                    })
                }

            </div>
        </div>
    </>
  )
}

export default Products


// https://api.escuelajs.co/api/v1/products