import React from 'react';

export class Footer extends React.Component {
  onRender = (): null => {
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className="footer parentbox">
          <div className="footer-container childbox">
            <div className="footer-logo"></div>
            <div className="footer-info-menu">
              <div className="footer-info-menu-column-1">
                <a>Наши работы</a>
                <a>О компании</a>
                <a>Новости</a>
                <a>Контакты</a>
              </div>
              <div className="footer-info-menu-column-2">
                <a>Доставка</a>
                <a>Оплата</a>
                <a>Скидки</a>
                <a>Акции</a>
                <a>Статус заказа</a>
              </div>
              <div className="footer-info-menu-column-3">
                <a>Как заказать?</a>
                <a>Каталог товаров</a>
                <a>Обмен и возврат</a>
                <a>Статьи</a>
                <a>Поитика безопасности</a>
              </div>
              <div className="footer-info-menu-column-4">
                <a>Отзывы</a>
                <a>Карта сайта</a>
              </div>
            </div>
            <div className="footer-info-home-icon"></div>
            <div className="footer-info-mail-icon"></div>
            <div className="footer-info-phone-icon"></div>
            <div className="footer-info-copyright">
              Copyright © 2001-2021 ООО "НА ОЛИМПЕ"
            </div>
            <div className="footer-info-mode">
              Режим работы: пн-пт с 10:00 до 19:00
            </div>
            <div className="footer-info-location">
              Москва, Верейская ул., 29, стр. 106
            </div>
            <div className="footer-info-mail">
              info@na-olimpe.ru
            </div>
            <div className="footer-info-number2">
              8 (495) 775-59-52
            </div>
            <div className="footer-info-number1">
              8 (495) 775-59-52
            </div>
            <div className="footer-info-name">
              Продажа наградной продукции опт и розница по России
            </div>
            <div className="footer-info-social-container">
              <div className="footer-info-social footer-info-social-1"></div>
              <div className="footer-info-social footer-info-social-2"></div>  
              <div className="footer-info-social footer-info-social-3"></div>
            </div>
          </div>
        </div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}