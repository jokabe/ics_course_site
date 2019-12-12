/* Javascript File used to create the Vis.js graph network in the ICS Curriculum page
 * Implemented by Jun Okabe
 */

// graph nodes
const courses2 = [
    {id: 1, level: 1, label: 'ICS111, ICS141'},
    {id: 2, level: 2, label: 'ICS211, ICS222, ICS241'},
    {id: 3, level: 3, label: 'ICS212, ICS311, ICS314, ICS355'},
    {id: 4, level: 4, label: 'ICS312, ICS313, ICS351, ICS321, ICS332'},
    {id: 5, level: 4, label: 'ICS312, ICS313, ICS451, ICS321, ICS332'},
    {id: 6, level: 4, label: 'ICS312, ICS361, ICS351, ICS321, ICS332'},
    {id: 7, level: 4, label: 'ICS312, ICS361, ICS451, ICS321, ICS332'},
    {id: 8, level: 4, label: 'ICS331, ICS313, ICS351, ICS321, ICS332'},
    {id: 9, level: 4, label: 'ICS331, ICS313, ICS451, ICS321, ICS332'},
    {id: 10, level: 4, label: 'ICS331, ICS361, ICS351, ICS321, ICS332'},
    {id: 11, level: 4, label: 'ICS331, ICS361, ICS451, ICS321, ICS332'},
    {id: 12, level: 5, label: 'One 400-level ICS Course'},
    {id: 13, level: 5, label: 'Four 300-level Courses'},
]

// graph edges
const courselinks2 = [
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 3, to: 4},
    {from: 3, to: 5},
    {from: 3, to: 6},
    {from: 3, to: 7},
    {from: 3, to: 8},
    {from: 3, to: 9},
    {from: 3, to: 10},
    {from: 3, to: 11},
    {from: 4, to: 12},
    {from: 5, to: 12},
    {from: 6, to: 12},
    {from: 7, to: 12},
    {from: 8, to: 12},
    {from: 9, to: 12},
    {from: 10, to: 12},
    {from: 11, to: 12},
    {from: 4, to: 13},
    {from: 5, to: 13},
    {from: 6, to: 13},
    {from: 7, to: 13},
    {from: 8, to: 13},
    {from: 9, to: 13},
    {from: 10, to: 13},
    {from: 11, to: 13},
]

// place the graph at div with "bachelor-arts-network" id
const container2 = document.getElementById('bachelor-arts-network');

// set up graph object
const data2 = {
    nodes: new vis.DataSet(courses2),
    edges: new vis.DataSet(courselinks2)
};

// customize graph object
const options2 = {
    // node customization
    nodes: {
        shape: 'dot',
        size: 25,
        color : {
            background: '#36d1dc'
        },
        font: {
          size: 22,
          color: '#ffffff'
        },
        borderWidth: 2
    },

    // edge customization
    edges: {
        arrows: 'to',
        width: 2,
        hightlight: '#000428'
    },

    // setup the orientation of the graph
    layout: {
        hierarchical: {
            direction: 'LR',
            nodeSpacing: 20,
            levelSeparation: 450,
        }
    },

    // other graph customization (Ex. graph movement, etc.)
    physics: {
        hierarchicalRepulsion: {
            nodeDistance: 200, // distance between each node
            stabilization: true // stabilize on load
        }
    }
};

// create the graph network
const network2 = new vis.Network(container2, data2, options2);