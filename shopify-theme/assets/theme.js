document.addEventListener('change',event=>{const select=event.target.closest('[data-variant-select]');if(!select)return;const option=select.options[select.selectedIndex];const root=select.closest('[data-product-root]');if(!root)return;const price=root.querySelector('[data-product-price]');const button=root.querySelector('[data-add-to-cart]');if(price&&option.dataset.price)price.textContent=option.dataset.price;if(button){const available=option.dataset.available==='true';button.disabled=!available;button.textContent=available?'Add to cart':'Sold out'}});

function initializeProductGalleries(scope = document) {
  scope.querySelectorAll('[data-product-carousel]').forEach(carousel => {
    if (carousel.dataset.ready) return;
    carousel.dataset.ready = 'true';
    const slides = [...carousel.querySelectorAll('[data-product-carousel-slide]')];
    const thumbs = [...carousel.querySelectorAll('[data-product-carousel-thumb]')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let active = 0;
    let timer;
    let paused = false;
    const stop = () => clearInterval(timer);
    const show = index => {
      if (!slides.length) return;
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {slide.classList.toggle('is-active', i === active); slide.setAttribute('aria-hidden', String(i !== active));});
      thumbs.forEach((thumb, i) => {thumb.classList.toggle('is-active', i === active); thumb.setAttribute('aria-pressed', String(i === active));});
    };
    const start = () => {
      stop();
      if (reduced.matches || paused || document.hidden || slides.length < 2) return;
      timer = setInterval(() => {if (!carousel.isConnected) return stop(); show(active + 1);}, 4000);
    };
    carousel.querySelector('[data-product-carousel-prev]')?.addEventListener('click', () => {show(active - 1); start();});
    carousel.querySelector('[data-product-carousel-next]')?.addEventListener('click', () => {show(active + 1); start();});
    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => {show(i); start();}));
    carousel.addEventListener('keydown', e => {if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {e.preventDefault(); show(active + (e.key === 'ArrowRight' ? 1 : -1));}});
    carousel.addEventListener('mouseenter', () => {paused = true; stop();});
    carousel.addEventListener('mouseleave', () => {paused = false; start();});
    carousel.addEventListener('focusin', () => {paused = true; stop();});
    carousel.addEventListener('focusout', e => {if (!carousel.contains(e.relatedTarget)) {paused = false; start();}});
    document.addEventListener('visibilitychange', start);
    reduced.addEventListener('change', start);
    start();
  });
}
initializeProductGalleries();
document.addEventListener('shopify:section:load', event => initializeProductGalleries(event.target));

function initializeProductLightboxes(scope = document) {
  scope.querySelectorAll('[data-product-lightbox]').forEach(dialog => {
    if (dialog.dataset.ready) return;
    dialog.dataset.ready = 'true';
    const image = dialog.querySelector('[data-product-lightbox-image]');
    const caption = dialog.querySelector('[data-product-lightbox-caption]');
    const close = dialog.querySelector('[data-product-image-close]');
    let trigger;
    const closeDialog = () => {
      if (dialog.open) dialog.close();
    };
    document.addEventListener('click', event => {
      const opener = event.target.closest('[data-product-image-open]');
      if (!opener || !dialog.parentElement?.contains(opener)) return;
      trigger = opener;
      image.src = opener.dataset.imageSrc || '';
      image.alt = opener.dataset.imageAlt || '';
      caption.textContent = image.alt;
      dialog.showModal();
      close?.focus();
    });
    close?.addEventListener('click', closeDialog);
    image?.addEventListener('click', closeDialog);
    dialog.addEventListener('click', event => {
      const bounds = dialog.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outside) closeDialog();
    });
    dialog.addEventListener('close', () => trigger?.focus());
  });
}
initializeProductLightboxes();
document.addEventListener('shopify:section:load', event => initializeProductLightboxes(event.target));

function initializeMobileMenus(scope = document) {
  scope.querySelectorAll('[data-mobile-menu-toggle]').forEach(toggle => {
    if (toggle.dataset.ready) return;
    toggle.dataset.ready = 'true';
    const header = toggle.closest('.site-header');
    const menu = header?.querySelector('[data-mobile-menu]');
    if (!menu) return;
    const close = () => { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); };
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open', !expanded);
    });
    menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    window.matchMedia('(min-width: 981px)').addEventListener('change', event => { if (event.matches) close(); });
  });
}
initializeMobileMenus();
document.addEventListener('shopify:section:load', event => initializeMobileMenus(event.target));
