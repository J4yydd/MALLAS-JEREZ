// MALLAS JEREZ - JavaScript Modular y Accesible

// Dataset de productos actualizado
const PRODUCTS = [
  {
    id: 'ciclonica',
    nombre: 'Malla Ciclónica',
    descripcion: 'Malla de alta resistencia para delimitación perimetral y seguridad.',
    imagenes: [
      'assets/img/products/ciclonica-1.jpg',
      'assets/img/products/ciclonica-2.jpg',
      'assets/img/products/ciclonica-3.jpg',
      'assets/img/products/ciclonica-4.jpg',
      'assets/img/products/ciclonica-5.jpg',
      'assets/img/products/ciclonica-6.jpg'
    ],
    especificaciones: [
      ['Altura', '1.00 m, 1.25 m, 1.50 m, 1.75 m, 2.00 m, 2.50 m, 3.00 m'],
      ['Calibre', '10.5, 11, 12.5'],
      ['Revestimiento', 'Galvanizado / PVC'],
      ['Apertura', '55 X 55 mm, 63 X 63 mm']
    ]
  },
  {
    id: 'concertina',
    nombre: 'Concertina',
    descripcion: 'Alambre de seguridad de alto nivel para protección perimetral.',
    imagenes: [
      'assets/img/products/concertina-1.jpg',
      'assets/img/products/concertina-2.jpg',
      'assets/img/products/concertina-3.jpg',
      'assets/img/products/concertina-4.jpg',
      'assets/img/products/concertina-5.jpg',
      'assets/img/products/concertina-6.jpg',
      'assets/img/products/concertina-7.jpg'
    ],
    especificaciones: [
      ['Diámetro rollo', '450 / 730 / 980 mm'],
      ['Material', 'Acero galvanizado'],
      ['Cuchillas', 'BTO-22 / CBT-65']
    ]
  },
  {
    id: 'alambres',
    nombre: 'Alambres de Púas',
    descripcion: 'Alambre de púas de alta calidad para cercos de seguridad y delimitación de terrenos.',
    imagenes: [
      'assets/img/products/alambres-1.jpg',
      'assets/img/products/alambres-2.jpg',
      'assets/img/products/alambres-3.jpg',
      'assets/img/products/alambres-4.jpg',
      'assets/img/products/alambres-5.jpg',
      'assets/img/products/alambres-6.jpg',
      'assets/img/products/alambres-7.jpg',
      'assets/img/products/alambres-8.jpg',
      'assets/img/products/alambres-9.jpg',
      'assets/img/products/alambres-10.jpg',
      'assets/img/products/alambres-11.jpg'
    ],
    especificaciones: [
      ['Calibre', '12, 14, 1'],
      ['Material', 'Acero galvanizado'],
      ['Púas', '2, 4, 6 puntas'],
      ['Uso', 'Cercos, delimitación, seguridad']
    ]
  },
  {
    id: 'electricos',
    nombre: 'Cercos Eléctricos',
    descripcion: 'Sistemas de cercos eléctricos para protección perimetral y control de ganado.',
    imagenes: [
      'assets/img/products/electricos-1.jpg',
      'assets/img/products/electricos-2.jpg',
      'assets/img/products/electricos-3.jpg',
      'assets/img/products/electricos-4.jpg',
      'assets/img/products/electricos-5.jpg'
    ],
    especificaciones: [
      ['Voltaje', '14,000V'],
      ['Material', 'Alambre galvanizado'],
      ['Aplicación', 'Ganado, seguridad, delimitación'],
      ['Instalación', 'Profesional recomendada']
    ]
  },
  {
    id: 'privacidad',
    nombre: 'Cinta de Privacidad',
    descripcion: 'Contamos con los colores verde, amarillo, rojo, gris, negro, café, blanco, naranja y azul.',
    imagenes: [
      'assets/img/products/privacidad-1.jpg',
      'assets/img/products/privacidad-2.jpg',
      'assets/img/products/privacidad-3.jpg',
      'assets/img/products/privacidad-4.jpg',
      'assets/img/products/privacidad-5.jpg',
      'assets/img/products/privacidad-6.jpg'
    ],
    especificaciones: [
      ['Ancho', '15 cm, 20 cm, 25 cm'],
      ['Material', 'PVC resistente'],
      ['Colores', 'Verde, Amarillo, Rojo, Gris, Negro, Café, Blanco, Naranja y Azul'],
      ['Durabilidad', '5-8 años']
    ]
  },
  {
    id: 'borregueras',
    nombre: 'Mallas Borregueras y Cercos Ganaderos',
    descripcion: 'Mallas especializadas para corrales de ganado y delimitación de áreas pecuarias. Se cuenta con postes de concreto, de madera y poste T.',
    imagenes: [
      'assets/img/products/borregueras-1.jpg',
      'assets/img/products/borregueras-2.jpg',
      'assets/img/products/borregueras-3.jpg',
      'assets/img/products/borregueras-4.jpg',
      'assets/img/products/borregueras-5.jpg'
    ],
    especificaciones: [
      ['Altura', '1.0 m, 1.2 m, 1.5 m'],
      ['Calibre', '12, 14'],
      ['Apertura', '5 cm x 10 cm'],
      ['Uso', 'Corrales, ganado, ovejas']
    ]
  },
  {
    id: 'puertas',
    nombre: 'Puertas y Portones',
    descripcion: 'Puertas y portones de acero galvanizado para acceso vehicular y peatonal.',
    imagenes: [
      'assets/img/products/puertas-1.jpg',
      'assets/img/products/puertas-2.jpg',
      'assets/img/products/puertas-3.jpg',
      'assets/img/products/puertas-4.jpg',
      'assets/img/products/puertas-5.jpg',
      'assets/img/products/puertas-6.jpg',
      'assets/img/products/puertas-7.jpg'
    ],
    especificaciones: [
      ['Ancho', '2.5 m, 3.0 m, 4.0 m'],
      ['Altura', '1.8 m, 2.0 m, 2.5 m'],
      ['Material', 'Acero galvanizado'],
      ['Tipo', 'Deslizante, batiente, automática']
    ]
  },
  {
    id: 'rejas',
    nombre: 'Rejas de Acero',
    descripcion: 'Rejas de acero para ventanas, puertas y protección de propiedades residenciales.',
    imagenes: [
      'assets/img/products/rejas-1.jpg',
      'assets/img/products/rejas-2.jpg',
      'assets/img/products/rejas-3.jpg',
      'assets/img/products/rejas-4.jpg',
      'assets/img/products/rejas-5.jpg',
      'assets/img/products/rejas-6.jpg',
      'assets/img/products/rejas-7.jpg',
      'assets/img/products/rejas-8.jpg'
    ],
    especificaciones: [
      ['Material', 'Acero galvanizado'],
      ['Espesor', '3/16", 1/4"'],
      ['Diseño', 'Barrotes, ornamental, simple'],
      ['Acabado', 'Galvanizado, pintado']
    ]
  },
  {
    id: 'tuberias',
    nombre: 'Tuberías y Accesorios',
    descripcion: 'Contamos con malla ciclónica galvanizada, plastificada, ciclónica de abertura especial, ciclónica antideslumbrante, accesorios y malla graduada o borreguera.',
    imagenes: [
      'assets/img/products/tuberias-1.jpg',
      'assets/img/products/tuberias-2.jpg',
      'assets/img/products/tuberias-3.jpg',
      'assets/img/products/tuberias-4.jpg',
      'assets/img/products/tuberias-5.jpg',
      'assets/img/products/tuberias-6.jpg',
      'assets/img/products/tuberias-7.jpg'
    ],
    especificaciones: [
      ['Diámetro', '1", 1.5", 2", 2.5"'],
      ['Material', 'Acero galvanizado'],
      ['Longitud', '6 m, 12 m'],
      ['Accesorios', 'Codos, uniones, tapones']
    ]
  }
];

