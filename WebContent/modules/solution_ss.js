const Cases = Object.freeze({
    Epll: [ "EPLL", "Two visible sets of headlights" ],
    DiagCp: [ "Diagonal CP", "Each side's corners are opposite colors" ],
    AdjCpA: [ "Adjacent CP - A", "Two visible blocks, no visible set of headlights" ],
    AdjCpB: [ "Adjacent CP - B", "One visible block, one visible set of headlights" ],
    AdjCpC: [ "Adjacent CP - C", "No visible set of headlights, one visible block" ],
    AdjCpD: [ "Adjacent CP - D", "No visible blocks, one visible set of headlights" ],
    AdjCpE: [ "Adjacent CP - E", "No visible blocks, no visible set of headlights" ]
});
    
const ColorCount = Object.freeze({
    Three: "Only three unique colors visible",
    Four: "More than three unique colors visible"
});
    
const Blocks = Object.freeze({
    None: "No blocks",
    Three: "3x1 Block",
    ThreeLeft: "3x1 block on the left",
    ThreeRight: "3x1 bloc on the right",
    One: "One 2x1 block",
    Two: "Two 2x1 blocks",
    Both: "3x1 block and 2x1 block",
    Left: "The block is on the left",
    Right: "The block is on the right",
    Inner: "Inner block",
    Outer: "Outer block",
    OuterOpposite: "Outer block with opposite color",
    OuterAdjacent: "Outer block with adjacent color",
    BothInner: "Both inner blocks",
    BothOuter: "Both outer blocks",
    OuterAndInner: "One outer 2x1 block and one inner 2x1 block",
    RightOpposite: "Right block with opposite color",
    LeftOpposite: "Left block with opposite color",
    Adjacent: "The block has an adjacent color",
    Opposite: "The block has an opposite color",
    LeftOutside: "The left block is outside",
    RightOutside: "The right block is outside",
    TwoInside: "The 2x1 block is on the inside",
    TwoOutside: "The 2x1 block is on the outside",
});
    
const Headlights = Object.freeze({
    Left: "The headlights are on the left",
    Right: "The headlights are on the right",
    NoThreeOpposite: "No 3x1 Blocks and At Least One Opposite Edge",
    NoThreeNoOpposite: "No 3x1 Blocks and No Opposite Edges",
    Adjacent: "Adjacent edge between headlights",
    Opposite: "Opposite edge between headlights",
    BothOpposite: "Opposite edge between both headlights",
    LeftOpposite: "Opposite edge between only left headlights",
    RightOpposite: "Opposite edge between only right headlights"
});
    
const Checkers = Object.freeze({
    None: "No checker pattern",
    Headlights: "Checker pattern on headlights and adjacent corner",
    NoHeadlights: "No checker pattern on headlights and adjacent corner",
    Left: "Checker pattern only on left headlights and adjacent corner",
    Right: "Checker pattern only on right headlights and adjacent corner",
    Both: "Checker pattern across both sides",
    Inside: "Checker pattern on inside four faces",
    Outside: "Checker pattern on outside four faces"
});
    
const Misc = Object.freeze({
    OppositeOuterRight: "Opposite edge and outer corner on right",
    OppositeOuterLeft: "Opposite edge and outer corner on left",
    OppositeInnerRight: "Opposite edge and inner corner on right",
    OppositeInnerLeft: "Opposite edge and inner corner on left"
});
    
