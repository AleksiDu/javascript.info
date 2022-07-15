"use strict";

// user has a reference to the object
let user = {
    name: "John"
};

// Copy reference from user to admin
let admin = user;

// Overwrite user value
user = null;

console.log(user);
console.log(admin);

/**
 *  Interlinked objects
 */
console.log(">>> Interlinked objects <<<");

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});


console.log("family =", family);

delete family.father;
delete family.mother.husband;

console.log(">>after deleting<< \nfamily =", family);

// Unreachable island
console.log(">>> Unreachable island <<<");

family = null;

console.log("family = ", family);

// Internal algorithms
console.log(">>> Internal algorithms <<<");

// V8: Garbage Collection.
// Here is a pseudo-code version of the algorithm:

/*

def scavenge():
  swap(fromSpace, toSpace)
  allocationPtr = toSpace.bottom
  scanPtr = toSpace.bottom

  for i = 0..len(roots):
    root = roots[i]
    if inFromSpace(root):
      rootCopy = copyObject(&allocationPtr, root)
      setForwardingAddress(root, rootCopy)
      roots[i] = rootCopy

  while scanPtr < allocationPtr:
    obj = object at scanPtr
    scanPtr += size(obj)
    n = sizeInWords(obj)
    for i = 0..n:
      if isPointer(obj[i]) and not inOldSpace(obj[i]):
        fromNeighbor = obj[i]
        if hasForwardingAddress(fromNeighbor):
          toNeighbor = getForwardingAddress(fromNeighbor)
        else:
          toNeighbor = copyObject(&allocationPtr, fromNeighbor)
          setForwardingAddress(fromNeighbor, toNeighbor)
        obj[i] = toNeighbor

def copyObject(*allocationPtr, object):
  copy = *allocationPtr
  *allocationPtr += size(object)
  memcpy(copy, object, size(object))
  return copy

*/
