export async function getLeftMenuData() {
  return [
    {
      divider: true,
    },
    {
      title: 'Manage Users',
      key: 'manageUsers',
      url: '/manage/users',
      icon: 'icmn icmn-users',
    },
  ]
}
export async function getTopMenuData() {
  return [
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog',
    },
    {
      title: 'Docs',
      key: 'documentation',
      url: 'https://docs.cleanuitemplate.com/react/getting-started',
      target: '_blank',
      icon: 'icmn icmn-books',
    },
    {
      title: 'Manage Users',
      key: 'manageUsers',
      icon: 'icmn icmn-users',
      url: '/manage/users',
    },
  ]
}
