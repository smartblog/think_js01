// Method 1

const arr = Array.from(document.childNodes);
const split = "";

arr.forEach(element => showNode(element, split));

function showNode(node, split) {
    console.log(split + node.nodeType + " " + node.nodeName);

    if (node.childNodes.length > 0) {
      Array.from(node.childNodes).forEach(element => showNode(element, split + "  "));
    }
}

console.log("---------------------------");

// Method 2

const firstNode = document.firstChild;
let node = firstNode;

while (node !== null) {
    let split = "";
    showNodeInfo(node, split);
    node = node.nextSibling;
}

function showNodeInfo(node, split) {
    split += " ";
    console.log(split + node.nodeType + " " + node.nodeName);
    showNodeChilds(node, split);
}

function showNodeChilds(node, split) {
    if (node.childNodes.length > 0) {
        let child = node.firstChild
        split += " ";
        while ( child !== null ) {
          showNodeInfo(child, split);
          child = child.nextSibling;
        }
    }
}

console.log("---------------------------");

// Method 3

let nodes = document.childNodes;
let split2 = "";

for (let i = 0 ; i < nodes.length ; i++ ) {
    showNodeInfo2(nodes[i], split2);
}

function showNodeInfo2(node, split) {
    console.log(split + node.nodeType + " " + node.nodeName);

    if (node.childNodes.length > 0) {
        showNodeChilds2(node, split += "  ");
    }
}

function showNodeChilds2(node, split) {
    let childs = node.childNodes;
    for (let i = 0 ; i < childs.length ; i++ ) {
        showNodeInfo2(childs[i], split)
    }
}
