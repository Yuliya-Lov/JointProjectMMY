const linkLeadList = Array.from(document.querySelectorAll('.lead__link'));
const navLinkList = Array.from(document.querySelectorAll('.header__nav-item'));

linkLeadList.forEach(link => {
  link.addEventListener('mouseover', function () {
    linkLeadList.forEach(link => {
      link.classList.add('lead__link_active');
    })
  })
  link.addEventListener('mouseout', function () {
    linkLeadList.forEach(link => {
      link.classList.remove('lead__link_active');
    })
  })
})

