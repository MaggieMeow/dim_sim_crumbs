import Link from "next/link";

interface TreeNode {
  name: string;
  children: TreeNode[];
  value?: number;
}

interface TreeProps {
  tree: TreeNode[];
}

export const CatList: React.FC<TreeProps> = ({ tree }) => {
  const renderTree = (nodes: TreeNode[], level: number = 0) => {
    return (
      <ul>
        {nodes.map((node) => (
          <li key={node.name} className={`pl-${level * 4}`}>
            <Link href={`/items?subcat=${btoa(node.name)}`}>{node.name}</Link>
            {node.children.length > 0 && renderTree(node.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderTree(tree)}</div>;
};
