'use strict';

const Perms = Object.freeze({
        Aa: [ 3, 1, 5, 6, 4, 11, 0, 7, 8, 9, 10, 2 ],
        Ab: [ 6, 1, 11, 0, 4, 2, 3, 7, 8, 9, 10, 5 ],
        E : [ 3, 1, 11, 0, 4, 8, 9, 7, 5, 6, 10, 2 ],
        H : [ 0, 7, 2, 3, 10, 5, 6, 1, 8, 9, 4, 11 ],
        Z : [ 0, 10, 2, 3, 7, 5, 6, 4, 8, 9, 1, 11 ],
        Ua: [ 0, 10, 2, 3, 1, 5, 6, 7, 8, 9, 4, 11 ],
        Ub: [ 0, 4, 2, 3, 10, 5, 6, 7, 8, 9, 1, 11 ],
        T : [ 0, 1, 5, 6, 10, 2, 3, 7, 8, 9, 4, 11 ],
        Y : [ 6, 10, 2, 3, 4, 11, 0, 7, 8, 9, 1, 5 ], 
        F : [ 0, 7, 5, 6, 4, 2, 3, 1, 8, 9, 10, 11 ],
        V : [ 6, 4, 2, 3, 1, 11, 0, 7, 8, 9, 10, 5 ],
        Ja: [ 9, 1, 2, 3, 4, 5, 6, 10, 11, 0, 7, 8 ],
        Jb: [ 0, 1, 5, 6, 7, 2, 3, 4, 8, 9, 10, 11 ],
        Ra: [ 3, 1, 11, 0, 4, 5, 6, 10, 8, 9, 7, 2 ],
        Rb: [ 3, 1, 11, 0, 7, 5, 6, 4, 8, 9, 10, 2 ],
        Na: [ 0, 1, 8, 9, 10, 5, 6, 7, 2, 3, 4, 11 ],
        Nb: [ 6, 1, 2, 3, 10, 11, 0, 7, 8, 9, 4, 5 ],
        Ga: [ 6, 10, 2, 3, 4, 8, 9, 1, 11, 0, 7, 5 ],
        Gb: [ 9, 7, 2, 3, 4, 11, 0, 10, 5, 6, 1, 8 ],
        Gc: [ 0, 4, 8, 9, 7, 2, 3, 1, 5, 6, 10, 11 ],
        Gd: [ 0, 7, 5, 6, 1, 8, 9, 4, 2, 3, 10, 11 ]
});

function permute() {
    const startSide = Math.floor(Math.random() * 4);
    const currentRotation = Math.floor(Math.random() * 4);
    const rotationOffset = currentRotation * 3;
    const permIndex = Math.floor(Math.random() * sortedPermKeys.length);
    
    const currentSides = [ 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3 ];
    const currentPerm = sortedPermKeys[permIndex];
    const perm = Perms[currentPerm];

    for (let i = 0; i < perm.length; i++) {
        const targetIndex = perm[i];
        const colorIndex = (startSide + Math.floor(targetIndex / 3)) % 4;
        currentSides[(rotationOffset + i) % 12] = colorIndex;
    }
    
    return {
        perm: currentPerm,
        rotation: currentRotation,
        sides: currentSides
    }
}

