const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('.langs');
        // LANG CONTENTS
        // NAVBAR
		// const logoLang = document.querySelector('.logoLang');
		const nabLangHome = document.querySelector('.nabLangHome');
		const navLangAbout = document.querySelector('.navLangAbout');
		const navLangBooks = document.querySelector('.navLangBooks');
		const navLangNews = document.querySelector('.navLangNews');
		const navAddLang = document.querySelector('.navAddLang');
		const addNewsLang = document.querySelector('.addNewsLang');
		const logOutLang = document.querySelector('.logOutLang');
		const loginNavLang = document.querySelector('.loginNavLang');
		const regNavLang = document.querySelector('.regNavLang');
        // 
/*
		// const carLang1 = document.querySelector('.carLang1');
		// const carLang2 = document.querySelector('.carLang2');
        // 
		// const fakTechLang = document.querySelector('.fakTechLang');
		// const fakLang = document.querySelector('.fakLang');
		// const studentLang = document.querySelector('.studentLang');
*/
        // NAVBAR END
        // OUR TEACHRS
		const teachLang = document.querySelector('.teachLang');
		const teachParagr = document.querySelector('.teachParagr');
        // OUR TEACHRS END

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');
                
                // NAVBAR
                
				// logoLang.textContent = data[attr].logoLang;
				nabLangHome.textContent = data[attr].nabLangHome;
				navLangAbout.textContent = data[attr].navLangAbout;
				navLangBooks.textContent = data[attr].navLangBooks;
				navLangNews.textContent = data[attr].navLangNews;
				navAddLang.textContent = data[attr].navAddLang;
				addNewsLang.textContent = data[attr].addNewsLang;
				logOutLang.textContent = data[attr].logOutLang;
				loginNavLang.textContent = data[attr].loginNavLang;
				regNavLang.textContent = data[attr].regNavLang;
                // NAVBAR END
                /*
                // CAROUSEL
				// carLang1.textContent = data[attr].carLang1;
				// carLang2.textContent = data[attr].carLang2;
                // CAROUSEL END
                    // fakTechLang
				// fakTechLang.textContent = data[attr].fakTechLang;
				// fakLang.textContent = data[attr].fakLang;
				// studentLang.textContent = data[attr].studentLang;
                    // fakTechLang END
                */
                // OUR TEACHRS
				teachLang.textContent = data[attr].teachLang;
				teachParagr.textContent = data[attr].teachParagr;
                // OUR TEACHRS END
			});
		});
		
		var data = {
			  "english": 
			  {
                // NAVABR
                //   "logoLang": `Kashkadarya College of Information Technologies`,
                  "nabLangHome": "HOME",
                  "navLangAbout": "ABOUT",
                  "navLangBooks": "BOOKS",
                  "navLangNews": "NEWS",
                  "navAddLang": "ADD",
                  "addNewsLang": "ADD NEWS",
                  "logOutLang": "Log out",
                  "loginNavLang": "Login",
                  "regNavLang": "Sign up",
                  //   NAVBAR END
                  /*
                  // HOME CAROUSEL
                //   "carLang1": "IT TECHNICUM",
                //   "carLang2": "Kashkadarya College of Information Technology",
                // // HOME CAROUSEL END
                // // fakTechLang
                //   "fakTechLang": "TEACHERS",
                //   "fakLang": "FACULTIES",
                //   "studentLang": "STUDENTS",
                // // fakTechLang  END
                */
			    "teachLang": "Our teachers",
			    "teachParagr": "Our teachers are masters of their profession and all have many years of experience!",
			  },
			  "uzbek": 
			  {
                  // NAVABR
                //   "logoLang": `Qashqadaryo Axborot Texnalogiyalari Texnikumi`,
                  "nabLangHome": "BOSH SAHIFA",
                  "navLangAbout": "BIZ HAQIMIZDA",
                  "navLangBooks": "KUTUBXONA",
                  "navLangNews": "YANGILIKLAR",
                  "navAddLang": "QO'SHISH",
                  "addNewsLang": "Yanglik qo'shish",
                  "logOutLang": "Chiqish",
                  "loginNavLang": "Kirish",
                  "regNavLang": "Ro'yxatdan o'tish",
                //   NAVBAR END
                    /*
                // // HOME CAROUSEL
                // "carLang1": "IT TEXNIKUM",
                // "carLang2": "Qashqadaryo axborot texnalogiyalari texnikumi",
                // // HOME CAROUSEL END
                // //   TEACHERS
                // "fakTechLang": "O'QITUVCHILAR",
                // "fakLang": "FAKULTETLAR",
                // "studentLang": "TALABALAR",
                // //   TEACHERS
                */
			    "teachLang": "Bizning o`qituvchilar",
			    "teachParagr": "Bizning o`qituvchilar o`z kasbining ustalari hisoblanadi va barchalari uzoq yillik tajribaga ega!"
			  },
			  "russian": 
			  {
                  // NAVABR
                //   "logoLang": `Кашкадарьинский колледж информационных технологий`,
                  "nabLangHome": "ДОМА",
                  "navLangAbout": "УПРАВЕНИЕ",
                  "navLangBooks": "БИБЛИОТЕКА",
                  "navLangNews": "НОВОСТИ",
                  "navAddLang": "ДОБАВИТЬ",
                  "addNewsLang": "Добавить новость",
                  "logOutLang": "Выйти",
                  "loginNavLang": "Авторизоваться",
                  "regNavLang": "Зарегистрироваться",
                //   NAVBAR END
                    /*
                //   // HOME CAROUSEL
                //   "carLang1": "ИТ ТЕХНИКУМ",
                //   "carLang2": "Кашкадарьинский колледж информационных технологий",
                // // HOME CAROUSEL END
                // //   УЧИТЕЛЯ
                // "fakTechLang": "УЧИТЕЛЯ",
                // "fakLang": "ФАКУЛЬТЕТЫ",
                // "studentLang": "СТУДЕНТЫ",
                // //   УЧИТЕЛЯ
                */

			    "teachLang": "Наши учителя",
			    "teachParagr": 
				    "Наши преподаватели мастера своего дела и все с многолетним стажем!"
			  }
			}