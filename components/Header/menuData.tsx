import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Nosotros",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contáctenos",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Páginas",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Acerca de la página",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Página de contacto",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Página de blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Página de blog con barra lateral",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Detalles del blog",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Página de inicio de sesión",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Página de registro",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Página de error",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
