import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';
import './HomeFooter.scss';

const HomeFooter = () => {
    return (
        <footer class="home-footer">
            <div class="left-section">
                <h3 class="company-name">Công ty Cổ phần Công nghệ BookingCare</h3>
                <p class="company-address">Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
                <p class="company-info">ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
                <p class="contact"><span class="icon"><i class="fas fa-phone"></i></span> 024-7301-2468 (7h - 18h)</p>
                <p class="contact"><span class="icon"><i class="fas fa-envelope"></i></span> support@bookingcare.vn (7h - 18h)</p>
            </div>
            <div class="right-section">
                <h3 class="company-name">Văn phòng tại TP Hồ Chí Minh</h3>
                <p class="office-address">Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
            </div>
            <div class="social-icons">
                <a href="#" class="facebook-icon"><i class="fab fa-facebook"></i></a>
                <a href="#" class="twitter-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="instagram-icon"><i class="fab fa-instagram"></i></a>
            </div>
        </footer>
    );
};

export default HomeFooter;