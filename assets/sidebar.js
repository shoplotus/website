// function initializeGlobalCartButton() {
//     const button = document.getElementById('global-cart-open-button');
//     const sidebarCart = document.getElementById('site-cart-sidebar');

//     if (button && sidebarCart) {
//         button.addEventListener('click', function (e) {
//             e.preventDefault();
//             button.setAttribute('aria-expanded', 'true');
//             sidebarCart.show();
//         });

//         sidebarCart.querySelector('.close-sidebar').addEventListener('click', function () {
//             sidebarCart.hide();
//             button.setAttribute('aria-expanded', 'false');
//         });

//         document.addEventListener('keydown', function (e) {
//             if (e.key === 'Escape' && sidebarCart.classList.contains('sidebar--opened')) {
//                 sidebarCart.hide();
//                 button.setAttribute('aria-expanded', 'false');
//             }
//         });
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     initializeGlobalCartButton();
// });
