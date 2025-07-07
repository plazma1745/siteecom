document.addEventListener('DOMContentLoaded', function() {
    // Инициализация корзины
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
    
    // Обработчики для кнопок "В корзину"
    document.querySelectorAll('.cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const product = {
                name: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('.price').textContent.replace('Цена: ', ''),
                code: productCard.querySelector('.code').textContent.replace('Артикул: ', ''),
                image: productCard.querySelector('img').src
            };
            
            addToCart(product);
        });
    });
    
    // Функция добавления в корзину
    function addToCart(product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('Товар добавлен в корзину');
    }
    
    // Обновление счетчика корзины
    function updateCartCount() {
        const cartCount = document.querySelector('.cart span');
        cartCount.textContent = cart.length;
    }
    
    // Меню для мобильных устройств
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav .container').prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
});