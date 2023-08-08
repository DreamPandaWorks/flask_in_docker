import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";

import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VideocamIcon from "@mui/icons-material/Videocam";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

// creators components
import CreatorsDivider from "./CreatorsDivider";

const dashBoardItem = [
  { name: "ダッシュボード", icon: HomeOutlinedIcon, to: "/creator/dashboard" },
];

const salonListItems = [
  { name: "サロン情報編集", icon: PersonIcon, to: "/creator/salon/edit" },
  {
    name: "サロンプラン一覧",
    icon: CropSquareIcon,
    to: "/creator/salon/plans",
  },
  { name: "会員一覧", icon: ListAltIcon, to: "/creator/members" },
];

const earningListItems = [
  { name: "売上管理", icon: CurrencyYenIcon, to: "/creator/earning" },
  { name: "コンテンツ注文一覧", icon: ReceiptIcon, to: "/creator/orders" },
  {
    name: "サブスクリプション売上一覧",
    icon: HowToRegIcon,
    to: "/creator/subscription/orders",
  },
];

const contentsListItems = [
  { name: "動画一覧", icon: VideocamIcon, to: "/creator/videos" },
  { name: "動画作成", icon: AddIcon, to: "/creator/videos/create" },
  { name: "テキスト一覧", icon: NoteAltIcon, to: "/creator/texts" },
  { name: "テキスト作成", icon: AddIcon, to: "/creator/texts/create" },
  { name: "掲示板一覧", icon: AssignmentIcon, to: "/creator/boards" },
];

const itemListItems = [
  { name: "商品一覧", icon: InventoryIcon, to: "/creator/items" },
  { name: "商品登録", icon: AddIcon, to: "/creator/items/create" },
];

const orderListItems = [
  { name: "受注一覧", icon: ShoppingCartIcon, to: "/creator/videos" },
  { name: "受注登録", icon: AddIcon, to: "/creator/videos/create" },
];

const subListItems = [
  {
    name: "お知らせ一覧",
    icon: NotificationsIcon,
    to: "/creator/notifications",
  },
  { name: "ログアウト", icon: LogoutIcon, to: "/creator/logout" },
];

