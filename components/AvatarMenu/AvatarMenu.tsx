import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";

export const AvatarMenu = ({ user }) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user.name}
          size="sm"
          src={user.picture}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">{user.name}</p>
          <p className="font-semibold">{user.email}</p>
        </DropdownItem>

        <DropdownItem
          key="logout"
          color="danger"
          as={Link}
          href={"/api/auth/logout"}
        >
          Вийти
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};