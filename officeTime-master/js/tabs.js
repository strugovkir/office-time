window.addEventListener('load', function () {
  const tabs = document.querySelector('.tabs');
  if (tabs) {
    const tabsControls = tabs.querySelectorAll('.tabs-header-item');
    const tabsContent = tabs.querySelectorAll('.tabs-content-item');

    /*    const selectActiveTab = () => {
          tabsControls[0].classList.add('tabs-header-item--active');
          tabsContent[0].classList.add('tabs-content-item--active');
        };
        selectActiveTab();*/

    [...tabsControls].map((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('tabs-header-item--active')) {
          return false;
        }
        tabs.querySelector('.tabs-header-item--active').classList.remove('tabs-header-item--active');
        e.target.classList.add('tabs-header-item--active');
        const index = [...tabsControls].indexOf(e.target);
        [...tabsContent].map((content, i) => {
          if (i === index) {
            content.classList.add('tabs-content-item--active');
            return true;
          }
          content.classList.remove('tabs-content-item--active');
        })
      })
    })
  }
});