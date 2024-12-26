import React from 'react';

export class ProfileHeader extends React.Component {
  onRender = (): null => {
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='header'>
          <div className="header-top parentbox">
            <div className="header-top-container childbox">
              <div className="header-top-logo">
                <div className="header-top-logo-name-container-1">
                  <div className="header-top-logo-name-container-2">
                    <div className="header-top-logo-name-container-3">
                      <div className="header-top-logo-name-icon-1"></div>
                      <div className="header-top-logo-name-icon-2"></div>
                      <div className="header-top-logo-name-icon-3"></div>
                      <div className="header-top-logo-name-icon-4"></div>
                      <div className="header-top-logo-name-icon-5"></div>
                      <div className="header-top-logo-name-icon-6"></div>
                      <div className="header-top-logo-name-icon-7"></div>
                      <div className="header-top-logo-name-icon-8"></div>
                    </div>
                  </div>
                </div>
                <div className="header-top-logo-image"></div>
              </div>
              <div className="header-top-catalog">
                <div className="header-top-catalog-button">
                  <div className="header-top-catalog-button-content">
                    <div className="header-top-catalog-button-content-icon-container">
                      <div className="header-top-catalog-button-content-icon-1"></div>
                    </div>
                    <div className="header-top-catalog-button-content-text">
                      Каталог
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-top-search">
                <div className="header-top-search-field">
                  <div className="header-top-search-field-string">
                    <div className="header-top-search-field-string-button">
                      <div className="header-top-search-field-string-icon-container">
                        <div className="header-top-search-field-string-icon-1"></div>
                      </div>
                    </div>
                    <div className="header-top-search-field-string-text">
                      Поиск по сайту
                    </div>
                  </div>
                  <div className="header-top-search-field-by_event">
                    <div className="header-top-search-field-by_event-rectangle"></div>
                  </div>
                </div>
                <div className="header-top-search-filters">
                  <div className="header-top-search-filters-button">
                    <div className="header-top-search-filters-button-icon-container-1">
                      <div className="header-top-search-filters-button-icon-container-2">
                        <div className="header-top-search-filters-button-icon-container-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-top-location">
                <div className="header-top-location-icon-container-1"></div>
                <div className="header-top-location-city">
                  Москва
                </div>
              </div>
              <div className="header-top-phone">
                <div className="header-top-phone-icon"></div>
                <div className="header-top-phone-number">
                  8 (495) 775-5952  
                </div>
              </div>
              <div className="header-top-profile">

              </div>
              <div className="header-top-heart">

              </div>
              <div className="header-top-cart">

              </div>
            </div>
          </div>
          <div className="header-middle parentbox">
            <div className="header-middle-container childbox">
              <div className="header-middle-menu">
                <div className="header-middle-menu-component-active">
                  Награды
                </div>
                <div className="header-middle-menu-component">
                  Подарки
                </div>
                <div className="header-middle-menu-component">
                  Сувениры
                </div>
                <div className="header-middle-menu-component">
                  Спорт товары
                </div>
                <div className="header-middle-menu-component">
                  Вышивка
                </div>
              </div>
            </div>
          </div>
          <div className="header-profile parentbox">
            <div className="header-profile-container childbox">
              <div className="header-profile-data">
                <div className="header-profile-data-avatar"></div>
                <div className="header-profile-data-text-container">
                  <div className="header-profile-data-fullname">
                    Лукьян Дмитрий Михайлович
                  </div>
                  <div className="header-profile-data-check">
                    Личные данные 
                  </div>
                </div>
              </div>
              <div className="header-profile-discount">
                <div className="header-profile-discount-text">
                  Ваша скидка
                </div>
                <div className="header-profile-discount-number">
                  10% на весь каталог
                </div>
              </div>
              <div className="header-profile-balance">
                <div className="header-profile-balance-text">
                  Баланс
                </div>
                <div className="header-profile-balance-number">
                  2 993 ₽
                </div>
              </div>
              <div className="header-profile-delivery">
                <div className="header-profile-delivery-icon"></div>
                <div className="header-profile-delivery-text">
                  До бесплатной доставки:
                </div>
                <div className="header-profile-delivery-balance">
                  Баланс
                </div>
              </div>
              <div className="header-profile-cabinet">
                Личный кабинет
              </div>
            </div>
          </div>
        </div>
        <div className="profileheader-margin"></div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}