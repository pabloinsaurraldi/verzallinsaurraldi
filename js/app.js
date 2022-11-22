// PRODUCTOS
const productos = [
    // mothers
    {
        id: "motherboard-01",
        titulo: "ASUS B550E AM4",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572541/verzall/img/motherboard/asus-strix-b550e-gaming-am4_xe7aeh.png",
        categoria: {
            nombre: "Motherboard",
            id: "motherboards"
        },
        precio: 17500
    },
    {
        id: "motherboard-02",
        titulo: "ASUS Prime B460 AM4",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572540/verzall/img/motherboard/asus-prime-b460ma-r21200_udgid0.png",
        categoria: {
            nombre: "Motherboard",
            id: "motherboards"
        },
        precio: 11300
    },
    {
        id: "motherboard-03",
        titulo: "ASUS Prime X570 AM4",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572541/verzall/img/motherboard/asus-prime-x570p-am4_afbpjb.png",
        categoria: {
            nombre: "Motherboard",
            id: "motherboards"
        },
        precio: 23400
    },
    {
        id: "motherboard-04",
        titulo: "ASUS Prime H510 1200",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572541/verzall/img/motherboard/asus-prime-h510me-1200_gmqbo7.png",
        categoria: {
            nombre: "Motherboard",
            id: "motherboards"
        },
        precio: 23700
    },
    {
        id: "motherboard-05",
        titulo: "GIGABYTE Udax Z690 1700",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572541/verzall/img/motherboard/gigabyte-z690-udax-ddr-lga1700_zwpkto.png",
        categoria: {
            nombre: "Motherboard",
            id: "motherboards"
        },
        precio: 48600
    },
    // micros
    {
        id: "procesador-01",
        titulo: "Ryzen 7 5700G",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572553/verzall/img/procesadores/ryzen7-5700g_dflmtf.png",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 48500
    },
    {
        id: "procesador-02",
        titulo: "Ryzen 9 5900X",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572552/verzall/img/procesadores/ryzen9-5900x_t31d4f.png",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 137000
    },
    {
        id: "procesador-03",
        titulo: "Intel I3 10100F",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572548/verzall/img/procesadores/i3-10100F_kelsij.png",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 31300
    },
    {
        id: "procesador-04",
        titulo: "Ryzen 5 5600X",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572550/verzall/img/procesadores/ryzen5-5600x_xjcpyt.png",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 53000
    },
    {
        id: "procesador-05",
        titulo: "Ryzen 3 4350G",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572549/verzall/img/procesadores/ryzen3-4350g_vts1uk.png",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 31000
    },
    {
        id: "procesador-06",
        titulo: "Intel I7 9700F",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572549/verzall/img/procesadores/i7-9700f_emr3om.png",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 48800
    },
    {
        id: "procesador-07",
        titulo: "Intel I5 10400",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572549/verzall/img/procesadores/i5-10400_wqne5h.png",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 52400
    },

    // Placas de video
    {
        id: "gpu-01",
        titulo: "MSI RTX 3070TI",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572549/verzall/img/placasdevideo/msi-rtx3070ti_bgv2f7.png",
        categoria: {
            nombre: "PlacasdeVideo",
            id: "placasDeVideo"
        },
        precio: 160500
    },
    {
        id: "gpu-02",
        titulo: "POWERCOLOR RX 550",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572546/verzall/img/placasdevideo/powercolor-rx550_hwwzrg.png",
        categoria: {
            nombre: "PlacasdeVideo",
            id: "placasDeVideo"
        },
        precio: 86900
    },
    {
        id: "gpu-03",
        titulo: "ASUS RX 6900XT",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572546/verzall/img/placasdevideo/placa22_c0wmrx.png",
        categoria: {
            nombre: "Placas de Video",
            id: "placasDeVideo"
        },
        precio: 246000
    },
    {
        id: "gpu-04",
        titulo: "PALIT RTX 3080",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572546/verzall/img/placasdevideo/palit-rtx3080_skw3dn.png",
        categoria: {
            nombre: "PlacasdeVideo",
            id: "placasDeVideo"
        },
        precio: 258000
    },
    {
        id: "gpu-05",
        titulo: "PLAIT GTX 1050 TI",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572546/verzall/img/placasdevideo/palit-gtx1050ti_thszid.png",
        categoria: {
            nombre: "PlacasdeVideo",
            id: "placasDeVideo"
        },
        precio: 73640
    },

    //Almacenamiento

    {
        id: "disco-01",
        titulo: "HDD WD 1TB",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572535/verzall/img/almacenamiento/disco-rigido-wd-1tb_ahlrcf.png",
        categoria: {
            nombre: "DiscoRigido",
            id: "almacenamiento"
        },
        precio: 8500
    },
    {
        id: "disco-02",
        titulo: "HDD SEAGATE 2TB ",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572534/verzall/img/almacenamiento/disco-rigido-seagate-2tb_lpboqe.png",
        categoria: {
            nombre: "DiscoRigido",
            id: "almacenamiento"
        },
        precio: 14900
    },
    {
        id: "disco-03",
        titulo: "SSD M2 GIGABYTE 480GB",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572534/verzall/img/almacenamiento/disco-ssd-m2-gigabyte_qsuzke.png",
        categoria: {
            nombre: "DiscoSolido",
            id: "almacenamiento"
        },
        precio: 7490
    },
    {
        id: "disco-04",
        titulo: "SSD SATA GIGABYTE 480GB",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572533/verzall/img/almacenamiento/disco-ssd-gigabyte_kpqleg.png",
        categoria: {
            nombre: "DiscoSolido",
            id: "almacenamiento"
        },
        precio: 6900
    },

    //Perifericos

    {
        id: "periferico-01",
        titulo: "LOGITECH PRO X LOL",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572544/verzall/img/auriculares/logitech-pro-x-lol_oslhpn.png",
        categoria: {
            nombre: "Auriculares",
            id: "perifericos"
        },
        precio: 11500
    },
    {
        id: "periferico-02",
        titulo: "JBL QUANTUM 600 WIRELESS",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572544/verzall/img/auriculares/jbl-quantum-600-wireless_wgql9w.png",
        categoria: {
            nombre: "Auriculares",
            id: "perifericos"
        },
        precio: 17400
    },
    {
        id: "periferico-03",
        titulo: "LOGITECJ G733 WIRELESS",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572542/verzall/img/auriculares/logitech-g733-lila-wireless_knnhnd.png",
        categoria: {
            nombre: "Auriculares",
            id: "perifericos"
        },
        precio: 16700
    },
    {
        id: "periferico-04",
        titulo: "LOGITECH G435 WIRELESS",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572539/verzall/img/auriculares/logitech-g435-wireless_b9ba5n.png",
        categoria: {
            nombre: "Auriculares",
            id: "perifericos"
        },
        precio: 13500
    },
    {
        id: "periferico-05",
        titulo: "HYPERX CLOUD ALPHA",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572538/verzall/img/auriculares/hyperx-cloud-alpha-black-red_bzjgye.png",
        categoria: {
            nombre: "Auriculares",
            id: "perifericos"
        },
        precio: 17600
    },
    {
        id: "periferico-06",
        titulo: "CORSAIR HS35 BLUE",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572539/verzall/img/auriculares/corsair-hs35-blue_grhkle.png",
        categoria: {
            nombre: "Auriculares",
            id: "perifericos"
        },
        precio: 18700
    },
    {
        id: "periferico-07",
        titulo: "ASUS TUF GAMING M3 RGB",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572542/verzall/img/mouse/asus-tuf-gaming-m3rgb_benojx.png",
        categoria: {
            nombre: "Mouse",
            id: "perifericos"
        },
        precio: 7630
    },
    {
        id: "periferico-08",
        titulo: "HYPERX PULSEFIRE CORE RGB",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572542/verzall/img/mouse/hyperx-pulsefire-core-rgb_b2mazg.png",
        categoria: {
            nombre: "Mouse",
            id: "perifericos"
        },
        precio: 6980
    },
    {
        id: "periferico-09",
        titulo: "REDRAGON MT54 RGB ULTRALIVIANO",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572544/verzall/img/mouse/mouse17_fiq3ig.png",
        categoria: {
            nombre: "Mouse",
            id: "perifericos"
        },
        precio: 4800
    },
    {
        id: "periferico-10",
        titulo: "LOGITECH GPRO X SUPER LIGHT",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572543/verzall/img/mouse/logitech-gprox-super-light-black_j2j1ff.png",
        categoria: {
            nombre: "Mouse",
            id: "perifericos"
        },
        precio: 16400
    },

    {
        id: "periferico-11",
        titulo: "LOGITECH PRO X GX BLUE",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572556/verzall/img/teclados/logitech-prox-gx-blue_xeeaxa.png",
        categoria: {
            nombre: "Teclado",
            id: "perifericos"
        },
        precio: 15700
    },
    {
        id: "periferico-12",
        titulo: "HYPERX ALLOY ELITE2 RGB",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572553/verzall/img/teclados/hyperx-alloy-elite2-rgb_jcc5bn.png",
        categoria: {
            nombre: "Teclado",
            id: "perifericos"
        },
        precio: 21000
    },
    {
        id: "periferico-12",
        titulo: "HYPERX ALLOY FPSPRO",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572553/verzall/img/teclados/hyperx-alloy-fpspro-cherry-red_hgqonx.png",
        categoria: {
            nombre: "Teclado",
            id: "perifericos"
        },
        precio: 22670
    },
    {
        id: "periferico-12",
        titulo: "LOGITECH K120 ESPAÑOL",
        imagen: "https://res.cloudinary.com/dkn0guenm/image/upload/v1662572556/verzall/img/teclados/logitech-k120-usb-esp_xvjiil.png",
        categoria: {
            nombre: "Teclado",
            id: "perifericos"
        },
        precio: 28400
    },


];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            
            <div class="producto-detalles">
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    alertaAgregado()
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
