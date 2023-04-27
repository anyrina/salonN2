'use strict'; 
{
    const $header_parys = document.getElementById('header_parts');
    $header_parys.insertAdjacentHTML('afterbegin' , `
<header id="header" class="header_flex">
    <div  class="name_header">
        <p id="name_header"><span class="none">FACE & BODY ESTHETIC<br></span>
         <span id="name_header_span">praivate salon N</span><br>
         <span id="none" class="none"> プライベート　サロン　エヌ</span></p>
    </div>

    <div class="menus_header">
        <ul class="header_flex">
            <li><a class="button_header home_header" href="./index.html">HOME</a></li>
            <li><a class="button_header menu_header0" href="">MENU</a></li>
            <li><a class="button_header" href="./item.html">ITEM</a></li>
            <li><a class="button_header" href="./shop.html">STORE INFO</a></li>
        </ul>
    </div>

    <!-- ハンバーガーメニュー部分 -->
    <div class="nav">
    
        <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
        <input id="drawer_input" class="drawer_hidden" type="checkbox">
    
        <!-- ハンバーガーアイコン -->
        <label for="drawer_input" class="drawer_open"><span></span></label>
    
        <!-- メニュー -->
        <nav class="nav_content">
          <ul class="nav_list">
            <li class="nav_item"><a href="./index.html">HOME</a></li>
            <li class="nav_item"><a href="./menu.html">MENU</a></li>
            <li class="nav_item"><a href="./item.html">ITEM</a></li>
            <li class="nav_item"><a href="./shop.html">SHOP INFO</a></li>
            </ul>
        </nav>
   
      </div>
</header>
    `)};

{
    const $footer_parys = document.getElementById('footer_parts');
    $footer_parys.insertAdjacentHTML('afterbegin' , `

    <footer>
    <div class="footer_items">
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.1664348005313!2d141.21365298041366!3d41.30635753275245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9c3f315822acfb%3A0x47fe574efe84797f!2z44CSMDM1LTAwMzEg6Z2S5qOu55yM44KA44Gk5biC5p-z55S677yU5LiB55uu77yT4oiS77yZ!5e0!3m2!1sja!2sjp!4v1681104410656!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="office">
            <div class="footer_sqare"></div>

            <div class="footer_office_item">

                <div class="footer_office_info">
                    <a href="./index.html"><span class="shop_name">salan N</span></a>
                    
                    <p>〒035-0031 青森県むつ市柳町4-3-9 エスポアナカノB</p>
                    <table class="table_footer">
                        <tr><th>営業時間</th> <td>10:00~16:00  /  17:00~19:00</td></tr>
                        <tr><th>定休日</th> <td>日曜・祝日</td></tr>
                        <tr><th>駐車場あり</th> <td>1台</td></tr>
                        <tr><th>支払い方法</th> <td>現金 / VISA / JCB / Master</td></tr>
                    </table>

                    <div class="sns">
                        <a class="instagram" href="https://www.instagram.com/private__salon__n/"><span class="f-fa fa-brands fa-instagram" style="color: #ffffff;"></span></a>
                        <a class="line" href="https://lin.ee/TJwPYg8"><span class="f-fa fa-brands fa-line" style="color: #06c755;"></span></a>
                    </div>
                </div>    

            </div>
        </div>

    </div>

    <div class="copy-bar">
        <p><small>Copyright &copy; 2023 / praivate salon N / All Rights Reserved.</small></p>
    </div>
</footer>

`)};