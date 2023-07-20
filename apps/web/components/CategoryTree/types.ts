export type CategoryTreeItem = {
  name: string;
  count?: number;
  href: string;
};

export type CategoryTreeProps = {
  parent?: CategoryTreeItem;
  categories: CategoryTreeItem[];
};

export type CategoryTreeItemType = {
  name: string;
  href: string;
  selected?: boolean;
  count?: number;
};
