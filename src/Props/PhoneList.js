import React, { Component } from 'react'
import PhoneItem from './PhoneItem'

export default class PhoneList extends Component {

    data = [

        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },

        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },

        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }

    ]

    state = {
        phoneInfor: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    }

    showInfor = (phone) => {
        this.setState({
            phoneInfor: phone,
        })
    }

    renderPhones = () => {
        return (
            this.data.map((item, index) => {
                return (
                    <div key={index} className="col-4">
                        <PhoneItem data={item} showInfor={this.showInfor} />
                    </div>

                )
            })
        )
    }

    render() {
        return (
            <div>
                <h3 className="display-4 text-center">List Items</h3>
                <div className="row">
                    {this.renderPhones()}
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true"  >
                    <div className="modal-dialog">
                        <div className="modal-content " style={{ width: '600px' }}>
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">Phone Infor</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body row">
                                <div className="col-4">
                                    <img src={this.state.phoneInfor.hinhAnh} alt={this.state.phoneInfor.tenSP} style={{ width: '200px' }} />
                                </div>

                                <div className="col-8">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>{this.state.phoneInfor.tenSP}</th>

                                            </tr>
                                            <tr>
                                                <th>Price</th>
                                                <th>{this.state.phoneInfor.giaBan.toLocaleString()}</th>

                                            </tr>
                                            <tr>
                                                <th>RAM</th>
                                                <th>{this.state.phoneInfor.ram}</th>

                                            </tr>
                                            <tr>
                                                <th>ROM</th>
                                                <th>{this.state.phoneInfor.rom}</th>
                                            </tr>

                                        </thead>

                                    </table>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
