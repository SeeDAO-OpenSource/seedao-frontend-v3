var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_react7 = require("@remix-run/react"), import_react8 = require("@chakra-ui/react"), import_core2 = require("@usedapp/core"), import_react9 = require("@chakra-ui/react");

// app/themes/index.tsx
var import_react2 = require("@chakra-ui/react"), getNavButtonProps = (options) => {
  let colorScheme = (options == null ? void 0 : options.colorScheme) || "secondary";
  return {
    fontWeight: "normal",
    color: `${colorScheme}.600`,
    _hover: {
      bg: "none",
      color: `${colorScheme}.900`,
      textDecoration: "underline"
    },
    _active: {
      bg: "none",
      color: `${colorScheme}.900`,
      textDecoration: "underline"
    },
    ...options != null && options.active ? { color: `${colorScheme}.900`, fontWeight: "semibold" } : {}
  };
}, font = "'Space Grotesk', -apple-system, BlinkMacSystemFont, Helvetica, Tahoma,Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif", theme = (0, import_react2.extendTheme)({
  initialColorMode: "dark",
  shadows: {},
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "#fff"
      }
    }
  },
  colors: {
    pass: {
      100: "#37FF87",
      200: "#37FF87",
      300: "#37FF87",
      400: "#37FF87",
      500: "#37FF87",
      600: "#37FF87",
      700: "#37FF87",
      800: "#37FF87",
      900: "#37FF87"
    },
    attention: {
      100: "#FF6737",
      200: "#FF6737",
      300: "#FF6737",
      400: "#FF6737",
      500: "#FF6737",
      600: "#FF6737",
      700: "#FF6737",
      800: "#FF6737",
      900: "#FF6737"
    },
    primary: {
      100: "#000",
      200: "#000",
      300: "#000",
      400: "#000",
      500: "#000",
      600: "#000",
      700: "#000",
      800: "#000",
      900: "#000"
    },
    secondary: {
      100: "rgba(255, 255, 255, 0.1)",
      200: "rgba(255, 255, 255, 0.2)",
      300: "rgba(255, 255, 255, 0.3)",
      400: "rgba(255, 255, 255, 0.4)",
      500: "rgba(255, 255, 255, 0.5)",
      600: "rgba(255, 255, 255, 0.6)",
      700: "rgba(255, 255, 255, 0.7)",
      800: "rgba(255, 255, 255, 0.8)",
      900: "rgba(255, 255, 255, 1)"
    },
    adorn: {
      100: "#37FFFF",
      200: "#37FFFF",
      300: "#37FFFF",
      400: "#37FFFF",
      500: "#37FFFF",
      600: "#37FFFF",
      700: "#37FFFF",
      800: "#37FFFF",
      900: "#37FFFF"
    }
  },
  fonts: {
    body: font,
    heading: font
  },
  components: {
    Menu: {
      baseStyle: {
        list: {
          px: "20px",
          py: "12px",
          borderRadius: "0",
          boxShadow: "none",
          border: "1px solid secondary.900",
          bg: "primary.100",
          minW: "unset"
        },
        item: {
          px: 0,
          py: 0,
          textAlign: "center",
          display: "block",
          ...getNavButtonProps(),
          _focus: {
            bg: "none",
            textDecoration: "underline"
          }
        },
        button: {
          fontWeight: "semibold"
        }
      }
    }
  }
});

// app/constants/index.ts
var SHADOW_BORDER = "0 0 0 1px var(--chakra-colors-secondary-900)";

// app/components/NavigationBar/index.tsx
var import_react4 = require("@chakra-ui/react"), import_core = require("@usedapp/core");
var import_react5 = require("@remix-run/react");

// app/hooks/useEnv.tsx
var import_react3 = require("react"), EnvContext = (0, import_react3.createContext)({}), useEnv = () => (0, import_react3.useContext)(EnvContext);

// app/components/NavigationBar/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), NavButton = ({
  children,
  colorScheme = "secondary",
  active,
  to,
  ...props
}) => {
  let button = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Button, {
    variant: "unstyled",
    textTransform: "uppercase",
    ...getNavButtonProps({ colorScheme, active }),
    ...props,
    children
  }, void 0, !1, {
    fileName: "app/components/NavigationBar/index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
  return to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
    as: import_react5.Link,
    to,
    children: button
  }, void 0, !1, {
    fileName: "app/components/NavigationBar/index.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) : button;
}, Side = () => {
  let { account, activateBrowserWallet } = (0, import_core.useEthers)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.HStack, {
    h: "20px",
    ml: "auto",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "semibold",
    borderLeft: "2px",
    borderRight: "2px",
    borderStyle: "solid",
    borderColor: "secondary.900",
    px: "4px",
    spacing: "4px",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Image, {
        src: "/assets/svg/navbar-decorate.svg",
        h: "20px",
        w: "auto"
      }, void 0, !1, {
        fileName: "app/components/NavigationBar/index.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this),
      account ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Image, {
            src: "/assets/svg/user-connected-wallet.svg",
            bg: "secondary.900",
            w: "20px",
            h: "inherit",
            rounded: "1px"
          }, void 0, !1, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Box, {
            bg: "secondary.900",
            color: "primary.100",
            px: "4px",
            rounded: "1px",
            children: [
              account.substring(0, 6),
              "...",
              account.substring(account.length - 4, account.length)
            ]
          }, void 0, !0, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/NavigationBar/index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Button, {
        bg: "secondary.900",
        color: "primary.100",
        h: "inherit",
        px: "4px",
        rounded: "1px",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Box, {
          as: "span",
          textTransform: "uppercase",
          onClick: activateBrowserWallet,
          children: "Connect Wallet"
        }, void 0, !1, {
          fileName: "app/components/NavigationBar/index.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/NavigationBar/index.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/NavigationBar/index.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}, NavigationBar = () => {
  let location = (0, import_react5.useLocation)(), splitLineEl = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Box, {
    bg: "secondary.900",
    h: "14px",
    w: "2px",
    mx: "16px"
  }, void 0, !1, {
    fileName: "app/components/NavigationBar/index.tsx",
    lineNumber: 103,
    columnNumber: 23
  }, this), pathnamePart1 = location.pathname.split("/")[1], { POAP_URL, C_COMBINATOR_URL } = useEnv();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Flex, {
    w: "full",
    h: `${68}px`,
    align: "center",
    px: "20px",
    shadow: "0px 0px 0px 1px var(--chakra-colors-secondary-900)",
    position: "sticky",
    top: "0",
    bg: "primary.100",
    zIndex: 1,
    mb: "-1px",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Image, {
        src: "/assets/svg/logo.svg",
        w: "144px",
        h: "22px",
        mr: "4px"
      }, void 0, !1, {
        fileName: "app/components/NavigationBar/index.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, this),
      splitLineEl,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.HStack, {
        spacing: "16px",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavButton, {
            active: location.pathname === "/home" /* Home */ || location.pathname === "/home/roadmap" /* HomeRoadmap */ || location.pathname === "/home/about" /* HomeAbout */ || location.pathname === "/start" /* HomeStart */,
            to: "/home" /* Home */,
            children: "Home"
          }, void 0, !1, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Menu, {
            placement: "bottom",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuButton, {
                ...getNavButtonProps({
                  active: location.pathname === "/event" /* Event */ || location.pathname === "/task" /* Task */ || location.pathname === "/task/done" /* TaskDone */ || location.pathname === "/task/on_progress" /* TaskOnProgress */ || location.pathname === "/task/todo" /* TaskTodo */
                }),
                textTransform: "uppercase",
                children: "Event"
              }, void 0, !1, {
                fileName: "app/components/NavigationBar/index.tsx",
                lineNumber: 135,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuList, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuItem, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
                      as: import_react5.Link,
                      to: "/event" /* Event */,
                      display: "flex",
                      w: "full",
                      h: "full",
                      py: "8px",
                      children: "EVENT"
                    }, void 0, !1, {
                      fileName: "app/components/NavigationBar/index.tsx",
                      lineNumber: 150,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/NavigationBar/index.tsx",
                    lineNumber: 149,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuItem, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
                      as: import_react5.Link,
                      to: "/task/todo" /* TaskTodo */,
                      display: "flex",
                      w: "full",
                      h: "full",
                      py: "8px",
                      children: "TASK"
                    }, void 0, !1, {
                      fileName: "app/components/NavigationBar/index.tsx",
                      lineNumber: 162,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/NavigationBar/index.tsx",
                    lineNumber: 161,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/NavigationBar/index.tsx",
                lineNumber: 148,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 134,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavButton, {
            active: pathnamePart1 === "/deschool" /* Deschool */ || location.pathname === "/deschool" /* Deschool */,
            to: "/deschool" /* Deschool */,
            children: "Deschool"
          }, void 0, !1, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 175,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavButton, {
            active: pathnamePart1 === "/govern" /* Govern */ || location.pathname === "/govern" /* Govern */,
            to: "/govern" /* Govern */,
            children: "govern"
          }, void 0, !1, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 184,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Menu, {
            placement: "bottom",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuButton, {
                ...getNavButtonProps({
                  active: pathnamePart1 === "/sgn" /* Sgn */ || location.pathname === "/sgn" /* Sgn */ || pathnamePart1 === "/poap" /* Poap */ || location.pathname === "/poap" /* Poap */
                }),
                textTransform: "uppercase",
                children: "Mint"
              }, void 0, !1, {
                fileName: "app/components/NavigationBar/index.tsx",
                lineNumber: 194,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuList, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuItem, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
                      as: import_react5.Link,
                      to: "/sgn" /* Sgn */,
                      display: "flex",
                      w: "full",
                      h: "full",
                      py: "8px",
                      children: "SGN"
                    }, void 0, !1, {
                      fileName: "app/components/NavigationBar/index.tsx",
                      lineNumber: 208,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/NavigationBar/index.tsx",
                    lineNumber: 207,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.MenuItem, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
                      href: POAP_URL,
                      target: "_blank",
                      display: "flex",
                      w: "full",
                      h: "full",
                      py: "8px",
                      children: "POAP"
                    }, void 0, !1, {
                      fileName: "app/components/NavigationBar/index.tsx",
                      lineNumber: 220,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/NavigationBar/index.tsx",
                    lineNumber: 219,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/NavigationBar/index.tsx",
                lineNumber: 206,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 193,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavButton, {
            active: pathnamePart1 === "/member" /* Member */ || location.pathname === "/member" /* Member */,
            to: "/member" /* Member */,
            children: "Member"
          }, void 0, !1, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 233,
            columnNumber: 9
          }, this),
          splitLineEl,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
            href: C_COMBINATOR_URL,
            target: "_blank",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavButton, {
              colorScheme: "adorn",
              children: "C-Combinator"
            }, void 0, !1, {
              fileName: "app/components/NavigationBar/index.tsx",
              lineNumber: 244,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/NavigationBar/index.tsx",
            lineNumber: 243,
            columnNumber: 9
          }, this),
          splitLineEl
        ]
      }, void 0, !0, {
        fileName: "app/components/NavigationBar/index.tsx",
        lineNumber: 122,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Side, {}, void 0, !1, {
        fileName: "app/components/NavigationBar/index.tsx",
        lineNumber: 248,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/NavigationBar/index.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
};

// app/root.tsx
var import_framer_motion2 = require("framer-motion");

// app/components/AnimationContainer/index.tsx
var import_react6 = require("@chakra-ui/react"), import_framer_motion = require("framer-motion"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ThreeDAnimation = {
  initial: {
    y: "30%",
    opacity: 0,
    zIndex: 0,
    rotateX: "-30deg",
    rotateY: "30deg"
  },
  animate: {
    y: 0,
    opacity: 1,
    rotateX: "0deg",
    rotateY: "0deg"
  },
  exit: {
    y: "10%",
    opacity: 0,
    scale: 0.75,
    zIndex: -1,
    rotateX: "0deg",
    rotateY: "0deg"
  }
}, OpacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}, StartAnimation = {
  initial: "closed",
  animate: "open",
  exit: "closed",
  variants: {
    open: () => ({
      clipPath: `circle(${2e3 * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(1px at 40px 420px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }
}, SgnAnimation = {
  initial: {
    y: "50%",
    opacity: 0,
    zIndex: 0,
    transition: {
      type: "tween"
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween"
    }
  },
  exit: {
    opacity: 0
  }
}, animationMap = {
  start: StartAnimation,
  home: OpacityAnimation,
  sgn: SgnAnimation,
  deschool: OpacityAnimation,
  member: OpacityAnimation
}, AnimationContainer = ({ children, animation = "", ...props }) => {
  let ani = animationMap[animation] || ThreeDAnimation;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Box, {
    as: import_framer_motion.motion.div,
    ...ani,
    position: "absolute",
    w: "full",
    h: "full",
    ...props,
    children
  }, void 0, !1, {
    fileName: "app/components/AnimationContainer/index.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
};

// app/constants/url.ts
function getUrlEnv() {
  let URL_KEY = [
    "TWITTER_URL",
    "DISCORD_URL",
    "NOTION_URL",
    "OPENSEA_URL",
    "MIRROR_URL",
    "DESCHOOL_URL",
    "FORUM_URL",
    "POAP_URL",
    "C_COMBINATOR_URL",
    "SERVER_URL"
  ], defaultUrlMap = {
    TWITTER_URL: "https://mobile.twitter.com/see_dao",
    DISCORD_URL: "https://discord.com/invite/seedao",
    NOTION_URL: "https://seedao.notion.site/SEEDAO-WIKI-f57031667089473faa7ea3560d05960c",
    OPENSEA_URL: "https://opensea.io/collection/seedaogenesis",
    MIRROR_URL: "https://mirror.xyz/seedao.eth",
    DESCHOOL_URL: "https://deschool.app",
    FORUM_URL: "https://forum.seedao.xyz",
    C_COMBINATOR_URL: "https://beta.seedao.cc",
    SERVER_URL: "https://seedao.azurewebsites.net"
  };
  return URL_KEY.reduce(
    (acc, key) => ({
      ...acc,
      [key]: process.env[key] || defaultUrlMap[key]
    }),
    defaultUrlMap
  );
}

// app/root.tsx
var import_node = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "SEEDAO",
  viewport: "width=device-width,initial-scale=1"
});
function loader() {
  let URL_ENV = getUrlEnv();
  return (0, import_node.json)({
    PUBLIC_ENV: {
      ...URL_ENV
    }
  });
}
function App() {
  let outlet = (0, import_react7.useOutlet)(), location = (0, import_react7.useLocation)(), loaderData = (0, import_react7.useLoaderData)(), PUBLIC_ENV = (loaderData == null ? void 0 : loaderData.PUBLIC_ENV) || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: "/styles/global.css"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Center, {
        as: "body",
        minW: `${1440}px`,
        minH: "100vh",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnvContext.Provider, {
            value: PUBLIC_ENV,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.ChakraProvider, {
              theme,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.DAppProvider, {
                config: {},
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Grid, {
                  templateRows: `${68}px calc(100% - ${68}px)`,
                  w: `${1440}px`,
                  h: "100vh",
                  mx: "auto",
                  maxH: `${1080}px`,
                  position: "relative",
                  userSelect: "none",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationBar, {}, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 71,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Box, {
                      w: "full",
                      h: "full",
                      maxH: `${1012}px`,
                      flex: 1,
                      position: "relative",
                      style: {
                        perspective: 800
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_framer_motion2.AnimatePresence, {
                        initial: !1,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimationContainer, {
                          animation: location.pathname.split("/")[1],
                          shadow: SHADOW_BORDER,
                          bg: "primary.100",
                          children: outlet
                        }, location.pathname.split("/")[1], !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 83,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 82,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 72,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/deschool.tsx
var deschool_exports = {};
__export(deschool_exports, {
  default: () => Deschool
});
var import_react10 = require("@chakra-ui/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Deschool() {
  let { DESCHOOL_URL } = useEnv();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Box, {
    as: "iframe",
    src: DESCHOOL_URL,
    w: "full",
    h: "full",
    flex: 1,
    bg: "white"
  }, void 0, !1, {
    fileName: "app/routes/deschool.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/govern.tsx
var govern_exports = {};
__export(govern_exports, {
  default: () => Govern
});
var import_react11 = require("@chakra-ui/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Govern() {
  let { FORUM_URL } = useEnv();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Box, {
    as: "iframe",
    src: FORUM_URL,
    w: "full",
    h: "full",
    flex: 1
  }, void 0, !1, {
    fileName: "app/routes/govern.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

// app/routes/member.tsx
var member_exports = {};
__export(member_exports, {
  default: () => Member
});
var import_react18 = require("@chakra-ui/react");

// app/components/Indicator/index.tsx
var import_react12 = require("react"), import_react13 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Indicator = ({ keyName, value = "-", valueUnit }) => {
  let abbreviatedValue = (0, import_react12.useMemo)(() => {
    if (typeof value == "number" && value > 1e3) {
      let valueWithFixed = (value / 1e3).toFixed(1);
      return (valueWithFixed[valueWithFixed.length - 1] === "0" && valueWithFixed[valueWithFixed.length - 2] === "." ? valueWithFixed.substring(0, valueWithFixed.length - 2) : valueWithFixed) + "k";
    }
    return value;
  }, [value]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.VStack, {
    align: "flex-start",
    spacing: "0",
    fontWeight: "400",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.HStack, {
        align: "flex-end",
        spacing: "0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Box, {
            fontSize: "48px",
            lineHeight: "48px",
            children: abbreviatedValue
          }, void 0, !1, {
            fileName: "app/components/Indicator/index.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          value === "-" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Box, {
            fontSize: "28px",
            lineHeight: "28px",
            children: valueUnit
          }, void 0, !1, {
            fileName: "app/components/Indicator/index.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Indicator/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Box, {
        textTransform: "uppercase",
        fontSize: "14px",
        children: keyName
      }, void 0, !1, {
        fileName: "app/components/Indicator/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Indicator/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/data/sgn.ts
var SGNS = [
  {
    discordName: " baiyu#2918",
    address: "0x8C913aEc7443FE2018639133398955e0E17FB0C1",
    contact: { twitter: "https://twitter.com/baiyu2140" },
    guilds: ["\u534F\u8C03\u59D4\u5458"],
    projects: [
      "SeeDAO",
      "POAP",
      "V1",
      "deschool",
      "metashanghai",
      "web3\u5927\u5B66",
      "\u516C\u5730\u5267\u573A",
      "\u5B98\u7F51V1",
      "\u5B98\u7F51V2",
      "\u6682\u65F6\u540D\u5B57\u4FDD\u5BC6\u7684\u9879\u76EE"
    ],
    description: "\u6211\u662F\u767D\u9C7C\uFF0CSeeDAO\u53D1\u8D77\u4EBA\u4E4B\u4E00\u30022017\u5E74\u63A5\u89E6\u6BD4\u7279\u5E01\uFF0C\u75F4\u8FF7\u4E8E\u533A\u5757\u94FE\u53EF\u80FD\u5E26\u6765\u7684\u751F\u4EA7\u5173\u7CFB\u53D8\u9769\u3002\u6B64\u540E\u5206\u522B\u5728\u706B\u5E01\u7814\u7A76\u9662\u548C\u6BD4\u7279\u5927\u9646\u505A\u8FC7\u4E00\u4E9B\u7814\u7A76\u5DE5\u4F5C\uFF0C2020\u5E74\u5E95\u53C2\u4E0E\u521B\u5EFACryptoC\u3002\u7231\u597D\u662F\u7814\u7A76\u793E\u4F1A\u534F\u4F5C\u3001\u653F\u6CBB\u7ECF\u6D4E\u5B66\u548CDAO\u4E2D\u4EBA\u7684\u5173\u7CFB\u3002\u6211\u5E0C\u671BSeeDAO\u80FD\u5E2E\u52A9\u6240\u6709\u6DF1\u5EA6\u53C2\u4E0E\u7684SGN Holder\u5728\u8FD9\u91CC\u5B9E\u73B0\u81EA\u5DF1\u7684\u68A6\u60F3\uFF0C\u6210\u4E3A\u4E00\u4E2A\u5168\u9762\u53D1\u5C55\u3001\u81EA\u7531\u6709\u8DA3\u7684\u4EBA\u3002                                                               \u201CCryptoC\u7EC8\u5C06\u89E3\u6563\uFF0CSeeDAO\u7EE7\u7EED\u8FDC\u822A\u201D\u3002",
    tokenId: 121,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSfEvitSeu6pp5ADBXXNVWHP9g5x11m3wEhjphAibqCCk/120_120"
  },
  {
    discordName: "#Sloth Run8245",
    address: "0x01175Ef4738b825cd12F4d1ff2d2904d52144531",
    contact: { twitter: "https://twitter.com/Diana19959295" },
    guilds: ["\u534F\u8C03\u59D4\u5458"],
    projects: ["deschool", "metashanghai", "web3\u5927\u5B66"],
    description: "\u6211\u662F\u5510\u6657\uFF0CSeeDAO\u53D1\u8D77\u4EBA\u4E4B\u4E00\u30022016\u5E74\u5F00\u59CB\u7814\u7A76\u52A0\u5BC6\u8D27\u5E01\uFF0C\u4ECE\u6B64\u5F00\u59CB\u4E864\u5E74\u7684\u533A\u5757\u94FE\u5A92\u4F53\u751F\u6DAF\u3002\u66FE\u4EFB\u804C\u4E8E\u534E\u5C14\u8857\u89C1\u95FB\u300136\u6C2A\uFF0C\u8054\u5408\u521B\u7ACB\u533A\u5757\u94FE\u5A92\u4F53\u201D\u78B3\u94FE\u4EF7\u503C\u201C\u30022019\u5E74\u5C06CryptoPunk\u4ECB\u7ECD\u5230\u56FD\u5185\uFF0C\u6210\u4E3A\u4E2D\u56FD\u52A0\u5BC6\u827A\u672F\u548CNFT\u7684\u65E9\u671F\u5E03\u9053\u8005\u3002\u75F4\u8FF7\u4E8EWeb3\u6587\u5316\u7814\u7A76\u548C\u5EFA\u8BBE\uFF0C\u6DF1\u4FE1DAO\u4F1A\u6210\u4E3A\u672A\u6765\u4EBA\u7C7B\u7EC4\u7EC7\u548C\u8FDE\u63A5\u7684\u65B9\u5F0F\u3002\u613FSeeDAO\u6210\u4E3A\u534E\u8BEDDAO\u7E41\u8363\u751F\u957F\u7684\u571F\u58E4\uFF0C\u613F\u8FD9\u91CC\u5C71\u82B1\u70C2\u6F2B\uFF0C\u661F\u706B\u71CE\u539F\u3002",
    tokenId: 360,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRJJtduYVwF9QBEWVHxiF3LTxemmEhKY6r56buSoNYESk/120_120"
  },
  {
    discordName: "EvaHouse#0939",
    address: "0xd8472531999bC084DC52C937100F5dA046f4b051",
    contact: { twitter: "https://twitter.com/houseEva1" },
    guilds: ["\u827A\u672F\u516C\u4F1A", "\u8BBE\u8BA1\u516C\u4F1A"],
    projects: ["deschool", "metashanghai"],
    description: "\u6211\u662FEva\uFF0CGraphic designer\uFF0C\u70ED\u7231\u827A\u672F\u548C\u4E00\u5207\u4E0E\u7F8E\u5B66\u76F8\u5173\u7684\u5185\u5BB9\u3002\u6570\u5B57\u6E38\u6C11\uFF0C20\u5E74\u5165\u884Cweb3\uFF0C\u66FE\u4EFBBCA\u8BBE\u8BA1\u603B\u76D1\uFF0C\u6700\u65E9\u5728crypto art\u9886\u57DF\uFF0C\u505A\u8FC7\u591A\u4E2A\u52A0\u5BC6\u5C55\u4F1A\u53CA\u5C55\u89C8\u7684\u7F8E\u672F\u6307\u5BFC\u548C\u7EDF\u7B79\uFF0C\u4E0EApe foundation\u6DF1\u5EA6\u5408\u4F5C\u5236\u4F5C\u591A\u4E2AAvatar\u9879\u76EE\uFF1B\u6211\u8BA4\u4E3Aweb3\u6709\u529B\u91CF\u80FD\u591F\u5C06Design\u91CD\u65B0\u5B9A\u4E49\u4E0E\u9769\u547D\uFF0C\u5E0C\u671B\u80FD\u5728SeeDAO\u8BBE\u8BA1\u516C\u4F1A\u63A2\u7D22\u51FA\u8FD9\u6761\u9053\u8DEF\u3002\u6700\u91CD\u8981\u7684\u662F\uFF1AI LOVE SeeDAO\uFF01\u2764\uFE0F",
    tokenId: 422,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYnnR4yitVwkuB5it739tunVcRsoe2NwrRDWXnWUrnY5w/120_120"
  },
  {
    discordName: "stanlee#2779",
    address: "0xcc5DB6F29944979a3f822E705412b471DcD9Da74",
    contact: { twitter: "https://twitter.com/myway198407" },
    guilds: ["SeeDAO", "NFT", "Club", "\u4EA7\u54C1\u516C\u4F1A", "\u6295\u7814\u516C\u4F1A", "\u8FD0\u8425\u516C\u4F1A"],
    projects: ["metashanghai"],
    description: "\u6211\u662Fstanlee\u62FF\u94C1\u5927\u738B\uFF0C\u66FE\u4EFB\u804C\u4E8E\u534E\u5C14\u8857\u89C1\u95FB\u3001\u559C\u9A6C\u62C9\u96C5\u7B49\u4F20\u7EDFweb2\u4F01\u4E1A\uFF0C\u4E5F\u6709\u8FC7\u5916\u6C47\u884D\u751F\u54C1\u884C\u4E1A\u7684\u4ECE\u4E1A\u7ECF\u9A8C\uFF0C\u5728\u91D1\u878D\u884C\u4E1A\u7684\u4ECE\u4E1A\u8FC7\u7A0B\u4E2D\u9010\u6E10\u4E86\u89E3\u533A\u5757\u94FE\u30022021\u5E74\u540E\u77E5\u540E\u89C9\u7684\u53D1\u73B0\u533A\u5757\u94FE\u53D8\u9769\u4E16\u754C\u7684\u8D8B\u52BF\u9510\u4E0D\u53EF\u5F53\uFF0C\u548C\u5510\u6657\u53D6\u5F97\u8054\u7CFB\uFF0C\u52A0\u76DF\u4E86SeeDAO\u3002SeeDAO\u7684\u793E\u533A\u751F\u6001\u65E5\u76CA\u5F3A\u5927\uFF0C\u5E0C\u671B\u81EA\u5DF1\u5728SeeDAO\u80FD\u8DDF\u968F\u5927\u795E\u7684\u6B65\u4F10\u7EC8\u751F\u5B66\u4E60\uFF0C\u6301\u7EED\u8FDB\u5316\uFF0C\u53C2\u4E0E\u5171\u5EFA\uFF0C\u65E5\u540E\u80FD\u6210\u4E3A\u533A\u5757\u94FE\u4E16\u754C\u72EC\u7279\u7684\u79D1\u6280\u3001\u5546\u4E1A\u6587\u5316\u7684\u6D1E\u89C1\u8005\u548C\u6279\u8BC4\u8005\u3002",
    tokenId: 336,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUR5cximX2SN6YDZUgZ72ZSwaVumAk93AgPfKha6GpLYt/120_120"
  },
  {
    discordName: "\u6728\u6728#4590",
    address: "0x1fD00885DF1c24aec7Ebe239b9b22b3dB039dCCb",
    contact: { twitter: "https://twitter.com/jackypan988" },
    guilds: ["\u534F\u8C03\u59D4\u5458", "\u5BA3\u4F20\u516C\u4F1A"],
    projects: ["deschool", "metashanghai"],
    description: "\u6211\u662F\u6728\u6728\uFF0C\u66FE\u4EFB\u804C\u4E8E\u9633\u72EE\u3001\u5B89\u7D22\u5E15\u3001\u84DD\u6807\u7B49\u62C5\u4EFB\u6570\u5B57\u8425\u9500\u603B\u76D1\uFF0C\u8FD1\u51E0\u5E74\u4E00\u76F4\u5728\u7532\u65B9\uFF08\u5FEB\u6D88/\u65E5\u5316\uFF09\u62C5\u4EFBCMO\uFF0C2022\u5E74\u521D\u4EE5\u54C1\u5BA3\u8D1F\u8D23\u4EBA\u8EAB\u4EFD\u52A0\u5165seedao\uFF0C\u6B63\u5F0F\u6253\u5F00web3\u4E8B\u4E1A\u751F\u6DAF\u3002\u4E0D\u65AD\u7684\u611F\u53D7seedao\u4E2D\u7684\u751F\u4EA7\u529B \u548C \u751F\u4EA7\u5173\u7CFB\u5E26\u7ED9\u6211\u7684\u9707\u64BC\u3002\u6211\u5E0C\u671B\u672A\u6765\u4E5F\u80FD\u6210\u957F\u4E3A\u4E0B\u4E00\u4E2A\u725B\u903CDAO\u7EC4\u7EC7\u7684\u53D1\u8D77\u4EBA\u3002\u5728\u8FD9\u4E4B\u524D\u201C\u5378\u4E0B\u6BD4\u7A7F\u4E0A\u4F1F\u5927\uFF01\u201D\u6210\u4E3A\u8FD9\u4E2A\u4F1F\u5927\u822A\u9053\u7684\u4E00\u5458 \u6211\u5F88\u5F00\u5FC3\uFF01",
    tokenId: 417,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNxxzSCUnE3fYCSyPSrU1Dr4Jmuu6exeekoR73yQafd7c/120_120"
  },
  {
    discordName: "Vera_sir#1297",
    address: "0x77BbFa1E9088b6763fDF18D4655421E81aFAaCeE",
    guilds: ["\u534F\u8C03\u59D4\u5458", "\u5BA3\u4F20\u516C\u4F1A", "\u7FFB\u8BD1\u516C\u4F1A"],
    projects: ["metashanghai", "\u516C\u5730\u5267\u573A", "\u6682\u65F6\u540D\u5B57\u4FDD\u5BC6\u7684\u9879\u76EE"],
    description: "Vera\uFF0C\u5373\u5C06\u6BD5\u4E1A\u7684\u590D\u65E6\u5927\u5B66\u5728\u8BFB\u751F\u3002\u6CA1\u6709\u795E\u5947\u7684\u4EBA\u751F\u7ECF\u5386\uFF0C\u4EE5\u524D\u662F\u4E00\u540D\u666E\u901A\u7684\u5B9E\u9A8C\u5BA4\u6253\u5DE5\u4EBA\uFF0C\u5927\u4E09\u65F6\u9000\u51FA Lab \u6210\u4E3A\u6587\u5B66\u8BD1\u8005\uFF0C\u518D\u5230\u8E0F\u5165\u52A0\u5BC6\u4E16\u754C\u7684\u5927\u95E8\uFF0C\u4E00\u5207\u597D\u50CF\u90FD\u5F88\u987A\u5176\u81EA\u7136\u3002\u559C\u6B22\u63A2\u7D22\u672A\u77E5\uFF0C\u70ED\u7231\u79D1\u5B66\u3001\u6587\u5B57\u548C\u7535\u5F71\uFF0C\u5E0C\u671B\u6BCF\u5929\u90FD\u6709\u65B0\u7684\u6536\u83B7\u3002Come and navigate the new world.",
    tokenId: 404,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZLSjC3teKejAtyktin5XvqNYSnJaTCZvg5BfpWPcdK6H/120_120",
    contact: { twitter: null }
  },
  {
    discordName: "Crow_wetLand#4916",
    address: "0xfbf0dab80535dB219540Ae5eB972c4955580EA89",
    contact: { twitter: "https://twitter.com/crow_wetland" },
    guilds: ["\u8FD0\u8425\u516C\u4F1A"],
    projects: ["\u516C\u5730\u5267\u573A", "\u6587\u6CBB\u5C0F\u7EC4"],
    description: "\u6211\u662FCrow/\u5BD2\u9E26\uFF0C\u4E2D\u8D22\u7ECF\u6D4E\u793E\u4F1A\u5B66\u672C\u79D1\u5728\u8BFB\uFF0C2021\u5E7411\u6708\u52A0\u5165SeeDAO\u793E\u533A\u3002\u5728SeeDAO\u53C2\u4E0E\u4E86\u8FD0\u8425\u516C\u4F1A\u3001\u516C\u5730\u5267\u573A\u4E0E\u6587\u6CBB\u5C0F\u7EC4\u3002\u5728\u8FD9\u91CC\u6211\u8BA4\u8BC6\u4E86\u4F17\u591A\u793E\u79D1\u80CC\u666F\u7684\u5C0F\u4F19\u4F34\uFF0C\u4E5F\u56E0SeeDAO\u7684\u5148\u950B\u3001\u201C\u63A2\u8DEF\u4EBA\u201D\u89D2\u8272\u800C\u6DF1\u53D7\u9F13\u821E\uFF0C\u671F\u5F85\u4E0E\u5927\u5BB6\u5728\u5BF9DAO\u7684\u5171\u540C\u63A2\u6C42\u4E2D\u4E0D\u65AD\u63A5\u8FD1web3.0\u7684\u81EA\u7531\u7406\u60F3\u3002",
    tokenId: 33,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmf2zrWyHpNHZM8coTwKpjJEd2PxMGE3aNtV1DNmvsX64f/120_120"
  },
  {
    discordName: "Tantalum#5784",
    address: "0x56b8511E6ca3F9f4835F811050e0f7Ba7d2d7665",
    contact: { twitter: "https://twitter.com/Tantalummmmm" },
    guilds: ["\u8FD0\u8425\u516C\u4F1A"],
    description: "\u6211\u662FTantalum\uFF0Cweb3 noob\uFF0C\u6709\u5E78\u80FD\u591F\u8E0F\u5165\u52A0\u5BC6\u4E16\u754C\uFF0C\u6709\u5E78\u52A0\u5165SeeDAO\uFF0C\u5E0C\u671B\u80FD\u591F\u5411\u524D\u8F88\u5B66\u4E60\uFF0C\u52AA\u529B\u6210\u957F",
    tokenId: 421,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdzcvCyk4MDA711tYuG9aJNR17FazxUb9VHhPbwTogG5V/120_120"
  },
  {
    discordName: "BeiLin#0778",
    address: "0x41448E812733C10b6E74A90AC8086Ba3a0766188",
    contact: { twitter: "https://twitter.com/DavvvinaDU" },
    guilds: ["\u8FD0\u8425\u516C\u4F1A"],
    description: "\u6211\u662F\u5317\u6797\uFF0C\u4E0A\u8D22\u91D1\u878D\u672C\u79D1\uFF0CCUHK MIF\u3002\u8BEF\u6253\u8BEF\u649E\u8FDB\u5165\u4E86web3\u7684\u4E16\u754C\uFF0C\u4E8E2022\u5E741\u6708\u6709\u5E78\u52A0\u5165\u4E86SeeDAO\uFF0C\u5F88\u9AD8\u5174\u9047\u5230\u4E86\u4E00\u7FA4\u7075\u9B42\u6709\u8DA3\u7684\u5C0F\u4F19\u4F34\uFF0C\u5728\u6B64\u6211\u5F97\u5230\u4E86\u4ECE\u672A\u62E5\u6709\u8FC7\u7684\u7ECF\u5386\u4E0E\u6210\u957F\u3002\u89C1\u8BC1\u4E86\u8FD0\u8425\u516C\u4F1A\u4E2D\u4E00\u4E2A\u4E2A\u79CD\u5B50\u7684\u52A0\u5165\uFF0C\u4E5F\u5E0C\u671B\u6211\u4E0E\u4ED6\u4EEC\u90FD\u80FD\u901A\u8FC7\u8FD0\u8425\u516C\u4F1A\u6210\u4E3A\u4E00\u9897\u9897\u7682\u835A\u6811\uFF0C\u4E3ASeeDAO\u7684\u5EFA\u8BBE\u8D21\u732E\u81EA\u5DF1\u7684\u529B\u91CF\u3002\u5E0C\u671B\u8FD0\u8425\u516C\u4F1A\u4E0ESeeDAO\u90FD\u80FD\u8D8A\u6765\u8D8A\u597D\u2764\uFE0F",
    tokenId: 379,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSctGQiLyQHSXfQpzbRwVScyiFJNTF9AAJPQvfRvkTq7r/120_120"
  },
  {
    discordName: "BC#0697",
    address: "0x28eef0330457D7243049C50fe69cd9C5CCE32498",
    contact: { twitter: "https://twitter.com/ds_mqq" },
    guilds: ["SeeDAO", "NFT", "Club"],
    projects: ["metashanghai"],
    description: "\u6211\u662FBC\uFF0CNFT\u6210\u763E\uFF0C\u76F8\u4FE1\u5143\u5B87\u5B99\u80FD\u591F\u5B55\u80B2\u51FA\u4EBA\u7C7B\u4E0B\u4E00\u4E2A\u6587\u660E\u3002\u548C\u767D\u9C7C\u5728\u6CB3\u91CC\u4EBA\u9879\u76EE\u804A\u8FC7\u51E0\u53E5\uFF0C2021\u5E7410\u6708\u767D\u9C7C\u7ED9\u6211\u4E00\u901A\u7535\u8BDD\u9080\u8BF7\u6211\u517C\u804C\uFF0C2022\u5E743\u6708\u6211all in web3\uFF0C\u6211\u7684web2.0\u7ECF\u5386\u4EE5\u5220\u9664\u7EBF\u5448\u73B0\u5982\u4E0B\uFF0C\u8C61\u5F81\u7740\u6211\u7684\u51B3\u5FC3\uFF1A| \u653F\u6CBB\u5927\u5B66\u5E94\u7528\u6570\u5B66\u7CFB\uFF0C\u6210\u529F\u5927\u5B66MBA\u3002\u201D\u5143\u5B87\u5B99\u6F2B\u6E38\u6307\u5317\u201C\u5FAE\u4FE1\u516C\u4F17\u53F7\u521B\u59CB\u4EBA\uFF0C\u66FE\u5728\u4E94\u767E\u5F3A\u4F01\u4E1A\u62C5\u4EFB\u4EA7\u54C1\u7EBF\u8D1F\u8D23\u4EBA\uFF0C\u79D1\u521B\u7248top\u4F01\u4E1A\u62C5\u4EFB\u4EA7\u54C1\u8425\u9500\u8D1F\u8D23\u4EBA",
    tokenId: 83,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSVYc9wDJMz7h33HjGcmxTT8ytKfyVZxYKvKiccXjS1Pp/120_120"
  },
  {
    discordName: "0xBevan#1923",
    address: "0xec1e9D03A08D3d2373666d9606313F4901B4147c",
    contact: { twitter: "https://twitter.com/BevanDing" },
    guilds: ["\u4EA7\u54C1\u516C\u4F1A"],
    projects: ["web3\u5927\u5B66"],
    description: "\u6211\u662FBevan\uFF0C\u4E0A\u6D77\u4EA4\u5927\u5B89\u6CF0MBA\uFF0C\u524DBybit\u4EA7\u54C1\u8FD0\u8425\u4E13\u5BB6\uFF0C\u52A0\u5165Web3\u524D\u66FE\u5728Web2\u884C\u4E1A\u4E2D\u7684Baidu\u3001Bilibili\u6709\u8FD110\u5E74\u4EA7\u54C1\u548C\u8FD0\u8425\u7684\u7ECF\u9A8C\u30022022\u5E74\u521D\u52A0\u5165SeeDAO\u5B66\u4E60\u548C\u4F53\u9A8CDAO\u534F\u4F5C\uFF0C\u53C2\u4E0E\u4E86\u4EA7\u54C1\u516C\u4F1A\u7684\u4E00\u4E9B\u5EFA\u8BBE\u5DE5\u4F5C\u3002\u4E2A\u4EBA\u5174\u8DA3\u662FNFT\u7684\u6269\u5C55\u7528\u4F8B\u7814\u7A76\u3002",
    tokenId: 414,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbmW6EsbkjfhiwxyfstoxAh5DTFNGijPpah455aAEwMiw/120_120"
  },
  {
    discordName: "Davion#2666",
    address: "0xAc85dB17b614c94332B494Ee8329C308f395A053",
    contact: { twitter: null },
    guilds: ["\u6295\u7814\u516C\u4F1A", "\u8FD0\u8425\u516C\u4F1A"],
    description: "web3\u7684\u65B0\u97ED\u83DC\uFF0C\u5E0C\u671B\u80FD\u5728web3\u5927\u5B66\u91CC\u8301\u58EE\u6210\u957F\u3002",
    tokenId: 315,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbQLLptGsesf5Xqohx97w9sKB6Av7wd7tJ9HDK9yUya7f/120_120"
  },
  {
    discordName: "RebeccaWONG",
    address: "0x13E283646f203Ef6B24Cd5C8eD5DBbF29Dd0d39F",
    contact: { twitter: "https://twitter.com/petrel_r" },
    guilds: ["\u6295\u7814\u516C\u4F1A", "\u7FFB\u8BD1\u516C\u4F1A", "\u8FD0\u8425\u516C\u4F1A"],
    projects: ["deschool", "web3\u5927\u5B66"],
    description: "\u6211\u662FRebecca\uFF0C\u5750\u6807web3\u3002\u70ED\u7231\u4E00\u5207\u53EF\u4EE5\u521B\u9020\u5947\u8FF9\u7684\u4E8B\u7269\u3002\u76F8\u4FE1\u65F6\u95F4\u7684\u529B\u91CF\u3002\u76F8\u4FE1\u884C\u52A8\u7684\u529B\u91CF\u3002",
    tokenId: 341,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcPeTqWqJqdbiuK63DpVCrAyDmVeimGJx9cUiGhxFMYk9/120_120"
  },
  {
    discordName: "Tx#2221",
    address: "0xf8279Bf46BF0a5ca756C84350332d987d6562950",
    contact: { twitter: "https://twitter.com/Txxorz" },
    guilds: ["\u8FD0\u8425\u516C\u4F1A"],
    projects: ["\u516C\u5730\u5267\u573A", "\u6587\u6CBB\u5C0F\u7EC4"],
    description: "\u6211\u662F\u751F\u5148\u9EC4\uFF0C\u4F5C\u4E3A\u8FD0\u8425\u516C\u4F1A\u7684\u8001\u5BB6\u4F19\uFF0C\u6211\u5E0C\u671B\u53EF\u4EE5\u6210\u4E3A\u65B0\u4EBA\u4EEC\u7684\u706F\u5854\uFF0C\u7167\u4EAE\u4ED6\u4EEC\u8E0F\u5165web3\u3001SeeDAO\u7684\u8DEF\uFF0C\u5728\u8FD9\u91CC\u627E\u5230\u5C5E\u4E8E\u4ED6\u4EEC\u7684\u5F52\u5C5E",
    tokenId: 327,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQnEoC7b8TNfBTe8aPX1RBXAg95HZBkq6w5wkPHBTDVJh/120_120"
  },
  {
    discordName: "xiaomi#3484",
    address: "0xFA833a5540C3520582Dca433013046a3Cb1C3603",
    contact: { twitter: "https://twitter.com/chengshuiqiang" },
    guilds: ["\u5BA3\u4F20\u516C\u4F1A", "\u827A\u672F\u516C\u4F1A", "\u8BBE\u8BA1\u516C\u4F1A"],
    projects: ["web3\u5927\u5B66", "\u5B98\u7F51V2"],
    description: "\u6211\u662F\u85AA\u5C3D\u81EA\u7136\u51C9\uFF0CC\u793E\u7684\u8001\u5458\u5DE5\uFF0C\u70ED\u7231\u8FD9\u4E00\u5207 \u966Aseedao\u4E00\u8D77\u6210\u957F\u3002",
    tokenId: 40,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbeY5JHTpYxR1sVwrkiuiGxqSyKvQBqZxAufCRj971JST/120_120"
  },
  {
    discordName: "DragonHorn#4651",
    address: "0x3381BB3B23F14eDcE0F8C22aF12194575392375A",
    guilds: ["\u4EA7\u54C1\u516C\u4F1A", "\u5BA3\u4F20\u516C\u4F1A", "\u7FFB\u8BD1\u516C\u4F1A"],
    description: "\u6211\u662F\u9F99\u7284\u89D2\u3002\u6211\u4E0D\u662F\u4EBA\u3002",
    tokenId: 413,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmP59xdQpEjW1CPcnTPvBHV1XYfHHpHmCiFWVC4DJP21Xy/120_120",
    contact: { twitter: null }
  },
  {
    discordName: "robinwang#3654",
    address: "0x406a38A9a95064a54705D19648c68a7aE5e08E7C",
    contact: { twitter: "https://twitter.com/RobinWa47099734" },
    guilds: ["\u6295\u7814\u516C\u4F1A", "\u8BBE\u8BA1\u516C\u4F1A", "\u8FD0\u8425\u516C\u4F1A"],
    projects: ["metashanghai", "web3\u5927\u5B66"],
    description: "\u6211\u662FRobin\uFF0C\u524D\u4F20\u7EDF\u91D1\u878D\u4ECE\u4E1A\u8005\uFF0Cweb3\u5C0F\u5B66\u751F\uFF0C\u7ECF\u5E38\u81EA\u95ED\uFF0C\u5BF9\u4E16\u754C\u5145\u6EE1\u597D\u5947\uFF0C\u559C\u6B22\u601D\u8003\u65E0\u610F\u4E49\u7684\u95EE\u9898\uFF0C\u6B63\u5728\u524D\u8FDB\u7684\u8DEF\u4E0A\u8FF7\u5931\u7740\u3002",
    tokenId: 376,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVcMkhYJ1ZYhNor7wwcRhkoGLQih5ooJUyVLeA47TnXwZ/120_120"
  },
  {
    discordName: "dmtw36#1295",
    address: "0x43E335da57C3928F1CFA75775A3694bA792C9a7b",
    guilds: ["\u7FFB\u8BD1\u516C\u4F1A"],
    description: "lost",
    tokenId: 168,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbHzDr87F71kF5m1KQ3Q3vGJ5ZKH3q6sedoBaXp47wc4r/120_120",
    contact: { twitter: null }
  },
  {
    discordName: "Coffee#7382",
    address: "0xAB206fb4B72009C5c7e78c2a91b0B8E63fB73e34",
    contact: { twitter: "https://twitter.com/coolsy123" },
    guilds: ["\u534F\u8C03\u59D4\u5458", "\u6295\u7814\u516C\u4F1A"],
    projects: ["deschool", "metashanghai", "web3\u5927\u5B66"],
    description: "\u6211\u662F\u5496\u5561\uFF0C\u5750\u6807Web3\uFF0CSeeDAO\u6210\u5458\uFF0CConflux\u793E\u533A\u6280\u672F\u59D4\u5458\u4F1A\u6210\u5458\uFF0C\u5E0C\u671B\u5728\u53C2\u4E0E\u5171\u5EFASeeDAO\u7684\u8FC7\u7A0B\u4E2D\u83B7\u5F97\u6210\u957F\uFF0C\u4E5F\u5E0C\u671B\u80FD\u5728SeeDAO\u4E2D\u5C3D\u81EA\u5DF1\u7684\u52AA\u529B\uFF0C\u5438\u5F15\u5927\u5BB6\u4E00\u8D77\u6765\u5EFA\u8BBE\u3002",
    tokenId: 165,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcL3n8vBKCbgE8WDv4sm2kgV9eMK4FhhdWRX5az94Xtqj/120_120"
  },
  {
    discordName: "Luisll#3341",
    address: "0xf194cd87A48eAafb5248e24B23E08105b4a15F3B",
    contact: { twitter: "https://instagram.com/lfifteenl?r=nametag" },
    guilds: ["\u5BA3\u4F20\u516C\u4F1A", "\u827A\u672F\u516C\u4F1A"],
    projects: ["metashanghai"],
    description: "\u6211\u662FLuis\u67F3\u67F3\u5DDE\uFF0C\u6BD5\u4E1A\u4E8E\u82F1\u56FD\u683C\u62C9\u65AF\u54E5\u5927\u5B66\uFF0C\u662F\u4E00\u540D\u5C0F\u8BF4\u521B\u4F5C\u8005\u30022022\u5E74\u4E09\u6708\u672B\u6709\u5E78\u52A0\u5165\u4E86SEEDAO\u7684\u5BA3\u4F20\u516C\u4F1A\u4E0E\u827A\u672F\u516C\u4F1A\u3002\u6211\u5F88\u559C\u6B22SEE DAO\u7684\u6C1B\u56F4,\u5E0C\u671B\u80FD\u521B\u4F5C\u51FA\u66F4\u591A\u4F5C\u54C1\uFF0C\u901A\u8FC7SEE DAO\u4E0E\u66F4\u591A\u70ED\u7231\u5C0F\u8BF4\u3001\u70ED\u7231\u521B\u4F5C\u7684\u670B\u53CB\u5206\u4EAB\u4EA4\u6D41\u3002",
    tokenId: 419,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmf1hNrkfz9yThGWz5K4zdKX2GwmJ3VqmLMJQj5c1WPS3G/120_120"
  },
  {
    discordName: "Crisliu#4915",
    address: "0xBa1555ddbC9961AAE5d569C6dCa029D598c51436",
    contact: { twitter: "https://twitter.com/CrisLiu96441174" },
    guilds: ["SeeDAO", "NFT", "Club"],
    projects: ["metashanghai"],
    description: "\u6211\u662F\u82B3\u8FB0Crisliu\uFF0C\u5750\u6807Web3\uFF0C2018\u5E74\u5F00\u59CB\u5728\u6657\u59D0\u7684\u5E26\u9886\u4E0B\u8FDB\u5165\u52A0\u5BC6\u4E16\u754C\uFF0C\u8FD9\u4E9B\u7EC6\u5206\u9886\u57DF\u4E2D\u5BF9\u4E8ENFT\u6700\u6709\u5174\u8DA3\u548C\u70ED\u60C5\uFF0C\u4E5F\u6301\u6709\u4E86\u4E00\u4E9B\u84DD\u7B79NFT\u5E76\u4E14\u53C2\u4E0E\u5230\u4ED6\u4EEC\u7684\u793E\u533A\u4E2D\u3002\u5E0C\u671B\u4E4B\u540E\u53EF\u4EE5\u8DDFSeeDAO NFT Cub\u7684\u5C0F\u4F19\u4F34\u4E00\u8D77\u63A2\u7D22NFT\u5E02\u573A\u7684\u65B0\u52A8\u5411\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5E2E\u52A9\u4F18\u8D28\u7684\u521B\u4F5C\u8005\u901A\u8FC7NFT\u7684\u65B9\u5F0F\u8FDB\u884Cweb3\uFF0C\u6784\u5EFA\u4F18\u8D28\u6709\u8DA3\u7684\u8DA3\u6E90\u793E\u533A\u3002",
    tokenId: 293,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUuvbaa1WDrN6xax6TrkuopjvgFH2mnK4hHPoaM3SYYAu/120_120"
  },
  {
    discordName: "Villanelle#4447",
    address: "0x3C9A552e3121Df5130e616a3D74a2277437bBa4E",
    contact: { twitter: "https://twitter.com/villanelle_eth" },
    guilds: ["\u5EFA\u7B51\u5E08\u516C\u4F1A"],
    projects: ["metashanghai"],
    description: "\u6211\u662F\u5A49\u7426\uFF0C\u5F88\u5F00\u5FC3\u80FD\u5728\u53BB\u5E74\u5723\u8BDE\u8282\u52A0\u5165SeeDAO\uFF5E\u76EE\u524D\u5E26\u9886SeeDAO\u5EFA\u7B51\u516C\u4F1A\u7684\u51E0\u4F4D\u6210\u5458 \u52A9\u529BSeeDAO\u5728\u539F\u5B87\u5B99\u7A7A\u95F4\u7684\u5EFA\u8BBE\u3002\u5728Web3\u7684\u4E16\u754C\u91CC\u8FD8\u6709\u8BB8\u591A\u9700\u8981\u4F53\u9A8C\u548C\u5B66\u4E60\u7684\u5730\u65B9\uFF0C\u5E0C\u671B\u4ECA\u540E\u6709\u673A\u4F1A\u53EF\u4EE5\u505A\u66F4\u591A\u7684\u63A2\u7D22\u3002",
    tokenId: 309,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmak1BxJrCYNrYxN6Tpi5EnPix2E6dmd5KVPuMFdqwr2a3/120_120"
  },
  {
    discordName: "Zephyr H#3433",
    address: "0x615B95fEFD5307964dE2E38d544Bb835c5b79717",
    contact: { twitter: "https://twitter.com/emma_zephyr" },
    guilds: ["\u827A\u672F\u516C\u4F1A"],
    description: "\u6211\u662FEmma, \u6BD5\u4E1A\u4E8E\u745E\u5178\u6797\u96EA\u5E73\u5927\u5B66\uFF0C\u5728\u6B27\u6D32\u5DE5\u4F5C5\u5E74\uFF0C\u56DE\u56FD\u540E\u4E00\u76F4\u4ECE\u4E8B\u5F53\u4EE3\u827A\u672F\u9886\u57DF\u7684\u5DE5\u4F5C\u3002\u4E8E2021\u5E74\u590F\u5929\u5173\u6CE8\u4E86\u4E2D\u56FD\u7F8E\u9662\u7F51\u7EDC\u793E\u4F1A\u7814\u7A76\u6240INS\u800C\u6389\u8FDB\u5154\u6D1E\uFF0C\u5373\u523B\u8FDB\u5165\u4E86Crypto\u9886\u57DF\u7684\u5B9E\u8DF5\u3002\u4E3B\u8981\u5173\u6CE8\u4E0E\u81F4\u529B\u4E8E\u533A\u5757\u94FE\u6280\u672F\u4E3A\u827A\u672F\u5E26\u6765\u7684\u65B0\u7684\u60F3\u8C61\u529B\u3001\u521B\u9020\u529B\u3001\u884C\u52A8\u529B\u3002\u8BA4\u540C\u535A\u4F0A\u65AF\u7684\u201C\u793E\u4F1A\u96D5\u5851\u201D\u89C2\u5FF5\uFF0C\u4EE5\u53CA\u8702\u5DE2\u8FD9\u79CD\u53BB\u4E2D\u5FC3\u5316\u5206\u5E03\u5F0F\u7684\u7ED3\u6784\u4E0E\u601D\u7EF4\u3002\u671F\u5F85\u8FD9\u573A\u81EA\u5E26\u9769\u547D\u6027\u7684\u5B9E\u8DF5\u53BB\u6307\u5F15\u53EF\u80FD\u4E16\u754C\uFF0C\u57FA\u4E8E\u793E\u533A\u7684\u7A81\u51FA\u4E3B\u4F53\u95F4\u6027\u7684\u534F\u4F5C\uFF0C\u521B\u9020\u771F\u6B63\u6709\u4EF7\u503C\u7684\u52A0\u5BC6\u827A\u672F\u4F5C\u54C1\u3002",
    tokenId: 374,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcEybnc2jrCGD5C5dSEggnkg2FKy5doQWwXf6h5fqnay9/120_120"
  },
  {
    discordName: "AbU#3542",
    address: "0x682993931130995b557F0B4d4C9f968A1f655A81",
    contact: { twitter: "https://twitter.com/abu_xio" },
    guilds: ["\u4EA7\u54C1\u516C\u4F1A"],
    description: "\u6211\u662FAbU\uFF0C\u6BD5\u4E1A\u4E8E\u7535\u5B50\u79D1\u6280\u5927\u5B66\uFF0Cex-JD\\BABA\uFF0C\u4E2A\u4EBA\u65B9\u5411\u5728\u8D27\u5E01\u7406\u8BBA\u548Clibertarian\u793E\u4F1A\u5B66\uFF0C\u6709\u4E00\u672C\u5F85\u51FA\u7248\u7684\u8D27\u5E01\u7406\u8BBA\u8BD1\u4F5C\u3002SeeDAO\u5438\u5F15\u6211\u7684\u539F\u56E0\u662F\uFF0C99%\u7684DAO\u90FD\u662F\u8FC7\u5BB6\u5BB6\uFF0C\u4F46\u8FD9\u91CC\u662F\u4F8B\u5916\u3002",
    tokenId: 124,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcTUkCDDJoxvpo3mvASwvm7gu8LBnWvLr8P9CkUVUNyBk/120_120"
  },
  {
    discordName: "\u5657\u5657\u5657#6681",
    address: "0x68604Ccdd62A4Aa55562775463664cEbdc70Abd7",
    tokenId: 94,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTkuPAY8FhJumgXwhTpXtEdbT3TmFNyNUpnDCMxChaFno/120_120",
    contact: { twitter: null }
  },
  {
    discordName: "kc *puppuccino.eth#5593",
    address: "0x9672c0e1639F159334Ca1288D4a24DEb02117291",
    contact: { twitter: "https://twitter.com/gingerspc" },
    guilds: ["\u4EA7\u54C1\u516C\u4F1A", "\u534F\u8C03\u59D4\u5458"],
    projects: [
      "SeeDAO",
      "POAP",
      "V1",
      "deschool",
      "metashanghai",
      "web3\u5927\u5B66",
      "\u516C\u5730\u5267\u573A",
      "\u5B98\u7F51V1",
      "\u5B98\u7F51V2",
      "\u6682\u65F6\u540D\u5B57\u4FDD\u5BC6\u7684\u9879\u76EE"
    ],
    description: "\u6211\u662Fkc, 09\u5E74\u51FA\u56FD\uFF0C18\u5E74\u6BD5\u4E1A\u4E8E\u54E5\u5927\u4EBA\u673A\u4EA4\u4E92\u4E13\u4E1A\uFF0C\u7559\u5728\u7EBD\u7EA6\u505Aweb2\u4EA7\u54C1\u54A8\u8BE2\u5DE5\u4F5C\u3002\u7559\u7F8E\u5341\u4F59\u5E74\u95F4\u4E00\u76F4\u5728\u5404NGO\u6E38\u8D70\uFF0C\u5305\u62EC\u827A\u672F\u673A\u6784\u3001homeless center\u3001\u514D\u8D39\u5FC3\u7406\u54A8\u8BE2\u3001\u52A8\u7269\u6551\u52A9\uFF0C\u4EE5\u5B9E\u8D28\u6027\u5E2E\u52A9\u5F31\u52BF\u7FA4\u4F53\u6539\u5584\u751F\u6D3B\uFF0Cmake the world a better place\u300216\u5E74\u5728\u505Apoverty psychology\u7814\u7A76\u65F6\u63A5\u89E6\u5230\u4E86\u6FC0\u8FDB\u5E02\u573A\u7406\u8BBA\uFF0C\u4ECE\u6B64\u6389\u5165\u5154\u5B50\u6D1E\uFF0C\u5E0C\u671B\u80FD\u4ECEcrypto\u7684\u5B9E\u8DF5\u4E2D\u627E\u5230\u6253\u7834\u6743\u5229\u56FA\u5316\u7684\u53EF\u80FD\u6027\u3002",
    tokenId: 324,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcsDsyyfdCWDjUXqxkgR2cE5CaNzqsED7qwmX2RnMjUM9/120_120"
  },
  {
    discordName: "Annaa#4359",
    address: "0x41532C0DecC835293dD1e3Edd47EB5Eb7a7677Cf",
    contact: { twitter: "https://twitter.com/Anna80164" },
    guilds: ["\u8BBE\u8BA1\u516C\u4F1A"],
    projects: ["\u5B98\u7F51V1", "\u5B98\u7F51V2"],
    description: "seedao\u662F\u81EA\u6211\u611F\u89C9\u771F\u6B63\u52A0\u5165\u4E86\u7684\uFF0C\u6709\u5F52\u5C5E\u611F\u7684dao\u7EC4\u7EC7\u3002\u5E0C\u671B\u5B83\u8D8A\u6765\u8D8A\u597D\u3002",
    tokenId: 50,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZN1vvobMREaWvhyLKAbEN4qEMaap7R5dCLu45C52DNRT/120_120"
  },
  {
    discordName: "Ada#6018",
    address: "0x490eE9a3dfe5fa4c65A4A65B3fe178a3c12398a6",
    contact: { twitter: "https://twitter.com/0xAdazz" },
    guilds: ["\u4EA7\u54C1\u516C\u4F1A", "\u8FD0\u8425\u516C\u4F1A"],
    projects: ["\u516C\u5730\u5267\u573A", "\u6682\u65F6\u540D\u5B57\u4FDD\u5BC6\u7684\u9879\u76EE"],
    description: "\u9ED8\u9ED8\u89C2\u5BDF/\u65C1\u542C/\u5B66\u4E60/\u63D2\u5634(\u4E0D\u662F)\u4E86seedao\u51E0\u4E2A\u6708\uFF0C\u7EC8\u4E8E\u8FD8\u662F\u6389\u4E86\u8FDB\u6765\u3002",
    tokenId: 416,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZfp3UdQYmBwDHbq8VwJZmKPedF8P793hLVvDoAsLgumu/120_120"
  },
  {
    discordName: "\u821F\u821F tovarishch.eth#1910",
    address: "0x597F0fDBb96485CD258777248052fF0e4781FE4C",
    contact: { twitter: "https://twitter.com/c_hongzhou" },
    guilds: ["\u6295\u7814\u516C\u4F1A"],
    projects: ["SeeDAO", "POAP", "V1", "deschool", "web3\u5927\u5B66", "\u516C\u5730\u5267\u573A"],
    description: "\u2708\uFE0F   \u{1F5BC}   \u{1F52E}   \u{1F3AE}",
    tokenId: 340,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZSzghKTjvANLXTW4XGMMCDxBkd4pD5vpEZ6JEwGeG2gb/120_120"
  },
  {
    discordName: "Vinson#2703",
    address: "0x97C1837fEEc918Bd2Db0365Dd075F8EFB3EaaCe2",
    contact: { twitter: "https://twitter.com/Cloudy0430" },
    tokenId: 283,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmfCubHQx7cf5Eg35YFBALJzuFEut8B6KpEixf8o8UZrwX/120_120"
  },
  {
    discordName: "ricy137#4325",
    address: "0xf7ac63cEA00286d65848e9cE4750B9f0FcFea2Eb",
    contact: { twitter: "https://twitter.com/MaryChao21" },
    guilds: ["SeeDAO", "NFT", "Club", "\u5F00\u53D1\u8005\u516C\u4F1A"],
    projects: ["deschool", "\u5B98\u7F51V1"],
    description: "Hellow,\u5927\u5BB6\u597D\uFF0C\u6211\u662FRicy.\u53BB\u5E7411\u6708\u5F00\u59CB\u63A5\u89E6\u533A\u5757\u94FE\uFF0C\u4ECA\u5E741\u6708\u8FDB\u5165c\u793E\u548Cseedao\uFF0C\u7531\u6B64\u5F00\u59CB\u4E86\u5BF9web3\u9886\u57DF\u7684\u6280\u672F\u63A2\u7D22\uFF0C\u5E0C\u671B\u80FD\u591F\u4ECE\u73B0\u5728\u7684\u8822\u840C\u5C0F\u767D\u5B8C\u6210\u8715\u53D8\uFF0C\u6210\u4E3A\u4E00\u540D\u80FD\u72EC\u5F53\u4E00\u9762\u7684\u6280\u672F\u4EBA\u5458\u{1F407}",
    tokenId: 328,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZTdm1eFcY2J8Xw4eovEwE7AoHUBRfSJxRSjj9CyWaTzG/120_120"
  },
  {
    discordName: "Sunny#5218",
    address: "0x91afB7ee1A876f39027C7EFfd0aA65ea55f90006",
    contact: { twitter: "https://twitter.com/aichangge" },
    guilds: ["\u5EFA\u7B51\u5E08\u516C\u4F1A", "\u7FFB\u8BD1\u516C\u4F1A", "\u8FD0\u8425\u516C\u4F1A"],
    projects: ["\u6682\u65F6\u6CA1\u6709\u52A0\u5165\u4EE5\u4E0A\u9879\u76EE"],
    description: "\u5927\u5BB6\u597D\uFF01\u6211\u662FSunny\uFF01\u5750\u6807\u97E9\u56FD\uFF0C\u76EE\u524D\u4ECE\u4E8B\u4E2D\u6587\u6559\u5B66\u548C\u7FFB\u8BD1\u7B49\u5DE5\u4F5C\uFF0C2017\u5E74\u63A5\u89E6\u5230\u533A\u5757\u94FE\uFF0C2021\u5E74\u5E95\u52A0\u5165SeeDAO\uFF0C\u5728SeeDAO\u6211\u627E\u5230\u4E86N\u591A\u6709\u8DA3\u7684\u7075\u9B42\uFF0C\u4E5F\u5728\u4E0D\u65AD\u6C72\u53D6\u5F88\u591A\u5173\u4E8EWEB3.0\u548C\u533A\u5757\u94FE\u7684\u4E00\u4E9B\u6700\u524D\u6CBF\u517B\u5206\uFF0CSeeDAO\u5BF9\u4E8E\u6211\u6765\u8BF4\uFF0C\u662F\u9AD8\u539F\u4E0A\u7684\u6C27\u6C14\u4E00\u6837\u7684\u5B58\u5728\uFF0C\u5E0C\u671B\u81EA\u5DF1\u4F34\u968FSeeDAO\u4E00\u8D77\u6210\u957F\uFF01",
    tokenId: 313,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTB8VXBQpkZXkm4MkbigNC7Pk81GDFbAFEyoF8XWwwksz/120_120"
  },
  {
    discordName: "Cryptolove#8723",
    address: "0x2EE94007504586A1CA946DcCd6a9E2A1Bf477b7F",
    contact: { twitter: "https://twitter.com/Moonontop3" },
    guilds: ["SeeDAO", "NFT", "Club", "\u6295\u7814\u516C\u4F1A"],
    projects: ["web3\u5927\u5B66"],
    description: "\u5927\u5BB6\u597D\uFF0C\u6211\u662FWHY\uFF01\u6B66\u5927\u5728\u8BFB\u91D1\u878D\u672C\u79D1\u751F\uFF0C\u524DCryptoC\u5B9E\u4E60\u751F\uFF0C\u611F\u8C22\u767D\u{1F41F}\u548C\u6657ge\u59D0\u5E26\u9886\u5165\u5708\uFF0C2021\u4E00\u5E74\u91CC\u770B\u5230\u5E74\u521DCryptoC\u505A\u52A0\u5BC6\u98CE\u6F6E\u753B\u5ECA\u5230\u793E\u533A\u63A5\u529B\u7684\u9996\u6B21\u793E\u4EA4\u53D1\u884C\uFF08\u9996\u521BISO\uFF09\uFF1B\u4ECE\u5728\u5E74\u4E2DNFT\u76DB\u590F\u5B75\u5316\u6CB3\u91CC\u4EBA\u9879\u76EE\uFF0C\u5230\u5E74\u5E95\u81EA\u8EAB\u8715\u53D8SeeDAO\u7834\u5DE2\u800C\u51FA\u3002\u5982\u4ECASeeDAO\u84EC\u52C3\u751F\u957F\uFF0C\u6211\u6DF1\u611F\u52A0\u5BC6\u6F6E\u6D41\u53D8\u5316\u4E4B\u5FEB\uFF0C\u800C\u98CE\u8D77\u4E91\u6D8C\uFF0CC/See\u603B\u662F\u8D70\u5728\u6700\u524D\u6CBF\uFF0C\u672A\u6765\uFF0C\u5728SeeDAO\u53D1\u751F\u3002\u671F\u5F85\u548C\u5927\u5BB6\u4E00\u8D77All in SeeDAO\u3002",
    tokenId: 193,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSA3LnK9KREcKTP1Ar1NBT5G4twCEV2c1n2vdbqqo2RWL/120_120"
  },
  {
    discordName: "kayyu.eth#2321",
    address: "0x099c927E0DC0cB85aC209d82F9ae2362B899bdD5",
    contact: { twitter: "https://twitter.com/kayyueth" },
    guilds: ["\u4EA7\u54C1\u516C\u4F1A", "\u6295\u7814\u516C\u4F1A"],
    projects: ["\u516C\u5730\u5267\u573A", "\u6587\u6CBB\u5C0F\u7EC4"],
    description: "\u6211\u662FK\uFF0C\u201C\u516C\u5730\u5267\u573A\u201D \u9879\u76EE\u7684\u53D1\u8D77\u4EBA\u300221\u5E74all-in\u8FD9\u4E2A\u884C\u4E1A\uFF0C\u5728binance\u63A7\u80A1\u7684\u65D7\u4E0BNFT\u516C\u53F8\u505A\u53D1\u884C\u4EBA\u3002\u6B64\u524D\u8FC7\u7740\u6298\u53E0\u751F\u6D3B\uFF1A\u5728art x tech\u884C\u4E1A\u505A\u8FC7\u521B\u610F\u7B56\u5212\uFF0C\u5728\u534E\u5C14\u8857\u5F8B\u6240\u5F53\u8FC7\u5B9E\u4E60\u5C0F\u59B9\uFF0C\u5728UPenn\u505A\u8FC7\u667A\u5E93\u7814\u7A76\u5458\uFF0C\u4E5F\u5728\u7F8E\u56FD\u5927\u897F\u6D0B\u8D4C\u57CE\u505A\u8FC7\u4E00\u6BB5\u65F6\u95F4\u7684\u804C\u4E1A\u7B97\u724C\u5BA2\u2026\u2026\u4ECA\u5E74\u6625\u5929\uFF0C\u5728SeeDAO\u91CC\u770B\u89C1\u4E86DAOtopia\u548C\u4F17\u591A\u540C\u8DEF\u4EBA\uFF0C\u4E8E\u662F\u8F9E\u804C\u8DF3\u8FDB\u4E86\u8FD9\u4E2A\u5154\u5B50\u6D1E\u3002\u4E00\u751F\u77ED\u6682\uFF0C\u53EA\u60F3\u4E3A\u7231\u3001\u81EA\u7531\u548C\u4FE1\u4EF0\u800C\u5B58\u5728\u3002\u5728\u4E00\u4E2A\u5C11\u6570\u7267\u7F8A\u4EBA\u7EDF\u6CBB\u591A\u6570\u7F8A\u7FA4\u7684\u89C4\u8BAD\u4E16\u754C\u91CC\uFF0C\u5F53\u4E00\u53EA\u7A81\u88AD\u7684\u72FC\u5427\uFF01",
    tokenId: 423,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWWVzt2dYYW2G3y7GKy8NDmHnGZjvD3coK8cXHSv6dQbt/120_120"
  },
  {
    discordName: "Alan\u963F\u51B7",
    address: "0xc341683d1Ee57b13Ab90a1FC00F38dC6F7aFdd14",
    contact: { twitter: "https://twitter.com/BuBBro_eth" },
    guilds: ["\u6295\u7814\u516C\u4F1A", "\u8FD0\u8425\u516C\u4F1A"],
    projects: ["\u6682\u65F6\u540D\u5B57\u4FDD\u5BC6\u7684\u9879\u76EE"],
    description: "\u5927\u5BB6\u597D\u6211\u662Fseedao\u7EC3\u4E60\u65F6\u957F\u4E24\u5E74\u534A\u7684\u65B0\u624B\u6751\u6751\u957F\uFF01\u51FA\u9053\u5373\u5DC5\u5CF0 \u76EE\u524D\u5904\u4E8E\u672C\u5C31\u80FD\u529B\u4E0D\u5927\u7684\u81EA\u5DF1\u4E0E\u65E5\u76CA\u58EE\u5927\u7684seedao\u76F8\u5339\u914D\u7684\u5BB9\u9519\u8FC7\u7A0B\u4E2D\u3002\u7B49\u5F85\u9A71\u52A8\u529B\u8D85\u8DCC\u53CD\u5F39",
    tokenId: 377,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbodMdM5Ak7Fkv2iQnVuykm79qSpBdY91v4Xd9znVMMiX/120_120"
  },
  {
    discordName: "AbG#0001 aka TG",
    address: "0xd0cE3A24CB7AfdCaCD72197b4c28799F73611A4f",
    contact: { twitter: "https://twitter.com/abguan98" },
    guilds: ["\u4EA7\u54C1\u516C\u4F1A"],
    projects: ["deschool", "\u5B98\u7F51V2"],
    description: "\u6211\u662FTg\uFF0C\u524DNCAA D1\u8FD0\u52A8\u5458\uFF0C\u70ED\u7231\u5927\u81EA\u7136\u3001\u70ED\u7231\u8FD0\u52A8\uFF0C\u5728NGO\u505A\u6D77\u6D0B\u4FDD\u62A4\u7684\u5DE5\u4F5C\uFF0C\u81EA\u4ECE\u52A0\u5165SeeDAO\u540E\u5F00\u59CB\u601D\u8003\u5143\u5B87\u5B99\u53D1\u5C55\u5BF9\u4E8E\u7269\u7406\u4E16\u754C\u7684\u5F71\u54CD\uFF0CWeb3\u662F\u5426\u53EF\u4EE5\u904F\u5236\u4EBA\u7C7B\u5BF9\u4E8E\u5730\u7403\u8D44\u6E90\u7684\u900F\u652F\uFF0C\u672A\u6765\u6211\u5E0C\u671B\u5728SeeDAO\u4FDD\u62A4\u5730\u7403\uFF01",
    tokenId: 192,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmePgjm4wDNKwnGfeRydDvnZUKV1QFNVSiRdokQb7hh4YW/120_120"
  },
  {
    discordName: "kim Rabbit(\u{1F430},\u{1F430})#7495",
    address: "0x4FA96D31dD15CE27537130d4B56cAEe0Cb436051",
    contact: { twitter: "https://twitter.com/kim37238921" },
    guilds: ["\u6295\u7814\u516C\u4F1A"],
    description: "\u6211\u662Fkim\uFF0C\u5750\u6807web3\u3002SeeDao\u662F\u4E00\u4E2A\u6D3B\u529B\u6EE1\u6EE1\u7684DAO\uFF0C\u6B22\u8FCE\u66F4\u591A\u4EBA\u52A0\u5165\uFF0C\u4FDD\u6301\u70ED\u7231\u5171\u8D74\u5C71\u6D77",
    tokenId: 154,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZLvTqdZ6m9NwiuV1Afv38kJKNiBWNnLM8YVgY7s78xVA/120_120"
  },
  {
    discordName: "Will Jiang#4181",
    address: "0xD8015579d04d3205c8a35244c7cE64B0Bd6DE822",
    contact: { twitter: "https://twitter.com/WillJiang_eth" },
    guilds: ["\u4EA7\u54C1\u516C\u4F1A"],
    projects: ["deschool", "metashanghai", "\u6682\u65F6\u540D\u5B57\u4FDD\u5BC6\u7684\u9879\u76EE"],
    description: `Will\uFF1A\u5728\u4EA7\u54C1\u516C\u4F1A\u505A\u4EA7\u54C1\u7814\u7A76\u3001\u4EA7\u54C1\u7814\u53D1
\u7EBD\u7EA6\u96EA\u57CE\u5927\u5B66\u5DE5\u4E1A\u4EA4\u4E92\u8BBE\u8BA1\u672C\u79D1\uFF0C\u5C06\u5728\u7EBD\u7EA6\u89C6\u89C9\u827A\u672F\u4E2D\u5FC3\u8FDB\u4FEE\u793E\u4F1A\u521B\u65B0\u8BBE\u8BA1\u7855\u58EB\u5B66\u4F4D\u3002\u6765\u5230SeeDAO\u62DC\u5E08\u5B66\u827A\uFF0C\u7AEF\u8336\u5012\u6C34\u3002\u5BA4\u5185\u559C\u8BFB\u793E\u4F1A\u5386\u53F2\u4EBA\u6587\uFF0C\u5BA4\u5916\u957F\u671F\u5065\u8EAB\u6ED1\u96EA\uFF1B\u4ECD\u662F\u5B66\u751F\uFF0C\u4E00\u76F4\u4F1A\u662F\u5B66\u751F\u3002`,
    tokenId: 352,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmR1J95GzkrTE1pSvMiqcKXPS8YPESsDEUS9yQULk87TRR/120_120"
  },
  {
    discordName: "Amakusakiko#6418",
    address: "0xd36bC4A9DaCb174f866548397c1744D9a6858CBD",
    contact: { twitter: "https://twitter.com/AmakusaKiko" },
    guilds: ["\u5BA3\u4F20\u516C\u4F1A", "\u827A\u672F\u516C\u4F1A", "\u8BBE\u8BA1\u516C\u4F1A"],
    projects: ["\u6682\u65F6\u6CA1\u6709\u52A0\u5165\u4EE5\u4E0A\u9879\u76EE"],
    description: "\u6211\u662FKiko,\u771F\u8BDA\u7684\u521B\u4F5C\u8005\u3002",
    tokenId: 409,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmfUejVvFMWXi3nuRAQkfWLGGse9ZUHL7pz8VVX9QwQ21L/120_120"
  },
  {
    discordName: "\u8D85\u7EA7\u65E0\u654C\u8089\u5305\u5B50#26",
    address: "0xB82D82deabD1dF1D7dD29F815F751e8D1Df7Dc60",
    contact: { twitter: "https://twitter.com/2021moon1" },
    description: "CryptoC\u8001\u7C89\uFF0C\u4ECECryptoC\u7684\u4F20\u9012\u5B9E\u9A8C\u8FFD\u5BFB\u5230SeeDAO\u3002\u662F\u4E2A\u4E0D\u79F0\u804C\u7684Web3\u4ECE\u4E1A\u8005\uFF0C\u6F5C\u6C34\u6478\u9C7C\u4E3A\u4E3B\uFF0C\u89C6\u9891\u53F7\u533A\u5757\u94FE\u5927\u661F\u8BF4\u9009\u9898\u4E3B\u7406\u4EBA\u3002",
    tokenId: 26,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmc7ecu3AsNwHZPJWaWSkMCktKKBzPtmkDRZ1Ez8YhS5id/120_120"
  },
  {
    discordName: "AlexanderXing#3436",
    address: "0x42B81011a367d3C7f4e4B570Fadd51209C93F287",
    contact: { twitter: "https://twitter.com/alexgiantwhale" },
    guilds: ["\u534F\u8C03\u59D4\u5458", "\u5F00\u53D1\u8005\u516C\u4F1A"],
    projects: ["\u5B75\u5316\u5668", "\u6682\u65F6\u540D\u5B57\u4FDD\u5BC6\u7684\u9879\u76EE"],
    description: "\u533A\u5757\u94FE\u5F00\u53D1\u8005\uFF0C\u65B9\u65B9\u9762\u9762\u90FD\u61C2\u70B9\u76AE\u6BDB\uFF0C\u770B\u597DCrypto\uFF0C\u559C\u6B22web3\u7684\u6C1B\u56F4\u548C\u505A\u4E8B\u65B9\u5F0F\uFF0C\u60F3\u5728\u8FD9\u4E2A\u65B0\u9886\u57DF\u91CC\u505A\u70B9\u4E8B\u3002",
    tokenId: 314,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSSVQRdSNTAxCK9fJMdhSTwD7WtKudnmhaJPvERfC73Tc/120_120"
  },
  {
    discordName: "Victor.D.F#2920",
    address: "0x27aa5a880B512bEaF40D1B2E0F256b09f5711444",
    contact: { twitter: null, email: "robin_fc@qq.com" },
    guilds: ["SeeDAO", "NFT", "Club", "\u5F00\u53D1\u8005\u516C\u4F1A"],
    projects: [
      "SeeDAO",
      "POAP",
      "V1",
      "deschool",
      "metashanghai",
      "\u5B98\u7F51V1",
      "\u5B98\u7F51V2"
    ],
    description: "\u6C89\u8FF7\u4E8E\u5199\u4EE3\u7801\u7684\u7EAF\u6280\u672F\u4EBA\u5458\u4E00\u679A\uFF0CSeeDAO\u65E9\u671F\u53C2\u4E0E\u8005\uFF0C\u5F00\u53D1\u8005\u516C\u4F1A\u6838\u5FC3\u8D21\u732E\u8005\uFF0C\u53C2\u4E0E\u4E86V1\uFF0CPOAP\uFF0Cmetashanghai\u7B49\u591A\u4E2A\u9879\u76EE\u3002\u559C\u6B22\u793E\u533A\uFF0C\u559C\u6B22\u4EA4\u6D41\uFF0C\u559C\u6B22\u5C1D\u8BD5\u65B0\u7684\u4E1C\u897F\u3002SeeDAO\u7ED9\u4EBA\u4E00\u79CD\u524D\u8FDB\u7684\u529B\u91CF\u548C\u65C5\u9014\u7684\u966A\u4F34\uFF0C\u6211\u76F8\u4FE1\u4E2D\u56FD\u7279\u8272\u7684Web3\u672A\u6765\u4E00\u5B9A\u51FA\u73B0\u5728SeeDAO\uFF0C\u8BA9\u5148\u950B\u7684\u4E8B\u60C5\u5728\u6211\u4EEC\u624B\u4E0A\u53D1\u751F\u3002",
    tokenId: 295,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmexfvFsjXX8bDpkd3ZJWe7BdEW4QXe2va8dkNaY12HbCr/120_120"
  },
  {
    discordName: "Larry CAO#4478",
    address: "0xc34C261158FD908bb7a577f15d3a3d0Ff8263513",
    contact: { twitter: "https://twitter.com/chineselove88" },
    guilds: ["\u5F00\u53D1\u8005\u516C\u4F1A", "\u6295\u7814\u516C\u4F1A"],
    projects: ["\u6682\u65F6\u6CA1\u6709\u52A0\u5165\u4EE5\u4E0A\u9879\u76EE"],
    description: `\u6211\u662FLarry\uFF0C\u5E0C\u671B\u53EF\u4EE5\u548C\u5FD7\u540C\u9053\u5408\u7684\u670B\u53CB\u4E00\u8D77\uFF0C\u8BB2\u597D\u5C5E\u4E8E\u6211\u4EEC\u8FD9\u4E2A\u65F6\u4EE3\u7684\u6545\u4E8B\u3002
\u771F\u8BDA\uFF0C\u52C7\u6562\uFF0C\u81EA\u7136\u3002`,
    tokenId: 188,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmT3VETet8MTyego1STtMD1TjzGu1Lfz6ukMJnHodJ7NWD/120_120"
  },
  {
    discordName: "Meme.Mio#2581",
    address: "0x796B135e2bDe40dfAfdE4212e5878ba90C68228F",
    contact: { twitter: "https://twitter.com/MemeMio_07734" },
    guilds: ["SeeDAO", "NFT", "Club", "\u5BA3\u4F20\u516C\u4F1A", "\u7FFB\u8BD1\u516C\u4F1A"],
    projects: ["metashanghai"],
    description: "\u6211\u662FMemeMio\uFF0C\u5728SeeDAO\u505A\u8FC7\u4E00\u6BB5\u65F6\u95F4NFT\u5E02\u573A\u7684\u7814\u7A76\uFF0C\u5BF9\u4E2A\u4EBA\u52A0\u5BC6\u827A\u672F\u5BB6\u60C5\u6709\u72EC\u949F\uFF0C\u4E1A\u4F59\u65F6\u95F4\u5E0C\u671B\u80FD\u591A\u503E\u6CE8\u5230\u5171\u521B\u5171\u5EFA\u7684Web3\u9879\u76EE\u4E0A\u3002",
    tokenId: 405,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmS7QStMRb55KDuzzr1oGQRu7zmKp5MMxWMnUBwh3DJNYb/120_120"
  },
  {
    discordName: "Heilong",
    address: "0x3c7A96dc4456c16BE8D525AB57372A17E4314cd7",
    contact: { twitter: null, email: "heilong0513@outlook.com" },
    guilds: ["\u5BA3\u4F20\u516C\u4F1A"],
    projects: ["metashanghai"],
    description: "web3\u6587\u5316\uFF0CDAO\u5236\u5EA6\uFF0C\u63A2\u7D22\u8005\uFF0C\u6B63\u5728SEEDAO\u534F\u52A9\uFF0C\u534F\u8C03\u4E00\u7CFB\u5217\u5BA3\u4F20\u516C\u4F1A\u7684\u4EFB\u52A1\uFF0C\u591A\u591A\u8DDF\u5927\u5BB6\u5B66\u4E60\u5171\u540C\u8FDB\u6B65\u3002",
    tokenId: 418,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPj1c63TWFVRgTUE8xfwvj8KQrqUBcPbiA87tnBVW5tVS/120_120"
  },
  {
    discordName: "yelei#9529",
    address: "0x79eeD13cf2d1530E36D07b9A96C17AB795302a54",
    contact: { twitter: "https://twitter.com/alei21784656" },
    guilds: ["\u8FD0\u8425\u516C\u4F1A"],
    projects: ["metashanghai"],
    description: "\u6211\u662F\u70E8\u78CA\uFF0CWeb3\u548CDAO\u7684\u7231\u597D\u8005\u548C\u63A2\u7D22\u8005\uFF0C\u5728seedao\u534F\u52A9shanghaiDAO\u7684\u57CE\u968D\u5E99\u7CFB\u5217\u6D3B\u52A8\u3002\u5E0C\u671B\u5728seedao\u5411\u5404\u4F4D\u5927\u4F6C\u5B66\u4E60\uFF0C\u966A\u540Cseedao\u5171\u540C\u6210\u957F!",
    tokenId: 3,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmV8w9o6oSAucqVzfuRiDxk6Hw4GFy5gYZ8z3FxghD5Von/120_120"
  },
  {
    discordName: "MarkCrypto\u{1F534}\u2728#1130",
    address: "0x70F8D86aC14548cE33Da8a3Fcd19076c56e0Ea9D",
    contact: { twitter: "https://twitter.com/Mark_CryptoNerd" },
    guilds: ["SeeDAO", "NFT", "Club"],
    projects: ["\u6682\u65F6\u6CA1\u6709\u52A0\u5165\u4EE5\u4E0A\u9879\u76EE"],
    description: "\u6211\u662FMark\uFF0CWeb3.0\u4ECE\u4E1A\u8005\uFF0C\u6BD5\u4E1A\u4E8E\u54C8\u5C14\u6EE8\u5DE5\u4E1A\u5927\u5B66\u3002\u76EE\u524D\u662FOptimism\u7684\u793E\u533ALead Super Nerd\uFF0C \u540C\u65F6\u4E5F\u662F\u5305\u62ECHop protocol\uFF0CZapper\uFF0CRabbitHole\u53CA\u5176\u4ED6\u51E0\u4E2A\u9879\u76EE\u7684\u793E\u533AMod\uFF0C\u4E5F\u662F996DAO\u6210\u5458\u4E4B\u4E00\u3002\u5F88\u9AD8\u5174\u5982\u679C\u53EF\u4EE5\u5728SeeDAO\u4EA4\u670B\u53CB\uFF0C\u5E76\u4E14\u5B66\u4E60\u65B0\u77E5\u8BC6\u3002",
    tokenId: 65,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcv8WA84pqzT1T1ymDjrtSuLMx3LV7WjeEdaZdT3syjcN/120_120"
  },
  {
    discordName: "\u76D6\u4E95#6409",
    address: "0xb8Ee6da879eE6fC20B14fFD2152B54bd4E039Dd5",
    contact: { twitter: "https://twitter.com/Gaidrine" },
    guilds: ["\u534F\u8C03\u59D4\u5458", "\u5BA3\u4F20\u516C\u4F1A", "\u827A\u672F\u516C\u4F1A", "\u8BBE\u8BA1\u516C\u4F1A"],
    projects: ["SeeDAO", "POAP", "V1", "metashanghai"],
    description: "\u6211\u662F\u76D6\u4E95\uFF0C\u6BD5\u4E1A\u4E8E\u5E7F\u4E1C\u8D22\u7ECF\u5927\u5B66\uFF0C\u8FDE\u7EED\u521B\u4E1A\u8005\u3002\u516C\u4F17\u53F7\u201C\u6728\u68C9\u6D6A\u6F6E\u201D\u4E3B\u7F16\uFF0C\u4E5F\u662F\u56E0\u4E3A\u516C\u4F17\u53F7\u7684\u5DE5\u4F5C\u624D\u540CSee DAO\u7ED3\u7F18\uFF0CWeb 3\u662F\u524D\u6240\u672A\u6709\u7684\u65B0\u5927\u9646\uFF0C\u5728\u8FD9\u7247\u5D2D\u65B0\u7684\u4E16\u754C\u91CC\uFF0C\u5728\u8FD9\u521D\u751F\u7684\u5B87\u5B99\u91CC\uFF0C\u65E7\u6709\u4E16\u754C\u7684\u5BF9\u9519\u5DF2\u7ECF\u4E0D\u518D\u91CD\u8981\uFF0C\u91CD\u8981\u7684\u662F\u53BB\u505A\uFF0C\u505A\u81EA\u5DF1\u89C9\u5F97\u5BF9\u7684\u4E8B\u3002\u65E7\u4E16\u754C\u91CC\u5F88\u591A\u4EE5\u5F80\u4E60\u4EE5\u4E3A\u5E38\u7684\u4E8B\u60C5\u9700\u8981\u91CD\u65B0\u8003\u8651\uFF0C\u91CD\u65B0\u5B9E\u8DF5\u3002\u8C01\u8BF4\u7406\u60F3\u53EA\u80FD\u662F\u4E4C\u6258\u90A6\u5462\uFF1F\u603B\u5F97\u8BD5\u8BD5\u3002",
    tokenId: 384,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXtTskykz1yMpvjVnf71HXJzZtpPMX3CA5XaMQps1VqmJ/120_120"
  },
  {
    discordName: "liupa#5326",
    address: "0xe14D6A8BCD8f2f452699fD4c3B88C368b2BC2582",
    contact: { twitter: "https://twitter.com/patrickliu2012" },
    guilds: ["SeeDAO", "NFT", "Club", "\u5EFA\u7B51\u5E08\u516C\u4F1A", "\u8BBE\u8BA1\u516C\u4F1A"],
    projects: ["metashanghai", "web3\u5927\u5B66"],
    description: "\u6211\u662Fliupa\uFF0Cwe 3.0\u4ECE\u4E1A\u8005\uFF0C\u76EE\u524D\u5728\u67D0\u5408\u89C4\u4EA4\u6613\u6240\u62C5\u4EFB\u4E0A\u5E01/web3\u9879\u76EE\u4F01\u5212/\u5BF9\u63A5\u3002web3\u52A0\u6CB9\uFF0Cseedao\u52A0\u6CB9\u3002",
    tokenId: 316,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcv6wbuVg5uomZ1KfKH2uJ1iZANDRicqvvxjHUTrmaTyz/120_120"
  },
  {
    discordName: "Cheng\uFF5CDiCo#1312",
    address: "0xFad3e3A0C1B4A77f651F765B93669E7403fB0eB9",
    contact: { twitter: "https://twitter.com/AxGoka" },
    guilds: ["\u827A\u672F\u516C\u4F1A"],
    projects: ["\u6682\u65F6\u6CA1\u6709\u52A0\u5165\u4EE5\u4E0A\u9879\u76EE"],
    description: "\u6211\u662FCheng\uFF0C\u6570\u5B57\u5316\u5408\u7269\u8054\u5408\u521B\u59CB\u4EBA\uFF0C\u4ECECrypto C\u4E0E\u5927\u5BB6\u4E00\u8D77\u6210\u957F\u3002\u6700\u8FD15\u6708\u7684\u5C55\u89C8\u4E0E\u6295\u7814\u516C\u4F1A\u5171\u540C\u8BBE\u8BA1\u5C55\u5385\u7684\u5C55\u793A\u5F62\u5F0F\uFF0CSeeDAO\u7684\u6D3B\u529B\u548C\u80FD\u91CF\u4EE4\u4EBA\u5403\u60CA\uFF0C\u5185\u5BB9\u7CBE\u7EC6\u7684\u8BFE\u7A0B\u8868\u662F\u6211\u6700\u611F\u5174\u8DA3\u7684\u90E8\u5206\uFF0C\u5411\u5927\u5BB6\u5B66\u4E60\u3002",
    tokenId: 420,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNwRTAH69WQSbDxjfNzVTuUYNoS31H79i9vHMKUR11V8v/120_120"
  },
  {
    discordName: null,
    address: "0x8C913aEc7443FE2018639133398955e0E17FB0C1",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 139,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbroHCzR9WRpAfBPk7xTvnCp2JoJkLEcg3xPUgA9AUp6L/120_120"
  },
  {
    discordName: null,
    address: "0x8C913aEc7443FE2018639133398955e0E17FB0C1",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 17,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdNyXzHPtNQ23ign7K5ps5vjktQd1KjmEDrwmYJ2DTtVw/120_120"
  },
  {
    discordName: null,
    address: "0x8C913aEc7443FE2018639133398955e0E17FB0C1",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 18,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSUhBn8d3VjBnA5nLR6yDQaTE9QZzFFY8hv84QovdXYyU/120_120"
  },
  {
    discordName: null,
    address: "0x8C913aEc7443FE2018639133398955e0E17FB0C1",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 178,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYtcGxr3mayPYUQNg5CVhZWaP9gn1vao9nrKqRtGFhF1J/120_120"
  },
  {
    discordName: null,
    address: "0x8C913aEc7443FE2018639133398955e0E17FB0C1",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 119,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbtvdkerZXokmmS5MzmAvpaHs1s14BAjqH7oN95h39BSK/120_120"
  },
  {
    discordName: null,
    address: "0x01175Ef4738b825cd12F4d1ff2d2904d52144531",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 142,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmd2LPMm3ZTbatin9mMyCJbDdLXJVNx1icje4m9KKoPoPb/120_120"
  },
  {
    discordName: null,
    address: "0xcc5DB6F29944979a3f822E705412b471DcD9Da74",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 284,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmW6bwdC2Vq4gjpSZg73apZ8JTHSveUCkU8cKdjjkPj8ow/120_120"
  },
  {
    discordName: null,
    address: "0xcc5DB6F29944979a3f822E705412b471DcD9Da74",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 205,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmegu2GotvJ4hnFEy3bCJqjRECvJJz7rwEujJ5uiU5GCsf/120_120"
  },
  {
    discordName: null,
    address: "0x28eef0330457D7243049C50fe69cd9C5CCE32498",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 132,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcMuCELzjm7nVb6LRb2Xcs5JxZsQa2BoRbtp3WnpTwouj/120_120"
  },
  {
    discordName: null,
    address: "0x615B95fEFD5307964dE2E38d544Bb835c5b79717",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 231,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSjoJogo4omza8eRuiMNALvbsyHTCdp16bNaX1vvprH9c/120_120"
  },
  {
    discordName: null,
    address: "0x682993931130995b557F0B4d4C9f968A1f655A81",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 385,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUDJiGMMAVaprYU3FJnd3pnSoCKUA3LeWZqMkJeb8rWeq/120_120"
  },
  {
    discordName: null,
    address: "0xf7ac63cEA00286d65848e9cE4750B9f0FcFea2Eb",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 410,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaz9tB9ow8DYGwH7GbfFKeSvrpf3hBDRzwxRwFn5f1Z8W/120_120"
  },
  {
    discordName: null,
    address: "0x2EE94007504586A1CA946DcCd6a9E2A1Bf477b7F",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 149,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYmaBVo9tUawSYyQnxf4LAhyMgYkK8isLeiBjxJXAraBy/120_120"
  },
  {
    discordName: null,
    address: "0xd0cE3A24CB7AfdCaCD72197b4c28799F73611A4f",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 415,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPAwGn2HWyL1H1U4Pg8dB7BKAwyG34xHM5PdiRxURXKUm/120_120"
  },
  {
    discordName: null,
    address: "0xD8015579d04d3205c8a35244c7cE64B0Bd6DE822",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 247,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQjP834iWZ8RUAnSX93azR5k1avDbFjKyQRs7YJ6cfq2N/120_120"
  },
  {
    discordName: null,
    address: "0x27aa5a880B512bEaF40D1B2E0F256b09f5711444",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 287,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXPi5FsUhrfoUBqY8iPtPW33MBGdfWWv8Q9gqtR7dHn4t/120_120"
  },
  {
    discordName: null,
    address: "0x27aa5a880B512bEaF40D1B2E0F256b09f5711444",
    contact: { twitter: null },
    guilds: [],
    projects: [],
    description: null,
    tokenId: 207,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQaFYJ9yuujwis9qcUnxQpFvQy9qUAQ15TCPiQPhBbRF1/120_120"
  },
  {
    discordName: null,
    address: "0x28F8D42B47f53D1091d95150dbb839eF93BcE0ed",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 357,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcGcvugTeKcCYyzDsMQw6GLNSkWmPa9cnRxSzRVQcYPjt/120_120"
  },
  {
    discordName: null,
    address: "0x2E9259c0CA7c01a228B761C672CC3FAeed8D0189",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 408,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYCbeeRunhsPYqWQz5gok8JeairsqhiWHMrfwnKhHjfYF/120_120"
  },
  {
    discordName: null,
    address: "0xCc43FB66460a766119Ec36D1F76426F465756f49",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 387,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSycJgFLtQNrH9u5fFsM6z8PyXC7T81pg3fVKRhtUCvYz/120_120"
  },
  {
    discordName: null,
    address: "0x12D9B0B3A0FcD2FD510eA1E95992ed809Ab9F6a3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 361,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmR317bQkgJgAkbS94srN9hD6HBqQVZtHi1EK8Db1sDA96/120_120"
  },
  {
    discordName: null,
    address: "0xcfCBFe50F8957E500Dbc1a877E6596B99d28Ddf8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 98,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQme9L8YVvc7VZgGLmCcY1bZtq7cmPv8ZzqgPf6opVBKg2H/120_120"
  },
  {
    discordName: null,
    address: "0xB4b1bE767e80c8DCce03f0E7025A8E76e70F2935",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 129,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPj6qPvMiEwVGUrj8QP6puST9kyXFNVFcPrrwLS4QxJvB/120_120"
  },
  {
    discordName: null,
    address: "0x00493aA44BCfd6F0c2EcC7F8B154e4fB352d1c81",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 367,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZ3WysebPrNK7yi1eU2eQSwMsaVangq4PWkApTizP19RZ/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 126,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmfPnCQPPwKEw8pA4zVZaV3uTgPrMJ9A9fkPkQWUxqZuEs/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 151,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQ5iiJWu8hPxF2cDyX9CM1wibyPNAf9BGyvEdqiunDJZW/120_120"
  },
  {
    discordName: null,
    address: "0x6d0A22481A3E965b393B7a15140110a79BB3f945",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 196,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmP8LkU34DpJ5TuAzyZtPkkxxUp7kyBvxx1eL6XsgLkzsS/120_120"
  },
  {
    discordName: null,
    address: "0x890BD0d61E743f9d587596d89D834d4cB419fB7d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 318,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTUwRxGRPpFyveaW2v8vhhuarykXcsk9WLWnd4eFz2UZ1/120_120"
  },
  {
    discordName: null,
    address: "0x43CE56f22720A07991A36960ABc7D7649Ab4C90D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 407,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQrgL1ybMvB49YY9JbU8AehZ5ndatFHf9AXdbJS5RKGWy/120_120"
  },
  {
    discordName: null,
    address: "0xC1C2D0860A213C630c7E285eB5b8B1ebDfa205B1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 25,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYmxRbJPDwCb5hQ9KMiT4xro7VV8KnJ9KVKLzd7KFP9cX/120_120"
  },
  {
    discordName: null,
    address: "0xB496A7902D2117Fc7acbbd5251E14075a5B23f6c",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 48,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSZDm41ao1xXZZ54V5gLfUowQYR7eXH8nEBL9yNELqdhP/120_120"
  },
  {
    discordName: null,
    address: "0x710A29737Ac4B8fe3568153408391987cf50DC05",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 131,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmag12VcbJKr8NdS3B8AHm13X2vtWzGDfCR3kYmLkeHw6u/120_120"
  },
  {
    discordName: null,
    address: "0x1a86F100DFc0d572E3D3fe4742075c768C442319",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 266,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWRYX8ZfjBYG1vJ9wFGB4ehiTsnvP6jy3AcSoCACQhstD/120_120"
  },
  {
    discordName: null,
    address: "0x31cAe63b3Be0D56a7158D97ed551A307E8b4196A",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 326,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmew9okf5BVvovXWgEHE3rZngr4ScouvYCFdzaYfBr9k9t/120_120"
  },
  {
    discordName: null,
    address: "0x2cdBcA9766d33D06f203F759ec4F286395889ADf",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 389,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUVZh5ri3giuZMe1WxM7qWvEMwaBZddMmPzn5iXLkTfXP/120_120"
  },
  {
    discordName: null,
    address: "0x2cdBcA9766d33D06f203F759ec4F286395889ADf",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 388,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmfRJ9QY8kiMJmeTRUCT5ZRCj9TSVbji51PyU5K6LxGG5t/120_120"
  },
  {
    discordName: null,
    address: "0xC6c60fDC5B2379AABC853D45eBEB12aF7FC63841",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 386,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNVYVfVgao7MZzJ1uDStSH4WhcqkbW8BBgBxWmhqaSpYm/120_120"
  },
  {
    discordName: null,
    address: "0xC6c60fDC5B2379AABC853D45eBEB12aF7FC63841",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 152,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdLS1R4zwy2imLXWYbiJ9k7tXPCr4KW1J31aWtPdAgBGV/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 198,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYbETR9MvoTztv5yh3PvN4i5nPQhefeaKNNVfoTebhVJF/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 202,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdxd3B2UE7BfFcTMTXLMgFnbQNvHPXB8GxhPKbHy42Wqe/120_120"
  },
  {
    discordName: null,
    address: "0xC6c60fDC5B2379AABC853D45eBEB12aF7FC63841",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 130,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmY9eLFnb1c7XDt8jv9mzNFjLCdE7i5XxyuPsVyFAAeofN/120_120"
  },
  {
    discordName: null,
    address: "0xC6c60fDC5B2379AABC853D45eBEB12aF7FC63841",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 382,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcyXmfAkWSdrGkBDbFFpdN2dxhUvWrFh3LnxDbEwagKSz/120_120"
  },
  {
    discordName: null,
    address: "0xC1C2D0860A213C630c7E285eB5b8B1ebDfa205B1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 4,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUwyJxEAtGpbXywBcRD2nhZQneaWhK1mnXUVBJCsTcamK/120_120"
  },
  {
    discordName: null,
    address: "0x51EB75C8B9fCF25a1c22cbBC71D461175C19B28d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 24,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNqbXGF9LNNqoC4q99mSfhP3dASrvmHFGEFoUUUuRCX8J/120_120"
  },
  {
    discordName: null,
    address: "0xc1C772880d009D24C8098b8a2B4C91312966425D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 317,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcoSAF6uvhnoZLD2reMkdQWQjttoWzR8ZJaQXb4pStN8d/120_120"
  },
  {
    discordName: null,
    address: "0x9731c556A8F285fA33Ff3dec4aDd14784b944036",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 144,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRd7jbHdDtfQe9sNzJYbxGqjXAwjr7sD3oU2CBRwGdq6c/120_120"
  },
  {
    discordName: null,
    address: "0xD1570080bcB784b4F5E378dfd4cDfFDfd6C110f6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 204,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPuuqLcHWPUzGs4LAoGUR8YGLyq5K7nvFSg8gqJbSHG6k/120_120"
  },
  {
    discordName: null,
    address: "0xFe1bfBf7EA496790c3a27c1E9e5Cb75e663b0Ff6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 127,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQme9cbMzUrdvfKHWjSpmoDqS1t4Dox8agVbWCVtnCUYSXS/120_120"
  },
  {
    discordName: null,
    address: "0xC1C2D0860A213C630c7E285eB5b8B1ebDfa205B1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 354,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmS55fzM4qdHK8yWxhVPUHrkboeYXBEGYQkXYfhgESxbAf/120_120"
  },
  {
    discordName: null,
    address: "0x61891D3Dc602bb6B370009F28f0D281b960f055D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 406,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPC5snE5sgrfEEirrehxtS8KT7GxjAWzbSUdXGYgQMV4S/120_120"
  },
  {
    discordName: null,
    address: "0x5D1829C6E74263B56b5354e50996A65214CD7Eb5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 380,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRUEVAgbgP69Gvx8RXGUeptyueFP1UuPz8ZYHPDcRYsqZ/120_120"
  },
  {
    discordName: null,
    address: "0x5D1829C6E74263B56b5354e50996A65214CD7Eb5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 381,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeULDY5KcNqwtuH6VvUkj3qPfkjrVyRN6KqFWSKjvQK8w/120_120"
  },
  {
    discordName: null,
    address: "0x5D1829C6E74263B56b5354e50996A65214CD7Eb5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 199,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQPQ1EwSjQDvH4txVndnbGEeeGKwogzkN6cyfFovyyyUk/120_120"
  },
  {
    discordName: null,
    address: "0x232F1be803E9dFf69eC8119366a82B954B1FF8ec",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 403,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmS6Ph8tHPswKoogoKS4Uczo3XJqHR322njPWKHSF3zozy/120_120"
  },
  {
    discordName: null,
    address: "0x0238e0ec97128052A020D82f7afb76E12B748ea2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 402,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeQhwhDpfbybxsraH1uaJrEt2a4UcuRzhfbx5Lo6Pe5KJ/120_120"
  },
  {
    discordName: null,
    address: "0xfe042EdaEd0344b3888FFFB8b09dBFEf09331291",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 401,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmfTdxpYdJoaPtZtgMeke43sGc3WWyJVw4JMpUZFoyggQt/120_120"
  },
  {
    discordName: null,
    address: "0x4aF75A05FC552cA861E599aeB8696d668EB0e075",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 400,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZ4eG7enhy6akcwFvuLWjVoeG28VwNDwZZStC899jpHiH/120_120"
  },
  {
    discordName: null,
    address: "0x3e08a265D4a17B1faf35E2DfACa78c536Bd0dC2d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 399,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRZ5HMDrdw1iM9WDzierK2pXNbkru1imKemSJcuKCZMVy/120_120"
  },
  {
    discordName: null,
    address: "0x9FBb214b53B7ce372a0AeF6C927693D8B6FD9629",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 398,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmP3FtufAYtpbvaJzAVLVzogw3kwcs5TU4f8zJmBhayRNc/120_120"
  },
  {
    discordName: null,
    address: "0x4Ac9f09782A6590e57cfe210C0AdA659Eb4a17a7",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 397,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaHCekpbEdRnz4avkGmfzkT7w4K893ZmaKkLDgr9WV2Pf/120_120"
  },
  {
    discordName: null,
    address: "0x8DaB4d84B0ad946F143f1f057acB7Bd3a04d4723",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 396,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmV7Yy69Ghwtbqosp9b2vFBX9LB2DjXnjSbEBKg8CRjq68/120_120"
  },
  {
    discordName: null,
    address: "0xE5caD2A9dA3dde4A353fc3853c8Ed68D751C3F59",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 395,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZLJQwPXnZgpfZFTeRANJZv191SXsEuZKton7Kjx9KiNd/120_120"
  },
  {
    discordName: null,
    address: "0xb1b8138A03C9B2BfEa9cBE9d7442d007Fa91fEa9",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 394,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcxHEQPdz9C6kH1ZF6PNSHMbAM5hYDjucYTZz4SwKG9YR/120_120"
  },
  {
    discordName: null,
    address: "0xb278754D0FD7D39D69A52197A0e53B8D9F0923E9",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 393,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZp7vmkP4QJ218zcSWZ9TpPxec7ybrvDhf55Mx6G6hoF7/120_120"
  },
  {
    discordName: null,
    address: "0x35406A6Ec3FEc114bFc2b6d97DA70De0645F8BB4",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 392,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXRZa61XeFUSUaP5n1HFvmfFsmGhGWs5hKqacYfUduvQ3/120_120"
  },
  {
    discordName: null,
    address: "0x193DF5C85a4cEd0a9a059C893b3E73019C2349c0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 391,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcdphRTrayhCzirUJKMMPbHQyZybgJ1tcd2ne3kDrBkuU/120_120"
  },
  {
    discordName: null,
    address: "0x77716f42bD16908b040A7D1eA3e30780ab478cAb",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 390,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTmuyrHffXcsSqBydeS15kdVi4DTJ9c6j4N5Dc5S1aVRM/120_120"
  },
  {
    discordName: null,
    address: "0x58bAF05EfAA612c85b39f0eA2b0dA8daF8A2d457",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 383,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNMqMKk1CpyDUmPwH5hgNamrsjTapxbBkyPYN1t4Duv82/120_120"
  },
  {
    discordName: null,
    address: "0x4c297B30b8f391ad1516660Cd71c7cB861830816",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 378,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmefSYsHTWt4DzudQH1V6hihGWXojWgHjXUgaazE4jE7Pq/120_120"
  },
  {
    discordName: null,
    address: "0x1E49F474E49633E367dfA12A13aA85C7034A1081",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 375,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPSRfrsSHVbjUsUWxy9TRwdsHU8wL5s6bTGkN1pfT3sH8/120_120"
  },
  {
    discordName: null,
    address: "0xB72bba70a0dF6dB42be77353a856ea75C710d5Ac",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 269,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSa7CHu4DLtspxK7eWXiZxn3Qa4tEA7RK6ukv9zyNT92d/120_120"
  },
  {
    discordName: null,
    address: "0xB72bba70a0dF6dB42be77353a856ea75C710d5Ac",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 319,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPWbPZCBcwHryJ9VJ2hWjQKtdjqY8GexH8QtPFSarvFDn/120_120"
  },
  {
    discordName: null,
    address: "0x5600Ff522AF4782DEE24727a306E13C6d810dc3C",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 373,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPqnootqysADJ8kE7byGE2REeoDavK6ySnqSzJ2WiA23W/120_120"
  },
  {
    discordName: null,
    address: "0xfCFe4d310BD0757fBA92C30229B64587669b39db",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 372,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmV3hKckenwVTgfVCd1wsJiYkGQU4JAJPVFvci3XFvX2sU/120_120"
  },
  {
    discordName: null,
    address: "0xd92593deFF32b95D21C0b062ACB3984FE91Dfb99",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 371,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcFBkJZC9SsFdDCYXnBNudHgZfgCnVJqd5xAuCMNLRQCr/120_120"
  },
  {
    discordName: null,
    address: "0x68420aaC52799f973379385d2FCc381e09868462",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 370,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbcjKNxKMW7yE5p3rKcEdJ2vkPAUKcUC7y8H22XoTrvyp/120_120"
  },
  {
    discordName: null,
    address: "0x9E3bf55FCC8D2Cd8135daDA4c5a4346A86aE121C",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 369,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaCx3e6NCFtEiJuNqzk6FWoExs6KAiQ5gEPAkYNpTsQRC/120_120"
  },
  {
    discordName: null,
    address: "0xE03c57bda1932F8BC97c8B4B0a4fFC765F6BE5Cb",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 368,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdpTgbXdUzJ36fm8ryw7eNMhnyMwkNjk2kN77EHSAVi8s/120_120"
  },
  {
    discordName: null,
    address: "0x84765AeDCE115445060C0e099C465AE8D1Ec4FE4",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 366,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNLhYKtZVzBYkTap1wdrkaj8FPiDwnTWEuKBncMGtuTr1/120_120"
  },
  {
    discordName: null,
    address: "0x58C0312d8AEe353353f09631B535f0C1cEefEDCf",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 365,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbMj3R6jWoWs7X1NGdHKwbya1pUzxAGq8wfWAMUcD8dyt/120_120"
  },
  {
    discordName: null,
    address: "0x917F57502025D7C483614fEd05e89f15a61aF29F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 364,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPHP9npAdLeCwbCNukFSTCXRcYoeSFFTK7tZBed5Gc8xG/120_120"
  },
  {
    discordName: null,
    address: "0x455F81c1b66f37B613Df1Dc1Ba2a1819b5458Ca9",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 363,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmabMkrJurNLSW9ioq9tf4TkR2wHdkSmGn3GCJBDumdsna/120_120"
  },
  {
    discordName: null,
    address: "0xa805666F96C221B84572E94F19c148DBDC02B550",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 362,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVSzPsiWjy1rmk185mmb7Po5zksuuskW8D6G2hp2vT8WB/120_120"
  },
  {
    discordName: null,
    address: "0x50Bf16f901e821ed968F23ED533eDC1FF12f3dFA",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 271,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQwHZcoaCH7WpU2XPoPuaPfgCHhrm7yWgc4g85fDQR61H/120_120"
  },
  {
    discordName: null,
    address: "0xa805666F96C221B84572E94F19c148DBDC02B550",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 359,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPe1H24ZmACS4sofpzCiK6yWmahPcqLRmLFS65FTBrbES/120_120"
  },
  {
    discordName: null,
    address: "0x5761539E1D114A83F9fAc3Aa854929a3eb40bF0d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 358,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVc8uCsHgnsAoyPbriEnJrmSNDDg293JJDiSMwMA3DHEz/120_120"
  },
  {
    discordName: null,
    address: "0xa805666F96C221B84572E94F19c148DBDC02B550",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 356,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUEfjxwv6yreRgyszFLiptM6nqFNZb3bkEBJBQfrmhDXZ/120_120"
  },
  {
    discordName: null,
    address: "0xaB7b49bacd43BD4CfA41433D477F690Bb9E1fB26",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 355,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQV7zoxRJjFK3FPA9xYzcNZieoL3s81yyjUNcCmUnsbnP/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 106,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNprZFuQTv7wJPEdXsBR86TsmeTxFHiSZatxaUeMnqZYU/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 148,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRDRhX3zgsCEbAmMsy6ey452WF5xoERa5is8fZqUNdvPW/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 68,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaxzZstEUgTRp1ctTaQskQK3wHVzMDyyWNkMAM5kwXmMm/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 114,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmP7gsZWJqzJVCDEmuvcrFqEEPMUu1rbYmgTNpm9ANUbKw/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 170,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbc7dh3RXbiEZof6KKNeZu3A6HXUeMRSt9aZaGsSJdWNa/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 123,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNkSX1ir85ajow4RJ9cmeim2ihL37vJeTBbMTMQnTk2Mn/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 97,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZ2Yj35B2DtLKMAxM2zpzKHMY35SYQKuzWUHiUVXH8Kjj/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 125,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUL8uWAS8DirQCm3u4zEd2LDCBQUJHUHHbju5W6ScaVLJ/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 330,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcjrN3TmssWgWyye3kjucvm1EAgUGXgzASuGSMPzCZdaa/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 325,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQuXiTPZrEZW4jwbnrzxbQNgXsJUjZcHg7VQ6zf3wwEMk/120_120"
  },
  {
    discordName: null,
    address: "0x68989307489066eB57717D46F8059cA94CcB70b1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 353,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWit5KJheCm2teQ6RvGA6o5W13cjZ4r6Zd1UUSgWVSM8T/120_120"
  },
  {
    discordName: null,
    address: "0x7E697B424b0Cc808FEaa6Fd35C5300E83A5B44d3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 137,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZ1LR13jaqjt9DT7JUSm8hcUJsyb59K3i6PuyeRBPZRxx/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 150,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmW64Z9TyF5jWUM23qw5PTb3ttdJ1EfyQSfiokq7d4aJXn/120_120"
  },
  {
    discordName: null,
    address: "0xdf830e33ccF83B4b54503aB63aA556ECF91C3445",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 21,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZoz8cy5qdQfWER2tB3ECq5frFqYBYSpsumZBMJpJ9GfE/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 203,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRZyKxk2DA1SqB5aabU2E9C81sr7RqK1ZUZfDU7wrzEi2/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 254,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSFwDuhRPH3CYXnSiVqUueKqEFUryym87rMnxZ8iWBKXw/120_120"
  },
  {
    discordName: null,
    address: "0x7C261F5F23D075CC3879DCd65249ab2fF5289c5D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 351,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXbey4pkpxXXrg1arDgemTSyLRsb1B5GBqKRAAiSZ9nCt/120_120"
  },
  {
    discordName: null,
    address: "0xD65d82F39daa1eC34dC3D0e5183a0d18405B53b9",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 350,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYTwxU2UNLfwqev4Q6ok3QvNUYQzn6C914MYQy4KBLmLF/120_120"
  },
  {
    discordName: null,
    address: "0xFc9FFf6Ad12D1703547Db232a03C83022bEc9d8B",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 349,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSyZyDbuzwVdxZaJKumDFakCGzFmhebwEFb9Gf7zkpGub/120_120"
  },
  {
    discordName: null,
    address: "0x95F35c40eb463d71Ed5f41A7462E11773b0dcf2E",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 348,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmW6Es4zkiuAU4xUpqgVkg8pSQmhXTRrHh3fz5FpokCLte/120_120"
  },
  {
    discordName: null,
    address: "0x0BE5f1F59fA16F507c570d19793C84F9d03eb3F3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 347,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbw8fBNgw3VLgEY2P1ouePD9oL66PYvhA4dUApxBotYLs/120_120"
  },
  {
    discordName: null,
    address: "0x414f8ADF52555A26C481d54479eBa9699100753E",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 346,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZg7XqrxqAzeKaPLAYtoUK2zpk2RXZdqQ33JWUL4TZQVb/120_120"
  },
  {
    discordName: null,
    address: "0x0F2F3a705589b3Ba7a4aaB97B8e7A2788C45fb9D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 345,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdqRdaaa47rHf3JWoLHiwScoYvTWKXrTyQhJuTC965129/120_120"
  },
  {
    discordName: null,
    address: "0x5CF0E32392Cac8eAC25bCc10e1fB20e43e5805aa",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 344,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVpLU1ofbTDPc3PMWQWWZEhqiNBvy4HPTeeQrtiMWg1Dy/120_120"
  },
  {
    discordName: null,
    address: "0x9a5c23df3Ca8F6a2D04e20c4B6753BEFe3FF3f20",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 343,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSDhxnnZB5XZGKjZcsybu9yNTE3R77DsfkYUwfwxDitBe/120_120"
  },
  {
    discordName: null,
    address: "0x6F64C444f415e43292852DB0d2c3962699f890a4",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 342,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRLBxJrZfeTuPqjP2zb34gBksJxbhpSm9UZoPZdA9etp1/120_120"
  },
  {
    discordName: null,
    address: "0xaC084B5EFa8f4ca7f5319B8794a201510F6De9Dd",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 93,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmb7QP22kiLUcf9ZrwXmENWPgMpzvdbdS2g8V7EGrM2KTV/120_120"
  },
  {
    discordName: null,
    address: "0xE937185b4d8817De920135f15554A31264d6eeA0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 323,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeWd9K1imwzeMjzM3GVWxtm83nmvyMVEAkqLPg4DbfcwR/120_120"
  },
  {
    discordName: null,
    address: "0xE937185b4d8817De920135f15554A31264d6eeA0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 320,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbgdnHbX9aVJ2vR3hvpC4CDZnm73zwYtCsHzRAKbwR121/120_120"
  },
  {
    discordName: null,
    address: "0xE937185b4d8817De920135f15554A31264d6eeA0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 321,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdiqdp8ZmXDYLbVJnJ7Yt9hyb9cPEjM5WBnP6rmhnDtjz/120_120"
  },
  {
    discordName: null,
    address: "0xE937185b4d8817De920135f15554A31264d6eeA0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 322,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNqwCFZf43QMkqApzP4mAtHWaRz2AdshMFNVNvfYZBHSM/120_120"
  },
  {
    discordName: null,
    address: "0xE0093f7A481f1545d4A656726735E544Eb98eD93",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 171,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPuBNu6Ed1jP5G6X3187BhPj2MDwZUq7J9bcgYHBU2NUb/120_120"
  },
  {
    discordName: null,
    address: "0x4b3540d1581F6E57C94a485644D5d2FDd33615bC",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 339,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQme9kFAT6S61YJmNx8rVBvh2SCyuC5W3Dw8P2ChwvvHehi/120_120"
  },
  {
    discordName: null,
    address: "0x351687ADF5dC4E496601dbCEc8DF8e197C793782",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 338,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWLq4P2YfxzXPU8bmRkdM4q8dYuwD8USHDJxVaXo2s3on/120_120"
  },
  {
    discordName: null,
    address: "0xE80754f4Ff9EC669b94b1C5Cbc109c6A20E4eA08",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 337,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTiRjWvyQE5X3D5JBWKpmsBbty1kaEEzBGYmVWSZERsFS/120_120"
  },
  {
    discordName: null,
    address: "0x5EbBE081530234341BBA1A0F8f55873A65e6E8E2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 334,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdshDM9eRKLxwcAoXkUyrfB84zThQvFpjy2QrNRUPoaFg/120_120"
  },
  {
    discordName: null,
    address: "0x6Dd40A215a9c9Eb2bCE56dc0faE4837729F6A132",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 335,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQKfegk9K7fSdgNjGncc8Bp38zmMfhDSttyYNJXUpir3w/120_120"
  },
  {
    discordName: null,
    address: "0x002D2541b506e6446F2CDA98fD146FE40A265B5b",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 333,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmW5M6H2o72s6buw2gg8T95B849yzkWqo9gYBRQY1CdrRz/120_120"
  },
  {
    discordName: null,
    address: "0xabd67c16a97DeDcAf1ac17ADC4FfF4C9C97EAf44",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 332,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQFUn3goPYcCmz1jfcSihzR9CMwQc28mRqaePpz8Bs8wR/120_120"
  },
  {
    discordName: null,
    address: "0xCfE04E1b1EDFd9b04F47BFFBCbB5BB467739eeA3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 331,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmf9WAwEVHQ6LAAj9XAcfr8GQogPBomhnRHraGzaStG7q4/120_120"
  },
  {
    discordName: null,
    address: "0x4947065a2188C98ef86Ef72b892E94DD1a1323BE",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 329,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXMmAV9Frn9dxwhmNcGGbNvEbTGRwJvs3jtrMpED3PeeT/120_120"
  },
  {
    discordName: null,
    address: "0xef5f81745F01d4B753F31517132BaFC1e2d4E7E5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 242,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYvyXw8tZMLga79fn2kzBSiyU5uZaBvKhuNhJRJd2L4Gu/120_120"
  },
  {
    discordName: null,
    address: "0xef5f81745F01d4B753F31517132BaFC1e2d4E7E5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 264,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcJ19GaEaQCCYZRoKgh6tt3jBBT2mcAmUU53X7JuWcVye/120_120"
  },
  {
    discordName: null,
    address: "0xef5f81745F01d4B753F31517132BaFC1e2d4E7E5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 80,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaGVWDXk4eJMcG2JUf7m2vscsWsWXh3CkpQ173wmkSVJ1/120_120"
  },
  {
    discordName: null,
    address: "0x9BBB55e271b1B5fc4833bDD88B753F889539dE0F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 218,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTmyYk3khUTR5E2SHffptoc5HoTQdsHisybySxyN45sTz/120_120"
  },
  {
    discordName: null,
    address: "0x2F8aa20f6A042aF0E696A53ade86F55CC5c06eb2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 14,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdcxeWN1LVhbSBniwWxoc8hNcwZDtkGANSe4ozAB6i4in/120_120"
  },
  {
    discordName: null,
    address: "0xC1C2D0860A213C630c7E285eB5b8B1ebDfa205B1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 71,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcmTrnRWkbpUcZuDmabGpFexbdenREr61CweNBifRxd5L/120_120"
  },
  {
    discordName: null,
    address: "0x9EAAB4584192029dfC49f8982F4a1ecFA82eBf94",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 312,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXtHpBVYYRdCLgSyWpSCc87KJgrMx8Eepy93XVHhtGY1N/120_120"
  },
  {
    discordName: null,
    address: "0xC1C2D0860A213C630c7E285eB5b8B1ebDfa205B1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 267,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNNLj8vmaLmk68E9AuR96dpgntHBWmQW2DmEceG2LJQ5y/120_120"
  },
  {
    discordName: null,
    address: "0x2cA8b80c296F341b3F4e469494755DF557033Ee3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 311,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaDjWu6CPgrmjcfLTeQZuWsnqPruGwjtHcv9NXGVoy6Vf/120_120"
  },
  {
    discordName: null,
    address: "0x9D42a19E504f5F87f8B4eDF7F9ABf510a3026fab",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 310,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYr13UNT3HBTrdBh4GeQSqMjKy4QQnEmDHhcufWaF6jjg/120_120"
  },
  {
    discordName: null,
    address: "0x563A2B808897e9777a55f6c7E2a1F68638C00738",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 268,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbr4NZFsvuZnCeJPtR34pCgpJGBFKe8brw97tvjMMeyZn/120_120"
  },
  {
    discordName: null,
    address: "0x200241c7796B3b9dDe312D330e847807D087ec4E",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 246,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcYxkixUpRyATyNRicYmkeSDRXCCjyYkrD4Ud7iHJTWur/120_120"
  },
  {
    discordName: null,
    address: "0x20aaF4F551E5a48D87DE383afE0aEf08f9d3B040",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 163,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPSQFFp6aAs9yNvH24JvAm6y9bPxMPDsGFLkR9eJZ1k4N/120_120"
  },
  {
    discordName: null,
    address: "0x359B7628F98F3B73e9BdCb2D8476932342fC5aeA",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 308,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYVcHczFHxBxZGWtWwENavVanSpZrwej9J9A6VSfWgaxW/120_120"
  },
  {
    discordName: null,
    address: "0x2cA8b80c296F341b3F4e469494755DF557033Ee3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 307,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmfYxF3ZHUGFYVH6p59QZMRs85oMcdiJhVMxCxvBXoEA2X/120_120"
  },
  {
    discordName: null,
    address: "0x0A565f9aaEa5670C9a8e61850294D8f0b0147894",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 306,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZWDUaSJHk8VRbH8Di9fruUUKNGkYg9x7S5fn5VQAdU6R/120_120"
  },
  {
    discordName: null,
    address: "0x4b608E6C170c107d8b94E15fe81653baABeeFD2d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 305,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUWZeXhq1u9W7thkCbxdFwzEeoywKsfsYL5TekxjCdgJi/120_120"
  },
  {
    discordName: null,
    address: "0x2bED541aD50BBD4d1e5BCaC885a5fDEc42f6f8b5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 304,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXPEzidjtvWEkw4eNa1oxpMPocJosRWQYT9Jbtpr9ZXrw/120_120"
  },
  {
    discordName: null,
    address: "0xDb092fBc7b9cb25dff170EC5BEb4C9E6a6f85522",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 303,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcVktBceEDziseEYWUpQ5yHcugtSMh4AJbwmjyS6rTKUa/120_120"
  },
  {
    discordName: null,
    address: "0x7b5e5Ff4A15E8E14B6B9a2ac7Bc336d413d87094",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 302,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPGL3zvYmSTNYoVLtC8pv9in8k4h7pmd4uZRV7C6nD3Pg/120_120"
  },
  {
    discordName: null,
    address: "0x56DfD281649a4dc61a4138524a94C132CBc38C01",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 301,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUtBV8SdyuRrfb1ghoXpkx8PiwKABNsb41yvDg8nL6Kr7/120_120"
  },
  {
    discordName: null,
    address: "0x1486deBD34051a2E1aD43Ae6205Cbf96F1267F1c",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 300,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTRFMeGDDq17GT75sxi8ttAFLRvwmnPdtBBmpQGe4Lrhf/120_120"
  },
  {
    discordName: null,
    address: "0xc1a4B3730393d7888974d276ed30F57600441441",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 299,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeJguKHNAoEj14js2bYSVJG4yFL4rKU9BCQ1fTN6k7X6N/120_120"
  },
  {
    discordName: null,
    address: "0x20eC61e59e557F14289b3535e05A876683A91CCb",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 298,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbTEbszeGvwYcHGBikGp1Qnmag1emFgv62PRhtB4ETuds/120_120"
  },
  {
    discordName: null,
    address: "0x6d663A9E14aDF9dB88cf4C43B5B8B12e7CA1966F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 297,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUjaaYRHWUYccBsVjBVL5R3LiBr9DJ1y3aoBtUAEzUzpp/120_120"
  },
  {
    discordName: null,
    address: "0x186dCD535E11791D21f098e8365Aece82413641C",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 296,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSXDRnY24GRDWUZ7TJb5v95maueqVZSFguz56tzhST3qN/120_120"
  },
  {
    discordName: null,
    address: "0xAdc204DEeE89ae4097F4a5C7f3574FCa39fCFFbE",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 294,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcd6fooPjBdo3aA7h9DjM93iHchfFWxo6wvA3j5g3jbHF/120_120"
  },
  {
    discordName: null,
    address: "0xcc8a60D940431f6a1e012291DA19E8Fc7D183E9f",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 292,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcbUH1etH22hi4Stq1SrZsLaNsre7pmLyL3uknPs8f7KS/120_120"
  },
  {
    discordName: null,
    address: "0xA47e5C361B218c01B827115D1b0fe9263073acB6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 291,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQF34riCWBSkqHV8f2JKV5DhYmJuX6rMt5A2tbnDxoBRN/120_120"
  },
  {
    discordName: null,
    address: "0x8718Ce0AB2D3a3CeFdF2ca477aa7AD36b59d1F32",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 290,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdn2zfQycJKhrRLqCieDYpT2fDFBGv3rzJURvZ2a6STUi/120_120"
  },
  {
    discordName: null,
    address: "0xc077cdF746717F3E576E91809e72fD106afF5E52",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 289,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUUhqFYBHPWt9KciYhw5kU5hWpLwALZz4XwkoRNjapkwF/120_120"
  },
  {
    discordName: null,
    address: "0xe3a69E461c2502a6685d8E108366Ad00f3208225",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 288,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmR1aA2pNZNSPb2F7h3FbTNQWachVdV9BXLTQSoiMHJeap/120_120"
  },
  {
    discordName: null,
    address: "0x9f0574a5F28779A1A682cFE4bbD090ee058d07AA",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 31,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdUdJerFjZBzNWrET5D4jMnCfyuYgqFSBSEh5vM9EdBvH/120_120"
  },
  {
    discordName: null,
    address: "0x9f0574a5F28779A1A682cFE4bbD090ee058d07AA",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 286,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXe2mVJLS2woKffvT8L3himRH6auEtPfFCZU2pQ6shiDz/120_120"
  },
  {
    discordName: null,
    address: "0xBbb507E49B0f892341A7Ea6596cc5Bd878E3Bae5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 285,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbk1bjJdejfjfzgy65dXhUArgGYvhq1oLRd2DLu1Cy4Aq/120_120"
  },
  {
    discordName: null,
    address: "0xeea89C8843E8BEb56e411bb4CAc6DBc2d937eE1d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 153,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmT8wbZuJXUsak7jSbXo8jLbK2XRFtDdX7guJnEUJuxv2W/120_120"
  },
  {
    discordName: null,
    address: "0xa73621aEAe24869942f1279003bDe11d4Eac2Cab",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 282,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNVzVnzcsTD8NmKyidNRqoBEVyBjitgLGJDmmnHH6aq9s/120_120"
  },
  {
    discordName: null,
    address: "0x797434adB7A2eBC2B31A36A83Ed81BfdDF17e2C8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 281,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeQem4tmkAhLy31MfRLr5CQf85tur7r9D2PnKMhMtNpBV/120_120"
  },
  {
    discordName: null,
    address: "0x29Bcf46ef3cAd6E2844B7425a7BB722716d074b5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 280,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbAVFPCm14TVosk1JWbToHvjHPkvWqUvDRmC3q7uFLmfc/120_120"
  },
  {
    discordName: null,
    address: "0x33632E2F9Dd846f5Cd6038e4415cb875ED19D87F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 279,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmf1ACXRgASiJPoSjCGb6SzFEjo9ZLhyjc4bRyQ5hev35c/120_120"
  },
  {
    discordName: null,
    address: "0x5f83db8f64d698444Be98D0FD9f264a38027EdBb",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 278,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmR1Cd4DMCxyYtjTAPSqk1Ae3C5Dn1CHEnHvRvnAeNXKnh/120_120"
  },
  {
    discordName: null,
    address: "0xE6C486eb5f5cC2C64b53AB6c3942986D648C9b89",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 277,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmduhyJMX5eX46gYQuYNpEqQ7yBmSd9C4cAQpNSphxyz8Q/120_120"
  },
  {
    discordName: null,
    address: "0x7D42EE2206A016c8bd7e49792e34B57fB1d15076",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 276,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVoJByy3JpyF5CvkyDD9QH8WnCwPxdoDKugw8EJJ3kk5J/120_120"
  },
  {
    discordName: null,
    address: "0x4A40Eb870DcF533D4dC097c3d87aaFE9f64490A1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 275,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmU98aoFvmtPJDNu7YJJWyjUGwUKXXU4Q5rD72RsPagiGe/120_120"
  },
  {
    discordName: null,
    address: "0xAEc2e770042682BD086e27A87A1eD2D75A5c8d15",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 274,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdbL8gkZzhFiwHMWRKCpDNAV8qbytSiUs9QuDfSMSSHmT/120_120"
  },
  {
    discordName: null,
    address: "0x86148c840901644F3B4b9fDeDED2f496d4c15cc8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 273,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTJeCa746n6hz9pDV4cXkwoyzrrXRfXPctB2r7AG4VaKr/120_120"
  },
  {
    discordName: null,
    address: "0xC286D9cF4d95c6dED196c3A8d3AFded1702CD1ed",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 272,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNruJrvHZZpgwDbCbmF9SQRieR7bp9NwyawHqCL2chbDz/120_120"
  },
  {
    discordName: null,
    address: "0xd4ddb811A013614414BAc80EC11335E87CBe754a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 270,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcQhjrrKb7QS9gBNN5ezzhi7yuBWX6xtnFVGkKJMkBxVQ/120_120"
  },
  {
    discordName: null,
    address: "0xe5294878C13c8bA2AcEf53c1855996F984D36C36",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 265,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmduDLbeDyPA4FQTSmu19yyjnGVxk8HcdMRKSBgpAZ8wqW/120_120"
  },
  {
    discordName: null,
    address: "0xf79f5b79a14b0B06E8209F6466a48203AFc5Eccf",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 263,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWE1qiCdNHm6n3fKGsPhu4Zqs1CTRZ4VHsQWw7bhD9QSR/120_120"
  },
  {
    discordName: null,
    address: "0x01832353D7AE80449061b41839577006a0dcc5bf",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 262,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRP9F5ADmfcSa9VgsV6T5sU3SC3VKftdobf2zfVKxByNK/120_120"
  },
  {
    discordName: null,
    address: "0xAdF53690acAf223E1fAb9C697f184c31C7C68CA1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 261,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcwuDXCDb2HvzG7rqJBgUYJvq4Hp5BABcSJNP6c8CvT6p/120_120"
  },
  {
    discordName: null,
    address: "0x345285Da66f5A73401845E28783b5891007DE2E0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 260,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQpdocN7RQ7QTFoqkdGh89Z9Jj2Pkxv32jrrZuhvmAHhi/120_120"
  },
  {
    discordName: null,
    address: "0x2395f96662d887bF605E743Af5dD745c1cA109c8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 259,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWCmteuGeezAX8JNiFGfx5eDW76v1ewzSL7CXsEXE1M2V/120_120"
  },
  {
    discordName: null,
    address: "0xC1ca713AEe2d4C7Fd871e665688Bf46e573C384A",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 258,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTLcEBeQ4zFsspEFcobPzzdehJtCEufR5YqowaS7pbdkR/120_120"
  },
  {
    discordName: null,
    address: "0x83b695e3DB21167C2a72ABA466d50d41A7fc3819",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 257,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeKRr4o41LtpwMgNyRg9HzDX9Ppwit65HxARknoybUJBd/120_120"
  },
  {
    discordName: null,
    address: "0xC32c8487e58256fd8C7b80a4F6Eb0C5421c5b596",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 256,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXGDbRpw1DtvZN3tusxJ63JmWBnn1gXcBJZHR49xCwenY/120_120"
  },
  {
    discordName: null,
    address: "0x3DeF0038D0493b2Ba32B45193e99673c901cc3BF",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 255,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUBvxQMyV6Mib6gjRn1VnCEaVzV8fRB2MwyjsKABg67ma/120_120"
  },
  {
    discordName: null,
    address: "0x8995c894412D3e50503A74263B770E53F7B0F87c",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 253,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQAEVaMC6N8FNtQ6z6BPBY3WQd5NmSckWBXigkwv3oAob/120_120"
  },
  {
    discordName: null,
    address: "0x1044CB2a3B090Ac4C0843E3e49df986d3d6F8B25",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 252,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUHPeufsd33FvDxePXDiuy2Eo9nogf8anG27Sv7sVtE8s/120_120"
  },
  {
    discordName: null,
    address: "0x48D753ca282BB39CBdc99942C9b2F2d1C28A5B80",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 251,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTizrYQVjpJUoqqHUSJJAvpk72uwJmEVQ6cV3XLYaQytb/120_120"
  },
  {
    discordName: null,
    address: "0x940fcb5BbCaeAa1b434EE85A1BA908Ff1e3D672D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 250,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXTPQZ7gDFMXSeevvYdXEkcnP8T36rEvnM6WVpaJj4JkT/120_120"
  },
  {
    discordName: null,
    address: "0x6218aEAB9D2DA1A27BecFD1FD85cC29958e390b2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 249,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSV5Vhg9vMTCncqa8At9NtUmKtdkCaASUKPkbfNqqMTb5/120_120"
  },
  {
    discordName: null,
    address: "0x8A61482C99DAB4DB6A865B60Aa669F6d4A030C0d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 248,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPCYj3M4HJ5mZTPgDqA2Cc6wNNuq1vMHDJfmdz9wXYuQq/120_120"
  },
  {
    discordName: null,
    address: "0x7Ad483178a71a8397eB59d3a0C01A3Af91b2571b",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 245,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVwTBoRF53G5gkC6N4Tu4ejLQAq7tMd3BfEy8idA7tk29/120_120"
  },
  {
    discordName: null,
    address: "0xE13b286CCf0FBC3b40B1fa6770F2cAECbEbe2738",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 244,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbT3oWP5676Nt1n5mZ6tQcCRratsq6qdMk7PB19nobPCA/120_120"
  },
  {
    discordName: null,
    address: "0x542A9db710a48b0A952483F256c556E24B000a13",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 243,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUty594PMeQxsGNWa1A93ncaSxFJKpMr6XaDME9PuLMBp/120_120"
  },
  {
    discordName: null,
    address: "0x9a88e2361DB0DB4b2D81fb3b8da3F9E383Fb8a5C",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 241,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdiDyjT4e1ekPW4tQ1bAcWgtk1rpmEZcFSLYtNZ5g8dz7/120_120"
  },
  {
    discordName: null,
    address: "0x87e39BF2A53091DC767C21D5efE1670b78023C78",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 240,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmd4yGfVRhxES3whtrjMbD9jkURtSv5qh51Tc16nXmPNU9/120_120"
  },
  {
    discordName: null,
    address: "0x3B17e7FE4E53B7f896F0482DCf1F37baD4f1B977",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 239,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPpWgzLpUGc4nnJWFc8wXxB1vNQVJDTLjtFr1aof4fQ1T/120_120"
  },
  {
    discordName: null,
    address: "0xd4AbF33385355ec010Eb7e435e7f7D5B980120cd",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 238,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZgEVQ24oi2xnNGrbZdMxzznMEcd7m39NriH5fg47f1Uc/120_120"
  },
  {
    discordName: null,
    address: "0xCAd6450F3840fDB144E412e058c827c560604dAC",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 237,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVfRV7Jfvg85Eggn4amLegB6miRKwGv8dvPJK1q1oz5Zp/120_120"
  },
  {
    discordName: null,
    address: "0x8cDCfffb937F73089B5147a38aC40d8CDd738DA6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 236,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXPzz1c9t2P5S4w5pA4SZXWDJUHqd1D6ZB4dSDZsdvD6d/120_120"
  },
  {
    discordName: null,
    address: "0x701d7ec468a8fF9Bd4B76Be049e40cAB79fb3310",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 235,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXTPdfSvSx5AXEJzW3fmKzpeRcejnAf83qHL7YRMZGG9g/120_120"
  },
  {
    discordName: null,
    address: "0xc3fA32D3c7ae8E899522fC31d2c9852C5C4F8fc4",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 234,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcSMvzm8K4YmHoUifnozvRj4dDERpv3RsRhjYFc1dCa7w/120_120"
  },
  {
    discordName: null,
    address: "0xb9b9a6F10aBceEB9E9ffc6B22A00E6Ed6FDda8E1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 233,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmY2K3RE1p1DD57CsgCLJUkAiaSAScCceAfKrrxtniFXJL/120_120"
  },
  {
    discordName: null,
    address: "0x7AE41835444183A23bAA10EbfdF2997D10130f5d",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 232,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZKppfM5TD1F2JYFTh6VipNFb1iV5Ys3gRmvJiQx72ixr/120_120"
  },
  {
    discordName: null,
    address: "0x2d48c6432CC4000A55de200341a8E65a1cAfa400",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 230,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRvTGypGwKP1KpxQW69zGMQv7NZQLgCUn6bvH6gA9sb2k/120_120"
  },
  {
    discordName: null,
    address: "0x5eDF0b0c1b6D78bcef494243801dC594944A392B",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 229,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZsXFzGTaeNTZAo6ytGzSLDy6556PLXNejByNBtdQNmn9/120_120"
  },
  {
    discordName: null,
    address: "0x8cD3Bb4FbfDfEE013AF5AC9C46F0C22746b095af",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 228,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmP3nnVKdviMQf91ipmqCYYrRZEyNDmnHfnGBsjHoQ1TVc/120_120"
  },
  {
    discordName: null,
    address: "0x4bB88adc1e40eC1BB42721b4eab574b1229b4a76",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 227,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmX4SHkKAkbXKda6xkcbL4N86kEz3wSAirPkWCgCEkpq6m/120_120"
  },
  {
    discordName: null,
    address: "0x2c665cb2A3935cd10Bb5691AE3227c2678373dc6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 226,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmT6Hie5ovzwnKwfQ5stAcNBSyWE5RDb2PiWdUWzcEifok/120_120"
  },
  {
    discordName: null,
    address: "0xE0909601E076d9e3D4901fa6186D99e0b935d344",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 225,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYoufNwFHzGFFHGYfK5v28GXsXudJ4fjexusXKrhgSGg3/120_120"
  },
  {
    discordName: null,
    address: "0x1cFf3B7B4Ed8B58EE756AF8AA54CcFdFA3928BA3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 224,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmV4xKXJjAYp2Qdi5rTKiWvU6qRmWyfy8KoBBNDGr6nBmu/120_120"
  },
  {
    discordName: null,
    address: "0x78f625A65Fc316D32d98d249b698fb509A6d98f2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 223,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXy1HnPMvB5tX7ztSaAEjESK9WmEMbJA5m5tyKt6yvGxk/120_120"
  },
  {
    discordName: null,
    address: "0xC39a90D17A9f67F3A7972823BD371bA99b4ff9bA",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 222,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSQqs4b7BomYHpwysRMeGdYW5V8CpJqSTPPUfCo2KWCX4/120_120"
  },
  {
    discordName: null,
    address: "0x4fe540611DF665ba4516A9aC3C2e93Fb8b46da67",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 221,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaWGsnbiMRjbJLgfGZ2rqqrSPsvdAWBt7g6jS6ibkbpw1/120_120"
  },
  {
    discordName: null,
    address: "0x25F09651c9c720b32aCC3926596F079d5458b5D2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 220,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdPUDj22DKSPcBUUQfqLYMhUuhR98NuUuaDvtkaY77gD8/120_120"
  },
  {
    discordName: null,
    address: "0x373f80B157bEFf8F22Da76dA30086bB617331698",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 219,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPgko6sJQ7JLGnmX4iymptf3ZWTUpAZ7SjudX3UoUFKZF/120_120"
  },
  {
    discordName: null,
    address: "0x9BBB55e271b1B5fc4833bDD88B753F889539dE0F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 217,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXAnKre1A7fVmqRit4bggdBwkJAcUi8RzbtXwtCjMubza/120_120"
  },
  {
    discordName: null,
    address: "0xB76e804Dd7540df25127CE13081AC7A427c0Cdb3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 216,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSVBLc5PNZYEgMTjmBYTKe6cBTaJ2MkqxaNMNXWJjGvb7/120_120"
  },
  {
    discordName: null,
    address: "0x30f84F0aA9caD152D1852A8767B3e7AD63E056e1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 215,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmY41cYVhmSH1TKWxSqJjgmBECk7BpeCSBXiiChdW7pDen/120_120"
  },
  {
    discordName: null,
    address: "0x0fA8F5A53f53732FE86fc42A7489dC470247Bf86",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 214,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZDFTAVAyJGbQNqkHfphkbPM3scmeVFAiLqZbAxDsfRpG/120_120"
  },
  {
    discordName: null,
    address: "0xa369808eF2c2ad96Ff76BcaBC56CA44DB6e94998",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 213,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQzwMZR5RsKC4PxCgcbTkHY7KdrHMrAXA2McoPkjFiJv3/120_120"
  },
  {
    discordName: null,
    address: "0xE7841ad5Db7F6b9fa089Ac3100A9623C6aA3730F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 212,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSzhyW3YYtFoTje86dNEwzVGcnUbupHkKFpE7PqAtNsgQ/120_120"
  },
  {
    discordName: null,
    address: "0x41e07b9AE8B939D041657A3d5D55A9399140D0c2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 211,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRTqFThU1eedMEFCcEGL99HBw3CdxAhixTgACTZqL5izn/120_120"
  },
  {
    discordName: null,
    address: "0x0aA5973F2614DccFBe53c8273dA22502D7E4FbD5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 210,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWAnzJVJbARiuyu4WjQT4NDy9dsFSoAcsFtHNBGGeEEWW/120_120"
  },
  {
    discordName: null,
    address: "0xAdF71973eD86704d06edCE48C3CeAB738d3604f8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 209,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTCSMmiMTJ4SUbVBzReHvaHjeWen5YMQENYfJdAxejfpB/120_120"
  },
  {
    discordName: null,
    address: "0x5789A38a3FAcfaa86ED950e88D79a9A2F6140052",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 208,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUeHbkR4VGxjxB4EMrhVJYuyDAbSsR5K5uEp2S2WVL3qn/120_120"
  },
  {
    discordName: null,
    address: "0xA90cFD16e45cdED054404C12902918a4771aD372",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 89,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUQvN92KuyzWYoSrxqvrL4tn8mFYrGXe1ZagzXjcQixmE/120_120"
  },
  {
    discordName: null,
    address: "0xDc788AF054e68BB012792a77b4f6b74c29335071",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 206,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPfR2AsF5rpqdvR3fm4k1fMTHyqt5z3DuWK8N58r7HNog/120_120"
  },
  {
    discordName: null,
    address: "0xf99BA8F81d0346Bd97aC1Fb7927Cbe67Bf55A79D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 201,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTLhXU7iW34Y5G5iz76Lye8fyn4B9rRqHz3s4NNYgntEJ/120_120"
  },
  {
    discordName: null,
    address: "0x98173D41603A1Ca46326f2F4e06bfef7e16DF544",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 200,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVpccFNGce9QAt8p2RTgi76Y9djZJVzo8RcnoqeWrVr8P/120_120"
  },
  {
    discordName: null,
    address: "0xE8cd4cB68dd4c79d118368F36D8564F3134c180D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 197,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUyka6z35YPjXb47xbeNpEVehQBg5qHJ9UcQqmVGcGZmQ/120_120"
  },
  {
    discordName: null,
    address: "0xCea5E66bec5193e5eC0b049a3Fe5d7Dd896fD480",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 195,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYFseownZ9asC42YGxUhWxWaLowrZ64cwJmBri73sYqaW/120_120"
  },
  {
    discordName: null,
    address: "0xCea5E66bec5193e5eC0b049a3Fe5d7Dd896fD480",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 194,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUoVBYiMN35Lay2g1XAiF2fzjCrF1Va8GqvshVz19cpbk/120_120"
  },
  {
    discordName: null,
    address: "0xE3a5B8bC2408Aa6C5bEa809664Cd946aE5492636",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 191,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUDQmXJfJKaMABWxmgPQjnGi6q1q9AMdZtwBZCjjKrwpG/120_120"
  },
  {
    discordName: null,
    address: "0x8c0d5Cf17365Df315b8d334eB5552Be9F7Ff3978",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 190,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSQ4L9zDfzAhY7ecHsaVk4dZ9DdKbvCPHfpEcinyp9yWX/120_120"
  },
  {
    discordName: null,
    address: "0xa50Bb794012b9617CdCAC8653f8041842F3c4315",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 189,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdeA3e6GAcMGkYzFH4kjwzUXZdS4b2JddXGwBMmt4seUD/120_120"
  },
  {
    discordName: null,
    address: "0x94f19aFAC68d89eB7577087e6CF5819aB18FFD45",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 187,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUMF8a7U7ekzNqwxb5Ze9Mv7i3uepuZJNYZT8JgcLKgbY/120_120"
  },
  {
    discordName: null,
    address: "0xe636c37c8161d1097090534E294CABae78dcdcA3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 186,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdpURcbYHU1rvfnYkzaGk6WsLJzr6nNcC6j1WWwLRCuU8/120_120"
  },
  {
    discordName: null,
    address: "0x3858d281bEEf9721817f998A3A805A827df43c28",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 185,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYZukXjGfkSMM6YmxMimJJajVQtTEe2U8Wfna4Vdi2J4P/120_120"
  },
  {
    discordName: null,
    address: "0xd7b39eEB1b38F1b56fd0c635019f397524b57fda",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 184,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcWkSUBXCkNV9iWT79QXX6vid7oCxDiPTE8tKA2RsYhd1/120_120"
  },
  {
    discordName: null,
    address: "0xd9185Acfd80349F532E49aA29E05332c8f94E971",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 183,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbPvJZMkCygKLM9vRmbeF392xFQGNtkHJetALNRcqA1XN/120_120"
  },
  {
    discordName: null,
    address: "0x1aDB86940E7c50FC6b82765CefeE500FeAC5937E",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 182,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVtjwC1ZymZ8DxAHMRgEA19e3Zd3Lkg5K94WAoQkxNQu6/120_120"
  },
  {
    discordName: null,
    address: "0x60859eD309E5553B39bd66edF1A3C26473da3b6b",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 181,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcC7G65x94y5oijyTZ64jd9pB4fvKo2mprf4Vb3vZCisZ/120_120"
  },
  {
    discordName: null,
    address: "0xb18E3c41FAF4139b89B4EBf1F5eF645A3Ad0eC7f",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 180,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaJ3Q6gNfU3fWBeCpWnoPLVzsUJK8wwxPaK7mqUQEy5vM/120_120"
  },
  {
    discordName: null,
    address: "0x19FC61B27C96e4c84375128b02ca5dCdAA11a075",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 179,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRaLJXJzPLViEfEaRwZ47ng2ShYkr19VPVFUfCzfu63oF/120_120"
  },
  {
    discordName: null,
    address: "0x821098baFDDe969A4393aB37F2BcfF933C1691fc",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 177,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSo7NVny6JiQdXyQDPwJ6Ff2w5sX3kwgTAYP33bw2Zj4N/120_120"
  },
  {
    discordName: null,
    address: "0x05e859d2f8eDcB0270de051Be8A32917d51E560b",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 176,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXwKn18FpnTP6eg92NFsvfQuEVSNtoyjLFXpxtadHAYeD/120_120"
  },
  {
    discordName: null,
    address: "0x3F07912e55E96fb0Fc0cACb38E10be1D58045228",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 175,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQRoqaRNdFgCtt5q135mV7Gxpcm2ztUmcruJaLYiqrrNX/120_120"
  },
  {
    discordName: null,
    address: "0x4839460F05b2a8fC1b615e0523EbC46eFba75420",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 174,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmV7K877iFCw9yJwm4qmWew5GskW4Kuc1ZhK5PfUeV4XH5/120_120"
  },
  {
    discordName: null,
    address: "0xCa04B0938B3a8Bc91d269d03e3b77C26d52B82A5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 173,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmf518GWDCvaG2cScRWksSfQTrKDo3YadLocpNnzsLJ1CL/120_120"
  },
  {
    discordName: null,
    address: "0x753B52B1a0785B23248FB8D595D3c9aF8564D76a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 172,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRNGhHE5HVK5AkUXRd2UVCQbSroYJve2NLh1gg7r4VkAV/120_120"
  },
  {
    discordName: null,
    address: "0xE7339D4421c2d0290d38eaA06657e9e2DD8d3bD8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 169,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQhZ6tZynf7vPuYFauLoUSVbcCkR2i2DKY8qECShQTTpu/120_120"
  },
  {
    discordName: null,
    address: "0xC963EA0f9eD844922FFC2cC3417F887c4121D316",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 167,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZPEQiLw6SwGicUNezeKUx5FPdL8BsNL3AVhGV3Qz2wC2/120_120"
  },
  {
    discordName: null,
    address: "0x2245bE89Fc8faB94ed982e859Aa3212A4e4eB7e5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 166,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmejpzsvAUpQJBTZViGVvpgsPL2P5HkN7w26LZyvqbFJDA/120_120"
  },
  {
    discordName: null,
    address: "0x16Bc93428d68b05158c5F80feE4234b6f0a1A336",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 164,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmebcXHEX3a8nwQRB7qB2b7VL5iXMo5B58xHi8f7oEFLb9/120_120"
  },
  {
    discordName: null,
    address: "0xf301894972ea6B9F2D541671C3fe6e32a3dA6e72",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 162,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmR2mnBZU1XhXHrd4q51qGd6QgknTDM61bykkWs2ZV6Tyg/120_120"
  },
  {
    discordName: null,
    address: "0xFBF54Ca4920a056f5741064d935f89210Dea7cbd",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 161,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcdNzeYHt65KKcCBgiKmFWgYpNFKGdusCiy8m4vy6SYkz/120_120"
  },
  {
    discordName: null,
    address: "0x334c5B9f732174Caa4B7A67d2178b7E74a527003",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 160,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYhYTSGT31qTMQXD6MW3JDMy5dYR3hW1T6TmcTMX2Bdxt/120_120"
  },
  {
    discordName: null,
    address: "0x5eb71CaeaDf22107A578bC5261ec9A1e16FAD5f8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 159,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmR26j4jV5J3CM3jU8tLPdFHusJMxRKhXzEh6BXWwfLxSg/120_120"
  },
  {
    discordName: null,
    address: "0x263cD87a0395e6310Dc2c7Ab8B2A7c1A3ca46f54",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 158,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTozFuchi5sJSaA6zG5BB5XeMk7HkW6mKtMtGCGgoLX4J/120_120"
  },
  {
    discordName: null,
    address: "0xDDf920F9Ea110e1A8030c4015d17291C7bEFc079",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 157,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNgkcKTk78iZ3gy85PKshpcC1C2cyhGiiPfYEt63aNqDW/120_120"
  },
  {
    discordName: null,
    address: "0x2C3b3338543EC85A98f4cFae089d1821453BB62f",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 156,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPorJ7RjtdrKgqW4wdXFvDLeuxmnw3YGCxvDTzbU8yc1M/120_120"
  },
  {
    discordName: null,
    address: "0x6112d6F5B955298eD8704Faf988B87A33428CCa6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 155,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSm9gtfGaSLgLwdhHjDxUZh6SVtdPNLTVDqpheX4Wuqvk/120_120"
  },
  {
    discordName: null,
    address: "0xfD47629bA1B9Af668C90664c6CF651ECb80037B1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 147,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRCrq11JuU5WHkaq5WCMfj7tHwad1yMfXSbEMwRDNYwoo/120_120"
  },
  {
    discordName: null,
    address: "0x7F688E99EE7dbAE3d07B1b5F46E8fF3430FE5835",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 146,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZioBKN8jFoq6trUpataHs3X9aZThw9LJHTp8ZgsQn5ES/120_120"
  },
  {
    discordName: null,
    address: "0xba363352CC3A8A16FD3b4E7CDC9e9B4998091885",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 145,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPNbNFVPFp9KiDT5Uyd6UzbsQxhsko7cfFZzmvEntJpGg/120_120"
  },
  {
    discordName: null,
    address: "0x97c953B880B0fF3299a848624C22ae6e19C031A5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 143,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSLJsctUYooovEeESEha666fDmUPUqnhiUV3X1ZSJeeNy/120_120"
  },
  {
    discordName: null,
    address: "0xD5415587af3dABecf060150d113D7ACc0Ce988CB",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 141,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQTR1WnGnmHxy4zMzQaj7KApCzY2Nuy866kQQoLW9hFnF/120_120"
  },
  {
    discordName: null,
    address: "0x8e74Ff9De7c4622095054304d0108E3177eCc19F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 140,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmce6AAprrX1KV1q6kaaSqDp9DTb8pq6XF5EN5QLbLzHGW/120_120"
  },
  {
    discordName: null,
    address: "0xC32428B4B31873F41E6a6b81028080469E2d4492",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 138,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPszNDfQp4VSfdUesrUmb6gEg8sb1rgFSp8sYKdfD47k4/120_120"
  },
  {
    discordName: null,
    address: "0xe2D8923A1aBd3738BD0D35da6E832cEe4A0c17Fb",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 136,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSbZUxZtCnpgTtzbSZQzbz8osQ6wkLEnAZPgzqkxtfGKw/120_120"
  },
  {
    discordName: null,
    address: "0x62B2B3ea16daCF0649aB584Cc86e70EA4e107aA0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 135,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPJs5gXnwid1jnfJa3XDYUaLQoW6bx1YCCTjNkx1GY6Hq/120_120"
  },
  {
    discordName: null,
    address: "0x754f4DFC31F0E2B639910deD8EcF7275F5ee90c2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 134,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSgpqPNRcEjGuwqwjLAJRjf9TQop7vERt8YA5ztcjSj1F/120_120"
  },
  {
    discordName: null,
    address: "0xA696301359035976Bc2584E01a037e6aA3fAF1F6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 133,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZHMrmoBvvWeCbxuCDqsowCcA8Hakz5CG4U1E2o2gAL9v/120_120"
  },
  {
    discordName: null,
    address: "0xC301f5b31e4894fbC89B777883CCd4304672b655",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 128,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaiw4HnBFtHmmAjvJYVgbpjsK1MgiT47SATbfctVPDmCw/120_120"
  },
  {
    discordName: null,
    address: "0xB0bdD5Baec8e6037d3D1a7Da82C0DEc23eefAd8D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 122,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdyLtZQD1q7WYexRfSfiy7rtdH5mcwtt8GzkG8icHS2MG/120_120"
  },
  {
    discordName: null,
    address: "0xe7fc2522d0D3f45657935FA6cb85771bBe02f6DD",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 120,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaDoX1zeRnW4bZGBgxwLQp9HRJ71QFhkp5VbzbQ663yJ8/120_120"
  },
  {
    discordName: null,
    address: "0x70F9E695823A748D0f492c86bE093c220a8d487a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 118,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmet1WAkvhS7zhA9UKLGYw5w84Ra7TyZCqviq35SQhZNj8/120_120"
  },
  {
    discordName: null,
    address: "0x60859eD309E5553B39bd66edF1A3C26473da3b6b",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 117,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmULy8jNmj1pgFCmpbMgCu8TwGMQZoKQScQd1sgDQP6St6/120_120"
  },
  {
    discordName: null,
    address: "0x4D1913A46B740527A7C8Ff9D1747A949C76cac8F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 116,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZn9emV6xwirtYWnB8pZkZeKhge2Ew6Y3xtubfXrw2ktz/120_120"
  },
  {
    discordName: null,
    address: "0x49cdA2b8A28345388e499ee94B9abD75DaC5d9e3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 115,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaxpvm9srngJTinq5LGZWmWtruXcKkCdChxp1d3skhU3n/120_120"
  },
  {
    discordName: null,
    address: "0xe97846aB994d21BC4Df3Ef78eaa956007C2Df012",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 113,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmefyoK4ZWSaCtLN1PMLXXrcAY3a6zzYQVFy7JKzXTkZMP/120_120"
  },
  {
    discordName: null,
    address: "0x70F9E695823A748D0f492c86bE093c220a8d487a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 112,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYVjEcsEh42Uv5zSfmE2rhjEFwGEFfxrJSMQ2SATVdefa/120_120"
  },
  {
    discordName: null,
    address: "0x155a9f35EA15FFB2F95f7220E41bA00B1023F89a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 111,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQ1zUDVhk6FYWcmoH193Nh9xMF3kyuUD6AcN5LnFSeMeZ/120_120"
  },
  {
    discordName: null,
    address: "0xd29E3D2E0395648678a42a5194CE3f1A2d0d0d82",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 110,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbz6Y8vJqJjPq5ixvXqcNCcpPgraHiyKU1mtKsZjj5we3/120_120"
  },
  {
    discordName: null,
    address: "0xb9484E1D5344D812Be045786a8a1C20dB0307280",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 109,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcXhYRqdBcjVLLkg7hMLmQm9c29iwczQuc75ycytCRGcu/120_120"
  },
  {
    discordName: null,
    address: "0x5e95d8A17FB0B340DF12893c80A7752270a3fC1D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 108,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmQi6t1jR3tdRdP2fonJLhSqcjiTKinq8wMueheFAZCLH2/120_120"
  },
  {
    discordName: null,
    address: "0xe363e25499464D1156caa2237Fd1A5d3934CEE7a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 107,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTgGxG98dqWQsueA619Jvwm1p4jzonxUYiNYeitYmfJmc/120_120"
  },
  {
    discordName: null,
    address: "0x28669298BEE7b99ec6Fc9B84f38D23fDB1a8fff8",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 105,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTYQHRyesWnxWWa7Z4f52TPJ1DSPDRMBRJQL7VzwPsUY2/120_120"
  },
  {
    discordName: null,
    address: "0x01aC3FF155739D34948f1af53f24524149c9d928",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 104,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTTZ5i8L7Szp87fqiGHZWCkS76CC5ANZriCHghshJLUXU/120_120"
  },
  {
    discordName: null,
    address: "0x520Fc74A513463192703b899ccafA0126069B7E0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 103,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmb29HMEX9kDHwaX2Rk4BAghG2bdr9Gs4ETdrwzWd4j3n7/120_120"
  },
  {
    discordName: null,
    address: "0xdfDA7181EB27A69d897E82cF96C5BcbdC3c059B0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 102,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaa6mcGe8XeT7N4biFuk5bGrZYep4HqZZZXbAdyJkhVtf/120_120"
  },
  {
    discordName: null,
    address: "0x02b04b832848DC70f98Cc792Cb005819DF0959eb",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 101,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmP2MkLVMYVQHTiByMGVUrBbKQit46RrrYNyoLFPPz2xB2/120_120"
  },
  {
    discordName: null,
    address: "0x22A93539E28418b7E481D6Ad3b288570E349270c",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 100,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaqcDfFo5BRFbdEPCRk279iGkMk5yMjdnTUkygnStgG9f/120_120"
  },
  {
    discordName: null,
    address: "0x78c0A25CcC21604B3D117100DE7c9523f53236C7",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 99,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaSaZpi9NHUq9SFjF9qGkZxv4xJsmyejqequxMxpMmwfA/120_120"
  },
  {
    discordName: null,
    address: "0xe4C726711d012287953DA36D6ea8261404C56b2A",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 96,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmT93fYVsQBL5gtn83BP9Bewneiwt1USaePe6A3QcXvjC5/120_120"
  },
  {
    discordName: null,
    address: "0x7Abf99B7e65a43d2aF04e8e0d47d3361494513D9",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 95,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRh4faheca8netzpTsfusSjSCcM3i7rZECABMq5uN7EFb/120_120"
  },
  {
    discordName: null,
    address: "0xd77Dd8754c5f3c63BA18cD17bf2f6dC60EE14E6F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 92,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmV76DeXRGQYEvBbWSKmrMTzhgbroFjJx43F4nuPi1iKxk/120_120"
  },
  {
    discordName: null,
    address: "0x2858F95DBf90FA9876972150DD303b1024E86179",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 91,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmd9iQxSpNg62u37gt5P9kpCgKhrjjXLsdfadrk3pwefeV/120_120"
  },
  {
    discordName: null,
    address: "0x07A41d7FBf8c7D619c8a1F54D0CF2c7e612F04D3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 90,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZAwLMdKoTZvd25JAaj4EoFaxczsRSbtuJgbaRbqPBWAm/120_120"
  },
  {
    discordName: null,
    address: "0x281334318C4AD3Db23fA467E6283bDe9c3940ff5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 88,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTCTz65fEhT3wACLzGkMwkxbH4oTQjpUkvj1qDSFZ2T55/120_120"
  },
  {
    discordName: null,
    address: "0xb4e175e1d1bFC3e347ACDc69149DFBe81E50E7a0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 87,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbSX1k8m1L2wpYnCG1WC1QEixySyaptxBohyxrFf2vPAD/120_120"
  },
  {
    discordName: null,
    address: "0xdaC073Bf7Ab0Ff2D1df7383bE6AE36b9185af59a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 86,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmes8QVLXyuU88Yeeo79wpctAKR9qZD7FrLRfobayXBNKo/120_120"
  },
  {
    discordName: null,
    address: "0x0B8243f94f237bFc47CC9b64E050804Ca0F76f1c",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 85,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQma8y9G8Pbebr7JoyPtn4D4XyeGFL2wqepY64SoFQ1bJoB/120_120"
  },
  {
    discordName: null,
    address: "0x11e9dF05c3a5aDC42c7bFaE4F0360b4e2423f29b",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 84,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXqgHGELX9fG6PmL5iD5h3BWWKZd8H717XASJ4fUGgLfg/120_120"
  },
  {
    discordName: null,
    address: "0xC070c2830A57DDDd97BABFA316190eB56c8fF660",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 82,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbLwaxBDmdarZYCXcuyVLzEmpTboJ8vTW4xfP4FREZSdG/120_120"
  },
  {
    discordName: null,
    address: "0x026D1fd6A9E78a0A0393EF3a8F86247c06770a33",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 81,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXkwvTCKQ9KExR8U7UWs6DLU1dtzYiYpcTV3Zq98c4yBZ/120_120"
  },
  {
    discordName: null,
    address: "0x5cB943Bf00032CFb65D3a12185cc5ae0DF742435",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 79,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPrs7rHEA4BoUr3hRCseUDBfyS7KunkKrpAiknY3YUQvg/120_120"
  },
  {
    discordName: null,
    address: "0x0E0b620529dd292995f33548B515617792b4b053",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 78,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmT7bqJUsQ6bQeJ1v1ho9vXKVgbLtmbutWsogxDXPK4SjJ/120_120"
  },
  {
    discordName: null,
    address: "0xC8f51a25360fDd5E604204E7fE3a5477ca102058",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 77,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmU42Xx69JnwP6VGYeq45Gf7Rei2EoRpb6QUTEFaTJPGFS/120_120"
  },
  {
    discordName: null,
    address: "0xDDC1983bA701DF5BDb4c48f5c55A00F42E8559f1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 76,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSHPvFDSTp7mvy7cJxsznzEa9BrYDTFwYCTeUJ5gQwqDE/120_120"
  },
  {
    discordName: null,
    address: "0x2980ced2B9123d36B26C6aE938594ab3c5bB465B",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 75,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmT7gHsYQ16QWkXE9RKyno3SpymAM5uTiGB3ZdGm2JG1bz/120_120"
  },
  {
    discordName: null,
    address: "0xCcaa4aAbAa03B180FE340Df0A21399eC01EEAd70",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 74,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUMjM4hQXqQ7H1upq6ReiYmhXSntup3rL9CXq38h7aSXA/120_120"
  },
  {
    discordName: null,
    address: "0x72d96e2004240DC68dE50eBaE225c568068955F0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 73,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmf3HjAxQG7ZyUCidkjmXEZLM8Az2D69Xw1R2YTE5QmArt/120_120"
  },
  {
    discordName: null,
    address: "0x4c55C41Bd839B3552fb2AbecaCFdF4a5D2879Cb9",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 72,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTPchmq51sbQQexu6Cs7fZbsdZvignFrSo99s5NKtx3kV/120_120"
  },
  {
    discordName: null,
    address: "0x23FfE77c28e2a3300d90568Ff46A9863e33bc2bc",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 70,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRMEiUgEq8HxYfnxf96ET7uVjXaztD16g3HjGnvZEERV9/120_120"
  },
  {
    discordName: null,
    address: "0x3c8aF873cCf3379491750835130D1d81bEEcc9c3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 69,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcgAzAbaFY13xVMzXBdPbudSP45i27fQByBpGFWYpC3i8/120_120"
  },
  {
    discordName: null,
    address: "0xcB71f617411D587A0b56fa56bfBa793Dd2F0303C",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 67,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbdV4sXAn7nCPwTUzZEkj2kNZHPCSz5xhRgD1j7iD1EMc/120_120"
  },
  {
    discordName: null,
    address: "0xC1C2D0860A213C630c7E285eB5b8B1ebDfa205B1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 66,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmSiesne7PbThw9EyXDESrmovwM4N5YTtgnsg3KUdygNAV/120_120"
  },
  {
    discordName: null,
    address: "0x7cE90a6D54E830ceB568F81B52865D5011aEFE40",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 64,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNqXirG7kAxqdLDrkHDREW9oqj1tkXZbAfkkiR4U91oCi/120_120"
  },
  {
    discordName: null,
    address: "0x1d25251A826Bd66A6606127146Da04CDfD6D8124",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 63,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNjBFgwUSRWbP39e4MdXR1KByZ2SN1VLAH2WwGKyWHGRe/120_120"
  },
  {
    discordName: null,
    address: "0xEE619843f2bE1b1c1A5965c6cf50e762aF1a2990",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 62,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVyNVfwQ5y6kMFFvGY4LY1qygt3x52G2FRyTgKD7Rwu85/120_120"
  },
  {
    discordName: null,
    address: "0x290AA5081D6298C181949946893876A1B76Bf144",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 61,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcA9tADa92N9TY8Kq2qEg48xMHQPudnijpHed89kXrH5W/120_120"
  },
  {
    discordName: null,
    address: "0x36D74b81006732a0B24218a562B6B6c774C91113",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 60,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmevK6FWzJvJ6pUaeJSxnCDV66Dw4gSE23zdqBPnsEUXkW/120_120"
  },
  {
    discordName: null,
    address: "0xEE02075d3A36640e069c54184AcB898F17f5B78b",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 59,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUX431G6LPT5x8SAr8HvAmRyoUkJui9B79zZV57ySf2kv/120_120"
  },
  {
    discordName: null,
    address: "0xEd39c2729253cc577125baa6e3F17d4e676c26e2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 58,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmb3zjzYWpV8tTFeNXJ27BwSWVqCt3xbG15dBowPEuc45W/120_120"
  },
  {
    discordName: null,
    address: "0xc465f3d38941ab94cb20B293505392D8228ac926",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 57,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbyFJmczRkL82WDzi8v6tXgXJxJYxuWh8kp6HTNrp6ESY/120_120"
  },
  {
    discordName: null,
    address: "0x3e58DD42d7908D8924a599E5E28E15f4f58c4075",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 56,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPfu4oZn8kikiMXUszkw2w1UhnRUByeKJ6nD74Qgqtagc/120_120"
  },
  {
    discordName: null,
    address: "0x06B3564ef920FD55f19f95EB7114EAb3eE83A192",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 55,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmT1TM56ybNxe4hfBsRDTbrnMaf4ii5ZSS2QgmoMiN5Bpk/120_120"
  },
  {
    discordName: null,
    address: "0xfC72A128cAde26a6D1d06888B732eBc74762e6A4",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 54,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVtk8qUANaZ2c7rNf2TJ9LCeHktVfNyFK6zfMfRy1GNma/120_120"
  },
  {
    discordName: null,
    address: "0x39978cc40e2D1d7E127050bDFFFBB0dFcfaEbAd0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 53,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNz8ZQMbDgdg4PSP76t2JTPFbdRvTS46T2PE9cxDzYgMb/120_120"
  },
  {
    discordName: null,
    address: "0xed0c0e30e68490a2F8054430080c07161c6fFaFa",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 52,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUMaAfsWekRKH2aSWhh3jAYTsDEVJLT32DoFvWKwfK47L/120_120"
  },
  {
    discordName: null,
    address: "0x2c665cb2A3935cd10Bb5691AE3227c2678373dc6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 51,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdevAGQvTuH6X2irnrcr5yZMvDcR655mF5Zz7jgi6LSpA/120_120"
  },
  {
    discordName: null,
    address: "0x772B3e7b6cb2e74b67a66C5ba1e68540E856383D",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 49,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYT8W2cHSgc8A4H4Ay5hdiGzjVuBRYam99oFUGvjZDiEq/120_120"
  },
  {
    discordName: null,
    address: "0x1cFf3B7B4Ed8B58EE756AF8AA54CcFdFA3928BA3",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 47,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmS31Y8JfRwpDQJHSRj5RN9C9PCgJFVJxAEbLKZnYBRVgC/120_120"
  },
  {
    discordName: null,
    address: "0x7eB6615CC23DEbecfCFbA74Dd6E7C7BF4571a26E",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 46,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPbFZ2CaBNyCHd1uS8PVzx785fseMG8VjibNBmGmgzdEv/120_120"
  },
  {
    discordName: null,
    address: "0xd5Bb8501Da67afD065BB41DbC514900D4fD50461",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 45,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmWV6mqnKzE7SneQBiWZk1eBugV4B3QuvxHcwjN13ML5Sb/120_120"
  },
  {
    discordName: null,
    address: "0xb8A804da05abf0ee96D61f5e4bEDB59E7f8fab2F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 44,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeRSsbh2JcQw5AtC2tSyj37ozosYVeBC2Xw2FajnBqPCV/120_120"
  },
  {
    discordName: null,
    address: "0x16a3C50F1ec275335CF2FEaf96738De54C6ae9a2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 43,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmeFrDVVRuXowmQbVtzBmkUgzCs4NCohKW34baJj7JK3tN/120_120"
  },
  {
    discordName: null,
    address: "0xabef0820004C4108d2CfCA0B8CF326aA3F08Eaff",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 42,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRqJoAuMjdp8H8tmT5Js2ER9rc9Vc8ESC11vjy1aaMwzH/120_120"
  },
  {
    discordName: null,
    address: "0x4f714880A5847D335606bb37848CcAcbcD6d5836",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 41,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmW7X3b74PNxVj8TvZndxnHT4WK2pZwPEWfCShSqmu1yEF/120_120"
  },
  {
    discordName: null,
    address: "0x64135DBd1685e0b08a504902368e28329a0D8D32",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 39,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUeLGGupiyvbGUKirKiWfNfs22bpcho6hAitzxWgCsX2L/120_120"
  },
  {
    discordName: null,
    address: "0xFBF54Ca4920a056f5741064d935f89210Dea7cbd",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 38,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbVBXGmrrhQUsKPfr8K9WYZ1foJ6uT2k2CtvcaLaTfiDS/120_120"
  },
  {
    discordName: null,
    address: "0xdB663D128A4e5FF8b9EBc5E0D4148c9F946cEff0",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 37,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdEn26Y3w9KFNLVN1maQ8fdmB5hZKd4HcKxusWBMyybbZ/120_120"
  },
  {
    discordName: null,
    address: "0xFDAAe168C3D835da1F974447CdcCF8c7476D0792",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 36,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmPAedLakAa71djGsfsBHtNeM9gcLTFLdxnLtZ95i2NgSQ/120_120"
  },
  {
    discordName: null,
    address: "0xf8DFd987b9Cdc2f213cd9A30E3af3c190190ab17",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 35,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNdGTLGjSpTSKioHunvKJLr72jLeyUnfneLE3Ee4LBPNG/120_120"
  },
  {
    discordName: null,
    address: "0x71856917BCF6bA1bD0f3E53AC9ADf475d5a6de70",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 34,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVBPRn4GuhYGMDnygR3mJrzhZZdXPgVjwnZsD19uMTgZn/120_120"
  },
  {
    discordName: null,
    address: "0xa4d3316B09125C0d1Bbfe757f43D3Aae4e4e9D8f",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 32,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaKMyadaDUsz3Fo8DJztJcvSAjwaitxmhTo8tjKKHDfPk/120_120"
  },
  {
    discordName: null,
    address: "0x72A4dAfc84D58558C082DD2aC40E39adB10F6e89",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 30,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRntGefNtZys2nMBdwbrU8PtgoFk9NE5AZhPubZXzYH44/120_120"
  },
  {
    discordName: null,
    address: "0xeFD67615d66E3819539021d40E155e1a6107F283",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 29,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmcmEYkEzmWa2cFBcDJVweuANC8u7ZbeWgcCxCyc5afyh3/120_120"
  },
  {
    discordName: null,
    address: "0x0886e1Fa22f7337A1D6b5224903036f311779c9F",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 28,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbNd5ZJY1qUChkUP6fpSCzAEpRiwHvHBphWyVCGGxvM6q/120_120"
  },
  {
    discordName: null,
    address: "0x17e35b700e6d014D9cC4cc093D6eFF6e66D9F117",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 27,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNRCNrGr3tw3pEiwXZN9Yq1Y3KrA4aKWXp1YLgTaTjGDX/120_120"
  },
  {
    discordName: null,
    address: "0xaD12480A5477760eD231ec70515AF2b118DAa2E2",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 23,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmXF6YUZg81hHBn9Fkq6H9TXagPqLMvupdN3mgXfaZ247y/120_120"
  },
  {
    discordName: null,
    address: "0x5Bd9e52346E5802cfbe597206Eb8dA7Fbb41d0A6",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 22,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUhQsy76cAXmkXSu7FYAvpdbLm74UkLpGrkJq3wnRZUcb/120_120"
  },
  {
    discordName: null,
    address: "0x34C53Ef47C41Da3A393B40125BFa9387763b7B71",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 20,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmZDegjUb95y6gDMvbWRVCA6WEuF8ER7JTKu5744waNVBX/120_120"
  },
  {
    discordName: null,
    address: "0xdC1FA15c96720541BA91CF2843dB42732a555812",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 19,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVGuooHFs3zHAzWzrJVax6X4evLRqMMKzhTouaPvabwyL/120_120"
  },
  {
    discordName: null,
    address: "0x72ff8B7C2dce8c4e48932d23A80Dd03241f77901",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 16,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVVvuFnWdSQH9k85v68TtshAefKydCwvtLW1FBHYsanfR/120_120"
  },
  {
    discordName: null,
    address: "0xBa8a3Acac384995A6F8F611De58759211ce0D734",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 15,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmV44e2x554DiK2Kg2zZdmeZxece9brSi6aeFAACWnMiFx/120_120"
  },
  {
    discordName: null,
    address: "0x8872195Be916cd32a5157c6D57CDe89ed45989F4",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 13,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTceR2oRiiDBGTt58X6xYuJJMaMFJjmtNyAwtbjtz4z1g/120_120"
  },
  {
    discordName: null,
    address: "0x17Dbf052FA633958Aa10Fa19e375e5B099cEd607",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 12,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmYUnoMjWBm6TCKwkvttUqJvjNyHgciPu5GznTR9imDdU8/120_120"
  },
  {
    discordName: null,
    address: "0x33A4Ac2450C8c623A2F5a79c228Ff85441E9889E",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 11,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaeAdFWhVA3h3PP2Zbn1wMdp8wdsXG5zdvkmTMhL1UQC7/120_120"
  },
  {
    discordName: null,
    address: "0x01b05f41b22B8Ab004b064cD6404e90Ca46840FD",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 10,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmfM7uBq7u6otM4GMvsbvH4H4LLzFLAFNoMSK2Px9R8Ju1/120_120"
  },
  {
    discordName: null,
    address: "0x334aC8928E80671FEd2111Bed81381506F5DbF72",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 9,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTANMoZuTF5zMRJaFZsJcEUR3XBLBmkP1Hd2v3YaEAcc7/120_120"
  },
  {
    discordName: null,
    address: "0xB82aBF8f6940D85391d2CF6d80379A1ea3d39930",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 8,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmaF5nfuaHoiUHXrSRM5nFMueLfdSDmQBGvg7SAwG2inKk/120_120"
  },
  {
    discordName: null,
    address: "0xd093AdD6C11Cd7F2FCc2eCbA93FA93cb2F54fbEa",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 7,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmbp48RA2PDjLsB1bhXwtkigDaXCU9TBteonorkWn1oNA9/120_120"
  },
  {
    discordName: null,
    address: "0x226a3075Ef87144114F3A71278A7230F5c9eDad1",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 6,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmRXce6oD1RScTpegL9G6Xpv1o8S9M3VA3Yde247GLnJVz/120_120"
  },
  {
    discordName: null,
    address: "0x411febEF28373B8D333c0cf9e0736003758EFFA9",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 5,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQma3c28jyYiX2jtbofuyVHSc91NQpuYtDDqHvNEFhEuJ5j/120_120"
  },
  {
    discordName: null,
    address: "0xa76A36765c8Af45Affec2b5De2ABfC33aDC1488a",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 2,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmdhCiLyTGwdpZNsujtzRAnkZ4BcAyTuiupR7nf3MwPn3u/120_120"
  },
  {
    discordName: null,
    address: "0x332345477Db00239f88CA2Eb015B159750Cf3C44",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 1,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmNRpA4Am96unJzhqkngfQ5pJnubJiDYQSb3JR4JmamTdc/120_120"
  },
  {
    discordName: null,
    address: "0x0fEcef59947fa6401FeA1ba10b3aa173dAbe2412",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 0,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmUL8XnQeaRutXAScg6Dq98w8TChkhKRHwng1EhU8RB64k/120_120"
  },
  {
    discordName: null,
    address: "0x9Aa9abD9d470a16E3BA6189D8aC86613FF8330e5",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 411,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmTaGo5Z6HmTXAU4jnphWDWWx7iY5YbTYK5Pz5t1cLKZj2/120_120"
  },
  {
    discordName: null,
    address: "0x7EA1EaA27b313D04D359bF3e654FE927376e31Bb",
    contact: { twitter: null },
    guilds: null,
    projects: null,
    description: null,
    tokenId: 412,
    tokenUrl: "https://seedhacks.s3.us-east-2.amazonaws.com/sgn/ipfs%253A%252F%252Fipfs%252FQmVSAh1suwfHB4iqVVK2jtEcHcHum1vZQJQF21e7XyNSYQ/120_120"
  }
];

// app/routes/member.tsx
var import_react_virtuoso2 = require("react-virtuoso");

// app/components/AvatarsBackground/index.tsx
var import_react14 = require("react"), import_react_virtuoso = require("react-virtuoso"), import_react15 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), COLUMN_COUNT = 3, ITEM_SIZE = 160, AVATARS_BACKGROUND_ID = "avatars_background_id", PRE_AVATAR_COUNT = 10, TAIL_AVATAR_COUNT = 10, OFFSET_SCROLL_Y = 5, AvatarsBackground = ({
  images,
  activeIndex = 0,
  ...props
}) => {
  let virtuosoRef = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    var _a;
    (_a = virtuosoRef.current) == null || _a.scrollTo({
      top: Math.floor(
        activeIndex / COLUMN_COUNT + PRE_AVATAR_COUNT - OFFSET_SCROLL_Y
      ) * ITEM_SIZE
    });
  }, [activeIndex]);
  let listRealTotalCount = Math.ceil(images.length / COLUMN_COUNT);
  function getActiveIndexDistance(currentIndex) {
    return currentIndex === activeIndex ? 0 : Math.abs(Math.abs(currentIndex - activeIndex) - COLUMN_COUNT) < 2 || Math.abs(currentIndex - activeIndex) < 2 ? 1 : 2;
  }
  function getImageStyle(currentIndex) {
    let styleIndex = getActiveIndexDistance(currentIndex), opacity = [1, 0.6];
    return {
      transform: ["scale(1)", "scale(0.9)"][styleIndex],
      opacity: opacity[styleIndex],
      boxShadow: styleIndex === 0 ? "0 0 0 6px var(--chakra-colors-adorn-900), 0 0 160px var(--chakra-colors-adorn-900)" : void 0
    };
  }
  function getItemCountIndex(fakeIndex) {
    let index = fakeIndex - PRE_AVATAR_COUNT < 0 ? listRealTotalCount - fakeIndex : fakeIndex - PRE_AVATAR_COUNT;
    return index > listRealTotalCount - 1 ? index - (listRealTotalCount - 1) : index;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Box, {
    id: AVATARS_BACKGROUND_ID,
    ref: virtuosoRef,
    as: import_react_virtuoso.Virtuoso,
    h: "full",
    totalCount: listRealTotalCount + PRE_AVATAR_COUNT + TAIL_AVATAR_COUNT,
    mr: "-1px",
    initialTopMostItemIndex: PRE_AVATAR_COUNT - OFFSET_SCROLL_Y,
    fixedItemHeight: ITEM_SIZE,
    transition: "500ms",
    style: {
      transform: `translateX(-${activeIndex % COLUMN_COUNT * ITEM_SIZE + ITEM_SIZE * 4}px)`
    },
    scrollBehavior: "smooth",
    itemContent: (fakeIndex) => {
      let index = getItemCountIndex(fakeIndex), columnCount = COLUMN_COUNT * COLUMN_COUNT;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Grid, {
        templateColumns: `repeat(${columnCount}, calc(100% / ${columnCount}))`,
        h: `${ITEM_SIZE}px`,
        px: `${ITEM_SIZE}px`,
        "data-index": index,
        children: new Array(columnCount).fill(0).map(
          (_, i) => images[index * COLUMN_COUNT + i % COLUMN_COUNT] || images[Math.floor(listRealTotalCount / 2) * COLUMN_COUNT + i % COLUMN_COUNT]
        ).map((src, i) => {
          let currentIndex = index * COLUMN_COUNT + i % COLUMN_COUNT, style = i >= COLUMN_COUNT && i < COLUMN_COUNT * (COLUMN_COUNT - 1) ? getImageStyle(currentIndex) : {};
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Image, {
            w: "120px",
            h: "120px",
            src,
            alt: `avatar-background-${i}`,
            transition: "200ms",
            transform: "scale(0.8) translate3d(0, 0, 0)",
            "data-index": currentIndex,
            opacity: 0.3,
            style
          }, i, !1, {
            fileName: "app/components/AvatarsBackground/index.tsx",
            lineNumber: 116,
            columnNumber: 19
          }, this);
        })
      }, index, !1, {
        fileName: "app/components/AvatarsBackground/index.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this);
    },
    ...props
  }, void 0, !1, {
    fileName: "app/components/AvatarsBackground/index.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
};

// app/components/MemberTags/index.tsx
var import_react16 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MemberTags = ({ tags }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Flex, {
  flexWrap: "wrap",
  lineHeight: "18px",
  children: tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Tag, {
    variant: "outline",
    colorScheme: "secondary",
    rounded: "0",
    margin: "-1px 0 0 -1px",
    color: "secondary.600",
    borderColor: "secondary.200",
    h: "18px",
    children: tag
  }, i, !1, {
    fileName: "app/components/MemberTags/index.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this))
}, void 0, !1, {
  fileName: "app/components/MemberTags/index.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this);

// app/routes/member.tsx
var import_react19 = require("react");

// app/hooks/useDebounce.ts
var import_react17 = require("react"), import_rxjs = require("rxjs");
function useDebounce(fn, delay = 300, deps = []) {
  let subject = (0, import_react17.useMemo)(() => new import_rxjs.Subject(), []);
  return (0, import_react17.useEffect)(() => {
    let subscriber = subject.pipe((0, import_rxjs.debounceTime)(delay)).subscribe(fn);
    return () => {
      subscriber.unsubscribe();
    };
  }, [fn, delay, subject, ...deps]), (0, import_react17.useCallback)((t) => subject.next(t), [subject]);
}

// app/routes/member.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MEMBER_LIST_ID = "member_list_id";
function Member() {
  let [activeIndex, setActiveIndex] = (0, import_react19.useState)(0), onChangeActiveIndex = useDebounce(setActiveIndex);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Grid, {
    w: "full",
    h: "full",
    templateColumns: `${500}px calc(100% - ${500}px)`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Box, {
        position: "relative",
        overflow: "hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Box, {
            position: "absolute",
            left: "220px",
            top: "0",
            w: `calc(${ITEM_SIZE}px * 11)`,
            h: "150%",
            transform: "rotate(15deg)",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarsBackground, {
              images: SGNS.map((item) => item.tokenUrl),
              activeIndex
            }, void 0, !1, {
              fileName: "app/routes/member.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/member.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Flex, {
            direction: "column",
            borderRight: "1px",
            borderColor: "secondary.900",
            borderStyle: "solid",
            w: "full",
            h: "full",
            px: "20px",
            pt: "25px",
            pb: "30px",
            position: "relative",
            zIndex: 1,
            bg: "linear-gradient(-30deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Heading, {
                fontSize: "110px",
                w: "420px",
                textTransform: "uppercase",
                children: "Hall of fame"
              }, void 0, !1, {
                fileName: "app/routes/member.tsx",
                lineNumber: 60,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Heading, {
                as: "h2",
                fontSize: "32px",
                w: "420px",
                textTransform: "uppercase",
                children: "SEEDAO\u98CE\u4E91\u699C"
              }, void 0, !1, {
                fileName: "app/routes/member.tsx",
                lineNumber: 63,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Box, {
                mt: "auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Heading, {
                    as: "h3",
                    textTransform: "uppercase",
                    fontSize: "24px",
                    fontWeight: "400",
                    mb: "20px",
                    children: "highlight"
                  }, void 0, !1, {
                    fileName: "app/routes/member.tsx",
                    lineNumber: 67,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.HStack, {
                    spacing: "50px",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, {
                        value: 420,
                        keyName: "SGN HOLDER",
                        valueUnit: "+"
                      }, void 0, !1, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 77,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, {
                        value: 8200,
                        keyName: "Member",
                        valueUnit: "+"
                      }, void 0, !1, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 78,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, {
                        value: 5,
                        keyName: "NFT Mint",
                        valueUnit: "%"
                      }, void 0, !1, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 79,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/member.tsx",
                    lineNumber: 76,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/member.tsx",
                lineNumber: 66,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/member.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/member.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Grid, {
        mb: "-1px",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Box, {
          id: MEMBER_LIST_ID,
          as: import_react_virtuoso2.Virtuoso,
          h: "full",
          totalCount: Math.ceil(SGNS.length / 3),
          mr: "-1px",
          fixedItemHeight: 420,
          itemContent: (index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Grid, {
            templateColumns: "repeat(3, calc(100% / 3))",
            children: new Array(3).fill(0).map((_, i) => SGNS[index * 3 + i]).filter((item) => item).map((item, i) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Grid, {
                h: `${420}px`,
                borderRight: "1px",
                borderBottom: "1px",
                borderColor: "secondary.900",
                borderStyle: "solid",
                p: "30px",
                pr: "25px",
                templateColumns: "100%",
                templateRows: "72px calc(100% - 72px)",
                onMouseEnter: () => onChangeActiveIndex(index * 3 + i),
                onMouseMove: () => setActiveIndex(index * 3 + i),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Grid, {
                    templateColumns: "72px calc(100% - 72px - 20px)",
                    gap: "20px",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Image, {
                        src: item.tokenUrl,
                        alt: "avatar",
                        h: "72px"
                      }, void 0, !1, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 117,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Flex, {
                        direction: "column",
                        children: [
                          item.discordName ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Heading, {
                            as: "h4",
                            fontSize: "20px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            title: item.discordName,
                            mb: "5px",
                            children: item.discordName
                          }, void 0, !1, {
                            fileName: "app/routes/member.tsx",
                            lineNumber: 120,
                            columnNumber: 27
                          }, this) : null,
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Heading, {
                            as: "h5",
                            color: "adorn.100",
                            fontSize: "12px",
                            children: [
                              "SGN #",
                              item.tokenId
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/member.tsx",
                            lineNumber: 132,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.HStack, {
                            spacing: "10px",
                            mt: "auto",
                            children: (_a = item.contact) != null && _a.twitter ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
                              href: item.contact.twitter,
                              target: "_blank",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Image, {
                                src: "/assets/svg/social/twitter.svg",
                                alt: "twitter",
                                w: "16px",
                                h: "16px"
                              }, void 0, !1, {
                                fileName: "app/routes/member.tsx",
                                lineNumber: 138,
                                columnNumber: 31
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/member.tsx",
                              lineNumber: 137,
                              columnNumber: 29
                            }, this) : null
                          }, void 0, !1, {
                            fileName: "app/routes/member.tsx",
                            lineNumber: 135,
                            columnNumber: 25
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 118,
                        columnNumber: 23
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/member.tsx",
                    lineNumber: 113,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Flex, {
                    pt: "20px",
                    direction: "column",
                    children: [
                      item.guilds && item.guilds.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MemberTags, {
                        tags: item.guilds
                      }, void 0, !1, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 151,
                        columnNumber: 25
                      }, this) : null,
                      item.projects && item.projects.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MemberTags, {
                        tags: item.projects
                      }, void 0, !1, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 154,
                        columnNumber: 25
                      }, this) : null,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Box, {
                        overflowX: "hidden",
                        overflowY: "scroll",
                        h: "full",
                        pr: "10px",
                        mt: "16px",
                        css: {
                          "&::-webkit-scrollbar": {
                            width: "1px",
                            height: "1px"
                          },
                          "&::-webkit-scrollbar-track": {
                            width: "1px",
                            height: "1px"
                          },
                          "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "var(--chakra-colors-secondary-200)"
                          }
                        },
                        children: item.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Text, {
                          color: "secondary.800",
                          fontSize: "12px",
                          lineHeight: "180%",
                          textAlign: "justify",
                          whiteSpace: "pre-line",
                          children: item.description
                        }, void 0, !1, {
                          fileName: "app/routes/member.tsx",
                          lineNumber: 178,
                          columnNumber: 27
                        }, this) : null
                      }, void 0, !1, {
                        fileName: "app/routes/member.tsx",
                        lineNumber: 156,
                        columnNumber: 23
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/member.tsx",
                    lineNumber: 149,
                    columnNumber: 21
                  }, this)
                ]
              }, i, !0, {
                fileName: "app/routes/member.tsx",
                lineNumber: 99,
                columnNumber: 19
              }, this);
            })
          }, index, !1, {
            fileName: "app/routes/member.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/member.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/member.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/member.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/event.tsx
var event_exports = {};
__export(event_exports, {
  default: () => Event
});
var import_react31 = require("@chakra-ui/react"), import_react32 = require("@remix-run/react"), import_react_virtuoso3 = require("react-virtuoso"), import_dayjs2 = __toESM(require("dayjs"));

// app/components/EventComponents/MonthTag.tsx
var import_react20 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MONTH_ABBREVIATES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
], MonthTag = ({ active, children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react20.Box, {
  position: "absolute",
  top: "0",
  right: "0",
  w: "auto",
  pl: "10px",
  pr: "8px",
  h: "28px",
  lineHeight: "28px",
  textTransform: "uppercase",
  bg: active ? "adorn.900" : "secondary.900",
  color: "primary.100",
  textAlign: "center",
  fontWeight: "semibold",
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 21px)",
  ...props,
  children
}, void 0, !1, {
  fileName: "app/components/EventComponents/MonthTag.tsx",
  lineNumber: 26,
  columnNumber: 5
}, this);

// app/components/EventComponents/TodayTag.tsx
var import_react21 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), TodayTag = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.Box, {
  position: "absolute",
  top: "0",
  right: "-1px",
  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
  bg: "adorn.900",
  w: "10px",
  h: "10px",
  ...props
}, void 0, !1, {
  fileName: "app/components/EventComponents/TodayTag.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/components/EventComponents/ScheduleList.tsx
var import_react22 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ScheduleList = ({
  items = [],
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.UnorderedList, {
  w: "full",
  fontSize: "12px",
  whiteSpace: "nowrap",
  listStyleType: "none",
  p: "0",
  m: "0",
  textAlign: "left",
  color: "secondary.600",
  ...props,
  children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.ListItem, {
    display: "grid",
    gridTemplateColumns: "34px calc(100% - 34px)",
    gridGap: "2px",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Box, {
        children: item.time
      }, void 0, !1, {
        fileName: "app/components/EventComponents/ScheduleList.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Box, {
        overflow: "hidden",
        textOverflow: "ellipsis",
        children: item.name
      }, void 0, !1, {
        fileName: "app/components/EventComponents/ScheduleList.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ]
  }, i, !0, {
    fileName: "app/components/EventComponents/ScheduleList.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this))
}, void 0, !1, {
  fileName: "app/components/EventComponents/ScheduleList.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this);

// app/components/EventComponents/Search.tsx
var import_react23 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Search = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Grid, {
  px: "32px",
  templateColumns: "24px calc(100% - 24px)",
  alignItems: "center",
  gridGap: "10px",
  ...props
}, void 0, !1, {
  fileName: "app/components/EventComponents/Search.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/components/EventComponents/Schedule.tsx
var import_react27 = require("react"), import_react28 = require("@chakra-ui/react");

// app/components/ScrollContainer/index.tsx
var import_react24 = require("@chakra-ui/react"), import_react25 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ScrollContainer = (0, import_react25.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Box, {
    ref,
    w: "full",
    h: "full",
    overflowX: "hidden",
    overflowY: "scroll",
    ...props,
    children
  }, void 0, !1, {
    fileName: "app/components/ScrollContainer/index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this)
);

// app/components/EventComponents/Schedule.tsx
var import_dayjs = __toESM(require("dayjs"));

// app/components/GradientAnimationBackground/index.tsx
var import_react26 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), GradientAnimationBackground = ({
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Icon, {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid slice",
  w: "full",
  h: "full",
  ...props,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
          id: "Gradient1",
          cx: "50%",
          cy: "50%",
          fx: "0.441602%",
          fy: "50%",
          r: ".5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
              attributeName: "fx",
              dur: "34s",
              values: "0%;3%;0%",
              repeatCount: "indefinite"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0%",
              "stop-color": "rgba(255, 0, 255, 1)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "100%",
              "stop-color": "rgba(255, 0, 255, 0)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
          id: "Gradient2",
          cx: "50%",
          cy: "50%",
          fx: "2.68147%",
          fy: "50%",
          r: ".5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
              attributeName: "fx",
              dur: "23.5s",
              values: "0%;3%;0%",
              repeatCount: "indefinite"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0%",
              "stop-color": "rgba(255, 255, 0, 1)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "100%",
              "stop-color": "rgba(255, 255, 0, 0)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
          id: "Gradient3",
          cx: "50%",
          cy: "50%",
          fx: "0.836536%",
          fy: "50%",
          r: ".5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
              attributeName: "fx",
              dur: "21.5s",
              values: "0%;3%;0%",
              repeatCount: "indefinite"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0%",
              "stop-color": "rgba(0, 255, 255, 1)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "100%",
              "stop-color": "rgba(0, 255, 255, 0)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
          id: "Gradient4",
          cx: "50%",
          cy: "50%",
          fx: "4.56417%",
          fy: "50%",
          r: ".5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
              attributeName: "fx",
              dur: "23s",
              values: "0%;5%;0%",
              repeatCount: "indefinite"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0%",
              "stop-color": "rgba(0, 255, 0, 1)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "100%",
              "stop-color": "rgba(0, 255, 0, 0)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
          id: "Gradient5",
          cx: "50%",
          cy: "50%",
          fx: "2.65405%",
          fy: "50%",
          r: ".5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
              attributeName: "fx",
              dur: "24.5s",
              values: "0%;5%;0%",
              repeatCount: "indefinite"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 93,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0%",
              "stop-color": "rgba(0,0,255, 1)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "100%",
              "stop-color": "rgba(0,0,255, 0)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 100,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
          id: "Gradient6",
          cx: "50%",
          cy: "50%",
          fx: "0.981338%",
          fy: "50%",
          r: ".5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
              attributeName: "fx",
              dur: "25.5s",
              values: "0%;5%;0%",
              repeatCount: "indefinite"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0%",
              "stop-color": "rgba(255,0,0, 1)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "100%",
              "stop-color": "rgba(255,0,0, 0)"
            }, void 0, !1, {
              fileName: "app/components/GradientAnimationBackground/index.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/GradientAnimationBackground/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "13.744%",
      y: "1.18473%",
      width: "100%",
      height: "100%",
      fill: "url(#Gradient1)",
      transform: "rotate(334.41 50 50)",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
          attributeName: "x",
          dur: "20s",
          values: "25%;0%;25%",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
          attributeName: "y",
          dur: "21s",
          values: "0%;25%;0%",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          dur: "7s",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 140,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/GradientAnimationBackground/index.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "-2.17916%",
      y: "35.4267%",
      width: "100%",
      height: "100%",
      fill: "url(#Gradient2)",
      transform: "rotate(255.072 50 50)",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
          attributeName: "x",
          dur: "23s",
          values: "-25%;0%;-25%",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 157,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
          attributeName: "y",
          dur: "24s",
          values: "0%;50%;0%",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 163,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          dur: "12s",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 169,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/GradientAnimationBackground/index.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9.00483%",
      y: "14.5733%",
      width: "100%",
      height: "100%",
      fill: "url(#Gradient3)",
      transform: "rotate(139.903 50 50)",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
          attributeName: "x",
          dur: "25s",
          values: "0%;25%;0%",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 186,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
          attributeName: "y",
          dur: "12s",
          values: "0%;25%;0%",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 192,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "360 50 50",
          to: "0 50 50",
          dur: "9s",
          repeatCount: "indefinite"
        }, void 0, !1, {
          fileName: "app/components/GradientAnimationBackground/index.tsx",
          lineNumber: 198,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/GradientAnimationBackground/index.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/GradientAnimationBackground/index.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/components/EventComponents/Schedule.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), import_react = require("react"), WEEK_SET = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Schedule = ({ day, items = [] }) => {
  let today = (0, import_react27.useMemo)(() => (0, import_dayjs.default)(), []), isToady = (0, import_react27.useMemo)(() => today.isSame(day, "date"), [day, today]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollContainer, {
    position: "relative",
    pb: "30px",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Flex, {
      direction: "column",
      position: "relative",
      zIndex: 0,
      pt: "32px",
      px: "30px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GradientAnimationBackground, {
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: -1
        }, void 0, !1, {
          fileName: "app/components/EventComponents/Schedule.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Box, {
          fontSize: "110px",
          lineHeight: "110px",
          textTransform: "uppercase",
          mb: "13px",
          children: isToady ? "TODAY" : `${MONTH_ABBREVIATES[day.month()]} ${day.date()}`
        }, void 0, !1, {
          fileName: "app/components/EventComponents/Schedule.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Box, {
          fontSize: "24px",
          lineHeight: "24px",
          textTransform: "uppercase",
          children: [
            day.format("YYYY.MM.DD"),
            " ",
            WEEK_SET[day.day()]
          ]
        }, void 0, !0, {
          fileName: "app/components/EventComponents/Schedule.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.VStack, {
          spacing: "40px",
          mt: "40px",
          children: items.map((item, i) => /* @__PURE__ */ (0, import_react.createElement)(SchedulePanel, {
            ...item,
            key: i
          }))
        }, void 0, !1, {
          fileName: "app/components/EventComponents/Schedule.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/EventComponents/Schedule.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/EventComponents/Schedule.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}, SchedulePanel = ({
  time,
  heading,
  content,
  moreHref
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Flex, {
  direction: "column",
  w: "full",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Box, {
      bg: "secondary.900",
      color: "primary.100",
      textAlign: "center",
      w: "136px",
      lineHeight: "27px",
      h: "27px",
      children: time
    }, void 0, !1, {
      fileName: "app/components/EventComponents/Schedule.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Box, {
      w: "full",
      border: "1px",
      borderStyle: "solid",
      borderColor: "secondary.900",
      bg: "primary.100",
      p: "16px",
      position: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Heading, {
          fontSize: "20px",
          lineHeight: "20px",
          mb: "12px",
          children: heading
        }, void 0, !1, {
          fileName: "app/components/EventComponents/Schedule.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Text, {
          fontSize: "14px",
          color: "secondary.600",
          mb: "29px",
          children: content
        }, void 0, !1, {
          fileName: "app/components/EventComponents/Schedule.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.HStack, {
          spacing: "40px",
          textTransform: "uppercase",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Link, {
              textDecoration: "underline",
              display: "inline-flex",
              alignItems: "center",
              href: moreHref,
              children: [
                "More",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Image, {
                  src: "/assets/svg/home-arrow.svg",
                  w: "16px",
                  h: "16px",
                  ml: "16px"
                }, void 0, !1, {
                  fileName: "app/components/EventComponents/Schedule.tsx",
                  lineNumber: 123,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/EventComponents/Schedule.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Link, {
              textDecoration: "underline",
              display: "inline-flex",
              alignItems: "center",
              children: [
                "ADD Calendar",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Image, {
                  src: "/assets/svg/home-arrow.svg",
                  w: "16px",
                  h: "16px",
                  ml: "16px"
                }, void 0, !1, {
                  fileName: "app/components/EventComponents/Schedule.tsx",
                  lineNumber: 136,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/EventComponents/Schedule.tsx",
              lineNumber: 130,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/EventComponents/Schedule.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/EventComponents/Schedule.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/EventComponents/Schedule.tsx",
  lineNumber: 89,
  columnNumber: 5
}, this);

// app/components/HeadingWithSub/index.tsx
var import_react29 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HeadingWithSub = ({ children, sub, subProps, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Heading, {
  as: "h2",
  textTransform: "uppercase",
  position: "relative",
  ...props,
  children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Box, {
      as: "sup",
      fontSize: "16px",
      top: "-13px",
      lineHeight: "16px",
      ml: "8px",
      fontWeight: "500",
      style: { writingMode: "inherit" },
      ...subProps,
      children: sub
    }, void 0, !1, {
      fileName: "app/components/HeadingWithSub/index.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/HeadingWithSub/index.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this);

// app/routes/event.tsx
var import_react33 = require("react");

// app/components/Filter/index.tsx
var import_react30 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Filter = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react30.Flex, {
  h: "68px",
  textTransform: "uppercase",
  align: "center",
  fontSize: "18px",
  px: "30px"
}, void 0, !1, {
  fileName: "app/components/Filter/index.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this);

// app/routes/event.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), totalCount = 500, baseLineIndex = Math.floor(totalCount / 2), fixedItemHeight = 160, exampleScheduleItem = {
  time: "20:00 \u2013 21:00",
  heading: "#201 DeFi",
  content: `\u6765\u4E86\u6765\u4E86\uFF01DeFi\u677F\u5757\u6765\u4E86\uFF01
          \u6BCF\u5929\u5728\u52A0\u5BC6\u4E16\u754C\u542C\u5230\u5404\u79CDFi\uFF0C\u4EC0\u4E48GameFi\uFF0CSocialFi\uFF0CCommunityFi\uFF0CDaoFi\uFF0C\u8FD8\u6709CeFi\u3002\u3002\u8FD9\u90FD\u662F\u5565~\u554A~~
          \u8FD9\u4E00\u5207Fi\u90FD\u6765\u81EA\u4E00\u79CDFi\uFF0C\u90A3\u5C31\u662F\u9171\u9171~DeFi:tada: :tada:
          \u6765\uFF01\u4ECA\u5929\u5C31\u544A\u8BC9\u4F60\u5230\u5E95\u4EC0\u4E48\u662FDeFi`,
  moreHref: "/event" /* Event */
};
function Event() {
  let scheduleListMap = {
    "2022-6-28": [
      {
        time: "19:00",
        name: "\u4EA7\u54C1\u516C\u4F1A\u5468\u4F1A"
      },
      {
        time: "20:00",
        name: "\u5F00\u53D1\u8005\u516C\u4F1A\u4F1A\u8BAE"
      }
    ],
    "2022-7-28": [
      {
        time: "19:00",
        name: "\u4EA7\u54C1\u516C\u4F1A\u5468\u4F1A"
      },
      {
        time: "20:00",
        name: "\u5F00\u53D1\u8005\u516C\u4F1A\u4F1A\u8BAE"
      }
    ]
  }, location = (0, import_react32.useLocation)(), querySearch = (0, import_react33.useMemo)(
    () => new URLSearchParams(location.search),
    [location]
  ), [selectedDay, setSelectedDay] = (0, import_react33.useState)(
    (0, import_dayjs2.default)(querySearch.get("date") || (0, import_dayjs2.default)())
  ), virtuosoRef = (0, import_react33.useRef)(null);
  return (0, import_react33.useEffect)(() => {
    let timeouts = [50, 100, 150, 200].map(
      (ms) => setTimeout(() => {
        var _a;
        (_a = virtuosoRef.current) == null || _a.scrollToIndex(baseLineIndex);
      }, ms)
    );
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Grid, {
    templateColumns: `calc(100% - ${500}px) ${500}px`,
    h: "full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Grid, {
        templateRows: `${68}px calc(100% - ${68}px)`,
        borderRight: "1px",
        borderStyle: "solid",
        borderColor: "secondary.900",
        h: "full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Grid, {
            templateColumns: `${280}px calc(100% - ${280}px)`,
            borderBottom: "1px",
            borderStyle: "solid",
            borderColor: "secondary.900",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Flex, {
                align: "center",
                bg: "adorn.900",
                h: `${68 - 1}px`,
                px: "20px",
                borderRight: "1px",
                borderStyle: "solid",
                borderColor: "secondary.900",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Image, {
                    src: "/assets/png/event.png",
                    w: "40px",
                    h: "40px"
                  }, void 0, !1, {
                    fileName: "app/routes/event.tsx",
                    lineNumber: 112,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                    color: "primary.100",
                    sub: "\u6D3B\u52A8",
                    ml: "8px",
                    subProps: { fontWeight: "semibold" },
                    children: "EVENT"
                  }, void 0, !1, {
                    fileName: "app/routes/event.tsx",
                    lineNumber: 113,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/event.tsx",
                lineNumber: 103,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {}, void 0, !1, {
                fileName: "app/routes/event.tsx",
                lineNumber: 122,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/event.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Box, {
            ref: virtuosoRef,
            as: import_react_virtuoso3.Virtuoso,
            w: "full",
            h: "full",
            totalCount,
            initialTopMostItemIndex: baseLineIndex,
            fixedItemHeight,
            overscan: fixedItemHeight * 7,
            itemContent: (index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Grid, {
              h: `${fixedItemHeight}px`,
              templateColumns: "repeat(7, calc(100% / 7))",
              borderBottom: "1px",
              borderStyle: "solid",
              borderColor: "secondary.200",
              children: new Array(7).fill(0).map((_, i) => {
                let offset = (index - baseLineIndex - 3) * 7 + i + (7 - (0, import_dayjs2.default)().day()), d = (0, import_dayjs2.default)().add(offset, "day"), m = d.date() === 1 ? MONTH_ABBREVIATES[d.month()] : null, isSameSelectedDay = selectedDay.isSame(d, "date"), opacity = offset < 0 ? 0.3 : 1;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Flex, {
                  to: {
                    pathname: "/event" /* Event */,
                    search: `date=${d.format("YYYY-MM-DD")}`
                  },
                  replace: !0,
                  as: import_react32.Link,
                  borderLeft: "1px",
                  borderStyle: "solid",
                  borderColor: "secondary.200",
                  p: "10px",
                  position: "relative",
                  direction: "column",
                  justify: "space-between",
                  transition: "200ms",
                  _hover: isSameSelectedDay ? {} : {
                    bg: "secondary.100!important"
                  },
                  _last: {
                    borderRight: "0"
                  },
                  style: {
                    backgroundColor: isSameSelectedDay ? offset === 0 ? "var(--chakra-colors-adorn-900)" : "var(--chakra-colors-secondary-900)" : "var(--chakra-colors-primary-100)"
                  },
                  onClick: () => {
                    setSelectedDay(d);
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Box, {
                      color: offset === 0 ? "adorn.900" : "secondary.900",
                      fontSize: offset === 0 ? "24px" : "20px",
                      textDecoration: offset === 0 ? "underline" : "none",
                      mb: "auto",
                      style: {
                        opacity: isSameSelectedDay ? 1 : opacity,
                        color: isSameSelectedDay ? "var(--chakra-colors-primary-100)" : void 0
                      },
                      children: d.date()
                    }, void 0, !1, {
                      fileName: "app/routes/event.tsx",
                      lineNumber: 188,
                      columnNumber: 21
                    }, this),
                    m ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MonthTag, {
                      bg: offset === 0 ? "adorn.900" : "secondary.900",
                      style: {
                        opacity: isSameSelectedDay ? 1 : opacity,
                        color: isSameSelectedDay ? offset === 0 ? "var(--chakra-colors-adorn-900)" : "var(--chakra-colors-secondary-900)" : void 0,
                        backgroundColor: isSameSelectedDay ? "var(--chakra-colors-primary-100)" : void 0
                      },
                      children: m
                    }, void 0, !1, {
                      fileName: "app/routes/event.tsx",
                      lineNumber: 203,
                      columnNumber: 23
                    }, this) : null,
                    offset === 0 && !m ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TodayTag, {}, void 0, !1, {
                      fileName: "app/routes/event.tsx",
                      lineNumber: 220,
                      columnNumber: 43
                    }, this) : null,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScheduleList, {
                      items: scheduleListMap[d.format("YYYY-M-D")],
                      style: {
                        opacity: isSameSelectedDay ? 1 : opacity,
                        color: isSameSelectedDay ? "var(--chakra-colors-primary-100)" : void 0
                      }
                    }, void 0, !1, {
                      fileName: "app/routes/event.tsx",
                      lineNumber: 221,
                      columnNumber: 21
                    }, this)
                  ]
                }, i, !0, {
                  fileName: "app/routes/event.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                }, this);
              })
            }, index, !1, {
              fileName: "app/routes/event.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/event.tsx",
            lineNumber: 124,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/event.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Grid, {
        templateRows: `${68}px calc(100% - ${68}px)`,
        h: "full",
        maxH: `${1012 - 1}px`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Box, {
            w: "full",
            borderBottom: "1px",
            borderStyle: "solid",
            borderColor: "secondary.900",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Filter, {}, void 0, !1, {
              fileName: "app/routes/event.tsx",
              lineNumber: 248,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/event.tsx",
            lineNumber: 242,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Box, {
            w: "full",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Schedule, {
              day: selectedDay,
              items: [
                exampleScheduleItem,
                exampleScheduleItem,
                exampleScheduleItem
              ]
            }, void 0, !1, {
              fileName: "app/routes/event.tsx",
              lineNumber: 251,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/event.tsx",
            lineNumber: 250,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/event.tsx",
        lineNumber: 237,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/event.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async () => {
  throw (0, import_node2.redirect)("/home");
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/routes/start.tsx
var start_exports = {};
__export(start_exports, {
  default: () => Start
});
var import_react37 = require("@chakra-ui/react");

// app/components/StartPageComponents/Window.tsx
var import_react34 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), WindowHeader = ({ icon, text: text2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Grid, {
  px: "16px",
  gap: "8px",
  fontSize: "16px",
  textTransform: "uppercase",
  w: "full",
  templateColumns: "24px calc(100% - 24px - 8px)",
  alignItems: "center",
  children: [
    icon,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Box, {
      as: "span",
      children: text2
    }, void 0, !1, {
      fileName: "app/components/StartPageComponents/Window.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/StartPageComponents/Window.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this), WindowFooterLink = ({
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Link, {
  textTransform: "uppercase",
  w: "full",
  h: "52px",
  lineHeight: "52px",
  bg: "secondary.900",
  color: "primary.100",
  display: "block",
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "semibold",
  target: "_blank",
  _hover: {
    textDecoration: "none"
  },
  ...props,
  children
}, void 0, !1, {
  fileName: "app/components/StartPageComponents/Window.tsx",
  lineNumber: 36,
  columnNumber: 5
}, this), Window = ({
  header,
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Box, {
  border: "1px",
  borderStyle: "solid",
  borderColor: "secondary.900",
  w: "460px",
  ...props,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Grid, {
      h: "40px",
      lineHeight: "40px",
      templateColumns: "calc(100% - 40px) 40px",
      borderBottom: "1px",
      borderStyle: "solid",
      borderColor: "secondary.900",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Box, {
          children: header
        }, void 0, !1, {
          fileName: "app/components/StartPageComponents/Window.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Center, {
          borderLeft: "1px",
          borderStyle: "solid",
          borderColor: "secondary.900",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Image, {
            src: "/assets/svg/close.svg",
            w: "24px",
            h: "24px"
          }, void 0, !1, {
            fileName: "app/components/StartPageComponents/Window.tsx",
            lineNumber: 85,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/StartPageComponents/Window.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/StartPageComponents/Window.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react34.Box, {
      children
    }, void 0, !1, {
      fileName: "app/components/StartPageComponents/Window.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/StartPageComponents/Window.tsx",
  lineNumber: 64,
  columnNumber: 5
}, this);

// app/components/StripeBackground/index.tsx
var import_react35 = require("@chakra-ui/react"), import_react36 = require("@chakra-ui/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), STRIPE_WIDTH = 153, StripeBackground = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react35.Center, {
  w: "full",
  h: "full",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: -1,
  px: "30px",
  pointerEvents: "none",
  ...props,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react36.Box, {
    w: "full",
    h: "inherit",
    bg: "linear-gradient(90deg, var(--chakra-colors-secondary-200) 1px, transparent 0)",
    bgSize: `${STRIPE_WIDTH}px 100%`,
    maxW: `${1440}px`
  }, void 0, !1, {
    fileName: "app/components/StripeBackground/index.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/StripeBackground/index.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this);

// app/routes/start.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Start() {
  let env = useEnv();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollContainer, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
        position: "relative",
        h: "2500px",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
            as: "h1",
            textTransform: "uppercase",
            position: "absolute",
            left: "182px",
            top: "65px",
            fontSize: "100px",
            children: "WELCOME"
          }, void 0, !1, {
            fileName: "app/routes/start.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Image, {
            src: "/assets/svg/start/if_you.svg",
            w: "406px",
            h: "187px",
            transform: "translateX(-92px)",
            position: "absolute",
            left: "182px",
            top: "215px"
          }, void 0, !1, {
            fileName: "app/routes/start.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Text, {
            position: "absolute",
            left: "182px",
            top: "370px",
            lineHeight: "32.4px",
            fontSize: "18px",
            letterSpacing: "0.05em",
            children: [
              "\u60F3\u8FDB\u5165Web3.0\u4E16\u754C\u521B\u4F5C\u5185\u5BB9 ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 54,
                columnNumber: 27
              }, this),
              "\u60F3\u8FDB\u5165Web3.0\u4E16\u754C\u8FDB\u884C\u5F00\u53D1 ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 55,
                columnNumber: 27
              }, this),
              "\u662FWeb3.0\u4E16\u754C\u7684\u8D44\u6E90\u63D0\u4F9B\u8005 ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 56,
                columnNumber: 27
              }, this),
              "\u60F3\u6295\u8D44Web3.0\u7684\u521B\u4F5C\u8005\u7ECF\u6D4E ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 57,
                columnNumber: 27
              }, this),
              "\u60F3\u53C2\u4E0E\u521B\u4F5C\u8005DAO\u7684\u8FD0\u8425\u7B56\u5212"
            ]
          }, void 0, !0, {
            fileName: "app/routes/start.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
            as: "h4",
            fontSize: "40px",
            lineHeight: "72px",
            "letter-spacing": "0.04em",
            position: "absolute",
            left: "182px",
            top: "580px",
            fontWeight: "400",
            children: "\u6B22\u8FCE\u52A0\u5165SeeDAO\uFF01"
          }, void 0, !1, {
            fileName: "app/routes/start.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Image, {
            src: "/assets/png/start_model_poster.png",
            w: "771px",
            h: "693px",
            position: "absolute",
            top: "100px",
            left: "517px",
            zIndex: -2
          }, void 0, !1, {
            fileName: "app/routes/start.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
            position: "absolute",
            left: "182px",
            top: "787px",
            w: "530px",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
                as: "h3",
                fontSize: "60px",
                lineHeight: "108px",
                children: "You can do"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 94,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Text, {
                fontSize: "18px",
                lineHeight: "36px",
                letterSpacing: "0.04em",
                textAlign: "justify",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                children: [
                  "\u52A0\u5165\u5174\u8DA3\u5C0F\u7EC4\uFF0C\u627E\u5230\u5FD7\u540C\u9053\u5408\u7684\u5C0F\u4F19\u4F34\uFF01",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                  }, this),
                  "\u52A0\u5165SeeDAO\u516C\u4F1A\uFF0C\u53D1\u8D77\u9879\u76EE\uFF0C\u5B8C\u5584\u793E\u533A\u751F\u6001\uFF0C\u53C2\u4E0E\u793E\u533A\u5171\u5EFA \uFF01",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 107,
                    columnNumber: 44
                  }, this),
                  "\u81EA\u7531\u53D1\u5E03\u6D3B\u52A8\uFF0C\u6709\u8DA3\u7684\u7075\u9B42\u7EC8\u5C06\u76F8\u9047\uFF01"
                ]
              }, void 0, !0, {
                fileName: "app/routes/start.tsx",
                lineNumber: 97,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/start.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
            position: "absolute",
            left: "796px",
            top: "895px",
            w: "460px",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
                as: "h3",
                fontSize: "60px",
                lineHeight: "108px",
                children: "You can get"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 112,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Text, {
                fontSize: "18px",
                lineHeight: "36px",
                letterSpacing: "0.04em",
                textAlign: "justify",
                textTransform: "uppercase",
                children: [
                  "\u4F60\u53EF\u4EE5\u83B7\u5F97SeeDAO\u4E13\u5C5E\u5DE5\u5206poap\uFF0C\u6BCF\u6B21\u6709\u610F\u4E49\u7684\u8D21\u732E\u90FD\u503C\u5F97\u88AB\u94ED\u8BB0\u3002",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 123,
                    columnNumber: 13
                  }, this),
                  "\u4F60\u53EF\u4EE5\u6210\u4E3A\u6211\u4EEC\u7684\u6838\u5FC3\u8D21\u732E\u8005\uFF0C\u83B7\u5F97\u6CBB\u7406NFT ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 124,
                    columnNumber: 35
                  }, this),
                  "\u4F60\u53EF\u4EE5\u76F4\u63A5\u9886\u53D6\u85AA\u916C\uFF0C\u6709\u4E9B\u5DE5\u4F5C\u662F\u5305\u542B\u9884\u7B97\u7684",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 126,
                    columnNumber: 13
                  }, this),
                  "\u4F60\u53EF\u4EE5\u5728\u516C\u4F1A\u91CC\u548C\u5C0F\u4F19\u4F34\u4E00\u8D77\u63A5\u4E00\u4E9B\u5916\u5305\u83B7\u53D6\u6536\u5165 ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 127,
                    columnNumber: 36
                  }, this),
                  "\u4F60\u53EF\u4EE5\u79EF\u7D2F\u5982\u4F55\u771F\u6B63\u5F00\u5C55\u4E00\u4E2ADAO\u7684\u7ECF\u9A8C ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 128,
                    columnNumber: 33
                  }, this),
                  "\u4F60\u53EF\u4EE5\u63D0\u51FA\u4E00\u4E2Aidea, \u627E\u4E00\u7FA4\u4EBA\uFF0C\u83B7\u53D6seedao\u7684\u8D44\u91D1\u548C\u8D44\u6E90\u652F\u6301\uFF0C\u5B75\u5316\u4E00\u4E2Asubdao ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 130,
                    columnNumber: 46
                  }, this),
                  "\u6700\u540E\uFF0C\u4F60\u53EF\u4EE5\u8BA4\u8BC6\u4E00\u7FA4\u6709\u8DA3\u7684\u4EBA"
                ]
              }, void 0, !0, {
                fileName: "app/routes/start.tsx",
                lineNumber: 115,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/start.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
            position: "absolute",
            left: "182px",
            top: "1246px",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Image, {
                src: "/assets/svg/start/how_to_join.svg",
                w: "516px",
                h: "130px"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 135,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
                as: "h3",
                fontSize: "60px",
                lineHeight: "108px",
                children: "Step1"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 136,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Text, {
                w: "460px",
                fontSize: "18px",
                lineHeight: "36px",
                letterSpacing: "0.04em",
                textAlign: "justify",
                textTransform: "uppercase",
                children: [
                  "\u52A0\u5165Seedao Discord\uFF0C",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 148,
                    columnNumber: 13
                  }, this),
                  "\u4F60\u53EF\u4EE5\u628A\u8FD9\u91CC\u60F3\u8C61\u6210\u662F\u4E00\u4E2A\u865A\u62DF\u4E16\u754C\u91CC\u805A\u96C6\u521B\u4F5C\u8005\u7684\u5927\u201C\u5DE5\u5382\u201D\uFF0C\u800C\u5404\u4E2A\u4E0D\u540C\u7684\u201C\u7C7B\u522B\u201D\u5C31\u662F\u5DE5\u5382\u7684\u5382\u533A\uFF0C\u9891\u9053\u5C31\u662F\u5382\u533A\u5185\u7684\u5382\u623F\u6216\u8005\u8F66\u95F4\u3002"
                ]
              }, void 0, !0, {
                fileName: "app/routes/start.tsx",
                lineNumber: 139,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Link, {
                display: "flex",
                alignItems: "center",
                textDecoration: "underline",
                mt: "30px",
                textTransform: "uppercase",
                href: env.DISCORD_URL,
                target: "_blank",
                children: [
                  "More",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Image, {
                    src: "/assets/svg/home-arrow.svg",
                    w: "16px",
                    h: "16px",
                    ml: "16px"
                  }, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 161,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/start.tsx",
                lineNumber: 151,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/start.tsx",
            lineNumber: 134,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Window, {
            header: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WindowHeader, {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Image, {
                src: "/assets/svg/social/discord.svg",
                w: "24px",
                h: "24px"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 173,
                columnNumber: 17
              }, this),
              text: "Discord"
            }, void 0, !1, {
              fileName: "app/routes/start.tsx",
              lineNumber: 171,
              columnNumber: 13
            }, this),
            left: "796px",
            top: "1494px",
            position: "absolute",
            bg: "primary.100",
            w: "460px",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Grid, {
                px: "30px",
                pt: "30px",
                pb: "58px",
                templateColumns: "100px calc(100% - 100px - 20px)",
                gap: "20px",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Image, {
                    src: "/assets/png/seedao_logo.png"
                  }, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Text, {
                        fontSize: "20px",
                        lineHeight: "20px",
                        mb: "10px",
                        children: "You have been invited to join"
                      }, void 0, !1, {
                        fileName: "app/routes/start.tsx",
                        lineNumber: 193,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
                        as: "h5",
                        fontSize: "32px",
                        lineHeight: "32px",
                        children: "SEEDAO"
                      }, void 0, !1, {
                        fileName: "app/routes/start.tsx",
                        lineNumber: 196,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.HStack, {
                        mt: "18px",
                        spacing: "20px",
                        fontSize: "16px",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Flex, {
                            align: "center",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
                                bg: "pass.100",
                                w: "6px",
                                h: "6px",
                                mr: "7px",
                                rounded: "10px"
                              }, void 0, !1, {
                                fileName: "app/routes/start.tsx",
                                lineNumber: 201,
                                columnNumber: 19
                              }, this),
                              "1,597 Online"
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/start.tsx",
                            lineNumber: 200,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Flex, {
                            align: "center",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
                                bg: "pass.100",
                                w: "6px",
                                h: "6px",
                                mr: "7px",
                                rounded: "10px"
                              }, void 0, !1, {
                                fileName: "app/routes/start.tsx",
                                lineNumber: 205,
                                columnNumber: 19
                              }, this),
                              "85,81 Members"
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/start.tsx",
                            lineNumber: 204,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/start.tsx",
                        lineNumber: 199,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 192,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/start.tsx",
                lineNumber: 184,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WindowFooterLink, {
                href: env.DISCORD_URL,
                children: "accept invitation"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 211,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/start.tsx",
            lineNumber: 169,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Window, {
            header: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WindowHeader, {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Image, {
                src: "/assets/svg/social/notion.svg",
                w: "24px",
                h: "24px"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 219,
                columnNumber: 17
              }, this),
              text: "Seedao-wiki"
            }, void 0, !1, {
              fileName: "app/routes/start.tsx",
              lineNumber: 217,
              columnNumber: 13
            }, this),
            w: "306px",
            left: "182px",
            top: "1990px",
            position: "absolute",
            bg: "primary.100",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
                pt: "20px",
                px: "16px",
                pb: "38px",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
                    as: "h5",
                    fontSize: "32px",
                    mb: "10px",
                    children: "\u{1F31D}"
                  }, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 231,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
                    as: "h5",
                    fontSize: "32px",
                    mb: "10px",
                    textTransform: "uppercase",
                    children: "SEEDAO-wiki"
                  }, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 234,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Text, {
                    fontSize: "14px",
                    children: "SeeDAO\u5411\u4E00\u5207\u8BA4\u540C Web3.0\uFF0C\u5E0C\u671B\u6539\u5199Web2.0 \u521B\u4F5C\u8005\u7ECF\u6D4E\u6A21\u5F0F\u7684\u4EBA\u4EEC\u655E\u5F00\u3002"
                  }, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 242,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/start.tsx",
                lineNumber: 230,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WindowFooterLink, {
                href: env.NOTION_URL,
                children: "Open in notion"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 246,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/start.tsx",
            lineNumber: 215,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Box, {
            left: "796px",
            top: "1870px",
            position: "absolute",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Heading, {
                as: "h3",
                fontSize: "60px",
                lineHeight: "108px",
                children: "Step1"
              }, void 0, !1, {
                fileName: "app/routes/start.tsx",
                lineNumber: 251,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react37.Text, {
                w: "460px",
                fontSize: "18px",
                lineHeight: "36px",
                letterSpacing: "0.04em",
                textAlign: "justify",
                textTransform: "uppercase",
                children: [
                  "\u6253\u5F00Seedao WIKI\uFF0C",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 263,
                    columnNumber: 13
                  }, this),
                  "\u5728\u8FD9\u91CC\uFF0C\u4F60\u53EF\u4EE5\u627E\u5230\u4E00\u5207\u4F60\u611F\u5174\u8DA3\u7684\u5185\u5BB9",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 265,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 266,
                    columnNumber: 13
                  }, this),
                  "\u{1F698} \u65B0\u624B\u6307\u5F15 - \u8FDB\u5165SeeDAO\u524D\uFF0C\u5148\u770B\u8FD9\u91CC\u4E86\u89E3\u6211\u4EEC",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 268,
                    columnNumber: 13
                  }, this),
                  "\u{1F4D1} \u6CBB\u7406\u6587\u6863 - \u6700\u91CD\u8981\u7684\u6CBB\u7406\u89C4\u5219\uFF0C\u786E\u4FDD\u4F60\u8BA4\u53EF\u540E\u518D\u52A0\u5165",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 270,
                    columnNumber: 13
                  }, this),
                  "\u{1F64C}\u{1F3FB} \u516C\u4F1A - \u516C\u4F1A\u662F\u4EBA\u624D\u805A\u96C6\u8FDB\u884C\u7EB5\u5411\u6CBB\u7406\u7684\u5355\u5143",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 272,
                    columnNumber: 13
                  }, this),
                  "\u{1F491} \u9879\u76EE - \u9879\u76EE\u662F\u6A2A\u5411\u94FE\u63A5\u516C\u4F1A\u8FDB\u884C\u521B\u9020\u7684\u5730\u65B9",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 274,
                    columnNumber: 13
                  }, this),
                  "\u{1F4D2} \u77E5\u8BC6\u5E93 - \u6559\u80B2\u662Fseedao\u7684\u65E5\u5E38\u5DE5\u4F5C",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 276,
                    columnNumber: 13
                  }, this),
                  "\u{1F5C2} \u7D20\u6750\u5E93",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 278,
                    columnNumber: 13
                  }, this),
                  "\u{1F4DD} \u63D0\u6848\u533A",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/start.tsx",
                    lineNumber: 280,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/start.tsx",
                lineNumber: 254,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/start.tsx",
            lineNumber: 250,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/start.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StripeBackground, {}, void 0, !1, {
        fileName: "app/routes/start.tsx",
        lineNumber: 284,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/start.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var home_exports2 = {};
__export(home_exports2, {
  default: () => Home
});
var import_react55 = require("@remix-run/react"), import_react56 = require("@chakra-ui/react"), import_react57 = require("react");

// app/assets/png/seedao_index_poster.png
var seedao_index_poster_default = "/build/_assets/seedao_index_poster-EEHDQBLX.png";

// app/assets/video/seedao_index.mp4
var seedao_index_default = "/build/_assets/seedao_index-2MZYRQXI.mp4";

// app/routes/home.tsx
var import_react58 = require("@remix-run/react");

// app/components/CollapseBar/index.tsx
var import_react38 = require("@chakra-ui/react"), import_react39 = require("@remix-run/react"), import_framer_motion3 = require("framer-motion");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), CollapseBar = ({
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
  as: import_react39.Link,
  display: "block",
  w: `${60}px`,
  minW: `${60}px`,
  h: "full",
  bg: "primary.100",
  shadow: SHADOW_BORDER,
  overflow: "hidden",
  _hover: {
    textDecoration: "none"
  },
  ...props,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Flex, {
    as: import_framer_motion3.motion.div,
    alignItems: "center",
    w: `calc(100vh - ${68}px)`,
    h: `${60}px`,
    pl: "27px",
    transform: "rotate(90deg) translateY(-100%)",
    transformOrigin: "left top",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Box, {
      children
    }, void 0, !1, {
      fileName: "app/components/CollapseBar/index.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/CollapseBar/index.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/CollapseBar/index.tsx",
  lineNumber: 17,
  columnNumber: 5
}, this);

// app/routes/home/index.tsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeIndex
});
var import_react48 = require("@chakra-ui/react");

// app/components/HomeComponents/index.tsx
var import_react45 = require("@chakra-ui/react");

// app/data/IncubatinProjectItems.ts
var LinkTypeSet = ["website", "notion", "discord"], IncubatinProjectItems = [
  {
    title: "META SHANGHAI",
    link: {
      website: "https://shanghaidao.xyz/home"
    },
    description: "MetaShanghai \u662F SeeDAO \u5B75\u5316\u7684\u7B2C\u4E00\u4E2A\u9879\u76EE\u3002\u81EA\u53BB\u5E7412\u6708\u4F0A\u59CB\u81F3\u4ECA\uFF0C\u5B83\u7ECF\u5386\u4E86\u591A\u6B21\u8F6C\u578B\u4E0E\u91CD\u6784\u3002\u4ECE\u521B\u610F\u53D1\u8D77\u5230\u5171\u8BC6\u78E8\u5408\uFF0C\u6211\u4EEC\u9010\u6E10\u805A\u96C6\u4E86\u7B2C\u4E00\u6279\u6D3B\u8DC3\u6210\u5458\uFF0C\u57281\u6708\u5F00\u529E\u4E86\u7EBF\u4E0B\u89C1\u9762\u4F1A\uFF0C\u5B8C\u6210\u4E86\u9879\u76EE\u8DEF\u6F14\u4E4B\u540E\u6211\u4EEC\u5206\u522B\u57281\u6708\u672B\u548C2\u6708\u4E2D\u65EC\u7B79\u529E\u4E86\u4E24\u6B21\u5143\u5B87\u5B99\u4E0A\u6D77\u6D3B\u52A8\uFF1A#\u65B0\u5E74\u7948\u798F \xB7 \u6765\u5143\u5B87\u5B99\u57CE\u968D\u5E99\u62BD\u798F\u7B7E & #\u60C5\u4EBA\u8282 \xB7 \u4EBA\u6C11\u5E7F\u573A\u76F8\u4EB2\u89D2\uFF0C\u5C06\u57FA\u4E8E Web2.0 \u7684\u793E\u4EA4\u5173\u7CFB\u5728 Web3.0 \u4E0A\u8FDB\u884C\u73A9\u6CD5\u521B\u65B0\u3002",
    img: "/assets/png/incubatin_projects/sh.png"
  },
  {
    title: "DeSchool",
    link: {
      notion: "https://rowan-mollusk-a75.notion.site/DeSchool-Project-Page-c550b8c69fa8489f98e472a243d9fd64"
    },
    description: "\u4E3A\u540C\u65F6\u53C2\u4E0E\u591A\u4E2ADAO\u7684DAOers\u6253\u9020\u4E00\u7AD9\u5F0F\u5B66\u4E60+\u5DE5\u4F5C+web3\u5C65\u5386\u7684\u5E73\u53F0\uFF0C\u6210\u4E3AWeb3\u7684Coursera+LinkedIn+Fiverr\u3002",
    img: "/assets/png/incubatin_projects/deschool.png"
  },
  {
    title: "Web3 \u5927\u5B66",
    link: {
      notion: "https://rowan-mollusk-a75.notion.site/00684d23d81b419d936cdd7304fea61f?v=db969135ef0c4b30a9de9e3a0cb17efc"
    },
    description: "\u5728Web3\u5EFA\u8BBE\u4E00\u5EA7\u6CA1\u6709\u56F4\u5899\u7684\u5927\u5B66\u3002\u8BA9\u884C\u4E1A\u5148\u9A71\u51B3\u5B9A\u65B9\u5411\uFF0C\u8BA9\u5B66\u8005\u51B3\u5B9A\u65B9\u5F0F\uFF0C\u8BA9\u5B66\u751F\u51B3\u5B9A\u8BFE\u7A0B\u3002\u8BA9\u201C\u94FE\u4E0A\u5B66\u672F\u5171\u540C\u4F53\u201D\u5728\u8FD9\u91CC\u53D1\u751F\u3002",
    img: "/assets/png/incubatin_projects/web3.png"
  },
  {
    title: "\u516C\u5730\u5267\u573A\u7814\u7A76\u6240",
    link: {
      notion: "https://rowan-mollusk-a75.notion.site/Impact-DAOs-Public-Goods-5915e73f236e48c2ac1840b4b9c6fd79"
    },
    description: "\u201C\u516C\u5730\u5267\u573A\u7814\u7A76\u6240\u201D\u662F\u4E00\u4E2A\u65B0\u751F\u7684\u52A0\u5BC6\u539F\u751F\u5B66\u672F\u7EC4\u7EC7\u3002\u59CB\u4E8E2022\u5E74\u6625\u5929\uFF0C\u6211\u4EEC\u5411\u6240\u6709\u7231\u667A\u6C42\u771F\u7684\u9752\u5E74\u53D1\u51FA\u4E86\u96C6\u7ED3\u4EE4\uFF0C\u65E8\u5728\u5F00\u8F9F\u4E00\u7247web3.0\u7684\u667A\u6027\u516C\u5730\uFF0C\u5171\u540C\u63A2\u8BA8\u6570\u5B57\u516C\u5171\u6027\u3001\u6709\u6548\u5229\u4ED6\u4E3B\u4E49\u548C\u66F4\u597D\u7684\u4EBA\u7C7B\u672A\u6765\u3002",
    img: "/assets/png/incubatin_projects/gdjc.png"
  },
  {
    title: "C-Combinator",
    link: {
      website: "https://beta.seedao.cc/"
    },
    description: "\u5B75\u5316\u5668\u662FSeeDAO\u5B75\u5316\u4E1A\u52A1\u7684\u4E3B\u8981\u6280\u672F\u5E73\u53F0\uFF0C\u53EF\u4EE5\u5E2E\u52A9web3\u9886\u57DF\u7684\u521B\u65B0\u4F01\u4E1A\u52A0\u901F\u6210\u957F\uFF0C\u5FEB\u901F\u843D\u5730\u3002",
    img: "/assets/png/incubatin_projects/c-com.jpg"
  }
];

// app/components/HomeComponents/HomePageScrollItem.tsx
var import_react40 = require("@chakra-ui/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HOME_PAGE_SCROLL_ITEM_WIDTH = 220, HomePageScrollItem = ({
  date,
  time,
  title,
  description,
  href
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Flex, {
  direction: "column",
  w: `${HOME_PAGE_SCROLL_ITEM_WIDTH}px`,
  minW: `${HOME_PAGE_SCROLL_ITEM_WIDTH}px`,
  h: "inherit",
  px: `${PADDING_X}px`,
  py: `${PADDING_Y}px`,
  borderRight: "1px",
  borderStyle: "solid",
  borderColor: "secondary.900",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Heading, {
      as: "h4",
      fontSize: "20px",
      children: [
        date,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Box, {
          as: "span",
          fontSize: "16px",
          color: "secondary.500",
          ml: "10px",
          children: time
        }, void 0, !1, {
          fileName: "app/components/HomeComponents/HomePageScrollItem.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/HomeComponents/HomePageScrollItem.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Heading, {
      as: "h3",
      mt: "20px",
      fontSize: "18px",
      w: "full",
      noOfLines: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      children: title
    }, void 0, !1, {
      fileName: "app/components/HomeComponents/HomePageScrollItem.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Text, {
      mt: "10px",
      fontSize: "13px",
      noOfLines: 8,
      overflowX: "hidden",
      overflowY: "auto",
      textOverflow: "ellipsis",
      children: description
    }, void 0, !1, {
      fileName: "app/components/HomeComponents/HomePageScrollItem.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Link, {
      display: "inline-flex",
      alignItems: "center",
      mt: "auto",
      textTransform: "uppercase",
      textDecoration: "underline",
      lineHeight: "20px",
      fontWeight: "semibold",
      href,
      target: "_blank",
      children: [
        "JOIN",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react40.Image, {
          src: "/assets/svg/home-arrow.svg",
          ml: "20px",
          w: "24px",
          h: "24px"
        }, void 0, !1, {
          fileName: "app/components/HomeComponents/HomePageScrollItem.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/HomeComponents/HomePageScrollItem.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/HomeComponents/HomePageScrollItem.tsx",
  lineNumber: 22,
  columnNumber: 3
}, this);

// app/components/HomeComponents/HomePageScrollContainer.tsx
var import_react41 = __toESM(require("react")), import_react42 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), HomePageScrollContainer = import_react41.default.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react42.Flex, {
  overflowX: "auto",
  overflowY: "hidden",
  w: "full",
  h: "320px",
  scrollBehavior: "smooth",
  ref,
  border: "1px solid",
  borderColor: "secondary.900",
  css: {
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
      borderTop: "1px",
      borderBottom: "0",
      borderLeft: "0",
      borderRight: "0",
      borderStyle: "solid",
      borderColor: "var(--chakra-colors-secondary-900)"
    },
    "&::-webkit-scrollbar-track": {
      width: "4px",
      height: "4px"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--chakra-colors-secondary-900)"
    }
  },
  ...props,
  children
}, void 0, !1, {
  fileName: "app/components/HomeComponents/HomePageScrollContainer.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));

// app/components/HomeComponents/SerialNumberContainer.tsx
var import_react43 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SerialNumberContainer = ({ value, children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react43.Box, {
  position: "relative",
  ...props,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react43.Center, {
      w: "36px",
      h: "36px",
      bg: "secondary.900",
      position: "absolute",
      top: "0",
      right: "0",
      color: "primary.100",
      fontSize: "20px",
      fontWeight: "700",
      children: value
    }, void 0, !1, {
      fileName: "app/components/HomeComponents/SerialNumberContainer.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    children
  ]
}, void 0, !0, {
  fileName: "app/components/HomeComponents/SerialNumberContainer.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this);

// app/components/HomeComponents/ScrollButtons.tsx
var import_react44 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ScrollButtons = ({ leftButtonProps, rightButtonProps, ...props }) => {
  let buttonProps = {
    variant: "unstyled",
    h: "32px",
    w: "32px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    bg: "secondary.900",
    rounded: "0",
    minW: "unset"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.HStack, {
    spacing: "8px",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Button, {
        ...buttonProps,
        ...leftButtonProps,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Image, {
          src: "/assets/svg/scroll-arrow-left.svg",
          w: "20px"
        }, void 0, !1, {
          fileName: "app/components/HomeComponents/ScrollButtons.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/HomeComponents/ScrollButtons.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Button, {
        ...buttonProps,
        ...rightButtonProps,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Image, {
          src: "/assets/svg/scroll-arrow-right.svg",
          w: "20px"
        }, void 0, !1, {
          fileName: "app/components/HomeComponents/ScrollButtons.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/HomeComponents/ScrollButtons.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/HomeComponents/ScrollButtons.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// app/components/HomeComponents/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PADDING_Y = 25, PADDING_X = 30, LinkTypeIconMap = {
  website: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Image, {
    src: "/assets/svg/website.svg",
    alt: "website",
    w: "20px",
    h: "20px"
  }, void 0, !1, {
    fileName: "app/components/HomeComponents/index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this),
  notion: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Image, {
    src: "/assets/svg/social/notion.svg",
    alt: "notion",
    w: "20px",
    h: "20px"
  }, void 0, !1, {
    fileName: "app/components/HomeComponents/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this),
  discord: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Image, {
    src: "/assets/svg/social/discord.svg",
    alt: "discord",
    w: "20px",
    h: "20px"
  }, void 0, !1, {
    fileName: "app/components/HomeComponents/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this)
}, Projects = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Flex, {
  w: "full",
  direction: "column",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Box, {
      py: `${PADDING_Y}px`,
      px: `${PADDING_X}px`,
      borderBottom: "1px",
      borderStyle: "solid",
      borderColor: "secondary.900",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
        sub: "\u5B75\u5316\u9879\u76EE",
        children: "Projects"
      }, void 0, !1, {
        fileName: "app/components/HomeComponents/index.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/HomeComponents/index.tsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    IncubatinProjectItems.map((project, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Flex, {
      h: "380px",
      borderBottom: "1px",
      borderStyle: "solid",
      borderColor: "secondary.900",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Flex, {
          flex: 1,
          pl: `${PADDING_X}px`,
          pr: "50px",
          py: `${PADDING_Y}px`,
          direction: "column",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Heading, {
              as: "h2",
              children: project.title
            }, void 0, !1, {
              fileName: "app/components/HomeComponents/index.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Text, {
              mt: "20px",
              fontSize: "16px",
              children: project.description
            }, void 0, !1, {
              fileName: "app/components/HomeComponents/index.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.HStack, {
              mt: "auto",
              children: LinkTypeSet.filter((type) => project.link[type]).map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Link, {
                href: project.link[type],
                target: "_blank",
                children: LinkTypeIconMap[type]
              }, type, !1, {
                fileName: "app/components/HomeComponents/index.tsx",
                lineNumber: 68,
                columnNumber: 15
              }, this))
            }, void 0, !1, {
              fileName: "app/components/HomeComponents/index.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/HomeComponents/index.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Image, {
          src: project.img,
          alt: project.title,
          w: "260px",
          h: "full",
          objectFit: "cover",
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Box, {
            w: "260px",
            bg: "rgba(255, 255, 255, 0.1)"
          }, void 0, !1, {
            fileName: "app/components/HomeComponents/index.tsx",
            lineNumber: 80,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/components/HomeComponents/index.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      ]
    }, i, !0, {
      fileName: "app/components/HomeComponents/index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this))
  ]
}, void 0, !0, {
  fileName: "app/components/HomeComponents/index.tsx",
  lineNumber: 37,
  columnNumber: 3
}, this);

// app/hooks/useScrollButtons.ts
var import_react46 = require("react"), import_rxjs2 = require("rxjs");
function useScrollButtons(options) {
  var _a;
  let ref = (0, import_react46.useRef)(null), [scrollX, setScrollX] = (0, import_react46.useState)(0), [isLeftmost, setIsLeftmost] = (0, import_react46.useState)(!0), [isRightmost, setIsRightmost] = (0, import_react46.useState)(!0), step = (options == null ? void 0 : options.step) || ((_a = ref.current) == null ? void 0 : _a.clientWidth) || 200, onScrollToRightByStep = (0, import_react46.useCallback)(() => {
    !ref.current || (ref.current.scrollLeft = scrollX + step);
  }, [step, scrollX]), onScrollToLeftByStep = (0, import_react46.useCallback)(() => {
    !ref.current || (ref.current.scrollLeft = scrollX - step);
  }, [step, scrollX]);
  return (0, import_react46.useEffect)(() => {
    let el = ref.current;
    if (!el)
      return () => {
      };
    setIsRightmost(el.scrollLeft >= el.scrollWidth - el.clientWidth), setIsLeftmost(el.scrollLeft === 0), setScrollX(el.scrollLeft);
    let refScrollSubscriber = (0, import_rxjs2.fromEvent)(el, "scroll").subscribe((e) => {
      let target = e.target;
      setIsRightmost(
        target.scrollLeft >= target.scrollWidth - target.clientWidth
      ), setIsLeftmost(target.scrollLeft === 0), setScrollX(target.scrollLeft);
    });
    return () => {
      refScrollSubscriber.unsubscribe();
    };
  }, []), {
    ref,
    scrollX,
    isLeftmost,
    isRightmost,
    onScrollToRightByStep,
    onScrollToLeftByStep
  };
}

// app/routes/home/index.tsx
var import_react49 = require("@remix-run/react");

// app/data/guilds.ts
var GuildItems = [
  {
    name: "\u5F00\u53D1\u8005\u516C\u4F1A",
    img: "/assets/png/guilds/developer.png",
    icon: "/assets/svg/guilds/developer.svg",
    link: {
      notion: "https://www.notion.so/98972f9683b74c419212c1e7ce53e725"
    }
  },
  {
    name: "\u5BA3\u4F20\u516C\u4F1A",
    img: "/assets/png/guilds/propaganda.png",
    icon: "/assets/svg/guilds/propaganda.svg",
    link: {
      notion: "https://www.notion.so/6ca8cea0977a4478b20ac0f2c5a2eec6"
    }
  },
  {
    name: `\u5143\u5B87\u5B99
\u5EFA\u7B51\u5E08\u516C\u4F1A`,
    img: "/assets/png/guilds/metaverse_architect.png",
    icon: "/assets/svg/guilds/metaverse_architect.svg",
    link: {
      notion: "https://www.notion.so/4da6dceab15f42e8a17d6efe720da47d"
    }
  },
  {
    name: "\u4EA7\u54C1\u516C\u4F1A",
    img: "/assets/png/guilds/product.png",
    icon: "/assets/svg/guilds/product.svg",
    link: {
      notion: "https://www.notion.so/b625d595e1f84776877e1a41ee7a6b9c"
    }
  },
  {
    name: "\u8BBE\u8BA1\u8005\u516C\u4F1A",
    img: "/assets/png/guilds/designer.png",
    icon: "/assets/svg/guilds/designer.svg",
    link: {
      notion: "https://www.notion.so/7e6e6f0a17d74b0ea17893c97ee2f534"
    }
  },
  {
    name: "\u8FD0\u8425\u516C\u4F1A",
    img: "/assets/png/guilds/operator.png",
    icon: "/assets/svg/guilds/operator.svg",
    link: {
      notion: "https://www.notion.so/c6dfe75429f1428e90d89dd25b26269e"
    }
  },
  {
    name: "\u7FFB\u8BD1\u8005\u516C\u4F1A",
    img: "/assets/png/guilds/translator.png",
    icon: "/assets/svg/guilds/translator.svg",
    link: {
      notion: "https://www.notion.so/d498b5e6919d4f2295bb76f80c83c4bf"
    }
  },
  {
    name: "\u6295\u7814\u516C\u4F1A",
    img: "/assets/png/guilds/investment_and_research.png",
    icon: "/assets/svg/guilds/investment_and_research.svg",
    link: {
      notion: "https://www.notion.so/2600c97348cd415783b0af644c4765d3"
    }
  },
  {
    name: "\u827A\u672F\u516C\u4F1A",
    img: "/assets/png/guilds/art.png",
    icon: "/assets/svg/guilds/art.svg",
    link: {
      notion: "https://www.notion.so/4eaceae349164435a81d9b766ccd46aa"
    }
  }
];

// app/routes/home/index.tsx
var import_swr = __toESM(require("swr"));

// app/api/index.ts
var import_axios = __toESM(require("axios")), API = class {
  constructor(baseURL, options) {
    let prefix = (options == null ? void 0 : options.prefix) || "/api/v1";
    this.axiosInstance = import_axios.default.create({
      baseURL: baseURL + prefix
    });
  }
  async getHomeStatisticalData() {
    return this.axiosInstance.post("/info/basic").then((res) => res.data.data);
  }
  async getHomeEventItems() {
    return this.axiosInstance.post("/events/all").then((res) => res.data.data);
  }
  async getHomeNewsItems() {
    return this.axiosInstance.post("/news/all").then((res) => res.data.data);
  }
  async getTask() {
    return this.axiosInstance.post("/tasks/all").then((res) => res.data.data);
  }
  async getSgnStatisticalData() {
    return this.axiosInstance.post("/info/sgn").then((res) => res.data.data);
  }
};

// app/hooks/useAPI.ts
var import_react47 = require("react");
function useAPI() {
  let { SERVER_URL } = useEnv();
  return (0, import_react47.useMemo)(() => new API(SERVER_URL), [SERVER_URL]);
}

// app/routes/home/index.tsx
var import_dayjs3 = __toESM(require("dayjs")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), WelCome = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
  direction: "column",
  w: "full",
  h: "412px",
  borderBottom: "1px",
  borderStyle: "solid",
  borderColor: "secondary.900",
  pt: `${PADDING_Y}px`,
  pb: "40px",
  px: `${PADDING_X}px`,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
      sub: "\u6B22\u8FCE\u52A0\u5165SEEDAO",
      mb: "22px",
      children: "WELCOME"
    }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Text, {
          fontSize: "16px",
          lineHeight: "27px",
          fontWeight: "400",
          children: "\u5143\u5B87\u5B99\u5728\u547C\u5524\u521B\u4F5C\u8005\uFF0C\u4E00\u573A\u524D\u6240\u672A\u6709\u7684\u7EC4\u7EC7\u5F62\u6001\u53D8\u9769\u4E5F\u5728\u547C\u5524\u521B\u4F5C\u8005\u3002SeeDAO\u6B63\u662F\u56E0\u6B64\u800C\u8BBE\u3002\u6211\u4EEC\u7684\u613F\u666F\u662F\u5E2E\u52A9\u4E00\u5207\u60F3\u8981\u4ECEWeb2.0\u4E16\u754C\u6765\u5230Web3.0\u7684\u521B\u4F5C\u8005\uFF0C\u6210\u4E3A\u4F60\u4EEC\u53EF\u4FE1\u7684\u6865\u6881\u548C\u52A9\u624B\u3002\u6216\u8BB8\u4F60\u4EEC\u6B63\u5728\u4E3A\u4E0D\u4F1A\u8C03\u7528Web3.0\u7684\u5DE5\u5177\u800C\u56F0\u60D1\uFF0C\u4E3A\u4E0D\u77E5\u5982\u4F55\u542F\u52A8\u793E\u533A\u800C\u82E6\u607C\uFF0C\u4E3A\u4E0D\u77E5\u5982\u4F55\u540C\u5176\u4ED6\u793E\u533A\u534F\u540C\u800C\u7126\u8651\u3002SeeDAO\u6B63\u662F\u4E3A\u4F60\u4EEC\u800C\u8BBE\u3002"
        }, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Image, {
          src: "/assets/svg/welcome-icon.svg",
          w: "64px",
          h: "64px",
          ml: "56px"
        }, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Link, {
      as: import_react49.Link,
      display: "inline-flex",
      alignItems: "center",
      mt: "auto",
      textTransform: "uppercase",
      textDecoration: "underline",
      lineHeight: "20px",
      fontWeight: "semibold",
      to: "/home/about" /* HomeAbout */,
      children: [
        "Learn more",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Image, {
          src: "/assets/svg/home-arrow.svg",
          w: "24px",
          h: "24px",
          ml: "20px"
        }, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 65,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 33,
  columnNumber: 3
}, this), Events = () => {
  let {
    ref: scrollContainerRef,
    isLeftmost,
    isRightmost,
    onScrollToRightByStep,
    onScrollToLeftByStep
  } = useScrollButtons({ step: HOME_PAGE_SCROLL_ITEM_WIDTH * 3 }), api = useAPI(), { data: homeEvent } = (0, import_swr.default)(["GetHomeEventItems" /* GetHomeEventItems */], async () => api.getHomeEventItems());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
    w: "full",
    direction: "column",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
        py: `${PADDING_Y}px`,
        px: `${PADDING_X}px`,
        borderBottom: "1px",
        borderStyle: "solid",
        borderColor: "secondary.900",
        align: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
            sub: "\u6D3B\u52A8",
            mr: "8px",
            children: "EVENTS"
          }, void 0, !1, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollButtons, {
            leftButtonProps: {
              disabled: isLeftmost,
              onClick: onScrollToLeftByStep
            },
            rightButtonProps: {
              disabled: isRightmost,
              onClick: onScrollToRightByStep
            }
          }, void 0, !1, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomePageScrollContainer, {
        ref: scrollContainerRef,
        children: homeEvent == null ? void 0 : homeEvent.events.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomePageScrollItem, {
          date: (0, import_dayjs3.default)(event.time).format("MM.DD"),
          time: (0, import_dayjs3.default)(event.time).format("HH:mm"),
          title: event.subject,
          description: event.content,
          href: event.link
        }, event.time + event.subject + event.content, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}, News = () => {
  var _a;
  let {
    ref: scrollContainerRef,
    isLeftmost,
    isRightmost,
    onScrollToRightByStep,
    onScrollToLeftByStep
  } = useScrollButtons({ step: HOME_PAGE_SCROLL_ITEM_WIDTH * 3 }), api = useAPI(), { data: homeNews } = (0, import_swr.default)(["GetHomeNewItems" /* GetHomeNewItems */], async () => api.getHomeNewsItems());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
    w: "full",
    direction: "column",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
        py: `${PADDING_Y}px`,
        px: `${PADDING_X}px`,
        borderBottom: "1px",
        borderStyle: "solid",
        borderColor: "secondary.900",
        align: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
            sub: "\u8D44\u8BAF",
            mr: "8px",
            children: "NEWS"
          }, void 0, !1, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 146,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollButtons, {
            leftButtonProps: {
              disabled: isLeftmost,
              onClick: onScrollToLeftByStep
            },
            rightButtonProps: {
              disabled: isRightmost,
              onClick: onScrollToRightByStep
            }
          }, void 0, !1, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 149,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 138,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomePageScrollContainer, {
        ref: scrollContainerRef,
        children: (_a = homeNews == null ? void 0 : homeNews.news) == null ? void 0 : _a.map((newItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomePageScrollItem, {
          date: (0, import_dayjs3.default)(newItem.time).format("MM.DD"),
          time: (0, import_dayjs3.default)(newItem.time).format("HH:mm"),
          title: newItem.subject,
          description: newItem.content,
          href: newItem.link
        }, newItem.time + newItem.subject + newItem.content, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 160,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}, Guilds = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
  w: "full",
  direction: "column",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Box, {
      py: `${PADDING_Y}px`,
      px: `${PADDING_X}px`,
      borderBottom: "1px",
      borderStyle: "solid",
      borderColor: "secondary.900",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
        sub: "\u516C\u4F1A",
        children: "GUILDS"
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 185,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 178,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Grid, {
      templateColumns: "repeat(4, 25%)",
      borderBottom: "1px",
      borderStyle: "solid",
      borderColor: "secondary.900",
      children: [
        GuildItems.map((guild, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.AspectRatio, {
          ratio: 1,
          margin: "0 -1px -1px 0",
          borderBottom: "1px",
          borderRight: "1px",
          borderStyle: "solid",
          borderColor: "secondary.900",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
            direction: "column",
            p: "20px",
            as: "a",
            target: "_blank",
            href: guild.link.notion,
            position: "relative",
            _hover: { bg: "secondary.100" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Center, {
                top: "30px",
                left: "0",
                w: "full",
                position: "absolute",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Image, {
                  src: guild.img,
                  alt: guild.name,
                  w: "80px",
                  h: "80px",
                  objectFit: "cover"
                }, void 0, !1, {
                  fileName: "app/routes/home/index.tsx",
                  lineNumber: 213,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/home/index.tsx",
                lineNumber: 212,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
                mt: "auto",
                w: "full",
                align: "center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Text, {
                    as: "h5",
                    fontSize: "16px",
                    whiteSpace: "pre",
                    lineHeight: "16px",
                    children: guild.name
                  }, void 0, !1, {
                    fileName: "app/routes/home/index.tsx",
                    lineNumber: 222,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Image, {
                    src: guild.icon,
                    w: "16px",
                    h: "16px",
                    alt: "icon",
                    ml: "auto"
                  }, void 0, !1, {
                    fileName: "app/routes/home/index.tsx",
                    lineNumber: 225,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/home/index.tsx",
                lineNumber: 221,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 203,
            columnNumber: 11
          }, this)
        }, i, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 194,
          columnNumber: 9
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
          direction: "column",
          justify: "flex-end",
          p: "20px",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Box, {
            children: "MORE"
          }, void 0, !1, {
            fileName: "app/routes/home/index.tsx",
            lineNumber: 231,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 230,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 187,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 177,
  columnNumber: 3
}, this), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Box, {
  py: `${PADDING_Y}px`,
  px: `${PADDING_X}px`,
  fontSize: "24px",
  textTransform: "uppercase",
  fontWeight: "semibold",
  children: "\xA9 2022 seedao"
}, void 0, !1, {
  fileName: "app/routes/home/index.tsx",
  lineNumber: 238,
  columnNumber: 3
}, this);
function HomeIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Flex, {
    w: "full",
    direction: "column",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SerialNumberContainer, {
        value: 1,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WelCome, {}, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 253,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 252,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SerialNumberContainer, {
        value: 2,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Events, {}, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 256,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 255,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SerialNumberContainer, {
        value: 3,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Guilds, {}, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 259,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 258,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SerialNumberContainer, {
        value: 4,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Projects, {}, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 262,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 261,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SerialNumberContainer, {
        value: 5,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(News, {}, void 0, !1, {
          fileName: "app/routes/home/index.tsx",
          lineNumber: 265,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 264,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 267,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 251,
    columnNumber: 5
  }, this);
}

// app/routes/home/roadmap.tsx
var roadmap_exports = {};
__export(roadmap_exports, {
  default: () => Roadmap
});
var import_react51 = require("@chakra-ui/react");

// app/components/Timeline/index.tsx
var import_react50 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Timeline = ({ items, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react50.VStack, {
  borderLeft: "2px",
  borderStyle: "solid",
  borderColor: "secondary.900",
  spacing: "30px",
  w: "full",
  ...props,
  children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react50.Flex, {
    pl: "20px",
    direction: "column",
    position: "relative",
    w: "full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react50.Box, {
        position: "absolute",
        top: "0",
        left: "0",
        h: "2px",
        w: "10px",
        bg: "secondary.900"
      }, void 0, !1, {
        fileName: "app/components/Timeline/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react50.Box, {
        fontSize: "16px",
        lineHeight: "16px",
        fontWeight: "semibold",
        mb: "10px",
        children: item.time
      }, void 0, !1, {
        fileName: "app/components/Timeline/index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react50.Box, {
        lineHeight: "25.6px",
        textTransform: "uppercase",
        children: item.content
      }, void 0, !1, {
        fileName: "app/components/Timeline/index.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ]
  }, i, !0, {
    fileName: "app/components/Timeline/index.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this))
}, void 0, !1, {
  fileName: "app/components/Timeline/index.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this);

// app/routes/home/roadmap.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Roadmap() {
  let futureTimelineItems = [
    {
      time: "2023 Q3-Q4",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        style: { marginLeft: "30px" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u4E3E\u529E\u5168\u7403\u5404\u5927\u57CE\u5E02SeeDAO\u89C1\u9762\u4F1A\u3002\u4F8B\u5982\uFF1A\u5317\u4EAC\u3001\u4E0A\u6D77\u3001\u676D\u5DDE\u3001\u6DF1\u5733\u3001\u6D1B\u6749\u77F6\u3001\u7EBD\u7EA6\u3001\u4F26\u6566\u3001\u4E1C\u4EAC\u7B49"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 13,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5728\u67D0\u4E9B\u56FD\u9645\u5316\u5927\u57CE\u5E02\u5EFA\u7ACBSeeDAO\u7684\u56FA\u5B9A\u7EBF\u4E0B\u636E\u70B9\uFF0C\u8BA9SeeDAO\u6210\u4E3A\u534E\u4EBAWeb3\u6587\u5316\u7684\u5178\u8303"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 16,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u4E3E\u529ESeeDAO\u7B2C\u4E94\u671F\u4E0E\u7B2C\u516D\u671F\u9ED1\u5BA2\u677E\uFF0C\u6BCF\u4E00\u671F\u90FD\u5B75\u5316\u51FA12\u4E2A\u9879\u76EE"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5728\u5546\u4E1A\u4E0A\u53D6\u5F97\u4E00\u5B9A\u6210\u529F\u540E\uFF0C\u589E\u52A0\u5728\u5B66\u672F\u548C\u7406\u8BBA\u4E0A\u8F93\u51FA\u548C\u5F71\u54CD"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    },
    {
      time: "2023 Q1-Q2",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        style: { marginLeft: "30px" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u4E3E\u529E\u5168\u7403\u5404\u5927\u57CE\u5E02SeeDAO\u89C1\u9762\u4F1A\u3002\u4F8B\u5982\uFF1A\u5317\u4EAC\u3001\u4E0A\u6D77\u3001\u676D\u5DDE\u3001\u6DF1\u5733\u3001\u6D1B\u6749\u77F6\u3001\u7EBD\u7EA6\u3001\u4F26\u6566\u3001\u4E1C\u4EAC\u7B49"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5728\u67D0\u4E9B\u56FD\u9645\u5316\u5927\u57CE\u5E02\u5EFA\u7ACBSeeDAO\u7684\u56FA\u5B9A\u7EBF\u4E0B\u636E\u70B9\uFF0C\u8BA9SeeDAO\u6210\u4E3A\u534E\u4EBAWeb3\u6587\u5316\u7684\u5178\u8303"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u4E3E\u529ESeeDAO\u7B2C\u4E94\u671F\u4E0E\u7B2C\u516D\u671F\u9ED1\u5BA2\u677E\uFF0C\u6BCF\u4E00\u671F\u90FD\u5B75\u5316\u51FA12\u4E2A\u9879\u76EE"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5728\u5546\u4E1A\u4E0A\u53D6\u5F97\u4E00\u5B9A\u6210\u529F\u540E\uFF0C\u589E\u52A0\u5728\u5B66\u672F\u548C\u7406\u8BBA\u4E0A\u8F93\u51FA\u548C\u5F71\u54CD"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5B8C\u6210SeeDAO B\u8F6E\u878D\u8D44\uFF0C\u4E0E\u5168\u7403\u9876\u7EA7\u7684\u6295\u8D44\u673A\u6784\u3001\u521B\u4E1A\u7EC4\u7EC7\u5EFA\u7ACB\u5E7F\u6CDB\u8054\u7CFB"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u62BD\u8C61\u51FA\u4E00\u5957DAO\u7684\u54F2\u5B66\u89C2\u548C\u65B9\u6CD5\u8BBA\uFF0C\u5C06\u5176\u5BF9\u5916\u8F93\u51FA\uFF0C\u5EFA\u7ACB\u5728DAO\u9886\u57DF\u7684\u6DF1\u5C42\u6B21\u5F71\u54CD"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u4E3E\u529ESeeDAO\u7B2C\u4E09\u671F\u4E0E\u7B2C\u56DB\u671F\u9ED1\u5BA2\u677E\uFF0C\u6BCF\u4E00\u671F\u90FD\u5B75\u5316\u51FA12\u4E2A\u9879\u76EE"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "SGN\u7684\u6301\u6709\u4EBA\u6570\u8D85\u8FC71000\u4EBA\uFF0C\u542F\u52A8SeeDAO\u534F\u8C03\u59D4\u5458\u4F1A\u6362\u5C4A\u9009\u4E3E"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }
  ], the2022TimeLineItems = [
    {
      time: "09-12 MONTH",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        style: { marginLeft: "30px" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5EFA\u7ACBSeeDAO\u5317\u7F8E\u636E\u70B9\uFF0C\u589E\u52A0SeeDAO\u7684\u5317\u7F8E\u6210\u5458\u6BD4\u4F8B\u53CASGN\u6301\u6709\u8005"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5B8C\u5584SeeDAO\u7684\u6CBB\u7406\u4F53\u7CFB\u4E0E\u5DE5\u5177\u7EC4\u5408\uFF0C\u5F62\u6210\u6559\u80B2\u3001\u5DE5\u4F5C\u3001\u6CBB\u7406\u3001\u521B\u9020\u7684\u826F\u6027\u5FAA\u73AF"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u4E3E\u529ESeeDAO\u7B2C\u4E8C\u671F\u9ED1\u5BA2\u677E\uFF0C\u5B75\u5316\u51FA12\u4E2A\u9879\u76EE"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5F00\u542FSeeDAO\u4E0B\u4E00\u8F6E\u878D\u8D44"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    },
    {
      time: "05-08 MONTH",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        style: { marginLeft: "30px" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u5B75\u5316\u5668\u6280\u672F\u5E73\u53F0 C-Combinator \u4E0A\u7EBF \u6210\u7ACB\u4E0EC-Combitor\u914D\u5957\u7684SeeDAO"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u521B\u9020\u8005Grants\u57FA\u91D1 \u4E3E\u529ESeeDAO \u7B2C\u4E00\u671F\u9ED1\u5BA2\u677E\uFF0C\u5B75\u5316\u51FA12\u4E2A\u9879\u76EE"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "\u91CD\u70B9\u5438\u7EB3\u6765\u81EA\u56E0\u4E3A\u5404\u79CD\u539F\u56E0\u79BB\u5F00Web2\u7684\u4ECE\u4E1A\u8005\uFF0C\u8F6C\u5316\u4E3ASeeDAO\u6709\u751F\u529B\u91CF"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    },
    {
      time: "04.26",
      content: "\u6295\u7814\u516C\u4F1A\u3001\u4EA7\u54C1\u516C\u4F1A\u548C\u7FFB\u8BD1\u516C\u4F1A\u5728\u5236\u5B9A\u6362\u5C4A\u89C4\u5219"
    },
    {
      time: "04.20",
      content: "WEB3 \u56FE\u4E66\u9986\u9879\u76EE\u5F00\u542F"
    },
    {
      time: "04.19",
      content: "SEEDAO POAP V2 \u5DE5\u5177\u7ACB\u9879"
    },
    {
      time: "04.18",
      content: "SEEDAO\u53C2\u52A0\u827A\u672F\u5C55\u89C8\uFF0C\u793E\u533A\u5171\u521B\u4E00\u4EF6\u4F5C\u54C1\u8868\u8FBE\u81EA\u6211"
    },
    {
      time: "04.17",
      content: "\u7B2C\u4E8C\u6B21\u793E\u533A\u5B75\u5316\u9879\u76EE\u8DEF\u6F14"
    },
    {
      time: "04.12",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          "\u300A\u6625\u5929\u97F3\u4E50\u4F1A\u300B \u7B79\u5907 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 99,
            columnNumber: 22
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 108,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    },
    {
      time: "04.11",
      content: "ShanghaiDAO \u5347\u7EA7\u4E3A MetaShanghai"
    },
    {
      time: "04.10",
      content: "DeSchool \u51FAAlpha \u7248\u672C\u3001\u5B98\u7F51V2\u51FAdemo"
    },
    {
      time: "03.28",
      content: "Azuki Cafe \u9879\u76EE\u786E\u5B9A\u793E\u533A\u5316\u8FD0\u8425\u539F\u5219"
    },
    {
      time: "03.27",
      content: "Web3 \u5927\u5B66#100\u8BFE\u7A0B\u6536\u5B98 \uFF1B SeeDAO\u77E5\u8BC6\u6C89\u6DC0 \u9879\u76EE\u542F\u52A8"
    },
    {
      time: "03.24",
      content: "\u5B8C\u6210SeeDAO\u6240\u6709\u8FC7\u5F80\u8D21\u732E\u7684\u767B\u8BB0\u548C\u786E\u8BA4\u56DE\u6EAF\u6027\u7A7A\u6295Token\u6570\u91CF"
    },
    {
      time: "03.23",
      content: "\u8F8D\u5B66\u4E4B\u8FA8\uFF0C\u5F15\u8D77\u6CE2\u6F9C\uFF1BDeSchool \u5F00\u542F\u5185\u6D4B \uFF1B \u5143\u5B87\u5B99\u97F3\u4E50\u5385\u5EFA\u8BBE\u5F00\u542F"
    },
    {
      time: "03.20",
      content: "\u786E\u7ACBSeeDAO\u62BD\u8C61\u6CBB\u7406\u539F\u5219\uFF0C \u516C\u5730\u5267\u573A\u7814\u7A76\u6240\u5F00\u59CB\u7ACB\u9879"
    },
    {
      time: "03.20",
      content: "\u8BA8\u8BBA SeeDAO \u4E3B\u8981\u4EFB\u52A1\u4E3A \u5B75\u5316DAO\uFF0C\u5F00\u59CB\u5B75\u5316\u5668\u6280\u672F\u5E73\u53F0\u5F00\u53D1"
    },
    {
      time: "03.13",
      content: "SeeDAO NFT\u66F4\u540D\u4E3ASGN (SeeDAO Genesis NFT ) ; POAP\u66F4\u540D\u4E3A MSC\uFF08Memory of SeeDAO Contribution \uFF09"
    },
    {
      time: "03.06",
      content: "\u5B98\u7F51V2\u5F00\u59CB\u8BBE\u8BA1\uFF0C\u6295\u7814\u516C\u4F1A\u63A8\u8FDBWeb3 \u5927\u5B66\u5165\u95E8\u8BFE\u7A0B"
    },
    {
      time: "02.21",
      content: "\u8054\u5408\u767B\u5CF0\u6587\u793E\u3001FLOW\u3001MASK\u3001Matrix World\u3001MyNFT\u53D1\u8D77\u53E4\u5178\u97F3\u4E50\u73B0\u4EE3\u5316\u5927\u8D5B"
    },
    {
      time: "02.16",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          "ShanghaiDAO \u5143\u5B87\u5B99\u76F8\u4EB2\u6D3B\u52A8 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 168,
            columnNumber: 31
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 177,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 169,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    },
    {
      time: "02.13",
      content: "\u6295\u7814\u516C\u4F1A\u5EFA\u7ACB\u516C\u4F1A\u5185\u90E8POAP\u4F53\u7CFB\uFF0C\u7FFB\u8BD1\u516C\u4F1A\u5EFA\u7ACB\u534F\u8C03\u5C0F\u7EC4\uFF0C\u4EFB\u671F\u4E09\u4E2A\u6708"
    },
    {
      time: "01.24",
      content: "\u6625\u8282\u795E\u79D8\u6D3B\u52A8"
    },
    {
      time: "01.23",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          "SeeDAO \u8D21\u732E\u8BB0\u5F55\u4F53\u7CFB MSN \u5F00\u53D1\u5B8C\u6210 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 199,
            columnNumber: 34
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 208,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 200,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this)
    },
    {
      time: "01.22",
      content: "\u7B2C\u4E00\u6B21\u793E\u533A\u5B75\u5316\u9879\u76EE\u8DEF\u6F14"
    },
    {
      time: "01.19",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          "ShanghaiDAO \u57CE\u968D\u5E99\u62A2\u5934\u9999 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 226,
            columnNumber: 30
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 235,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 227,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    }
  ], the2021TimeLineItems = [
    {
      time: "12.30",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Box, {
            as: "span",
            color: "adorn.900",
            children: "SeeDAO\u6CBB\u7406\u67B6\u6784\u8349\u6848"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 252,
            columnNumber: 11
          }, this),
          " ",
          "\u53D1\u5E03 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 255,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 264,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 256,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, this)
    },
    {
      time: "12.28",
      content: "\u53D1\u751F\u201C\u609F\u6076\u610F\u5206\u53C9\u201D\u653B\u51FB\u4E8B\u4EF6"
    },
    {
      time: "12.25",
      content: "SeeDAO \u534F\u8C03\u59D4\u5458\u4F1A\u6210\u7ACB\uFF0C7\u540D\u6210\u5458\u4E3E\u884C\u7B2C\u4E00\u6B21\u793E\u533A\u4F1A\u8BAE"
    },
    {
      time: "12.30",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          "\u8054\u5408Y2Z\u6210\u529F\u4E3E\u529E",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Box, {
            as: "span",
            color: "adorn.900",
            children: "\u9996\u5C4A\u5143\u5B87\u5B99\u521B\u4F5C\u8005\u5609\u5E74\u534E"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 287,
            columnNumber: 11
          }, this),
          " ",
          "\u53D1\u5E03 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 290,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 299,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 291,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, this)
    },
    {
      time: "12.16",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Box, {
            as: "span",
            color: "adorn.900",
            children: "SeeDAO NFT\u548C\u8D21\u732E\u5FBD\u7AE0(POAP)\u6307\u5357\u8349\u7A3F"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 313,
            columnNumber: 11
          }, this),
          " ",
          "\u53D1\u5E03 ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 316,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 325,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 317,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 312,
        columnNumber: 9
      }, this)
    },
    {
      time: "12.16",
      content: "SeeDAO \u5143\u5B87\u5B99\u5EFA\u7B51\u5E08\u516C\u4F1A\u6210\u7ACB"
    },
    {
      time: "12.04",
      content: "\u5B98\u7F51V1\u6B63\u5F0F\u4E0A\u7EBF\uFF0C\u5F00\u542F\u9488\u5BF9CryptoC\u793E\u533A\u8001\u7528\u6237\u3001Bank/FF/FWB/RLY\u6301\u6709\u8005\u7684SGN\u7A7A\u6295"
    },
    {
      time: "12.02",
      content: "\u53D1\u8D77\u7B2C\u4E00\u6B21\u793E\u533A\u5171\u5EFA\u8005\u7EBF\u4E0A\u4F1A\u8BAE"
    },
    {
      time: "11.03",
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Box, {
            as: "span",
            color: "adorn.900",
            children: "SeeDAO\u5BA3\u8A00: \u57FA\u4E8EWeb3\u7684\u521B\u4F5C\u8005\u7EC4\u7EC7\u7CFB\u7EDF"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 352,
            columnNumber: 11
          }, this),
          " ",
          "\u53D1\u5E03\uFF0CSeeDAO\u8BDE\u751F ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 355,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            target: "_blank",
            fontSize: "14px",
            children: [
              "More",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "14px",
                h: "14px",
                ml: "6px"
              }, void 0, !1, {
                fileName: "app/routes/home/roadmap.tsx",
                lineNumber: 364,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 356,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 351,
        columnNumber: 9
      }, this)
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Flex, {
    w: "full",
    h: "full",
    py: `${PADDING_Y}px`,
    px: `${PADDING_X}px`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Box, {
        h: "auto",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
            sub: "\u8DEF\u7EBF\u56FE",
            children: "Roadmap"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 379,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Text, {
            mt: "22px",
            mb: "52px",
            children: "\u57282021\u5E74\uFF0CCryptoC\u5DF2\u7ECF\u79EF\u7D2F\u4E86\u5927\u91CF\u7684\u5B9E\u8DF5\u3002\u6211\u4EEC\u642D\u5EFA\u8FC7NFT\u4EA4\u6613\u5E73\u53F0\uFF0C\u4E5F\u8FD0\u8425\u548C\u6CBB\u7406\u8FC7NFT\u9879\u76EE\uFF1B\u6211\u4EEC\u719F\u6089\u521B\u4F5C\u8005\u5728\u8FD0\u4F5CDAO\u7684\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u8C03\u7528\u7684\u5404\u79CD\u5DE5\u5177\uFF0C\u4E5F\u548C\u5404\u5927\u516C\u94FE\u4EE5\u53CA\u5143\u5B87\u5B99\u7A7A\u95F4\u5EFA\u7ACB\u4E86\u76F8\u5E94\u7684\u8054\u7CFB\uFF1B\u6211\u4EEC\u77E5\u9053NFT\u9879\u76EE\u51B7\u542F\u52A8\u65F6\u7684\u5386\u7A0B\uFF0C\u4E5F\u77E5\u9053\u5F53DAO\u542F\u52A8\u540E\u8FD0\u8425\u6240\u9700\u6CE8\u610F\u7684\u4E8B\u9879\u3002\u6B64\u5916\uFF0C\u6211\u4EEC\u8FD8\u505A\u8FC7\u7EBF\u4E0A\u4E0E\u7EBF\u4E0B\u5C55\u89C8\uFF0C\u7EC4\u7EC7\u8FC7\u7EBF\u4E0A\u548C\u7EBF\u4E0B\u4F1A\u8BAE\uFF0C\u64B0\u5199\u548C\u7F16\u8BD1\u4E86\u8BF8\u591A\u6587\u7AE0\u3002\u8FD9\u4E9B\u7ECF\u9A8C\uFF0C\u5BF9\u4E8E\u60F3\u4ECEWeb2.0\u8FDB\u5165Web3.0\u4E16\u754C\u7684\u521B\u4F5C\u8005\u6765\u8BF4\u662F\u5B9D\u8D35\u7684\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u628A\u6211\u4EEC\u7684\u7ECF\u9A8C\u5F00\u653E\u51FA\u53BB\uFF0C\u4EA4\u7ED9\u793E\u533A\u4E86\u3002"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 380,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Heading, {
            as: "h2",
            textTransform: "uppercase",
            fontSize: "32px",
            mb: "30px",
            children: "Future"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 384,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, {
            items: the2022TimeLineItems
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 388,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Heading, {
            as: "h2",
            textTransform: "uppercase",
            fontSize: "32px",
            mt: "60px",
            mb: "30px",
            children: "2022"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 390,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, {
            items: futureTimelineItems
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 400,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Heading, {
            as: "h2",
            textTransform: "uppercase",
            fontSize: "32px",
            mt: "60px",
            mb: "30px",
            children: "2021"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 402,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, {
            items: the2021TimeLineItems
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 412,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Box, {
            h: "40px"
          }, void 0, !1, {
            fileName: "app/routes/home/roadmap.tsx",
            lineNumber: 413,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 378,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Image, {
        src: "/assets/svg/roadmap-icon.svg",
        w: "64px",
        h: "64px",
        ml: "46px"
      }, void 0, !1, {
        fileName: "app/routes/home/roadmap.tsx",
        lineNumber: 415,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/home/roadmap.tsx",
    lineNumber: 377,
    columnNumber: 5
  }, this);
}

// app/routes/home/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var import_react52 = require("@chakra-ui/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), text = `\u4ECECryptoC\u8BDE\u751F\u7684\u90A3\u4E00\u523B\u8D77\uFF0C\u63A2\u7D22\u57FA\u4E8EWeb3.0\u7684\u5185\u5BB9\u751F\u4EA7\u5173\u7CFB\u5C31\u662F\u6211\u4EEC\u7684\u4F7F\u547D\u3002\u7ECF\u8FC72021\u5E74\u7684\u53CD\u590D\u5B9E\u8DF5\uFF0C\u6211\u4EEC\u7EC8\u4E8E\u51B3\u5B9A\u53D1\u8D77\u6210\u7ACB\u4E00\u4E2A\u771F\u6B63\u7684DAO\uFF0C\u6765\u5B9E\u73B0\u8FD9\u4EF6\u4E8B\u3002\u8FD9\u4E2ADAO\u5C31\u662FSeeDAO\u3002

\u57282021\u5E74\uFF0CCryptoC\u5DF2\u7ECF\u79EF\u7D2F\u4E86\u5927\u91CF\u7684\u5B9E\u8DF5\u3002\u6211\u4EEC\u642D\u5EFA\u8FC7NFT\u4EA4\u6613\u5E73\u53F0\uFF0C\u4E5F\u8FD0\u8425\u548C\u6CBB\u7406\u8FC7NFT\u9879\u76EE\uFF1B\u6211\u4EEC\u719F\u6089\u521B\u4F5C\u8005\u5728\u8FD0\u4F5CDAO\u7684\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u8C03\u7528\u7684\u5404\u79CD\u5DE5\u5177\uFF0C\u4E5F\u548C\u5404\u5927\u516C\u94FE\u4EE5\u53CA\u5143\u5B87\u5B99\u7A7A\u95F4\u5EFA\u7ACB\u4E86\u76F8\u5E94\u7684\u8054\u7CFB\uFF1B\u6211\u4EEC\u77E5\u9053NFT\u9879\u76EE\u51B7\u542F\u52A8\u65F6\u7684\u5386\u7A0B\uFF0C\u4E5F\u77E5\u9053\u5F53DAO\u542F\u52A8\u540E\u8FD0\u8425\u6240\u9700\u6CE8\u610F\u7684\u4E8B\u9879\u3002\u6B64\u5916\uFF0C\u6211\u4EEC\u8FD8\u505A\u8FC7\u7EBF\u4E0A\u4E0E\u7EBF\u4E0B\u5C55\u89C8\uFF0C\u7EC4\u7EC7\u8FC7\u7EBF\u4E0A\u548C\u7EBF\u4E0B\u4F1A\u8BAE\uFF0C\u64B0\u5199\u548C\u7F16\u8BD1\u4E86\u8BF8\u591A\u6587\u7AE0\u3002\u8FD9\u4E9B\u7ECF\u9A8C\uFF0C\u5BF9\u4E8E\u60F3\u4ECEWeb2.0\u8FDB\u5165Web3.0\u4E16\u754C\u7684\u521B\u4F5C\u8005\u6765\u8BF4\u662F\u5B9D\u8D35\u7684\u3002\u73B0\u5728\uFF0C\u662F\u65F6\u5019\u628A\u6211\u4EEC\u7684\u7ECF\u9A8C\u5F00\u653E\u51FA\u53BB\uFF0C\u4EA4\u7ED9\u793E\u533A\u4E86\u3002

\u8FD9\u4E9B\u5C06\u5728SeeDAO\u4E2D\u5F97\u4EE5\u5B9E\u73B0\u3002\u2014\u2014\u5C06Web2.0\u7684\u521B\u4F5C\u8005\u5F15\u5165Web3.0\u4E16\u754C\uFF0C\u5E2E\u52A9\u5185\u5BB9\u521B\u4F5C\u8005\u548C\u5185\u5BB9\u6D88\u8D39\u8005\u63A2\u7D22\u66F4\u597D\u7684\u751F\u4EA7\u5173\u7CFB\u548C\u7EC4\u7EC7\u5F62\u6001\uFF0C\u8FD9\u6B63\u662FSeeDAO\u7684\u4F7F\u547D\u3002

\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E00\u76EE\u6807\u4E0B\u53D1\u8D77\u5404\u9879\u6D3B\u52A8\u3002\u4F8B\u5982\u9488\u5BF9\u521B\u4F5C\u8005\u8FDB\u884C\u79D1\u666E\u548C\u57F9\u8BAD\uFF1B\u4F8B\u5982\u5E2E\u52A9\u521B\u4F5C\u8005\u5339\u914D\u8FD0\u8425\u4EBA\u5458\uFF0C\u53D1\u8D77\u76F8\u5E94\u6D3B\u52A8\uFF1B\u4F8B\u5982\u5171\u540C\u7EC4\u5EFAIP\uFF0C\u4EE5\u53CA\u5171\u540C\u642D\u5EFA\u57FA\u4E8EWeb3.0\u7684\u5DE5\u5177\u2026

\u6211\u4EEC\u7684\u5DE5\u4F5C\u53EF\u80FD\u4F1A\u4FC3\u6210\u672A\u6765\u8BB8\u591A\u521B\u4F5C\u8005DAO\u7EC4\u7EC7\u7684\u8BDE\u751F\u3002\u6211\u4EEC\u76F8\u4FE1\uFF0C\u672A\u6765\u53EF\u80FD\u4F1A\u6709\u5199\u4F5C\u8005\u7684DAO\u3001\u63D2\u56FE\u5E08\u7684DAO\u3001\u6E38\u620F\u5236\u4F5C\u8005\u7684DAO\uFF1B\u4E5F\u53EF\u80FD\u6709\u56F4\u7ED5\u7740\u67D0\u4E2AIP\u800C\u5EF6\u5C55\u51FA\u6765\u7684DAO\u3002SeeDAO\u65E2\u53EF\u80FD\u662F\u8FD9\u4E9BDAO\u7684\u8FDE\u63A5\u5668\uFF0C\u4E5F\u53EF\u80FD\u662F\u4ED6\u4EEC\u51FA\u53D1\u7684\u539F\u70B9\u3002

\u6211\u4EEC\u60F3\u8981\u63D0\u4F9B\u8FD9\u4E9B\u670D\u52A1\uFF1A
\u6559\u80B2
\u53D1\u73B0\u548C\u8FDE\u63A5DAO
\u4EBA\u529B\u8D44\u6E90\u5339\u914D\uFF08\u53D1\u5E03\u548C\u63D0\u4F9BDAO\u7684\u5DE5\u4F5C\u5C97\u4F4D\uFF09
DAO\u7684\u9ED1\u5BA2\u677E
\u5143\u5B87\u5B99\u521B\u4F5C\u8005\u7684\u9ED1\u5BA2\u677E
\u2026\u2026

SeeDAO\u5411\u4E00\u5207\u8BA4\u540CWeb3.0\uFF0C\u5E0C\u671B\u6539\u5199web2.0\u521B\u4F5C\u8005\u7ECF\u6D4E\u6A21\u5F0F\u7684\u4EBA\u4EEC\u655E\u5F00\u3002

\u5982\u679C\u4F60\u662F\u60F3\u8981\u8FDB\u5165Web3.0\u4E16\u754C\u7684\u5185\u5BB9\u521B\u4F5C\u8005\uFF08\u5C0F\u8BF4\u3001\u6F2B\u753B\u3001\u97F3\u4E50\u3001\u89C6\u9891\u3001\u6E38\u620F\u5236\u4F5C\u7B49\uFF09\uFF0C\u6B22\u8FCE\u52A0\u5165SeeDAO\uFF01

\u5982\u679C\u4F60\u662F\u60F3\u8981\u8FDB\u5165Web3.0\u4E16\u754C\u7684\u5F00\u53D1\u8005\uFF0C\u80FD\u591F\u4E3A\u5185\u5BB9\u521B\u4F5C\u8005\u63D0\u4F9B\u5E2E\u52A9\uFF0C\u6B22\u8FCE\u52A0\u5165SeeDAO\uFF01

\u5982\u679C\u4F60\u662FWeb3.0\u4E16\u754C\u7684\u8D44\u6E90\u63D0\u4F9B\u8005\uFF08\u4F8B\u5982\u4F60\u624B\u91CC\u6301\u6709\u5927\u91CF\u5143\u5B87\u5B99\u7A7A\u95F4\u5730\u5757\uFF0C\u53EF\u63D0\u4F9B\u7ED9\u521B\u4F5C\u8005\u4F7F\u7528\uFF09\uFF0C\u6B22\u8FCE\u52A0\u5165SeeDAO\uFF01

\u5982\u679C\u4F60\u60F3\u6295\u8D44Web3.0\u7684\u521B\u4F5C\u8005\u7ECF\u6D4E\uFF0C\u6295\u8D44\u5404\u7C7B\u521B\u4F5C\u8005DAO\uFF0C\u6B22\u8FCE\u52A0\u5165SeeDAO\uFF01

\u6B64\u5916\uFF0C\u6211\u4EEC\u6B22\u8FCE\u4E00\u5207\u80FD\u591F\u5E2E\u52A9\u521B\u4F5C\u8005DAO\u6269\u5C55\u7684\u8FD0\u8425\u4EBA\u5458\uFF0C\u65E0\u8BBA\u662F\u5E02\u573A\u8425\u9500\u3001\u6587\u5B57\u8F93\u51FA\u3001\u7FFB\u8BD1\u4EBA\u5458\uFF0C\u8FD8\u662F\u6C9F\u901A\u534F\u8C03\u3001\u6D3B\u52A8\u7EC4\u7EC7\u3001\u521B\u610F\u8D21\u732E\u4EBA\u5458\uFF0C\u4F60\u4EEC\u90FD\u662FSeeDAO\u6240\u9700\u8981\u7684\u4EBA\u624D\u3002

\u5982\u4F55\u52A0\u5165SeeDAO\uFF1F \u6211\u4EEC\u7684Discord\u5BF9\u4E00\u5207\u60F3\u8981\u4E86\u89E3SeeDAO\u7684\u4EBA\u4EEC\u655E\u5F00\u3002

\u4E0D\u8FC7\uFF0C\u5982\u679C\u4F60\u60F3\u66F4\u6DF1\u5C42\u6B21\u5730\u53C2\u52A0SeeDAO\u7684\u6CBB\u7406\uFF0C\u53C2\u4E0ESeeDAO\u7684\u5229\u76CA\u5206\u914D\uFF0C\u4F60\u9700\u8981\u6301\u6709SeeDAO\u53D1\u884C\u7684\u521B\u4E16NFT\u3002

\u6211\u4EEC\u4E00\u5171\u5236\u4F5C\u4E8610000\u679ASeeDAO NFT\u3002\u5728\u793E\u533A\u542F\u52A8\u9636\u6BB5\uFF0C\u6211\u4EEC\u4F1A\u9762\u5411\u4E09\u7C7B\u670B\u53CB\u7A7A\u6295500\u679ANFT\u3002\u4ED6\u4EEC\u662F\uFF1A

\u6301\u6709CryptoC\u5FBD\u7AE0\u7684\u670B\u53CB\uFF08\u5171200\u679A\uFF09
\u57282021\u5E7411\u670822\u65E5\u4E4B\u524D\u8BA2\u9605\u8FC7CryptoC\u7684\u5A92\u4F53\u8D26\u53F7\u3001\u53C2\u52A0\u8FC7Crypto\u7EC4\u7EC7\u6D3B\u52A8\u7684\u670B\u53CB\uFF08\u5171150\u679A\uFF09
\u6301\u6709\u81F3\u5C11\u4EF7\u503C$200\u7684Bankless\u3001Rally\u3001FWB\u3001Forefront\u7B49\u5173\u952EDAO\u7EC4\u7EC7\u6216\u521B\u4F5C\u8005\u7ECF\u6D4E\u4EE3\u5E01\u7684\u670B\u53CB\uFF08\u5171150\u679A\uFF09
\u4F59\u4E0B9500\u679A\uFF0C\u6211\u4EEC\u5C06\u5728\u793E\u533A\u7684\u6D3B\u52A8\u7EC4\u7EC7\u4E2D\u9010\u6B65\u53D1\u51FA\u3002

\u52A0\u5165\u5230Web3.0\u521B\u4F5C\u8005\u7ECF\u6D4E\u7684\u661F\u8FB0\u5927\u6D77\u6765\u5427\uFF01
Just See\uFF01
`.split(`
`);
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react52.Flex, {
    w: "full",
    h: "full",
    py: `${PADDING_Y}px`,
    px: `${PADDING_X}px`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react52.Box, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
            sub: "\u5173\u4E8E",
            children: "About"
          }, void 0, !1, {
            fileName: "app/routes/home/about.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react52.Heading, {
            as: "h3",
            fontSize: "28px",
            mt: "22px",
            mb: "38px",
            children: [
              "SeeDAO\u2014\u2014 ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/home/about.tsx",
                lineNumber: 58,
                columnNumber: 20
              }, this),
              "\u57FA\u4E8EWeb3.0\u7684\u5185\u5BB9\u521B\u4F5C\u8005\u7EC4\u7EC7\u7CFB\u7EDF"
            ]
          }, void 0, !0, {
            fileName: "app/routes/home/about.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react52.Text, {
            children: text.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react52.Text, {
              children: t || /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/home/about.tsx",
                lineNumber: 64,
                columnNumber: 36
              }, this)
            }, i, !1, {
              fileName: "app/routes/home/about.tsx",
              lineNumber: 64,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/home/about.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home/about.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react52.Image, {
        src: "/assets/svg/about-icon.svg",
        w: "64px",
        h: "64px",
        ml: "46px"
      }, void 0, !1, {
        fileName: "app/routes/home/about.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/home/about.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/components/Fade/index.tsx
var import_react53 = require("@chakra-ui/react"), import_react54 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Fade = ({
  isOpen,
  children,
  style = {},
  ...props
}) => {
  let [isShowChildren, setIsShowChildren] = (0, import_react54.useState)(!0), transition = 400;
  return (0, import_react54.useEffect)(() => {
    if (isOpen)
      setIsShowChildren(isOpen);
    else {
      let timer = setTimeout(() => setIsShowChildren(isOpen), transition);
      return () => clearTimeout(timer);
    }
  }, [isOpen]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react53.Box, {
    style: { opacity: isOpen ? 1 : 0, ...style },
    transition: `${transition}ms`,
    ...props,
    children: isShowChildren ? children : null
  }, void 0, !1, {
    fileName: "app/components/Fade/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/routes/home.tsx
var import_swr2 = __toESM(require("swr"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Home() {
  let videoRef = (0, import_react57.useRef)(null), location = (0, import_react55.useLocation)(), isHome = location.pathname === "/home" /* Home */, isHomeRoadMap = location.pathname === "/home/roadmap" /* HomeRoadmap */, isHomeAbout = location.pathname === "/home/about" /* HomeAbout */, api = useAPI(), ENV = useEnv(), { data: homeStatisticalData } = (0, import_swr2.default)(
    ["GetHomeStatisticalData" /* GetHomeStatisticalData */],
    async () => api.getHomeStatisticalData()
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Grid, {
    w: "full",
    h: "full",
    gridTemplateColumns: "50% calc(50% + 1px)",
    flex: 1,
    position: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Flex, {
        position: "sticky",
        top: `${68}px`,
        direction: "column",
        maxH: `calc(100vh - ${68}px)`,
        mb: "-1px",
        borderRight: "1px",
        borderBottom: "1px",
        borderStyle: "solid",
        borderColor: "secondary.900",
        overflow: "hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Box, {
            as: "video",
            autoPlay: !0,
            loop: !0,
            poster: seedao_index_poster_default,
            src: seedao_index_default,
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: -1,
            h: "full",
            maxW: "unset",
            muted: !0,
            ref: videoRef
          }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Flex, {
            w: "full",
            h: "full",
            direction: "column",
            position: "relative",
            overflowX: "hidden",
            overflowY: "auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Flex, {
                direction: "column",
                position: "relative",
                top: "0",
                left: "0",
                px: "20px",
                align: "flex-start",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Heading, {
                    as: "h1",
                    textTransform: "uppercase",
                    mt: "25px",
                    fontSize: "140px",
                    lineHeight: "140px",
                    fontWeight: "400",
                    children: [
                      "DAO it ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 106,
                        columnNumber: 22
                      }, this),
                      "do it"
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 98,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Heading, {
                    as: "h2",
                    fontWeight: "400",
                    fontSize: "32px",
                    textTransform: "uppercase",
                    mt: "13px",
                    children: "\u63A2\u7D22\u57FA\u4E8EWeb3.0\u7684\u5185\u5BB9\u751F\u4EA7\u5173\u7CFB"
                  }, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 109,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react58.Link, {
                    to: "/start",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Button, {
                      variant: "unstyled",
                      h: "44px",
                      lineHeight: "44px",
                      mt: "30px",
                      display: "inline-flex",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Box, {
                          as: "span",
                          display: "inline-flex",
                          bg: "secondary.900",
                          color: "primary.100",
                          h: "inherit",
                          px: "16px",
                          fontSize: "24px",
                          alignItems: "center",
                          textTransform: "uppercase",
                          transition: "200ms",
                          _active: {
                            bg: "secondary.700"
                          },
                          children: [
                            "Start",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                              src: "/assets/svg/start-arrow.svg",
                              w: "24px",
                              h: "24px",
                              ml: "20px"
                            }, void 0, !1, {
                              fileName: "app/routes/home.tsx",
                              lineNumber: 142,
                              columnNumber: 19
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 126,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                          src: "/assets/svg/start-decorate.svg",
                          w: "auto",
                          h: "inherit",
                          ml: "2px"
                        }, void 0, !1, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 149,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/home.tsx",
                      lineNumber: 119,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 118,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/home.tsx",
                lineNumber: 90,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Flex, {
                direction: "column",
                mt: "auto",
                px: "20px",
                py: "30px",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Heading, {
                    as: "h3",
                    textTransform: "uppercase",
                    fontSize: "24px",
                    fontWeight: "400",
                    mb: "20px",
                    children: "highlight"
                  }, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 159,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.HStack, {
                    spacing: "50px",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, {
                        value: homeStatisticalData == null ? void 0 : homeStatisticalData.member,
                        keyName: "Member",
                        valueUnit: "+"
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 169,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, {
                        value: homeStatisticalData == null ? void 0 : homeStatisticalData.token,
                        keyName: "Token",
                        valueUnit: "+"
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 174,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, {
                        value: homeStatisticalData != null && homeStatisticalData.nftmint ? (homeStatisticalData == null ? void 0 : homeStatisticalData.nftmint) * 100 : void 0,
                        keyName: "NFT Mint",
                        valueUnit: "%"
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 179,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Indicator, {
                        value: homeStatisticalData == null ? void 0 : homeStatisticalData.project,
                        keyName: "Project",
                        valueUnit: "+"
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 188,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 168,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.HStack, {
                    mt: "40px",
                    spacing: "40px",
                    textTransform: "uppercase",
                    fontSize: "24px",
                    fontWeight: "500",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        as: import_react58.Link,
                        to: "/home/roadmap",
                        display: "inline-flex",
                        alignItems: "center",
                        bg: isHomeRoadMap ? "secondary.900" : "none",
                        color: isHomeRoadMap ? "primary.100" : "secondary.900",
                        _hover: {
                          textDecoration: "none"
                        },
                        children: [
                          "Roadmap",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                            src: "/assets/svg/home-arrow.svg",
                            ml: "20px",
                            w: "24px",
                            h: "24px",
                            filter: isHomeRoadMap ? "invert(100%)" : "none"
                          }, void 0, !1, {
                            fileName: "app/routes/home.tsx",
                            lineNumber: 213,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 201,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        as: import_react58.Link,
                        to: "/home/about",
                        display: "inline-flex",
                        alignItems: "center",
                        bg: isHomeAbout ? "secondary.900" : "none",
                        color: isHomeAbout ? "primary.100" : "secondary.900",
                        _hover: {
                          textDecoration: "none"
                        },
                        children: [
                          "About",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                            src: "/assets/svg/home-arrow.svg",
                            ml: "20px",
                            w: "24px",
                            h: "24px",
                            filter: isHomeAbout ? "invert(100%)" : "none"
                          }, void 0, !1, {
                            fileName: "app/routes/home.tsx",
                            lineNumber: 233,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 221,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 194,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.HStack, {
                    mt: "40px",
                    spacing: "20px",
                    textTransform: "uppercase",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "24px",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Box, {
                        children: "Join us"
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 250,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        href: ENV.TWITTER_URL,
                        target: "_blank",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                          src: "/assets/svg/social/twitter.svg",
                          w: "24px",
                          h: "24px"
                        }, void 0, !1, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 252,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 251,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        href: ENV.DISCORD_URL,
                        target: "_blank",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                          src: "/assets/svg/social/discord.svg",
                          w: "24px",
                          h: "24px"
                        }, void 0, !1, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 255,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 254,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        href: ENV.NOTION_URL,
                        target: "_blank",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                          src: "/assets/svg/social/notion.svg",
                          w: "24px",
                          h: "24px"
                        }, void 0, !1, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 258,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 257,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        href: ENV.OPENSEA_URL,
                        target: "_blank",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                          src: "/assets/svg/social/opensea.svg",
                          w: "24px",
                          h: "24px"
                        }, void 0, !1, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 261,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 260,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                          src: "/assets/svg/social/wechat.svg",
                          w: "24px",
                          h: "24px"
                        }, void 0, !1, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 264,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 263,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Link, {
                        href: ENV.MIRROR_URL,
                        target: "_blank",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Image, {
                          src: "/assets/svg/social/mirror.svg",
                          w: "24px",
                          h: "24px"
                        }, void 0, !1, {
                          fileName: "app/routes/home.tsx",
                          lineNumber: 267,
                          columnNumber: 17
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/home.tsx",
                        lineNumber: 266,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 242,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/home.tsx",
                lineNumber: 158,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Box, {
        position: "relative",
        w: "full",
        h: "full",
        overflow: "hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollContainer, {
            transition: "300ms",
            style: {
              transform: isHomeRoadMap || isHomeAbout ? "translateX(-50%)" : void 0
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fade, {
              isOpen: isHome,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomeIndex, {}, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 282,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/home.tsx",
              lineNumber: 281,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 274,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Grid, {
            w: "full",
            h: "full",
            templateRows: "100%",
            templateColumns: "60px calc(100% - 60px)",
            position: "absolute",
            left: "100%",
            top: "0",
            transition: "300ms",
            style: {
              transform: isHomeRoadMap || isHomeAbout ? "translateX(-100%)" : void 0
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollapseBar, {
                to: "/home" /* Home */,
                position: "relative",
                top: "1px",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                  sub: "\u4E3B\u9875",
                  children: "Index"
                }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 300,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 299,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fade, {
                isOpen: isHomeRoadMap,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollContainer, {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Roadmap, {}, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 304,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 303,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 302,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home.tsx",
            lineNumber: 285,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react56.Grid, {
            w: `calc(100% - ${60}px)`,
            h: "full",
            templateRows: "100%",
            templateColumns: "60px calc(100% - 60px)",
            position: "absolute",
            left: "calc(100% + 1px)",
            top: "0",
            transition: "300ms",
            style: {
              transform: isHomeAbout ? "translateX(-100%)" : void 0
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollapseBar, {
                to: "/home/roadmap" /* HomeRoadmap */,
                position: "relative",
                top: "1px",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                  sub: "\u8DEF\u7EBF\u56FE",
                  children: "Roadmap"
                }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 322,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 321,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fade, {
                isOpen: isHomeAbout,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollContainer, {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(About, {}, void 0, !1, {
                    fileName: "app/routes/home.tsx",
                    lineNumber: 326,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 325,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 324,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/home.tsx",
            lineNumber: 308,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 273,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/poap.tsx
var poap_exports = {};
__export(poap_exports, {
  default: () => Poap
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Poap() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: "poap"
  }, void 0, !1, {
    fileName: "app/routes/poap.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/task.tsx
var task_exports = {};
__export(task_exports, {
  default: () => Task
});
var import_react61 = require("@chakra-ui/react");

// app/routes/task/todo.tsx
var todo_exports = {};
__export(todo_exports, {
  default: () => todo_default
});

// app/components/TaskCardList.tsx
var import_react60 = require("@chakra-ui/react");

// app/components/TaskComponents/TaskCard.tsx
var import_react59 = require("@chakra-ui/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), TaskCardHeight = 324, TaskCard = ({
  heading,
  integral,
  user,
  description,
  applyUrl,
  status
}) => {
  let statusTextMap = {
    ["todo" /* Todo */]: "TODO",
    ["on_progress" /* OnProgress */]: "ON_PROGRESS",
    ["completed" /* Completed */]: "DONE"
  }, statusIconMap = {
    ["todo" /* Todo */]: "/assets/svg/task_status/todo.svg",
    ["on_progress" /* OnProgress */]: "/assets/svg/task_status/on_progress.svg",
    ["completed" /* Completed */]: "/assets/svg/task_status/done.svg"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Flex, {
    direction: "column",
    w: "full",
    h: `${TaskCardHeight}px`,
    borderRight: "1px",
    borderBottom: "1px",
    borderStyle: "solid",
    borderColor: "secondary.900",
    p: "30px",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.VStack, {
        spacing: "15px",
        alignItems: "flex-start",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Heading, {
            fontSize: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            noOfLines: 2,
            children: heading
          }, void 0, !1, {
            fileName: "app/components/TaskComponents/TaskCard.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.HStack, {
            spacing: "42px",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.HStack, {
                spacing: "8px",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Image, {
                    src: "/assets/svg/integral.svg",
                    w: "20px",
                    h: "20px"
                  }, void 0, !1, {
                    fileName: "app/components/TaskComponents/TaskCard.tsx",
                    lineNumber: 67,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Box, {
                    children: integral
                  }, void 0, !1, {
                    fileName: "app/components/TaskComponents/TaskCard.tsx",
                    lineNumber: 68,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/TaskComponents/TaskCard.tsx",
                lineNumber: 66,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.HStack, {
                spacing: "8px",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Image, {
                    src: "/assets/svg/user.svg",
                    w: "20px",
                    h: "20px"
                  }, void 0, !1, {
                    fileName: "app/components/TaskComponents/TaskCard.tsx",
                    lineNumber: 71,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Box, {
                    children: user
                  }, void 0, !1, {
                    fileName: "app/components/TaskComponents/TaskCard.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/TaskComponents/TaskCard.tsx",
                lineNumber: 70,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/TaskComponents/TaskCard.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Text, {
            color: "secondary.800",
            lineHeight: "160%",
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            noOfLines: 6,
            whiteSpace: "pre-line",
            children: description
          }, void 0, !1, {
            fileName: "app/components/TaskComponents/TaskCard.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/TaskComponents/TaskCard.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Flex, {
        justify: "space-between",
        mt: "auto",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Link, {
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "underline",
            fontWeight: "semibold",
            fontSize: "16px",
            href: applyUrl,
            target: "_blank",
            children: [
              "APPLY",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Image, {
                src: "/assets/svg/home-arrow.svg",
                w: "16px",
                h: "16px",
                ml: "16px"
              }, void 0, !1, {
                fileName: "app/components/TaskComponents/TaskCard.tsx",
                lineNumber: 98,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/TaskComponents/TaskCard.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.HStack, {
            bg: "adorn.900",
            color: "primary.100",
            fontSize: "12px",
            pl: "7px",
            pr: "6px",
            rounded: "2px",
            my: "auto",
            spacing: "7px",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Image, {
                src: statusIconMap[status] || statusIconMap["todo" /* Todo */],
                alt: statusTextMap[status] || statusTextMap["todo" /* Todo */],
                w: "10px",
                h: "10px"
              }, void 0, !1, {
                fileName: "app/components/TaskComponents/TaskCard.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react59.Box, {
                children: statusTextMap[status] || statusTextMap["todo" /* Todo */]
              }, void 0, !1, {
                fileName: "app/components/TaskComponents/TaskCard.tsx",
                lineNumber: 116,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/TaskComponents/TaskCard.tsx",
            lineNumber: 100,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/TaskComponents/TaskCard.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/TaskComponents/TaskCard.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
};

// app/components/TaskCardList.tsx
var import_react_virtuoso4 = require("react-virtuoso");

// app/hooks/TaskPage/useDataSource.ts
var import_swr3 = __toESM(require("swr"));
function useDataSource(status) {
  let api = useAPI();
  return (0, import_swr3.default)(["GetTask" /* GetTask */, status], async () => await api.getTask().then((res) => status ? res.tasks.filter((task) => task.status === status) : res.tasks));
}

// app/components/TaskCardList.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TaskCardList({ status, columnCount }) {
  let { data: tasks } = useDataSource(status);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react60.Box, {
    as: import_react_virtuoso4.Virtuoso,
    h: "full",
    totalCount: Math.ceil(((tasks == null ? void 0 : tasks.length) || 0) / columnCount),
    mr: "-1px",
    fixedItemHeight: TaskCardHeight,
    itemContent: (index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react60.Grid, {
      templateColumns: `repeat(${columnCount}, calc(100% / ${columnCount}))`,
      children: new Array(columnCount).fill(0).map((_, i) => tasks == null ? void 0 : tasks[index * columnCount + i]).filter((item) => item).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TaskCard, {
        heading: item.subject,
        description: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: [
            item.workload,
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/components/TaskCardList.tsx",
              lineNumber: 36,
              columnNumber: 37
            }, this),
            item.content,
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/components/TaskCardList.tsx",
              lineNumber: 37,
              columnNumber: 36
            }, this),
            item.tasks
          ]
        }, void 0, !0, {
          fileName: "app/components/TaskCardList.tsx",
          lineNumber: 35,
          columnNumber: 19
        }, this),
        integral: item.reward,
        applyUrl: item.link,
        status: "todo" /* Todo */,
        user: item.poster
      }, item.subject, !1, {
        fileName: "app/components/TaskCardList.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this))
    }, index, !1, {
      fileName: "app/components/TaskCardList.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/TaskCardList.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function taskCardListFactory(props) {
  return () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TaskCardList, {
    ...props
  }, void 0, !1, {
    fileName: "app/components/TaskCardList.tsx",
    lineNumber: 54,
    columnNumber: 16
  }, this);
}

// app/routes/task/todo.tsx
var todo_default = taskCardListFactory({ status: "todo" /* Todo */, columnCount: 2 });

// app/routes/task/on_progress.tsx
var on_progress_exports = {};
__export(on_progress_exports, {
  default: () => on_progress_default
});
var on_progress_default = taskCardListFactory({
  status: "on_progress" /* OnProgress */,
  columnCount: 3
});

// app/routes/task/done.tsx
var done_exports = {};
__export(done_exports, {
  default: () => done_default
});
var done_default = taskCardListFactory({
  status: "completed" /* Completed */,
  columnCount: 3
});

// app/routes/task.tsx
var import_react62 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Task() {
  var _a, _b, _c, _d, _e, _f;
  let location = (0, import_react62.useLocation)(), isTodoPage = location.pathname === "/task/todo" /* TaskTodo */, isOnProgressPage = location.pathname === "/task/on_progress" /* TaskOnProgress */, isDonePage = location.pathname === "/task/done" /* TaskDone */, todoCount = ((_b = (_a = useDataSource("todo" /* Todo */)) == null ? void 0 : _a.data) == null ? void 0 : _b.length) || 0, onProgressCount = ((_d = (_c = useDataSource("on_progress" /* OnProgress */)) == null ? void 0 : _c.data) == null ? void 0 : _d.length) || 0, doneCount = ((_f = (_e = useDataSource("completed" /* Completed */)) == null ? void 0 : _e.data) == null ? void 0 : _f.length) || 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Grid, {
    templateRows: `${68}px calc(100% - ${68}px)`,
    h: "full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Grid, {
        templateColumns: `${280}px calc(100% - ${280}px - ${536}px) ${536}px`,
        borderBottom: "1px",
        borderStyle: "solid",
        borderColor: "secondary.900",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Flex, {
            align: "center",
            bg: "adorn.900",
            h: `${68 - 1}px`,
            px: "20px",
            borderRight: "1px",
            borderStyle: "solid",
            borderColor: "secondary.900",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Image, {
                src: "/assets/png/task.png",
                w: "40px",
                h: "40px"
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 52,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                color: "primary.100",
                sub: "\u4EFB\u52A1",
                ml: "8px",
                subProps: { fontWeight: "semibold" },
                children: "Task"
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 53,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/task.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
            borderRight: "1px",
            borderStyle: "solid",
            borderColor: "secondary.900"
          }, void 0, !1, {
            fileName: "app/routes/task.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Filter, {}, void 0, !1, {
            fileName: "app/routes/task.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/task.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Box, {
        w: "full",
        h: "full",
        position: "relative",
        overflow: "hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Grid, {
            w: `calc(100% - ${536}px)`,
            templateColumns: `${60}px calc(100% - ${60}px)`,
            templateRows: "100%",
            h: "full",
            position: "absolute",
            top: "0",
            left: "0",
            bg: "primary.100",
            transition: "300ms",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollapseBar, {
                to: "/task/todo" /* TaskTodo */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                  sub: `\u5F85\u529E\u4EFB\u52A1 ${todoCount}`,
                  children: "TODO"
                }, void 0, !1, {
                  fileName: "app/routes/task.tsx",
                  lineNumber: 82,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 81,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fade, {
                isOpen: isTodoPage,
                h: "full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(todo_default, {}, void 0, !1, {
                  fileName: "app/routes/task.tsx",
                  lineNumber: 85,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 84,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/task.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Grid, {
            w: `calc(100% - ${60 * 2 - 5}px)`,
            templateRows: "100%",
            templateColumns: `${60}px calc(100% - ${60}px)`,
            h: "full",
            borderLeft: "1px",
            borderRight: "1px",
            borderStyle: "solid",
            borderColor: "secondary.900",
            position: "absolute",
            top: "0",
            left: `calc(100% - ${536}px - 1px)`,
            bg: "primary.100",
            transition: "300ms",
            style: {
              transform: isOnProgressPage || isDonePage ? `translateX(calc(-100% + ${536 - 60 + 6}px))` : void 0
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollapseBar, {
                to: "/task/on_progress" /* TaskOnProgress */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                  sub: `\u8FDB\u884C\u4E2D ${onProgressCount}`,
                  children: "On Progress"
                }, void 0, !1, {
                  fileName: "app/routes/task.tsx",
                  lineNumber: 112,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 111,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fade, {
                isOpen: isOnProgressPage || isTodoPage,
                h: "full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(on_progress_default, {}, void 0, !1, {
                  fileName: "app/routes/task.tsx",
                  lineNumber: 117,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 116,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/task.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react61.Grid, {
            w: `calc(100% - ${60 * 2}px)`,
            templateRows: "100%",
            templateColumns: `${60}px calc(100% - ${60}px)`,
            h: "full",
            borderLeft: "1px",
            borderRight: "1px",
            borderStyle: "solid",
            borderColor: "secondary.900",
            position: "absolute",
            top: "0",
            right: `calc(-100% + ${60 * 3 - 4}px)`,
            bg: "primary.100",
            transition: "300ms",
            style: {
              transform: isDonePage ? `translateX(calc(-100% + ${60 - 3}px))` : void 0
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollapseBar, {
                to: "/task/done" /* TaskDone */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                  sub: `\u5DF2\u5B8C\u6210 ${doneCount}`,
                  children: "Done"
                }, void 0, !1, {
                  fileName: "app/routes/task.tsx",
                  lineNumber: 141,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 140,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fade, {
                isOpen: isDonePage,
                h: "full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(done_default, {}, void 0, !1, {
                  fileName: "app/routes/task.tsx",
                  lineNumber: 144,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/task.tsx",
                lineNumber: 143,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/task.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/task.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/task.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/task/index.tsx
var task_exports2 = {};
__export(task_exports2, {
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");
var loader3 = async () => {
  throw (0, import_node3.redirect)("/task/todo" /* TaskTodo */);
};

// app/routes/sgn.tsx
var sgn_exports = {};
__export(sgn_exports, {
  default: () => Sgn
});
var import_react68 = require("@chakra-ui/react");

// app/components/SgnComponents/SgnTitleIcon.tsx
var import_react63 = require("@chakra-ui/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), IconS = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react63.Icon, {
  viewBox: "0 0 98 98",
  ...props,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    d: "M14 98V84H0V70H28V84H70V56H14V42H0V14H14V0H84V14H98V28H70V14H28V42H84V56H98V84H84V98H14Z",
    fill: "currentColor"
  }, void 0, !1, {
    fileName: "app/components/SgnComponents/SgnTitleIcon.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/SgnComponents/SgnTitleIcon.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), IconG = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react63.Icon, {
  viewBox: "0 0 98 98",
  ...props,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    d: "M28 98V84H14V70H0V28H14V14H28V0H98V14H42V28H28V70H42V84H70V56H56V42H98V98H28Z",
    fill: "currentColor"
  }, void 0, !1, {
    fileName: "app/components/SgnComponents/SgnTitleIcon.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/SgnComponents/SgnTitleIcon.tsx",
  lineNumber: 18,
  columnNumber: 5
}, this), IconN = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react63.Icon, {
  viewBox: "0 0 98 98",
  ...props,
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    d: "M0 98V0H28V14H42V28H56V42H70V0H98V98H70V70H56V56H42V42H28V98H0Z",
    fill: "currentColor"
  }, void 0, !1, {
    fileName: "app/components/SgnComponents/SgnTitleIcon.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/SgnComponents/SgnTitleIcon.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this);

// app/components/ButtonWithShadow/index.tsx
var import_react64 = require("@chakra-ui/react"), import_react65 = require("@chakra-ui/react"), import_react66 = require("@chakra-ui/react"), import_react67 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ButtonWithShadow = (0, import_react67.forwardRef)(({ bg, children, ...props }, ref) => {
  let [fill] = (0, import_react64.useToken)("colors", [bg]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react66.Button, {
    ref,
    variant: "unstyled",
    rounded: "0",
    lineHeight: "44px",
    h: "44px",
    display: "inline-flex",
    fontSize: "24px",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react65.Box, {
        bg,
        as: "span",
        display: "inline-flex",
        pl: "16px",
        pr: "8px",
        alignItems: "center",
        children
      }, void 0, !1, {
        fileName: "app/components/ButtonWithShadow/index.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react66.Icon, {
        viewBox: "0 0 17 44",
        h: "inherit",
        w: "auto",
        ml: "2px",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            width: "4",
            height: "44",
            fill
          }, void 0, !1, {
            fileName: "app/components/ButtonWithShadow/index.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            x: "6",
            width: "2",
            height: "44",
            fill
          }, void 0, !1, {
            fileName: "app/components/ButtonWithShadow/index.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            x: "10",
            width: "1",
            height: "44",
            fill
          }, void 0, !1, {
            fileName: "app/components/ButtonWithShadow/index.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            x: "13",
            width: "1",
            height: "44",
            fill
          }, void 0, !1, {
            fileName: "app/components/ButtonWithShadow/index.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            x: "16",
            width: "1",
            height: "44",
            fill
          }, void 0, !1, {
            fileName: "app/components/ButtonWithShadow/index.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/ButtonWithShadow/index.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ButtonWithShadow/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
});

// app/routes/sgn.tsx
var import_swr4 = __toESM(require("swr"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), animationKeyframes = import_react68.keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`, DataSetStack = ({ items, owners, price, totalVolume, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
  spacing: "80px",
  whiteSpace: "nowrap",
  px: "25px",
  ...props,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
      spacing: "16px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
          children: "ITEMS"
        }, void 0, !1, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
          children: items || "-"
        }, void 0, !1, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/sgn.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
      spacing: "16px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
          children: "OWNERS"
        }, void 0, !1, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
          children: owners || "-"
        }, void 0, !1, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/sgn.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
      spacing: "16px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
          children: "FLOOR PRICE"
        }, void 0, !1, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Flex, {
          align: "center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
              src: "/assets/svg/ether.svg",
              w: "16px",
              h: "26px",
              mr: "4px"
            }, void 0, !1, {
              fileName: "app/routes/sgn.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            price || "-"
          ]
        }, void 0, !0, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/sgn.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
      spacing: "16px",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
          children: "TOTAL VOLUME"
        }, void 0, !1, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
          children: totalVolume || "-"
        }, void 0, !1, {
          fileName: "app/routes/sgn.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/sgn.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/routes/sgn.tsx",
  lineNumber: 40,
  columnNumber: 5
}, this);
function Sgn() {
  let api = useAPI(), { data } = (0, import_swr4.default)(
    ["GetSgnStatisticalData" /* GetSgnStatisticalData */],
    () => api.getSgnStatisticalData()
  ), env = useEnv();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollContainer, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
        position: "relative",
        h: "2200px",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StripeBackground, {
            h: "full",
            zIndex: 1
          }, void 0, !1, {
            fileName: "app/routes/sgn.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
            position: "relative",
            zIndex: 2,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Heading, {
                textTransform: "uppercase",
                fontSize: "140px",
                position: "absolute",
                top: "60px",
                left: "173px",
                fontWeight: "400",
                children: [
                  "Mint",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
                    spacing: "14px",
                    display: "inline-flex",
                    ml: "42px",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconS, {
                        w: "98px",
                        h: "98px",
                        color: "adorn.100"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 86,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconG, {
                        w: "98px",
                        h: "98px",
                        color: "attention.100"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 87,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconN, {
                        w: "98px",
                        h: "98px",
                        color: "pass.100"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 88,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 85,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 76,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Grid, {
                templateColumns: "calc(100% / calc(7/3)) calc(100% / calc(7/3))",
                position: "absolute",
                top: "289px",
                left: "183px",
                gridColumnGap: "calc(100% / calc(7/1))",
                w: `calc(${STRIPE_WIDTH}px * 7)`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Heading, {
                        as: "h3",
                        textTransform: "uppercase",
                        fontSize: "44px",
                        lineHeight: "120%",
                        fontWeight: "semibold",
                        children: "SGN Utility"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                        fontSize: "20px",
                        mt: "20px",
                        textAlign: "justify",
                        textTransform: "uppercase",
                        children: "SGN, \u5168\u79F0 SeeDAO Genesis NFT\uFF0C\u8C61\u5F81\u7740SeeDAO \u6B63\u5F0F\u6210\u5458\u8EAB\u4EFD\uFF0C\u4E5F\u4EE3\u8868SeeDAO\u6CBB\u7406\u6743\u548C\u88AB\u9009\u4E3E\u6743\uFF0C\u662F SeeDAO \u751F\u6001\u6700\u91CD\u8981\u7684 NFT\u3002\u6570\u76EE\u6682\u5B9A\u4E3A 10000 \u679A\uFF0C\u53EA\u9881\u53D1\u7ED9\u793E\u533A\u8D21\u732E\u8005\uFF0C\u575A\u6301 POW \u539F\u5219\u3002"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 109,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
                        mt: "96px",
                        spacing: "30px",
                        textTransform: "uppercase",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonWithShadow, {
                            bg: "pass.100",
                            color: "primary.100",
                            textTransform: "uppercase",
                            children: [
                              "Mint",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
                                src: "/assets/svg/start-arrow.svg",
                                alt: "arrow",
                                w: "24px",
                                h: "24px",
                                ml: "20px"
                              }, void 0, !1, {
                                fileName: "app/routes/sgn.tsx",
                                lineNumber: 127,
                                columnNumber: 19
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/sgn.tsx",
                            lineNumber: 121,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonWithShadow, {
                            as: "a",
                            bg: "secondary.900",
                            color: "primary.100",
                            textTransform: "uppercase",
                            href: env.OPENSEA_URL,
                            children: [
                              "Opensea",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
                                src: "/assets/svg/external_link.svg",
                                alt: "arrow",
                                w: "24px",
                                h: "24px",
                                ml: "20px"
                              }, void 0, !1, {
                                fileName: "app/routes/sgn.tsx",
                                lineNumber: 143,
                                columnNumber: 19
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/sgn.tsx",
                            lineNumber: 135,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 120,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 99,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
                    src: "/assets/png/union.png",
                    alt: "union",
                    w: "460px",
                    pointerEvents: "none"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 153,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 91,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.VStack, {
                position: "absolute",
                top: "813px",
                left: "183px",
                w: `${STRIPE_WIDTH * 3}px`,
                fontSize: "20px",
                spacing: "20px",
                textAlign: "justify",
                textTransform: "uppercase",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                    sub: "\u6CBB\u7406",
                    w: "full",
                    color: "adorn.100",
                    children: "govern"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 170,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                    w: "full",
                    children: "SGN \u6301\u6709\u8005\u662F SeeDAO \u751F\u6001\u5C45\u6C11\uFF0C\u62E5\u6709\u793E\u533A\u5927\u4F1A\u6295\u7968\u6743\u548C\u88AB\u9009\u4E3E\u6743"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 173,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                    w: "full",
                    children: "\u6DF1\u5EA6\u53C2\u4E0E\u5404\u4E2A\u516C\u4F1A\u6838\u5FC3\u4E8B\u52A1\u7684\u6743\u5229"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 176,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 160,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.VStack, {
                position: "absolute",
                top: "1081px",
                left: "490px",
                w: `${STRIPE_WIDTH * 3}px`,
                fontSize: "20px",
                spacing: "20px",
                textAlign: "justify",
                textTransform: "uppercase",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                    sub: "\u5B75\u5316",
                    w: "full",
                    color: "attention.100",
                    children: "Incubation"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 188,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                    w: "full",
                    children: "\u5E2E\u52A9\u6BCF\u4E00\u4F4D SGN \u6301\u6709\u8005\u5728SeeDAO\u5B9E\u73B0\u68A6\u60F3, \u4ECE Holder \u53D8\u6210 Builder"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                    w: "full",
                    children: "\u53EA\u6709SGN\u6301\u6709\u8005\u63D0\u51FA\u7684\u521BDAO\u60F3\u6CD5\u624D\u4F1A\u88ABSeeDAO\u5B75\u5316, \u88AB\u793E\u533A\u57FA\u91D1\u652F\u6301"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 194,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 178,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.VStack, {
                position: "absolute",
                top: "1381px",
                left: "796px",
                w: `${STRIPE_WIDTH * 3}px`,
                fontSize: "20px",
                spacing: "20px",
                textAlign: "justify",
                textTransform: "uppercase",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                    sub: "\u7A7A\u6295",
                    w: "full",
                    color: "pass.100",
                    children: "Airdrop"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 208,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                    w: "full",
                    children: "\u672A\u6765SeeDAO\u53D1\u884C\u6CBB\u7406\u4EE3\u5E01\uFF0C SGN\u662F\u4EE3\u5E01\u7A7A\u6295\u7684\u4F9D\u636E"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 211,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                    w: "full",
                    children: "SeeDAO \u65E5\u5E38\u8BB0\u5F55\u8D21\u732E\u7684 Memory of SeeDAO NFT (MSN) \u4E5F\u662F\u7A7A\u6295\u4F9D\u636E"
                  }, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 212,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 198,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
                src: "/assets/png/sgn/avatars.png",
                alt: "avatars",
                position: "absolute",
                top: "1102px",
                left: "184px",
                w: "230px",
                h: "auto"
              }, void 0, !1, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 216,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Heading, {
                position: "absolute",
                top: "765px",
                textTransform: "uppercase",
                fontSize: "140px",
                lineHeight: "140px",
                left: "710px",
                fontWeight: "300",
                textAlign: "right",
                children: [
                  "SeeDAO",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 236,
                    columnNumber: 13
                  }, this),
                  "Genesis",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 238,
                    columnNumber: 13
                  }, this),
                  "NFT",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 240,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 225,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Heading, {
                position: "absolute",
                top: "1444px",
                textTransform: "uppercase",
                fontSize: "140px",
                lineHeight: "140px",
                left: "179px",
                fontWeight: "300",
                textAlign: "left",
                children: [
                  "HOW ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 252,
                    columnNumber: 17
                  }, this),
                  "TO ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 253,
                    columnNumber: 16
                  }, this),
                  "GET ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 254,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 242,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.HStack, {
                position: "absolute",
                left: "490px",
                top: "1745px",
                spacing: "153px",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
                    borderTop: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.900",
                    pt: "20px",
                    w: "306px",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                        sub: "\u5DE5\u4F5C\u91CF\u6316\u77FF",
                        textTransform: "none",
                        children: "PoW MINE"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 264,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                        mt: "20px",
                        mb: "45px",
                        children: "\u5927\u80C6\u53C2\u4E0ESeeDAO\u5404\u516C\u4F1A\uFF0C \u901A\u8FC7\u201C\u5DE5\u4F5C\u91CF\u8BC1\u660E\u201D\u6316\u6398SGN"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 267,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Link, {
                        fontSize: "24px",
                        fontWeight: "500",
                        display: "inline-flex",
                        alignItems: "center",
                        href: env.DISCORD_URL,
                        children: [
                          "JOIN SEEDAO",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
                            src: "/assets/svg/home-arrow.svg",
                            alt: "arrow",
                            w: "24px",
                            h: "24px",
                            ml: "20px"
                          }, void 0, !1, {
                            fileName: "app/routes/sgn.tsx",
                            lineNumber: 278,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 270,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 257,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
                    borderTop: "1px",
                    borderStyle: "solid",
                    borderColor: "secondary.900",
                    pt: "20px",
                    w: "306px",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingWithSub, {
                        sub: "\u8D2D\u4E70",
                        children: "MarketPlace"
                      }, void 0, !1, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 294,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Text, {
                        mt: "20px",
                        mb: "45px",
                        children: [
                          "\u9650\u5B9A\u53D1\u884C\u91CF\uFF0C ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                            fileName: "app/routes/sgn.tsx",
                            lineNumber: 296,
                            columnNumber: 24
                          }, this),
                          "\u76F4\u63A5\u4ECE\u4E8C\u7EA7\u5E02\u573A\u8D2D\u4E70"
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 295,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Link, {
                        fontSize: "24px",
                        fontWeight: "500",
                        display: "inline-flex",
                        alignItems: "center",
                        href: env.OPENSEA_URL,
                        children: [
                          "TO BUY",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
                            src: "/assets/svg/home-arrow.svg",
                            alt: "arrow",
                            w: "24px",
                            h: "24px",
                            ml: "20px"
                          }, void 0, !1, {
                            fileName: "app/routes/sgn.tsx",
                            lineNumber: 307,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/sgn.tsx",
                        lineNumber: 299,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/sgn.tsx",
                    lineNumber: 287,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 256,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/sgn.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/sgn.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Flex, {
        position: "absolute",
        h: "60px",
        w: "full",
        borderTop: "1px solid",
        borderColor: "secondary.900",
        bg: "primary.900",
        bottom: "0",
        left: "0",
        lineHeight: "60px",
        fontSize: "36px",
        fontWeight: "400",
        zIndex: 3,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Flex, {
            h: "inherit",
            align: "center",
            px: "30px",
            borderRight: "1px solid",
            borderColor: "secondary.900",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Image, {
                src: "/assets/svg/social/opensea.svg",
                w: "36px",
                h: "36px",
                mr: "10px"
              }, void 0, !1, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 340,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Box, {
                children: "OPENSEA DATA"
              }, void 0, !1, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 346,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/sgn.tsx",
            lineNumber: 333,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Flex, {
            flex: 1,
            overflow: "hidden",
            position: "relative",
            children: data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Flex, {
              flex: 1,
              overflow: "hidden",
              position: "absolute",
              animation: `${animationKeyframes} 10s linear infinite`,
              children: new Array(2).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataSetStack, {
                items: data == null ? void 0 : data.totals,
                owners: data == null ? void 0 : data.holder,
                price: data == null ? void 0 : data.floor_price,
                totalVolume: data == null ? void 0 : data.trade_volume
              }, i, !1, {
                fileName: "app/routes/sgn.tsx",
                lineNumber: 362,
                columnNumber: 17
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/sgn.tsx",
              lineNumber: 355,
              columnNumber: 13
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Flex, {
              px: "25px",
              textTransform: "uppercase",
              align: "center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Spinner, {
                  w: "36px",
                  h: "36px",
                  mr: "10px",
                  my: "auto"
                }, void 0, !1, {
                  fileName: "app/routes/sgn.tsx",
                  lineNumber: 351,
                  columnNumber: 15
                }, this),
                "Loading..."
              ]
            }, void 0, !0, {
              fileName: "app/routes/sgn.tsx",
              lineNumber: 350,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/sgn.tsx",
            lineNumber: 348,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/sgn.tsx",
        lineNumber: 319,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/sgn.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f6db34fe", entry: { module: "/build/entry.client-UL2UZOVO.js", imports: ["/build/_shared/chunk-D6TESDBQ.js", "/build/_shared/chunk-T5RNB5I3.js", "/build/_shared/chunk-VFZ2QWLC.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BDW7F2TR.js", imports: ["/build/_shared/chunk-5JKD6TOQ.js", "/build/_shared/chunk-MWFVK3Z2.js", "/build/_shared/chunk-262VCTDG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/deschool": { id: "routes/deschool", parentId: "root", path: "deschool", index: void 0, caseSensitive: void 0, module: "/build/routes/deschool-GAEFC6YM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/event": { id: "routes/event", parentId: "root", path: "event", index: void 0, caseSensitive: void 0, module: "/build/routes/event-JS5TZVIE.js", imports: ["/build/_shared/chunk-ADHTSXE5.js", "/build/_shared/chunk-LZ3QM5GG.js", "/build/_shared/chunk-NKVHPBWS.js", "/build/_shared/chunk-DBQHV4S6.js", "/build/_shared/chunk-ORQLACMN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/govern": { id: "routes/govern", parentId: "root", path: "govern", index: void 0, caseSensitive: void 0, module: "/build/routes/govern-F3F3M7PN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-NWQ5ZQ4T.js", imports: ["/build/_shared/chunk-72VU5P4G.js", "/build/_shared/chunk-PXRJAQ6L.js", "/build/_shared/chunk-CCB7RY6C.js", "/build/_shared/chunk-CJWBUDRM.js", "/build/_shared/chunk-Q55VOXZQ.js", "/build/_shared/chunk-Y4EUKNAZ.js", "/build/_shared/chunk-Z6NX6EGK.js", "/build/_shared/chunk-MX4XZDCC.js", "/build/_shared/chunk-ADHTSXE5.js", "/build/_shared/chunk-NKVHPBWS.js", "/build/_shared/chunk-ORQLACMN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/about": { id: "routes/home/about", parentId: "routes/home", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/home/about-F4XVQMKK.js", imports: ["/build/_shared/chunk-262VCTDG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/index": { id: "routes/home/index", parentId: "routes/home", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home/index-OFAZCWKY.js", imports: ["/build/_shared/chunk-5JKD6TOQ.js", "/build/_shared/chunk-262VCTDG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/roadmap": { id: "routes/home/roadmap", parentId: "routes/home", path: "roadmap", index: void 0, caseSensitive: void 0, module: "/build/routes/home/roadmap-7Z3EHW7F.js", imports: ["/build/_shared/chunk-262VCTDG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-FAQJBYEJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/member": { id: "routes/member", parentId: "root", path: "member", index: void 0, caseSensitive: void 0, module: "/build/routes/member-3TR4RJCK.js", imports: ["/build/_shared/chunk-Z6NX6EGK.js", "/build/_shared/chunk-MX4XZDCC.js", "/build/_shared/chunk-DBQHV4S6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/poap": { id: "routes/poap", parentId: "root", path: "poap", index: void 0, caseSensitive: void 0, module: "/build/routes/poap-4YESW2IS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sgn": { id: "routes/sgn", parentId: "root", path: "sgn", index: void 0, caseSensitive: void 0, module: "/build/routes/sgn-JZUP2T5P.js", imports: ["/build/_shared/chunk-Y4EUKNAZ.js", "/build/_shared/chunk-NKVHPBWS.js", "/build/_shared/chunk-AQRYQYP5.js", "/build/_shared/chunk-ORQLACMN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/start": { id: "routes/start", parentId: "root", path: "start", index: void 0, caseSensitive: void 0, module: "/build/routes/start-6KZW6JGO.js", imports: ["/build/_shared/chunk-AQRYQYP5.js", "/build/_shared/chunk-ORQLACMN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/task": { id: "routes/task", parentId: "root", path: "task", index: void 0, caseSensitive: void 0, module: "/build/routes/task-4UOGAC6E.js", imports: ["/build/_shared/chunk-XJLURLX2.js", "/build/_shared/chunk-WD24IMTP.js", "/build/_shared/chunk-Q55VOXZQ.js", "/build/_shared/chunk-SCC2IQPU.js", "/build/_shared/chunk-CQONYM4A.js", "/build/_shared/chunk-Y4EUKNAZ.js", "/build/_shared/chunk-LZ3QM5GG.js", "/build/_shared/chunk-NKVHPBWS.js", "/build/_shared/chunk-DBQHV4S6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/task/done": { id: "routes/task/done", parentId: "routes/task", path: "done", index: void 0, caseSensitive: void 0, module: "/build/routes/task/done-RQ5PJQQJ.js", imports: ["/build/_shared/chunk-5JKD6TOQ.js", "/build/_shared/chunk-262VCTDG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/task/index": { id: "routes/task/index", parentId: "routes/task", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/task/index-3B6HXKIH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/task/on_progress": { id: "routes/task/on_progress", parentId: "routes/task", path: "on_progress", index: void 0, caseSensitive: void 0, module: "/build/routes/task/on_progress-43O3PQ63.js", imports: ["/build/_shared/chunk-5JKD6TOQ.js", "/build/_shared/chunk-262VCTDG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/task/todo": { id: "routes/task/todo", parentId: "routes/task", path: "todo", index: void 0, caseSensitive: void 0, module: "/build/routes/task/todo-ZVWYF6CM.js", imports: ["/build/_shared/chunk-5JKD6TOQ.js", "/build/_shared/chunk-262VCTDG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F6DB34FE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/deschool": {
    id: "routes/deschool",
    parentId: "root",
    path: "deschool",
    index: void 0,
    caseSensitive: void 0,
    module: deschool_exports
  },
  "routes/govern": {
    id: "routes/govern",
    parentId: "root",
    path: "govern",
    index: void 0,
    caseSensitive: void 0,
    module: govern_exports
  },
  "routes/member": {
    id: "routes/member",
    parentId: "root",
    path: "member",
    index: void 0,
    caseSensitive: void 0,
    module: member_exports
  },
  "routes/event": {
    id: "routes/event",
    parentId: "root",
    path: "event",
    index: void 0,
    caseSensitive: void 0,
    module: event_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/start": {
    id: "routes/start",
    parentId: "root",
    path: "start",
    index: void 0,
    caseSensitive: void 0,
    module: start_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports2
  },
  "routes/home/roadmap": {
    id: "routes/home/roadmap",
    parentId: "routes/home",
    path: "roadmap",
    index: void 0,
    caseSensitive: void 0,
    module: roadmap_exports
  },
  "routes/home/about": {
    id: "routes/home/about",
    parentId: "routes/home",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/home/index": {
    id: "routes/home/index",
    parentId: "routes/home",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/poap": {
    id: "routes/poap",
    parentId: "root",
    path: "poap",
    index: void 0,
    caseSensitive: void 0,
    module: poap_exports
  },
  "routes/task": {
    id: "routes/task",
    parentId: "root",
    path: "task",
    index: void 0,
    caseSensitive: void 0,
    module: task_exports
  },
  "routes/task/on_progress": {
    id: "routes/task/on_progress",
    parentId: "routes/task",
    path: "on_progress",
    index: void 0,
    caseSensitive: void 0,
    module: on_progress_exports
  },
  "routes/task/index": {
    id: "routes/task/index",
    parentId: "routes/task",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: task_exports2
  },
  "routes/task/done": {
    id: "routes/task/done",
    parentId: "routes/task",
    path: "done",
    index: void 0,
    caseSensitive: void 0,
    module: done_exports
  },
  "routes/task/todo": {
    id: "routes/task/todo",
    parentId: "routes/task",
    path: "todo",
    index: void 0,
    caseSensitive: void 0,
    module: todo_exports
  },
  "routes/sgn": {
    id: "routes/sgn",
    parentId: "root",
    path: "sgn",
    index: void 0,
    caseSensitive: void 0,
    module: sgn_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
