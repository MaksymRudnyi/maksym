import { signOut } from "@/auth";
import { UserProfile } from "@/types/UserProfile";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";

export const AvatarMenu = ({ user }: { user: UserProfile }) => {
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
          src={user.image}
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
          onClick={async () => await signOut()}
        >
          Вийти
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
