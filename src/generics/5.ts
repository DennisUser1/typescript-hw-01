export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};

function getRoleDescription(role: UserRole): string {
    return RoleDescription[role];
}

console.log(getRoleDescription(UserRole.admin));