const Solution = Object.freeze({
    Aa: {
        0: { header: Cases.AdjCpA, steps: [ Blocks.BothInner, Blocks.RightOpposite ] },
        1: { header: Cases.AdjCpC, steps: [ Blocks.OuterOpposite, ColorCount.Four, Blocks.Left ] },
        2: { header: Cases.AdjCpD, steps: [ ColorCount.Four, Headlights.Adjacent, Headlights.Right, Checkers.NoHeadlights ] },
        3: { header: Cases.AdjCpB, steps: [ Blocks.Outer, ColorCount.Three, Blocks.Right ] }
    },
    Ab: {
        0: { header: Cases.AdjCpA, steps: [ Blocks.BothInner, Blocks.LeftOpposite ] },
        1: { header: Cases.AdjCpB, steps: [ Blocks.Outer, ColorCount.Three, Blocks.Left ] },
        2: { header: Cases.AdjCpD, steps: [ ColorCount.Four, Headlights.Adjacent, Headlights.Left, Checkers.NoHeadlights ] },
        3: { header: Cases.AdjCpC, steps: [ Blocks.OuterOpposite, ColorCount.Four, Blocks.Right ] }
    },
    E: {
        0: { header: Cases.DiagCp, steps: [ Blocks.None, Checkers.None ] },
        1: { header: Cases.DiagCp, steps: [ Blocks.None, Checkers.None ] },
        2: { header: Cases.DiagCp, steps: [ Blocks.None, Checkers.None ] },
        3: { header: Cases.DiagCp, steps: [ Blocks.None, Checkers.None ] }
    },
    F: {
        0: { header: Cases.AdjCpC, steps: [ Blocks.Three ] },
        1: { header: Cases.AdjCpE, steps: [ ColorCount.Three ] },
        2: { header: Cases.AdjCpE, steps: [ ColorCount.Three ] },
        3: { header: Cases.AdjCpC, steps: [ Blocks.Three ] }
    },
    Ga: {
        0: { header: Cases.AdjCpD, steps: [ Headlights.Adjacent, ColorCount.Four, Headlights.Right, Checkers.Headlights ] },
        1: { header: Cases.AdjCpB, steps: [ Blocks.Outer, ColorCount.Four, Blocks.Right ] },
        2: { header: Cases.AdjCpC, steps: [ Blocks.Inner, Blocks.Adjacent, Blocks.Left ] },
        3: { header: Cases.AdjCpE, steps: [ ColorCount.Four, Misc.OppositeOuterRight ] }
    },
    Gb: {
        0: { header: Cases.AdjCpD, steps: [ Headlights.Opposite, ColorCount.Four, Headlights.Left ] },
        1: { header: Cases.AdjCpC, steps: [ Blocks.OuterOpposite, ColorCount.Three, Blocks.Right ] },
        2: { header: Cases.AdjCpC, steps: [ Blocks.Inner, Blocks.Opposite, Blocks.Left ] },
        3: { header: Cases.AdjCpD, steps: [ Headlights.Opposite, Blocks.Three, Headlights.Right ] }
    },
    Gc: {
        0: { header: Cases.AdjCpB, steps: [ Blocks.Outer, ColorCount.Four, Blocks.Left ] },
        1: { header: Cases.AdjCpD, steps: [ Headlights.Adjacent, ColorCount.Four, Headlights.Left, Checkers.Headlights ] },
        2: { header: Cases.AdjCpE, steps: [ ColorCount.Four, Misc.OppositeOuterLeft ] },
        3: { header: Cases.AdjCpC, steps: [ Blocks.Inner, Blocks.Adjacent, Blocks.Right ] }            
    },
    Gd: {
        0: { header: Cases.AdjCpC, steps: [ Blocks.OuterOpposite, ColorCount.Three, Blocks.Left ] },
        1: { header: Cases.AdjCpD, steps: [ Headlights.Opposite, ColorCount.Four, Headlights.Right ] },
        2: { header: Cases.AdjCpD, steps: [ Headlights.Opposite, Blocks.Three, Headlights.Left ] },
        3: { header: Cases.AdjCpC, steps: [ Blocks.Inner, Blocks.Opposite, Blocks.Right ] }
    },
    H: {
        0: { header: Cases.Epll, steps: [ Headlights.NoThreeOpposite, Headlights.BothOpposite ] },
        1: { header: Cases.Epll, steps: [ Headlights.NoThreeOpposite, Headlights.BothOpposite ] },
        2: { header: Cases.Epll, steps: [ Headlights.NoThreeOpposite, Headlights.BothOpposite ] },
        3: { header: Cases.Epll, steps: [ Headlights.NoThreeOpposite, Headlights.BothOpposite ] }
    },
    Ja: {
        0: { header: Cases.AdjCpA, steps: [ Blocks.OuterAndInner, Blocks.LeftOutside ] },
        1: { header: Cases.AdjCpA, steps: [ Blocks.Both, Blocks.ThreeLeft, Blocks.TwoInside ] },
        2: { header: Cases.AdjCpA, steps: [ Blocks.Both, Blocks.ThreeRight, Blocks.TwoOutside ] },
        3: { header: Cases.AdjCpA, steps: [ Blocks.OuterAndInner, Blocks.LeftOutside ] }
    },
    Jb: {
        0: { header: Cases.AdjCpA, steps: [ Blocks.Both, Blocks.ThreeLeft, Blocks.TwoOutside ] },
        1: { header: Cases.AdjCpA, steps: [ Blocks.OuterAndInner, Blocks.RightOutside ] },
        2: { header: Cases.AdjCpA, steps: [ Blocks.OuterAndInner, Blocks.RightOutside ] },
        3: { header: Cases.AdjCpA, steps: [ Blocks.Both, Blocks.ThreeRight, Blocks.TwoInside ] }
    },
    Na: {
        0: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.RightOutside ] },
        1: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.RightOutside ] },
        2: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.RightOutside ] },
        3: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.RightOutside ] }
    },
    Nb: {
        0: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.LeftOutside ] },
        1: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.LeftOutside ] },
        2: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.LeftOutside ] },
        3: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.LeftOutside ] }
    },
    Ra: {
        0: { header: Cases.AdjCpD, steps: [ Headlights.Adjacent, ColorCount.Three, Headlights.Right ] },
        1: { header: Cases.AdjCpB, steps: [ Blocks.Inner, Headlights.Adjacent, Blocks.Right ] },
        2: { header: Cases.AdjCpC, steps: [ Blocks.OuterAdjacent, ColorCount.Three, Blocks.Left ] },
        3: { header: Cases.AdjCpE, steps: [ ColorCount.Four, Misc.OppositeInnerRight ] }
    },
    Rb: {
        0: { header: Cases.AdjCpB, steps: [ Blocks.Inner, Headlights.Adjacent, Blocks.Left ] },
        1: { header: Cases.AdjCpD, steps: [ Headlights.Adjacent, ColorCount.Three, Headlights.Left ] },
        2: { header: Cases.AdjCpE, steps: [ ColorCount.Four, Misc.OppositeInnerLeft ] },
        3: { header: Cases.AdjCpC, steps: [ Blocks.OuterAdjacent, ColorCount.Three, Blocks.Right ] }
    },
    T: {
        0: { header: Cases.AdjCpB, steps: [ Blocks.Inner, Headlights.Opposite ] },
        1: { header: Cases.AdjCpC, steps: [ Blocks.OuterAdjacent, ColorCount.Four ] },
        2: { header: Cases.AdjCpC, steps: [ Blocks.OuterAdjacent, ColorCount.Four ] },
        3: { header: Cases.AdjCpB, steps: [ Blocks.Inner, Headlights.Opposite ] }
    },
    Ua: {
        0: { header: Cases.Epll, steps: [ Blocks.Three, Blocks.Right, Headlights.Opposite ] },
        1: { header: Cases.Epll, steps: [ Blocks.Three, Blocks.Left, Headlights.Adjacent ] },
        2: { header: Cases.Epll, steps: [ Headlights.NoThreeNoOpposite, Checkers.Left ] },
        3: { header: Cases.Epll, steps: [ Headlights.NoThreeOpposite, Headlights.RightOpposite ] }            
    },
    Ub: {
        0: { header: Cases.Epll, steps: [ Blocks.Three, Blocks.Right, Headlights.Adjacent ] },
        1: { header: Cases.Epll, steps: [ Blocks.Three, Blocks.Left, Headlights.Opposite ] },
        2: { header: Cases.Epll, steps: [ Headlights.NoThreeOpposite, Headlights.LeftOpposite ] },
        3: { header: Cases.Epll, steps: [ Headlights.NoThreeNoOpposite, Checkers.Right ] }
    },
    V: {
        0: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.BothInner ] },
        1: { header: Cases.DiagCp, steps: [ Blocks.One, Blocks.Outer ] },
        2: { header: Cases.DiagCp, steps: [ Blocks.None, Checkers.Inside ] },
        3: { header: Cases.DiagCp, steps: [ Blocks.One, Blocks.Outer ] }
    },
    Y: {
        0: { header: Cases.DiagCp, steps: [ Blocks.One, Blocks.Inner ] },
        1: { header: Cases.DiagCp, steps: [ Blocks.Two, Blocks.BothOuter ] },
        2: { header: Cases.DiagCp, steps: [ Blocks.One, Blocks.Inner ] },
        3: { header: Cases.DiagCp, steps: [ Blocks.None, Checkers.Outside ] }
    },
    Z: {
        0: { header: Cases.Epll, steps: [ Headlights.NoThreeNoOpposite, Checkers.None ] },
        1: { header: Cases.Epll, steps: [ Headlights.NoThreeNoOpposite, Checkers.Both ] },
        2: { header: Cases.Epll, steps: [ Headlights.NoThreeNoOpposite, Checkers.None ] },
        3: { header: Cases.Epll, steps: [ Headlights.NoThreeNoOpposite, Checkers.Both ] }
    }
});

function solutionSteps(perm, rotation) {
    return Solution[perm][rotation];
}
