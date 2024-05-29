/**
 * @description array to tree
 */

interface IArrayItem {
    id: number
    name: string 
    parentId: number
}

interface ITreeNode {
    id: number
    name: string
    children?: ITreeNode[]
}

function convert(arr: IArrayItem[]): ITreeNode | null {
    // 用于Id和treeNode的映射
    const idToTreeNode:Map<number, ITreeNode> = new Map()
    let root = null

    arr.forEach(item => {
        const {id, name, parentId} = item
        
        const treeNode: ITreeNode = {id, name}
        idToTreeNode.set(id, treeNode)

        const parentNode = idToTreeNode.get(parentId)
        if(parentNode) {
            if(parentNode.children == null) parentNode.children = []
            parentNode.children.push(treeNode)
        }

        // 找到根结点
        if(parentId === 0) root = treeNode
    })

    return root
}

let arr = [
    {id:1, name:"部门A", parentId:0},
    {id:2, name:"部门B", parentId:1},
    {id:3, name:"部门C", parentId:1},
    {id:4, name:"部门D", parentId:2},
    {id:5, name:"部门E", parentId:2},
    {id:6, name:"部门F", parentId:3}
  ]

console.log(convert(arr))
