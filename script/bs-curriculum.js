/* Javascript File used to create the Vis.js graph network in the ICS Curriculum page
 * Implemented by Jun Okabe
 */

// graph nodes
const courses1 = [
    {id: 1, level: 1, label: 'ICS111, ICS141'},
    {id: 2, level: 2, label: 'ICS211, ICS241'},
    {id: 3, level: 3, label: 'ICS212, ICS311, ICS314'},
    {id: 4, level: 4, label: 'ICS312, ICS313, ICS351, ICS321, ICS332'},
    {id: 5, level: 4, label: 'ICS312, ICS313, ICS451, ICS321, ICS332'},
    {id: 6, level: 4, label: 'ICS312, ICS361, ICS351, ICS321, ICS332'},
    {id: 7, level: 4, label: 'ICS312, ICS361, ICS451, ICS321, ICS332'},
    {id: 8, level: 4, label: 'ICS331, ICS313, ICS351, ICS321, ICS332'},
    {id: 9, level: 4, label: 'ICS331, ICS313, ICS451, ICS321, ICS332'},
    {id: 10, level: 4, label: 'ICS331, ICS361, ICS351, ICS321, ICS332'},
    {id: 11, level: 4, label: 'ICS331, ICS361, ICS451, ICS321, ICS332'},
    {id: 12, level: 5, label: 'Five 400-level ICS Courses'},
]

// graph edges
const courselinks1 = [
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
]

// place the graph at div with "bachelor-science-network" id
const container1 = document.getElementById('bachelor-science-network');

// set up graph object
const data1 = {
    nodes: new vis.DataSet(courses1),
    edges: new vis.DataSet(courselinks1)
};

// customize graph object
const options1 = {
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
            levelSeparation: 400,
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
const network1 = new vis.Network(container1, data1, options1);