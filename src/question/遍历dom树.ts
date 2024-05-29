/**
 * @description 遍历 DOM tree
 */


/**
 * 访问节点
 * @param n node
 */

function visitNode(n: Node) {
    if( n instanceof Comment ) console.info('Comment node ----', n.textContent)
    if( n instanceof Text ) {
        const t = n.textContent?.trim() // 排除空字符串
        if(t) {
            console.info('Text node ----', t)
        }
    } 
    if( n instanceof HTMLElement ) console.info('HTMLElement node ----', `<${n.tagName.toLowerCase()}>`)
}

/**
 * 深度优先（一条一条的遍历）
 * @param root dom node
 */
function depthFirstTraverse(root: Node) {
    visitNode(root)

    const childNodes = root.childNodes
    if(childNodes.length) {
        childNodes.forEach(child => {
            depthFirstTraverse(child)
        })
    }
}


function depthFirstTraverse2(root: Node) {
    const stack:Node[] = [] // 数组 vs 链表

    // 根结点入队列
    stack.push(root)

    while (stack.length > 0) {
        const curNode = stack.pop()
        if(curNode == null) break

        visitNode(curNode)
        const childNodes = curNode.childNodes
        if(childNodes.length > 0) {
            Array.from(childNodes).reverse().forEach(child => {
                stack.push(child)
            })
        }

    }
}

/**
 * 广度优先（一层一层的遍历）
 * @param root dom node
 */

function breathFirstTraverse(root: Node) {
    const queue:Node[] = [] // 数组 vs 链表

    // 根结点入队列
    queue.unshift(root)

    while (queue.length > 0) {
        const curNode = queue.pop()
        if(curNode == null) break

        visitNode(curNode)
        const childNodes = curNode.childNodes
        if(childNodes.length) {
            childNodes.forEach(child => {
                queue.unshift(child)
            })
        }

    }

}


const box = document.getElementById('box')
if(box == null) throw new Error('box is null')
breathFirstTraverse(box)
