import * as React from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Card,
  Navbar,
  List,
  Avatar,
  Menu,
  Tooltip,
} from "@material-tailwind/react";
import { BiSupport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { IoMenu,IoSettingsOutline  } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { FaArrowDown,FaCircleXmark  } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";



function NavList() {
    return (
      <>
        {LINKS.map(({ icon: Icon, title, href }) => (
          <List.Item key={title} as="a" href={href}>
            <List.ItemStart className="mr-1.5">
              <Icon className="h-4 w-4" />
            </List.ItemStart>
            <Typography type="small">{title}</Typography>
          </List.Item>
        ))}
      </>
    );
  }
  
  function ProfileMenu() {
    return (
      <Menu>
        <Menu.Trigger
          as={Avatar}
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
          alt="profile-picture"
          size="sm"
          className="border border-primary p-0.5 lg:ml-auto"
        />
        <Menu.Content>
          <Menu.Item>
            <FaRegUserCircle className="mr-2 h-[18px] w-[18px]" /> My Profile
          </Menu.Item>
          <Menu.Item>
            <IoSettingsOutline className="mr-2 h-[18px] w-[18px]" /> Edit Profile
          </Menu.Item>
          <Menu.Item>
            <BiSupport className="mr-2 h-[18px] w-[18px]" /> Support
          </Menu.Item>
          <hr className="!my-1 -mx-1 border-secondary-dark" />
          <Menu.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error dark:hover:text-error dark:focus:text-error">
            <MdLogout className="mr-2 h-[18px] w-[18px]" />
            Logout
          </Menu.Item>
        </Menu.Content>
      </Menu>
    );
  }
  
  const MenuItem = React.forwardRef<
    typeof Menu.Item
    
  (({ title, description, icon: Icon, ...rest }, ref) => {
    return (
      <List.Item ref={ref} as="a" href="#" className="p-1.5" {...rest}>
        {Icon && (
          <List.ItemStart>
            <div className="flex items-center justify-center rounded-[5px] bg-surface-light p-2">
              <Icon className="h-6 w-6 text-black dark:text-white" />
            </div>
          </List.ItemStart>
        )}
        <div className="leading-none">
          <Typography color="default" className="mb-0.5 text-sm font-semibold">
            {title}
          </Typography>
          <Typography type="small" className="text-xs text-foreground">
            {description}
          </Typography>
        </div>
      </List.Item>
    );
  });
const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    const renderItems = navListMenuItems.map(
      ({ icon, title, description }, key) => (
        <MenuItem key={key} title={title} description={description} icon={icon} />
      ),
    );
  
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
  
    return (
      <Navbar className="mx-auto w-full max-w-screen-xl">
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            type="small"
            className="ml-2 mr-2 block py-1 font-semibold"
          >
            Material Tailwind
          </Typography>
          <hr className="mx-1 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
          <div className="hidden lg:block">
            <List className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center">
              <Tooltip placement="bottom" interactive>
                <Tooltip.Trigger>
                  <List.Item>
                    <List.ItemStart className="me-1.5">
                      <RiPagesLine className="h-4 w-4" />
                    </List.ItemStart>
                    <Typography type="small">Pages</Typography>
                    <List.ItemEnd className="ps-1">
                      <FaArrowDown className="h-3.5 w-3.5 group-data-[open=true]:rotate-180" />
                    </List.ItemEnd>
                  </List.Item>
                </Tooltip.Trigger>
                <Tooltip.Content className="z-[100000] grid max-w-screen-xl rounded-lg border border-surface bg-background p-2 shadow-xl shadow-surface/10 dark:border-surface dark:bg-background">
                  <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip>
              <NavList />
            </List>
          </div>
          <IconButton
            size="sm"
            variant="ghost"
            color="secondary"
            onClick={() => setOpenNav(!openNav)}
            className="ml-auto mr-2 grid lg:hidden"
          >
            {openNav ? (
              <FaCircleXmark className="h-4 w-4" />
            ) : (
              <IoMenu className="h-4 w-4" />
            )}
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse open={openNav}>
          <ul className="grid grid-cols-1 gap-y-2 md:grid-cols-2">
            {renderItems}
          </ul>
          <NavList />
        </Collapse>
      </Navbar>
    );
  }
export default NavBar