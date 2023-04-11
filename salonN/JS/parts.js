'use strict'; 
{
    const $header_parys = document.getElementById('header_parts');
    $header_parys.insertAdjacentHTML('afterbegin' , `
<header>
    <div class="home_link">
        <div>
            <a href="./index.html"><img class="icon" src="../images/icon.png"></a>
        </div>
        
        <div class="name">
            <a href="./index.html"><p>praivate salon -N-</p></a>
        </div>
    </div>    

    <div class="menu-container">
        <a class="button" href="../html/index.html">
            <p>Home</p>
        </a>

        <a class="button" href="../html/shop.html">
            <p>Shop</p>
        </a>

        <a class="button" href="../html/menu.html">
            <p>Menu</p>
        </a>

        <a class="button" href="../html/item.html">
            <p>Item</p>
        </a>     

        <a class="button" href="../html/voice.html">
            <p>Voice</p>
        </a>
    </div>
</header>
`)};

{
    const $footer_parys = document.getElementById('footer_parts');
    $footer_parys.insertAdjacentHTML('afterbegin' , `
    <footer>
    <div class="footer-item">
        <div class="office">
            <a href="./index.html"><img src="../images/icon.png"></a>
            
            <p class="address">〒035-0031<br>
                青森県むつ市柳町4-3-9<br>
                エスポアナカノB<br><br>
                (10:00〜16:00 完全予約制)<br>
            </p>

            <div class="sns">
                <a class="instagram" href="https://www.instagram.com/private__salon__n/"><span class="f-fa fa-brands fa-instagram" style="color: #ffffff;"></span></a>
                <a class="line" href="https://lin.ee/TJwPYg8"><span class="f-fa fa-brands fa-line" style="color: #06c755;"></span></a>
            </div>
        </div>

        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.1664348005313!2d141.21365298041366!3d41.30635753275245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9c3f315822acfb%3A0x47fe574efe84797f!2z44CSMDM1LTAwMzEg6Z2S5qOu55yM44KA44Gk5biC5p-z55S677yU5LiB55uu77yT4oiS77yZ!5e0!3m2!1sja!2sjp!4v1681104410656!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="footer-links">
            <div class="fl-box">
                <a href="../html/business.html">Shop</a>
                <a href="../html/menu.html">Menu</a>
                <a href="../html/item.html">Item</a>
                <a href="../html/voice.html">Voice</a>
            </div>

            <div class="fl-box">
                <a href="../html/privacy.html">プライバシーポリシー</a>
            </div>
        </div>
    </div>

    <div class="copy-bar">
        <p><span>&copy;</span>2023 Deer </p>
    </div>
</footer>
`)};