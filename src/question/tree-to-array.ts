/**
 * @description 树转数组
 */

const tree = {
    id: 1,
    name: '部门A',
    children: [
        {
            id: 2,
            name: '部门B',
            children: [
                {id: 4, name: '部门D'},
                {id: 5, name: '部门E'}
            ]
        },
        {
            id: 3,
            name: '部门C',
            children: [
                {id: 6, name: '部门F'},
            ]
        }
    ]
}

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

// 思路：
// 1. 广度优先遍历
// 2. 将树节点转位Array Item, push 到数组中
// 3. 根据父子关系，找到Array Item的parentId
function convert2(root: ITreeNode): IArrayItem[] {
    const nodeToParent:Map<ITreeNode, ITreeNode> = new Map()

    const arr:IArrayItem[] = []

    // 广度优先遍历，queue
    const queue:ITreeNode[] = []
    queue.unshift(root) // 根结点入队

    while(queue.length > 0) {
        const curNode = queue.pop()
        if(curNode == null) break
        
        const {id, name, children = []} = curNode

        // 创建数组item并push
        const parentNode = nodeToParent.get(curNode)
        const parentId = parentNode?.id || 0
        const item = {id, name, parentId}
        arr.push(item)

        // 子节点入队
        children.forEach(child => {
            // 映射 parent
            nodeToParent.set(child, curNode)

            //入队
            queue.unshift(child)
        })

    }

    return arr
}

console.log(convert2(tree))