// Dataset de productos (compatible con la UI existente)
const PRODUCTS_DATASET = {
    'malla-ciclonica': {
        id: 'malla-ciclonica',
        nombre: 'Malla Ciclónica',
        descripcion: 'Malla de alta resistencia para delimitación perimetral y seguridad.',
        imagenes: [
            { src: 'assets/img/products/ciclonica-1.jpg', alt: 'Malla ciclónica instalada en cercado perimetral' },
            { src: 'assets/img/products/ciclonica-2.jpg', alt: 'Detalle de malla ciclónica galvanizada' },
            { src: 'assets/img/products/ciclonica-3.jpg', alt: 'Instalación de malla ciclónica en obra' },
            { src: 'assets/img/products/ciclonica-4.jpg', alt: 'Malla ciclónica en instalación industrial' },
            { src: 'assets/img/products/ciclonica-5.jpg', alt: 'Detalle de malla ciclónica con postes' },
            { src: 'assets/img/products/ciclonica-6.jpg', alt: 'Malla ciclónica en perímetro residencial' }
        ],
        especificaciones: [
            { especificacion: 'Altura', valor: '1.00 m, 1.25 m, 1.50 m, 1.75 m, 2.00 m, 2.50 m, 3.00 m', unidad: '' },
            { especificacion: 'Calibre', valor: '10.5, 11, 12.5', unidad: 'AWG' },
            { especificacion: 'Revestimiento', valor: 'Galvanizado / PVC', unidad: '' },
            { especificacion: 'Apertura', valor: '55 X 55 mm, 63 X 63 mm', unidad: '' }
        ],
        especificacionesPVC: [
            { especificacion: 'Altura', valor: '1.00 m, 1.25 m, 1.50 m, 1.75 m, 2.00 m, 2.50 m', unidad: '' },
            { especificacion: 'Calibre', valor: '11, 12.5 (hasta 1.75m) / 11 (2.00m y 2.50m)', unidad: 'AWG' },
            { especificacion: 'Revestimiento', valor: 'PVC Forrado', unidad: '' },
            { especificacion: 'Apertura', valor: '5.5 X 5.5 mm', unidad: '' }
        ]
    },
    'concertina': {
        id: 'concertina',
        nombre: 'Concertina',
        descripcion: 'Alambre de seguridad de alto nivel para protección perimetral.',
        imagenes: [
            { src: 'assets/img/products/concertina-1.jpg', alt: 'Concertina instalada en perímetro de seguridad' },
            { src: 'assets/img/products/concertina-2.jpg', alt: 'Detalle de alambre de concertina' },
            { src: 'assets/img/products/concertina-3.jpg', alt: 'Instalación de concertina en muro' },
            { src: 'assets/img/products/concertina-4.jpg', alt: 'Concertina en instalación industrial' },
            { src: 'assets/img/products/concertina-5.jpg', alt: 'Detalle de cuchillas de concertina' },
            { src: 'assets/img/products/concertina-6.jpg', alt: 'Concertina en perímetro comercial' },
            { src: 'assets/img/products/concertina-7.jpg', alt: 'Instalación de concertina en valla' }
        ],
        especificaciones: [
            { especificacion: 'Diámetro rollo', valor: '450 / 730 / 980', unidad: 'mm' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Cuchillas', valor: 'BTO-22 / CBT-65', unidad: '' }
        ]
    },
    'alambres': {
        id: 'alambres',
        nombre: 'Alambres de Púas',
        descripcion: 'Alambre de púas de alta calidad para cercos de seguridad y delimitación de terrenos.',
        imagenes: [
            { src: 'assets/img/products/alambres-1.jpg', alt: 'Alambre de púas instalado en cerco' },
            { src: 'assets/img/products/alambres-2.jpg', alt: 'Detalle de alambre de púas galvanizado' },
            { src: 'assets/img/products/alambres-3.jpg', alt: 'Instalación de alambre de púas en terreno' },
            { src: 'assets/img/products/alambres-4.jpg', alt: 'Alambre de púas en instalación rural' },
            { src: 'assets/img/products/alambres-5.jpg', alt: 'Detalle de púas de alambre' },
            { src: 'assets/img/products/alambres-6.jpg', alt: 'Alambre de púas en perímetro ganadero' },
            { src: 'assets/img/products/alambres-7.jpg', alt: 'Instalación de alambre de púas en postes' },
            { src: 'assets/img/products/alambres-8.jpg', alt: 'Alambre de púas en cerco residencial' },
            { src: 'assets/img/products/alambres-9.jpg', alt: 'Detalle de instalación de alambre' },
            { src: 'assets/img/products/alambres-10.jpg', alt: 'Alambre de púas en instalación comercial' },
            { src: 'assets/img/products/alambres-11.jpg', alt: 'Alambre de púas en perímetro industrial' }
        ],
        especificaciones: [
            { especificacion: 'Calibre', valor: '12, 14, 16', unidad: 'AWG' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Púas', valor: '2, 4, 6 puntas', unidad: '' },
            { especificacion: 'Uso', valor: 'Cercos, delimitación, seguridad', unidad: '' }
        ]
    },
    'electricos': {
        id: 'electricos',
        nombre: 'Cercos Eléctricos',
        descripcion: 'Sistemas de cercos eléctricos para protección perimetral y control de ganado.',
        imagenes: [
            { src: 'assets/img/products/electricos-1.jpg', alt: 'Cerca eléctrica instalada en perímetro' },
            { src: 'assets/img/products/electricos-2.jpg', alt: 'Detalle de alambre eléctrico y aisladores' },
            { src: 'assets/img/products/electricos-3.jpg', alt: 'Instalación de cerca eléctrica en ganado' },
            { src: 'assets/img/products/electricos-4.jpg', alt: 'Detalle de aisladores de cerca eléctrica' },
            { src: 'assets/img/products/electricos-5.jpg', alt: 'Cerca eléctrica en instalación rural' }
        ],
        especificaciones: [
            { especificacion: 'Voltaje', valor: '14,000V', unidad: '' },
            { especificacion: 'Material', valor: 'Alambre galvanizado', unidad: '' },
            { especificacion: 'Aplicación', valor: 'Ganado, seguridad, delimitación', unidad: '' },
            { especificacion: 'Instalación', valor: 'Profesional recomendada', unidad: '' }
        ]
    },
    'privacidad': {
        id: 'privacidad',
        nombre: 'Cinta de Privacidad',
        descripcion: 'Contamos con los colores verde, amarillo, rojo, gris, negro, café, blanco, naranja y azul.',
        imagenes: [
            { src: 'assets/img/products/privacidad-1.jpg', alt: 'Cinta de privacidad en malla ciclónica' },
            { src: 'assets/img/products/privacidad-2.jpg', alt: 'Detalle de cinta de privacidad verde' },
            { src: 'assets/img/products/privacidad-3.jpg', alt: 'Instalación de cinta de privacidad' },
            { src: 'assets/img/products/privacidad-4.jpg', alt: 'Cinta de privacidad en diferentes colores' },
            { src: 'assets/img/products/privacidad-5.jpg', alt: 'Detalle de instalación de cinta' },
            { src: 'assets/img/products/privacidad-6.jpg', alt: 'Cinta de privacidad en perímetro residencial' }
        ],
        especificaciones: [
            { especificacion: 'Ancho', valor: '15 cm, 20 cm, 25 cm', unidad: '' },
            { especificacion: 'Material', valor: 'PVC resistente', unidad: '' },
            { especificacion: 'Colores', valor: 'Verde, Amarillo, Rojo, Gris, Negro, Café, Blanco, Naranja y Azul', unidad: '' },
            { especificacion: 'Durabilidad', valor: '5-8 años', unidad: '' }
        ]
    },
    'borregueras': {
        id: 'borregueras',
        nombre: 'Mallas Borregueras y Cercos Ganaderos',
        descripcion: 'Mallas especializadas para corrales de ganado y delimitación de áreas pecuarias. Se cuenta con postes de concreto, de madera y poste T.',
        imagenes: [
            { src: 'assets/img/products/borregueras-1.jpg', alt: 'Malla borreguera en corral de ganado' },
            { src: 'assets/img/products/borregueras-2.jpg', alt: 'Detalle de malla borreguera galvanizada' },
            { src: 'assets/img/products/borregueras-3.jpg', alt: 'Instalación de malla borreguera' },
            { src: 'assets/img/products/borregueras-4.jpg', alt: 'Malla borreguera en corral de ovejas' },
            { src: 'assets/img/products/borregueras-5.jpg', alt: 'Detalle de instalación de malla borreguera' }
        ],
        especificaciones: [
            { especificacion: 'Altura', valor: '1.0 m, 1.2 m, 1.5 m', unidad: '' },
            { especificacion: 'Calibre', valor: '12, 14', unidad: 'AWG' },
            { especificacion: 'Apertura', valor: '5 cm x 10 cm', unidad: '' },
            { especificacion: 'Uso', valor: 'Corrales, ganado, ovejas', unidad: '' }
        ]
    },
    'puertas': {
        id: 'puertas',
        nombre: 'Puertas y Portones',
        descripcion: 'Puertas y portones de acero galvanizado para acceso vehicular y peatonal.',
        imagenes: [
            { src: 'assets/img/products/puertas-1.jpg', alt: 'Portón deslizante de acero galvanizado' },
            { src: 'assets/img/products/puertas-2.jpg', alt: 'Puerta batiente para acceso peatonal' },
            { src: 'assets/img/products/puertas-3.jpg', alt: 'Portón automático con motor' },
            { src: 'assets/img/products/puertas-4.jpg', alt: 'Portón de acero en instalación residencial' },
            { src: 'assets/img/products/puertas-5.jpg', alt: 'Detalle de herrajes de portón' },
            { src: 'assets/img/products/puertas-6.jpg', alt: 'Portón deslizante en instalación comercial' },
            { src: 'assets/img/products/puertas-7.jpg', alt: 'Puerta de acceso vehicular' }
        ],
        especificaciones: [
            { especificacion: 'Ancho', valor: '2.5 m, 3.0 m, 4.0 m', unidad: '' },
            { especificacion: 'Altura', valor: '1.8 m, 2.0 m, 2.5 m', unidad: '' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Tipo', valor: 'Deslizante, batiente, automática', unidad: '' }
        ]
    },
    'rejas': {
        id: 'rejas',
        nombre: 'Rejas de Acero',
        descripcion: 'Rejas de acero para ventanas, puertas y protección de propiedades residenciales.',
        imagenes: [
            { src: 'assets/img/products/rejas-1.jpg', alt: 'Rejas de acero en ventanas residenciales' },
            { src: 'assets/img/products/rejas-2.jpg', alt: 'Detalle de rejas ornamentales de acero' },
            { src: 'assets/img/products/rejas-3.jpg', alt: 'Rejas de acero en instalación comercial' },
            { src: 'assets/img/products/rejas-4.jpg', alt: 'Detalle de rejas de seguridad' },
            { src: 'assets/img/products/rejas-5.jpg', alt: 'Rejas ornamentales en ventanas' },
            { src: 'assets/img/products/rejas-6.jpg', alt: 'Instalación de rejas de acero' },
            { src: 'assets/img/products/rejas-7.jpg', alt: 'Rejas de acero en puertas' },
            { src: 'assets/img/products/rejas-8.jpg', alt: 'Detalle de herrajes de rejas' }
        ],
        especificaciones: [
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Espesor', valor: '3/16", 1/4"', unidad: '' },
            { especificacion: 'Diseño', valor: 'Barrotes, ornamental, simple', unidad: '' },
            { especificacion: 'Acabado', valor: 'Galvanizado, pintado', unidad: '' }
        ]
    },
    'tuberias': {
        id: 'tuberias',
        nombre: 'Tuberías y Accesorios',
        descripcion: 'Contamos con malla ciclónica galvanizada, plastificada, ciclónica de abertura especial, ciclónica antideslumbrante, accesorios y malla graduada o borreguera.',
        imagenes: [
            { src: 'assets/img/products/tuberias-1.jpg', alt: 'Tuberías galvanizadas de diferentes diámetros' },
            { src: 'assets/img/products/tuberias-2.jpg', alt: 'Accesorios para tuberías: codos y uniones' },
            { src: 'assets/img/products/tuberias-3.jpg', alt: 'Instalación de tuberías en estructura metálica' },
            { src: 'assets/img/products/tuberias-4.jpg', alt: 'Tuberías en instalación de cercos' },
            { src: 'assets/img/products/tuberias-5.jpg', alt: 'Detalle de accesorios de tuberías' },
            { src: 'assets/img/products/tuberias-6.jpg', alt: 'Tuberías galvanizadas en obra' },
            { src: 'assets/img/products/tuberias-7.jpg', alt: 'Instalación de tuberías en estructura' }
        ],
        especificaciones: [
            { especificacion: 'Diámetro', valor: '1", 1.5", 2", 2.5"', unidad: '' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Longitud', valor: '6 m, 12 m', unidad: '' },
            { especificacion: 'Accesorios', valor: 'Codos, uniones, tapones', unidad: '' }
        ]
    }
};

// Scroll Manager
const ScrollManager = {
    sections: [],
    navLinks: [],
    isScrolling: false,
    
    init() {
        this.sections = Array.from(document.querySelectorAll('section[id]'));
        this.navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
        this.setupSmoothScroll();
        this.setupActiveSection();
        this.setupScrollThrottle();
    },
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
            });
        });
    },
    
    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const headerHeight = document.querySelector('.header-fixed').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    },
    
    setupActiveSection() {
        const observer = new IntersectionObserver((entries) => {
            if (this.isScrolling) return;
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0.1
        });
        
        this.sections.forEach(section => {
            observer.observe(section);
        });
    },
    
    updateActiveNavLink(activeId) {
        this.navLinks.forEach(link => {
            const linkId = link.getAttribute('href');
            if (linkId === '#' + activeId) {
                link.setAttribute('aria-current', 'page');
                link.classList.add('active');
            } else {
                link.removeAttribute('aria-current');
                link.classList.remove('active');
            }
        });
    },
    
    setupScrollThrottle() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.isScrolling = false;
                    ticking = false;
                });
                ticking = true;
                this.isScrolling = true;
            }
        });
    }
};

