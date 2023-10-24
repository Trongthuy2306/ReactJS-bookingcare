import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './About.scss';
import { FormattedMessage } from 'react-intl';


class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    <div >
                        Truyền thông nói về Booking
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/FyDQljKtWnI" title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                        </div>
                        <div className='content-right'>
                            <p>
                                Thay vì đi khám theo cách truyền thống, mất thời gian để xếp hàng lấy số, làm thủ tục và chờ đến lượt, thì hiện nay người bệnh đã đặt lịch khám chỉ cần đến cơ sở y tế trước 15 – 30 phút. Đặt lịch cũng giúp việc đi khám có kế hoạch hơn, giảm thiểu thời gian chờ đợi, người bệnh có sự chuẩn bị đầy đủ, kỹ lưỡng trước khi đi khám.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        languge: state.app.languge,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
