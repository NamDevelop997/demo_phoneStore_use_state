import React, { Component } from 'react'

export default class PhoneItem extends Component {
    render() {
        let { hinhAnh, tenSP, giaBan } = this.props.data;
        return (
            <div className="card mt-4 " style={{ border: 'none' }}>
                <img className="card-img-top" src={hinhAnh} alt={tenSP} style={{ width: '150px', height: '150px' }} />
                <div className="card-body">
                    <h4 className="card-title">{tenSP} </h4>
                    <p className="card-text">Price: {giaBan.toLocaleString()}$</p>
                    <p className="btn btn-warning " data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        this.props.showInfor(this.props.data)
                    }}>View detail</p>
                </div>
            </div>
        )
    }
}