// Tabs Manager
const TabsManager = {
    tabs: [],
    panels: [],
    currentActive: null,
    
    init() {
        this.tabs = Array.from(document.querySelectorAll('.product-tab'));
        this.panels = Array.from(document.querySelectorAll('.product-panel'));
        this.setupTabs();
        this.setupKeyboardNavigation();
        
        // Renderizar contenido inicial del primer tab
        if (this.tabs.length > 0) {
            const firstTab = this.tabs[0];
            const firstPanelId = firstTab.getAttribute('aria-controls');
            this.activateTab(firstTab, firstPanelId);
        }
    },
    
    setupTabs() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetPanel = tab.getAttribute('aria-controls');
                this.activateTab(tab, targetPanel);
            });
        });
    },
    
    activateTab(activeTab, targetPanelId) {
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
        });
        
        this.panels.forEach(panel => {
            panel.classList.remove('active');
        });
        
        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
        
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
            this.renderProductContent(targetPanelId);
            targetPanel.classList.add('active');
            this.currentActive = targetPanelId;
        }
    },
    
    renderProductContent(productId) {
        const product = PRODUCTS_DATASET[productId];
        if (!product) return;
        
        const panel = document.getElementById(productId);
        if (!panel) return;
        
        this.renderDescription(panel, product);
        this.renderCarousel(panel, product);
        this.renderSpecifications(panel, product);
    },
    
    renderDescription(panel, product) {
        const header = panel.querySelector('.product-header');
        if (header) {
            header.innerHTML = '<h3>' + product.nombre + '</h3><p>' + product.descripcion + '</p>';
        }
    },
    
    renderCarousel(panel, product) {
        const carouselContainer = panel.querySelector('.carousel-container');
        if (!carouselContainer) return;
        
        let carouselHTML = '<div class="carousel-wrapper" role="region" aria-label="Galería de ' + product.nombre + '">';
        carouselHTML += '<div class="carousel-track" aria-live="polite">';
        
        product.imagenes.forEach((img, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselHTML += '<div class="carousel-slide ' + activeClass + '">';
            carouselHTML += '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy">';
            carouselHTML += '</div>';
        });
        
        carouselHTML += '</div>';
        carouselHTML += '<button class="carousel-btn prev" aria-label="Imagen anterior" data-product="' + product.id + '">';
        carouselHTML += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
        carouselHTML += '<polyline points="15,18 9,12 15,6"></polyline></svg></button>';
        carouselHTML += '<button class="carousel-btn next" aria-label="Siguiente imagen" data-product="' + product.id + '">';
        carouselHTML += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
        carouselHTML += '<polyline points="9,18 15,12 9,6"></polyline></svg></button></div>';
        
        carouselHTML += '<div class="carousel-indicators">';
        product.imagenes.forEach((_, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselHTML += '<button class="indicator ' + activeClass + '" aria-label="Mostrar imagen ' + (index + 1) + '" data-product="' + product.id + '" data-slide="' + index + '"></button>';
        });
        carouselHTML += '</div>';
        
        carouselContainer.innerHTML = carouselHTML;
        CarouselManager.initProductCarousel(product.id);
    },
    
    renderSpecifications(panel, product) {
        const specifications = panel.querySelector('.specifications');
        if (!specifications) return;
        
        // No mostrar tabla de especificaciones para ciertas secciones
        const sectionsWithoutTable = ['privacidad', 'concertina', 'alambres', 'puertas', 'tuberias'];
        if (sectionsWithoutTable.includes(product.id)) {
            specifications.style.display = 'none';
            return;
        }
        
        let tableHTML = '<table class="specs-table" role="table">';
        tableHTML += '<caption>Especificaciones Técnicas - ' + product.nombre + '</caption>';
        tableHTML += '<thead><tr><th scope="col">Especificación</th><th scope="col">Valor</th><th scope="col">Unidad</th></tr></thead>';
        tableHTML += '<tbody>';
        
        product.especificaciones.forEach(spec => {
            tableHTML += '<tr><th scope="row">' + spec.especificacion + '</th>';
            tableHTML += '<td>' + spec.valor + '</td><td>' + spec.unidad + '</td></tr>';
        });
        
        tableHTML += '</tbody></table>';
        
        // Agregar tabla adicional para Malla Ciclónica Forrada PVC
        if (product.id === 'malla-ciclonica' && product.especificacionesPVC) {
            tableHTML += '<div style="margin-top: 2rem;">';
            tableHTML += '<table class="specs-table" role="table">';
            tableHTML += '<caption>Especificaciones Técnicas - Malla Ciclónica Forrada P.V.C.</caption>';
            tableHTML += '<thead><tr><th scope="col">Especificación</th><th scope="col">Valor</th><th scope="col">Unidad</th></tr></thead>';
            tableHTML += '<tbody>';
            
            product.especificacionesPVC.forEach(spec => {
                tableHTML += '<tr><th scope="row">' + spec.especificacion + '</th>';
                tableHTML += '<td>' + spec.valor + '</td><td>' + spec.unidad + '</td></tr>';
            });
            
            tableHTML += '</tbody></table>';
            tableHTML += '</div>';
        }
        
        specifications.innerHTML = tableHTML;
    },
    
    setupKeyboardNavigation() {
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('keydown', (e) => {
                let targetIndex;
                
                switch (e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        targetIndex = (index + 1) % this.tabs.length;
                        this.tabs[targetIndex].focus();
                        this.tabs[targetIndex].click();
                        break;
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        targetIndex = index === 0 ? this.tabs.length - 1 : index - 1;
                        this.tabs[targetIndex].focus();
                        this.tabs[targetIndex].click();
                        break;
                    case 'Home':
                        e.preventDefault();
                        this.tabs[0].focus();
                        this.tabs[0].click();
                        break;
                    case 'End':
                        e.preventDefault();
                        this.tabs[this.tabs.length - 1].focus();
                        this.tabs[this.tabs.length - 1].click();
                        break;
                }
            });
        });
    }
};

