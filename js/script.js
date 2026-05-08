// ========================================
// FUNCIONES DE MODAL DE PRODUCTOS
// ========================================

/**
 * Cargar datos del producto en el modal
 * @param {string} productName - Nombre del producto
 * @param {number} price - Precio del producto
 * @param {string} imageUrl - URL de la imagen del producto
 */
function loadProduct(productName, price, imageUrl) {
    // Actualizar información en el modal
    document.getElementById('productName').textContent = productName;
    document.getElementById('productPrice').textContent = `$${price}/Ramo`;
    document.getElementById('productImage').src = imageUrl;
    document.getElementById('productImage').alt = productName;
}

// ========================================
// VALIDACIÓN DE FORMULARIO DE CONTACTO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Validar el formulario
            if (!this.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Mostrar mensaje de éxito
                handleFormSubmit(this);
            }
            
            // Agregar clase para mostrar validación
            this.classList.add('was-validated');
        });

        // Validación en tiempo real
        const inputs = contactForm.querySelectorAll('.form-control, .form-select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                validateField(this);
            });
        });
    }
});

/**
 * Validar campo individual
 * @param {HTMLElement} field - Campo a validar
 */
function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    let isValid = true;

    switch(fieldName) {
        case 'fullName':
            isValid = fieldValue.length >= 3;
            break;
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue);
            break;
        case 'phone':
            isValid = fieldValue === '' || /^[\d\s()+-]+$/.test(fieldValue);
            break;
        case 'subject':
            isValid = fieldValue !== '';
            break;
        case 'message':
            isValid = fieldValue.length >= 10;
            break;
    }

    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    }

    return isValid;
}

/**
 * Manejar envío del formulario
 * @param {HTMLElement} form - Formulario a procesar
 */
function handleFormSubmit(form) {
    // Mostrar mensaje de éxito
    const successMessage = document.getElementById('successMessage');
    
    if (successMessage) {
        successMessage.classList.remove('d-none');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Limpiar formulario
        form.reset();
        form.classList.remove('was-validated');
        
        // Remover inputs válidos
        const inputs = form.querySelectorAll('.form-control, .form-select');
        inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
        });
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 5000);
    }
}

// ========================================
// EFECTOS DE SCROLL
// ========================================

/**
 * Añadir efecto de scroll suave
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// ANIMACIÓN EN SCROLL
// ========================================

/**
 * Observar elementos para animar cuando entren en vista
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas de productos
document.querySelectorAll('.product-card, .product-card-large, .value-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ========================================
// NAVBAR ACTIVE
// ========================================

/**
 * Marcar enlace activo en navbar según la página actual
 */
function setActiveNavLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Ejecutar al cargar
setActiveNavLink();

// ========================================
// CARRUSEL AUTOMÁTICO
// ========================================

/**
 * Inicializar carrusel con opciones personalizadas
 */
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('productCarousel');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            pause: 'hover'
        });
    }
});

// ========================================
// BÚSQUEDA Y FILTRADO (Opcional)
// ========================================

/**
 * Filtrar productos por categoría
 * @param {string} category - Categoría a filtrar
 */
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card, .product-card-large');
    
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
            product.style.animation = 'fadeInUp 0.5s ease';
        } else {
            product.style.display = 'none';
        }
    });
}

// ========================================
// CARRITO DE COMPRAS (Básico)
// ========================================

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
    }

    /**
     * Agregar producto al carrito
     * @param {object} product - Producto a agregar
     */
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartCount();
    }

    /**
     * Remover producto del carrito
     * @param {string} productId - ID del producto
     */
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
    }

    /**
     * Actualizar cantidad de producto
     * @param {string} productId - ID del producto
     * @param {number} quantity - Nueva cantidad
     */
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
            this.updateCartCount();
        }
    }

    /**
     * Obtener total del carrito
     */
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    /**
     * Guardar carrito en localStorage
     */
    saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.items));
        } catch (e) {
            console.warn('LocalStorage no disponible:', e);
        }
    }

    /**
     * Cargar carrito desde localStorage
     */
    loadCart() {
        try {
            const cart = localStorage.getItem('cart');
            return cart ? JSON.parse(cart) : [];
        } catch (e) {
            console.warn('Error al cargar carrito:', e);
            return [];
        }
    }

    /**
     * Actualizar contador de carrito en UI
     */
    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.items.length;
        }
    }

    /**
     * Vaciar carrito
     */
    clear() {
        this.items = [];
        this.saveCart();
        this.updateCartCount();
    }
}

// Crear instancia global del carrito
const cart = new ShoppingCart();

// Evento para agregar al carrito (cuando se implemente)
document.addEventListener('click', function(e) {
    if (e.target.textContent.includes('Agregar al Carrito')) {
        const productName = document.getElementById('productName')?.textContent;
        const productPrice = document.getElementById('productPrice')?.textContent;
        
        if (productName && productPrice) {
            const price = parseFloat(productPrice.replace('$', '').replace('/Bunch', ''));
            
            cart.addItem({
                id: productName.replace(/\s+/g, '-'),
                name: productName,
                price: price
            });
            
            // Mostrar notificación
            showNotification(`${productName} agregado al carrito!`);
        }
    }
});

// ========================================
// NOTIFICACIONES
// ========================================

/**
 * Mostrar notificación temporal
 * @param {string} message - Mensaje a mostrar
 * @param {string} type - Tipo de notificación (success, error, info)
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        animation: slideInFromRight 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Remover notificación después de 4 segundos
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// ========================================
// UTILIDADES
// ========================================

/**
 * Formatear número como moneda
 * @param {number} amount - Cantidad a formatear
 * @param {string} currency - Código de moneda (USD, EUR, etc.)
 */
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

/**
 * Registrar evento (para analytics)
 * @param {string} eventName - Nombre del evento
 * @param {object} eventData - Datos del evento
 */
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Aquí se integraría con Google Analytics o similar
}

// ========================================
// INICIALIZACIÓN AL CARGAR
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Actualizar cantidad de items en el carrito al cargar
    cart.updateCartCount();
    
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Log de inicialización
    console.log('🌸 Our Blooms® - Sitio cargado correctamente');
});

// ========================================
// MANEJO DE ERRORES
// ========================================

window.addEventListener('error', function(event) {
    console.error('Error:', event.error);
    showNotification('Ocurrió un error. Por favor, intenta de nuevo.', 'danger');
});

// Advertencia para validación de navegador
if (!window.localStorage) {
    console.warn('LocalStorage no está disponible. El carrito no se guardará.');
}