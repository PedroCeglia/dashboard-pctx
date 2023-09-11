export default [
  {
    title: "Dashboard",
    linkLists: [
      {
        title: "Main",
        link: "/",
        src: (type) => `/assets/icons/home-${type}.png`,
      },
      {
        title: "Calendario",
        link: "/calendar",
        src: (type) => `/assets/icons/calendar-${type}.png`,
      },
    ],
  },
  {
    title: "Estoque",
    linkLists: [
      {
        title: "Anailizar Estoque",
        link: "/estoque",
        src: (type) => `/assets/icons/estoque-${type}.png`,
      },
      {
        title: "Adicionar Produtos",
        link: "/estoque/add",
        src: (type) => `/assets/icons/add-estoque-${type}.png`,
      },
    ],
  },
  {
    title: "Registros",
    linkLists: [
      {
        title: "Registro de Caixa",
        link: "/registros",
        src: (type) => `/assets/icons/register-${type}.png`,
      },
      {
        title: "Registro de Compra",
        link: "/registros/venda",
        src: (type) => `/assets/icons/buy-register-${type}.png`,
      },
      {
        title: "Registro de Venda",
        link: "/registros/compra",
        src: (type) => `/assets/icons/sell-register-${type}.png`,
      },
    ],
  },
  {
    title: "Contato",
    linkLists: [
      {
        title: "Suporte",
        link: "/suporte",
        src: (type) => `/assets/icons/support-${type}.png`,
      },
      {
        title: "Help",
        link: "/help",
        src: (type) => `/assets/icons/help-${type}.png`,
      },
    ],
  },
];