// Carousel Manager
const CarouselManager = {
    carousels: new Map(),
    
    init() {
        // Los carousels se inicializan dinámicamente
    },
    
    initProductCarousel(productId) {
        const carouselContainer = document.querySelector('#' + productId + ' .carousel-container');
        if (!carouselContainer) return;
        
        const carousel = {
            id: productId,
            track: carouselContainer.querySelector('.carousel-track'),
            slides: carouselContainer.querySelectorAll('.carousel-slide'),
            indicators: carouselContainer.querySelectorAll('.indicator'),
            prevBtn: carouselContainer.querySelector('.carousel-btn.prev'),
            nextBtn: carouselContainer.querySelector('.carousel-btn.next'),
            currentSlide: 0,
            totalSlides: 0,
            autoPlayInterval: null
        };
        
        carousel.totalSlides = carousel.slides.length;
        
        // Asegurar que el primer slide tenga la clase active
        if (carousel.slides.length > 0) {
            carousel.slides[0].classList.add('active');
        }
        
        this.carousels.set(productId, carousel);
        
        this.setupCarouselEvents(carousel);
        this.setupTouchEvents(carousel);
        this.startAutoPlay(carousel);
    },
    
    setupCarouselEvents(carousel) {
        // Pausar autoplay en hover
        const carouselWrapper = carousel.track.closest('.carousel-wrapper');
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => {
                this.stopAutoPlay(carousel);
            });
            
            carouselWrapper.addEventListener('mouseleave', () => {
                this.startAutoPlay(carousel);
            });
        }
        
        if (carousel.prevBtn) {
            carousel.prevBtn.addEventListener('click', () => {
                this.changeSlide(carousel, -1);
            });
        }
        
        if (carousel.nextBtn) {
            carousel.nextBtn.addEventListener('click', () => {
                this.changeSlide(carousel, 1);
            });
        }
        
        carousel.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(carousel, index);
            });
        });
        
        carousel.track.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.changeSlide(carousel, -1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.changeSlide(carousel, 1);
                    break;
            }
        });
        
        carousel.track.addEventListener('mouseenter', () => {
            this.stopAutoPlay(carousel);
        });
        
        carousel.track.addEventListener('mouseleave', () => {
            this.startAutoPlay(carousel);
        });
    },
    
    setupTouchEvents(carousel) {
        let startX = 0;
        let endX = 0;
        
        carousel.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.changeSlide(carousel, 1);
                } else {
                    this.changeSlide(carousel, -1);
                }
            }
        });
    },
    
    changeSlide(carousel, direction) {
        carousel.currentSlide = (carousel.currentSlide + direction + carousel.totalSlides) % carousel.totalSlides;
        this.updateCarousel(carousel);
    },
    
    goToSlide(carousel, slideIndex) {
        carousel.currentSlide = slideIndex;
        this.updateCarousel(carousel);
    },
    
    updateCarousel(carousel) {
        // Remover active de todas las slides primero
        carousel.slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        
        // Aplicar transformación
        carousel.track.style.transform = 'translateX(-' + (carousel.currentSlide * 100) + '%)';
        
        // Agregar active a la slide actual con delay para efecto fade
        setTimeout(() => {
            carousel.slides[carousel.currentSlide].classList.add('active');
        }, 50);
        
        carousel.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === carousel.currentSlide);
        });
        
        const activeSlide = carousel.slides[carousel.currentSlide];
        const img = activeSlide.querySelector('img');
        if (img) {
            carousel.track.setAttribute('aria-label', 'Mostrando imagen ' + (carousel.currentSlide + 1) + ' de ' + carousel.totalSlides + ': ' + img.alt);
        }
    },
    
    startAutoPlay(carousel) {
        this.stopAutoPlay(carousel);
        carousel.autoPlayInterval = setInterval(() => {
            this.changeSlide(carousel, 1);
        }, 5000);
    },
    
    stopAutoPlay(carousel) {
        if (carousel.autoPlayInterval) {
            clearInterval(carousel.autoPlayInterval);
            carousel.autoPlayInterval = null;
        }
    }
};