const CreatorsMobileDrawerMenu = ({
  isOpenDrawer,
  drawerToggle,
  salonTab = false,
  earningTab = false,
  contentsTab = false,
  itemTab = false,
  shippingTab = false,
  currentLocation = "ダッシュボード",
}) => {
  // サロン関連タブの開閉
  const [salonTabOpen, setSalonTabOpen] = useState(salonTab);
  const salonTabOpenClick = () => {
    setSalonTabOpen(!salonTabOpen);
  };

  // 売上関連タブの開閉
  const [earningTabOpen, setEarningTabOpen] = useState(earningTab);
  const earningTabOpenClick = () => {
    setEarningTabOpen(!earningTabOpen);
  };

  // コンテンツ関連タブの開閉
  const [contentsTabOpen, setContentsTabOpen] = useState(contentsTab);
  const contentsTabOpenClick = () => {
    setContentsTabOpen(!contentsTabOpen);
  };

  // 商品関連タブの開閉
  const [itemTabOpen, setItemTabOpen] = useState(itemTab);
  const itemTabOpenClick = () => {
    setItemTabOpen(!itemTabOpen);
  };

  // 受注関連タブの開閉
  const [shippingTabOpen, setShippingTabOpen] = useState(shippingTab);
  const shippingTabOpenClick = () => {
    setShippingTabOpen(!shippingTabOpen);
  };

  const drawerWidth = 240;
  return (
    <React.Fragment>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#4B4A48",
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: drawerWidth },
          },
        }}
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open={isOpenDrawer}
        onClose={drawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          sx={{
            width: "280",
            backgroundColor: "#FFFFFF",
            color: "#4B4A48",
            paddingTop: "0.4rem",
            paddingBottom: "0.3rem",
            display: "flex",
          }}
        >
          <Avatar
            variant="circle"
            sx={{ margin: "0.4rem", width: "56", height: "56" }}
          >
            O
          </Avatar>
          <Typography
            variant="body1"
            component="div"
            sx={{
              margin: "0.4rem",
              color: "#4B4A48",
              display: "flex",
              alignItems: "center",
            }}
          >
            onstep
          </Typography>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />

        {/** ダッシュボード */}
        <Box role="presentation">
          <List>
            {dashBoardItem.map((item) => (
              <Link
                href={`${item.to}`}
                key={item.name}
                color="inherit"
                underline="none"
              >
                <ListItem
                  disablePadding
                  sx={{
                    "& .MuiListItemButton-root": {
                      "&.Mui-selected": {
                        backgroundColor: "rgba(255, 92, 64, 0.7)",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "rgba(255, 92, 64, 0.9)",
                      },
                    },
                    "& .MuiListItemButton-root:hover": {
                      backgroundColor: "rgba(255, 92, 64, 0.4)",
                    },
                  }}
                >
                  <ListItemButton selected={currentLocation === item.name}>
                    <ListItemIcon>
                      {(() => {
                        return <item.icon sx={{ color: "#FFFFFF" }} />;
                      })()}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ color: "#FFFFFF" }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />
        {/** サロン関連 */}
        <Box role="presentation">
          <List>
            <ListItemButton onClick={salonTabOpenClick}>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                <Diversity3OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="サロン関連" sx={{ color: "#FFFFFF" }} />
              {salonTabOpen ? (
                <ExpandLess sx={{ color: "#FFFFFF" }} />
              ) : (
                <ExpandMore sx={{ color: "#FFFFFF" }} />
              )}
            </ListItemButton>
            <Collapse in={salonTabOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {salonListItems.map((item) => (
                  <Link
                    href={`${item.to}`}
                    key={item.name}
                    color="inherit"
                    underline="none"
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        "& .MuiListItemButton-root": {
                          "&.Mui-selected": {
                            backgroundColor: "rgba(255, 92, 64, 0.7)",
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "rgba(255, 92, 64, 0.9)",
                          },
                        },
                        "& .MuiListItemButton-root:hover": {
                          backgroundColor: "rgba(255, 92, 64, 0.4)",
                        },
                      }}
                    >
                      <ListItemButton
                        selected={currentLocation === item.name}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          {(() => {
                            return <item.icon sx={{ color: "#FFFFFF" }} />;
                          })()}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          sx={{ color: "#FFFFFF" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />

        {/** 売上関連 */}
        <Box role="presentation">
          <List>
            <ListItemButton onClick={earningTabOpenClick}>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                <SavingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="売上関連" sx={{ color: "#FFFFFF" }} />
              {earningTabOpen ? (
                <ExpandLess sx={{ color: "#FFFFFF" }} />
              ) : (
                <ExpandMore sx={{ color: "#FFFFFF" }} />
              )}
            </ListItemButton>
            <Collapse in={earningTabOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {earningListItems.map((item) => (
                  <Link
                    href={`${item.to}`}
                    key={item.name}
                    color="inherit"
                    underline="none"
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        "& .MuiListItemButton-root": {
                          "&.Mui-selected": {
                            backgroundColor: "rgba(255, 92, 64, 0.7)",
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "rgba(255, 92, 64, 0.9)",
                          },
                        },
                        "& .MuiListItemButton-root:hover": {
                          backgroundColor: "rgba(255, 92, 64, 0.4)",
                        },
                      }}
                    >
                      <ListItemButton
                        selected={currentLocation === item.name}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          {(() => {
                            return <item.icon sx={{ color: "#FFFFFF" }} />;
                          })()}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          sx={{ color: "#FFFFFF" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />

        {/** コンテンツ関連 */}
        <Box role="presentation">
          <List>
            <ListItemButton onClick={contentsTabOpenClick}>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                <SlideshowOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="コンテンツ管理"
                sx={{ color: "#FFFFFF" }}
              />
              {contentsTabOpen ? (
                <ExpandLess sx={{ color: "#FFFFFF" }} />
              ) : (
                <ExpandMore sx={{ color: "#FFFFFF" }} />
              )}
            </ListItemButton>
            <Collapse in={contentsTabOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {contentsListItems.map((item) => (
                  <Link
                    href={`${item.to}`}
                    key={item.name}
                    color="inherit"
                    underline="none"
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        "& .MuiListItemButton-root": {
                          "&.Mui-selected": {
                            backgroundColor: "rgba(255, 92, 64, 0.7)",
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "rgba(255, 92, 64, 0.9)",
                          },
                        },
                        "& .MuiListItemButton-root:hover": {
                          backgroundColor: "rgba(255, 92, 64, 0.4)",
                        },
                      }}
                    >
                      <ListItemButton
                        selected={currentLocation === item.name}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          {(() => {
                            return <item.icon sx={{ color: "#FFFFFF" }} />;
                          })()}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          sx={{ color: "#FFFFFF" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />

        {/** 商品関連 */}
        <Box role="presentation">
          <List>
            <ListItemButton onClick={itemTabOpenClick}>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                <ShoppingBagIcon />
              </ListItemIcon>
              <ListItemText primary="商品管理" sx={{ color: "#FFFFFF" }} />
              {itemTabOpen ? (
                <ExpandLess sx={{ color: "#FFFFFF" }} />
              ) : (
                <ExpandMore sx={{ color: "#FFFFFF" }} />
              )}
            </ListItemButton>
            <Collapse in={itemTabOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {itemListItems.map((item) => (
                  <Link
                    href={`${item.to}`}
                    key={item.name}
                    color="inherit"
                    underline="none"
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        "& .MuiListItemButton-root": {
                          "&.Mui-selected": {
                            backgroundColor: "rgba(255, 92, 64, 0.7)",
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "rgba(255, 92, 64, 0.9)",
                          },
                        },
                        "& .MuiListItemButton-root:hover": {
                          backgroundColor: "rgba(255, 92, 64, 0.4)",
                        },
                      }}
                    >
                      <ListItemButton
                        selected={currentLocation === item.name}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          {(() => {
                            return <item.icon sx={{ color: "#FFFFFF" }} />;
                          })()}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          sx={{ color: "#FFFFFF" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />

        {/** 受注関連 */}
        <Box role="presentation">
          <List>
            <ListItemButton onClick={shippingTabOpenClick}>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="受注管理" sx={{ color: "#FFFFFF" }} />
              {shippingTabOpen ? (
                <ExpandLess sx={{ color: "#FFFFFF" }} />
              ) : (
                <ExpandMore sx={{ color: "#FFFFFF" }} />
              )}
            </ListItemButton>
            <Collapse in={shippingTabOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {orderListItems.map((item) => (
                  <Link
                    href={`${item.to}`}
                    key={item.name}
                    color="inherit"
                    underline="none"
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        "& .MuiListItemButton-root": {
                          "&.Mui-selected": {
                            backgroundColor: "rgba(255, 92, 64, 0.7)",
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "rgba(255, 92, 64, 0.9)",
                          },
                        },
                        "& .MuiListItemButton-root:hover": {
                          backgroundColor: "rgba(255, 92, 64, 0.4)",
                        },
                      }}
                    >
                      <ListItemButton
                        selected={currentLocation === item.name}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          {(() => {
                            return <item.icon sx={{ color: "#FFFFFF" }} />;
                          })()}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          sx={{ color: "#FFFFFF" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />

        <Box role="presentation">
          <List>
            {subListItems.map((item) => (
              <Link
                href={`${item.to}`}
                key={item.name}
                color="inherit"
                underline="none"
              >
                <ListItem
                  disablePadding
                  sx={{
                    "& .MuiListItemButton-root": {
                      "&.Mui-selected": {
                        backgroundColor: "rgba(255, 92, 64, 0.7)",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "rgba(255, 92, 64, 0.9)",
                      },
                    },
                    "& .MuiListItemButton-root:hover": {
                      backgroundColor: "rgba(255, 92, 64, 0.4)",
                    },
                  }}
                >
                  <ListItemButton selected={currentLocation === item.name}>
                    <ListItemIcon>
                      {(() => {
                        return <item.icon sx={{ color: "#FFFFFF" }} />;
                      })()}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ color: "#FFFFFF" }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
        <CreatorsDivider sx={{ backgroundColor: "#DEDEDE" }} />
      </Drawer>
    </React.Fragment>
  );
};

export default CreatorsMobileDrawerMenu;
