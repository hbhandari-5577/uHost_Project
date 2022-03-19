let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for(let i=0; i<selectPlanButtons.length; i++)
{
    selectPlanButtons[i].addEventListener('click', function()
    {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', function()
{
    mobileNav.style.display = 'none';
    closeModal();
});

modalNoButton.addEventListener('click', closeModal);

function closeModal()
{
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

toggleButton.addEventListener('click', function()
{
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});