// Map Manager
const MapManager = {
    init() {
        this.setupMap();
    },
    
    setupMap() {
        const mapContainer = document.querySelector('.map-wrapper');
        if (!mapContainer) return;
        
        const lat = 22.6438731;
        const lng = -102.9767069;
        
        const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.123456789!2d' + lng + '!3d' + lat + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM4JzM3LjkiTiAxMDLCsDU4JzM2LjEiVw!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx&q=MALLAS+JEREZ';
        
        const iframe = document.createElement('iframe');
        iframe.src = mapUrl;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = '0';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.title = 'Ubicación de Mallas Jerez en Google Maps';
        iframe.setAttribute('aria-label', 'Mapa interactivo mostrando la ubicación de Mallas Jerez');
        
        mapContainer.appendChild(iframe);
    }
};

// Theme Manager
const ThemeManager = {
    init() {
        this.loadTheme();
        this.setupThemeToggle();
    },
    
    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        this.setTheme(theme);
    },
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },
    
    setupThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        });
    }
};

// Contact Manager
const ContactManager = {
    init() {
        this.setupContactLinks();
        this.setupRippleEffect();
    },
    
    setupContactLinks() {
        const whatsappLinks = document.querySelectorAll('.contact-btn.whatsapp');
        const emailLink = document.querySelector('.contact-btn.email');
        const phoneLink = document.querySelector('.contact-btn.phone');
        
        whatsappLinks.forEach(link => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
        
        if (emailLink) {
            emailLink.addEventListener('click', (e) => {
                const href = emailLink.getAttribute('href');
                if (!href.startsWith('mailto:')) {
                    e.preventDefault();
                    console.warn('Enlace de email inválido');
                }
            });
        }
        
        if (phoneLink) {
            // El enlace tel: se maneja automáticamente por el navegador
            // No se necesita configuración adicional
        }
    },
    
    setupRippleEffect() {
        const buttons = document.querySelectorAll('.cta-button, .contact-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
};

// Mobile Menu Manager
const MobileMenuManager = {
    init() {
        this.setupMobileMenu();
    },
    
    setupMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!menuToggle || !navMenu) return;
        
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            const label = isExpanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación';
            menuToggle.setAttribute('aria-label', label);
            
            this.animateHamburger(menuToggle, !isExpanded);
        });
        
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                this.animateHamburger(menuToggle, false);
            });
        });
    },
    
    animateHamburger(menuToggle, isOpen) {
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (isOpen) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    }
};

