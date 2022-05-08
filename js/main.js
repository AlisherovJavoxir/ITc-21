lang.onclick = function(){

    // russian translations 
    if (lang.innerText == 'RU') {
        lang.innerText = 'EN';
        
        businessProblems.innerHTML = 'Проблемы в бизнесе требуют инновационные решения, Инновационным решениям нужна автоматиация. <u>Автоматизация - это то что мы делаем.</u>'
       
        contacts.innerText = 'Контакты';
        getStarted.innerText = 'Начинать';
       
        businessAutomation.innerText = 'Автоматизация бизнеса';
        automateSuccessful.innerText = 'Автоматизируйте для успешного бизнеса.'
       
        pharmacy.innerText = 'Аптеки';
        cafes.innerText = 'Кафе & Рестораны';
        markets.innerText = 'Супермаркеты';
        clinics.innerText = 'Клиники';
        autoParts.innerText = 'Авто-запчасти';
       
        ourAbilities.innerText = 'Наши преимущества';
        whenWeFeel.innerText = 'Профессиональная комманда, которая воспринимает решение проблем в бизнесе как свои задачи.';

        weProvide.innerText = 'Мы обеспечиваем';
        withAutomationAsFoundation.innerText = 'Вас автоматизацией как фундаментом вашего бизнеса';
        security.innerText = 'Безопасность';
        byWorkingWithUs.innerText = 'Работая с нами вы обеспечены безопасностью.';
        responsiblity.innerText = 'Отвественность';
        weAreResponsive.innerText = 'Мы ответсвенны нашим клиентам.';
        moreLeisure.innerText = 'Больше свободной времени';
        automationSaves.innerText = 'Автоматизация экономит ваше время.';
        moreProfit.innerText = 'Больше пользы';
        automationBrings.innerText = 'Автоматиация даст вам больше дохода.';
    }

    // english translations 
    else if (lang.innerText == 'EN') {
        lang.innerText = 'RU';
        
        businessProblems.innerHTML = 'Business problems need innovative methods, Innovative methods require automation, <u>Automation is what we do.</u>';
        
        contacts.innerText = 'Contacts';
        getStarted.innerText = 'Get Started';        
        
        businessAutomation.innerText = 'Business Automation';
        automateSuccessful.innerText = 'Automate for successful business.'
        
        pharmacy.innerText = 'Pharmacy';
        cafes.innerText = 'Cafe & Restaurants';
        markets.innerText = 'Markets';
        clinics.innerText = 'Medical clinics';
        autoParts.innerText = 'Auto parts';
        
        ourAbilities.innerText = 'Our abilities';
        whenWeFeel.innerText = 'Professional team which feel business problems as tasks to solve.';
    
        weProvide.innerText = 'We provide';
        withAutomationAsFoundation.innerText = 'With automation as a foundation of your business';
        security.innerText = 'Security';
        byWorkingWithUs.innerText = 'By working with us you are totally secured.';
        responsiblity.innerText = 'Responsiblity';
        weAreResponsive.innerText = 'We are responsive with our clients.';
        moreLeisure.innerText = 'More leisure';
        automationSaves.innerText = 'Automation saves your valuable time.';
        moreProfit.innerText = 'More profit';
        automationBrings.innerText = 'Automation brings to you more income.';
    }
}