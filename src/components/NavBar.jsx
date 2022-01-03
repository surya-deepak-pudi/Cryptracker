import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined"
import { makeStyles } from "@material-ui/core/styles"
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects"
import Link from "../router/link"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MoreIcon from "@material-ui/icons/MoreVert"
import { useState, useContext } from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { DarkContext } from "../context/context"

const mobileMenuId = "primary-search-account-menu-mobile"

const NavBar = ({ setDarkMode }) => {
  const matches = useMediaQuery("(min-width:525px)")
  const darkMode = useContext(DarkContext)
  console.log(darkMode)

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuIcon: {
      display: matches ? "none" : "visible",
    },
    linkButtons: {
      display: !matches ? "none" : "visible",
    },
  }))
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const handleOpen = (e) => {
    setMobileMoreAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setMobileMoreAnchorEl(null)
  }
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link href="/">
            <MenuIcon />
          </Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Box component="span">
          <Button
            style={{ color: "white" }}
            onClick={() => setDarkMode(!darkMode)}
          >
            <Link path="/"></Link>
            {!darkMode && (
              <>
                <EmojiObjectsIcon />
                <span id="light">Light</span>
              </>
            )}
            {darkMode && (
              <>
                <EmojiObjectsOutlinedIcon />
                <span id="dark">Dark</span>
              </>
            )}
          </Button>
          <Box component="span" className={classes.linkButtons}>
            <Link href="/loans">
              <Button color="inherit">Deposit</Button>
            </Link>
            <Link href="/crypto">
              <Button color="inherit">Crypto</Button>
            </Link>
            <Link href="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="/charts">
              <Button color="inherit">Charts</Button>
            </Link>
          </Box>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleOpen}
            color="inherit"
            className={classes.menuIcon}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "center", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "center", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/loans">
                <Button color="inherit">Deposit</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/crypto">
                <Button color="inherit">Crypto</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/login">
                <Button color="inherit">Login</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/charts">
                <Button color="inherit">Charts</Button>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

// import React from "react"
// import { alpha, makeStyles } from "@material-ui/core/styles"
// import AppBar from "@material-ui/core/AppBar"
// import Toolbar from "@material-ui/core/Toolbar"
// import IconButton from "@material-ui/core/IconButton"
// import Typography from "@material-ui/core/Typography"
// import InputBase from "@material-ui/core/InputBase"
// import Badge from "@material-ui/core/Badge"
// import MenuItem from "@material-ui/core/MenuItem"
// import Menu from "@material-ui/core/Menu"
// import MenuIcon from "@material-ui/icons/Menu"
// import SearchIcon from "@material-ui/icons/Search"
// import AccountCircle from "@material-ui/icons/AccountCircle"
// import MailIcon from "@material-ui/icons/Mail"
// import NotificationsIcon from "@material-ui/icons/Notifications"
// import MoreIcon from "@material-ui/icons/MoreVert"

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex",
//     },
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },
// }))

// export default function PrimarySearchAppBar() {
//   const classes = useStyles()
//   const [anchorEl, setAnchorEl] = React.useState(null)
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

//   const isMenuOpen = Boolean(anchorEl)
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//     handleMobileMenuClose()
//   }

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget)
//   }

//   const menuId = "primary-search-account-menu"
//   const renderMenu = (
//     <Menu
//       anchorReference="anchorEl"
//       anchorOrigin={{ vertical: "center", horizontal: "left" }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "left" }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   )

//   const mobileMenuId = "primary-search-account-menu-mobile"
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   )

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Material-UI
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ "aria-label": "search" }}
//             />
//           </div>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="secondary">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton aria-label="show 17 new notifications" color="inherit">
//               <Badge badgeContent={17} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   )
// }