// Lazy Loading Manager
const LazyLoadingManager = {
    init() {
        this.setupLazyLoading();
    },
    
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
};

// Accessibility Manager
const AccessibilityManager = {
    init() {
        this.setupSkipLink();
        this.setupReducedMotion();
        this.setupFocusManagement();
    },
    
    setupSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Saltar al contenido principal';
        skipLink.className = 'skip-link';
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    },
    
    setupReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const style = document.createElement('style');
            style.textContent = '*, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }';
            document.head.appendChild(style);
        }
    },
    
    setupFocusManagement() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
};

// Utils
const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Scroll Reveal Manager
const ScrollRevealManager = {
    elements: [],
    observer: null,
    
    init() {
        // Verificar si el usuario prefiere movimiento reducido
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // No aplicar animaciones si el usuario prefiere movimiento reducido
        }
        
        // Seleccionar todos los elementos con clases de animación
        this.elements = Array.from(document.querySelectorAll('.fade-in-up, .fade-in, .scale-in, .advantage-card, .gallery-item'));
        
        if (this.elements.length === 0) return;
        
        // Crear Intersection Observer
        const options = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Una vez revelado, dejar de observar para mejor rendimiento
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);
        
        // Observar cada elemento
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
};

// Scroll To Top Manager
const ScrollToTopManager = {
    button: null,
    scrollThreshold: 300,
    
    init() {
        this.button = document.getElementById('scrollToTop');
        if (!this.button) return;
        
        // Agregar event listener al botón
        this.button.addEventListener('click', () => {
            this.scrollToTop();
        });
        
        // Mostrar/ocultar botón basado en scroll
        window.addEventListener('scroll', Utils.throttle(() => {
            this.handleScroll();
        }, 100));
        
        // Verificar posición inicial
        this.handleScroll();
    },
    
    handleScroll() {
        if (!this.button) return;
        
        if (window.pageYOffset > this.scrollThreshold) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    },
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

// Hero Parallax Manager
const HeroParallaxManager = {
    init() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        
        const heroBackground = document.querySelector('.hero-background');
        if (!heroBackground) return;
        
        window.addEventListener('scroll', Utils.throttle(() => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero-section');
            if (!heroSection) return;
            
            const heroHeight = heroSection.offsetHeight;
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        }, 10));
    }
};

