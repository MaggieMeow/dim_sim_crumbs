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
  const renderTree = (nodes: TreeNode[], level: number = 1) => {
    console.log(nodes, level);
    return (
      <ul style={{ paddingLeft: level * 12 }}>
        {nodes.map((node) => (
          <li key={node.name}>
            <Link
              href={`/items?subcat=${btoa(node.name)}`}
              className="hover:underline"
            >
              {node.name}
            </Link>
            {node.children.length > 0 && renderTree(node.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderTree(tree)}</div>;
};
