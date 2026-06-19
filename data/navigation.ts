export interface NavItem {
  label: string;
  href: string;
  icon: string;
  activeIcon: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/', icon: 'Home', activeIcon: 'Home' },
  { label: 'Categories', href: '/categories', icon: 'LayoutGrid', activeIcon: 'LayoutGrid' },
  { label: 'Saved', href: '/saved', icon: 'Bookmark', activeIcon: 'BookmarkCheck' },
  { label: 'Profile', href: '/profile', icon: 'User', activeIcon: 'UserCheck' },
];