// Advantage Cards Mouse Tracking
const AdvantageCardsManager = {
    init() {
        const cards = document.querySelectorAll('.advantage-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });
    }
};

// Inicialización principal
document.addEventListener('DOMContentLoaded', function() {
    ThemeManager.init();
    ScrollManager.init();
    ScrollRevealManager.init();
    ScrollToTopManager.init();
    TabsManager.init();
    CarouselManager.init();
    MapManager.init();
    ContactManager.init();
    MobileMenuManager.init();
    LazyLoadingManager.init();
    AccessibilityManager.init();
    HeroParallaxManager.init();
    AdvantageCardsManager.init();
    
    window.addEventListener('resize', Utils.debounce(() => {
        if (window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (navMenu && menuToggle) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            }
        }
    }, 250));
    
    window.scrollToSection = (sectionId) => {
        ScrollManager.scrollToSection('#' + sectionId);
    };
});

// ===== HOURS MANAGER =====
class HoursManager {
    constructor() {
        this.hours = {
            monday: { open: 9, close: 17 }, // 9 AM - 5 PM
            tuesday: { open: 9, close: 17 },
            wednesday: { open: 9, close: 17 },
            thursday: { open: 9, close: 17 },
            friday: { open: 9, close: 17 },
            saturday: { open: 9, close: 14 }, // 9 AM - 2 PM
            sunday: { open: null, close: null } // Cerrado
        };
        
        this.dayNames = {
            0: 'sunday',
            1: 'monday', 
            2: 'tuesday',
            3: 'wednesday',
            4: 'thursday',
            5: 'friday',
            6: 'saturday'
        };
        
        this.dayLabels = {
            monday: 'Lunes',
            tuesday: 'Martes', 
            wednesday: 'Miércoles',
            thursday: 'Jueves',
            friday: 'Viernes',
            saturday: 'Sábado',
            sunday: 'Domingo'
        };
        
        this.init();
    }
    
