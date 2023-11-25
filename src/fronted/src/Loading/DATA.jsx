import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from './Actions'
import { Loading } from './Loading/Loading'
import './Data.css'

const DATA = () => {
    const { loading, error, data } = useSelector(state => state.ApiData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch])

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch({ type: 'clearErrors' });
        }
    }, [dispatch, error])

    if (!data) {
        return <div><Loading /></div>
    }



    return <>
        {
            loading ? <Loading /> : <div className='dataPage' >
                <h1 className='heading' >User Data</h1>
                <div className='data'>
                    <div className="header">
                        <h2 className="id">ID</h2>
                        <h2 className="name">Name</h2>
                        <h2 className="email">Email</h2>
                        <h2 className="address">Address</h2>
                        <h2 className="phone">Phone</h2>
                        <h2 className="website">Website</h2>
                        <h2 className="company">Company</h2>
                    </div>
                    {
                        data.map((item, index) => {
                            return <div key={index}>
                                <div className="headerData">
                                    <p className="id">{item.id}</p>
                                    <p className="name">{item.name}</p>
                                    <p className="email">{item.email}</p>
                                    <p className="address">
                                        <div className="addressName">
                                            {item.address.street}, {item.address.suite}, {item.address.city}
                                        </div>
                                        <div className="code"><p><span>Zip-Code : </span>{item.address.zipcode}</p></div>
                                        <div className="location"><span><img src="/location.png" alt="" /></span> &nbsp; {item.address.geo.lat}, {item.address.geo.lng}</div>

                                    </p>
                                    <p className="phone">{item.phone}</p>
                                    <p className="website">{item.website}</p>
                                    <p className="company">
                                        <div className="companyName">{item.company.name}</div>
                                        <div className="companyCatchPhrase">{item.company.catchPhrase}</div>
                                        <div className="companyBs">{item.company.bs}</div>
                                    </p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        }
    </>
}

export default DATA