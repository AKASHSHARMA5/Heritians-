import React from 'react'
import Alert from './Alert'

export default function Form() {
    const alerts=()=>{
      alert("Form Submitted Successfully!!!")
    }
    return (
        <div id='formss'>
            <div className="my-3 mx-5">
                <h3 id='heading' className='my-3'>Employee Form</h3>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    General Details
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="name">Username</label>
                                            <input type="name" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="name" className="form-control" id="name" />
                                        </div>
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Company Details
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Company Name</label>
                                            <input type="name" className="form-control" id="inputEmail4" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">CNJ</label>
                                            <input type="name" className="form-control" id="inputPassword4" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Account Number</label>
                                        <input type="password" className="form-control" id="password" placeholder="1234 Main St" />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">ISPB</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Compecode</label>
                                            <input type="name" className="form-control" id="inputPassword4" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text">Issuer</label>
                                        <input type="text" className="form-control" id="text" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-group col-md-">
                                        <label htmlFor="inputState">Account type</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>saving</option>
                                            <option>current</option>
                                            <option>salary</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-">
                                        <label htmlFor="name">Compecode</label>
                                        <input type="name" className="form-control" id="inputPassword4" />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Additional Information
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="text">Home number</label>
                                            <input type="text" className="form-control" id="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress2">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">State</label>
                                            <select id="inputState" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>Delhi</option>
                                                <option>Banglore</option>
                                                <option>Gurugram</option>
                                                <option>Chennia</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={alerts} type="submit" className="mx-5 btn btn-primary">Add</button>
        </div>
    )
}