    init() {
        this.updateStatus();
        // Actualizar cada minuto
        setInterval(() => this.updateStatus(), 60000);
    }
    
    isOpen() {
        const now = new Date();
        const currentDay = this.dayNames[now.getDay()];
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour + (currentMinute / 60);
        
        const todayHours = this.hours[currentDay];
        
        if (!todayHours.open || !todayHours.close) {
            return false; // Cerrado (domingo)
        }
        
        return currentTime >= todayHours.open && currentTime < todayHours.close;
    }
    
    getNextChange() {
        const now = new Date();
        const currentDay = now.getDay();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour + (currentMinute / 60);
        
        // Buscar el próximo cambio en los próximos 7 días
        for (let i = 0; i < 7; i++) {
            const checkDay = (currentDay + i) % 7;
            const dayName = this.dayNames[checkDay];
            const dayHours = this.hours[dayName];
            
            if (i === 0) {
                // Día actual
                if (this.isOpen()) {
                    // Está abierto, buscar hora de cierre
                    if (currentTime < dayHours.close) {
                        return this.formatTime(dayHours.close) + ' (Cierre)';
                    }
                } else {
                    // Está cerrado, buscar hora de apertura
                    if (dayHours.open && currentTime < dayHours.open) {
                        return this.formatTime(dayHours.open) + ' (Apertura)';
                    }
                }
            } else {
                // Días futuros
                if (dayHours.open && dayHours.close) {
                    const dayLabel = i === 1 ? 'mañana' : this.dayLabels[dayName];
                    return this.formatTime(dayHours.open) + ' (' + dayLabel + ')';
                }
            }
        }
        
        return 'Próximamente';
    }
    
    formatTime(time) {
        const hour = Math.floor(time);
        const minute = Math.round((time - hour) * 60);
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
        const displayMinute = minute.toString().padStart(2, '0');
        
        return `${displayHour}:${displayMinute} ${period}`;
    }
    
    updateStatus() {
        const statusIcon = document.getElementById('status-icon');
        const statusText = document.getElementById('status-text');
        
        if (!statusIcon || !statusText) return;
        
        const isOpen = this.isOpen();
        
        // Actualizar icono
        statusIcon.className = `status-indicator ${isOpen ? 'open' : 'closed'}`;
        
        // Actualizar texto de estado
        statusText.textContent = isOpen ? 'Abierto' : 'Cerrado';
        statusText.className = `status-text ${isOpen ? 'open' : 'closed'}`;
    }
}

// Inicializar HoursManager cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new HoursManager();
});

// Exportar funciones para testing
window.MallasJerez = {
    ScrollManager,
    ScrollRevealManager,
    ScrollToTopManager,
    TabsManager,
    CarouselManager,
    MapManager,
    ContactManager,
    MobileMenuManager,
    LazyLoadingManager,
    AccessibilityManager,
    ThemeManager,
    HoursManager,
    Utils,
    PRODUCTS,
    PRODUCTS_DATASET,
    scrollToSection: (sectionId) => ScrollManager.scrollToSection('#' + sectionId)
};
