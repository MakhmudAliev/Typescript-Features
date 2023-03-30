const userRole = {
  ADMIN: 'admin',
  USER: 'user',
} as const;

type UserRole = (typeof userRole)[keyof typeof userRole];

function fn(role: UserRole) {
  console.log(role);
}

fn('admin');
fn(userRole.ADMIN);

// shorthand
type ValueOf<T> = T[keyof T];
type UserRoleSame = ValueOf<typeof userRole>;

function fn2(role: UserRoleSame) {
  console.log(role);
}

fn2('user');
